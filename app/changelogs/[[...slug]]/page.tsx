import { getMDXComponents } from '@/components/mdx';
import { changelogsSource } from '@/lib/source';
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

export default async function Page(props: PageProps<'/changelogs/[[...slug]]'>) {
  const params = await props.params;
  const page = changelogsSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const changelog = page.data.changelog;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>

      {changelog && (
        <div className="not-prose my-6 rounded-xl border bg-fd-card/50 p-4">
          <dl className="grid gap-4 text-sm sm:grid-cols-2 xl:grid-cols-4">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Record
              </dt>
              <dd className="mt-1 font-mono text-fd-foreground">{changelog.id}</dd>
            </div>
            {changelog.version && (
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                  Version
                </dt>
                <dd className="mt-1 font-mono text-fd-foreground">{changelog.version}</dd>
              </div>
            )}
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Date
              </dt>
              <dd className="mt-1 text-fd-foreground">{changelog.date}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Kind
              </dt>
              <dd className="mt-1 text-fd-foreground">{formatLabel(changelog.kind)}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Status
              </dt>
              <dd className="mt-1 text-fd-foreground">{formatLabel(changelog.status)}</dd>
            </div>
            {changelog.channel && (
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                  Channel
                </dt>
                <dd className="mt-1 text-fd-foreground">{formatLabel(changelog.channel)}</dd>
              </div>
            )}
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Breaking changes
              </dt>
              <dd className="mt-1 text-fd-foreground">{changelog.breaking ? 'Yes' : 'No'}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Migration required
              </dt>
              <dd className="mt-1 text-fd-foreground">{changelog.migration ? 'Yes' : 'No'}</dd>
            </div>
            {changelog.updated && (
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                  Corrected
                </dt>
                <dd className="mt-1 text-fd-foreground">{changelog.updated}</dd>
              </div>
            )}
          </dl>

          {changelog.areas.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <p className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Affected areas
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {changelog.areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border px-2.5 py-1 text-xs text-fd-muted-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {changelog.related.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <p className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
                Related records
              </p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {changelog.related.map((item) => (
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
            a: createRelativeLink(changelogsSource, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return changelogsSource.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/changelogs/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = changelogsSource.getPage(params.slug);
  if (!page) notFound();

  const changelog = page.data.changelog;

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: changelog
      ? {
          type: 'article',
          publishedTime: `${changelog.date}T00:00:00.000Z`,
          modifiedTime: changelog.updated
            ? `${changelog.updated}T00:00:00.000Z`
            : undefined,
        }
      : undefined,
  };
}
