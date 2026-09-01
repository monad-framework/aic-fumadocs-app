import { PublicPage } from '@/components/public-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy information for the AIC Engineering website and its optional newsletter and AI features.',
};

export default function PrivacyPage() {
  return (
    <PublicPage
      eyebrow="Policy"
      title="Privacy Policy"
      description="A plain-language description of the data this website may process and where that processing occurs."
    >
      <section>
        <h2>Scope</h2>
        <p>
          This policy applies to the AIC Engineering website and the site features implemented in this repository. Linked
          third-party services, including GitHub and any configured newsletter or AI provider, operate under their own policies.
        </p>
      </section>

      <section>
        <h2>Information you choose to provide</h2>
        <p>
          If you subscribe to the newsletter, the site receives the email address you submit and forwards it to the configured
          newsletter provider. The current signup endpoint does not create a separate subscriber database in this application.
          A provider may retain the address to manage confirmation, delivery, unsubscribe status, and other newsletter functions.
        </p>
        <p className="mt-3">
          If you use a public GitHub issue, discussion, or pull request, the information you post is handled by GitHub and may be public.
        </p>
      </section>

      <section>
        <h2>AI assistant</h2>
        <p>
          When the site's AI documentation assistant is enabled and you use it, the messages needed to answer your request may
          be sent to the configured LLM gateway and model provider. Do not submit secrets, credentials, private source code, or
          other information you do not want processed by those services.
        </p>
      </section>

      <section>
        <h2>Technical information</h2>
        <p>
          The hosting, network, and security infrastructure used to serve the site may process ordinary request information such
          as IP address, user agent, requested URL, timestamps, and error or security logs. The exact retention and processing
          performed by a hosting provider depends on the deployment configuration and that provider's policies.
        </p>
      </section>

      <section>
        <h2>Local browser state</h2>
        <p>
          The site may use browser-local storage for interface preferences such as theme selection. This kind of state remains
          in your browser unless browser behavior or a future feature explicitly sends it elsewhere.
        </p>
      </section>

      <section>
        <h2>Analytics</h2>
        <p>
          This repository does not currently establish a general-purpose advertising or behavioral-tracking system. If analytics
          or additional tracking is introduced, this policy should be updated before relying on the new behavior.
        </p>
      </section>

      <section>
        <h2>Your choices</h2>
        <ul>
          <li>You can follow the project through <a href="/rss.xml">RSS</a> or <a href="/atom.xml">Atom</a> without providing an email address.</li>
          <li>Newsletter messages should provide the unsubscribe mechanism supplied by the configured newsletter provider.</li>
          <li>You can clear local browser storage through your browser controls.</li>
          <li>You can avoid the AI assistant and use ordinary documentation navigation and search instead.</li>
        </ul>
      </section>

      <section>
        <h2>Questions or changes</h2>
        <p>
          Use the <a href="/contact">Contact</a> page for privacy questions. Material changes to site data practices should be
          reflected here when those changes are introduced.
        </p>
        <p className="mt-3">Last updated: September 1, 2026.</p>
      </section>
    </PublicPage>
  );
}
