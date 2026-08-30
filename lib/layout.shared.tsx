import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { SiteNavbar } from '@/components/site-navbar';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      component: <SiteNavbar />,
    },
  };
}
