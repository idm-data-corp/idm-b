import {
  IconHybridInfra,
  IconAIModels,
  IconAIProductivity,
  IconSecurity,
  IconAnalytics,
  IconDataMgmt,
} from '../../components/icons';
import { LogoMosaic } from '../../components/customer-logos';
import type { SolutionContent } from '../../app/pages/_shared/SolutionPage';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

export const lenders: SolutionContent = {
  heroEyebrow: 'Solutions · Lenders & credit products',
  heroTitle: <>Disburse faster. Score smarter. Recover cleanly.</>,
  heroLede: 'IDMB gives credit teams a single platform for loan wallets, automated disbursement, cashflow-based risk scoring and repayment tracking - from underwriting to close.',
  heroPrimary: { label: 'Talk to our credit team', href: mailto('sales', 'Lender/credit product enquiry') },
  heroSecondary: { label: 'See how Mosaic uses IDMB', href: PATHS.customerMosaic },
  heroVariant: 'centered',
  heroTone: 'tinted',

  painHeading: 'The three hard problems in modern lending',
  pains: [
    {
      icon: IconAnalytics,
      title: 'Underwriting on stale data',
      desc: 'Credit models trained on bureau scores and historical statements miss the cashflow signals that predict default. By the time the data is available, the borrower has already drawn down.',
    },
    {
      icon: IconAIProductivity,
      title: 'Disbursement is slower than the decision',
      desc: 'A 5-minute credit decision followed by a 48-hour disbursement is a broken promise. Borrowers expect the money to arrive the same day - preferably the same minute.',
    },
    {
      icon: IconHybridInfra,
      title: 'Repayment tracking is manual',
      desc: 'Reconciling repayments against outstanding balances across multiple payment rails, missed payments and partial settlements is an operations overhead that scales with the book, not the team.',
    },
  ],

  outcomesHeading: 'IDMB credit product results',
  outcomes: [
    { value: '+38%', label: 'Approval rate improvement', sub: 'after Mosaic switched to IDMB cashflow signals' },
    { value: '<4 min', label: 'End-to-end credit decision', sub: 'underwriting to disbursement on IDMB' },
    { value: '−31%', label: 'Non-performing loan rate', sub: 'reduction at Mosaic in the first twelve months' },
    { value: '100%', label: 'Repayment audit trail', sub: 'every instalment, reversal and waiver on the ledger' },
  ],
  outcomesVariant: 'inline',

  stackHeading: 'The IDMB credit stack',
  stack: [
    { title: 'Risk & fraud signals',    desc: 'Real-time cashflow-based risk scores for underwriting.',                href: PATHS.dataRisk,           icon: IconAnalytics },
    { title: 'Stored-value accounts',   desc: 'Loan wallets that disburse the moment a decision is made.',            href: PATHS.walletsStored,      icon: IconHybridInfra },
    { title: 'Payments & FX',          desc: 'Automated disbursement and repayment collection on real-time rails.',   href: PATHS.bankingPayments,    icon: IconAIProductivity },
    { title: 'Core banking & ledger',  desc: 'Loan book ledger with full instalment and balance history.',             href: PATHS.bankingCore,        icon: IconAIModels },
    { title: 'Data lake & warehouse',  desc: 'Full credit model training data streamed with rich event metadata.',     href: PATHS.dataLake,           icon: IconDataMgmt },
    { title: 'Compliance, KYC & AML', desc: 'Borrower identity, AML screening and consent management.',               href: PATHS.bankingCompliance,  icon: IconSecurity },
  ],
  stackVariant: 'horizontal',

  storyCallout: {
    eyebrow: 'Customer story · Data',
    heading: <>Mosaic lifted approval rates 38% and cut NPLs 31% with real-time cashflow analytics.</>,
    summary: 'The consumer lender replaced bureau-only underwriting with IDMB\'s real-time cashflow signals, scoring borrowers on live transaction data rather than month-old statements. Disbursement moved from T+2 to under four minutes.',
    stat: '+38%',
    statLabel: 'loan approval rate improvement in the first twelve months on IDMB',
    href: PATHS.customerMosaic,
    logo: LogoMosaic,
  },

  quote: {
    quote: 'We used to approve one in five applicants. On IDMB cashflow signals we approve one in three - with a lower NPL rate. The data was always there. We just couldn\'t see it in real time.',
    name: 'Priya Nair',
    role: 'Chief Risk Officer, Mosaic',
    company: 'Mosaic',
    storyHref: PATHS.customerMosaic,
  },

  cta: {
    heading: 'Build a smarter credit product on IDMB',
    subheading: 'Talk to our credit specialists about your loan book, risk model and disbursement requirements. We\'ll show you how the data and wallet layers connect.',
    primary: { label: 'Talk to the credit team', href: mailto('sales', 'Lender/credit product enquiry') },
    secondary: { label: 'See the risk & data modules', href: PATHS.dataRisk },
  },
};
