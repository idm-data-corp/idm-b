import {
  IconAnalytics,
  IconHybridInfra,
  IconAIProductivity,
  IconSecurity,
  IconAIModels,
  IconConsulting,
} from '../../components/icons';
import type { SubProductContent } from '../../app/pages/_shared/SubProductPage';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

export const dataRealTime: SubProductContent = {
  heroEyebrow: 'IDMB Data · Real-time analytics',
  heroTitle: <>Sub-second dashboards<br />over live money</>,
  heroLede:
    'Streaming dashboards and an operator console over live ledger and wallet activity, with role-aware access. Drop the same charts into your own product with signed iframe widgets.',
  heroPrimary:   { label: 'Read the analytics docs', href: PATHS.developersDocs },
  heroSecondary: { label: 'Talk to data team',       href: mailto('sales', 'IDMB Real-time analytics enquiry') },
  heroVariant: 'centered',
  heroTone: 'plain',
  capabilitiesVariant: 'numbered',
  capabilitiesBg: 'default',
  howVariant: 'connected',
  howBg: 'alt',
  relatedVariant: 'minimal',

  capabilitiesHeading: 'Capabilities',
  capabilities: [
    { title: 'Streaming dashboards',  desc: 'Sub-second p95 query latency over live ledger data.',                  href: PATHS.dataRealTime, icon: IconAnalytics },
    { title: 'Operator console',      desc: 'Search any account, wallet or transaction across your platform.',       href: PATHS.dataRealTime, icon: IconHybridInfra },
    { title: 'Embedded charts',       desc: 'Drop IDMB analytics into your own product with signed iframe widgets.', href: PATHS.dataRealTime, icon: IconAIProductivity },
    { title: 'Role-aware access',     desc: 'Per-team, per-region and per-account access policies.',                 href: PATHS.trustSecurity, icon: IconSecurity },
    { title: 'Anomaly highlighting',  desc: 'ML-assisted anomaly detection on every dashboard.',                     href: PATHS.dataRisk,     icon: IconAIModels },
    { title: 'Saved views',           desc: 'Curated views shared across the team and in incident playbooks.',       href: PATHS.dataRealTime, icon: IconConsulting },
  ],

  howHeading: 'How it works',
  steps: [
    { title: 'Open the console',    desc: 'A web app pre-wired to your IDMB data - no setup beyond SSO.' },
    { title: 'Pick a saved view',   desc: 'Customers, transactions, fraud cases - start from a ready dashboard.' },
    { title: 'Drill in',            desc: 'Click any number to land on the underlying transactions.' },
    { title: 'Embed in product',    desc: 'Take any chart and drop it into your customer-facing app.' },
  ],

  quotePlaceholder: true,
  quote: {
    quote:
      'Our risk team stopped exporting CSVs. They live in the IDMB operator console - same data, sub-second, and with the audit trail attached.',
    name: 'Priya Subramanian',
    role: 'Head of Credit',
    company: 'Mosaic',
    storyHref: PATHS.customerMosaic,
  },

  pricing: {
    headline: 'Per-seat for the operator console',
    detail: 'Embedded charts metered by render. Sandbox is unlimited and free.',
    href: PATHS.pricingData,
  },

  relatedHeading: 'Related modules',
  related: [
    { title: 'Risk & fraud signals', desc: 'Real-time risk and fraud scoring on the same stream.', href: PATHS.dataRisk,     icon: IconAIModels },
    { title: 'Data lake & warehouse', desc: 'The same stream, persisted in your warehouse.',         href: PATHS.dataLake,     icon: IconHybridInfra },
    { title: 'Regulatory reporting',  desc: 'Pre-built statutory returns from the same source.',     href: PATHS.dataReporting, icon: IconAIProductivity },
  ],

  cta: {
    heading: 'Operate on live numbers, not last-night exports',
    subheading: 'Open the operator console in a sandbox, or talk to our team about embedding analytics in your product.',
    primary:   { label: 'Open the sandbox',     href: PATHS.developersSandbox },
    secondary: { label: 'Talk to the data team', href: mailto('sales', 'IDMB Real-time analytics enquiry') },
  },
};
