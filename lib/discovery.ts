export type DiscoveryDomainTag =
  | 'docs'
  | 'journal'
  | 'changelogs'
  | 'articles'
  | 'building-monad';

export const discoveryFilters: readonly {
  tag: DiscoveryDomainTag;
  label: string;
}[] = [
  { tag: 'docs', label: 'Documentation' },
  { tag: 'journal', label: 'Journal' },
  { tag: 'changelogs', label: 'Changelogs' },
  { tag: 'articles', label: 'Articles' },
  { tag: 'building-monad', label: 'Building Monad' },
];

export type DiscoverySurface = {
  domain: DiscoveryDomainTag;
  label: string;
  cue: string;
};

export function getDiscoverySurface(url: string): DiscoverySurface {
  if (url.startsWith('/docs/system')) {
    return { domain: 'docs', label: 'System', cue: 'Current' };
  }
  if (url.startsWith('/docs/artifacts')) {
    return { domain: 'docs', label: 'Artifacts', cue: 'Governed' };
  }
  if (url.startsWith('/docs/project')) {
    return { domain: 'docs', label: 'Project', cue: 'Coordination' };
  }
  if (url.startsWith('/docs')) {
    return { domain: 'docs', label: 'Documentation', cue: 'Reference' };
  }

  if (url.startsWith('/journal')) {
    return { domain: 'journal', label: 'Journal', cue: 'Historical' };
  }

  if (url.startsWith('/changelogs/unreleased')) {
    return { domain: 'changelogs', label: 'Unreleased', cue: 'Mutable' };
  }
  if (url.startsWith('/changelogs')) {
    return { domain: 'changelogs', label: 'Changelog', cue: 'Release record' };
  }

  if (url.startsWith('/articles/blog')) {
    return { domain: 'articles', label: 'Blog', cue: 'Editorial' };
  }
  if (url.startsWith('/articles/research')) {
    return { domain: 'articles', label: 'Research', cue: 'Editorial' };
  }
  if (url.startsWith('/articles/white-papers')) {
    return { domain: 'articles', label: 'White Paper', cue: 'Editorial' };
  }
  if (url.startsWith('/articles')) {
    return { domain: 'articles', label: 'Articles', cue: 'Editorial' };
  }

  if (url.startsWith('/building-monad/series')) {
    return { domain: 'building-monad', label: 'Series', cue: 'Curated' };
  }
  if (url.startsWith('/building-monad/installments')) {
    return { domain: 'building-monad', label: 'Installment', cue: 'Curated' };
  }
  if (url.startsWith('/building-monad/phases')) {
    return { domain: 'building-monad', label: 'Phase', cue: 'Curated' };
  }

  return { domain: 'building-monad', label: 'Building Monad', cue: 'Curated' };
}
