import { PublicPage } from '@/components/public-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms for using the AIC Engineering website and its public project materials.',
};

export default function TermsPage() {
  return (
    <PublicPage
      eyebrow="Policy"
      title="Terms of Use"
      description="Basic terms for using this public engineering and publication site."
    >
      <section>
        <h2>Use of the site</h2>
        <p>
          You may use this site to read public project materials, follow project updates, participate through linked community
          channels, and use the site's available search, feed, and other public interfaces for their intended purposes.
        </p>
      </section>

      <section>
        <h2>Engineering information is not a warranty</h2>
        <p>
          The site intentionally publishes work at different lifecycle stages. Drafts, research, journal entries, proposals,
          roadmaps, experiments, and planned capabilities may change and should not be treated as promises that a feature exists
          or will be delivered. Use governed project records and release evidence when implementation status matters.
        </p>
      </section>

      <section>
        <h2>No professional advice</h2>
        <p>
          Public material is provided for engineering, research, documentation, and informational purposes. Nothing on the site
          should be treated as legal, financial, security, compliance, medical, or other regulated professional advice.
        </p>
      </section>

      <section>
        <h2>Code and content licenses</h2>
        <p>
          Source code, documentation, examples, and other material may be subject to different licenses or notices. The license
          or notice attached to the relevant repository or artifact controls. These site terms do not grant additional rights
          beyond those applicable licenses and notices.
        </p>
      </section>

      <section>
        <h2>Acceptable use</h2>
        <p>Do not use the site or its endpoints to:</p>
        <ul>
          <li>interfere with availability, security, or normal operation;</li>
          <li>attempt unauthorized access to systems, accounts, credentials, or private data;</li>
          <li>submit unlawful, abusive, or intentionally harmful material;</li>
          <li>evade reasonable rate limits or abuse public API, search, AI, newsletter, or feed endpoints; or</li>
          <li>misrepresent project content, authorship, approval, verification, or affiliation.</li>
        </ul>
      </section>

      <section>
        <h2>Third-party services</h2>
        <p>
          Links and integrations may lead to services operated by others, including GitHub, hosting providers, newsletter
          providers, and AI providers. Their availability, terms, privacy practices, and behavior are outside this site's direct control.
        </p>
      </section>

      <section>
        <h2>Availability and changes</h2>
        <p>
          The site and its features may be changed, corrected, suspended, or removed as the project evolves. Historical records
          may remain available even when they are no longer current; their lifecycle and authority should be interpreted according
          to the surrounding project documentation.
        </p>
      </section>

      <section>
        <h2>Questions</h2>
        <p>
          Use the <a href="/contact">Contact</a> page for questions about these terms.
        </p>
        <p className="mt-3">Last updated: September 1, 2026.</p>
      </section>
    </PublicPage>
  );
}
