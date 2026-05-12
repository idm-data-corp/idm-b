import {
  IconIntegration,
  IconHybridInfra,
  IconAIProductivity,
  IconSecurity,
  IconAnalytics,
  IconConsulting,
} from '../../components/icons';
import type { SubProductContent } from '../../app/pages/_shared/SubProductPage';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

export const walletsMerchant: SubProductContent = {
  heroEyebrow: 'IDMB Wallets · Merchant & B2B wallets',
  heroTitle: <>Marketplace payouts,<br />treasury wallets, loyalty</>,
  heroLede:
    'Run multi-party splits, fee accruals, on-demand seller payouts, treasury wallets and closed-loop loyalty balances on one regulated ledger.',
  heroPrimary:   { label: 'Read the docs', href: PATHS.developersDocs },
  heroSecondary: { label: 'Talk to platform team', href: mailto('sales', 'IDMB Merchant wallets enquiry') },
  heroVariant: 'split',
  heroTone: 'plain',
  capabilitiesVariant: 'cards',
  capabilitiesBg: 'default',
  howVariant: 'connected',
  howBg: 'default',
  relatedVariant: 'minimal',

  capabilitiesHeading: 'Capabilities',
  capabilities: [
    { title: 'Marketplace splits',  desc: 'Multi-party splits, fee accruals and on-demand seller payouts.',          href: PATHS.walletsMerchant, icon: IconIntegration },
    { title: 'Treasury wallets',    desc: 'Operating, escrow and reserve wallets with maker/checker approvals.',     href: PATHS.bankingTreasury, icon: IconHybridInfra },
    { title: 'Loyalty balances',    desc: 'Issue points, vouchers and closed-loop balances alongside customer money.', href: PATHS.walletsMerchant, icon: IconConsulting },
    { title: 'Programmable rules',  desc: 'Split, accrue, sweep and rebalance rules in code with audit-grade logs.',  href: PATHS.walletsMerchant, icon: IconAIProductivity },
    { title: 'Role-based controls', desc: 'Operator-grade controls for finance, ops, treasury and engineering.',      href: PATHS.trustSecurity,    icon: IconSecurity },
    { title: 'Streaming reconciliation', desc: 'Settlement, fees and accruals streamed into your warehouse.',         href: PATHS.dataLake,         icon: IconAnalytics },
  ],

  howHeading: 'How it works',
  steps: [
    { title: 'Model the platform', desc: 'Operating, escrow, fees, sellers, loyalty - modeled as wallets.' },
    { title: 'Split on the way in', desc: 'IDMB applies your split rules at the moment funds arrive.' },
    { title: 'Pay out on demand',   desc: 'Sellers withdraw at will; treasury team approves above thresholds.' },
    { title: 'Close out',           desc: 'EOD cuts and accruals reconcile continuously across the platform.' },
  ],

  quotePlaceholder: true,
  quote: {
    quote:
      'IDMB Wallets gives our sellers instant payouts and our finance team a deterministic close. The platform never needed an engineer to clean up reconciliation again.',
    name: 'Daniel Okello',
    role: 'VP Product',
    company: 'Paywave',
    storyHref: PATHS.customerPaywave,
  },

  pricing: {
    headline: 'Per-wallet pricing for sellers, treasury included',
    detail: 'Treasury wallets are bundled into the platform fee.',
    href: PATHS.pricingWallets,
  },

  relatedHeading: 'Related modules',
  related: [
    { title: 'Stored-value accounts', desc: 'The wallet primitive everything else builds on.', href: PATHS.walletsStored,    icon: IconHybridInfra },
    { title: 'Treasury & liquidity',  desc: 'Operating, escrow, reserve and clearing accounts.', href: PATHS.bankingTreasury, icon: IconHybridInfra },
    { title: 'Regulatory reporting',  desc: 'Statutory reports refreshed in lockstep with the ledger.', href: PATHS.dataReporting, icon: IconAnalytics },
  ],

  cta: {
    heading: 'Run your platform on real ledger primitives',
    subheading: 'Open a sandbox and split a test payment, or talk to our team about a marketplace migration.',
    primary:   { label: 'Open the sandbox',      href: PATHS.developersSandbox },
    secondary: { label: 'Talk to platform team', href: mailto('sales', 'IDMB Merchant wallets enquiry') },
  },
};
