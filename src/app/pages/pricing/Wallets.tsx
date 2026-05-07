import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import Button from '../../../components/Button';
import { mailto } from '../../../lib/site';
import './Pricing.css';

const MODULES = [
  { name: 'Stored-value accounts', desc: 'Open multi-currency wallets, manage balances and lifecycle controls.', rate: 'Per active wallet / month · tiered' },
  { name: 'Card-linked wallets',   desc: 'Attach issued cards, push tokens to mobile-pay platforms.', rate: 'Per enrolled card + tokenisation fee' },
  { name: 'Merchant & B2B wallets', desc: 'Marketplace payouts, treasury wallets, loyalty and rewards balances.', rate: 'Monthly platform fee + payout fee' },
  { name: 'Cross-border wallets',  desc: 'Hold balances across 47 supported currencies and corridors.', rate: 'Spread on cross-border volume + corridor fee' },
  { name: 'Wallet transfers',      desc: 'Internal wallet-to-wallet and peer-to-peer instant transfers.', rate: 'Per transfer · tiered by volume' },
  { name: 'Payouts & withdrawals', desc: 'Bank-account payouts, cash-out and third-party disbursements.', rate: 'Per payout + % of payout value' },
];

const INCLUDED = [
  { title: 'Sandbox access', body: 'Fully-featured test environment with synthetic wallet data. No charge.' },
  { title: 'Multi-tenancy', body: 'Manage wallets for millions of end-users under a single regulated programme.' },
  { title: 'Programmable controls', body: 'Spending limits, velocity rules and freeze/unfreeze per wallet - all via API.' },
  { title: 'AML & screening', body: 'Sanctions and transaction monitoring applied at the wallet level by default.' },
  { title: 'Reconciliation feeds', body: 'Real-time webhooks and end-of-day settlement files included.' },
  { title: 'Global corridors', body: '47 live cross-border corridors with built-in compliance checks.' },
];

export default function PricingWallets() {
  const route = findRoute(PATHS.pricingWallets)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="pr-sub-hero" aria-label="Wallets pricing">
        <div className="container">
          <p className="pr-sub-eyebrow">Pricing · Wallets</p>
          <h1 className="pr-sub-h">Wallets module pricing</h1>
          <p className="pr-sub-lede">
            Per-wallet pricing on stored-value accounts, card-linked wallets, merchant payouts
            and cross-border transfers. Scale from day one to millions of end-users without
            renegotiating your contract.
          </p>
          <div className="pr-sub-hero-actions">
            <Button variant="primary" href={PATHS.developersSandbox}>Open the sandbox</Button>
            <Button variant="secondary" href={mailto('sales', 'Wallets pricing enquiry')}>Get a quote</Button>
          </div>
        </div>
      </section>

      <section className="pr-sub-modules" aria-labelledby="pr-wallets-modules-h">
        <div className="container">
          <h2 id="pr-wallets-modules-h" className="pr-sub-modules-h">Module pricing</h2>
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
                      <a className="pr-sub-td-contact" href={mailto('sales', `Wallets pricing - ${m.name}`)}>
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

      <section className="pr-sub-included" aria-labelledby="pr-wallets-incl-h">
        <div className="container">
          <h2 id="pr-wallets-incl-h" className="pr-sub-included-h">Included with every Wallets plan</h2>
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
        heading="Ready to build on IDMB Wallets?"
        subheading="Open a sandbox today or talk to our team for a rate card tailored to your wallet volume and corridor mix."
        primary={{ label: 'Open the sandbox', href: PATHS.developersSandbox }}
        secondary={{ label: 'Talk to sales', href: mailto('sales', 'Wallets pricing page') }}
        tone="dark"
      />
    </>
  );
}
