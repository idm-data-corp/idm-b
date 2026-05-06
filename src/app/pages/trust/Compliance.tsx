import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import CertBadge from '../../../components/CertBadge';
import { mailto } from '../../../lib/site';
import './Legal.css';
import OnThisPage from '../../../components/OnThisPage';

const TOC = [
  { id: 'overview',     label: 'Overview' },
  { id: 'certs',        label: 'Certifications' },
  { id: 'regulatory',   label: 'Regulatory posture' },
  { id: 'aml',          label: 'AML & financial crime' },
  { id: 'data-residency', label: 'Data residency' },
  { id: 'audits',       label: 'Audits & testing' },
  { id: 'contact',      label: 'Contact' },
];

export default function TrustCompliance() {
  const route = findRoute(PATHS.trustCompliance)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <p className="legal-hero-eyebrow">Trust centre</p>
          <h1 className="legal-hero-h">Compliance</h1>
          <p className="legal-last-updated">Last updated: 1 April 2026</p>
        </div>
      </section>

      <div className="legal-body">
        <div className="container legal-body-grid">
          <div className="legal-prose">

            <h2 id="overview">Overview</h2>
            <p>
              IDMB operates as infrastructure for licensed financial institutions. Our compliance
              programme is designed to satisfy the obligations of both IDMB as an operator and our
              customers — banks, fintechs and payment service providers — as regulated entities. We
              maintain a suite of independent certifications, submit to annual audits and publish
              our regulatory posture so customers can incorporate our evidence into their own
              compliance frameworks.
            </p>

            <h2 id="certs">Certifications</h2>
            <p>The following certifications are current and renewed annually unless noted:</p>
            <table className="legal-cert-table">
              <thead>
                <tr>
                  <th>Certification</th>
                  <th>Scope</th>
                  <th>Auditor</th>
                  <th>Renewed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="legal-cert-cell"><CertBadge kind="iso27001" size={36} /> ISO/IEC 27001:2022</span></td>
                  <td>IDMB platform, infrastructure and corporate systems</td>
                  <td>BSI Group</td>
                  <td>January 2026</td>
                </tr>
                <tr>
                  <td><span className="legal-cert-cell"><CertBadge kind="soc2" size={36} /> SOC 2 Type II</span></td>
                  <td>Security, availability, processing integrity</td>
                  <td>Deloitte</td>
                  <td>March 2026</td>
                </tr>
                <tr>
                  <td><span className="legal-cert-cell"><CertBadge kind="pcidss" size={36} /> PCI DSS Level 1</span></td>
                  <td>Card data environment and authorisation engine</td>
                  <td>Qualified Security Assessor (QSA)</td>
                  <td>February 2026</td>
                </tr>
                <tr>
                  <td><span className="legal-cert-cell"><CertBadge kind="iso27701" size={36} /> ISO/IEC 27701:2019</span></td>
                  <td>Privacy information management</td>
                  <td>BSI Group</td>
                  <td>January 2026</td>
                </tr>
              </tbody>
            </table>
            <p>
              Customers may request full audit reports and attestation letters under NDA by
              contacting their account manager or{' '}
              <a href={mailto('compliance', 'Request compliance documentation')}>compliance</a>.
            </p>

            <h2 id="regulatory">Regulatory posture</h2>
            <p>
              IDMB provides infrastructure and does not itself hold a banking, e-money or payment
              institution licence in any jurisdiction. Our customers — who hold the relevant
              licences — retain full responsibility for their regulatory obligations. IDMB supports
              this through:
            </p>
            <ul>
              <li>
                <strong>Regulatory reporting exports</strong> — pre-built data extracts formatted
                for common regulatory returns (Basel III capital reporting, IFRS 9 provision
                schedules, transaction monitoring reports).
              </li>
              <li>
                <strong>Audit trail API</strong> — every ledger event, access log and configuration
                change is available via a tamper-evident audit trail API with 7-year retention.
              </li>
              <li>
                <strong>Regulator access portal</strong> — on-demand read access for supervisory
                authorities, scoped per jurisdiction and approved by the customer.
              </li>
              <li>
                <strong>Regulatory change support</strong> — IDMB monitors regulatory change across
                all operating jurisdictions and publishes impact notices to customers no later than
                90 days before a requirement takes effect.
              </li>
            </ul>

            <h2 id="aml">AML &amp; financial crime</h2>
            <p>
              IDMB's financial crime controls are built into the ledger at the transaction level.
              Customers are responsible for their own AML programme; IDMB provides the tooling:
            </p>
            <ul>
              <li>
                <strong>Transaction monitoring</strong> — rule-based and ML-assisted screening of
                every ledger transaction against configurable typology libraries.
              </li>
              <li>
                <strong>Sanctions screening</strong> — real-time name and entity screening against
                OFAC, UN, EU, FCDO and customer-defined lists, with configurable fuzzy-match
                thresholds.
              </li>
              <li>
                <strong>KYC lifecycle</strong> — identity verification, ongoing monitoring and
                PEP/adverse media checks managed through the Compliance API.
              </li>
              <li>
                <strong>SAR workflow</strong> — case management and SAR/STR export integrated with
                the regulatory reporting module.
              </li>
            </ul>
            <p>
              IDMB does not make go/no-go credit or onboarding decisions on behalf of customers.
              All financial crime decisions remain with the licensed institution.
            </p>

            <h2 id="data-residency">Data residency</h2>
            <p>
              IDMB is a multi-region platform deployed across five AWS regions. Customers elect
              their primary data residency region at contract time:
            </p>
            <ul>
              <li>EU (eu-west-1, eu-central-1) — GDPR data boundary</li>
              <li>Africa (af-south-1) — customer data stays in-continent</li>
              <li>UK (eu-west-2) — post-Brexit UK data boundary</li>
              <li>Middle East (me-south-1) — GCC data residency</li>
            </ul>
            <p>
              Cross-region replication for disaster recovery uses encrypted, customer-authorised
              data sharing agreements. No customer data is replicated to a region outside the
              customer's elected boundary without explicit consent.
            </p>

            <h2 id="audits">Audits &amp; testing</h2>
            <ul>
              <li>Annual third-party penetration test (infrastructure + application layer)</li>
              <li>Quarterly vulnerability assessments</li>
              <li>Continuous automated SAST/DAST in the CI pipeline</li>
              <li>Annual BCDR exercise with documented recovery time objectives</li>
              <li>Ad-hoc customer-sponsored penetration testing by arrangement</li>
            </ul>
            <p>
              Executive summaries of penetration test findings and remediation status are available
              to customers on request.
            </p>

            <h2 id="contact">Contact compliance</h2>
            <p>
              For audit report requests, compliance questionnaires, regulatory inquiries or
              customer due-diligence packs, contact{' '}
              <a href={mailto('compliance', 'Compliance inquiry')}>our compliance team</a>.
            </p>
          </div>

          <OnThisPage items={TOC} />
        </div>
      </div>

      <CTASection
        heading="Ready to start?"
        subheading="Talk to our team about compliance requirements and how IDMB fits your regulatory obligations."
        primary={{ label: 'Talk to sales', href: mailto('sales', 'Compliance inquiry') }}
        secondary={{ label: 'View certifications', href: '#certs' }}
      />
    </>
  );
}
