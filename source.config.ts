import { defineDocs } from 'fumadocs-mdx/config';

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
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});
