export const siteNavigation = [
  {
    label: 'About',
    href: '/docs/about',
    items: [
      {
        label: 'Getting Started',
        description: 'Start here',
        href: '/docs',
      },
      {
        label: 'Artifacts',
        description: 'Engineering artifacts',
        href: '/docs/artifacts',
      },
      {
        label: 'Building Monad',
        description: 'About building Monad',
        href: '/docs/building-monad',
      },
      {
        label: 'Project',
        description: 'About the project',
        href: '/docs/project',
      },
      {
        label: 'System',
        description: 'About the system',
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
    href: '/docs',
  },
  {
    label: 'Articles',
    items: [
      {
        label: 'Blog',
        href: '/articles/blog',
      },
      {
        label: 'Research',
        href: '/articles/research',
      },
      {
        label: 'White Papers',
        href: '/articles/white-papers',
      },
    ],
  },
  {
    label: 'Changelogs',
    href: '/changelogs',
  },
  {
    label: 'Journal',
    href: '/journal',
  },
] as const;