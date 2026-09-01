import { PublicPage } from '@/components/public-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contributing',
  description: 'How to contribute to Monad and the AIC Engineering publication site.',
};

export default function ContributingPage() {
  return (
    <PublicPage
      eyebrow="Community"
      title="Contributing"
      description="Contributions are welcome when they preserve the distinction between project ideas, governed engineering truth, implementation evidence, and public narrative."
    >
      <section>
        <h2>Choose the repository first</h2>
        <ul>
          <li>
            <a href="https://github.com/monad-framework/monad">Monad</a> — core product, architecture, requirements,
            specifications, implementation, tests, and engineering governance.
          </li>
          <li>
            <a href="https://github.com/monad-framework/aic-fumadocs-app">AIC Engineering site</a> — website code,
            publication rendering, navigation, feeds, and site-specific content defects.
          </li>
        </ul>
      </section>

      <section>
        <h2>Before opening a pull request</h2>
        <ol>
          <li>Read the relevant current documentation and governed artifacts.</li>
          <li>Search existing issues and pull requests to avoid duplicating active work.</li>
          <li>Keep the change bounded and state what problem it solves.</li>
          <li>Explain which requirements, decisions, specifications, or publication rules apply.</li>
          <li>Add or update verification appropriate to the change.</li>
          <li>Run the repository's documented checks before requesting review.</li>
        </ol>
      </section>

      <section>
        <h2>Documentation and editorial contributions</h2>
        <p>
          Put current technical truth in <a href="/docs">Documentation</a>, chronological working history in the
          <a href="/journal"> Engineering Journal</a>, meaningful change boundaries in <a href="/changelogs">Changelogs</a>,
          editorial publications in <a href="/articles">Articles</a>, and curated narrative in <a href="/building-monad">Building Monad</a>.
          Avoid copying the same authoritative claim into several places.
        </p>
      </section>

      <section>
        <h2>Behavior and review</h2>
        <p>
          Participation is governed by the <a href="/code-of-conduct">Code of Conduct</a>. Review may request changes for
          correctness, scope, evidence, security, accessibility, maintainability, or consistency with accepted project decisions.
        </p>
      </section>

      <section>
        <h2>Security-sensitive reports</h2>
        <p>
          Do not disclose exploitable security details in a public issue. Use GitHub's private security-reporting features
          for the affected repository when available, or use the options described on the <a href="/contact">Contact</a> page.
        </p>
      </section>
    </PublicPage>
  );
}
