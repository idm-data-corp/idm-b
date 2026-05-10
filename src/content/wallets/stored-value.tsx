import {
  IconHybridInfra,
  IconIntegration,
  IconAIProductivity,
  IconAnalytics,
  IconSecurity,
  IconAIModels,
} from '../../components/icons';
import type { SubProductContent } from '../../app/pages/_shared/SubProductPage';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

export const walletsStored: SubProductContent = {
  heroEyebrow: 'IDMB Wallets · Stored-value accounts',
  heroTitle: <>Programmable wallets<br />in one API call</>,
  heroLede:
    'Open multi-currency, multi-tenant wallets with full lifecycle controls. Move funds wallet-to-wallet in under 200ms across the IDMB network.',
  heroPrimary:   { label: 'Read the wallets docs', href: PATHS.developersDocs },
  heroSecondary: { label: 'Talk to wallets team',  href: mailto('sales', 'IDMB Wallets enquiry') },
  heroVariant: 'split',
  heroTone: 'plain',
  capabilitiesVariant: 'numbered',
  capabilitiesBg: 'alt',
  howVariant: 'rail',
  howBg: 'default',
  relatedVariant: 'horizontal',

  capabilitiesHeading: 'Capabilities',
  capabilities: [
    { title: 'Open in one call',     desc: 'Create a wallet with currency, holder, limits and metadata in a single request.', href: PATHS.walletsStored, icon: IconHybridInfra },
    { title: 'Multi-currency',       desc: 'Hold balances in any supported currency on the same wallet.',                       href: PATHS.walletsCrossBorder, icon: IconAIProductivity },
    { title: 'Instant transfers',    desc: 'Wallet-to-wallet in under 200ms, anywhere on the IDMB network.',                    href: PATHS.walletsStored, icon: IconIntegration },
    { title: 'Lifecycle controls',   desc: 'Activate, freeze, close, archive - every state change is auditable.',               href: PATHS.walletsStored, icon: IconSecurity },
    { title: 'Programmable limits',  desc: 'Per-wallet daily, per-txn and MCC limits enforced before posting.',                 href: PATHS.walletsStored, icon: IconAIModels },
    { title: 'Streaming events',     desc: 'Every wallet event published with at-least-once delivery and replay.',               href: PATHS.dataLake,    icon: IconAnalytics },
  ],

  howHeading: 'How it works',
  steps: [
    { title: 'Open a wallet',     desc: 'POST /wallets with the holder and currency.' },
    { title: 'Fund it',            desc: 'Top up via card, bank transfer or mobile money channel.' },
    { title: 'Move money',         desc: 'POST /wallets/transfers - settles instantly across the IDMB network.' },
    { title: 'Cash out',           desc: 'Send to bank, card or wallet on any supported corridor.' },
  ],

  code: {
    heading: 'Open a wallet, move funds',
    intro: 'A wallet is just an account on the IDMB ledger with a wallet policy attached.',
    samples: [
      {
        label: 'cURL',
        language: 'shell',
        code: `curl https://api.idm-b.com/v1/wallets \\
  -H "Authorization: Bearer $IDMB_API_KEY" \\
  -d '{
    "holder_id": "h_001",
    "currency":  "USD",
    "limits":    { "daily": 200000, "per_txn": 50000 }
  }'

# Move 25.00 from one wallet to another
curl https://api.idm-b.com/v1/wallets/transfers \\
  -H "Authorization: Bearer $IDMB_API_KEY" \\
  -d '{ "from_wallet_id": "w_a", "to_wallet_id": "w_b", "amount": 2500 }'`,
      },
      {
        label: 'Node.js',
        language: 'ts',
        code: `const wallet = await idmb.wallets.create({
  holderId: 'h_001',
  currency: 'USD',
  limits:   { daily: 200_000, perTxn: 50_000 },
});

await idmb.wallets.transfers.create({
  fromWalletId: 'w_a',
  toWalletId:   'w_b',
  amount:       2500,
});`,
      },
    ],
  },

  quote: {
    quote:
      'We replaced an in-house wallet engine that took two years to build with a single IDMB integration. The day-one performance was already better than what we had operated for three years.',
    name: 'Daniel Okello',
    role: 'VP Product',
    company: 'Paywave',
    storyHref: PATHS.customerPaywave,
  },

  pricing: {
    headline: 'Per-active-wallet pricing, per month',
    detail: 'Inactive wallets are free; sandbox is unlimited and free.',
    href: PATHS.pricingWallets,
  },

  relatedHeading: 'Related modules',
  related: [
    { title: 'Card-linked wallets',  desc: 'Spend wallet balances anywhere cards are accepted.',          href: PATHS.walletsCardLinked,  icon: IconAIModels },
    { title: 'Cross-border wallets', desc: 'Move money across 47 corridors with screening built in.',     href: PATHS.walletsCrossBorder, icon: IconIntegration },
    { title: 'Real-time analytics',  desc: 'Stream wallet events into dashboards and your warehouse.',    href: PATHS.dataRealTime,       icon: IconAnalytics },
  ],

  cta: {
    heading: 'Open your first wallet in minutes',
    subheading: 'Open a sandbox and move funds wallet-to-wallet, or talk to our team about a regulated rollout.',
    primary:   { label: 'Open the sandbox',    href: PATHS.developersSandbox },
    secondary: { label: 'Talk to wallets team', href: mailto('sales', 'IDMB Wallets enquiry') },
  },
};
