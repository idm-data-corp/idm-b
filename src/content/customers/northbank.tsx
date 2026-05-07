import {
  IconHybridInfra,
  IconAIModels,
  IconAIProductivity,
  IconSecurity,
  IconAnalytics,
  IconDataMgmt,
} from '../../components/icons';
import { LogoNorthbank } from '../../components/customer-logos';
import type { CustomerStoryContent } from '../../app/pages/_shared/CustomerStoryPage';
import { PATHS } from '../../lib/routes';

export const northbank: CustomerStoryContent = {
  customer: { name: 'Northbank', industry: 'Licensed retail bank', region: 'Western Europe', logo: LogoNorthbank },
  heroEyebrow: 'Customer story · Banking',
  heroTitle: <>Northbank rebuilt its core on IDMB in eleven months.</>,
  heroSubtitle: 'A 70-year-old retail bank replaced a legacy mainframe with the IDMB ledger, an in-house card programme and a unified data layer - without a single customer-facing outage.',
  heroStats: [
    { value: 'USD 2.1B', label: 'in customer deposits migrated to IDMB without a customer-facing outage' },
    { value: '11 months', label: 'from contract signature to a fully live retail bank on IDMB' },
    { value: '5 markets',  label: 'where the new card programme launched in the first quarter' },
    { value: '99.99%',     label: 'platform availability since cutover, audited every quarter' },
  ],

  body: {
    problem: (
      <>
        <p>
          Northbank ran on a forty-year-old mainframe core. Every product launch involved a six-month
          change-control cycle, every reconciliation finished after midnight, and the bank could not
          file the new statutory returns from its primary regulator without a manual stitch.
        </p>
        <p>
          The board signed off on a rewrite in early 2025. The CTO told the team they had eleven months
          and zero appetite for a customer-facing outage. The brief was the opposite of "lift and shift" -
          it had to land on a real-time, regulator-ready platform that would carry the bank for the
          next twenty years.
        </p>
      </>
    ),
    approach: (
      <>
        <p>
          Northbank chose IDMB because the modules - ledger, cards, payments, compliance, data - already
          fit together. The bank ran a parallel-run for the first six months, every transaction posting
          to both the legacy core and the IDMB ledger. By month seven, the IDMB numbers matched to the
          cent.
        </p>
        <p>
          The card programme was built in-house on IDMB Cards: branded debit and credit cards, a custom
          authorisation engine for fraud-aware decline rules, and tokenisation for Apple Pay and Google
          Pay. The data team plugged IDMB Data into Snowflake on day one and never wrote a custom ETL.
        </p>
        <p>
          Cutover happened on a Saturday. The legacy mainframe was decommissioned that Monday.
        </p>
      </>
    ),
    result: (
      <>
        <p>
          Northbank's reconciliation now runs continuously instead of overnight. Statutory returns
          refresh in lockstep with the ledger and have already passed two regulator reviews - the most
          recent one took two days end-to-end.
        </p>
        <p>
          Product launches that used to take a quarter now ship in a fortnight. The team that maintained
          the legacy core was redeployed to building new products. And the bank reported its first
          full year on IDMB without a single Sev-1 incident in customer-facing services.
        </p>
      </>
    ),
  },

  quote: {
    quote:
      'We migrated two billion dollars of customer deposits onto the IDMB core in a single weekend, with zero customer-facing outages. The ledger has not blinked.',
    name: 'Aisha Mensah',
    role: 'CTO',
  },

  stack: [
    { title: 'Core banking & ledger',  desc: 'The ledger that replaced the mainframe.', href: PATHS.bankingCore,    icon: IconHybridInfra },
    { title: 'Card issuing',           desc: 'Branded debit and credit on Visa and Mastercard rails.', href: PATHS.bankingCards, icon: IconAIModels },
    { title: 'Payments & FX',          desc: 'Real-time and cross-border payment rails.', href: PATHS.bankingPayments, icon: IconAIProductivity },
    { title: 'Compliance, KYC & AML',  desc: 'Regulator-ready monitoring and reports.',  href: PATHS.bankingCompliance, icon: IconSecurity },
    { title: 'Data lake & warehouse',  desc: 'Every ledger event streamed into Snowflake.', href: PATHS.dataLake,    icon: IconDataMgmt },
    { title: 'Real-time analytics',    desc: 'Operator console for risk and finance teams.', href: PATHS.dataRealTime, icon: IconAnalytics },
  ],

  related: [
    { title: 'Paywave: 9.4M wallets on IDMB', desc: 'How a regional super-app embedded multi-currency wallets and tap-to-pay cards.', href: PATHS.customerPaywave, icon: IconAIModels },
    { title: 'Mosaic: real-time credit',      desc: 'How a lender lifted approval rates 38% with cashflow analytics on IDMB.',         href: PATHS.customerMosaic,  icon: IconAnalytics },
    { title: 'Vela: cross-border at scale',   desc: 'How a remittance operator runs 47 corridors on IDMB Wallets and Payments.',       href: PATHS.customerVela,    icon: IconAIProductivity },
  ],
};
