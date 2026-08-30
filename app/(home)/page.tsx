import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Monad — Engineering software systems for the age of AI",
  description:
    "Monad is an open engineering project exploring how software systems can become more understandable, governable, reproducible, and capable of working effectively with increasingly capable AI.",
};

type LinkCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
  children?: ReactNode;
};

function LinkCard({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "Explore",
  children,
}: LinkCardProps) {
  return (
    <Link
      href={href}
      className="
        group flex h-full flex-col rounded-xl border border-fd-border
        bg-fd-background p-6 transition-colors
        hover:bg-fd-muted/40
      "
    >
      {eyebrow ? (
        <span className="mb-4 font-mono text-xs text-fd-muted-foreground">
          {eyebrow}
        </span>
      ) : null}

      <h3 className="text-lg font-semibold tracking-tight text-fd-foreground">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-fd-muted-foreground">
        {description}
      </p>

      {children}

      <span className="mt-6 text-sm font-medium text-fd-foreground">
        {linkLabel}
        <span
          aria-hidden="true"
          className="ml-1 inline-block transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </Link>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-fd-muted-foreground">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-semibold tracking-tight text-fd-foreground md:text-4xl">
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

const readerPaths = [
  {
    eyebrow: "01 / Builders",
    title: "I want to see it being built",
    description:
      "Follow the engineering process from idea through architecture, specifications, implementation, experiments, failures, revisions, and releases.",
    href: "/docs/building-monad",
    linkLabel: "Follow the build",
  },
  {
    eyebrow: "02 / Architects",
    title: "I want to understand the system",
    description:
      "Start with the current authoritative model of Monad: its principles, concepts, architecture, boundaries, components, and interfaces.",
    href: "/docs/system",
    linkLabel: "Explore the system",
  },
  {
    eyebrow: "03 / Implementers",
    title: "I need the engineering details",
    description:
      "Inspect requirements, specifications, ADRs, schemas, interfaces, experiments, verification evidence, and the artifacts needed to implement the system.",
    href: "/docs/artifacts",
    linkLabel: "Inspect the artifacts",
  },
  {
    eyebrow: "04 / Historians",
    title: "I want to know why it became this",
    description:
      "Trace the decisions, competing ideas, rejected approaches, evidence, revisions, and reasoning that shaped the system over time.",
    href: "/docs/building-monad",
    linkLabel: "Trace the evolution",
  },
] as const;

const siteAreas = [
  {
    number: "01",
    title: "Start Here",
    href: "/docs",
    description:
      "The permanent orientation layer: what Monad is, why it exists, how this site works, and where to begin.",
  },
  {
    number: "02",
    title: "Building Monad",
    href: "/docs/building-monad",
    description:
      "The public narrative: essays, engineering journal entries, installments, project phases, discoveries, and the story of the build.",
  },
  {
    number: "03",
    title: "System",
    href: "/docs/system",
    description:
      "The current authoritative explanation of the system: concepts, principles, architecture, components, interfaces, and technical documentation.",
  },
  {
    number: "04",
    title: "Artifacts",
    href: "/docs/artifacts",
    description:
      "The inspectable engineering record: requirements, specifications, ADRs, experiments, evidence, reviews, verification, and indexes.",
  },
] as const;

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-fd-border">
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            bg-[radial-gradient(circle_at_top_right,var(--color-fd-primary),transparent_35%)]
            opacity-[0.06]
          "
        />

        <div className="relative mx-auto w-full max-w-screen-2xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-fd-border px-3 py-1 text-xs text-fd-muted-foreground">
              <span className="size-1.5 rounded-full bg-fd-primary" />
              An engineering project being built in public
            </div>

            <h1
              className="
                max-w-5xl text-5xl font-semibold tracking-[-0.04em]
                text-fd-foreground sm:text-6xl lg:text-7xl
              "
            >
              Engineering software systems for the age of AI.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-fd-muted-foreground sm:text-xl">
              Monad is an open engineering project exploring how software
              systems can become more understandable, governable,
              reproducible, and capable of working effectively with
              increasingly capable AI.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-fd-muted-foreground">
              The system is being designed from first principles—and the
              reasoning, architecture, specifications, experiments, failures,
              decisions, and implementation are being published as part of the
              project itself.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/docs/building-monad"
                className="
                  inline-flex min-h-11 items-center justify-center rounded-lg
                  bg-fd-primary px-5 text-sm font-medium
                  text-fd-primary-foreground transition-opacity hover:opacity-90
                "
              >
                Start with the story
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="/docs/system"
                className="
                  inline-flex min-h-11 items-center justify-center rounded-lg
                  border border-fd-border px-5 text-sm font-medium
                  text-fd-foreground transition-colors hover:bg-fd-muted
                "
              >
                Explore the system
              </Link>

              <Link
                href="/docs/artifacts"
                className="
                  inline-flex min-h-11 items-center justify-center rounded-lg
                  px-5 text-sm font-medium text-fd-muted-foreground
                  transition-colors hover:text-fd-foreground
                "
              >
                Inspect the artifacts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="border-b border-fd-border">
        <div className="mx-auto grid w-full max-w-screen-2xl gap-16 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-32">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-fd-muted-foreground">
              The problem
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-fd-foreground md:text-4xl">
              Software knows far less about itself than we pretend it does.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-7 text-fd-muted-foreground md:text-lg md:leading-8">
            <p>
              A modern software system exists across source code, configuration,
              package managers, build systems, issue trackers, pull requests,
              architecture documents, specifications, deployment platforms,
              observability systems, tribal knowledge, and the minds of the
              people building it.
            </p>

            <p>
              We have become very good at storing these fragments. We are much
              worse at preserving the relationships between them.
            </p>

            <p className="font-medium text-fd-foreground">
              The result is a system whose full meaning exists almost nowhere.
            </p>

            <p>
              Humans spend enormous effort reconstructing context. AI systems
              face the same problem at greater scale: they can read enormous
              quantities of information, yet still lack a trustworthy model of
              what the system is, why it is that way, what is authoritative,
              what may change, and what must remain true.
            </p>
          </div>
        </div>
      </section>

      {/* Core question */}
      <section className="border-b border-fd-border bg-fd-muted/20">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-fd-muted-foreground">
              The question behind Monad
            </p>

            <blockquote className="mt-8 text-3xl font-medium leading-tight tracking-[-0.03em] text-fd-foreground sm:text-4xl md:text-5xl">
              What would software engineering look like if the system itself
              could preserve and expose enough meaning to be understood by both
              humans and machines?
            </blockquote>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-fd-muted-foreground md:text-lg">
              Monad is an attempt to investigate that question seriously—not
              by adding another AI wrapper around existing development tools,
              but by reconsidering some of the foundations beneath them.
            </p>
          </div>
        </div>
      </section>

      {/* What Monad is */}
      <section className="border-b border-fd-border">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="The project"
            title="Monad is not just another developer tool."
            description="It is an investigation into a different substrate for software engineering: one in which identity, intent, authority, relationships, provenance, lifecycle, evidence, and system state can become explicit parts of the system rather than scattered side effects."
          />

          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-fd-border bg-fd-border md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Semantic system model",
                "Represent the meaningful entities and relationships that make up a software system, independently of whichever files, tools, or platforms happen to represent them.",
              ],
              [
                "Durable identity",
                "Allow important concepts and artifacts to retain identity across moves, renames, regenerations, projections, and changes in representation.",
              ],
              [
                "Explicit authority",
                "Make it possible to distinguish authoritative truth from generated views, observations, hypotheses, coordination data, and transient state.",
              ],
              [
                "Provenance & evidence",
                "Preserve where claims, decisions, artifacts, and system states came from—and what evidence supports them.",
              ],
              [
                "Governed evolution",
                "Treat important changes as explicit transitions constrained by policy, invariants, review, and verifiable evidence.",
              ],
              [
                "AI-ready context",
                "Give AI systems something stronger than a directory full of files: a structured, inspectable model of the engineering environment in which they operate.",
              ],
            ].map(([title, description]) => (
              <article
                key={title}
                className="bg-fd-background p-6 sm:p-8"
              >
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

      {/* Reading paths */}
      <section className="border-b border-fd-border">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Choose your path"
            title="You do not have to read this site from beginning to end."
            description="Monad is documented from several perspectives. Start with the perspective that matches why you are here."
          />

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {readerPaths.map((path) => (
              <LinkCard key={path.eyebrow} {...path} />
            ))}
          </div>
        </div>
      </section>

      {/* Site architecture */}
      <section className="border-b border-fd-border bg-fd-muted/20">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="How this site works"
            title="The documentation is part of the experiment."
            description="This site deliberately separates the story of the project, the current truth of the system, and the evidence from which that truth emerged."
          />

          <div className="mt-16">
            {siteAreas.map((area) => (
              <Link
                key={area.number}
                href={area.href}
                className="
                  group grid gap-4 border-t border-fd-border py-8
                  transition-colors
                  last:border-b
                  md:grid-cols-[80px_260px_1fr_auto]
                  md:items-start
                "
              >
                <span className="font-mono text-xs text-fd-muted-foreground">
                  {area.number}
                </span>

                <h3 className="text-xl font-semibold tracking-tight text-fd-foreground">
                  {area.title}
                </h3>

                <p className="max-w-2xl text-sm leading-6 text-fd-muted-foreground">
                  {area.description}
                </p>

                <span
                  aria-hidden="true"
                  className="
                    hidden text-fd-muted-foreground transition-transform
                    group-hover:translate-x-1 group-hover:text-fd-foreground
                    md:block
                  "
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Three layers */}
      <section className="border-b border-fd-border">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Three kinds of truth"
            title="Narrative, authority, and evidence stay separate—but connected."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <div className="relative border-l border-fd-border pl-6">
              <span className="font-mono text-xs text-fd-muted-foreground">
                01
              </span>

              <h3 className="mt-4 text-xl font-semibold text-fd-foreground">
                What happened
              </h3>

              <p className="mt-3 text-sm leading-6 text-fd-muted-foreground">
                <strong className="font-medium text-fd-foreground">
                  Building Monad
                </strong>{" "}
                preserves the chronological story: questions, discoveries,
                mistakes, experiments, reversals, implementation work, and
                lessons learned.
              </p>
            </div>

            <div className="relative border-l border-fd-border pl-6">
              <span className="font-mono text-xs text-fd-muted-foreground">
                02
              </span>

              <h3 className="mt-4 text-xl font-semibold text-fd-foreground">
                What is true now
              </h3>

              <p className="mt-3 text-sm leading-6 text-fd-muted-foreground">
                <strong className="font-medium text-fd-foreground">
                  System
                </strong>{" "}
                describes the current authoritative understanding without
                forcing readers to reconstruct it from the entire history.
              </p>
            </div>

            <div className="relative border-l border-fd-border pl-6">
              <span className="font-mono text-xs text-fd-muted-foreground">
                03
              </span>

              <h3 className="mt-4 text-xl font-semibold text-fd-foreground">
                Why we believe it
              </h3>

              <p className="mt-3 text-sm leading-6 text-fd-muted-foreground">
                <strong className="font-medium text-fd-foreground">
                  Artifacts
                </strong>{" "}
                preserve the specifications, decisions, evidence, experiments,
                reviews, requirements, and other inspectable records behind the
                system.
              </p>
            </div>
          </div>

          <div className="mt-16 overflow-x-auto">
            <div className="min-w-[650px] rounded-xl border border-fd-border p-8 font-mono text-sm">
              <div className="flex items-center justify-center">
                <span className="rounded-lg border border-fd-border px-4 py-3 text-fd-foreground">
                  Building Monad
                </span>

                <span className="px-5 text-fd-muted-foreground">→</span>

                <span className="rounded-lg border border-fd-border px-4 py-3 text-fd-foreground">
                  Decisions + Evidence
                </span>

                <span className="px-5 text-fd-muted-foreground">→</span>

                <span className="rounded-lg border border-fd-border px-4 py-3 text-fd-foreground">
                  System
                </span>
              </div>

              <div className="mt-5 text-center text-xs text-fd-muted-foreground">
                history → reasoning → current authoritative understanding
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build in public */}
      <section className="border-b border-fd-border">
        <div className="mx-auto grid w-full max-w-screen-2xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Building in public"
            title="The process is part of the product."
          />

          <div className="space-y-5 text-base leading-7 text-fd-muted-foreground">
            <p>
              Monad is being built in public because the engineering process
              itself contains information worth preserving.
            </p>

            <p>
              Good systems are not born fully formed. They emerge through
              questions, competing hypotheses, constraints, experiments,
              mistakes, evidence, decisions, implementation, and revision.
            </p>

            <p>
              Conventional documentation usually captures only the final
              result. That throws away much of the knowledge required to
              understand why the result exists.
            </p>

            <p className="font-medium text-fd-foreground">
              Here, the trail is intentional.
            </p>

            <p>
              You should be able to inspect not only what Monad becomes, but
              how it became that way—and where the evidence is strong, weak,
              incomplete, or still contested.
            </p>

            <Link
              href="/docs/building-monad"
              className="inline-flex pt-2 text-sm font-medium text-fd-foreground"
            >
              Read Building Monad
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Invitation */}
      <section className="border-b border-fd-border bg-fd-muted/20">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-fd-muted-foreground">
              This is an open investigation
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-fd-foreground sm:text-4xl md:text-5xl">
              You are arriving while the answer is still being discovered.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-fd-muted-foreground md:text-lg">
              Some ideas documented here will survive. Some will change. Some
              will fail completely. That distinction matters—and preserving it
              is part of the point.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/docs/building-monad"
                className="
                  inline-flex min-h-11 items-center rounded-lg
                  bg-fd-primary px-5 text-sm font-medium
                  text-fd-primary-foreground
                "
              >
                Follow from the beginning
              </Link>

              <a
                href="https://github.com/monad-framework"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex min-h-11 items-center rounded-lg
                  border border-fd-border px-5 text-sm font-medium
                  text-fd-foreground transition-colors hover:bg-fd-muted
                "
              >
                Explore on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}