'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import {
  FullSearchTrigger,
  SearchTrigger,
} from 'fumadocs-ui/layouts/shared/slots/search-trigger';
import { ThemeSwitch } from 'fumadocs-ui/layouts/shared/slots/theme-switch';
import {
  type FocusEvent as ReactFocusEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { cn } from '@/lib/cn';
import { appName } from '@/lib/shared';
import {
  isNavigationMenu,
  siteNavigation,
  siteRepositoryUrl,
  type SiteNavigationLink,
  type SiteNavigationMenu,
} from '@/lib/site-navigation';

const SCROLL_THRESHOLD = 8;

function normalizePath(value: string): string {
  const path = value.split(/[?#]/, 1)[0] ?? '/';
  if (path === '/') return '/';
  return path.replace(/\/+$/, '') || '/';
}

function isCurrentPage(pathname: string, href: string): boolean {
  return normalizePath(pathname) === normalizePath(href);
}

function isPathWithin(pathname: string, href: string): boolean {
  const current = normalizePath(pathname);
  const target = normalizePath(href);

  if (target === '/') return current === '/';
  return current === target || current.startsWith(`${target}/`);
}

function isLinkActive(pathname: string, item: SiteNavigationLink): boolean {
  return item.match === 'exact'
    ? isCurrentPage(pathname, item.href)
    : isPathWithin(pathname, item.href);
}

function menuIsActive(pathname: string, menu: SiteNavigationMenu): boolean {
  if (menu.href && isPathWithin(pathname, menu.href)) return true;
  return menu.items.some((item) => isLinkActive(pathname, item));
}

function DesktopLink({
  item,
  pathname,
}: {
  item: SiteNavigationLink;
  pathname: string;
}) {
  const active = isLinkActive(pathname, item);
  const current = isCurrentPage(pathname, item.href);

  return (
    <Link
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noreferrer' : undefined}
      aria-current={current ? 'page' : undefined}
      className={cn(
        'rounded-md px-2.5 py-2 text-sm font-medium text-fd-muted-foreground transition-colors hover:bg-fd-accent/60 hover:text-fd-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring motion-reduce:transition-none',
        active && 'bg-fd-primary/10 text-fd-primary',
      )}
    >
      {item.label}
    </Link>
  );
}

function DesktopMenu({
  menu,
  pathname,
}: {
  menu: SiteNavigationMenu;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const active = menuIsActive(pathname, menu);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [open]);

  const getLinks = () =>
    Array.from(panelRef.current?.querySelectorAll<HTMLElement>('a[href]') ?? []);

  const focusLink = (index: number) => {
    const links = getLinks();
    if (links.length === 0) return;
    const next = ((index % links.length) + links.length) % links.length;
    links[next]?.focus();
  };

  const openAndFocus = (position: 'first' | 'last') => {
    setOpen(true);
    requestAnimationFrame(() => {
      const links = getLinks();
      focusLink(position === 'first' ? 0 : links.length - 1);
    });
  };

  const handleTriggerKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openAndFocus('first');
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      openAndFocus('last');
    } else if (event.key === 'Escape' && open) {
      event.preventDefault();
      setOpen(false);
    }
  };

  const handlePanelKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    const links = getLinks();
    const currentIndex = links.indexOf(document.activeElement as HTMLElement);

    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
      return;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      focusLink(0);
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      focusLink(links.length - 1);
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusLink(currentIndex < 0 ? 0 : currentIndex + 1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusLink(currentIndex < 0 ? links.length - 1 : currentIndex - 1);
    }
  };

  const handleBlur = (event: ReactFocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative" onBlur={handleBlur}>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        className={cn(
          'inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-sm font-medium text-fd-muted-foreground transition-colors hover:bg-fd-accent/60 hover:text-fd-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring motion-reduce:transition-none',
          active && 'bg-fd-primary/10 text-fd-primary',
        )}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={handleTriggerKeyDown}
      >
        {menu.label}
        <ChevronDown
          aria-hidden="true"
          className={cn(
            'size-3.5 transition-transform motion-reduce:transition-none',
            open && 'rotate-180',
          )}
        />
      </button>

      {open && (
        <div
          id={panelId}
          ref={panelRef}
          role="group"
          aria-label={`${menu.label} navigation`}
          className="absolute left-1/2 top-[calc(100%+0.5rem)] z-50 w-80 -translate-x-1/2 rounded-xl border bg-fd-popover/95 p-2 text-fd-popover-foreground shadow-xl backdrop-blur-xl"
          onKeyDown={handlePanelKeyDown}
        >
          {menu.href && (
            <Link
              href={menu.href}
              aria-current={isCurrentPage(pathname, menu.href) ? 'page' : undefined}
              className={cn(
                'mb-1 block rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-fd-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring motion-reduce:transition-none',
                isPathWithin(pathname, menu.href) && 'text-fd-primary',
              )}
              onClick={() => setOpen(false)}
            >
              View {menu.label}
            </Link>
          )}

          <div className="grid gap-1">
            {menu.items.map((item) => {
              const itemActive = isLinkActive(pathname, item);
              const current = isCurrentPage(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  aria-current={current ? 'page' : undefined}
                  className={cn(
                    'rounded-lg px-3 py-2.5 transition-colors hover:bg-fd-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring motion-reduce:transition-none',
                    itemActive && 'bg-fd-primary/10',
                  )}
                  onClick={() => setOpen(false)}
                >
                  <span
                    className={cn(
                      'block text-sm font-medium',
                      itemActive && 'text-fd-primary',
                    )}
                  >
                    {item.label}
                  </span>
                  {item.description && (
                    <span className="mt-0.5 block text-xs leading-relaxed text-fd-muted-foreground">
                      {item.description}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function SiteNavbar() {
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const mobileTitleId = useId();
  const homeTransparent = pathname === '/' && isAtTop && !mobileOpen;

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setIsAtTop(window.scrollY <= SCROLL_THRESHOLD);
    };

    const handleScroll = () => {
      if (frame !== 0) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame !== 0) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (mobileOpen && !dialog.open) {
      dialog.showModal();
      requestAnimationFrame(() => closeButtonRef.current?.focus());
    } else if (!mobileOpen && dialog.open) {
      dialog.close();
    }
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[100] rounded-md bg-fd-background px-3 py-2 text-sm font-medium text-fd-foreground shadow-lg focus:not-sr-only focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
      >
        Skip to content
      </a>

      <header
        data-transparent={homeTransparent}
        className={cn(
          'sticky top-0 z-50 h-(--site-nav-height) w-full border-b transition-[background-color,border-color,box-shadow] duration-200 motion-reduce:transition-none',
          homeTransparent
            ? 'border-transparent bg-transparent'
            : 'border-fd-border/70 bg-fd-background/90 shadow-sm backdrop-blur-xl',
        )}
      >
        <div className="mx-auto flex h-full w-full max-w-(--fd-layout-width) items-center gap-2 px-4">
          <Link
            href="/"
            aria-label={`${appName} home`}
            className="shrink-0 rounded-md px-1 py-1 text-sm font-semibold tracking-tight text-fd-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring sm:text-base"
          >
            {appName}
          </Link>

          <nav aria-label="Primary navigation" className="ml-4 hidden items-center gap-1 xl:flex">
            {siteNavigation.map((entry) =>
              isNavigationMenu(entry) ? (
                <DesktopMenu key={entry.label} menu={entry} pathname={pathname} />
              ) : (
                <DesktopLink key={entry.href} item={entry} pathname={pathname} />
              ),
            )}
          </nav>

          <div className="ml-auto hidden items-center gap-2 xl:flex">
            <FullSearchTrigger hideIfDisabled className="w-44 rounded-full" />
            <ThemeSwitch mode="light-dark-system" />
            <a
              href={siteRepositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center rounded-md border px-3 text-sm font-medium text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring motion-reduce:transition-none"
            >
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <div className="ml-auto flex items-center gap-1 xl:hidden">
            <SearchTrigger hideIfDisabled />
            <div className="hidden sm:block">
              <ThemeSwitch />
            </div>
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className="inline-flex size-9 items-center justify-center rounded-md text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring motion-reduce:transition-none"
              onClick={() => setMobileOpen(true)}
            >
              <Menu aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <dialog
        ref={dialogRef}
        aria-labelledby={mobileTitleId}
        className="fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-dvh w-[min(24rem,100vw)] max-w-none border-l bg-fd-background p-0 text-fd-foreground shadow-2xl backdrop:bg-black/40 xl:hidden"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMobile();
        }}
        onClose={() => setMobileOpen(false)}
        onCancel={() => setMobileOpen(false)}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-(--site-nav-height) shrink-0 items-center border-b px-4">
            <h2 id={mobileTitleId} className="text-sm font-semibold">
              Navigation
            </h2>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close navigation menu"
              className="ml-auto inline-flex size-9 items-center justify-center rounded-md text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring motion-reduce:transition-none"
              onClick={closeMobile}
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          <div className="border-b p-4">
            <FullSearchTrigger hideIfDisabled className="w-full" onClick={closeMobile} />
          </div>

          <nav aria-label="Mobile primary navigation" className="flex-1 overflow-y-auto p-4">
            <div className="grid gap-6">
              {siteNavigation.map((entry, index) => {
                if (!isNavigationMenu(entry)) {
                  const active = isLinkActive(pathname, entry);
                  const current = isCurrentPage(pathname, entry.href);

                  return (
                    <Link
                      key={entry.href}
                      href={entry.href}
                      aria-current={current ? 'page' : undefined}
                      className={cn(
                        'rounded-md py-1 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring',
                        active && 'text-fd-primary',
                      )}
                      onClick={closeMobile}
                    >
                      {entry.label}
                    </Link>
                  );
                }

                const active = menuIsActive(pathname, entry);
                const sectionId = `${mobileTitleId}-section-${index}`;

                return (
                  <section key={entry.label} aria-labelledby={sectionId}>
                    <div
                      id={sectionId}
                      className={cn(
                        'mb-2 text-xs font-semibold uppercase tracking-wider text-fd-muted-foreground',
                        active && 'text-fd-primary',
                      )}
                    >
                      {entry.href ? (
                        <Link
                          href={entry.href}
                          aria-current={isCurrentPage(pathname, entry.href) ? 'page' : undefined}
                          onClick={closeMobile}
                          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
                        >
                          {entry.label}
                        </Link>
                      ) : (
                        entry.label
                      )}
                    </div>
                    <div className="grid gap-1">
                      {entry.items.map((item) => {
                        const itemActive = isLinkActive(pathname, item);
                        const current = isCurrentPage(pathname, item.href);

                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noreferrer' : undefined}
                            aria-current={current ? 'page' : undefined}
                            className={cn(
                              'rounded-lg px-3 py-2.5 transition-colors hover:bg-fd-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring motion-reduce:transition-none',
                              itemActive && 'bg-fd-primary/10',
                            )}
                            onClick={closeMobile}
                          >
                            <span
                              className={cn(
                                'block text-sm font-medium',
                                itemActive && 'text-fd-primary',
                              )}
                            >
                              {item.label}
                            </span>
                            {item.description && (
                              <span className="mt-0.5 block text-xs leading-relaxed text-fd-muted-foreground">
                                {item.description}
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>
          </nav>

          <div className="flex shrink-0 items-center gap-3 border-t p-4">
            <ThemeSwitch mode="light-dark-system" />
            <a
              href={siteRepositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-auto rounded-md px-3 py-2 text-sm font-medium text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring motion-reduce:transition-none"
            >
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
