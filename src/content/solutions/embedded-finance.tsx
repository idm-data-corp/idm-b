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

export const embeddedFinance: SolutionContent = {
  heroEyebrow: 'Solutions · Embedded finance',
  heroTitle: <>White-label banking and wallets for any brand, any vertical.</>,
  heroLede: 'IDMB is the regulated infrastructure layer that lets non-bank businesses issue accounts, cards and wallets under their own brand — without applying for a licence or managing a core.',
  heroPrimary: { label: 'Talk to the BaaS team', href: mailto('sales', 'Embedded finance enquiry') },
  heroSecondary: { label: 'Explore the API', href: PATHS.developersDocs },
  heroVariant: 'split',
  heroTone: 'tinted',

  painHeading: 'What makes embedded finance hard to get right',
  pains: [
    {
      icon: IconSecurity,
      title: 'The regulatory layer is not optional',
      desc: 'Embedding bank accounts or wallets into a non-bank product requires a regulated partner, robust KYC flows and an AML programme. Most BaaS failures happen here.',
    },
    {
      icon: IconHybridInfra,
      title: 'Partner bank dependencies create ceilings',
      desc: 'Relying on a single sponsor bank means absorbing their rate limits, product restrictions and risk appetite. Scaling is someone else\'s decision.',
    },
    {
      icon: IconDataMgmt,
      title: 'You need data as much as you need accounts',
      desc: 'Embedded finance creates a rich behavioural signal — spending patterns, cashflow timing, product affinity. Without a data layer, you\'re handing that signal to your infrastructure provider.',
    },
  ],

  outcomesHeading: 'Embedded-finance results on IDMB',
  outcomes: [
    { value: '1 contract', label: 'From ledger to compliance to data', sub: 'no patchwork of sponsor banks and vendors' },
    { value: 'Days', label: 'To issue a white-label card', sub: 'from API call to physical card in production' },
    { value: 'Full', label: 'Data ownership', sub: 'every event on the ledger belongs to you, not to IDMB' },
    { value: 'Multi-licence', label: 'Regulatory coverage', sub: 'IDMB holds licences across multiple jurisdictions' },
  ],
  outcomesVariant: 'cards',

  stackHeading: 'What IDMB provides for embedded-finance platforms',
  stack: [
    { title: 'Core banking & ledger',  desc: 'A multi-tenant ledger that separates end-customer balances cleanly.',    href: PATHS.bankingCore,        icon: IconHybridInfra },
    { title: 'Card issuing',           desc: 'White-label debit, credit and virtual cards under your brand.',           href: PATHS.bankingCards,       icon: IconAIModels },
    { title: 'Stored-value accounts',  desc: 'Branded wallets and e-money accounts in any supported currency.',         href: PATHS.walletsStored,      icon: IconAIProductivity },
    { title: 'Compliance, KYC & AML',  desc: 'Managed compliance so your embedded product stays onside.',              href: PATHS.bankingCompliance,  icon: IconSecurity },
    { title: 'Data lake & warehouse',  desc: 'Your customers\' financial data streamed to your warehouse.',             href: PATHS.dataLake,           icon: IconDataMgmt },
    { title: 'Regulatory reporting',   desc: 'Statutory returns filed on behalf of the embedded programme.',            href: PATHS.dataReporting,      icon: IconAnalytics },
  ],
  stackVariant: 'minimal',

  storyCallout: {
    eyebrow: 'Customer story · Banking',
    heading: <>Northbank embedded IDMB across three product lines without a separate licence per market.</>,
    summary: 'Northbank used IDMB\'s multi-jurisdiction infrastructure to expand a regulated card programme into five markets in the first quarter — without applying for five separate licences or negotiating five sponsor bank agreements.',
    stat: '5 markets',
    statLabel: 'card programme launched across, using one IDMB regulatory envelope',
    href: PATHS.customerNorthbank,
    logo: LogoNorthbank,
  },

  quote: {
    quote: 'We needed to launch a branded financial product in five markets. IDMB handled the regulatory coverage, the ledger and the card programme. We handled the brand and the customer experience.',
    name: 'Aisha Mensah',
    role: 'CTO, Northbank',
    company: 'Northbank',
    storyHref: PATHS.customerNorthbank,
  },

  cta: {
    heading: 'Embed banking and wallets into your product',
    subheading: 'Talk to our BaaS team about your use case — vertical, geography, product type and scale. We\'ll scope the right IDMB configuration.',
    primary: { label: 'Talk to the BaaS team', href: mailto('sales', 'Embedded finance enquiry') },
    secondary: { label: 'Explore the API reference', href: PATHS.developersDocs },
  },
};
