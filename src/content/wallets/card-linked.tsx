import {
  IconAIModels,
  IconHybridInfra,
  IconSecurity,
  IconAIProductivity,
  IconIntegration,
  IconAnalytics,
} from '../../components/icons';
import type { SubProductContent } from '../../app/pages/_shared/SubProductPage';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

export const walletsCardLinked: SubProductContent = {
  heroEyebrow: 'IDMB Wallets · Card-linked wallets',
  heroTitle: <>Wallet balances, spent<br />where cards are accepted</>,
  heroLede:
    'Attach issued cards to wallets so customers spend their stored value anywhere on Visa or Mastercard rails. Push tokens to Apple Pay, Google Pay and Samsung Wallet from one API.',
  heroPrimary:   { label: 'Read the docs', href: PATHS.developersDocs },
  heroSecondary: { label: 'Talk to wallets team', href: mailto('sales', 'IDMB Card-linked wallets enquiry') },
  heroVariant: 'centered',
  heroTone: 'tinted',
  capabilitiesVariant: 'horizontal',
  capabilitiesBg: 'default',
  howVariant: 'circles',
  howBg: 'alt',
  relatedVariant: 'minimal',

  capabilitiesHeading: 'Capabilities',
  capabilities: [
    { title: 'Card linking',         desc: 'Attach an issued card to one or many wallets with one API call.',         href: PATHS.walletsCardLinked, icon: IconAIModels },
    { title: 'Wallet provisioning',  desc: 'Push tokens to Apple Pay, Google Pay and Samsung Wallet.',                href: PATHS.walletsCardLinked, icon: IconHybridInfra },
    { title: 'Spending controls',    desc: 'Daily, per-txn, MCC and per-merchant rules enforced at authorisation.',   href: PATHS.walletsCardLinked, icon: IconSecurity },
    { title: 'Multi-currency', desc: 'Spend a USD wallet on a EUR purchase - IDMB converts at the auth.',              href: PATHS.walletsCrossBorder, icon: IconAIProductivity },
    { title: 'Programme bundling',   desc: 'One card programme spanning many wallets and many products.',              href: PATHS.bankingCards,      icon: IconIntegration },
    { title: 'Real-time signals',    desc: 'Authorisation events stream into the analytics layer for risk and growth.', href: PATHS.dataRealTime,      icon: IconAnalytics },
  ],

  howHeading: 'How it works',
  steps: [
    { title: 'Issue a card',  desc: 'Through IDMB Cards or your existing programme.' },
    { title: 'Link to a wallet', desc: 'Attach the card to one or more IDMB wallets.' },
    { title: 'Authorise spend', desc: 'On every authorisation, IDMB picks the right wallet under the rules you set.' },
    { title: 'Reconcile',      desc: 'Card transactions post into the IDMB ledger; wallets and cards are always in sync.' },
  ],

  quotePlaceholder: true,
  quote: {
    quote:
      'Customers stopped seeing two separate balances. The wallet and the card became one product, and the support volume dropped immediately.',
    name: 'Daniel Okello',
    role: 'VP Product',
    company: 'Paywave',
    storyHref: PATHS.customerPaywave,
  },

  pricing: {
    headline: 'Per-active-card and per-active-wallet - bundled',
    detail: 'No separate fee for the link itself. Sandbox is unlimited and free.',
    href: PATHS.pricingWallets,
  },

  relatedHeading: 'Related modules',
  related: [
    { title: 'Card issuing & processing', desc: 'Issue branded cards on Visa and Mastercard rails.', href: PATHS.bankingCards,    icon: IconAIModels, comingSoon: true },
    { title: 'Stored-value accounts',     desc: 'The wallets behind the cards.',                    href: PATHS.walletsStored,    icon: IconHybridInfra },
    { title: 'Risk & fraud signals',      desc: 'Real-time scoring on every authorisation.',        href: PATHS.dataRisk,         icon: IconSecurity },
  ],

  cta: {
    heading: 'Make your wallet feel like a card',
    subheading: 'Open a sandbox and link a test card to a wallet, or talk to our team about a branded rollout.',
    primary:   { label: 'Open the sandbox',     href: PATHS.developersSandbox },
    secondary: { label: 'Talk to wallets team', href: mailto('sales', 'IDMB Card-linked wallets enquiry') },
  },
};
