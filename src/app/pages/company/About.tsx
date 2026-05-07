import { Link } from 'react-router-dom';
import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import { mailto } from '../../../lib/site';
import './Company.css';

const VALUES = [
  {
    label: 'Infrastructure thinking',
    body: 'We build for the long haul. Primitive banking operations - the ledger write, the card authorisation, the KYC check - need to be correct before they can be fast.',
  },
  {
    label: 'Regulated seriousness',
    body: 'Financial services is a licensed, heavily scrutinised industry. We treat compliance, security and reliability as first-order engineering constraints, not box-ticking exercises.',
  },
  {
    label: 'Operator empathy',
    body: 'Our customers are themselves accountable for money movement on behalf of millions of people. We build tools that give them control and confidence, not abstraction that hides risk.',
  },
  {
    label: 'Transparent evidence',
    body: 'We publish our security posture, certifications and regulatory stance publicly. Customers making large infrastructure bets deserve clear, auditable evidence.',
  },
];

const STATS = [
  { number: '47', label: 'Payment corridors' },
  { number: '5', label: 'Cloud regions' },
  { number: '99.99%', label: 'Platform SLA' },
  { number: '2019', label: 'Founded' },
];

export default function About() {
  const route = findRoute(PATHS.company)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="co-hero">
        <div className="container">
          <p className="co-eyebrow">About IDMB</p>
          <h1 className="co-h">Modern infrastructure for financial services</h1>
          <p className="co-sub">
            IDMB was founded in 2019 on the belief that the core technology layer of banking -
            the ledger, the card engine, the compliance stack - had not been rebuilt for the
            cloud era. We set out to build that layer: composable, API-first, built for the
            regulated environment in which our customers operate.
          </p>
        </div>
      </section>

      <section className="co-stats" aria-label="Platform statistics">
        <div className="container co-stats-grid">
          {STATS.map((s) => (
            <div key={s.label} className="co-stat">
              <strong className="co-stat-n">{s.number}</strong>
              <span className="co-stat-l">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="co-mission">
        <div className="container co-mission-inner">
          <h2 className="co-section-h">Our mission</h2>
          <p className="co-mission-body">
            Enable any company - a 200-year-old regional bank or a three-person fintech - to
            build, launch and run regulated financial products safely on shared, modern
            infrastructure. Banking technology should not be the reason a product is late, slow
            or non-compliant.
          </p>
        </div>
      </section>

      <section className="co-values" aria-labelledby="co-values-h">
        <div className="container">
          <h2 id="co-values-h" className="co-section-h">What we stand for</h2>
          <ul className="co-values-grid">
            {VALUES.map((v) => (
              <li key={v.label} className="co-value-card">
                <strong className="co-value-label">{v.label}</strong>
                <p className="co-value-body">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="co-links-band">
        <div className="container co-links-row">
          <Link className="co-link-card" to={PATHS.companyLeadership}>
            <strong>Leadership team</strong>
            <span>Meet the people building IDMB →</span>
          </Link>
          <Link className="co-link-card" to={PATHS.companyNewsroom}>
            <strong>Newsroom</strong>
            <span>Press releases, announcements and milestones →</span>
          </Link>
          <a className="co-link-card" href={mailto('careers', 'Careers inquiry')}>
            <strong>Careers</strong>
            <span>Open roles across engineering, product and GTM →</span>
          </a>
        </div>
      </section>

      <CTASection
        heading="Build the future of finance with us"
        subheading="Whether you are a bank modernising core systems or a fintech launching a new product, IDMB gives you the infrastructure to move faster."
        primary={{ label: 'Talk to sales', href: mailto('sales', 'About page CTA') }}
        secondary={{ label: 'View customers', href: PATHS.customers }}
      />
    </>
  );
}
