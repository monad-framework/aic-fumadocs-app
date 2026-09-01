import { RootProvider } from 'fumadocs-ui/provider/next';
import { SiteFooter } from '@/components/site-footer';
import { SiteNavbar } from '@/components/site-navbar';
import SiteSearchDialog from '@/components/site-search-dialog';

import './global.css';
import { Inter, Raleway } from 'next/font/google';
import { cn } from "@/lib/utils";

const raleway = Raleway({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ['latin'],
});

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme')||'system';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);var r=document.documentElement;r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';r.dataset.theme=t;}catch(e){}})();`;

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={cn(inter.className, "font-sans", raleway.variable)} suppressHydrationWarning>
      <head>
        <script id="theme-init" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="alternate" type="application/rss+xml" title="AIC Engineering RSS" href="/rss.xml" />
        <link rel="alternate" type="application/atom+xml" title="AIC Engineering Atom" href="/atom.xml" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className="flex min-h-screen flex-col">
        <RootProvider
          theme={{ enabled: false }}
          search={{ SearchDialog: SiteSearchDialog }}
        >
          <div className="flex min-h-screen flex-col">
            <SiteNavbar />
            <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
              {children}
            </main>
            <SiteFooter />
          </div>
        </RootProvider>
      </body>
    </html>
  );
}
