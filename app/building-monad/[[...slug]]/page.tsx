import { getMDXComponents } from '@/components/mdx';
import { buildingMonadSource } from '@/lib/source';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default async function Page(props: PageProps<'/building-monad/[[...slug]]'>) {
  const params = await props.params;
  const page = buildingMonadSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(buildingMonadSource, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return buildingMonadSource.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/building-monad/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = buildingMonadSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
