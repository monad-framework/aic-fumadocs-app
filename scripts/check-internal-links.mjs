import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, extname, join, relative, sep } from 'node:path';

const root = process.cwd();
const textExtensions = new Set(['.md', '.mdx', '.ts', '.tsx', '.js', '.jsx', '.json']);
const scanRoots = ['app', 'components', 'content', 'lib'].filter((path) => existsSync(join(root, path)));

const collections = [
  ['content/docs', '/docs'],
  ['content/building-monad', '/building-monad'],
  ['content/articles', '/articles'],
  ['content/changelogs', '/changelogs'],
  ['content/journal', '/journal'],
];

function walk(directory) {
  const out = [];
  if (!existsSync(directory)) return out;

  for (const entry of readdirSync(directory)) {
    const absolute = join(directory, entry);
    const stats = statSync(absolute);
    if (stats.isDirectory()) out.push(...walk(absolute));
    else out.push(absolute);
  }
  return out;
}

function normalizePath(value) {
  const withoutFragment = value.split('#', 1)[0].split('?', 1)[0];
  if (!withoutFragment) return '/';
  if (withoutFragment === '/') return '/';
  return withoutFragment.replace(/\/+$/, '') || '/';
}

function routeForContent(file, directory, base) {
  const rel = relative(join(root, directory), file).split(sep).join('/');
  const withoutExtension = rel.replace(/\.mdx?$/, '');
  const local = withoutExtension === 'index'
    ? ''
    : withoutExtension.endsWith('/index')
      ? withoutExtension.slice(0, -'/index'.length)
      : withoutExtension;
  return normalizePath(`${base}${local ? `/${local}` : ''}`);
}

function appRoutePattern(directory) {
  const rel = relative(join(root, 'app'), directory).split(sep).join('/');
  const segments = rel.split('/').filter(Boolean).filter((segment) => !(segment.startsWith('(') && segment.endsWith(')')));

  let pattern = '^';
  let hasDynamic = false;
  for (const segment of segments) {
    if (/^\[\[\.\.\.[^\]]+\]\]$/.test(segment)) {
      pattern += '(?:/.*)?';
      hasDynamic = true;
    } else if (/^\[\.\.\.[^\]]+\]$/.test(segment)) {
      pattern += '/.+';
      hasDynamic = true;
    } else if (/^\[[^\]]+\]$/.test(segment)) {
      pattern += '/[^/]+';
      hasDynamic = true;
    } else {
      pattern += `/${segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`;
    }
  }

  pattern += '/?$';
  return { regex: new RegExp(pattern), hasDynamic, exact: hasDynamic ? null : normalizePath(`/${segments.join('/')}`) };
}

const exactRoutes = new Set(['/']);
const routePatterns = [];

for (const [directory, base] of collections) {
  for (const file of walk(join(root, directory))) {
    if (/\.mdx?$/.test(file)) exactRoutes.add(routeForContent(file, directory, base));
  }
}

for (const file of walk(join(root, 'app'))) {
  if (!/(?:^|\/)(?:page|route)\.(?:ts|tsx|js|jsx)$/.test(file.split(sep).join('/'))) continue;
  const route = appRoutePattern(dirname(file));
  if (route.exact) exactRoutes.add(route.exact);
  routePatterns.push(route.regex);
}

const nextConfigPath = join(root, 'next.config.mjs');
if (existsSync(nextConfigPath)) {
  const config = readFileSync(nextConfigPath, 'utf8');
  for (const match of config.matchAll(/source:\s*['"](\/[^'"]+)['"]/g)) {
    exactRoutes.add(normalizePath(match[1]));
  }
}

const publicRoot = join(root, 'public');
const publicPaths = new Set(
  walk(publicRoot).map((file) => `/${relative(publicRoot, file).split(sep).join('/')}`),
);

function targetExists(target) {
  const normalized = normalizePath(target);
  if (exactRoutes.has(normalized)) return true;
  if (publicPaths.has(normalized)) return true;
  return routePatterns.some((pattern) => pattern.test(normalized));
}

function extractInternalLinks(source) {
  const links = new Set();
  const patterns = [
    /\]\((\/[^)\s]+)\)/g,
    /\bhref\s*=\s*['"](\/[^'"]+)['"]/g,
    /\bhref\s*:\s*['"](\/[^'"]+)['"]/g,
    /\baction\s*=\s*['"](\/[^'"]+)['"]/g,
    /\baction\s*:\s*['"](\/[^'"]+)['"]/g,
  ];

  for (const pattern of patterns) {
    for (const match of source.matchAll(pattern)) links.add(match[1]);
  }

  return links;
}

const failures = [];
for (const scanRoot of scanRoots) {
  for (const file of walk(join(root, scanRoot))) {
    if (!textExtensions.has(extname(file))) continue;
    const source = readFileSync(file, 'utf8');
    for (const target of extractInternalLinks(source)) {
      if (!targetExists(target)) {
        failures.push({ file: relative(root, file).split(sep).join('/'), target });
      }
    }
  }
}

failures.sort((left, right) => left.file.localeCompare(right.file) || left.target.localeCompare(right.target));

if (failures.length > 0) {
  console.error(`Found ${failures.length} unresolved internal link${failures.length === 1 ? '' : 's'}:`);
  for (const failure of failures) console.error(`- ${failure.file}: ${failure.target}`);
  process.exit(1);
}

console.log(`Internal link check passed: ${exactRoutes.size} exact routes plus ${routePatterns.length} route patterns.`);
