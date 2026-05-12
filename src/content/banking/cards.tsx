import {
  IconAIModels,
  IconSecurity,
  IconAIProductivity,
  IconAnalytics,
  IconHybridInfra,
  IconConsulting,
} from '../../components/icons';
import type { SubProductContent } from '../../app/pages/_shared/SubProductPage';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

export const bankingCards: SubProductContent = {
  heroEyebrow: 'IDMB Banking · Card issuing · Coming soon',
  heroTitle: <>Issue cards on Visa<br />and Mastercard rails</>,
  heroLede:
    'Branded debit, credit and prepaid cards in days, not quarters. Programmable authorisation, in-house 3-D Secure and a dispute lifecycle that ends with the regulator-ready record.',
  heroPrimary:   { label: 'Read the cards docs', href: PATHS.developersDocs },
  heroSecondary: { label: 'Talk to cards team',  href: mailto('sales', 'IDMB Cards enquiry') },
  heroVariant: 'centered',
  heroTone: 'tinted',
  capabilitiesVariant: 'numbered',
  capabilitiesBg: 'default',
  howVariant: 'circles',
  howBg: 'default',
  relatedVariant: 'horizontal',

  capabilitiesHeading: 'Capabilities',
  capabilitiesIntro: 'Everything required to ship a card programme - without operating the network.',
  capabilities: [
    { title: 'Virtual & physical cards', desc: 'Issue debit, credit and prepaid cards in your own brand, in days.', href: PATHS.bankingCards, icon: IconAIModels },
    { title: 'Programmable authorisation', desc: 'Approve / decline rules in code, with low-latency, observable decision streams.', href: PATHS.bankingCards, icon: IconAIProductivity },
    { title: 'In-house 3-D Secure', desc: 'Frictionless authentication with strong fallbacks across the major schemes.', href: PATHS.bankingCards, icon: IconSecurity },
    { title: 'Disputes & chargebacks', desc: 'Native dispute lifecycle tracking, regulator-ready evidence packs.', href: PATHS.bankingCompliance, icon: IconConsulting },
    { title: 'Tokenisation', desc: 'Push tokens to Apple Pay, Google Pay and Samsung Wallet from one API.', href: PATHS.walletsCardLinked, icon: IconHybridInfra },
    { title: 'Real-time spend signals', desc: 'Authorisation events streamed into the analytics layer for risk and growth.', href: PATHS.dataRealTime, icon: IconAnalytics },
  ],

  howHeading: 'How it works',
  steps: [
    { title: 'Onboard a programme', desc: 'BIN sponsor, branding, regions and product mix configured once.' },
    { title: 'Issue a card',         desc: 'POST /cards with the holder, programme and product type.' },
    { title: 'Authorise transactions', desc: 'Network sends authorisations; your rules approve or decline.' },
    { title: 'Settle & reconcile',   desc: 'Card transactions post to the IDMB core; reconciliation is continuous.' },
  ],

  code: {
    heading: 'Issue your first card',
    intro: 'A typed REST API. Card and ledger live on the same platform - no inter-system reconciliation.',
    samples: [
      {
        label: 'cURL',
        language: 'shell',
        code: `curl https://api.idm-b.com/v1/cards \\
  -H "Authorization: Bearer $IDMB_API_KEY" \\
  -d '{
    "programme_id": "prog_retail_uk",
    "holder_id":    "h_001",
    "type":         "virtual_debit",
    "currency":     "GBP",
    "limits":       { "daily": 50000, "per_txn": 10000 }
  }'`,
      },
      {
        label: 'Node.js',
        language: 'ts',
        code: `await idmb.cards.create({
  programmeId: 'prog_retail_uk',
  holderId:    'h_001',
  type:        'virtual_debit',
  currency:    'GBP',
  limits:      { daily: 50_000, perTxn: 10_000 },
});`,
      },
    ],
  },

  quotePlaceholder: true,
  quote: {
    quote:
      'Eight weeks from contract to a fully branded card programme live in five markets. The IDMB cards team carried the integration, but we own the auth logic - that combination is rare.',
    name: 'Aisha Mensah',
    role: 'CTO',
    company: 'Northbank',
    storyHref: PATHS.customerNorthbank,
  },

  pricing: {
    headline: 'From $0.05 per active card per month',
    detail: 'Plus interchange-aware processing fees. Sandbox is unlimited and free.',
    href: PATHS.pricingBanking,
  },

  relatedHeading: 'Related modules',
  related: [
    { title: 'Core banking & ledger', desc: 'Cards post directly to the same ledger that holds customer balances.', href: PATHS.bankingCore,    icon: IconHybridInfra },
    { title: 'Card-linked wallets',   desc: 'Wallet balances spendable anywhere cards are accepted.',              href: PATHS.walletsCardLinked, icon: IconAIModels },
    { title: 'Risk & fraud signals',  desc: 'Real-time scoring on every card authorisation.',                     href: PATHS.dataRisk,        icon: IconSecurity },
  ],

  cta: {
    heading: 'Ship a card programme this quarter',
    subheading: 'Open a sandbox and issue a virtual card in minutes, or talk to our cards team about a branded launch.',
    primary:   { label: 'Open the sandbox',  href: PATHS.developersSandbox },
    secondary: { label: 'Talk to cards team', href: mailto('sales', 'IDMB Cards enquiry') },
  },
};
