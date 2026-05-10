import { useState, type ReactElement } from 'react';
import { ArrowRight } from './icons';
import './SmarterBusiness.css';

type TabKey = 'Northbank' | 'Paywave' | 'Mosaic' | 'Vela';

const TABS: { key: TabKey; logo: ReactElement }[] = [
  { key: 'Northbank', logo: <LogoNorthbank /> },
  { key: 'Paywave', logo: <LogoPaywave /> },
  { key: 'Mosaic', logo: <LogoMosaic /> },
  { key: 'Vela', logo: <LogoVela /> },
];

const STORIES: Record<TabKey, {
  title: string;
  paragraph: string;
  metrics: { value: string; label: string }[];
  cta: string;
}> = {
  Northbank: {
    title: 'Northbank',
    paragraph:
      'Northbank used IDMB\'s core banking and ledger to relaunch its retail offering in eleven months - replacing a legacy mainframe with a real-time API platform, an in-house card programme, and a unified data layer that powers every customer decision.',
    metrics: [
      { value: 'USD 2.1B', label: 'in customer deposits migrated to IDMB without a single outage' },
      { value: '11 mo', label: 'from contract to fully live retail bank on the IDMB stack' },
    ],
    cta: 'Read how Northbank rebuilt its core on IDMB',
  },
  Paywave: {
    title: 'Paywave',
    paragraph:
      'Paywave embedded IDMB Wallets into its super-app to give 9 million users multi-currency balances, instant peer-to-peer transfers and tap-to-pay cards - backed by IDMB\'s licensed wallet infrastructure across three regions.',
    metrics: [
      { value: '9.4M', label: 'wallets activated in the first year on the IDMB platform' },
      { value: '180ms', label: 'median end-to-end transfer time across the wallet network' },
    ],
    cta: 'See how Paywave scaled wallets with IDMB',
  },
  Mosaic: {
    title: 'Mosaic',
    paragraph:
      'Mosaic plugged its lending product into IDMB Data to score borrowers in real time, automate credit decisions and meet regulatory reporting in markets where alternative data was previously off-limits.',
    metrics: [
      { value: '38%', label: 'lift in approval rates with IDMB cashflow analytics' },
      { value: '< 4 min', label: 'from application to underwriting decision, end to end' },
    ],
    cta: 'Read the Mosaic credit case study',
  },
  Vela: {
    title: 'Vela',
    paragraph:
      'Vela, a cross-border remittance operator, runs settlement, FX and compliance on IDMB\'s wallet rails - moving funds between 47 corridors with always-on monitoring, sanctions screening and a single reconciliation feed.',
    metrics: [
      { value: '47', label: 'remittance corridors live on IDMB across Africa, MENA and APAC' },
      { value: '99.99%', label: 'platform availability for cross-border settlement in 2025' },
    ],
    cta: 'Explore the Vela cross-border story',
  },
};

export default function SmarterBusiness() {
  const [tab, setTab] = useState<TabKey>('Northbank');
  const story = STORIES[tab];

  return (
    <section id="customers" className="sb" aria-labelledby="sb-h">
      <div className="container">
        <h2 id="sb-h" className="sb-h">Smarter money. Real results.</h2>

        <div className="sb-tabs" role="tablist" aria-label="Customer stories">
          {TABS.map((t) => (
            <button
              key={t.key}
              role="tab"
              id={`sb-tab-${t.key}`}
              aria-selected={tab === t.key}
              aria-controls={`sb-panel-${t.key}`}
              tabIndex={tab === t.key ? 0 : -1}
              className={`sb-tab ${tab === t.key ? 'is-active' : ''}`}
              onClick={() => setTab(t.key)}
            >
              {t.logo}
            </button>
          ))}
        </div>

        <div
          id={`sb-panel-${tab}`}
          role="tabpanel"
          aria-labelledby={`sb-tab-${tab}`}
          className="sb-panel"
        >
          <div className="sb-text">
            <h3 className="sb-customer">{story.title}</h3>
            <p className="sb-para">{story.paragraph}</p>
            <div className="sb-metrics">
              {story.metrics.map((m) => (
                <div key={m.label} className="sb-metric">
                  <div className="sb-metric-value">{m.value}</div>
                  <div className="sb-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
            <a className="arrow-link sb-cta" href="mailto:sales@idm-b.com?subject=Case%20study%20enquiry">
              {story.cta}
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="sb-art" aria-hidden="true">
            <IsoArt />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- customer logos (illustrative wordmarks for fictional reference clients) --- */
function LogoNorthbank() {
  return (
    <svg viewBox="0 0 130 32" width="120" height="28" aria-hidden>
      <g transform="translate(6,6)">
        <path d="M0 20 L 0 0 L 4 0 L 14 14 L 14 0 L 18 0 L 18 20 L 14 20 L 4 6 L 4 20 Z" fill="#0f62fe" />
      </g>
      <text x="32" y="22" fontFamily="'IBM Plex Sans',sans-serif" fontSize="16" fontWeight="700" fill="#161616">
        Northbank
      </text>
    </svg>
  );
}

function LogoPaywave() {
  return (
    <svg viewBox="0 0 130 32" width="120" height="28" aria-hidden>
      <g transform="translate(6,6)" fill="none" stroke="#0f62fe" strokeWidth="2.4" strokeLinecap="round">
        <path d="M0 16 c 4 -10 8 -10 12 0 s 8 10 12 0" />
      </g>
      <text x="36" y="22" fontFamily="'IBM Plex Sans',sans-serif" fontSize="16" fontWeight="700" fill="#161616">
        paywave
      </text>
    </svg>
  );
}

function LogoMosaic() {
  return (
    <svg viewBox="0 0 130 32" width="120" height="28" aria-hidden>
      <g transform="translate(6,6)" fill="#0f62fe">
        <rect x="0" y="0" width="6" height="6" rx="1" />
        <rect x="8" y="0" width="6" height="6" rx="1" opacity=".7" />
        <rect x="0" y="8" width="6" height="6" rx="1" opacity=".7" />
        <rect x="8" y="8" width="6" height="6" rx="1" />
        <rect x="0" y="16" width="14" height="2" rx="1" opacity=".4" />
      </g>
      <text x="28" y="22" fontFamily="serif" fontStyle="italic" fontSize="18" fontWeight="700" fill="#161616">
        Mosaic
      </text>
    </svg>
  );
}

function LogoVela() {
  return (
    <svg viewBox="0 0 110 32" width="92" height="28" aria-hidden>
      <g transform="translate(6,6)" fill="#0f62fe">
        <polygon points="0,20 12,0 14,0 6,20" />
        <polygon points="14,20 26,0 28,0 20,20" opacity=".6" />
      </g>
      <text x="40" y="22" fontFamily="'IBM Plex Sans',sans-serif" fontSize="18" fontWeight="700" letterSpacing="2" fill="#161616">
        VELA
      </text>
    </svg>
  );
}

/* --- isometric illustration: a "money platform" - bank tower, wallet flag, data tile --- */
function IsoArt() {
  return (
    <svg viewBox="0 0 600 460" preserveAspectRatio="xMidYMid slice" className="iso">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0043ce" />
          <stop offset="1" stopColor="#0f62fe" />
        </linearGradient>
        <linearGradient id="tile-a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#dfe8ff" />
          <stop offset="1" stopColor="#a6c8ff" />
        </linearGradient>
        <linearGradient id="tile-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#edf5ff" />
          <stop offset="1" stopColor="#bcd1ff" />
        </linearGradient>
        <linearGradient id="bank" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#82cfff" />
          <stop offset="1" stopColor="#0f62fe" />
        </linearGradient>
      </defs>

      <rect width="600" height="460" fill="url(#sky)" />

      {/* Distant grid lines suggesting "rails" */}
      <g stroke="#fff" strokeOpacity=".15" strokeWidth="1">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={i} x1="0" y1={40 + i * 14} x2="600" y2={40 + i * 14} />
        ))}
      </g>

      {/* Ground tiles (isometric platform) */}
      <g>
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(${110 + i * 70}, ${360 - i * 32})`}>
            <polygon points="0,30 90,75 180,30 90,-15" fill="url(#tile-a)" stroke="#fff" strokeWidth="1" />
          </g>
        ))}
        <g transform="translate(60,300)">
          <polygon points="0,30 90,75 180,30 90,-15" fill="url(#tile-b)" stroke="#fff" strokeWidth="1" />
        </g>
        <g transform="translate(280,225)">
          <polygon points="0,30 90,75 180,30 90,-15" fill="url(#tile-b)" stroke="#fff" strokeWidth="1" />
        </g>
      </g>

      {/* Banking tower (tall block) */}
      <g transform="translate(220,150)">
        <polygon points="0,160 30,175 30,30 0,15" fill="url(#bank)" />
        <polygon points="30,30 60,15 60,175 30,175" fill="#0043ce" />
        <polygon points="0,15 30,0 60,15 30,30" fill="#d0e2ff" />
        {/* Window grid */}
        <g fill="#fff" opacity=".55">
          <rect x="6"  y="40" width="6" height="6" /><rect x="18" y="40" width="6" height="6" />
          <rect x="6"  y="56" width="6" height="6" /><rect x="18" y="56" width="6" height="6" />
          <rect x="6"  y="72" width="6" height="6" /><rect x="18" y="72" width="6" height="6" />
          <rect x="6"  y="88" width="6" height="6" /><rect x="18" y="88" width="6" height="6" />
          <rect x="6" y="104" width="6" height="6" /><rect x="18" y="104" width="6" height="6" />
        </g>
        <g fill="#fff" opacity=".35">
          <rect x="36" y="40" width="6" height="6" /><rect x="48" y="40" width="6" height="6" />
          <rect x="36" y="56" width="6" height="6" /><rect x="48" y="56" width="6" height="6" />
          <rect x="36" y="72" width="6" height="6" /><rect x="48" y="72" width="6" height="6" />
          <rect x="36" y="88" width="6" height="6" /><rect x="48" y="88" width="6" height="6" />
          <rect x="36" y="104" width="6" height="6" /><rect x="48" y="104" width="6" height="6" />
        </g>
        {/* Bank pillar columns at top */}
        <g fill="#fff" opacity=".85">
          <rect x="6"  y="22" width="2" height="10" />
          <rect x="14" y="22" width="2" height="10" />
          <rect x="22" y="22" width="2" height="10" />
        </g>
      </g>

      {/* Wallet card / flag */}
      <g transform="translate(360,250)">
        <polygon points="0,0 36,-16 36,16 0,32" fill="#82cfff" />
        <polygon points="0,0 36,-16 36,-12 0,4" fill="#fff" opacity=".6" />
        <rect x="6" y="10" width="14" height="3" fill="#0043ce" opacity=".7" />
        <rect x="6" y="16" width="22" height="2" fill="#0043ce" opacity=".5" />
      </g>

      {/* Data ribbon - flowing transaction line */}
      <g fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
        <path d="M150 320 C 200 280, 260 360, 320 320 S 460 260, 520 300" />
      </g>
      <g fill="#fff">
        <circle cx="150" cy="320" r="4" />
        <circle cx="320" cy="320" r="4" />
        <circle cx="520" cy="300" r="4" />
      </g>

      {/* Connector arrow between bank and wallet */}
      <g fill="#82cfff">
        <polygon points="180,290 220,310 180,330" />
      </g>
    </svg>
  );
}
