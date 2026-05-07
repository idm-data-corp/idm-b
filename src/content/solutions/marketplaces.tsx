import {
  IconHybridInfra,
  IconAIModels,
  IconAIProductivity,
  IconSecurity,
  IconAnalytics,
  IconDataMgmt,
} from '../../components/icons';
import { LogoPaywave } from '../../components/customer-logos';
import type { SolutionContent } from '../../app/pages/_shared/SolutionPage';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

export const marketplaces: SolutionContent = {
  heroEyebrow: 'Solutions · Marketplaces & super-apps',
  heroTitle: <>Power every side of your marketplace with one money layer.</>,
  heroLede: 'Multi-party payouts, buyer balances, merchant wallets and KYC at platform scale - without stitching together five different providers.',
  heroPrimary: { label: 'Talk to the platform team', href: mailto('sales', 'Marketplace enquiry') },
  heroSecondary: { label: 'Open a sandbox', href: PATHS.developersSandbox },
  heroVariant: 'visual-left',
  heroTone: 'plain',

  painHeading: 'What every marketplace gets wrong about money',
  pains: [
    {
      icon: IconAIProductivity,
      title: 'Payouts are slow and opaque',
      desc: 'Merchants wait days for settlement. When something goes wrong - a failed payout, a duplicate, a disputed amount - there is no auditable trail to reason from.',
    },
    {
      icon: IconSecurity,
      title: 'KYC is a growth bottleneck',
      desc: 'Onboarding thousands of merchants, sellers or gig workers requires identity checks at every stage. Manual review queues slow down the supply side of your marketplace.',
    },
    {
      icon: IconDataMgmt,
      title: 'Reconciliation is a weekend job',
      desc: 'Matching payouts to orders across multiple payment methods, currencies and counterparties is a spreadsheet exercise that no engineering team should still be doing.',
    },
  ],

  outcomesHeading: 'Marketplace outcomes on IDMB',
  outcomes: [
    { value: '<4s', label: 'Median merchant payout time', sub: 'real-time settlement over IDMB rails' },
    { value: '100%', label: 'Auditable payout trail', sub: 'every split, fee and reversal on the ledger' },
    { value: 'Instant', label: 'KYC decisions at onboarding', sub: 'automated identity for merchant sign-ups' },
    { value: '1 ledger', label: 'For buyers, sellers and fees', sub: 'no reconciliation across multiple systems' },
  ],
  outcomesVariant: 'rail',

  stackHeading: 'IDMB modules built for platform money',
  stack: [
    { title: 'Merchant & B2B wallets',  desc: 'Treasury wallets, payout queues and loyalty balances on one ledger.',  href: PATHS.walletsMerchant,    icon: IconAIProductivity },
    { title: 'Stored-value accounts',   desc: 'Buyer balances and loyalty points as programmable wallet balances.',    href: PATHS.walletsStored,      icon: IconHybridInfra },
    { title: 'Payments & FX',          desc: 'Real-time local payouts and multi-currency settlement.',                 href: PATHS.bankingPayments,    icon: IconAIModels },
    { title: 'Compliance, KYC & AML',  desc: 'Bulk merchant onboarding, identity and ongoing screening.',             href: PATHS.bankingCompliance,  icon: IconSecurity },
    { title: 'Data lake & warehouse',  desc: 'Every payout event streamed with full split metadata.',                  href: PATHS.dataLake,           icon: IconDataMgmt },
    { title: 'Real-time analytics',    desc: 'Live GMV, take-rate and payout health dashboards.',                      href: PATHS.dataRealTime,       icon: IconAnalytics },
  ],
  stackVariant: 'numbered',
  stackColumns: 3,

  storyCallout: {
    eyebrow: 'Customer story · Wallets',
    heading: <>Paywave runs 9.4M multi-currency wallets and cross-app payouts on IDMB.</>,
    summary: 'Paywave used IDMB Wallets to power buyer balances, merchant float accounts and cross-border payouts - replacing four separate vendors with one integration.',
    stat: '9.4M',
    statLabel: 'active wallets powered by IDMB across the Paywave super-app',
    href: PATHS.customerPaywave,
    logo: LogoPaywave,
  },

  quote: {
    quote: 'Merchant payouts that used to take three days now clear in under four seconds. Our merchant NPS moved double digits in the first quarter.',
    name: 'Tariq Osei',
    role: 'CTO, Paywave',
    company: 'Paywave',
    storyHref: PATHS.customerPaywave,
  },

  cta: {
    heading: 'Build your marketplace money layer on IDMB',
    subheading: 'Talk to our platform specialists or open a sandbox to test payout flows and wallet creation today.',
    primary: { label: 'Talk to the platform team', href: mailto('sales', 'Marketplace/super-app enquiry') },
    secondary: { label: 'Explore the sandbox', href: PATHS.developersSandbox },
  },
};
