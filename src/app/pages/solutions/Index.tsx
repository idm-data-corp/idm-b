import { Link } from 'react-router-dom';
import './Index.css';
import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import { ArrowRight } from '../../../components/icons';
import {
  IconHybridInfra,
  IconAIModels,
  IconSecurity,
  IconDataMgmt,
  IconAnalytics,
  IconAIProductivity,
  IconConsulting,
} from '../../../components/icons';
import { mailto } from '../../../lib/site';

const SOLUTIONS = [
  {
    href: PATHS.solutionsBanks,
    icon: IconHybridInfra,
    label: 'Licensed banks',
    headline: 'Modernise your core — without the multi-year rip-and-replace.',
    desc: 'Core banking APIs, real-time ledger, card issuing and regulatory reporting on a platform built for licensed institutions.',
    tag: 'Banking',
  },
  {
    href: PATHS.solutionsFintechs,
    icon: IconAIModels,
    label: 'Fintechs & neobanks',
    headline: 'Ship a regulated financial product in weeks, not years.',
    desc: 'Wallet infrastructure, card issuing, payments and compliance — everything a neobank needs, none of the regulatory plumbing to build yourself.',
    tag: 'Banking · Wallets',
  },
  {
    href: PATHS.solutionsMarketplaces,
    icon: IconAIProductivity,
    label: 'Marketplaces & super-apps',
    headline: 'Power multi-party payouts and embedded wallets at scale.',
    desc: 'Merchant wallets, buyer balances, split payouts and KYC flows — built for platforms with thousands of counterparties.',
    tag: 'Wallets',
  },
  {
    href: PATHS.solutionsMobileMoney,
    icon: IconDataMgmt,
    label: 'Mobile-money operators',
    headline: 'A modern core underneath your existing mobile-money brand.',
    desc: 'Replace legacy switch infrastructure with a real-time ledger, while keeping every agent, USSD menu and float arrangement intact.',
    tag: 'Banking · Wallets',
  },
  {
    href: PATHS.solutionsTelecoms,
    icon: IconSecurity,
    label: 'Telecom operators',
    headline: 'Turn your subscriber base into a financial services revenue line.',
    desc: 'Pre-built telco wallet stack: airtime credit, float management, operator-grade SLAs and regulator-ready compliance.',
    tag: 'Wallets · Data',
  },
  {
    href: PATHS.solutionsEmbedded,
    icon: IconAnalytics,
    label: 'Embedded-finance platforms',
    headline: 'White-label banking and wallets for any brand or vertical.',
    desc: 'A fully managed BaaS layer: issue accounts, cards and wallets under a partner brand, with IDMB handling the regulated infrastructure.',
    tag: 'Banking · Wallets',
  },
  {
    href: PATHS.solutionsLenders,
    icon: IconConsulting,
    label: 'Lenders & credit products',
    headline: 'Disburse loans and collect repayments on a single ledger.',
    desc: 'Loan wallets, automated disbursement, real-time cashflow signals and risk scoring — from underwriting to repayment on one platform.',
    tag: 'Data · Banking',
  },
];

export default function SolutionsIndex() {
  const route = findRoute(PATHS.solutions)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="sol-idx-hero" aria-label="Solutions">
        <div className="container">
          <p className="sol-idx-eyebrow">Solutions</p>
          <h1 className="sol-idx-h">Built for how you actually work</h1>
          <p className="sol-idx-sub">
            IDMB ships the same banking, wallets and data infrastructure to every kind of financial
            operator — from a 70-year-old licensed bank to a Day 1 neobank. Choose the profile that
            fits your organisation.
          </p>
        </div>
      </section>

      <section className="sol-idx-grid-section" aria-label="Solution list">
        <div className="container">
          <ul className="sol-idx-grid">
            {SOLUTIONS.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.href}>
                  <Link className="sol-idx-card" to={s.href}>
                    <div className="sol-idx-card-top">
                      <span className="sol-idx-card-icon"><Icon size={28} /></span>
                      <span className="sol-idx-card-tag">{s.tag}</span>
                    </div>
                    <strong className="sol-idx-card-label">{s.label}</strong>
                    <p className="sol-idx-card-headline">{s.headline}</p>
                    <p className="sol-idx-card-desc">{s.desc}</p>
                    <span className="sol-idx-card-arrow"><ArrowRight size={16} /></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Not sure where to start?"
        subheading="Talk to a solutions engineer. We'll map the right IDMB modules to your stack and regulatory context."
        primary={{ label: 'Talk to sales', href: mailto('sales', 'Solutions enquiry') }}
        secondary={{ label: 'Open the sandbox', href: PATHS.developersSandbox }}
        tone="dark"
      />
    </>
  );
}
