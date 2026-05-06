import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import { mailto } from '../../../lib/site';
import './Legal.css';
import OnThisPage from '../../../components/OnThisPage';

const TOC = [
  { id: 'commitment',   label: 'Our commitment' },
  { id: 'standard',     label: 'Technical standard' },
  { id: 'features',     label: 'Accessibility features' },
  { id: 'known-issues', label: 'Known issues' },
  { id: 'feedback',     label: 'Feedback & contact' },
];

export default function TrustAccessibility() {
  const route = findRoute(PATHS.trustAccessibility)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <p className="legal-hero-eyebrow">Trust centre</p>
          <h1 className="legal-hero-h">Accessibility</h1>
          <p className="legal-last-updated">Last updated: 1 April 2026</p>
        </div>
      </section>

      <div className="legal-body">
        <div className="container legal-body-grid">
          <div className="legal-prose">

            <h2 id="commitment">Our commitment</h2>
            <p>
              IDMB is committed to ensuring this website is accessible to all users, including
              people with disabilities. We believe that financial infrastructure should be
              available to everyone who needs to evaluate, procure or build with it, and that
              commitment starts with our own public website.
            </p>
            <p>
              This accessibility statement applies to idmb.com. It does not cover the IDMB
              developer portal or platform console, which have separate accessibility programmes.
            </p>

            <h2 id="standard">Technical standard</h2>
            <p>
              We aim to conform to the{' '}
              <strong>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong>. These
              guidelines explain how to make web content more accessible to people with
              disabilities and are the international standard for web accessibility.
            </p>
            <p>
              This site is partially conformant with WCAG 2.2 Level AA. "Partially conformant"
              means that some content does not yet fully conform to the standard. Known exceptions
              are listed below.
            </p>

            <h2 id="features">Accessibility features</h2>
            <ul>
              <li>
                <strong>Keyboard navigation</strong> — All interactive elements are reachable by
                keyboard. Navigation landmarks use semantic HTML (<code>nav</code>, <code>main</code>,
                {' '}<code>footer</code>, <code>aside</code>).
              </li>
              <li>
                <strong>Screen reader support</strong> — ARIA labels are applied to navigation menus,
                icon buttons, disclosure widgets and data tables. We test with VoiceOver (macOS/iOS)
                and NVDA (Windows).
              </li>
              <li>
                <strong>Colour contrast</strong> — Text and interactive element contrast ratios meet
                or exceed WCAG 2.2 AA minimums (4.5:1 for normal text, 3:1 for large text and UI
                components).
              </li>
              <li>
                <strong>Text resize</strong> — All text scales correctly to 200% without loss of
                functionality or content.
              </li>
              <li>
                <strong>Focus indicators</strong> — Visible focus rings are provided for all
                keyboard-focusable elements using our design system's focus token.
              </li>
              <li>
                <strong>Reduced motion</strong> — Animations respect the{' '}
                <code>prefers-reduced-motion</code> media query.
              </li>
              <li>
                <strong>No seizure risk</strong> — No content flashes more than 3 times per second.
              </li>
            </ul>

            <h2 id="known-issues">Known issues</h2>
            <p>
              We are currently working to resolve the following known accessibility issues. Each
              has a target resolution date:
            </p>
            <table>
              <thead>
                <tr><th>Issue</th><th>WCAG criterion</th><th>Target resolution</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Some complex pricing tables lack sufficient header associations for screen readers</td>
                  <td>1.3.1 Info and Relationships</td>
                  <td>Q3 2026</td>
                </tr>
                <tr>
                  <td>Code blocks in engineering posts do not have programmatic language labels</td>
                  <td>1.3.1 Info and Relationships</td>
                  <td>Q2 2026</td>
                </tr>
                <tr>
                  <td>PDF whitepapers have not been assessed for accessibility</td>
                  <td>1.1.1 Non-text Content</td>
                  <td>Q3 2026</td>
                </tr>
              </tbody>
            </table>
            <p>
              If you find an accessibility issue not listed here, please report it using the
              contact details below.
            </p>

            <h2 id="feedback">Feedback &amp; contact</h2>
            <p>
              If you experience difficulty accessing any content on this site, or if you would
              like to request content in an alternative format, please contact us:
            </p>
            <ul>
              <li>
                Email: <a href={mailto('accessibility', 'Accessibility feedback')}>accessibility@idmb.com</a>
              </li>
              <li>
                Response target: we will acknowledge your message within 2 working days and aim
                to resolve or offer an alternative within 10 working days.
              </li>
            </ul>
            <p>
              If you are not satisfied with our response, you can contact the{' '}
              <a href="https://www.equalityhumanrights.com/" target="_blank" rel="noreferrer">
                Equality and Human Rights Commission
              </a>{' '}
              (EHRC) or the{' '}
              <a href="https://www.equalityni.org/" target="_blank" rel="noreferrer">
                Equality Commission for Northern Ireland
              </a>{' '}
              as appropriate.
            </p>
          </div>

          <OnThisPage items={TOC} />
        </div>
      </div>
    </>
  );
}
