import { PublicPage } from '@/components/public-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility',
  description: 'Accessibility goals, supported interaction patterns, and reporting information for the AIC Engineering website.',
};

export default function AccessibilityPage() {
  return (
    <PublicPage
      eyebrow="Policy"
      title="Accessibility"
      description="The site aims to make the public Monad engineering record usable with keyboards, assistive technology, zoom, reduced motion preferences, and a range of display sizes."
    >
      <section>
        <h2>Target</h2>
        <p>
          The project uses WCAG 2.2 Level AA as a design and review target where applicable. This is a continuing engineering
          goal, not a claim that every page or third-party integration has been independently certified as conforming.
        </p>
      </section>

      <section>
        <h2>Current accessibility practices</h2>
        <ul>
          <li>Semantic headings and landmarks are preferred for page structure.</li>
          <li>The global page layout exposes a focusable main-content target for keyboard navigation.</li>
          <li>Interactive controls are expected to remain operable without a pointer.</li>
          <li>Visible focus states and sufficient target sizes are part of component review.</li>
          <li>Light and dark presentation should preserve readable contrast.</li>
          <li>Content should remain usable under browser zoom and responsive reflow.</li>
          <li>Meaning should not depend on color alone.</li>
        </ul>
      </section>

      <section>
        <h2>Known limits</h2>
        <p>
          The site contains generated documentation UI, syntax highlighting, diagrams, embedded technical notation, and optional
          third-party or AI-backed features. Those surfaces can introduce accessibility defects even when the surrounding page is
          accessible. Accessibility findings should therefore be treated as testable defects rather than assumed away.
        </p>
      </section>

      <section>
        <h2>Report a barrier</h2>
        <p>
          Use the <a href="/contact">Contact</a> page and identify the affected URL, what you were trying to do, and the barrier
          you encountered. When useful, include your browser, operating system, assistive technology, zoom level, or input method.
          Do not include sensitive personal information that is unnecessary to reproduce the problem.
        </p>
      </section>

      <section>
        <h2>Contribution expectations</h2>
        <p>
          New site features should preserve keyboard operation, meaningful semantics, readable contrast, responsive behavior,
          and accessible names for controls. See <a href="/contributing">Contributing</a> for the general contribution workflow.
        </p>
        <p className="mt-3">Last reviewed: September 1, 2026.</p>
      </section>
    </PublicPage>
  );
}
