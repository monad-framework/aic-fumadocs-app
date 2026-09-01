# aic-fumadocs-app

This is the source code for the AIC Engineering blog/website. It is a Next.js application generated with [Create Fumadocs](https://github.com/fuma-nama/fumadocs).

## Run development server

```bash
bun run dev
```

Open http://localhost:3000 with your browser to see the result.

## Explore

In the project, you can see:

- `lib/source.ts`: code for the Fumadocs content sources;
- `lib/layout.shared.tsx`: shared layout options;
- `lib/publication-feed.ts`: shared feed and sitemap publication model.

| Route | Description |
| --- | --- |
| `app/(home)` | Landing page and public utility/policy pages. |
| `app/docs` | Documentation layout and pages. |
| `app/api/search/route.ts` | Search route handler. |
| `app/api/newsletter/route.ts` | Newsletter subscription route handler. |
| `app/articles` | Articles layout and pages. |
| `app/changelogs` | Changelog layout and pages. |
| `app/journal` | Engineering Journal layout and pages. |
| `app/rss.xml` | RSS 2.0 feed generated from published content. |
| `app/atom.xml` | Atom feed generated from published content. |
| `app/sitemap.xml` | XML sitemap generated from public content and utility pages. |
| `components` | AI, site, and UI components. |
| `content` | MDX content collections. |

### Fumadocs MDX

Collections are defined with the Macro API in `lib/source.ts`. See the [Fumadocs MDX documentation](https://fumadocs.dev/docs/mdx) for details.

## RSS and Atom feeds

The site exposes two equivalent subscription formats:

- `/rss.xml` — RSS 2.0;
- `/atom.xml` — Atom.

Both feeds are generated from published Articles, Engineering Journal entries, and Changelog records. Feed-discovery links are emitted in the root document `<head>`, so compatible browsers and feed readers can discover them automatically.

To use a feed, paste the deployed site's full feed URL into a feed reader. For example, if the site is deployed at `https://example.com`, subscribe to `https://example.com/rss.xml` or `https://example.com/atom.xml`.

## Newsletter setup

The footer and `/newsletter` page submit to `POST /api/newsletter`.

The endpoint supports two server-side delivery configurations. Buttondown is preferred when `BUTTONDOWN_API_KEY` is present; otherwise the endpoint can forward the signup to a provider-neutral webhook through `NEWSLETTER_WEBHOOK_URL`.

Copy `.env.example` to `.env.local` and configure one option.

### Buttondown

```bash
BUTTONDOWN_API_KEY=your_server_side_api_key
```

The API key must remain server-side and needs subscriber-write permission. New subscriber creation uses Buttondown's normal confirmation behavior, so a newsletter configured for double opt-in can require subscribers to confirm by email.

### Generic webhook

```bash
NEWSLETTER_WEBHOOK_URL=https://your-service.example/newsletter/subscribe
NEWSLETTER_WEBHOOK_TOKEN=optional_bearer_token
```

The site sends JSON containing `email`, `source`, and `referrer`. Use this option to connect Kit, Mailchimp, Beehiiv, a CRM, an automation platform, or a custom subscriber service through your own adapter/webhook.

If neither provider is configured, signup attempts redirect to `/newsletter?status=not-configured` rather than silently dropping addresses.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Fumadocs](https://fumadocs.dev)

## Monad

To learn more about the Monad project that this site covers:

- [Monad Repo](https://github.com/monad-framework/monad)
- [Monad Framework](https://github.com/monad-framework/)
- [AIC Engineering site source](https://github.com/monad-framework/aic-fumadocs-app)
