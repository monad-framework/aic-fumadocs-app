import type { CSSProperties, ReactNode } from 'react';
import { SidebarSeparator } from './layout.client';
import { journalSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { AISearch, AISearchPanel, AISearchTrigger } from '@/components/ai/search';
import { MessageCircleIcon } from 'lucide-react';
import { cn } from '@/lib/cn';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions()}
      tree={journalSource.getPageTree()}
      nav={{ title: 'Journal' }}
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
      <AISearch>
        <AISearchPanel />
        <AISearchTrigger
          position="float"
          className={cn(
            buttonVariants({
              variant: 'secondary',
              className: 'text-fd-muted-foreground rounded-2xl',
            }),
          )}
        >
          <MessageCircleIcon className="size-4.5" />
          Ask AI
        </AISearchTrigger>
      </AISearch>

      {children}
    </DocsLayout>
  );
}
