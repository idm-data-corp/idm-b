import {
  IconAIProductivity,
  IconIntegration,
  IconAnalytics,
  IconSecurity,
  IconHybridInfra,
  IconAIModels,
} from '../../components/icons';
import type { SubProductContent } from '../../app/pages/_shared/SubProductPage';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

export const bankingPayments: SubProductContent = {
  comingSoon: true,
  comingSoonNote: 'IDMB Payments & FX rails are launching soon and not yet generally available. The capabilities below describe what we are shipping in the next release.',
  heroEyebrow: 'IDMB Banking · Payments & FX',
  heroTitle: <>Real-time payments,<br />40+ currencies, one API</>,
  heroLede:
    'Connect to instant payment schemes across Africa, EMEA and APAC, settle cross-border in 40+ currencies and run direct debits and payouts - with retry logic, audit trails and reconciliation built in.',
  heroPrimary:   { label: 'Read the payments docs', href: PATHS.developersDocs },
  heroSecondary: { label: 'Talk to payments team',  href: mailto('sales', 'IDMB Payments enquiry') },
  heroVariant: 'split',
  heroTone: 'plain',
  capabilitiesVariant: 'horizontal',
  capabilitiesBg: 'alt',
  howVariant: 'connected',
  howBg: 'default',
  relatedVariant: 'minimal',

  capabilitiesHeading: 'Capabilities',
  capabilities: [
    { title: 'Real-time payments', desc: 'Direct connectivity to instant schemes across Africa, EMEA and APAC.', href: PATHS.bankingPayments, icon: IconAIProductivity },
    { title: 'Cross-border & FX', desc: 'Settle in 40+ currencies with quoted rates, hedging and corridor coverage.', href: PATHS.walletsCrossBorder, icon: IconIntegration },
    { title: 'Direct debits', desc: 'Recurring collections with mandate management and retry strategy in code.', href: PATHS.bankingPayments, icon: IconHybridInfra },
    { title: 'Mass payouts', desc: 'Batch payouts with built-in screening, reconciliation and partial-success handling.', href: PATHS.bankingPayments, icon: IconAIModels },
    { title: 'Sanctions-aware', desc: 'Every payment screened against tunable sanctions lists in the same hop.', href: PATHS.bankingCompliance, icon: IconSecurity },
    { title: 'Streaming reconciliation', desc: 'Settlement, fees and FX legs streamed into your warehouse continuously.', href: PATHS.dataLake, icon: IconAnalytics },
  ],

  howHeading: 'How it works',
  steps: [
    { title: 'Choose a corridor', desc: 'Pick scheme(s) and currencies; IDMB handles BIN sponsors and partner banks.' },
    { title: 'Initiate a payment', desc: 'POST /payments with debtor, creditor, amount, scheme and metadata.' },
    { title: 'Watch it settle', desc: 'Subscribe to events: queued, screened, sent, settled, returned.' },
    { title: 'Reconcile continuously', desc: 'Settlement legs land in the IDMB ledger automatically; warehouse stream stays in sync.' },
  ],

  code: {
    heading: 'Send a real-time payment',
    intro: 'One API across schemes - IDMB picks the right rail per currency and corridor.',
    samples: [
      {
        label: 'cURL',
        language: 'shell',
        code: `curl https://api.idm-b.com/v1/payments \\
  -H "Authorization: Bearer $IDMB_API_KEY" \\
  -d '{
    "debtor_account_id":   "acc_treasury_us",
    "creditor_iban":       "GB29NWBK60161331926819",
    "amount":              { "currency": "USD", "value": 250000 },
    "scheme":              "swift",
    "purpose":             "supplier_payment"
  }'`,
      },
      {
        label: 'Node.js',
        language: 'ts',
        code: `await idmb.payments.create({
  debtorAccountId: 'acc_treasury_us',
  creditorIban:    'GB29NWBK60161331926819',
  amount:          { currency: 'USD', value: 250_000 },
  scheme:          'swift',
  purpose:         'supplier_payment',
});`,
      },
    ],
  },

  quote: {
    quote:
      'IDMB Payments collapsed three vendor integrations into one. We turned on three new payment corridors in a quarter - that used to be a year of work.',
    name: 'Léa Caron',
    role: 'Head of Payments',
    company: 'Vela',
    storyHref: PATHS.customerVela,
  },

  pricing: {
    headline: 'Per-payment fees with no flat platform charge',
    detail: 'Pricing depends on scheme and corridor; sandbox is unlimited and free.',
    href: PATHS.pricingBanking,
  },

  relatedHeading: 'Related modules',
  related: [
    { title: 'Cross-border wallets', desc: 'Hold balances in any supported currency, convert in-wallet.', href: PATHS.walletsCrossBorder, icon: IconIntegration },
    { title: 'Treasury & liquidity', desc: 'Settlement accounts and intra-day liquidity on one feed.', href: PATHS.bankingTreasury, icon: IconHybridInfra },
    { title: 'Compliance, KYC & AML', desc: 'Screen every payment against tunable sanctions and AML rules.', href: PATHS.bankingCompliance, icon: IconSecurity },
  ],

  cta: {
    heading: 'Move money where your customers actually live',
    subheading: 'Open a sandbox and send a test payment, or talk to our team about a corridor we have not added yet.',
    primary:   { label: 'Open the sandbox',     href: PATHS.developersSandbox },
    secondary: { label: 'Talk to payments team', href: mailto('sales', 'IDMB Payments enquiry') },
  },
};
