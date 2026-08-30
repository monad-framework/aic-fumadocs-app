import { pageSchema } from 'fumadocs-core/source/schema';
import { defineDocs } from 'fumadocs-mdx/config';
import { z } from 'zod';

const journalDateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

const journalMetadataSchema = z.object({
  id: z.string().regex(/^JRN-\d{4}-\d{2}-\d{2}-\d{3}$/),
  date: journalDateSchema,
  updated: journalDateSchema.optional(),
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
  related: z
    .array(
      z.object({
        label: z.string(),
        href: z.string(),
      }),
    )
    .default([]),
});

const journalPageSchema = pageSchema.extend({
  journal: journalMetadataSchema.optional(),
});

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});

export const { docs: articleDocs, meta: articleMeta } = defineDocs({
  dir: 'content/articles',
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});

export const { docs: changelogDocs, meta: changelogMeta } = defineDocs({
  dir: 'content/changelogs',
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});

export const { docs: journalDocs, meta: journalMeta } = defineDocs({
  dir: 'content/journal',
  docs: {
    schema: journalPageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});
