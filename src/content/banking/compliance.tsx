import {
  IconSecurity,
  IconAIProductivity,
  IconAIModels,
  IconAnalytics,
  IconConsulting,
  IconHybridInfra,
} from '../../components/icons';
import type { SubProductContent } from '../../app/pages/_shared/SubProductPage';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

export const bankingCompliance: SubProductContent = {
  heroEyebrow: 'IDMB Banking · Compliance, KYC & AML',
  heroTitle: <>Compliance pre-wired<br />into every transaction</>,
  heroLede:
    'Identity verification, transaction monitoring, sanctions screening and regulator-ready reporting attached to the same ledger that runs your products. The audit trail is the platform.',
  heroPrimary:   { label: 'Read the compliance docs', href: PATHS.developersDocs },
  heroSecondary: { label: 'Talk to compliance team',  href: mailto('sales', 'IDMB Compliance enquiry') },
  heroVariant: 'centered',
  heroTone: 'plain',
  capabilitiesVariant: 'minimal',
  capabilitiesBg: 'default',
  howVariant: 'rail',
  howBg: 'alt',
  relatedVariant: 'cards',

  capabilitiesHeading: 'Capabilities',
  capabilities: [
    { title: 'KYC & onboarding',          desc: 'Identity verification, document capture and ongoing screening for individuals and businesses.', href: PATHS.bankingCompliance, icon: IconSecurity },
    { title: 'AML transaction monitoring', desc: 'Real-time monitoring with tunable rules, ML-assisted scoring and case management.',           href: PATHS.dataRisk,            icon: IconAIModels },
    { title: 'Sanctions & PEP screening',  desc: 'Continuous screening against the major sanctions lists and PEP databases.',                   href: PATHS.bankingCompliance, icon: IconAIProductivity },
    { title: 'Regulatory reporting',       desc: 'Pre-built returns for the major banking regulators IDMB customers operate under.',            href: PATHS.dataReporting,       icon: IconAnalytics },
    { title: 'Audit-grade event log',      desc: 'Tamper-evident, time-stamped record of every decision, retained per policy.',                  href: PATHS.dataReporting,       icon: IconConsulting },
    { title: 'Regulator-ready exports',    desc: 'On-demand exports of any ledger slice in the format your regulator wants.',                    href: PATHS.dataReporting,       icon: IconHybridInfra },
  ],

  howHeading: 'How it works',
  steps: [
    { title: 'Onboard customers', desc: 'KYC checks run automatically on account creation and on a re-screen schedule.' },
    { title: 'Monitor in real time', desc: 'Every ledger event scored; alerts created in the same hop, not in batch.' },
    { title: 'Investigate cases', desc: 'Operators triage alerts, freeze funds and resolve cases without leaving IDMB.' },
    { title: 'Report continuously', desc: 'Statutory returns refresh in lockstep with the ledger; exports on demand.' },
  ],

  quotePlaceholder: true,
  quote: {
    quote:
      'Our regulator review took two days, not two months. The IDMB audit trail let us answer every question with a deterministic export - same numbers as the ledger, same numbers as the dashboard.',
    name: 'Aisha Mensah',
    role: 'CTO',
    company: 'Northbank',
    storyHref: PATHS.customerNorthbank,
  },

  pricing: {
    headline: 'Per-customer KYC pricing, with platform-included monitoring',
    detail: 'Transaction monitoring, sanctions screening and reporting are bundled into the platform fee.',
    href: PATHS.pricingBanking,
  },

  relatedHeading: 'Related modules',
  related: [
    { title: 'Risk & fraud signals', desc: 'Real-time risk and fraud scoring on the same event stream.', href: PATHS.dataRisk,            icon: IconAIModels },
    { title: 'Regulatory reporting', desc: 'Pre-built reports for the regulators IDMB customers file with.', href: PATHS.dataReporting, icon: IconAnalytics },
    { title: 'Licences & regulators', desc: 'IDMB licences and the regulators we work with.',                href: PATHS.trustLicences, icon: IconConsulting },
  ],

  cta: {
    heading: 'Pass your next regulator review on autopilot',
    subheading: 'Talk to our compliance team about your specific regulatory posture, or open a sandbox to see the controls in action.',
    primary:   { label: 'Talk to compliance team', href: mailto('sales', 'IDMB Compliance enquiry') },
    secondary: { label: 'Open the sandbox',        href: PATHS.developersSandbox },
  },
};
