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
        <h2>Project questions and discussion</h2>
        <p>
          Use <a href="https://github.com/orgs/monad-framework/discussions">Monad Framework Discussions</a> for questions,
          design discussion, feedback, and topics that benefit from a public conversation.
        </p>
      </section>

      <section>
        <h2>Monad bugs and engineering work</h2>
        <p>
          For defects or actionable work in Monad itself, use the
          <a href="https://github.com/monad-framework/monad/issues"> Monad issue tracker</a>. Include enough reproduction,
          environment, expected behavior, and evidence for someone else to evaluate the report.
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
          Do not post exploitable security details in a public discussion or issue. Prefer GitHub's private security-reporting
          facilities for the affected repository when available. If private reporting is not available, open a minimal public
          issue asking a maintainer for a private contact channel without including the vulnerability details.
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
