import { BookIcon } from 'lucide-react';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    links: [
      {
        type: 'menu',
        text: 'About',
        label: 'Learn more about this site', // `aria-label`
        icon: <BookIcon />,
        url: '/docs/about/',
        items: [
          {
            text: 'Getting Started',
            description: 'start here',
            url: '/docs',
          },
          {
            text: 'Artifacts',
            description: 'artifacts',
            url: '/docs/artifacts',
          },
          {
            text: 'Building Monad',
            description: 'about building Monad',
            url: '/docs/building-monad',
          },
          {
            text: 'Project',
            description: 'about the project',
            url: '/docs/project',
          },
          {
            text: 'System',
            description: 'about the system',
            url: '/docs/system',
          },
          {
            text: 'Author',
            description: 'About the author',
            url: '/docs/author',
          }
        ],
        // secondary items will be displayed differently on navbar
        secondary: false,
        active: 'nested-url',
      },
      {
        githubUrl: 'https://github.com/monad-framework/monad',
        type: 'icon',
        label: 'Visit Repo', // `aria-label`
        text: 'Github',
        // secondary items will be displayed differently on navbar
        secondary: false,
        active: 'nested-url',
      },
      {
        type: 'menu',
        text: 'Documentation',
        items: [
          {
            text: 'Monad Docs',
            description: 'Monad docs',
            url: '/docs',
          },
        ],
      },
      {
        type: 'menu',
        text: 'Articles',
        items: [
          {
            text: 'Blog',
            description: 'blog posts',
            url: '/articles/blog',
          },
          {
            text: 'Research',
            description: 'reasearch',
            url: '/articles/research',
          },
          {
            text: 'White Papers',
            description: 'white papers',
            url: '/articles/white-papers',
          },
        ],
      },
      {
        type: 'menu',
        text: 'Changelogs',
        items: [
          {
            text: 'Monad Changelogs',
            description: 'Monad Changelogs',
            url: '/changelogs',
          },
        ],
      },
      {
        type: 'menu',
        text: 'Journal',
        items: [
          {
            text: 'Engineering Journal',
            description: 'Engineering Journal',
            url: '/journal',
          },
        ],
      },
    ],
    nav: {
      // JSX supported
      title: appName,
      transparentMode: 'top',
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
