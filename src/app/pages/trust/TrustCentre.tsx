import { Link } from 'react-router-dom';
import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import CertBadge from '../../../components/CertBadge';
import { ArrowRight } from '../../../components/icons';
import { mailto } from '../../../lib/site';
import './TrustCentre.css';

type CertKind = 'iso27001' | 'iso27701' | 'soc2' | 'pcidss' | 'gdpr' | 'ukdpa';

const CERTS: { kind: CertKind; label: string; desc: string }[] = [
  { kind: 'iso27001', label: 'ISO/IEC 27001:2022', desc: 'Information security management - audited by BSI Group' },
  { kind: 'soc2',     label: 'SOC 2 Type II',      desc: 'Security, availability and confidentiality - audited by Deloitte' },
  { kind: 'pcidss',   label: 'PCI DSS Level 1',    desc: 'Cardholder data environment - assessed annually by a QSA' },
  { kind: 'iso27701', label: 'ISO/IEC 27701:2019', desc: 'Privacy information management - extends ISO 27001' },
  { kind: 'gdpr',     label: 'GDPR',               desc: 'EU General Data Protection Regulation' },
  { kind: 'ukdpa',    label: 'UK DPA 2018',        desc: 'UK Data Protection Act 2018 (incl. UK GDPR)' },
];

const SECTIONS = [
  { href: PATHS.trustSecurity,    label: 'Security',      desc: 'How IDMB secures customer money, data and platform infrastructure.' },
  { href: PATHS.trustCompliance,  label: 'Compliance',    desc: 'Certifications, regulatory posture and audit support.' },
  { href: PATHS.trustPrivacy,     label: 'Privacy',       desc: 'How IDMB handles personal and financial data.' },
  { href: PATHS.trustTerms,       label: 'Terms of use',  desc: 'Terms governing use of the IDMB website and portal.' },
  { href: PATHS.trustCookies,     label: 'Cookies',       desc: 'How we use cookies and similar technologies.' },
  { href: PATHS.trustAccessibility, label: 'Accessibility', desc: 'Our accessibility commitments and how to request support.' },
  { href: PATHS.trustLicences,    label: 'Licences',      desc: 'IDMB regulatory licences and the regulators we work with.' },
];

export default function TrustCentre() {
  const route = findRoute(PATHS.trust)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="tc-hero" aria-label="Trust centre">
        <div className="container">
          <p className="tc-eyebrow">Trust centre</p>
          <h1 className="tc-h">Security, compliance and privacy at IDMB</h1>
          <p className="tc-sub">
            IDMB is infrastructure for regulated financial services. Security, compliance and privacy
            are not features - they are the foundation. This page is the public record of our posture.
          </p>
        </div>
      </section>

      <section className="tc-certs" aria-labelledby="tc-certs-h">
        <div className="container">
          <h2 id="tc-certs-h" className="tc-section-h">Certifications & frameworks</h2>
          <ul className="tc-cert-grid">
            {CERTS.map((c) => (
              <li key={c.label} className="tc-cert-card">
                <span className="tc-cert-badge" aria-hidden="true">
                  <CertBadge kind={c.kind} size={88} />
                </span>
                <span className="tc-cert-meta">
                  <strong className="tc-cert-label">{c.label}</strong>
                  <span className="tc-cert-desc">{c.desc}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="tc-certs-note">
            Certificates and audit reports available to customers and prospects on request.{' '}
            <a href={mailto('security', 'Trust report request')}>Contact us</a> with your NDA on file.
          </p>
        </div>
      </section>

      <section className="tc-nav-section" aria-labelledby="tc-nav-h">
        <div className="container">
          <h2 id="tc-nav-h" className="tc-section-h">Trust centre documents</h2>
          <ul className="tc-nav-grid">
            {SECTIONS.map((s) => (
              <li key={s.href}>
                <Link className="tc-nav-card" to={s.href}>
                  <strong className="tc-nav-card-label">{s.label}</strong>
                  <p className="tc-nav-card-desc">{s.desc}</p>
                  <span className="tc-nav-card-arrow"><ArrowRight size={16} /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Questions about our security posture?"
        subheading="Our security team can provide detailed technical questionnaires, audit reports and penetration test summaries under NDA."
        primary={{ label: 'Contact security', href: mailto('security', 'Security questionnaire request') }}
        secondary={{ label: 'View compliance', href: PATHS.trustCompliance }}
        tone="dark"
      />
    </>
  );
}
