import { RootProvider } from 'fumadocs-ui/provider/next';
import { SiteFooter } from '@/components/site-footer';
import { SiteNavbar } from '@/components/site-navbar';

import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>
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
