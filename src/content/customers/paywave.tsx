import {
  IconHybridInfra,
  IconAIModels,
  IconAIProductivity,
  IconIntegration,
  IconAnalytics,
  IconSecurity,
} from '../../components/icons';
import { LogoPaywave } from '../../components/customer-logos';
import type { CustomerStoryContent } from '../../app/pages/_shared/CustomerStoryPage';
import { PATHS } from '../../lib/routes';

export const paywave: CustomerStoryContent = {
  customer: { name: 'Paywave', industry: 'Consumer super-app', region: 'East Africa & Middle East', logo: LogoPaywave },
  heroEyebrow: 'Customer story · Wallets',
  heroTitle: <>Paywave embedded IDMB Wallets into a 9-million-user super-app.</>,
  heroSubtitle: 'A regional super-app replaced an in-house wallet engine with IDMB Wallets and gave nine million users multi-currency balances, instant transfers and tap-to-pay cards on a single ledger.',
  heroStats: [
    { value: '9.4M',    label: 'wallets activated on IDMB across consumer and merchant accounts in year one' },
    { value: '180ms',   label: 'median wallet-to-wallet transfer time, end to end across the IDMB network' },
    { value: '−47%',    label: 'reduction in wallet-related support tickets after the IDMB cutover' },
    { value: '6 months', label: 'from sandbox to production, end-to-end including regulator approvals' },
  ],

  body: {
    problem: (
      <>
        <p>
          Paywave's wallet engine was built in 2020 and had been quietly creaking for years. Every new
          currency or rail meant a new microservice; every reconciliation cycle finished later than
          the last; and every rollout had a steadily growing fear-of-cutover.
        </p>
        <p>
          The product team wanted to ship card-linked wallets, mobile-money corridors and instant FX
          inside the same app. The engineering team wanted to stop being woken up.
        </p>
      </>
    ),
    approach: (
      <>
        <p>
          Paywave replaced the in-house engine with IDMB Wallets behind a feature flag. Existing wallets
          migrated in a thirty-six-hour window with parallel-running on both ledgers; new wallets were
          opened directly on IDMB. The product team brought card-linked wallets and instant transfers
          live through the same app screen, and the IDMB compliance pack absorbed the new mobile-money
          corridors.
        </p>
        <p>
          The biggest win was operational: every wallet event now lands in the same observability
          surface as every other IDMB customer. Paywave's on-call rotation no longer needs a wallet
          specialist.
        </p>
      </>
    ),
    result: (
      <>
        <p>
          Nine million wallets ran on IDMB by the end of year one. Transfer latency dropped from a long
          tail of multi-second outliers to a flat 180ms p95. The support backlog shrank by nearly half.
        </p>
        <p>
          The wallet team - six engineers - was redeployed to building new products on top of IDMB
          rather than maintaining infrastructure. Paywave shipped its tap-to-pay launch, four new
          corridor expansions and an in-app FX feature in the year after the migration.
        </p>
      </>
    ),
  },

  quotePlaceholder: true,
  quote: {
    quote:
      'We replaced an in-house wallet engine that took two years to build with a single IDMB integration. Day-one performance was already better than what we had operated for three years.',
    name: 'Daniel Okello',
    role: 'VP Product',
  },

  stack: [
    { title: 'Stored-value accounts',  desc: 'The wallet primitive every Paywave customer holds.',     href: PATHS.walletsStored,      icon: IconHybridInfra },
    { title: 'Card-linked wallets',    desc: 'Spend wallet balances anywhere cards are accepted.',     href: PATHS.walletsCardLinked,  icon: IconAIModels },
    { title: 'Cross-border wallets',   desc: 'Live across MENA and East Africa corridors.',            href: PATHS.walletsCrossBorder, icon: IconIntegration },
    { title: 'Risk & fraud signals',   desc: 'Real-time scoring on every wallet transfer.',             href: PATHS.dataRisk,           icon: IconSecurity },
    { title: 'Real-time analytics',    desc: 'Operator console for the support and ops teams.',         href: PATHS.dataRealTime,       icon: IconAnalytics },
    { title: 'Payments & FX',          desc: 'Top-up and payout rails into and out of wallets.',         href: PATHS.bankingPayments,    icon: IconAIProductivity, comingSoon: true },
  ],

  related: [
    { title: 'Northbank: bank rebuild on IDMB', desc: 'How a 70-year-old bank rebuilt its core on IDMB in eleven months.', href: PATHS.customerNorthbank, icon: IconHybridInfra },
    { title: 'Mosaic: real-time credit',         desc: 'How a lender lifted approval rates 38% with cashflow analytics on IDMB.', href: PATHS.customerMosaic,    icon: IconAnalytics },
    { title: 'Vela: cross-border at scale',     desc: 'How a remittance operator runs 47 corridors on IDMB Wallets and Payments.', href: PATHS.customerVela,    icon: IconAIProductivity },
  ],
};
