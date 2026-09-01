import {
  absoluteUrl,
  asRfc822Date,
  getFeedEntries,
  xmlEscape,
} from '@/lib/publication-feed';

export const dynamic = 'force-dynamic';

export function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const entries = getFeedEntries();
  const latest = entries[0]?.updated ?? entries[0]?.published;

  const items = entries
    .map((entry) => {
      const url = absoluteUrl(origin, entry.path);
      return [
        '<item>',
        `<title>${xmlEscape(entry.title)}</title>`,
        `<link>${xmlEscape(url)}</link>`,
        `<guid isPermaLink="false">${xmlEscape(entry.id)}</guid>`,
        `<description>${xmlEscape(entry.description)}</description>`,
        `<pubDate>${asRfc822Date(entry.published)}</pubDate>`,
        entry.author ? `<author>${xmlEscape(entry.author)}</author>` : '',
        `<category>${xmlEscape(entry.category)}</category>`,
        '</item>',
      ]
        .filter(Boolean)
        .join('');
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>AIC Engineering</title><link>${xmlEscape(origin)}</link><description>Articles, engineering journal entries, and changelogs from the public Monad engineering record.</description><language>en-us</language><atom:link href="${xmlEscape(absoluteUrl(origin, '/rss.xml'))}" rel="self" type="application/rss+xml"/>${latest ? `<lastBuildDate>${asRfc822Date(latest)}</lastBuildDate>` : ''}${items}</channel></rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
