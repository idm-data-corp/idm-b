import {
  IconHybridInfra,
  IconAnalytics,
  IconAIProductivity,
  IconSecurity,
  IconDataMgmt,
  IconAIModels,
} from '../../components/icons';
import type { SubProductContent } from '../../app/pages/_shared/SubProductPage';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

export const bankingCore: SubProductContent = {
  heroEyebrow: 'IDMB Banking · Core ledger',
  heroTitle: <>The ledger your bank<br />was supposed to have</>,
  heroLede:
    'A real-time, double-entry ledger built for high-throughput retail and commercial banking. Open accounts, post entries, hold funds and reconcile - every event observable, every balance auditable.',
  heroPrimary:   { label: 'Read the ledger docs', href: PATHS.developersDocs },
  heroSecondary: { label: 'Talk to banking team', href: mailto('sales', 'IDMB Core Ledger enquiry') },
  heroVariant: 'split',
  heroTone: 'plain',
  capabilitiesVariant: 'cards',
  capabilitiesBg: 'default',
  howVariant: 'rail',
  howBg: 'alt',
  relatedVariant: 'minimal',

  capabilitiesHeading: 'Capabilities',
  capabilitiesIntro: 'A core that gets out of the way of the people building on it.',
  capabilities: [
    { title: 'Real-time double-entry', desc: 'Every transaction posts atomically across debit and credit accounts in under 200ms.', href: PATHS.bankingCore, icon: IconHybridInfra },
    { title: 'Holds, reservations, freezes', desc: 'First-class primitives for authorisation holds, escrow and operator-initiated freezes.', href: PATHS.bankingCore, icon: IconSecurity },
    { title: 'Multi-currency from day one', desc: 'Open accounts in any supported currency; convert through the same ledger with quoted FX.', href: PATHS.bankingPayments, icon: IconAIProductivity },
    { title: 'Reconciliation built in', desc: 'A continuously balanced ledger with audit-grade event logs and replay tools.', href: PATHS.dataReporting, icon: IconAnalytics },
    { title: 'Streaming events',     desc: 'Every ledger event published to your warehouse and event bus with at-least-once delivery.', href: PATHS.dataLake, icon: IconDataMgmt },
    { title: 'Programmable rules',   desc: 'Pre- and post-posting rules in code: limits, MCC, jurisdiction and bespoke product policy.', href: PATHS.bankingCore, icon: IconAIModels },
  ],

  howHeading: 'How it works',
  howIntro: 'Four primitives, applied consistently, replace the bulk of a legacy core.',
  steps: [
    { title: 'Open accounts',  desc: 'Customer, merchant or treasury accounts in any supported currency.' },
    { title: 'Post entries',   desc: 'Atomic double-entry posts with idempotency keys and structured metadata.' },
    { title: 'Reserve & settle', desc: 'Hold funds, expire holds, settle in real time or batch.' },
    { title: 'Stream & reconcile', desc: 'Subscribe to events; reconcile balances and movements continuously.' },
  ],

  code: {
    heading: 'Post a ledger entry in three lines',
    intro: 'A typed REST API with the same shape across every IDMB module.',
    samples: [
      {
        label: 'cURL',
        language: 'shell',
        code: `curl https://api.idmb.com/v1/ledger/entries \\
  -H "Authorization: Bearer $IDMB_API_KEY" \\
  -H "Idempotency-Key: 9f3c-2025-04-12-001" \\
  -d '{
    "currency": "USD",
    "lines": [
      { "account_id": "acc_customer_001", "amount": -1250 },
      { "account_id": "acc_merchant_99",  "amount":  1250 }
    ],
    "metadata": { "memo": "Coffee at Java House" }
  }'`,
      },
      {
        label: 'Node.js',
        language: 'ts',
        code: `import { IDMB } from '@idmb/sdk';

const idmb = new IDMB({ apiKey: process.env.IDMB_API_KEY! });

await idmb.ledger.entries.create({
  currency: 'USD',
  idempotencyKey: '9f3c-2025-04-12-001',
  lines: [
    { accountId: 'acc_customer_001', amount: -1250 },
    { accountId: 'acc_merchant_99',  amount:  1250 },
  ],
  metadata: { memo: 'Coffee at Java House' },
});`,
      },
    ],
  },

  quote: {
    quote:
      'We migrated two billion dollars of customer deposits onto the IDMB core in a single weekend, with zero customer-facing outages. The ledger has not blinked.',
    name: 'Aisha Mensah',
    role: 'CTO',
    company: 'Northbank',
    storyHref: PATHS.customerNorthbank,
  },

  pricing: {
    headline: 'Usage-based, with a free sandbox',
    detail: 'You pay per ledger entry posted in production. Sandbox is unlimited and free.',
    href: PATHS.pricingBanking,
  },

  relatedHeading: 'Related modules',
  related: [
    { title: 'Card issuing & processing', desc: 'Cards plug straight into the core ledger as authorisation lines.', href: PATHS.bankingCards,    icon: IconAIModels },
    { title: 'Payments & FX rails',       desc: 'Real-time payments and multi-currency settlement on the same ledger.', href: PATHS.bankingPayments, icon: IconAIProductivity },
    { title: 'Real-time analytics',       desc: 'Stream every ledger event into the IDMB analytics layer.',           href: PATHS.dataRealTime,   icon: IconAnalytics },
  ],

  cta: {
    heading: 'Run your bank on a real-time ledger',
    subheading: 'Open a sandbox and post your first entry in under five minutes, or talk to our banking team about migration.',
    primary:   { label: 'Open the sandbox',     href: PATHS.developersSandbox },
    secondary: { label: 'Talk to banking team', href: mailto('sales', 'IDMB Core Ledger enquiry') },
  },
};
