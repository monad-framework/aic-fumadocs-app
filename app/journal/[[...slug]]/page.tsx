import { getMDXComponents } from '@/components/mdx';
import { journalSource } from '@/lib/source';
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

export default async function Page(props: PageProps<'/journal/[[...slug]]'>) {
  const params = await props.params;
  const page = journalSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const journal = page.data.journal;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>

      {journal && (
        <div className="not-prose my-6 rounded-xl border bg-fd-card/50 p-4">
          <dl className="grid gap-4 text-sm sm:grid-cols-2 xl:grid-cols-4">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Entry
              </dt>
              <dd className="mt-1 font-mono text-fd-foreground">{journal.id}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Date
              </dt>
              <dd className="mt-1 text-fd-foreground">{journal.date}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Kind
              </dt>
              <dd className="mt-1 text-fd-foreground">{formatLabel(journal.kind)}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Status
              </dt>
              <dd className="mt-1 text-fd-foreground">{formatLabel(journal.status)}</dd>
            </div>
            {journal.phase && (
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                  Phase
                </dt>
                <dd className="mt-1 text-fd-foreground">{formatLabel(journal.phase)}</dd>
              </div>
            )}
            {journal.updated && (
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                  Updated
                </dt>
                <dd className="mt-1 text-fd-foreground">{journal.updated}</dd>
              </div>
            )}
          </dl>

          {journal.topics.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <p className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Topics
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {journal.topics.map((topic) => (
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

          {journal.related.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <p className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Related
              </p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {journal.related.map((item) => (
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
            a: createRelativeLink(journalSource, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return journalSource.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/journal/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = journalSource.getPage(params.slug);
  if (!page) notFound();

  const journal = page.data.journal;

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: journal
      ? {
          type: 'article',
          publishedTime: `${journal.date}T00:00:00.000Z`,
          modifiedTime: journal.updated
            ? `${journal.updated}T00:00:00.000Z`
            : undefined,
        }
      : undefined,
  };
}
