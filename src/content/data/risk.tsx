import {
  IconSecurity,
  IconAIModels,
  IconAnalytics,
  IconAIProductivity,
  IconConsulting,
  IconHybridInfra,
} from '../../components/icons';
import type { SubProductContent } from '../../app/pages/_shared/SubProductPage';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

export const dataRisk: SubProductContent = {
  heroEyebrow: 'IDMB Data · Risk & fraud',
  heroTitle: <>Risk scores at the<br />speed of authorisation</>,
  heroLede:
    'Real-time risk scores on every authorisation and transfer, behavioural fraud signals stitched into the transaction stream and a case management surface investigators actually use.',
  heroPrimary:   { label: 'Read the risk docs', href: PATHS.developersDocs },
  heroSecondary: { label: 'Talk to risk team',  href: mailto('sales', 'IDMB Risk enquiry') },
  heroVariant: 'split',
  heroTone: 'plain',
  capabilitiesVariant: 'horizontal',
  capabilitiesBg: 'default',
  howVariant: 'rail',
  howBg: 'alt',
  relatedVariant: 'cards',

  capabilitiesHeading: 'Capabilities',
  capabilities: [
    { title: 'Transaction scoring', desc: 'Real-time risk scores on every authorisation and transfer, tuned per portfolio.', href: PATHS.dataRisk, icon: IconAIModels },
    { title: 'Behavioural fraud',   desc: 'Device, geo and velocity signals stitched into the transaction stream.',           href: PATHS.dataRisk, icon: IconAIProductivity },
    { title: 'Case management',     desc: 'Triage alerts, freeze funds and resolve cases without leaving IDMB.',              href: PATHS.dataRisk, icon: IconConsulting },
    { title: 'Tunable rules',       desc: 'Rules in code with versioning, testing in a shadow mode and audit trails.',         href: PATHS.dataRisk, icon: IconSecurity },
    { title: 'Sanctions overlay',   desc: 'Sanctions and PEP signals attached to the same scoring pipeline.',                  href: PATHS.bankingCompliance, icon: IconAnalytics },
    { title: 'Streaming explainability', desc: 'Every score comes with the features that drove it - for regulators and engineers.', href: PATHS.dataRisk, icon: IconHybridInfra },
  ],

  howHeading: 'How it works',
  steps: [
    { title: 'Score in real time',  desc: 'IDMB scores every event before it posts.' },
    { title: 'Decide',              desc: 'Approve, decline, step-up or queue for review based on rules in code.' },
    { title: 'Investigate',         desc: 'Operators triage cases on the same surface as the data.' },
    { title: 'Tune',                desc: 'A/B test rules in shadow mode; promote with one click and a full audit trail.' },
  ],

  quote: {
    quote:
      'IDMB Risk dropped our fraud false-positive rate by thirty-one percent in the first quarter. Investigators stopped chasing noise and got time back for actual cases.',
    name: 'Priya Subramanian',
    role: 'Head of Credit',
    company: 'Mosaic',
    storyHref: PATHS.customerMosaic,
  },

  pricing: {
    headline: 'Per-decision pricing, with a free tier',
    detail: 'Case management included; sandbox is unlimited and free.',
    href: PATHS.pricingData,
  },

  relatedHeading: 'Related modules',
  related: [
    { title: 'Real-time analytics', desc: 'Dashboards over the same risk-scored stream.', href: PATHS.dataRealTime,    icon: IconAnalytics },
    { title: 'Compliance, KYC & AML', desc: 'KYC and sanctions on the same platform.', href: PATHS.bankingCompliance, icon: IconSecurity },
    { title: 'Card issuing & processing', desc: 'Risk scores attach to every card auth.', href: PATHS.bankingCards, icon: IconAIModels, comingSoon: true },
  ],

  cta: {
    heading: 'Score every transaction before it posts',
    subheading: 'Open a sandbox and run our reference risk pack, or talk to our team about a tuned model for your portfolio.',
    primary:   { label: 'Open the sandbox',  href: PATHS.developersSandbox },
    secondary: { label: 'Talk to risk team', href: mailto('sales', 'IDMB Risk enquiry') },
  },
};
