import {
  IconIntegration,
  IconAIProductivity,
  IconHybridInfra,
  IconAnalytics,
  IconSecurity,
  IconAIModels,
} from '../../components/icons';
import { LogoVela } from '../../components/customer-logos';
import type { CustomerStoryContent } from '../../app/pages/_shared/CustomerStoryPage';
import { PATHS } from '../../lib/routes';

export const vela: CustomerStoryContent = {
  customer: { name: 'Vela', industry: 'Cross-border remittance', region: 'Africa, MENA & APAC', logo: LogoVela },
  heroEyebrow: 'Customer story · Wallets',
  heroTitle: <>Vela runs cross-border settlement across 47 corridors on IDMB.</>,
  heroSubtitle: 'A remittance operator collapsed three vendor stacks into one IDMB integration — and now runs forty-seven corridors with one operations team, one compliance team and one ledger.',
  heroStats: [
    { value: '47',       label: 'live cross-border corridors across Africa, MENA and APAC' },
    { value: '99.99%',   label: 'platform availability for cross-border settlement in 2025' },
    { value: '−62%',     label: 'reduction in vendor and integration overhead post-migration' },
    { value: '24 / 7',   label: 'corridor coverage with a single on-call rotation' },
  ],

  body: {
    problem: (
      <>
        <p>
          Vela had grown by stitching corridors. Every new country meant a new bank partner, a new
          screening vendor, a new reconciliation file format and three more spreadsheets. Operations
          had reached the point where the next corridor would cost as much as the previous five
          combined.
        </p>
        <p>
          The board wanted growth; the operations team wanted to keep their jobs and their weekends.
        </p>
      </>
    ),
    approach: (
      <>
        <p>
          Vela moved settlement, FX and screening onto IDMB cross-border wallets. The IDMB compliance
          pack — travel-rule, beneficial-ownership and country-of-origin checks — replaced three vendor
          contracts. The IDMB ledger replaced fourteen home-grown reconciliation jobs.
        </p>
        <p>
          Vela kept its consumer brand and front-end and pointed it at IDMB. The migration ran corridor
          by corridor over six months, with parallel-running on each one. By month seven, every Vela
          payment ran through IDMB.
        </p>
      </>
    ),
    result: (
      <>
        <p>
          The forty-seven Vela corridors now run on one ops team, one compliance team and one ledger.
          The operations stack lost three vendors and a five-figure monthly licensing bill. The
          on-call rotation halved.
        </p>
        <p>
          Vela's growth team has now turned that operational headroom into corridor expansion: ten
          new corridors are scheduled to go live this year, and each one costs a fraction of what
          the old stack would have charged.
        </p>
      </>
    ),
  },

  quote: {
    quote:
      'IDMB lets us run 47 corridors with one operations team, one compliance team and one ledger. The economics simply did not work without it.',
    name: 'Léa Caron',
    role: 'Head of Payments',
  },

  stack: [
    { title: 'Cross-border wallets',   desc: 'The wallet primitive every Vela corridor settles on.',    href: PATHS.walletsCrossBorder, icon: IconIntegration },
    { title: 'Payments & FX',          desc: 'Real-time and SWIFT rails routed automatically.',         href: PATHS.bankingPayments,    icon: IconAIProductivity },
    { title: 'Stored-value accounts',  desc: 'Treasury wallets per corridor and per partner.',           href: PATHS.walletsStored,      icon: IconHybridInfra },
    { title: 'Compliance, KYC & AML',  desc: 'Travel rule, BO and origin-of-funds checks pre-wired.',   href: PATHS.bankingCompliance,  icon: IconSecurity },
    { title: 'Real-time analytics',    desc: 'Live position view per corridor and counterparty.',        href: PATHS.dataRealTime,       icon: IconAnalytics },
    { title: 'Risk & fraud signals',   desc: 'Real-time scoring on every corridor transfer.',            href: PATHS.dataRisk,           icon: IconAIModels },
  ],

  related: [
    { title: 'Northbank: bank rebuild on IDMB', desc: 'How a 70-year-old bank rebuilt its core on IDMB in eleven months.', href: PATHS.customerNorthbank, icon: IconHybridInfra },
    { title: 'Paywave: 9.4M wallets on IDMB',   desc: 'How a regional super-app embedded multi-currency wallets and tap-to-pay cards.', href: PATHS.customerPaywave, icon: IconAIModels },
    { title: 'Mosaic: real-time credit',         desc: 'How a lender lifted approval rates 38% with cashflow analytics on IDMB.',      href: PATHS.customerMosaic,    icon: IconAnalytics },
  ],
};
