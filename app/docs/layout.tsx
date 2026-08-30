import type { ReactNode } from 'react';
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
      tree={source.getPageTree()} 
      {...baseOptions()}
      links={}
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
