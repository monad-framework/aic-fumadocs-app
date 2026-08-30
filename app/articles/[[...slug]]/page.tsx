import { getMDXComponents } from '@/components/mdx';
import { articlesSource } from '@/lib/source';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

function formatLabel(value: string) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default async function Page(props: PageProps<'/articles/[[...slug]]'>) {
  const params = await props.params;
  const page = articlesSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const article = page.data.article;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>

      {article && (
        <div className="not-prose my-6 rounded-xl border bg-fd-card/50 p-4">
          <dl className="grid gap-4 text-sm sm:grid-cols-2 xl:grid-cols-4">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Publication
              </dt>
              <dd className="mt-1 font-mono text-fd-foreground">{article.id}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Type
              </dt>
              <dd className="mt-1 text-fd-foreground">{formatLabel(article.type)}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Published
              </dt>
              <dd className="mt-1 text-fd-foreground">{article.published}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Author
              </dt>
              <dd className="mt-1 text-fd-foreground">{article.author}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Status
              </dt>
              <dd className="mt-1 text-fd-foreground">{formatLabel(article.status)}</dd>
            </div>
            {article.updated && (
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                  Revised
                </dt>
                <dd className="mt-1 text-fd-foreground">{article.updated}</dd>
              </div>
            )}
            {article.readingMinutes && (
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                  Reading time
                </dt>
                <dd className="mt-1 text-fd-foreground">
                  {article.readingMinutes} min
                </dd>
              </div>
            )}
            {article.series && (
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                  Series
                </dt>
                <dd className="mt-1 text-fd-foreground">
                  {article.series.href ? (
                    <a
                      href={article.series.href}
                      className="font-medium text-fd-primary underline-offset-4 hover:underline"
                    >
                      {article.series.name} · Part {article.series.position}
                    </a>
                  ) : (
                    <>
                      {article.series.name} · Part {article.series.position}
                    </>
                  )}
                </dd>
              </div>
            )}
          </dl>

          {article.audience.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <p className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                For
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {article.audience.map((audience) => (
                  <span
                    key={audience}
                    className="rounded-full border px-2.5 py-1 text-xs text-fd-muted-foreground"
                  >
                    {audience}
                  </span>
                ))}
              </div>
            </div>
          )}

          {article.topics.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <p className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Topics
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {article.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border px-2.5 py-1 text-xs text-fd-muted-foreground"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          {article.related.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <p className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Related reading
              </p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {article.related.map((item) => (
                  <a
                    key={`${item.href}:${item.label}`}
                    href={item.href}
                    className="font-medium text-fd-primary underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(articlesSource, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return articlesSource.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/articles/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = articlesSource.getPage(params.slug);
  if (!page) notFound();

  const article = page.data.article;

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: article?.canonicalUrl
      ? {
          canonical: article.canonicalUrl,
        }
      : undefined,
    openGraph: article
      ? {
          type: 'article',
          publishedTime: `${article.published}T00:00:00.000Z`,
          modifiedTime: article.updated
            ? `${article.updated}T00:00:00.000Z`
            : undefined,
        }
      : undefined,
  };
}
