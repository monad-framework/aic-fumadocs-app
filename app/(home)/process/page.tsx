import { PublicPage } from '@/components/public-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process',
  description: 'How Monad engineering work moves from questions and proposals into governed artifacts, implementation, verification, and publication.',
};

export default function ProcessPage() {
  return (
    <PublicPage
      eyebrow="Project"
      title="Engineering process"
      description="How questions become governed engineering work without losing the history, authority, evidence, and publication boundaries that make the result understandable."
    >
      <section>
        <h2>The operating flow</h2>
        <ol>
          <li>Capture the problem, question, hypothesis, or desired outcome.</li>
          <li>Research and preserve discoveries, uncertainty, alternatives, and failures in the working record.</li>
          <li>Promote durable conclusions into the appropriate requirement, specification, model, policy, or accepted decision.</li>
          <li>Define bounded implementation work with explicit inputs, authority, constraints, acceptance criteria, and verification.</li>
          <li>Execute through native tools and bounded AI assistance without silently changing accepted engineering truth.</li>
          <li>Verify the result and preserve evidence, provenance, and residual risk.</li>
          <li>Publish meaningful externally visible changes through Changelogs and explain durable ideas through Articles and Building Monad.</li>
        </ol>
      </section>

      <section>
        <h2>Which record owns what?</h2>
        <ul>
          <li><a href="/journal">Engineering Journal</a> preserves what happened while the work was being done.</li>
          <li><a href="/docs/artifacts">Artifacts</a> preserve requirements, specifications, decisions, evidence, reviews, and verification.</li>
          <li><a href="/docs/system">System</a> explains the current authoritative technical model.</li>
          <li><a href="/changelogs">Changelogs</a> publish meaningful change boundaries.</li>
          <li><a href="/articles">Articles</a> explain, investigate, synthesize, and argue.</li>
          <li><a href="/building-monad">Building Monad</a> curates those records into coherent reading paths.</li>
        </ul>
      </section>

      <section>
        <h2>Authority rule</h2>
        <p>
          A convenient projection, issue, generated view, AI response, or narrative explanation does not silently outrank
          the accepted record that governs a claim. Conflicts should be surfaced and reconciled rather than hidden by the
          newest or easiest-to-read representation.
        </p>
      </section>

      <section>
        <h2>Want to participate?</h2>
        <p>
          Read <a href="/contributing">Contributing</a> and the <a href="/code-of-conduct">Code of Conduct</a> before
          proposing changes. For current implementation status, start with <a href="/docs/project">Project</a>.
        </p>
      </section>
    </PublicPage>
  );
}
