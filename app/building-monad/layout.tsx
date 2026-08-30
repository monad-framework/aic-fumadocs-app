import { baseOptions } from '@/lib/layout.shared';
import { buildingMonadSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { CSSProperties, ReactNode } from 'react';
import { SidebarSeparator } from './layout.client';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions()}
      tree={buildingMonadSource.getPageTree()}
      nav={{ title: 'Building Monad' }}
      searchToggle={{ enabled: false }}
      themeSwitch={{ enabled: false }}
      containerProps={{
        style: {
          '--fd-docs-height': 'calc(100dvh - var(--site-nav-height))',
          '--fd-docs-row-1':
            'calc(var(--fd-banner-height, 0px) + var(--site-nav-height))',
        } as CSSProperties,
      }}
      sidebar={{
        enabled: true,
        components: {
          Separator: SidebarSeparator,
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
