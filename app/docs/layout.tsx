import type { CSSProperties, ReactNode } from 'react';
import { AISearch, AISearchPanel, AISearchTrigger } from '@/components/ai/search';
import { baseOptions } from '@/lib/layout.shared';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { cn } from '@/lib/cn';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { MessageCircleIcon } from 'lucide-react';
import { SidebarSeparator } from './layout.client';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions()}
      tree={source.getPageTree()}
      nav={{
        title: 'Documentation',
      }}
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
          aria-label="Ask the Documentation AI"
          title="AI answers from Documentation only"
        >
          <MessageCircleIcon className="size-4.5" />
          Ask Docs
        </AISearchTrigger>
      </AISearch>

      {children}
    </DocsLayout>
  );
}
