import {
  IconHybridInfra,
  IconAIModels,
  IconAIProductivity,
  IconSecurity,
  IconAnalytics,
  IconDataMgmt,
} from '../../components/icons';
import { LogoVela } from '../../components/customer-logos';
import type { SolutionContent } from '../../app/pages/_shared/SolutionPage';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

export const mobileMoney: SolutionContent = {
  heroEyebrow: 'Solutions · Mobile-money operators',
  heroTitle: <>A real-time core behind every transaction your subscribers make.</>,
  heroLede: 'Swap the legacy switch infrastructure without retraining an agent network or rewriting a USSD menu. IDMB migrates your float, your corridors and your compliance - invisibly.',
  heroPrimary: { label: 'Talk to our mobile-money team', href: mailto('sales', 'Mobile-money operator enquiry') },
  heroSecondary: { label: 'See how Vela did it', href: PATHS.customerVela },
  heroVariant: 'split',
  heroTone: 'plain',

  painHeading: 'The reality of running mobile money on legacy infrastructure',
  pains: [
    {
      icon: IconHybridInfra,
      title: 'Your core was not built for real time',
      desc: 'Batch settlement windows, T+1 float reconciliation and end-of-day cutoffs are built-in constraints that were acceptable in 2009 but lose you customers today.',
    },
    {
      icon: IconSecurity,
      title: 'Corridors are manually managed',
      desc: 'Each cross-border corridor has its own bilateral agreement, float arrangement and screening integration. Adding a new corridor takes months of operational work.',
    },
    {
      icon: IconAnalytics,
      title: 'Fraud signals come too late',
      desc: 'Batch fraud runs flag suspicious activity after the money has moved. Real-time scoring on every transaction is table stakes for regulators and customers alike.',
    },
  ],

  outcomesHeading: 'What mobile-money operators unlock on IDMB',
  outcomes: [
    { value: '47', label: 'Corridors live on IDMB', sub: 'managed by Vela with fully automated screening' },
    { value: '99.99%', label: 'Availability SLA', sub: 'across every active corridor' },
    { value: '−62%', label: 'Operational cost reduction', sub: 'reported by Vela in first full year' },
    { value: '24/7', label: 'Settlement', sub: 'no batch windows, no end-of-day cutoffs' },
  ],
  outcomesVariant: 'cards',

  stackHeading: 'The IDMB stack for mobile-money operators',
  stack: [
    { title: 'Cross-border wallets',    desc: 'Hold balances in any currency. Move money across corridors instantly.',    href: PATHS.walletsCrossBorder,  icon: IconHybridInfra },
    { title: 'Stored-value accounts',   desc: 'Subscriber float accounts that update in real time.',                        href: PATHS.walletsStored,       icon: IconAIModels },
    { title: 'Core banking & ledger',   desc: 'The ledger that handles high-frequency micro-transactions at scale.',       href: PATHS.bankingCore,         icon: IconAIProductivity },
    { title: 'Compliance, KYC & AML',   desc: 'Automated screening on every corridor and every account.',                  href: PATHS.bankingCompliance,   icon: IconSecurity },
    { title: 'Risk & fraud signals',    desc: 'Real-time transaction risk scores with low-latency case management.',       href: PATHS.dataRisk,            icon: IconAnalytics },
    { title: 'Regulatory reporting',    desc: 'Pre-built returns for every regulator market your corridors touch.',        href: PATHS.dataReporting,       icon: IconDataMgmt },
  ],
  stackVariant: 'horizontal',

  storyCallout: {
    eyebrow: 'Customer story · Cross-border',
    heading: <>Vela runs 47 active corridors on IDMB with zero batch windows.</>,
    summary: 'The East African remittance operator migrated its entire cross-border infrastructure to IDMB Wallets and Payments, cutting operational costs by 62% while adding 14 new corridors in the first year.',
    stat: '47',
    statLabel: 'corridors running on IDMB with real-time settlement and automated screening',
    href: PATHS.customerVela,
    logo: LogoVela,
  },

  quote: {
    quote: "We added fourteen corridors in our first year on IDMB. The same work used to take two years. Compliance screening just works - it's not a project anymore.",
    name: 'Nadia Kamara',
    role: 'COO, Vela',
    company: 'Vela',
    storyHref: PATHS.customerVela,
  },

  cta: {
    heading: 'Modernise your mobile-money core without disruption',
    subheading: 'Our migration team has moved live mobile-money stacks before. Talk to us about a phased transition that keeps your agent network and subscribers online throughout.',
    primary: { label: 'Talk to our migration team', href: mailto('sales', 'Mobile-money migration enquiry') },
    secondary: { label: 'Open a sandbox', href: PATHS.developersSandbox },
  },
};
