import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import Button from '../../../components/Button';
import { mailto } from '../../../lib/site';
import './Pricing.css';

const MODULES = [
  { name: 'Core banking & ledger', desc: 'Real-time double-entry ledger, account lifecycle, balance management.', rate: 'Per API call · tiered by volume' },
  { name: 'Card issuing',          desc: 'Virtual and physical card creation, programme setup, BIN sponsorship.', rate: 'Per active card / month' },
  { name: 'Card processing',       desc: 'Authorisations, clearing, chargebacks, 3DS2.', rate: 'Per authorisation + % of volume' },
  { name: 'Domestic payments',     desc: 'ACH, SEPA, Faster Payments, RTGS send and receive.', rate: 'Per transaction · tiered' },
  { name: 'FX & cross-border',     desc: 'Spot FX conversion and international wire settlement.', rate: 'Spread on FX volume' },
  { name: 'Compliance (AML/KYC)',  desc: 'Transaction monitoring, sanctions screening, identity verification.', rate: 'Per transaction screened / per ID check' },
  { name: 'Treasury & liquidity',  desc: 'Settlement accounts, intra-day liquidity, reconciliation feeds.', rate: 'Monthly flat + usage overages' },
];

const INCLUDED = [
  { title: 'Sandbox access', body: 'Fully-featured test environment with synthetic ledger data. No charge.' },
  { title: 'API documentation', body: 'Full REST and webhook reference, SDKs for 6 languages, OpenAPI spec.' },
  { title: 'Uptime SLA', body: '99.9% availability on standard plans; 99.99% on enterprise agreements.' },
  { title: 'Audit logs', body: 'Immutable, query-able audit trail of every ledger event retained for 7 years.' },
  { title: 'Dedicated support', body: 'Named account engineer from onboarding, escalation SLA on enterprise plans.' },
  { title: 'Compliance portal', body: 'Regulator-ready report packs and data room access included in all plans.' },
];

export default function PricingBanking() {
  const route = findRoute(PATHS.pricingBanking)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="pr-sub-hero" aria-label="Banking pricing">
        <div className="container">
          <p className="pr-sub-eyebrow">Pricing · Banking</p>
          <h1 className="pr-sub-h">Banking module pricing</h1>
          <p className="pr-sub-lede">
            Usage-based pricing across core banking, card issuing, payments, compliance and treasury.
            Every module is independently licensed — only pay for what your product uses.
          </p>
          <div className="pr-sub-hero-actions">
            <Button variant="primary" href={PATHS.developersSandbox}>Open the sandbox</Button>
            <Button variant="secondary" href={mailto('sales', 'Banking pricing enquiry')}>Get a quote</Button>
          </div>
        </div>
      </section>

      <section className="pr-sub-modules" aria-labelledby="pr-banking-modules-h">
        <div className="container">
          <h2 id="pr-banking-modules-h" className="pr-sub-modules-h">Module pricing</h2>
          <div style={{ overflowX: 'auto' }}>
            <table className="pr-sub-table">
              <thead>
                <tr>
                  <th scope="col">Module</th>
                  <th scope="col">What it covers</th>
                  <th scope="col">Pricing model</th>
                  <th scope="col">Rate</th>
                </tr>
              </thead>
              <tbody>
                {MODULES.map((m) => (
                  <tr key={m.name}>
                    <td className="pr-sub-td-module">{m.name}</td>
                    <td className="pr-sub-td-desc">{m.desc}</td>
                    <td className="pr-sub-td-rate">{m.rate}</td>
                    <td>
                      <a className="pr-sub-td-contact" href={mailto('sales', `Banking pricing — ${m.name}`)}>
                        Contact for rate
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pr-sub-included" aria-labelledby="pr-banking-incl-h">
        <div className="container">
          <h2 id="pr-banking-incl-h" className="pr-sub-included-h">Included with every Banking plan</h2>
          <div className="pr-sub-included-grid">
            {INCLUDED.map((item) => (
              <div key={item.title} className="pr-sub-included-item">
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to build on IDMB Banking?"
        subheading="Open a sandbox today or talk to our team for a rate card tailored to your volume and regulatory context."
        primary={{ label: 'Open the sandbox', href: PATHS.developersSandbox }}
        secondary={{ label: 'Talk to sales', href: mailto('sales', 'Banking pricing page') }}
        tone="dark"
      />
    </>
  );
}
