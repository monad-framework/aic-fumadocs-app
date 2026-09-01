import {
  absoluteUrl,
  asIsoDate,
  getFeedEntries,
  xmlEscape,
} from '@/lib/publication-feed';

export const dynamic = 'force-dynamic';

export function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const entries = getFeedEntries();
  const latest = entries[0]?.updated ?? entries[0]?.published ?? '2026-01-01';

  const items = entries
    .map((entry) => {
      const url = absoluteUrl(origin, entry.path);
      return [
        '<entry>',
        `<title>${xmlEscape(entry.title)}</title>`,
        `<id>${xmlEscape(entry.id)}</id>`,
        `<link href="${xmlEscape(url)}"/>`,
        `<published>${asIsoDate(entry.published)}</published>`,
        `<updated>${asIsoDate(entry.updated ?? entry.published)}</updated>`,
        entry.author ? `<author><name>${xmlEscape(entry.author)}</name></author>` : '',
        `<category term="${xmlEscape(entry.category)}"/>`,
        `<summary>${xmlEscape(entry.description)}</summary>`,
        '</entry>',
      ]
        .filter(Boolean)
        .join('');
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom"><title>AIC Engineering</title><id>${xmlEscape(origin)}</id><link href="${xmlEscape(origin)}"/><link href="${xmlEscape(absoluteUrl(origin, '/atom.xml'))}" rel="self" type="application/atom+xml"/><updated>${asIsoDate(latest)}</updated><subtitle>Articles, engineering journal entries, and changelogs from the public Monad engineering record.</subtitle>${items}</feed>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
