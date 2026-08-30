import Link from 'next/link';

type PathCard = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  action: string;
};

export const metadata = {
  title: 'Monad — Engineering software systems for the age of AI',
  description:
    'Monad is an open engineering project exploring how software systems can preserve enough meaning, authority, history, and evidence to be understood by humans and machines.',
};

const readerPaths: readonly PathCard[] = [
  {
    eyebrow: 'New here',
    title: 'Orient me first',
    description:
      'Understand what Monad is, how this site is organized, and which records answer which kinds of questions.',
    href: '/docs',
    action: 'Start here',
  },
  {
    eyebrow: 'Builder',
    title: 'Show me how it is being built',
    description:
      'Follow curated phases, installments, turning points, and reading paths across the real engineering record.',
    href: '/building-monad',
    action: 'Follow Building Monad',
  },
  {
    eyebrow: 'Architect',
    title: 'Show me the system as it stands now',
    description:
      'Read the current authoritative concepts, principles, architecture, components, interfaces, and terminology.',
    href: '/docs/system',
    action: 'Explore the system',
  },
  {
    eyebrow: 'Implementer',
    title: 'Show me what governs implementation',
    description:
      'Inspect requirements, specifications, ADRs, schemas, evidence, reviews, and verification records.',
    href: '/docs/artifacts',
    action: 'Inspect the artifacts',
  },
  {
    eyebrow: 'Historian',
    title: 'Show me what happened and when',
    description:
      'Read the chronological working record, including discoveries, failures, revisions, and changes in understanding.',
    href: '/journal',
    action: 'Read the journal',
  },
];

const knowledgeDomains = [
  {
    number: '01',
    title: 'Documentation',
    question: 'What is true now?',
    description:
      'Current authoritative technical knowledge and the governed artifacts that define, constrain, and verify the system.',
    href: '/docs',
  },
  {
    number: '02',
    title: 'Engineering Journal',
    question: 'What happened while doing the work?',
    description:
      'The chronological working record, preserving uncertainty, experiments, failures, discoveries, and revisions.',
    href: '/journal',
  },
  {
    number: '03',
    title: 'Changelogs',
    question: 'What changed at a meaningful boundary?',
    description:
      'Release and change-set records focused on externally meaningful deltas, compatibility, migration, and impact.',
    href: '/changelogs',
  },
  {
    number: '04',
    title: 'Articles',
    question: 'What should readers understand about this?',
    description:
      'Editorial publishing: essays, structured research, and formal white papers with their own publication lifecycle.',
    href: '/articles',
  },
  {
    number: '05',
    title: 'Building Monad',
    question: 'How do these records fit together into the story?',
    description:
      'The curation layer: series, installments, phases, and reading paths that connect source records without replacing them.',
    href: '/building-monad',
  },
] as const;

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-fd-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-fd-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-fd-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-fd-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-fd-primary),transparent_36%)] opacity-[0.06]"
        />
        <div className="relative mx-auto w-full max-w-screen-2xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-fd-border px-3 py-1 text-xs text-fd-muted-foreground">
              <span className="size-1.5 rounded-full bg-fd-primary" />
              Open engineering · built in public
            </div>

            <h1 className="mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.04em] text-fd-foreground sm:text-6xl lg:text-7xl">
              A software system should be able to explain itself.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-fd-muted-foreground sm:text-xl">
              Monad explores how software systems can preserve enough meaning,
              identity, authority, provenance, history, and evidence to be
              understood and safely evolved by humans, automation, and AI.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-fd-muted-foreground">
              The project is being designed from first principles, and the
              engineering record is public: current documentation, governed
              artifacts, journal history, releases, editorial analysis, and the
              curated story connecting them.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/docs"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-fd-primary px-5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
              >
                Start here <span className="ml-2">→</span>
              </Link>
              <Link
                href="/building-monad"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-fd-border px-5 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-muted"
              >
                Follow the build
              </Link>
              <Link
                href="/docs/system"
                className="inline-flex min-h-11 items-center justify-center rounded-lg px-5 text-sm font-medium text-fd-muted-foreground transition-colors hover:text-fd-foreground"
              >
                Read the current system
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-fd-border">
        <div className="mx-auto grid w-full max-w-screen-2xl gap-14 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-32">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-fd-muted-foreground">
              The problem
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-fd-foreground md:text-4xl">
              The code is not the whole system.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-7 text-fd-muted-foreground md:text-lg md:leading-8">
            <p>
              A real software system exists across code, configuration,
              requirements, decisions, policies, issues, tests, deployments,
              operational state, documentation, conversations, and human memory.
            </p>
            <p>
              We preserve many of those fragments. We preserve their identity,
              authority, provenance, relationships, and historical meaning much
              less reliably.
            </p>
            <p className="font-medium text-fd-foreground">
              Humans reconstruct that missing context constantly. AI systems have
              to do the same reconstruction before they can act responsibly.
            </p>
            <p>
              Monad asks whether more of that engineering meaning should become
              an explicit, inspectable part of the system itself—and what such
              structure must prove before its complexity is justified.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-fd-border bg-fd-muted/20">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Choose by intent"
            title="Start with the question you came to answer."
            description="You do not need to understand the repository layout first. Each path takes you to the record designed for that kind of question."
          />

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {readerPaths.map((path) => (
              <Link
                key={path.eyebrow}
                href={path.href}
                className="group flex min-h-72 flex-col rounded-xl border border-fd-border bg-fd-background p-6 transition-colors hover:bg-fd-muted/40"
              >
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-fd-muted-foreground">
                  {path.eyebrow}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-fd-foreground">
                  {path.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-fd-muted-foreground">
                  {path.description}
                </p>
                <span className="mt-6 text-sm font-medium text-fd-foreground">
                  {path.action}{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-fd-border">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Knowledge architecture"
            title="Five domains. Five different jobs."
            description="The same engineering event may appear in several places, but each surface has a different responsibility. Keeping those responsibilities separate makes the record easier to trust and navigate."
          />

          <div className="mt-14">
            {knowledgeDomains.map((domain) => (
              <Link
                key={domain.number}
                href={domain.href}
                className="group grid gap-4 border-t border-fd-border py-8 last:border-b md:grid-cols-[72px_220px_260px_1fr_auto] md:items-start"
              >
                <span className="font-mono text-xs text-fd-muted-foreground">
                  {domain.number}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-fd-foreground">
                  {domain.title}
                </h3>
                <p className="font-medium text-fd-foreground">
                  {domain.question}
                </p>
                <p className="max-w-2xl text-sm leading-6 text-fd-muted-foreground">
                  {domain.description}
                </p>
                <span className="hidden text-fd-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-fd-foreground md:block">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-fd-border bg-fd-muted/20">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="How the record connects"
            title="Source records stay authoritative. Curation adds context."
            description="A decision should not need to be copied into an essay to become understandable, and a journal entry should not become authoritative merely because it happened first."
          />

          <div className="mt-14 overflow-x-auto rounded-xl border border-fd-border bg-fd-background p-6 sm:p-8">
            <pre className="min-w-[720px] text-sm leading-7 text-fd-muted-foreground">
{`engineering work
      ↓
Journal preserves what happened
      ↓
Artifacts preserve what was specified, decided, evidenced, and verified
      ↓
System explains current authoritative technical truth
      ↓
Changelogs publish meaningful change boundaries
      ↓
Articles explain significance, research, and durable arguments
      ↓
Building Monad curates the records into coherent reading paths`}
            </pre>
          </div>

          <div className="mt-8 rounded-xl border border-fd-border bg-fd-background p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-fd-foreground">
              Where does project status fit?
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-fd-muted-foreground">
              Status, roadmap, open questions, and current execution boundaries are
              coordination information rather than another publication domain.
              Use Project when you need to distinguish aspiration from active work,
              completed work, released work, and verified capability.
            </p>
            <Link
              href="/docs/project"
              className="mt-5 inline-flex text-sm font-medium text-fd-foreground hover:underline"
            >
              View current project context →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-fd-border">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="The thesis"
            title="More structure is useful only if it earns its cost."
            description="Monad is not built on the assumption that every project needs a semantic graph, formal governance, or rich metadata. Those are hypotheses that must outperform simpler alternatives where they are used."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-fd-border bg-fd-border md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                'Durable identity',
                'Important subjects should be able to survive moves, renames, regeneration, projection, and representation change when their underlying identity has not changed.',
              ],
              [
                'Explicit authority',
                'Authoritative claims, observations, hypotheses, generated views, and transient state should not become indistinguishable merely because they are all readable.',
              ],
              [
                'Provenance and evidence',
                'The system should preserve where important claims and artifacts came from and what evidence supports consequential conclusions.',
              ],
              [
                'Governed evolution',
                'Automation and AI should operate through explicit capabilities, policy, authority, and verification rather than unrestricted repository mutation.',
              ],
              [
                'Local inspectability',
                'Useful engineering truth should remain portable and inspectable without requiring every meaningful operation to depend on a remote proprietary service.',
              ],
              [
                'Falsifiability',
                'If simpler documentation, search, indexing, conventions, or increasingly capable AI can provide the same value with less cost, the architecture should change.',
              ],
            ].map(([title, description]) => (
              <article key={title} className="bg-fd-background p-6 sm:p-8">
                <h3 className="text-base font-semibold text-fd-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-fd-muted-foreground">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-fd-muted-foreground">
              Begin
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-fd-foreground md:text-4xl">
              Read the current truth, or follow how it became true.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-fd-muted-foreground md:text-lg">
              If you are new, start with Documentation for orientation. If the
              engineering journey is the reason you are here, start with Building
              Monad and follow the source records as deeply as you want.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/docs"
                className="inline-flex min-h-11 items-center rounded-lg bg-fd-primary px-5 text-sm font-medium text-fd-primary-foreground"
              >
                Enter the documentation
              </Link>
              <Link
                href="/building-monad"
                className="inline-flex min-h-11 items-center rounded-lg border border-fd-border px-5 text-sm font-medium text-fd-foreground"
              >
                Follow Building Monad
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
