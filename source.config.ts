import { defineCollections, defineDocs, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

// Default Docs Collection (exports standard docs + meta)
export const { docs, meta } = defineDocs({
  dir: 'content/docs',
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});

// Build-in-Public Blog Collection
export const blogArticles = defineCollections({
  type: 'doc',
  dir: 'content/articles',
  schema: frontmatterSchema.extend({
    author: z.string().default('Build Bot'),
    date: z.string().or(z.date()),
    tags: z.array(z.string()).default([]),
  }),
});

// Automated Git Push Micro-Logs
export const changelogEntries = defineCollections({
  type: 'doc',
  dir: 'content/changelog',
  schema: frontmatterSchema.extend({
    date: z.string().or(z.date()),
    commitHash: z.string().optional(),
    author: z.string().optional(),
  }),
});