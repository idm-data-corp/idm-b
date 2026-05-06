import { Link } from 'react-router-dom';
import { useState } from 'react';
import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import Button from '../../../components/Button';
import { ArrowRight, ChevronDown, ChevronUp } from '../../../components/icons';
import { mailto } from '../../../lib/site';
import './Overview.css';

const PILLARS = [
  {
    href: PATHS.pricingBanking,
    label: 'Banking',
    tag: 'Core · Cards · Payments · Compliance · Treasury',
    headline: 'Usage-based pricing across the full banking stack.',
    bullets: [
      'Per-API-call pricing on all ledger operations',
      'Card issuing fee per active card per month',
      'Payments settled by volume and corridor',
      'Compliance checks billed per transaction screened',
    ],
    cta: 'See Banking pricing',
  },
  {
    href: PATHS.pricingWallets,
    label: 'Wallets',
    tag: 'Stored-value · Card-linked · Merchant · Cross-border',
    headline: 'Wallet infrastructure priced per active wallet.',
    bullets: [
      'Monthly fee per active wallet, tiered by volume',
      'Card-linking and tokenisation per enrolled card',
      'Payouts and transfers by value and corridor',
      'B2B wallet management flat monthly licence',
    ],
    cta: 'See Wallets pricing',
  },
  {
    href: PATHS.pricingData,
    label: 'Data',
    tag: 'Lake · Real-time · Risk · Regulatory reporting',
    headline: 'Data and analytics priced on events streamed.',
    bullets: [
      'Per-event fee on ledger stream volume',
      'Real-time dashboard seats per active user',
      'Risk score API billed per transaction evaluated',
      'Regulatory report runs billed per filing period',
    ],
    cta: 'See Data pricing',
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: 'Is there a free tier or sandbox?',
    a: 'Yes. Every IDMB account includes a fully-featured sandbox at no cost. The sandbox supports all Banking, Wallets and Data APIs with synthetic ledger data so your team can integrate and test before committing to a production agreement.',
  },
  {
    q: 'How is usage measured?',
    a: 'Usage is measured at the API call level for ledger operations, per active wallet for wallet infrastructure, and per event streamed for Data. We publish a detailed rate card after a discovery call so you can model your cost before signing.',
  },
  {
    q: 'Do you offer committed-use discounts?',
    a: 'Yes. Customers who commit to a minimum monthly volume receive tiered discounts. Enterprise agreements also include SLA guarantees, dedicated support and optional on-premises or private-cloud deployment.',
  },
  {
    q: 'Are compliance and KYC costs included?',
    a: 'Compliance screening (AML, sanctions, KYC) is a separately metered service billed per transaction screened or per identity verified. This keeps pricing transparent — you only pay for the checks your product actually runs.',
  },
  {
    q: 'Can I mix modules from different pillars?',
    a: 'Yes. IDMB is composable by design. You can run Banking Core without Card issuing, or use Wallets without touching the Banking ledger. Each module has independent pricing. Your account manager can build a blended quote across any combination.',
  },
];

export default function PricingOverview() {
  const route = findRoute(PATHS.pricing)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <section className="pr-ov-hero" aria-label="Pricing overview">
        <div className="container">
          <p className="pr-ov-eyebrow">Pricing</p>
          <h1 className="pr-ov-h">Transparent, usage-based pricing</h1>
          <p className="pr-ov-sub">
            Pay for what you use. Every IDMB module is independently priced — no bundled tiers that
            force you to overpay for capabilities you don't need. Start in the sandbox for free and
            get a production quote after a 30-minute call with our team.
          </p>
          <div className="pr-ov-hero-actions">
            <Button variant="primary" href={PATHS.developersSandbox}>Open the sandbox</Button>
            <Button variant="secondary" href={mailto('sales', 'Pricing enquiry')}>Talk to sales</Button>
          </div>
        </div>
      </section>

      <section className="pr-ov-pillars" aria-label="Pricing by pillar">
        <div className="container">
          <ul className="pr-ov-grid">
            {PILLARS.map((p) => (
              <li key={p.href} className="pr-ov-card">
                <div className="pr-ov-card-head">
                  <span className="pr-ov-card-tag">{p.tag}</span>
                  <strong className="pr-ov-card-label">{p.label}</strong>
                  <p className="pr-ov-card-headline">{p.headline}</p>
                </div>
                <ul className="pr-ov-bullets">
                  {p.bullets.map((b) => (
                    <li key={b} className="pr-ov-bullet">{b}</li>
                  ))}
                </ul>
                <Link className="pr-ov-card-link" to={p.href}>
                  {p.cta} <ArrowRight size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pr-ov-enterprise" aria-label="Enterprise pricing">
        <div className="container pr-ov-enterprise-grid">
          <div>
            <p className="pr-ov-eyebrow">Enterprise</p>
            <h2 className="pr-ov-enterprise-h">Custom pricing for regulated institutions</h2>
            <p className="pr-ov-enterprise-body">
              Licensed banks, large fintechs and mobile-money operators typically run on a custom
              enterprise agreement — with committed-use discounts, dedicated infrastructure, private
              SLAs and compliance co-pilot support included.
            </p>
          </div>
          <div className="pr-ov-enterprise-bullets">
            {[
              'Committed-use volume discounts',
              'Dedicated cloud or on-premises deployment',
              '99.99% availability SLA',
              'Regulatory co-pilot and audit support',
              'Named account and engineering contacts',
              'Custom contract and data-residency options',
            ].map((b) => (
              <p key={b} className="pr-ov-enterprise-bullet">{b}</p>
            ))}
            <div className="pr-ov-enterprise-cta">
              <Button variant="primary" href={mailto('sales', 'Enterprise pricing enquiry')}>
                Talk to sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="pr-ov-faq" aria-labelledby="pr-faq-h">
        <div className="container pr-ov-faq-inner">
          <h2 id="pr-faq-h" className="pr-ov-faq-h">Pricing FAQ</h2>
          <dl className="pr-ov-faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`pr-faq-item ${open === i ? 'is-open' : ''}`}>
                <dt>
                  <button
                    className="pr-faq-q"
                    aria-expanded={open === i}
                    aria-controls={`pr-faq-a-${i}`}
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    {open === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </dt>
                <dd id={`pr-faq-a-${i}`} className="pr-faq-a" hidden={open !== i}>
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection
        heading="Ready to see the numbers?"
        subheading="Open a free sandbox today, or talk to our team to get a tailored rate card for your volume and modules."
        primary={{ label: 'Open the sandbox', href: PATHS.developersSandbox }}
        secondary={{ label: 'Talk to sales', href: mailto('sales', 'Pricing page enquiry') }}
        tone="dark"
      />
    </>
  );
}
