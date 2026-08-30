import { permanentRedirect } from 'next/navigation';

export default async function Page(
  props: PageProps<'/docs/building-monad/[[...slug]]'>,
) {
  const params = await props.params;
  const suffix = params.slug?.join('/');

  permanentRedirect(suffix ? `/building-monad/${suffix}` : '/building-monad');
}
