import {
  absoluteUrl,
  getSitemapPaths,
  xmlEscape,
} from '@/lib/publication-feed';

export const dynamic = 'force-dynamic';

export function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const urls = getSitemapPaths()
    .map((path) => `<url><loc>${xmlEscape(absoluteUrl(origin, path))}</loc></url>`)
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
