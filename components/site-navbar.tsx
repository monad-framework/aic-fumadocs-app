'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { siteNavigation } from '@/lib/site-navigation';

export function SiteNavbar() {
  return (
    <header className="site-navbar">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center px-4">
        <Link
          href="/"
          className="mr-8 font-semibold"
        >
          Monad
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {siteNavigation.map((item) => {
            if ('items' in item) {
              return (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    className="text-sm font-medium"
                  >
                    {item.label}
                  </button>

                  <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 group-hover:visible group-hover:opacity-100">
                    <div className="min-w-56 rounded-lg border bg-fd-background p-2 shadow-lg">
                      {item.items.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-md px-3 py-2 hover:bg-fd-accent"
                        >
                          <div className="text-sm font-medium">
                            {child.label}
                          </div>

                          {'description' in child && child.description && (
                            <div className="text-xs text-fd-muted-foreground">
                              {child.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href="https://github.com/monad-framework/aic-fumadocs-app"
            target="_blank"
            rel="noreferrer"
            aria-label="View project on GitHub"
          >Github
          </a>

          <button
            type="button"
            className="md:hidden"
            aria-label="Open navigation"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}