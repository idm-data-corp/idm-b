import {
  IconDataMgmt,
  IconAnalytics,
  IconAIProductivity,
  IconSecurity,
  IconAIModels,
  IconConsulting,
  IconHybridInfra,
} from '../../components/icons';
import type { PillarContent } from '../../app/pages/_shared/PillarOverview';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

function DataHeroVisual() {
  return (
    <svg viewBox="0 0 600 460" preserveAspectRatio="xMidYMid slice" role="img" aria-label="">
      <defs>
        <linearGradient id="dt-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#edf5ff" />
          <stop offset="1" stopColor="#dbeafe" />
        </linearGradient>
        <linearGradient id="dt-card" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0043ce" />
          <stop offset="1" stopColor="#0f62fe" />
        </linearGradient>
      </defs>

      <rect width="600" height="460" fill="url(#dt-bg)" />

      {/* Dashboard card */}
      <g transform="translate(60,70)">
        <rect width="480" height="320" rx="10" fill="#fff" stroke="#a6c8ff" />
        <rect width="480" height="40" rx="10" fill="url(#dt-card)" />
        <text x="20" y="26" fontFamily="'IBM Plex Sans',sans-serif" fontWeight="700" fontSize="14" fill="#fff">IDMB Data - Risk dashboard</text>

        {/* KPI tiles */}
        <g transform="translate(20,60)">
          {[
            ['Approval rate', '+38%'],
            ['Decision time', '< 4 min'],
            ['False positives', '−31%'],
          ].map(([label, value], i) => (
            <g key={String(label)} transform={`translate(${i * 150},0)`}>
              <rect width="135" height="60" rx="4" fill="#dbeafe" />
              <text x="14" y="22" fontFamily="'IBM Plex Sans',sans-serif" fontSize="10" fill="#525252">{label}</text>
              <text x="14" y="46" fontFamily="'IBM Plex Sans',sans-serif" fontWeight="700" fontSize="20" fill="#0043ce">{value}</text>
            </g>
          ))}
        </g>

        {/* Bar chart */}
        <g transform="translate(20,150)" fill="#0f62fe">
          <text fontFamily="'IBM Plex Sans',sans-serif" fontSize="10" fill="#525252">Approvals by corridor</text>
          {[36, 50, 26, 64, 44, 78, 58, 90].map((h, i) => (
            <rect key={i} x={i * 26} y={120 - h} width="18" height={h} rx="2" opacity={0.55 + i * 0.05} />
          ))}
        </g>

        {/* Trend line */}
        <g transform="translate(260,170)" fill="none" stroke="#0043ce" strokeWidth="2">
          <text x="0" y="-10" fontFamily="'IBM Plex Sans',sans-serif" fontSize="10" fill="#525252">Risk score (24h)</text>
          <path d="M0 80 L 30 65 L 60 70 L 95 48 L 135 52 L 175 34 L 200 40" />
          <circle cx="200" cy="40" r="4" fill="#0043ce" />
        </g>
      </g>

      <g stroke="#0f62fe" strokeOpacity=".06">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1={i * 50} y1="0" x2={i * 50} y2="460" />
        ))}
      </g>
    </svg>
  );
}

export const dataOverview: PillarContent = {
  heroEyebrow: 'IDMB Data',
  heroTitle: (
    <>
      Real-time analytics on<br />the money you move
    </>
  ),
  heroLede:
    'Every ledger event, every wallet transfer, every authorisation - streamed into your warehouse and your dashboards in under a second. Risk, fraud, compliance and growth, decided on the same source of truth that runs your products.',
  heroPrimaryCTA: { label: 'Explore the data platform', href: PATHS.developersDocs },
  heroSecondaryCTA: { label: 'Talk to our data team', href: mailto('sales', 'IDMB Data enquiry') },
  heroVisual: DataHeroVisual,
  heroVariant: 'split',
  heroTone: 'tinted',
  subProductsVariant: 'horizontal',
  statsVariant: 'rail',
  statsBg: 'dark',
  capabilitiesVariant: 'cards',
  capabilitiesBg: 'alt',

  subProductsEyebrow: 'Modules',
  subProductsHeading: 'Stream-native analytics for financial workloads',
  subProductsIntro:
    'IDMB Data is built on the same ledger that runs the platform - so the numbers in the dashboard match the numbers on the regulator return.',
  subProducts: [
    { title: 'Data lake & warehouse', desc: 'Stream every ledger event into Snowflake, BigQuery or your own warehouse with strong schemas.', href: PATHS.dataLake,      icon: IconDataMgmt },
    { title: 'Real-time analytics',   desc: 'Sub-second dashboards over live ledger and wallet activity with role-aware access.',             href: PATHS.dataRealTime,  icon: IconAnalytics },
    { title: 'Risk & fraud signals',  desc: 'Real-time risk scores, behavioural fraud signals and case management baked in.',                  href: PATHS.dataRisk,      icon: IconSecurity },
    { title: 'Regulatory reporting',  desc: 'Pre-built returns for the regulators IDMB customers file with - refreshed in lockstep.',          href: PATHS.dataReporting, icon: IconAIProductivity },
  ],

  statsEyebrow: 'Production numbers',
  statsHeading: 'Decisions, not dashboards',
  statsIntro:
    'A snapshot from IDMB Data across customers in production today.',
  statsPlaceholder: true,
  quotePlaceholder: true,
  stats: [
    { value: '+38%',    label: 'lift in approval rates after switching to IDMB cashflow analytics' },
    { value: '−31%',    label: 'reduction in fraud false positives across IDMB customer portfolios in 2025' },
    { value: '< 1s',    label: 'p95 query latency on the operator console over live ledger data' },
    { value: '47 / 47', label: 'corridors covered by pre-built regulatory reports out of the box' },
  ],

  quote: {
    quote:
      'IDMB Data lets us underwrite a borrower in under four minutes and lift our approval rate by nearly forty percent - using cashflow signals we never had access to before.',
    name: 'Priya Subramanian',
    role: 'Head of Credit',
    company: 'Mosaic',
    storyHref: PATHS.customerMosaic,
  },

  capabilitiesHeading: 'Built for the teams that operate money',
  capabilities: [
    { title: 'One source of truth', desc: 'The dashboard, the warehouse and the regulator return all read from the same ledger.', href: PATHS.dataLake,        icon: IconConsulting },
    { title: 'Sub-second',          desc: 'Stream-native, not batch. Risk scores attach to events before authorisation completes.', href: PATHS.dataRealTime,  icon: IconHybridInfra },
    { title: 'Audit-grade',         desc: 'Tamper-evident, time-stamped exports for any ledger slice, retained per regulatory policy.', href: PATHS.dataReporting, icon: IconAIModels },
  ],

  cta: {
    heading: 'Turn every transaction into a decision',
    subheading:
      'Connect IDMB Data to your warehouse in minutes, or talk to our team about a custom analytics engagement.',
    primary:   { label: 'Read the docs',          href: PATHS.developersDocs },
    secondary: { label: 'Talk to the data team',  href: mailto('sales', 'IDMB Data enquiry') },
  },
};
