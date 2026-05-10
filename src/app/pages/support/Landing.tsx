import { Link } from 'react-router-dom';
import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import { mailto } from '../../../lib/site';
import './Support.css';

const OPTIONS = [
  {
    label: 'Developer documentation',
    desc: 'Guides, API reference, SDK docs and quickstart tutorials.',
    href: PATHS.developersDocs,
    cta: 'Open docs',
    external: false,
  },
  {
    label: 'API status',
    desc: 'Live and historical availability for all IDMB platform services.',
    href: PATHS.developersStatus,
    cta: 'View status',
    external: false,
  },
  {
    label: 'Contact support',
    desc: 'Raise a ticket, escalate an incident or reach the on-call team.',
    href: PATHS.supportContact,
    cta: 'Contact support',
    external: false,
  },
];

const FAQS = [
  {
    q: 'What is the SLA for platform support?',
    a: 'IDMB offers tiered SLAs. Production incidents affecting core ledger operations are classified P1 and carry a 30-minute initial response target. Full SLA terms are in your MSA schedule.',
  },
  {
    q: 'How do I report a security issue?',
    a: 'Security issues should be reported through our responsible disclosure programme. Email security@idm-b.com with "SECURITY:" in the subject line. We acknowledge reports within 24 hours.',
  },
  {
    q: 'Can I get a dedicated support engineer?',
    a: 'Enterprise customers can opt into a Dedicated Technical Account Manager (TAM) arrangement. Contact your account manager or sales to discuss.',
  },
  {
    q: 'Where can I track known platform issues?',
    a: 'The IDMB Status page lists all ongoing incidents and maintenance windows. We also send email notifications to registered contacts for P1 and P2 incidents.',
  },
];

export default function SupportLanding() {
  const route = findRoute(PATHS.support)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="sup-hero">
        <div className="container">
          <p className="sup-eyebrow">Support</p>
          <h1 className="sup-h">How can we help?</h1>
          <p className="sup-sub">
            Find documentation, check platform status or contact the IDMB support team.
          </p>
        </div>
      </section>

      <section className="sup-options">
        <div className="container sup-options-grid">
          {OPTIONS.map((o) => (
            <Link key={o.label} className="sup-option-card" to={o.href}>
              <strong className="sup-option-label">{o.label}</strong>
              <p className="sup-option-desc">{o.desc}</p>
              <span className="sup-option-cta">{o.cta} →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="sup-faq" aria-labelledby="sup-faq-h">
        <div className="container sup-faq-inner">
          <h2 id="sup-faq-h" className="sup-section-h">Frequently asked questions</h2>
          <ul className="sup-faq-list">
            {FAQS.map((f) => (
              <li key={f.q} className="sup-faq-item">
                <strong className="sup-faq-q">{f.q}</strong>
                <p className="sup-faq-a">{f.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Still need help?"
        subheading="Our support team is available 24/7 for production incidents and during business hours for general inquiries."
        primary={{ label: 'Contact support', href: PATHS.supportContact }}
        secondary={{ label: 'Contact sales', href: mailto('sales', 'Support page CTA') }}
      />
    </>
  );
}
