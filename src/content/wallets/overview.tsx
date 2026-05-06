import {
  IconIntegration,
  IconAIModels,
  IconAIProductivity,
  IconSecurity,
  IconHybridInfra,
  IconConsulting,
  IconDataMgmt,
} from '../../components/icons';
import type { PillarContent } from '../../app/pages/_shared/PillarOverview';
import { PATHS } from '../../lib/routes';
import { mailto } from '../../lib/site';

function WalletsHeroVisual() {
  return (
    <svg viewBox="0 0 600 460" preserveAspectRatio="xMidYMid slice" role="img" aria-label="">
      <defs>
        <linearGradient id="wl-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#edf5ff" />
          <stop offset="1" stopColor="#dbeafe" />
        </linearGradient>
        <linearGradient id="wl-card" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0f62fe" />
          <stop offset="1" stopColor="#82cfff" />
        </linearGradient>
      </defs>

      <rect width="600" height="460" fill="url(#wl-bg)" />

      {/* Three wallet cards stacked on a phone frame */}
      <g transform="translate(180,60)">
        <rect width="240" height="380" rx="28" fill="#0a3a8a" />
        <rect x="6" y="6" width="228" height="368" rx="22" fill="#fff" />

        {/* Top: balance + currency switcher */}
        <g transform="translate(20,30)">
          <text fontFamily="'IBM Plex Sans',sans-serif" fontSize="11" fill="#525252">Available balance</text>
          <text y="32" fontFamily="'IBM Plex Sans',sans-serif" fontSize="28" fontWeight="600" fill="#0f172a">USD 12,840.55</text>
          <g transform="translate(0,52)" fill="#0f62fe">
            <rect width="48" height="20" rx="10" />
            <text x="24" y="14" textAnchor="middle" fontFamily="'IBM Plex Sans',sans-serif" fontWeight="600" fontSize="10" fill="#fff">USD</text>
            <rect x="56" width="48" height="20" rx="10" fill="#dbeafe" />
            <text x="80" y="14" textAnchor="middle" fontFamily="'IBM Plex Sans',sans-serif" fontWeight="600" fontSize="10" fill="#0f62fe">EUR</text>
            <rect x="112" width="48" height="20" rx="10" fill="#dbeafe" />
            <text x="136" y="14" textAnchor="middle" fontFamily="'IBM Plex Sans',sans-serif" fontWeight="600" fontSize="10" fill="#0f62fe">GBP</text>
          </g>
        </g>

        {/* Card */}
        <g transform="translate(20,140)">
          <rect width="200" height="120" rx="12" fill="url(#wl-card)" />
          <rect x="16" y="20" width="32" height="22" rx="4" fill="#fff" opacity=".4" />
          <rect x="16" y="76" width="80" height="6" rx="2" fill="#fff" opacity=".85" />
          <rect x="16" y="88" width="60" height="6" rx="2" fill="#fff" opacity=".55" />
          <text x="184" y="42" textAnchor="end" fontFamily="'IBM Plex Sans',sans-serif" fontWeight="700" fontSize="14" fill="#fff">IDMB</text>
        </g>

        {/* Recent activity */}
        <g transform="translate(20,280)">
          {[
            ['Top-up · MPESA',  '+ 50.00'],
            ['Coffee · Java House', '- 4.20'],
            ['FX  EUR → USD',    '+ 109.42'],
          ].map(([label, amount], i) => (
            <g key={String(label)} transform={`translate(0,${i * 24})`}>
              <text fontFamily="'IBM Plex Sans',sans-serif" fontSize="10" fill="#525252">{label}</text>
              <text x="200" textAnchor="end" fontFamily="'IBM Plex Sans',sans-serif" fontWeight="600" fontSize="10" fill="#0f172a">{amount}</text>
            </g>
          ))}
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

export const walletsOverview: PillarContent = {
  heroEyebrow: 'IDMB Wallets',
  heroTitle: (
    <>
      Programmable wallets,<br />at consumer scale
    </>
  ),
  heroLede:
    'Spin up multi-currency, multi-tenant wallets in one API call. Move funds in under 200ms, attach cards, push payouts, and run cross-border corridors on a single regulated ledger.',
  heroPrimaryCTA: { label: 'Open a wallets sandbox', href: PATHS.developersSandbox },
  heroSecondaryCTA: { label: 'Talk to our wallets team', href: mailto('sales', 'IDMB Wallets enquiry') },
  heroVisual: WalletsHeroVisual,
  heroVariant: 'visual-left',
  heroTone: 'tinted',
  subProductsVariant: 'numbered',
  statsVariant: 'inline',
  statsBg: 'default',
  capabilitiesVariant: 'minimal',
  capabilitiesBg: 'alt',

  subProductsEyebrow: 'Modules',
  subProductsHeading: 'A complete wallet platform',
  subProductsIntro:
    'Stored value, instant transfers, card linking and cross-border - all on one ledger, with one set of compliance controls and one observability surface.',
  subProducts: [
    { title: 'Stored-value accounts', desc: 'Open programmable wallets in any supported currency, with full lifecycle and limit controls.', href: PATHS.walletsStored,      icon: IconHybridInfra },
    { title: 'Card-linked wallets',   desc: 'Attach issued cards to wallets and push tokens to Apple Pay, Google Pay and Samsung Wallet.',  href: PATHS.walletsCardLinked,  icon: IconAIModels },
    { title: 'Merchant & B2B wallets', desc: 'Marketplace payouts, treasury wallets, escrow and loyalty balances on the same ledger.',     href: PATHS.walletsMerchant,    icon: IconIntegration },
    { title: 'Cross-border wallets',  desc: 'Live in 47 corridors with always-on screening, in-wallet FX and reconciliation built in.',     href: PATHS.walletsCrossBorder, icon: IconAIProductivity },
  ],

  statsEyebrow: 'In production',
  statsHeading: 'Wallets that move at scale',
  statsIntro:
    'A snapshot of IDMB Wallets activity across customers in production today.',
  stats: [
    { value: '9.4M',    label: 'wallets activated on IDMB across consumer and B2B platforms' },
    { value: '180ms',   label: 'median wallet-to-wallet transfer time on the IDMB network' },
    { value: '47',      label: 'live cross-border corridors across Africa, MENA and APAC' },
    { value: '40+',     label: 'currencies supported in-wallet with quoted FX' },
  ],

  quote: {
    quote:
      'IDMB Wallets gave us multi-currency balances, instant transfers and tap-to-pay cards in a single integration. We launched a 9-million-user product on infrastructure we did not have to operate.',
    name: 'Daniel Okello',
    role: 'VP Product',
    company: 'Paywave',
    storyHref: PATHS.customerPaywave,
  },

  capabilitiesHeading: 'Why teams build wallets on IDMB',
  capabilities: [
    { title: 'One ledger',     desc: 'Wallets, cards, payouts and FX share a single source of truth - no reconciliation between rails.', href: PATHS.wallets,        icon: IconConsulting },
    { title: 'Compliance pre-wired', desc: 'KYC, sanctions, travel rule and beneficial-ownership checks attached to every wallet event.', href: PATHS.bankingCompliance, icon: IconSecurity },
    { title: 'Real-time visibility', desc: 'Operator console and streaming dashboards over every wallet, transfer and corridor.',           href: PATHS.dataRealTime,   icon: IconDataMgmt },
  ],

  cta: {
    heading: 'Embed wallets in days, not quarters',
    subheading:
      'Open a sandbox and issue your first wallet in minutes, or speak to our team about a regulated rollout.',
    primary:   { label: 'Open the sandbox',     href: PATHS.developersSandbox },
    secondary: { label: 'Talk to wallets team', href: mailto('sales', 'IDMB Wallets enquiry') },
  },
};
