import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import { mailto } from '../../../lib/site';
import './Legal.css';
import OnThisPage from '../../../components/OnThisPage';

const TOC = [
  { id: 'approach',    label: 'Our approach' },
  { id: 'infra',       label: 'Infrastructure security' },
  { id: 'data',        label: 'Data protection' },
  { id: 'access',      label: 'Access controls' },
  { id: 'testing',     label: 'Vulnerability management' },
  { id: 'incident',    label: 'Incident response' },
  { id: 'contact',     label: 'Contact' },
];

export default function TrustSecurity() {
  const route = findRoute(PATHS.trustSecurity)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <p className="legal-hero-eyebrow">Trust centre</p>
          <h1 className="legal-hero-h">Security overview</h1>
          <p className="legal-last-updated">Last updated: 1 April 2026</p>
        </div>
      </section>

      <div className="legal-body">
        <div className="container legal-body-grid">
          <div className="legal-prose">
            <h2 id="approach">Our approach to security</h2>
            <p>
              IDMB is infrastructure for regulated financial services. Our security programme is
              built on the principle that security is not a feature added on top of the platform -
              it is the platform. Every architectural decision, from the ledger write model to the
              API authentication scheme, is made with security as a first-order constraint.
            </p>
            <p>
              Our security programme is independently audited against ISO 27001 and SOC 2 Type II
              annually. Certificates and audit reports are available to customers and prospects
              under a signed NDA.
            </p>

            <h2 id="infra">Infrastructure security</h2>
            <p>
              The IDMB platform runs on dedicated infrastructure across 5 regions (London,
              Frankfurt, Virginia, Singapore, Cape Town). All compute, storage and network
              resources are provisioned in isolated VPCs with no public ingress except the API
              gateway.
            </p>
            <h3>Network architecture</h3>
            <ul>
              <li>All external traffic terminates at a TLS 1.3 load balancer. TLS 1.0 and 1.1 are disabled.</li>
              <li>Internal service-to-service communication uses mutual TLS (mTLS) with short-lived certificates.</li>
              <li>Database networks are in private subnets with no internet route. All database access requires a VPN or bastion host with MFA.</li>
              <li>DDoS protection at the edge (Layer 3/4 and Layer 7) with automatic traffic scrubbing.</li>
            </ul>
            <h3>Encryption</h3>
            <ul>
              <li>All data encrypted at rest with AES-256. Keys are managed by a dedicated HSM-backed key management service.</li>
              <li>Encryption keys are rotated quarterly. Customer-specific encryption keys are available on enterprise plans.</li>
              <li>All database backups are encrypted before leaving the primary region.</li>
            </ul>

            <h2 id="data">Data protection</h2>
            <p>
              Customer data - including ledger entries, transaction records and identity documents -
              is retained for the period required by applicable regulation (minimum 7 years in most
              markets) and then securely destroyed on schedule.
            </p>
            <p>
              Personally identifiable information (PII) is pseudonymised in non-production
              environments. Production data is never used in test or development environments.
            </p>

            <h2 id="access">Access controls</h2>
            <ul>
              <li>All IDMB employee access to production systems requires MFA. Production access is time-limited and logged.</li>
              <li>Role-based access control (RBAC) with least-privilege by default. No standing administrative access to the production database.</li>
              <li>All access events are logged to an immutable audit store. Logs are retained for 3 years.</li>
              <li>Customer data can only be accessed by IDMB employees with a recorded business reason. All accesses are auditable.</li>
            </ul>

            <h2 id="testing">Vulnerability management</h2>
            <ul>
              <li>Annual penetration testing by an independent CREST-accredited firm. Reports available under NDA.</li>
              <li>Continuous automated vulnerability scanning of all production infrastructure and container images.</li>
              <li>Bug bounty programme: responsible disclosure is rewarded. Details at <a href={mailto('security', 'Bug bounty enquiry')}>security@idmb.com</a>.</li>
              <li>Critical CVEs are patched within 48 hours. High CVEs within 7 days.</li>
            </ul>

            <h2 id="incident">Incident response</h2>
            <p>
              IDMB maintains a documented incident response plan tested annually with a
              simulation exercise. In the event of a security incident:
            </p>
            <ul>
              <li>Customer notification within 24 hours of a confirmed breach (or within any shorter regulatory deadline).</li>
              <li>A dedicated incident commander is assigned for all P1 security events.</li>
              <li>Post-incident review and root cause analysis published to affected customers within 30 days.</li>
            </ul>

            <h2 id="contact">Security contact</h2>
            <p>
              To report a security vulnerability, request an audit report, or ask questions about
              our security posture, contact{' '}
              <a href={mailto('security', 'Security enquiry')}>security@idmb.com</a>.
              For urgent security reports, include "[URGENT]" in the subject line.
            </p>
          </div>

          <OnThisPage items={TOC} />
        </div>
      </div>

      <CTASection
        heading="Request our security documentation"
        subheading="ISO 27001 certificate, SOC 2 Type II report and pentest executive summary available under NDA."
        primary={{ label: 'Contact security', href: mailto('security', 'Security doc request') }}
        secondary={{ label: 'View compliance', href: PATHS.trustCompliance }}
        tone="dark"
      />
    </>
  );
}
