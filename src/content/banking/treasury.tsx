import {
  IconHybridInfra,
  IconAnalytics,
  IconAIProductivity,
  IconConsulting,
  IconDataMgmt,
  IconSecurity,
} from '../../components/icons';
import type { SubProductContent } from '../../app/pages/_shared/SubProductPage';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

export const bankingTreasury: SubProductContent = {
  heroEyebrow: 'IDMB Banking · Treasury & liquidity',
  heroTitle: <>Treasury that runs<br />off the same ledger</>,
  heroLede:
    'Settlement accounts, intra-day liquidity and end-of-day reconciliation on a single auditable feed. The treasury team and the engineering team see the same numbers.',
  heroPrimary:   { label: 'Read the treasury docs', href: PATHS.developersDocs },
  heroSecondary: { label: 'Talk to treasury team',  href: mailto('sales', 'IDMB Treasury enquiry') },
  heroVariant: 'split',
  heroTone: 'tinted',
  capabilitiesVariant: 'cards',
  capabilitiesBg: 'default',
  howVariant: 'circles',
  howBg: 'alt',
  relatedVariant: 'horizontal',

  capabilitiesHeading: 'Capabilities',
  capabilities: [
    { title: 'Settlement accounts', desc: 'Operating, escrow, reserve and clearing accounts with role-based approvals.', href: PATHS.bankingTreasury, icon: IconHybridInfra },
    { title: 'Intra-day liquidity', desc: 'Live position views per currency, scheme and counterparty.',                  href: PATHS.dataRealTime,    icon: IconAnalytics },
    { title: 'EOD reconciliation',  desc: 'Continuous balanced ledger; end-of-day cuts produce regulator-ready files.', href: PATHS.dataReporting,    icon: IconAIProductivity },
    { title: 'Multi-bank visibility', desc: 'Aggregate balances across IDMB and external banks in one dashboard.',     href: PATHS.dataLake,         icon: IconDataMgmt },
    { title: 'Role-based approvals', desc: 'Maker / checker / approver flows with audit-grade event logs.',            href: PATHS.trustSecurity,    icon: IconSecurity },
    { title: 'Programmable rules',   desc: 'Sweep, fund and rebalance rules in code; everything observable.',          href: PATHS.bankingTreasury, icon: IconConsulting },
  ],

  howHeading: 'How it works',
  steps: [
    { title: 'Model accounts',    desc: 'Define your treasury hierarchy in IDMB: operating, escrow, reserve, clearing.' },
    { title: 'Move funds',        desc: 'Sweep, fund and rebalance with programmable rules and approval chains.' },
    { title: 'Watch positions',   desc: 'Real-time positions per currency and counterparty in the operator console.' },
    { title: 'Cut & reconcile',   desc: 'EOD cuts run continuously; regulator returns and bank confirmations align by construction.' },
  ],

  quote: {
    quote:
      'The same balance the regulator sees is the same balance our treasury reports the next morning. That used to take a team of reconcilers; now it is a single export.',
    name: 'Léa Caron',
    role: 'Head of Payments',
    company: 'Vela',
    storyHref: PATHS.customerVela,
  },

  pricing: {
    headline: 'Bundled into the IDMB Banking platform fee',
    detail: 'No separate treasury seat licence or per-position fee.',
    href: PATHS.pricingBanking,
  },

  relatedHeading: 'Related modules',
  related: [
    { title: 'Core banking & ledger', desc: 'Treasury runs on the same ledger as customer accounts.',     href: PATHS.bankingCore,    icon: IconHybridInfra },
    { title: 'Payments & FX',         desc: 'Move treasury funds across schemes from the same console.', href: PATHS.bankingPayments, icon: IconAIProductivity },
    { title: 'Regulatory reporting',  desc: 'Statutory returns auto-generated from the treasury feed.', href: PATHS.dataReporting,  icon: IconAnalytics },
  ],

  cta: {
    heading: 'Run treasury on the same source of truth',
    subheading: 'Open a sandbox to see the operator console, or talk to our team about your specific reconciliation needs.',
    primary:   { label: 'Open the sandbox',     href: PATHS.developersSandbox },
    secondary: { label: 'Talk to treasury team', href: mailto('sales', 'IDMB Treasury enquiry') },
  },
};
