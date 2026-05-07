import {
  IconHybridInfra,
  IconAIModels,
  IconAIProductivity,
  IconSecurity,
  IconAnalytics,
  IconDataMgmt,
} from '../../components/icons';
import { LogoNorthbank } from '../../components/customer-logos';
import type { SolutionContent } from '../../app/pages/_shared/SolutionPage';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

export const banks: SolutionContent = {
  heroEyebrow: 'Solutions · Licensed banks',
  heroTitle: <>The modern core your bank has been waiting for.</>,
  heroLede: 'Replace your legacy core with a real-time, API-first ledger - without a multi-year freeze. IDMB customers go live in months, not decades.',
  heroPrimary: { label: 'Talk to our banking team', href: mailto('sales', 'Licensed banks enquiry') },
  heroSecondary: { label: 'See the Northbank story', href: PATHS.customerNorthbank },
  heroVariant: 'split',
  heroTone: 'tinted',

  painHeading: 'The challenges every legacy bank knows well',
  painIntro: 'If these problems sound familiar, you are not alone.',
  pains: [
    {
      icon: IconHybridInfra,
      title: 'Every new product is a six-month project',
      desc: 'Legacy change-control gates, batch-window constraints and monolithic data models make even simple product changes expensive and slow.',
    },
    {
      icon: IconSecurity,
      title: 'Compliance is always playing catch-up',
      desc: 'New KYC rules, AML typologies and statutory returns require custom scripts stitched onto a mainframe that was never designed for regulator-ready output.',
    },
    {
      icon: IconAnalytics,
      title: 'Your data team is writing ETL instead of building',
      desc: 'Overnight batch jobs, fragile pipelines and stale data mean risk, finance and product teams are all looking at yesterday\'s numbers.',
    },
  ],

  outcomesHeading: 'What IDMB banks report after cutover',
  outcomes: [
    { value: '11 months', label: 'Average core migration timeline', sub: 'from contract to live retail banking' },
    { value: '99.99%', label: 'Platform availability SLA', sub: 'audited quarterly, not just promised' },
    { value: '<2 days', label: 'Regulatory return turnaround', sub: 'vs. weeks on legacy mainframe stacks' },
    { value: '5×', label: 'Faster product launches', sub: 'reported across the first year on IDMB' },
  ],
  outcomesVariant: 'cards',

  stackHeading: 'The IDMB modules licensed banks use most',
  stackIntro: 'You take what you need. Most banks start with Core + Compliance and expand to Cards and Data in year one.',
  stack: [
    { title: 'Core banking & ledger',   desc: 'Real-time, double-entry ledger for retail and commercial workloads.',   href: PATHS.bankingCore,        icon: IconHybridInfra },
    { title: 'Card issuing',            desc: 'Branded debit, credit and prepaid on Visa and Mastercard rails.',        href: PATHS.bankingCards,       icon: IconAIModels },
    { title: 'Payments & FX',           desc: 'Real-time local payments and cross-border settlement in 40+ currencies.',href: PATHS.bankingPayments,    icon: IconAIProductivity },
    { title: 'Compliance, KYC & AML',   desc: 'Identity, transaction monitoring and regulator-ready reporting.',        href: PATHS.bankingCompliance,  icon: IconSecurity },
    { title: 'Treasury & liquidity',    desc: 'Intra-day liquidity and end-of-day reconciliation in a single feed.',   href: PATHS.bankingTreasury,    icon: IconDataMgmt },
    { title: 'Regulatory reporting',    desc: 'Pre-built statutory returns, refreshed in lockstep with the ledger.',   href: PATHS.dataReporting,      icon: IconAnalytics },
  ],
  stackVariant: 'horizontal',

  storyCallout: {
    eyebrow: 'Customer story · Banking',
    heading: <>Northbank migrated USD&nbsp;2.1B in deposits over one weekend.</>,
    summary: 'A 70-year-old retail bank replaced its mainframe core, card programme and data layer on IDMB - without a single customer-facing outage. The legacy core was decommissioned that Monday.',
    stat: '0',
    statLabel: 'customer-facing outages during a weekend core cutover',
    href: PATHS.customerNorthbank,
    logo: LogoNorthbank,
  },

  quote: {
    quote: 'We migrated two billion dollars of customer deposits onto the IDMB core in a single weekend, with zero customer-facing outages. The ledger has not blinked.',
    name: 'Aisha Mensah',
    role: 'CTO, Northbank',
    company: 'Northbank',
    storyHref: PATHS.customerNorthbank,
  },

  cta: {
    heading: 'Ready to plan your migration?',
    subheading: 'Our banking solutions team will walk you through a phased migration plan tailored to your regulatory environment.',
    primary: { label: 'Talk to the banking team', href: mailto('sales', 'Licensed bank migration enquiry') },
    secondary: { label: 'Open a sandbox', href: PATHS.developersSandbox },
  },
};
