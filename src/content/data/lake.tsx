import {
  IconDataMgmt,
  IconAnalytics,
  IconHybridInfra,
  IconAIProductivity,
  IconSecurity,
  IconConsulting,
} from '../../components/icons';
import type { SubProductContent } from '../../app/pages/_shared/SubProductPage';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

export const dataLake: SubProductContent = {
  heroEyebrow: 'IDMB Data · Data lake & warehouse',
  heroTitle: <>Every ledger event,<br />in your warehouse</>,
  heroLede:
    'Strong-schema streams of every IDMB ledger and wallet event into Snowflake, BigQuery or your own warehouse. Replay, time-travel and pre-modelled customer 360 views.',
  heroPrimary:   { label: 'Read the data docs', href: PATHS.developersDocs },
  heroSecondary: { label: 'Talk to data team',  href: mailto('sales', 'IDMB Data lake enquiry') },
  heroVariant: 'split',
  heroTone: 'tinted',
  capabilitiesVariant: 'cards',
  capabilitiesBg: 'alt',
  howVariant: 'circles',
  howBg: 'default',
  relatedVariant: 'horizontal',

  capabilitiesHeading: 'Capabilities',
  capabilities: [
    { title: 'Strong-schema streams',  desc: 'Every event has a typed schema versioned alongside the API.',       href: PATHS.dataLake,       icon: IconDataMgmt },
    { title: 'Native Snowflake & BigQuery', desc: 'Managed pipes into the warehouses your teams already use.',     href: PATHS.dataLake,       icon: IconHybridInfra },
    { title: 'Customer 360 model',     desc: 'Pre-modelled views of customers, accounts, wallets and transactions.', href: PATHS.dataLake,    icon: IconAnalytics },
    { title: 'Replay & time-travel',   desc: 'Reprocess any window without contacting IDMB support.',                href: PATHS.dataLake,    icon: IconAIProductivity },
    { title: 'Schema registry',        desc: 'A versioned schema registry with deprecation windows you control.',    href: PATHS.developersDocs, icon: IconConsulting },
    { title: 'Encryption everywhere',  desc: 'Customer-managed keys; per-tenant data isolation by construction.',     href: PATHS.trustSecurity, icon: IconSecurity },
  ],

  howHeading: 'How it works',
  steps: [
    { title: 'Pick a destination', desc: 'Snowflake, BigQuery, Databricks or your own object store.' },
    { title: 'Authorise the pipe', desc: 'IDMB writes only to a tenant-scoped, IAM-isolated location.' },
    { title: 'Stream events',      desc: 'Every ledger and wallet event lands within seconds.' },
    { title: 'Build on top',       desc: 'Pre-modelled views, dbt packages and ready-to-query SQL.' },
  ],

  quote: {
    quote:
      'We replaced a homegrown Kafka-to-Snowflake pipeline with the IDMB lake in a weekend. The data we get is more useful and more trustworthy than what we had built in-house.',
    name: 'Priya Subramanian',
    role: 'Head of Credit',
    company: 'Mosaic',
    storyHref: PATHS.customerMosaic,
  },

  pricing: {
    headline: 'Per-event egress, with a free tier',
    detail: 'Customer 360 views and replay are bundled into the platform fee.',
    href: PATHS.pricingData,
  },

  relatedHeading: 'Related modules',
  related: [
    { title: 'Real-time analytics',  desc: 'Sub-second dashboards on the same event stream.', href: PATHS.dataRealTime,  icon: IconAnalytics },
    { title: 'Regulatory reporting', desc: 'Statutory returns from the same source of truth.', href: PATHS.dataReporting, icon: IconAIProductivity },
    { title: 'Core banking & ledger', desc: 'The source of truth the lake reads from.',         href: PATHS.bankingCore,    icon: IconHybridInfra },
  ],

  cta: {
    heading: 'Get every ledger event in your warehouse',
    subheading: 'Connect a sandbox to your warehouse in minutes, or talk to our data team about a custom integration.',
    primary:   { label: 'Read the data docs',  href: PATHS.developersDocs },
    secondary: { label: 'Talk to the data team', href: mailto('sales', 'IDMB Data lake enquiry') },
  },
};
