import { loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { docsContentRoute, docsImageRoute, docsRoute } from './shared';

function docsOptions() {
  return {
    docs: {
      schema: pageSchema,
      postprocess: {
        includeProcessedMarkdown: true,
      },
    },
    meta: {
      schema: metaSchema,
    },
  } as const;
}

const docs = defineDocs({
  dir: 'content/docs',
  ...docsOptions(),
});

const articles = defineDocs({
  dir: 'content/articles',
  ...docsOptions(),
});

const changelogs = defineDocs({
  dir: 'content/changelogs',
  ...docsOptions(),
});

const journal = defineDocs({
  dir: 'content/journal',
  ...docsOptions(),
});

const sourcePlugins = [lucideIconsPlugin()];

export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: sourcePlugins,
});

export const articlesSource = loader({
  baseUrl: '/articles',
  source: articles.toFumadocsSource(),
  plugins: sourcePlugins,
});

export const changelogsSource = loader({
  baseUrl: '/changelogs',
  source: changelogs.toFumadocsSource(),
  plugins: sourcePlugins,
});

export const journalSource = loader({
  baseUrl: '/journal',
  source: journal.toFumadocsSource(),
  plugins: sourcePlugins,
});

export function getPageImageUrl(page: (typeof source)['$inferPage']) {
  const segments = [...page.slugs, 'image.webp'];

  return {
    segments,
    url: '/' + [page.locale, ...docsImageRoute.split('/'), ...segments].filter(Boolean).join('/'),
  };
}

export function getPageMarkdownUrl(page: (typeof source)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: '/' + [page.locale, ...docsContentRoute.split('/'), ...segments].filter(Boolean).join('/'),
  };
}

export async function getLLMText(page: (typeof source)['$inferPage']) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title} (${page.url})\n\n${processed}`;
}
