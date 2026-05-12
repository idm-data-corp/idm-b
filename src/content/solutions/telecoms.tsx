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

export const telecoms: SolutionContent = {
  heroEyebrow: 'Solutions · Telecom operators',
  heroTitle: <>Your subscriber base is your most valuable financial asset. Use it.</>,
  heroLede: 'IDMB gives telecom operators a pre-built financial services stack: wallets, cards, float management and analytics - under your own brand, on your own terms.',
  heroPrimary: { label: 'Talk to our telco team', href: mailto('sales', 'Telecom operator enquiry') },
  heroSecondary: { label: 'Explore the wallets platform', href: PATHS.wallets },
  heroVariant: 'centered',
  heroTone: 'tinted',

  painHeading: 'The telco-to-fintech transition is harder than it looks',
  pains: [
    {
      icon: IconHybridInfra,
      title: 'Financial infrastructure is a different discipline',
      desc: 'Telecom networks are engineered for high availability at low margin. Financial infrastructure adds real-time settlement, regulatory reporting and double-entry accounting on top. Most telco IT teams have not built this before.',
    },
    {
      icon: IconSecurity,
      title: 'Regulators treat financial services differently',
      desc: 'A mobile-money licence or e-money authorisation brings KYC, AML, capital requirements and consumer protection obligations that sit outside the telecom regulator\'s remit.',
    },
    {
      icon: IconAIProductivity,
      title: 'Churn goes up if the wallet experience is poor',
      desc: 'Subscribers who open a wallet expect the same instant, always-on experience they get from their phone network. Batch settlement, outages and opaque errors translate directly to NPS drops.',
    },
  ],

  outcomesPlaceholder: true,
  outcomesHeading: 'What telcos achieve with IDMB',
  outcomes: [
    { value: '6 weeks', label: 'Time to first wallet transaction', sub: 'in a new market, using an existing telco licence' },
    { value: '99.99%', label: 'Wallet uptime SLA', sub: 'carrier-grade, not fintech-grade availability' },
    { value: '0', label: 'In-house ledger engineers needed', sub: 'IDMB manages the regulated infrastructure' },
    { value: '3×', label: 'ARPU uplift potential', sub: 'reported by telcos adding financial services on IDMB' },
  ],
  outcomesVariant: 'inline',

  stackHeading: 'The telco financial services stack on IDMB',
  stack: [
    { title: 'Stored-value accounts',  desc: 'Subscriber wallets - open at SIM registration or in-app.',              href: PATHS.walletsStored,      icon: IconHybridInfra },
    { title: 'Card-linked wallets',    desc: 'Attach cards to subscriber wallets, push to mobile pay.',                href: PATHS.walletsCardLinked,  icon: IconAIModels },
    { title: 'Cross-border wallets',   desc: 'Remittance corridors for your diaspora subscriber base.',                href: PATHS.walletsCrossBorder, icon: IconAIProductivity },
    { title: 'Compliance, KYC & AML', desc: 'Automated identity at scale - bulk SIM-linked KYC supported.',           href: PATHS.bankingCompliance,  icon: IconSecurity },
    { title: 'Real-time analytics',   desc: 'Subscriber financial activity, float health and product usage.',          href: PATHS.dataRealTime,       icon: IconAnalytics },
    { title: 'Risk & fraud signals',  desc: 'Real-time risk scores on every subscriber transaction.',                  href: PATHS.dataRisk,           icon: IconDataMgmt },
  ],
  stackVariant: 'cards',

  storyCallout: {
    eyebrow: 'Customer story · Cross-border wallets',
    heading: <>Vela launched 14 new corridors in its first year - by treating infrastructure as a managed service.</>,
    summary: 'While Vela is not a telco, their approach to running financial infrastructure - fully managed, always-on, zero in-house ledger engineering - is precisely the model IDMB enables for telecom operators.',
    stat: '24/7',
    statLabel: 'settlement with zero batch windows - what telco-grade availability looks like on IDMB',
    href: PATHS.customerVela,
    logo: LogoVela,
  },

  quotePlaceholder: true,
  quote: {
    quote: 'We did not want to become a bank. We wanted to offer our subscribers a wallet. IDMB made that distinction real - we own the product, they own the infrastructure.',
    name: 'Nadia Kamara',
    role: 'COO, Vela',
    company: 'Vela',
    storyHref: PATHS.customerVela,
  },

  cta: {
    heading: 'Launch a financial product on top of your network',
    subheading: 'Our telco specialists will map IDMB modules to your subscriber base, regulatory context and existing BSS/OSS stack.',
    primary: { label: 'Talk to the telco team', href: mailto('sales', 'Telecom operator enquiry') },
    secondary: { label: 'See the wallets platform', href: PATHS.wallets },
  },
};
