import type { ReactNode } from 'react';

export function PublicPage({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <header className="max-w-3xl border-b border-fd-border pb-10">
        {eyebrow ? (
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-fd-muted-foreground">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-fd-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-fd-muted-foreground">
          {description}
        </p>
      </header>

      <div className="mt-10 space-y-10 text-base leading-7 text-fd-muted-foreground [&_a]:font-medium [&_a]:text-fd-foreground [&_a]:underline [&_a]:underline-offset-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-fd-foreground [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-fd-foreground [&_li]:my-1.5 [&_ol]:ml-6 [&_ol]:list-decimal [&_p]:max-w-3xl [&_strong]:font-semibold [&_strong]:text-fd-foreground [&_ul]:ml-6 [&_ul]:list-disc">
        {children}
      </div>
    </div>
  );
}
