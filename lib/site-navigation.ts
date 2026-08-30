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
    label: 'Start Here',
    items: [
      {
        label: 'Home',
        description: 'Choose a path through the project by intent',
        href: '/',
        match: 'exact',
      },
      {
        label: 'About Monad',
        description: 'Understand the thesis, boundaries, and principles',
        href: '/docs/about',
      },
      {
        label: 'Project',
        description: 'See current status, boundaries, roadmap, and open questions',
        href: '/docs/project',
      },
      {
        label: 'Author',
        description: 'About the author and project steward',
        href: '/docs/author',
      },
    ],
  },
  {
    label: 'Documentation',
    items: [
      {
        label: 'Documentation Home',
        description: 'Enter the authoritative technical knowledge domain',
        href: '/docs',
        match: 'exact',
      },
      {
        label: 'System',
        description: 'Read the current authoritative system explanation',
        href: '/docs/system',
      },
      {
        label: 'Artifacts',
        description: 'Inspect requirements, specifications, decisions, and evidence',
        href: '/docs/artifacts',
      },
    ],
  },
  {
    label: 'Building Monad',
    items: [
      {
        label: 'Building Monad Home',
        description: 'Enter the curated narrative and reading-path layer',
        href: '/building-monad',
        match: 'exact',
      },
      {
        label: 'Series',
        description: 'Follow stable thematic reading paths across the record',
        href: '/building-monad/series',
      },
      {
        label: 'Installments',
        description: 'Read bounded snapshots of important project moments',
        href: '/building-monad/installments',
      },
      {
        label: 'Project Phases',
        description: 'Navigate the work through lifecycle-oriented reading paths',
        href: '/building-monad/phases',
      },
      {
        label: 'How Building Monad Works',
        description: 'Read the curation, source-ownership, and authority rules',
        href: '/building-monad/format',
      },
    ],
  },
  {
    label: 'Articles',
    items: [
      {
        label: 'Articles Home',
        description: 'Browse Monad editorial publications',
        href: '/articles',
        match: 'exact',
      },
      {
        label: 'Blog',
        description: 'Essays, explanations, commentary, and synthesis',
        href: '/articles/blog',
      },
      {
        label: 'Research',
        description: 'Structured investigations, evidence, and conclusions',
        href: '/articles/research',
      },
      {
        label: 'White Papers',
        description: 'Formal technical theses, models, and proposals',
        href: '/articles/white-papers',
      },
      {
        label: 'How Articles Work',
        description: 'Editorial lifecycle, metadata, and publication rules',
        href: '/articles/format',
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
