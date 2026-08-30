import { loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { z } from 'zod';
import { docsContentRoute, docsImageRoute, docsRoute } from './shared';

const dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const relatedLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const changelogMetadataSchema = z.object({
  id: z.string().regex(/^CHG-\d{4}-\d{2}-\d{2}-\d{3}$/),
  date: dateSchema,
  updated: dateSchema.optional(),
  kind: z.enum(['release', 'prerelease', 'hotfix', 'change-set']),
  status: z.enum(['released', 'superseded']),
  version: z.string().optional(),
  channel: z.enum(['stable', 'preview', 'experimental']).optional(),
  breaking: z.boolean().default(false),
  migration: z.boolean().default(false),
  areas: z.array(z.string()).default([]),
  related: z.array(relatedLinkSchema).default([]),
});

const changelogPageSchema = pageSchema.extend({
  changelog: changelogMetadataSchema.optional(),
});

const journalMetadataSchema = z.object({
  id: z.string().regex(/^JRN-\d{4}-\d{2}-\d{2}-\d{3}$/),
  date: dateSchema,
  updated: dateSchema.optional(),
  kind: z.enum([
    'observation',
    'investigation',
    'experiment',
    'implementation',
    'failure',
    'decision-in-progress',
    'retrospective',
  ]),
  status: z.enum(['working', 'resolved', 'superseded', 'retrospective']),
  phase: z
    .enum([
      'inception',
      'domain-discovery',
      'product-definition',
      'architecture',
      'specification',
      'implementation',
      'verification',
      'release-and-evolution',
    ])
    .optional(),
  topics: z.array(z.string()).default([]),
  related: z.array(relatedLinkSchema).default([]),
});

const journalPageSchema = pageSchema.extend({
  journal: journalMetadataSchema.optional(),
});

const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

const articles = defineDocs({
  dir: 'content/articles',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

const changelogs = defineDocs({
  dir: 'content/changelogs',
  docs: {
    schema: changelogPageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

const journal = defineDocs({
  dir: 'content/journal',
  docs: {
    schema: journalPageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export const articlesSource = loader({
  baseUrl: '/articles',
  source: articles.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export const changelogsSource = loader({
  baseUrl: '/changelogs',
  source: changelogs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export const journalSource = loader({
  baseUrl: '/journal',
  source: journal.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
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
