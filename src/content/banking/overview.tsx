import {
  IconHybridInfra,
  IconAIModels,
  IconAIProductivity,
  IconSecurity,
  IconIntegration,
  IconAnalytics,
  IconDataMgmt,
  IconConsulting,
} from '../../components/icons';
import type { PillarContent } from '../../app/pages/_shared/PillarOverview';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

/* Hero illustration - abstracted layered "banking rails" using the existing
   Carbon palette. Self-contained, no external assets. */
function BankingHeroVisual() {
  return (
    <svg viewBox="0 0 600 460" preserveAspectRatio="xMidYMid slice" role="img" aria-label="">
      <defs>
        <linearGradient id="bk-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#edf5ff" />
          <stop offset="1" stopColor="#dbeafe" />
        </linearGradient>
        <linearGradient id="bk-card-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0043ce" />
          <stop offset="1" stopColor="#0f62fe" />
        </linearGradient>
        <linearGradient id="bk-card-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0f62fe" />
          <stop offset="1" stopColor="#4589ff" />
        </linearGradient>
      </defs>

      <rect width="600" height="460" fill="url(#bk-bg)" />

      {/* Bank "facade" - columns + ledger lines */}
      <g transform="translate(80,90)">
        <rect width="440" height="60" rx="6" fill="url(#bk-card-a)" />
        <g fill="#fff" opacity=".55">
          <rect x="20" y="20" width="6" height="20" />
          <rect x="50" y="20" width="6" height="20" />
          <rect x="80" y="20" width="6" height="20" />
          <rect x="110" y="20" width="6" height="20" />
          <rect x="140" y="20" width="6" height="20" />
        </g>
        <text x="180" y="36" fontFamily="'IBM Plex Sans', sans-serif" fontWeight="700" fontSize="14" fill="#fff">
          IDMB CORE LEDGER
        </text>

        <rect y="80" width="440" height="48" rx="6" fill="url(#bk-card-b)" />
        <g transform="translate(20,98)" fill="#fff" opacity=".85">
          <rect width="60" height="10" rx="2" />
          <rect x="76" width="120" height="6" rx="2" opacity=".7" y="2" />
        </g>
        <g transform="translate(360,86)" fill="#fff" opacity=".9">
          <rect width="60" height="36" rx="3" opacity=".25" />
          <text x="30" y="22" textAnchor="middle" fontFamily="'IBM Plex Sans',sans-serif" fontWeight="700" fontSize="14" fill="#fff">CARDS</text>
        </g>

        {/* Tx ledger rows */}
        <g transform="translate(0,156)">
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} transform={`translate(0,${i * 40})`}>
              <rect width="440" height="32" rx="3" fill="#fff" stroke="#a6c8ff" strokeWidth="1" />
              <rect x="16" y="12" width="60" height="8" rx="2" fill="#0f62fe" opacity=".55" />
              <rect x="92" y="12" width="180" height="6" rx="2" fill="#0043ce" opacity=".35" />
              <rect x="380" y="10" width="44" height="12" rx="2" fill={i === 2 ? '#0f62fe' : '#a6c8ff'} />
            </g>
          ))}
        </g>

        {/* Side connectors */}
        <g stroke="#0f62fe" strokeDasharray="3 4" opacity=".55" fill="none">
          <path d="M-30 30 L 0 30" />
          <path d="M-30 100 L 0 100" />
          <path d="M440 30 L 470 30" />
          <path d="M440 100 L 470 100" />
        </g>
      </g>

      <g stroke="#0f62fe" strokeOpacity=".06">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1={i * 50} y1="0" x2={i * 50} y2="460" />
        ))}
      </g>
    </svg>
  );
}

export const bankingOverview: PillarContent = {
  heroEyebrow: 'IDMB Banking',
  heroTitle: (
    <>
      Banking infrastructure,<br />exposed as APIs
    </>
  ),
  heroLede:
    'Issue accounts and cards, run a real-time ledger and connect to the payment rails licensed banks operate on - every module composable, every event observable, every transaction reconciled.',
  heroPrimaryCTA: { label: 'Start building on IDMB', href: PATHS.developersSandbox },
  heroSecondaryCTA: { label: 'Talk to our banking team', href: mailto('sales', 'IDMB Banking enquiry') },
  heroVisual: BankingHeroVisual,
  heroVariant: 'split',
  heroTone: 'plain',
  subProductsVariant: 'cards',
  statsVariant: 'cards',
  statsBg: 'alt',
  capabilitiesVariant: 'horizontal',

  subProductsEyebrow: 'Modules',
  subProductsHeading: 'A regulated banking stack, in modules',
  subProductsIntro:
    'Run the whole stack or compose only the parts you need. Every module is independently versioned, exposed through the same authentication and observability layer.',
  subProducts: [
    { title: 'Core banking & ledger',      desc: 'Real-time, double-entry ledger. Accounts, balances, holds and reconciliation in a single source of truth.', href: PATHS.bankingCore,        icon: IconHybridInfra },
    { title: 'Card issuing & processing',  desc: 'Issue branded debit, credit and prepaid cards on Visa and Mastercard rails with a programmable auth engine.', href: PATHS.bankingCards,       icon: IconAIModels, comingSoon: true },
    { title: 'Payments & FX rails',        desc: 'Real-time payments, cross-border settlement and FX in 40+ currencies from one integration.',                  href: PATHS.bankingPayments,    icon: IconAIProductivity, comingSoon: true },
    { title: 'Compliance, KYC & AML',      desc: 'Identity verification, transaction monitoring, sanctions screening and regulator-ready reports built in.',     href: PATHS.bankingCompliance,  icon: IconSecurity },
    { title: 'Treasury & liquidity',       desc: 'Settlement accounts, intra-day liquidity and end-of-day reconciliation on one auditable feed.',                href: PATHS.bankingTreasury,    icon: IconAnalytics },
    { title: 'Reporting & data',           desc: 'Stream every ledger event into your warehouse. Pre-modelled views for risk, finance and growth.',              href: PATHS.dataReporting,      icon: IconDataMgmt },
  ],

  statsEyebrow: 'Real production numbers',
  statsHeading: 'Banks run on IDMB',
  statsIntro:
    'A snapshot from the IDMB platform across the banks, fintechs and operators in production today.',
  statsPlaceholder: true,
  quotePlaceholder: true,
  stats: [
    { value: 'USD 2.1B',  label: 'in customer deposits migrated to the IDMB ledger without a single outage' },
    { value: '99.99%',    label: 'platform availability across our regulated regions in 2025' },
    { value: '< 200ms',   label: 'median end-to-end ledger write across the banking core' },
    { value: 'PCI DSS L1', label: 'and SOC 2 Type II certified, audited every year' },
  ],

  quote: {
    quote:
      'We replaced a legacy mainframe with the IDMB banking core, an in-house card programme and a unified data layer in eleven months. The migration carried two billion dollars of deposits without a single customer-facing outage.',
    name: 'Aisha Mensah',
    role: 'CTO',
    company: 'Northbank',
    storyHref: PATHS.customerNorthbank,
  },

  capabilitiesHeading: 'Built for the institutions that run money',
  capabilitiesIntro:
    'IDMB sits between the regulators and your product. Three properties make that work for licensed banks and the fintechs that build on them.',
  capabilities: [
    { title: 'Composable',     desc: 'Every module is its own service with its own SLA. Adopt the ledger first; bring cards, payments and analytics on later.', href: PATHS.banking,         icon: IconIntegration },
    { title: 'Regulated',      desc: 'PCI DSS Level 1, SOC 2 Type II, ISO 27001 and the regional banking certifications IDMB customers operate under.',         href: PATHS.trustCompliance, icon: IconSecurity },
    { title: 'Production-ready', desc: 'Real-time observability, audit-grade event logs and replay tools - the same tooling the IDMB team uses to operate it.', href: PATHS.developers,       icon: IconConsulting },
  ],

  cta: {
    heading: 'Ready to launch a real-time bank on IDMB?',
    subheading:
      'Open a free sandbox, post your first ledger entry in minutes, or talk to our banking team about a production deployment.',
    primary:   { label: 'Open the sandbox',      href: PATHS.developersSandbox },
    secondary: { label: 'Talk to banking team',  href: mailto('sales', 'IDMB Banking enquiry') },
  },
};
