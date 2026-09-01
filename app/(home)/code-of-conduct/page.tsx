import { PublicPage } from '@/components/public-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Code of Conduct',
  description: 'Community participation expectations for Monad and AIC Engineering spaces.',
};

export default function CodeOfConductPage() {
  return (
    <PublicPage
      eyebrow="Community"
      title="Code of Conduct"
      description="A practical participation standard for technical disagreement, collaborative engineering, and public project discussion."
    >
      <section>
        <h2>Our standard</h2>
        <p>
          Project spaces should make rigorous technical disagreement possible without making participation hostile. Treat
          people with respect, criticize ideas and evidence rather than identities, and assume that corrections are part of
          engineering rather than a personal contest.
        </p>
      </section>

      <section>
        <h2>Expected behavior</h2>
        <ul>
          <li>Be specific, constructive, and evidence-oriented when disagreeing.</li>
          <li>Respect differing experience levels, backgrounds, and communication styles.</li>
          <li>Give credit for ideas, research, code, and other contributions.</li>
          <li>Disclose meaningful conflicts of interest when they affect a technical or governance discussion.</li>
          <li>Protect private information and handle security-sensitive material responsibly.</li>
          <li>Accept moderation and review decisions without harassment or retaliation.</li>
        </ul>
      </section>

      <section>
        <h2>Unacceptable behavior</h2>
        <ul>
          <li>Harassment, threats, stalking, intimidation, or sustained personal attacks.</li>
          <li>Discriminatory or demeaning language directed at a person or group.</li>
          <li>Publishing private information without permission.</li>
          <li>Sexualized conduct or unwanted sexual attention in project spaces.</li>
          <li>Deliberate disruption, spam, impersonation, or attempts to manipulate project processes in bad faith.</li>
          <li>Retaliation against someone for reporting a conduct or security concern.</li>
        </ul>
      </section>

      <section>
        <h2>Scope</h2>
        <p>
          This standard applies in project repositories, discussions, issue trackers, review threads, community channels,
          events, and other spaces where someone is participating on behalf of or in direct connection with the project.
        </p>
      </section>

      <section>
        <h2>Reporting and enforcement</h2>
        <p>
          Use the options on the <a href="/contact">Contact</a> page to report a concern. Maintainers may remove content,
          limit participation, close threads, reject contributions, or take other proportionate action needed to protect the
          project and its participants. Reports should be handled with as much confidentiality as the circumstances reasonably allow.
        </p>
      </section>

      <section>
        <h2>Technical disagreement is welcome</h2>
        <p>
          Strong criticism of architecture, requirements, evidence, implementation, or project direction is not a conduct
          violation merely because it is direct. The expectation is that criticism remains relevant, evidence-oriented, and
          focused on the work rather than becoming abuse of the people doing it.
        </p>
      </section>
    </PublicPage>
  );
}
