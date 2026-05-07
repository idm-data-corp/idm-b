import {
  IconAnalytics,
  IconAIModels,
  IconDataMgmt,
  IconSecurity,
  IconAIProductivity,
  IconHybridInfra,
} from '../../components/icons';
import { LogoMosaic } from '../../components/customer-logos';
import type { CustomerStoryContent } from '../../app/pages/_shared/CustomerStoryPage';
import { PATHS } from '../../lib/routes';

export const mosaic: CustomerStoryContent = {
  customer: { name: 'Mosaic', industry: 'Consumer & SMB lender', region: 'Southern Africa', logo: LogoMosaic },
  heroEyebrow: 'Customer story · Data',
  heroTitle: <>Mosaic underwrites a borrower in under four minutes on IDMB Data.</>,
  heroSubtitle: 'A lender plugged its credit product into IDMB Data, scored borrowers on real-time cashflow signals, and lifted its approval rate by nearly forty percent without raising its loss rate.',
  heroStats: [
    { value: '+38%',    label: 'lift in approval rates after switching to IDMB cashflow analytics' },
    { value: '< 4 min', label: 'from application submission to credit decision, end to end' },
    { value: '−31%',    label: 'reduction in fraud false positives after IDMB Risk went live' },
    { value: 'Stable',  label: '90-day default rate held flat through the approval-rate lift' },
  ],

  body: {
    problem: (
      <>
        <p>
          Mosaic priced credit on bureau data alone. In its core markets the bureau coverage was thin
          and dated, so the underwriting team rejected applicants whose actual cashflow would have
          been comfortably serviceable. Approval rates sat in the low forties; the team hand-pulled
          bank statements when they really wanted to take a closer look.
        </p>
        <p>
          The product team wanted real-time cashflow signals, real-time risk scores, and a regulator
          trail that was reproducible to the cent. Off-the-shelf vendors covered one of those at a time.
        </p>
      </>
    ),
    approach: (
      <>
        <p>
          Mosaic embedded its lending product into IDMB Data. Every applicant who consented opened a
          read-only IDMB wallet that pulled in their actual income and outgoing flows from licensed
          bank rails. IDMB Risk scored the applicant in real time - including a behavioural signal
          layer that the in-house team would have taken a year to build.
        </p>
        <p>
          The audit trail was the unexpected win. Every credit decision Mosaic makes is now reproducible
          against a tamper-evident IDMB ledger slice. The compliance team stopped writing exception
          reports; the regulator review took two days.
        </p>
      </>
    ),
    result: (
      <>
        <p>
          Approval rates lifted from the low forties to the high fifties within a quarter - a 38% relative
          uplift - and the 90-day default rate held flat. Fraud false-positives dropped 31%. Median
          decision time moved from "the underwriter will get back to you" to under four minutes.
        </p>
        <p>
          The credit team is now an order of magnitude smaller per loan booked, and the headroom they
          earned has gone into product expansion: SMB lending and revenue-based finance, both built on
          the same IDMB Data primitives.
        </p>
      </>
    ),
  },

  quote: {
    quote:
      'IDMB Data lets us underwrite a borrower in under four minutes and lift our approval rate by nearly forty percent - using cashflow signals we never had access to before.',
    name: 'Priya Subramanian',
    role: 'Head of Credit',
  },

  stack: [
    { title: 'Data lake & warehouse',  desc: 'Every IDMB event streamed into Mosaic\'s warehouse.',  href: PATHS.dataLake,        icon: IconDataMgmt },
    { title: 'Real-time analytics',    desc: 'Operator console for the credit and ops teams.',         href: PATHS.dataRealTime,    icon: IconAnalytics },
    { title: 'Risk & fraud signals',   desc: 'Real-time scoring on every credit application.',          href: PATHS.dataRisk,        icon: IconAIModels },
    { title: 'Regulatory reporting',   desc: 'Tamper-evident audit trail for every decision.',          href: PATHS.dataReporting,   icon: IconAIProductivity },
    { title: 'Compliance, KYC & AML',  desc: 'Identity and screening attached to every applicant.',     href: PATHS.bankingCompliance, icon: IconSecurity },
    { title: 'Stored-value accounts',  desc: 'Disbursement wallets that fund every approved loan.',     href: PATHS.walletsStored,   icon: IconHybridInfra },
  ],

  related: [
    { title: 'Northbank: bank rebuild on IDMB', desc: 'How a 70-year-old bank rebuilt its core on IDMB in eleven months.', href: PATHS.customerNorthbank, icon: IconHybridInfra },
    { title: 'Paywave: 9.4M wallets on IDMB',   desc: 'How a regional super-app embedded multi-currency wallets and tap-to-pay cards.', href: PATHS.customerPaywave, icon: IconAIModels },
    { title: 'Vela: cross-border at scale',     desc: 'How a remittance operator runs 47 corridors on IDMB Wallets and Payments.', href: PATHS.customerVela,    icon: IconAIProductivity },
  ],
};
