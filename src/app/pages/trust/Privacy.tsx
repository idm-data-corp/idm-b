import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import { mailto } from '../../../lib/site';
import './Legal.css';
import OnThisPage from '../../../components/OnThisPage';

const TOC = [
  { id: 'who',          label: 'Who we are' },
  { id: 'what-we-collect', label: 'What we collect' },
  { id: 'how-we-use',   label: 'How we use it' },
  { id: 'sharing',      label: 'Sharing' },
  { id: 'retention',    label: 'Retention' },
  { id: 'rights',       label: 'Your rights' },
  { id: 'transfers',    label: 'International transfers' },
  { id: 'contact',      label: 'Contact' },
];

export default function TrustPrivacy() {
  const route = findRoute(PATHS.trustPrivacy)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <p className="legal-hero-eyebrow">Trust centre</p>
          <h1 className="legal-hero-h">Privacy statement</h1>
          <p className="legal-last-updated">Last updated: 1 April 2026</p>
        </div>
      </section>

      <div className="legal-body">
        <div className="container legal-body-grid">
          <div className="legal-prose">

            <h2 id="who">Who we are</h2>
            <p>
              IDMB Limited ("IDMB", "we", "us") is a financial infrastructure provider registered
              in England and Wales (company number 12345678), with registered offices at 100
              Bishopsgate, London EC2N 4AG. This privacy statement describes how IDMB processes
              personal data in connection with this website and our commercial relationships.
            </p>
            <p>
              IDMB is a <strong>data processor</strong> for the personal data of end-users that
              our bank and fintech customers process through the platform. Each customer is the
              data controller for their end-users' data. This statement covers IDMB's role as a
              <strong> data controller</strong> for the data we collect directly - website
              visitors, prospective customers and our own employees.
            </p>

            <h2 id="what-we-collect">What we collect</h2>
            <h3>Website visitors</h3>
            <ul>
              <li>Browser type, device, operating system and IP address (log data)</li>
              <li>Pages visited, referrer URL, time on page</li>
              <li>Cookie identifiers (see our <a href="/trust/cookies">Cookie statement</a>)</li>
            </ul>
            <h3>Prospective customers and contacts</h3>
            <ul>
              <li>Name, job title, company, work email, phone number</li>
              <li>Information provided in demo requests, event registrations or written communications</li>
            </ul>
            <h3>Customer employees and users of the developer portal</h3>
            <ul>
              <li>Name, work email, job title</li>
              <li>Portal access logs (API calls, sandbox activity) - no financial end-user data</li>
            </ul>

            <h2 id="how-we-use">How we use it</h2>
            <table>
              <thead>
                <tr><th>Purpose</th><th>Legal basis</th></tr>
              </thead>
              <tbody>
                <tr><td>Respond to inquiries and demo requests</td><td>Legitimate interests / contract performance</td></tr>
                <tr><td>Provide developer portal access</td><td>Contract performance</td></tr>
                <tr><td>Send product updates and marketing communications</td><td>Consent (can be withdrawn at any time)</td></tr>
                <tr><td>Operate and improve this website</td><td>Legitimate interests</td></tr>
                <tr><td>Fraud prevention and security</td><td>Legitimate interests</td></tr>
                <tr><td>Legal and regulatory obligations</td><td>Legal obligation</td></tr>
              </tbody>
            </table>

            <h2 id="sharing">Sharing</h2>
            <p>We do not sell personal data. We share it only with:</p>
            <ul>
              <li>
                <strong>Service providers</strong> acting as processors on our behalf (CRM, email
                delivery, analytics, cloud infrastructure) under data processing agreements.
              </li>
              <li>
                <strong>Professional advisers</strong> (lawyers, accountants, auditors) bound by
                confidentiality obligations.
              </li>
              <li>
                <strong>Regulators and law enforcement</strong> where required by law.
              </li>
            </ul>

            <h2 id="retention">Retention</h2>
            <p>
              We retain personal data only as long as necessary for the purposes for which it was
              collected, or as required by applicable law:
            </p>
            <ul>
              <li>Website log data: 90 days</li>
              <li>Marketing contacts (post-opt-out): deleted within 30 days</li>
              <li>Customer employee records: duration of contract + 7 years</li>
              <li>Communications with prospective customers: 2 years from last contact</li>
            </ul>

            <h2 id="rights">Your rights</h2>
            <p>
              Under GDPR and UK GDPR you have the right to: access your data; correct inaccurate
              data; erase your data (where no overriding legal basis applies); restrict or object
              to processing; and data portability. To exercise any right, or to lodge a
              complaint, contact <a href={mailto('privacy', 'Privacy rights request')}>our privacy team</a>.
            </p>
            <p>
              You also have the right to complain to the UK Information Commissioner's Office (ICO)
              or your local supervisory authority.
            </p>

            <h2 id="transfers">International transfers</h2>
            <p>
              Where personal data is transferred outside the UK or EEA, we rely on the UK
              International Data Transfer Agreement (IDTA), EU Standard Contractual Clauses (SCCs),
              or an adequacy decision. Details of our transfer mechanisms are available on request.
            </p>

            <h2 id="contact">Contact</h2>
            <p>
              Data Protection Officer: <a href={mailto('dpo', 'DPO inquiry')}>dpo@idm-b.com</a>
              <br />
              Postal address: Data Protection Officer, IDMB Limited, 100 Bishopsgate, London EC2N 4AG
            </p>
          </div>

          <OnThisPage items={TOC} />
        </div>
      </div>
    </>
  );
}
