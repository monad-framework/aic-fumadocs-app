import { PublicPage } from '@/components/public-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roadmap',
  description: 'How to read the public Monad roadmap without confusing planned, active, released, and verified work.',
};

export default function RoadmapPage() {
  return (
    <PublicPage
      eyebrow="Project"
      title="Roadmap"
      description="A durable orientation page for where Monad is going and where to find the authoritative status of the work."
    >
      <section>
        <h2>How to read the roadmap</h2>
        <p>
          Monad deliberately separates aspiration from engineering status. A capability can be discussed, specified,
          scheduled, implemented, released, or verified, and those states are not interchangeable.
        </p>
        <p className="mt-3">
          The authoritative current coordination record is <a href="/docs/project">Project</a>. Use this page as an entry
          point, not as a second source of project truth.
        </p>
      </section>

      <section>
        <h2>Current path</h2>
        <ol>
          <li>Stabilize the problem definition, semantic model, authority model, and governed artifact system.</li>
          <li>Complete the specifications and evidence needed to bound implementation.</li>
          <li>Implement the smallest end-to-end Monad capability that proves the engineering-knowledge compilation thesis.</li>
          <li>Verify determinism, provenance, policy enforcement, explainability, and local-first behavior.</li>
          <li>Expand integrations, execution, agent workflows, ecosystem surfaces, and deployment modes only from evidence.</li>
        </ol>
      </section>

      <section>
        <h2>Follow progress from the right record</h2>
        <ul>
          <li><a href="/docs/project">Project</a> — current status, boundaries, roadmap, and open questions.</li>
          <li><a href="/building-monad/phases">Project Phases</a> — the curated lifecycle view of the work.</li>
          <li><a href="/journal">Engineering Journal</a> — what is happening close to the work.</li>
          <li><a href="/changelogs">Changelogs</a> — meaningful published changes and releases.</li>
          <li><a href="/docs/artifacts">Artifacts</a> — the requirements, specifications, decisions, evidence, and verification that govern delivery.</li>
        </ul>
      </section>

      <section>
        <h2>Roadmap rule</h2>
        <p>
          A roadmap item is a statement of intended direction, not proof that a capability exists. When this page and a
          governed Project or Artifact record appear to differ, the governed record takes precedence.
        </p>
      </section>
    </PublicPage>
  );
}
