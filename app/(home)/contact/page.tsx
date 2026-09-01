import { PublicPage } from '@/components/public-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Ways to contact and participate in the Monad and AIC Engineering projects.',
};

export default function ContactPage() {
  return (
    <PublicPage
      eyebrow="Community"
      title="Contact"
      description="Use the channel that matches the kind of question, report, or contribution you want to make."
    >
      <section>
        <h2>Project questions, proposals, and engineering work</h2>
        <p>
          Use the <a href="https://github.com/monad-framework/monad/issues">Monad issue tracker</a> for actionable questions,
          proposals, defects, or engineering work in Monad itself. GitHub Discussions is not currently enabled on the Monad
          repository, so the site does not direct readers to a Discussions URL that may not exist.
        </p>
      </section>

      <section>
        <h2>Good reports are reproducible</h2>
        <p>
          Include enough environment, reproduction, expected behavior, actual behavior, and evidence for someone else to
          evaluate the report. When a question is architectural or requirements-related, link the artifact or documentation
          that frames the disagreement.
        </p>
      </section>

      <section>
        <h2>Website problems</h2>
        <p>
          For broken links, rendering problems, accessibility defects, feed problems, or other issues specific to this site,
          open an issue in the
          <a href="https://github.com/monad-framework/aic-fumadocs-app/issues"> AIC Engineering site repository</a>.
        </p>
      </section>

      <section>
        <h2>Security-sensitive information</h2>
        <p>
          Do not post exploitable security details in a public issue. Prefer GitHub's private security-reporting facilities for
          the affected repository when available. If private reporting is not available, open a minimal public issue asking a
          maintainer for a private contact channel without including the vulnerability details.
        </p>
      </section>

      <section>
        <h2>Conduct or accessibility concerns</h2>
        <p>
          For community conduct, see the <a href="/code-of-conduct">Code of Conduct</a>. For barriers using this website,
          see the <a href="/accessibility">Accessibility</a> page and include the affected URL, browser or assistive
          technology when relevant, and a description of the barrier.
        </p>
      </section>
    </PublicPage>
  );
}
