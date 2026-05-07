import {
  IconHybridInfra,
  IconAIModels,
  IconAIProductivity,
  IconSecurity,
  IconAnalytics,
  IconDataMgmt,
} from '../../components/icons';
import { LogoPaywave } from '../../components/customer-logos';
import type { SolutionContent } from '../../app/pages/_shared/SolutionPage';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

export const fintechs: SolutionContent = {
  heroEyebrow: 'Solutions · Fintechs & neobanks',
  heroTitle: <>Go from idea to regulated product in under ninety days.</>,
  heroLede: 'IDMB gives you the full fintech stack - accounts, wallets, cards, payments and compliance - through one API contract. You build the brand; we handle the licensed infrastructure.',
  heroPrimary: { label: 'Open a free sandbox', href: PATHS.developersSandbox },
  heroSecondary: { label: 'Talk to our team', href: mailto('sales', 'Fintech/neobank enquiry') },
  heroVariant: 'centered',
  heroTone: 'tinted',

  painHeading: 'Building a neobank from scratch is deceptively hard',
  pains: [
    {
      icon: IconSecurity,
      title: 'Compliance is the invisible blocker',
      desc: 'KYC onboarding, sanctions screening, AML monitoring and regulator reporting - all before you write a line of product code. Most teams underestimate this by half.',
    },
    {
      icon: IconHybridInfra,
      title: 'Infrastructure cobbling kills velocity',
      desc: 'Stitching together a ledger provider, a card programme, a KYC vendor and a data warehouse burns eighteen months and makes the architecture hard to reason about.',
    },
    {
      icon: IconAIProductivity,
      title: 'Scaling breaks the seams',
      desc: 'What works for 10,000 accounts rarely survives 10 million. Rate limits, reconciliation gaps and settlement delays show up only when you can least afford them.',
    },
  ],

  outcomesHeading: 'The IDMB neobank track record',
  outcomes: [
    { value: '90 days', label: 'Median time to first live transaction', sub: 'on the IDMB production environment' },
    { value: '9.4M', label: 'Active wallets on IDMB', sub: "across Paywave's multi-currency super-app" },
    { value: '180ms', label: 'Median wallet credit latency', sub: 'p50 measured at Paywave production scale' },
    { value: '1 API', label: 'Integration surface', sub: 'one REST contract for accounts, cards, payments and data' },
  ],
  outcomesVariant: 'inline',

  stackHeading: 'The neobank starter stack on IDMB',
  stack: [
    { title: 'Stored-value accounts',  desc: 'Multi-currency, programmable wallets open in one call.',              href: PATHS.walletsStored,       icon: IconHybridInfra },
    { title: 'Card issuing',           desc: 'Physical and virtual cards on Visa/Mastercard rails in days.',         href: PATHS.bankingCards,        icon: IconAIModels },
    { title: 'Payments & FX',          desc: 'Local and cross-border payments with FX in 40+ currencies.',          href: PATHS.bankingPayments,     icon: IconAIProductivity },
    { title: 'Compliance, KYC & AML',  desc: 'End-to-end identity and monitoring so you stay compliant at scale.',  href: PATHS.bankingCompliance,   icon: IconSecurity },
    { title: 'Real-time analytics',    desc: 'Live dashboards over accounts and transaction activity.',              href: PATHS.dataRealTime,        icon: IconAnalytics },
    { title: 'Risk & fraud signals',   desc: 'Real-time scores on every transaction, with case management.',        href: PATHS.dataRisk,            icon: IconDataMgmt },
  ],
  stackVariant: 'cards',

  storyCallout: {
    eyebrow: 'Customer story · Wallets',
    heading: <>Paywave embedded 9.4M wallets and tap-to-pay cards in six months.</>,
    summary: 'The regional super-app integrated IDMB Wallets and Card-linked to power multi-currency balances, instant transfers and NFC tap-to-pay - without building their own card programme or ledger.',
    stat: '−47%',
    statLabel: 'drop in wallet-related support tickets after migrating to IDMB',
    href: PATHS.customerPaywave,
    logo: LogoPaywave,
  },

  quote: {
    quote: 'IDMB gave us a ledger, a card programme and a compliance engine through one API. We shipped our first card in 22 days.',
    name: 'Tariq Osei',
    role: 'CTO, Paywave',
    company: 'Paywave',
    storyHref: PATHS.customerPaywave,
  },

  cta: {
    heading: 'Build your neobank on IDMB today',
    subheading: 'Open a full-featured sandbox - no commitment, no credit card. Your first live transaction could be ninety days away.',
    primary: { label: 'Open the sandbox', href: PATHS.developersSandbox },
    secondary: { label: 'Talk to sales', href: mailto('sales', 'Fintech/neobank enquiry') },
  },
};
