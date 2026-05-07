import {
  IconAIProductivity,
  IconIntegration,
  IconSecurity,
  IconAIModels,
  IconHybridInfra,
  IconAnalytics,
} from '../../components/icons';
import type { SubProductContent } from '../../app/pages/_shared/SubProductPage';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

export const walletsCrossBorder: SubProductContent = {
  heroEyebrow: 'IDMB Wallets · Cross-border wallets',
  heroTitle: <>Hold any currency,<br />move on any corridor</>,
  heroLede:
    'Live in 47 corridors across Africa, MENA and APAC. Hold balances in any supported currency, convert at quoted rates inside the wallet, and clear with screening built in.',
  heroPrimary:   { label: 'Read the docs', href: PATHS.developersDocs },
  heroSecondary: { label: 'Talk to corridor team', href: mailto('sales', 'IDMB Cross-border enquiry') },
  heroVariant: 'centered',
  heroTone: 'plain',
  capabilitiesVariant: 'minimal',
  capabilitiesBg: 'alt',
  howVariant: 'rail',
  howBg: 'default',
  relatedVariant: 'horizontal',

  capabilitiesHeading: 'Capabilities',
  capabilities: [
    { title: 'Live corridors',     desc: '47 cross-border corridors with always-on screening and reconciliation.',  href: PATHS.walletsCrossBorder, icon: IconIntegration },
    { title: 'In-wallet FX',       desc: 'Hold balances in any supported currency; convert at quoted rates.',        href: PATHS.walletsCrossBorder, icon: IconAIProductivity },
    { title: 'Compliance pack',    desc: 'Travel rule, beneficial ownership and country-of-origin checks pre-wired.', href: PATHS.bankingCompliance, icon: IconSecurity },
    { title: 'Smart routing',      desc: 'IDMB picks the right rail per corridor and currency, automatically.',       href: PATHS.bankingPayments,    icon: IconAIModels },
    { title: 'Mobile money rails', desc: 'Native top-up and payout to mobile money providers across Africa and APAC.', href: PATHS.bankingPayments,   icon: IconHybridInfra },
    { title: 'Settlement feed',    desc: 'Per-corridor settlement, fees and FX legs streamed continuously.',           href: PATHS.dataLake,           icon: IconAnalytics },
  ],

  howHeading: 'How it works',
  steps: [
    { title: 'Open a wallet',     desc: 'Pick the originating currency; IDMB attaches the corridor compliance pack.' },
    { title: 'Top up',             desc: 'Card, bank transfer or mobile money - IDMB handles the rail.' },
    { title: 'Convert in-wallet',  desc: 'Quote, lock and convert without leaving the platform.' },
    { title: 'Cash out',           desc: 'Send to bank, card, wallet or mobile money on the destination corridor.' },
  ],

  quote: {
    quote:
      'IDMB lets us run 47 corridors with one operations team, one compliance team and one ledger. The economics simply did not work without it.',
    name: 'Léa Caron',
    role: 'Head of Payments',
    company: 'Vela',
    storyHref: PATHS.customerVela,
  },

  pricing: {
    headline: 'Per-corridor pricing, by volume',
    detail: 'FX margin and corridor fees disclosed upfront. Sandbox is unlimited and free.',
    href: PATHS.pricingWallets,
  },

  relatedHeading: 'Related modules',
  related: [
    { title: 'Stored-value accounts', desc: 'The wallet primitive cross-border builds on.',          href: PATHS.walletsStored,    icon: IconHybridInfra },
    { title: 'Payments & FX',         desc: 'Real-time payments and 40+ currency settlement.',      href: PATHS.bankingPayments,  icon: IconAIProductivity, comingSoon: true },
    { title: 'Risk & fraud signals',  desc: 'Real-time scoring on every corridor transfer.',         href: PATHS.dataRisk,         icon: IconSecurity },
  ],

  cta: {
    heading: 'Open a corridor in days, not months',
    subheading: 'Open a sandbox and run a test corridor, or talk to our team about a custom rollout.',
    primary:   { label: 'Open the sandbox',       href: PATHS.developersSandbox },
    secondary: { label: 'Talk to corridor team',  href: mailto('sales', 'IDMB Cross-border enquiry') },
  },
};
