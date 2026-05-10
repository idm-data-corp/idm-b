import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import { mailto } from '../../../lib/site';
import './Legal.css';
import OnThisPage from '../../../components/OnThisPage';

const TOC = [
  { id: 'acceptance',   label: 'Acceptance' },
  { id: 'use',          label: 'Use of this site' },
  { id: 'ip',           label: 'Intellectual property' },
  { id: 'disclaimers',  label: 'Disclaimers' },
  { id: 'liability',    label: 'Limitation of liability' },
  { id: 'links',        label: 'Third-party links' },
  { id: 'changes',      label: 'Changes' },
  { id: 'governing',    label: 'Governing law' },
  { id: 'contact',      label: 'Contact' },
];

export default function TrustTerms() {
  const route = findRoute(PATHS.trustTerms)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <p className="legal-hero-eyebrow">Trust centre</p>
          <h1 className="legal-hero-h">Terms of use</h1>
          <p className="legal-last-updated">Last updated: 1 April 2026</p>
        </div>
      </section>

      <div className="legal-body">
        <div className="container legal-body-grid">
          <div className="legal-prose">

            <h2 id="acceptance">Acceptance of terms</h2>
            <p>
              By accessing or using the IDMB website at idm-b.com ("Site"), you agree to be bound
              by these Terms of Use ("Terms"). If you do not agree to these Terms, do not use the
              Site. These Terms apply to the public marketing website only. Use of the IDMB
              platform and developer portal is governed by your Master Services Agreement with
              IDMB.
            </p>

            <h2 id="use">Use of this site</h2>
            <p>You may use the Site for lawful purposes only. You must not:</p>
            <ul>
              <li>Use the Site in any way that violates applicable laws or regulations</li>
              <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
              <li>Knowingly transmit any data, send or upload material that contains viruses or harmful code</li>
              <li>Attempt to gain unauthorised access to any part of the Site or its infrastructure</li>
              <li>Reproduce, duplicate, copy or re-sell any part of the Site in contravention of these Terms</li>
              <li>Scrape, crawl or extract data at a rate that materially burdens our servers</li>
            </ul>

            <h2 id="ip">Intellectual property</h2>
            <p>
              The IDMB name, logo, product names and all content on this Site (text, graphics,
              images, code) are owned by IDMB Limited or its licensors and are protected by
              copyright, trademark and other intellectual property laws. Nothing on this Site
              grants you any right to use IDMB's intellectual property without prior written
              consent.
            </p>
            <p>
              We welcome linking to any publicly accessible page of this Site. Deep-linking for
              the purpose of framing or misrepresentation is not permitted.
            </p>

            <h2 id="disclaimers">Disclaimers</h2>
            <p>
              The Site is provided on an "as is" and "as available" basis. IDMB makes no
              representations or warranties of any kind, express or implied, about the completeness,
              accuracy, reliability, suitability or availability of the Site or the information
              contained on it.
            </p>
            <p>
              Nothing on this Site constitutes financial, legal, tax or investment advice. Any
              product and pricing information is indicative and subject to your specific agreement
              with IDMB.
            </p>

            <h2 id="liability">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, IDMB Limited, its officers, directors,
              employees and agents will not be liable for any indirect, incidental, special,
              consequential or punitive damages arising from your use of, or inability to use,
              this Site.
            </p>
            <p>
              Nothing in these Terms excludes or limits our liability for death or personal injury
              caused by negligence, fraud or fraudulent misrepresentation, or any other liability
              that cannot be excluded by English law.
            </p>

            <h2 id="links">Third-party links</h2>
            <p>
              This Site may contain links to third-party websites. These links are provided for
              your convenience only. IDMB has no control over the content of those sites and
              accepts no responsibility for them or for any loss or damage that may arise from
              your use of them.
            </p>

            <h2 id="changes">Changes to these Terms</h2>
            <p>
              We may update these Terms at any time. The date of the most recent revision appears
              at the top of this page. Your continued use of the Site after a change constitutes
              acceptance of the revised Terms.
            </p>

            <h2 id="governing">Governing law</h2>
            <p>
              These Terms are governed by English law. Any dispute arising from or related to
              these Terms shall be subject to the exclusive jurisdiction of the courts of England
              and Wales.
            </p>

            <h2 id="contact">Contact</h2>
            <p>
              Questions about these Terms should be directed to{' '}
              <a href={mailto('legal', 'Terms of use inquiry')}>our legal team</a>.
            </p>
          </div>

          <OnThisPage items={TOC} />
        </div>
      </div>
    </>
  );
}
