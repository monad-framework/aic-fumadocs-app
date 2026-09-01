import {
  articlesSource,
  buildingMonadSource,
  changelogsSource,
  journalSource,
  source,
} from '@/lib/source';

export type FeedEntry = {
  id: string;
  title: string;
  description: string;
  path: string;
  published: string;
  updated?: string;
  author?: string;
  category: 'article' | 'journal' | 'changelog';
};

function normalizedDescription(value: string | undefined): string {
  return value?.trim() || 'A new publication from AIC Engineering.';
}

export function getFeedEntries(): FeedEntry[] {
  const entries: FeedEntry[] = [];

  for (const page of articlesSource.getPages()) {
    const article = page.data.article;
    if (!article) continue;

    entries.push({
      id: article.id,
      title: page.data.title,
      description: normalizedDescription(page.data.description),
      path: page.url,
      published: article.published,
      updated: article.updated,
      author: article.author,
      category: 'article',
    });
  }

  for (const page of journalSource.getPages()) {
    const journal = page.data.journal;
    if (!journal) continue;

    entries.push({
      id: journal.id,
      title: page.data.title,
      description: normalizedDescription(page.data.description),
      path: page.url,
      published: journal.date,
      updated: journal.updated,
      category: 'journal',
    });
  }

  for (const page of changelogsSource.getPages()) {
    const changelog = page.data.changelog;
    if (!changelog) continue;

    entries.push({
      id: changelog.id,
      title: page.data.title,
      description: normalizedDescription(page.data.description),
      path: page.url,
      published: changelog.date,
      updated: changelog.updated,
      category: 'changelog',
    });
  }

  return entries.sort((left, right) => {
    const leftDate = left.updated ?? left.published;
    const rightDate = right.updated ?? right.published;
    return rightDate.localeCompare(leftDate) || right.id.localeCompare(left.id);
  });
}

export function getSitemapPaths(): string[] {
  const contentPaths = [
    ...source.getPages(),
    ...buildingMonadSource.getPages(),
    ...articlesSource.getPages(),
    ...changelogsSource.getPages(),
    ...journalSource.getPages(),
  ].map((page) => page.url);

  const utilityPaths = [
    '/',
    '/roadmap',
    '/process',
    '/newsletter',
    '/contributing',
    '/code-of-conduct',
    '/contact',
    '/privacy',
    '/terms',
    '/accessibility',
  ];

  return [...new Set([...utilityPaths, ...contentPaths])].sort();
}

export function absoluteUrl(origin: string, path: string): string {
  return new URL(path, `${origin.replace(/\/$/, '')}/`).toString();
}

export function xmlEscape(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function asIsoDate(value: string): string {
  return new Date(`${value}T00:00:00.000Z`).toISOString();
}

export function asRfc822Date(value: string): string {
  return new Date(`${value}T00:00:00.000Z`).toUTCString();
}
