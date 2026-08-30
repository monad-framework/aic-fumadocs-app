import { gitConfig } from './shared';

export type SiteNavigationLink = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  match?: 'exact' | 'nested';
};

export type SiteNavigationMenu = {
  label: string;
  href?: string;
  items: readonly SiteNavigationLink[];
};

export type SiteNavigationEntry = SiteNavigationLink | SiteNavigationMenu;

export const siteNavigation: readonly SiteNavigationEntry[] = [
  {
    label: 'About',
    href: '/docs/about',
    items: [
      {
        label: 'Getting Started',
        description: 'Start here',
        href: '/docs',
        match: 'exact',
      },
      {
        label: 'Artifacts',
        description: 'Inspect the engineering record',
        href: '/docs/artifacts',
      },
      {
        label: 'Building Monad',
        description: 'Follow the public engineering narrative',
        href: '/docs/building-monad',
      },
      {
        label: 'Project',
        description: 'Understand the project and its boundaries',
        href: '/docs/project',
      },
      {
        label: 'System',
        description: 'Read the authoritative system documentation',
        href: '/docs/system',
      },
      {
        label: 'Author',
        description: 'About the author',
        href: '/docs/author',
      },
    ],
  },
  {
    label: 'Documentation',
    items: [
      {
        label: 'Monad Docs',
        description: 'Browse the documentation',
        href: '/docs',
        match: 'exact',
      },
    ],
  },
  {
    label: 'Articles',
    items: [
      {
        label: 'Blog',
        description: 'Long-form project writing',
        href: '/articles/blog',
      },
      {
        label: 'Research',
        description: 'Research notes and investigations',
        href: '/articles/research',
      },
      {
        label: 'White Papers',
        description: 'Formal technical papers',
        href: '/articles/white-papers',
      },
    ],
  },
  {
    label: 'Changelogs',
    items: [
      {
        label: 'Release Notes',
        description: 'Published releases and meaningful change sets',
        href: '/changelogs',
        match: 'exact',
      },
      {
        label: 'Unreleased',
        description: 'Changes queued for a future publication boundary',
        href: '/changelogs/unreleased',
      },
      {
        label: 'How Changelogs Work',
        description: 'Release record format, lifecycle, and maintenance rules',
        href: '/changelogs/format',
      },
    ],
  },
  {
    label: 'Journal',
    items: [
      {
        label: 'Engineering Journal',
        description: 'Follow the chronological working record',
        href: '/journal',
        match: 'exact',
      },
      {
        label: 'How the Journal Works',
        description: 'Entry format, metadata, chronology, and authority rules',
        href: '/journal/format',
      },
    ],
  },
];

export const siteRepositoryUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

export function isNavigationMenu(entry: SiteNavigationEntry): entry is SiteNavigationMenu {
  return 'items' in entry;
}
