import Link from "next/link";

const footerNavigation = {
  explore: [
    { label: "Start Here", href: "/" },
    { label: "Building Monad", href: "/building-monad" },
    { label: "System", href: "/system" },
    { label: "Artifacts", href: "/artifacts" },
  ],

  project: [
    { label: "About", href: "/about" },
    { label: "Project Roadmap", href: "/roadmap" },
    { label: "Engineering Process", href: "/process" },
    { label: "Changelog", href: "/changelog" },
  ],

  follow: [
    {
      label: "GitHub",
      href: "https://github.com/monad-framework",
      external: true,
    },
    {
      label: "RSS Feed",
      href: "/rss.xml",
    },
    {
      label: "Atom Feed",
      href: "/atom.xml",
    },
    {
      label: "Newsletter",
      href: "/newsletter",
    },
  ],

  community: [
    {
      label: "GitHub Discussions",
      href: "https://github.com/orgs/monad-framework/discussions",
      external: true,
    },
    {
      label: "Contributing",
      href: "/contributing",
    },
    {
      label: "Code of Conduct",
      href: "/code-of-conduct",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
} as const;

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

function FooterLink({
  href,
  children,
  external = false,
}: FooterLinkProps) {
  const className =
    "text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly {
    label: string;
    href: string;
    external?: boolean;
  }[];
}) {
  return (
    <div>
      <h2 className="mb-4 text-sm font-semibold text-fd-foreground">
        {title}
      </h2>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <FooterLink
              href={link.href}
              external={"external" in link ? link.external : false}
            >
              {link.label}
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-fd-border bg-fd-background">
      {/* Newsletter / community CTA */}
      <section className="border-b border-fd-border">
        <div className="mx-auto grid w-full max-w-screen-2xl gap-8 px-6 py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-medium text-fd-primary">
              Follow the build
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-fd-foreground sm:text-3xl">
              Building Monad in public.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-fd-muted-foreground sm:text-base">
              Follow the engineering work as it happens: architecture,
              decisions, experiments, failures, discoveries, implementation,
              and the evolution of Monad from first principles.
            </p>
          </div>

          <form
            action="/api/newsletter"
            method="post"
            className="w-full max-w-lg"
          >
            <label
              htmlFor="footer-email"
              className="sr-only"
            >
              Email address
            </label>

            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                id="footer-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="
                  min-h-11 flex-1 rounded-lg border border-fd-border
                  bg-fd-background px-4 text-sm text-fd-foreground
                  outline-none transition
                  placeholder:text-fd-muted-foreground
                  focus:border-fd-primary
                  focus:ring-2 focus:ring-fd-primary/20
                "
              />

              <button
                type="submit"
                className="
                  min-h-11 shrink-0 rounded-lg
                  bg-fd-primary px-5
                  text-sm font-medium text-fd-primary-foreground
                  transition-opacity hover:opacity-90
                  focus:outline-none focus:ring-2
                  focus:ring-fd-primary focus:ring-offset-2
                  focus:ring-offset-fd-background
                "
              >
                Join the newsletter
              </button>
            </div>

            <p className="mt-2 text-xs leading-5 text-fd-muted-foreground">
              Project updates, engineering notes, and major releases.
              No spam.
            </p>
          </form>
        </div>
      </section>

      {/* Main footer */}
      <div className="mx-auto w-full max-w-screen-2xl px-6 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(260px,1.3fr)_2fr]">
          {/* Project identity */}
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Monad home"
            >
              <span
                className="
                  flex size-9 items-center justify-center
                  rounded-lg border border-fd-border
                  bg-fd-muted
                  font-mono text-sm font-semibold text-fd-foreground
                "
                aria-hidden="true"
              >
                M
              </span>

              <span className="text-lg font-semibold tracking-tight text-fd-foreground">
                Monad
              </span>
            </Link>

            <p className="mt-5 text-sm leading-6 text-fd-muted-foreground">
              An engineering project exploring how software systems can become
              more understandable, governable, reproducible, and capable of
              working effectively with increasingly capable AI.
            </p>

            <p className="mt-4 text-sm leading-6 text-fd-muted-foreground">
              The project is being designed, debated, documented, and built in
              public. This site is both the explanation of the system and the
              engineering record of how it came to exist.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href="https://github.com/monad-framework"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center rounded-md
                  border border-fd-border
                  px-3 py-1.5 text-xs font-medium
                  text-fd-muted-foreground
                  transition-colors
                  hover:bg-fd-muted
                  hover:text-fd-foreground
                "
              >
                GitHub
              </a>

              <Link
                href="/rss.xml"
                className="
                  inline-flex items-center rounded-md
                  border border-fd-border
                  px-3 py-1.5 text-xs font-medium
                  text-fd-muted-foreground
                  transition-colors
                  hover:bg-fd-muted
                  hover:text-fd-foreground
                "
              >
                RSS
              </Link>

              <Link
                href="/atom.xml"
                className="
                  inline-flex items-center rounded-md
                  border border-fd-border
                  px-3 py-1.5 text-xs font-medium
                  text-fd-muted-foreground
                  transition-colors
                  hover:bg-fd-muted
                  hover:text-fd-foreground
                "
              >
                Atom
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4"
          >
            <FooterColumn
              title="Explore"
              links={footerNavigation.explore}
            />

            <FooterColumn
              title="Project"
              links={footerNavigation.project}
            />

            <FooterColumn
              title="Follow"
              links={footerNavigation.follow}
            />

            <FooterColumn
              title="Community"
              links={footerNavigation.community}
            />
          </nav>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-fd-border">
        <div
          className="
            mx-auto flex w-full max-w-screen-2xl
            flex-col gap-4 px-6 py-6
            text-xs text-fd-muted-foreground
            sm:flex-row sm:items-center sm:justify-between
            lg:px-8
          "
        >
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>© {year} Monad Framework.</span>

            <span aria-hidden="true">·</span>

            <span>Built in public.</span>

            <span aria-hidden="true">·</span>

            <span>Open engineering record.</span>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="transition-colors hover:text-fd-foreground"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-fd-foreground"
            >
              Terms
            </Link>

            <Link
              href="/accessibility"
              className="transition-colors hover:text-fd-foreground"
            >
              Accessibility
            </Link>

            <Link
              href="/sitemap.xml"
              className="transition-colors hover:text-fd-foreground"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}