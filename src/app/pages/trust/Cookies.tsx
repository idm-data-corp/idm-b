import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import { mailto } from '../../../lib/site';
import './Legal.css';
import OnThisPage from '../../../components/OnThisPage';

const TOC = [
  { id: 'what',         label: 'What are cookies' },
  { id: 'we-use',       label: 'Cookies we use' },
  { id: 'third-party',  label: 'Third-party cookies' },
  { id: 'control',      label: 'Your controls' },
  { id: 'contact',      label: 'Contact' },
];

export default function TrustCookies() {
  const route = findRoute(PATHS.trustCookies)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <p className="legal-hero-eyebrow">Trust centre</p>
          <h1 className="legal-hero-h">Cookie statement</h1>
          <p className="legal-last-updated">Last updated: 1 April 2026</p>
        </div>
      </section>

      <div className="legal-body">
        <div className="container legal-body-grid">
          <div className="legal-prose">

            <h2 id="what">What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device by websites you visit. They are
              widely used to make sites work, or work more efficiently, and to provide information
              to site owners. We use "cookies" as a shorthand for cookies and similar technologies
              (local storage, session storage, pixels).
            </p>

            <h2 id="we-use">Cookies we use</h2>
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Name / Provider</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                  <th>Consent required?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Strictly necessary</td>
                  <td>__csrf, __session</td>
                  <td>CSRF protection and session state on the developer portal</td>
                  <td>Session</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Strictly necessary</td>
                  <td>idmb_cookie_consent</td>
                  <td>Records your cookie preferences</td>
                  <td>12 months</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Analytics</td>
                  <td>_ga, _gid (Google Analytics)</td>
                  <td>Counts page views and sessions, measures site performance</td>
                  <td>2 years / 24 hours</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Analytics</td>
                  <td>idmb_anon_id</td>
                  <td>Anonymous visitor identifier for IDMB's own analytics</td>
                  <td>12 months</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Marketing</td>
                  <td>_fbp (Meta)</td>
                  <td>Tracks conversions from Meta ads</td>
                  <td>90 days</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Marketing</td>
                  <td>li_fat_id (LinkedIn)</td>
                  <td>Conversion tracking for LinkedIn campaigns</td>
                  <td>30 days</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>

            <h2 id="third-party">Third-party cookies</h2>
            <p>
              Where third-party cookies are placed on your device (Google, Meta, LinkedIn), those
              companies act as independent data controllers for the data they collect. Their use of
              data is governed by their own privacy policies, not this statement.
            </p>

            <h2 id="control">Your controls</h2>
            <p>
              When you first visit this site you will be shown a cookie banner where you can
              accept or decline non-essential cookies. You can change your preferences at any time
              via the cookie preferences link in the site footer.
            </p>
            <p>
              You can also control cookies through your browser settings. Note that blocking
              strictly-necessary cookies may affect site functionality. Removing analytics cookies
              won't affect your browsing experience on this site.
            </p>

            <h2 id="contact">Contact</h2>
            <p>
              Questions about our use of cookies should be directed to{' '}
              <a href={mailto('privacy', 'Cookie statement inquiry')}>our privacy team</a>.
            </p>
          </div>

          <OnThisPage items={TOC} />
        </div>
      </div>
    </>
  );
}
