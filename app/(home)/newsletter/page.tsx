import { PublicPage } from '@/components/public-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'Subscribe to periodic AIC Engineering and Monad project updates.',
};

const statusMessages: Record<string, string> = {
  success:
    'Thanks. Your subscription request was received. If the configured provider uses double opt-in, check your inbox to confirm.',
  invalid: 'Enter a valid email address and try again.',
  'not-configured':
    'The newsletter signup endpoint is installed, but a delivery provider has not been configured yet.',
  error:
    'The newsletter provider could not accept the request. Please try again later.',
};

export default async function NewsletterPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const message = status ? statusMessages[status] : undefined;

  return (
    <PublicPage
      eyebrow="Follow the project"
      title="Newsletter"
      description="Get occasional updates when Monad reaches a meaningful engineering, publication, or release boundary."
    >
      {message ? (
        <p className="max-w-3xl rounded-lg border border-fd-border bg-fd-muted/30 p-4 text-fd-foreground" role="status">
          {message}
        </p>
      ) : null}

      <section>
        <h2>Subscribe</h2>
        <p>
          The newsletter is intended for durable updates, not a notification for every commit. Expect project milestones,
          important articles, research results, releases, and other changes worth following.
        </p>
        <form action="/api/newsletter" method="post" className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="min-h-11 flex-1 rounded-lg border border-fd-border bg-fd-background px-4 text-fd-foreground outline-none focus:ring-2 focus:ring-fd-primary"
          />
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <button
            type="submit"
            className="min-h-11 rounded-lg bg-fd-primary px-5 font-medium text-fd-primary-foreground"
          >
            Subscribe
          </button>
        </form>
      </section>

      <section>
        <h2>What happens to your email address?</h2>
        <p>
          The site does not need to maintain its own subscriber database. The signup endpoint forwards your address to the
          newsletter provider configured by the site operator. When Buttondown is used, new subscriptions use its normal
          confirmation flow by default.
        </p>
        <p className="mt-3">
          See the <a href="/privacy">Privacy Policy</a> for the current data-handling description.
        </p>
      </section>

      <section>
        <h2>Prefer feeds?</h2>
        <p>
          No email is required. Subscribe to <a href="/rss.xml">RSS</a> or <a href="/atom.xml">Atom</a> in any compatible
          feed reader to follow new Articles, Engineering Journal entries, and Changelog records.
        </p>
      </section>
    </PublicPage>
  );
}
