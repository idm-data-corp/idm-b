import { useState } from 'react';
import { ArrowRight } from './icons';
import './Hero.css';

type NewsItem = { title: string; href: string };

const NEWS_PAGES: NewsItem[][] = [
  [
    { title: 'IDMB POSTS RECORD Q1 PROCESSING VOLUMES ACROSS THREE CONTINENTS', href: '#customers' },
    { title: 'IDMB launches Wallet-as-a-Service for licensed money operators in EMEA', href: '#wallets' },
  ],
  [
    { title: 'IDMB DATA: NEW FRAUD MODELS CUT FALSE POSITIVES BY 31% IN PRODUCTION', href: '#data' },
    { title: 'IDMB and Northbank go live with real-time card issuing in five markets', href: '#customers' },
  ],
  [
    { title: 'IDMB CONNECT 2026: PROGRAMME, SPEAKERS AND EARLY-BIRD REGISTRATION OPEN', href: '#events' },
    { title: 'IDMB partners with regional regulator on the open-banking sandbox programme', href: '#banking' },
  ],
  [
    { title: 'IDMB CERTIFIES SOC 2 TYPE II FOR THE FOURTH CONSECUTIVE YEAR', href: '#platform' },
    { title: 'IDMB Wallets crosses 10M activated users across Africa and APAC corridors', href: '#wallets' },
  ],
];

export default function Hero() {
  const [page, setPage] = useState(1);
  const news = NEWS_PAGES[page - 1] ?? NEWS_PAGES[0];
  return (
    <section id="overview" className="hero" aria-labelledby="hero-h">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-h" className="hero-title">
            Banking, wallets,<br />intelligent by data
          </h1>
          <p className="hero-lede">
            IDMB is the infrastructure layer behind modern money. Issue accounts and cards, run real-time wallets,
            and turn every transaction into a decision with built-in analytics - all on one regulated platform.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#platform">
              <span>Start building on IDMB</span>
              <ArrowRight />
            </a>
            <a className="btn btn-tertiary" href="mailto:sales@idmb.com">
              <span>Talk to our banking team</span>
              <ArrowRight />
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <OrchestratedArt />
        </div>

        <aside className="hero-news" aria-label="Latest news">
          <h2 className="hero-news-title">Latest News</h2>
          <ul>
            {news.map((n) => (
              <li key={n.title}>
                <a href={n.href} className="hero-news-item">
                  <span>{n.title}</span>
                  <ArrowRight size={20} />
                </a>
              </li>
            ))}
          </ul>
          <ol className="hero-news-pager" aria-label="Pages">
            {[1, 2, 3, 4].map((p) => (
              <li key={p} className={p === page ? 'is-active' : ''}>
                <button
                  type="button"
                  aria-label={`News page ${p}`}
                  aria-current={p === page ? 'page' : undefined}
                  onClick={() => setPage(p)}
                >
                  {p}
                </button>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}

/* Hero visual - abstracted "money rails" stack with a data pulse.
   Uses the same Carbon blue family as the rest of the site. */
function OrchestratedArt() {
  return (
    <svg viewBox="0 0 600 460" className="orch" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="g-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#edf5ff" />
          <stop offset="1" stopColor="#dbeafe" />
        </linearGradient>
        <linearGradient id="g-card-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0043ce" />
          <stop offset="1" stopColor="#0f62fe" />
        </linearGradient>
        <linearGradient id="g-card-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0f62fe" />
          <stop offset="1" stopColor="#4589ff" />
        </linearGradient>
        <linearGradient id="g-card-c" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a6c8ff" />
          <stop offset="1" stopColor="#d0e2ff" />
        </linearGradient>
        <linearGradient id="g-pulse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#82cfff" stopOpacity="0" />
          <stop offset=".5" stopColor="#82cfff" stopOpacity="1" />
          <stop offset="1" stopColor="#82cfff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="600" height="460" fill="url(#g-bg)" />

      {/* Three stacked product layers - Banking, Wallets, Data */}
      <g transform="translate(80,90)">
        {/* Banking rail (back) */}
        <g transform="translate(60,0)">
          <rect width="380" height="86" rx="8" fill="url(#g-card-a)" />
          <rect x="20" y="20" width="60" height="10" rx="2" fill="#fff" opacity=".85" />
          <rect x="20" y="36" width="160" height="6" rx="2" fill="#fff" opacity=".55" />
          <rect x="20" y="48" width="120" height="6" rx="2" fill="#fff" opacity=".45" />
          <g transform="translate(300,22)">
            <rect width="60" height="40" rx="4" fill="#fff" opacity=".18" />
            <rect x="6" y="10" width="22" height="4" rx="2" fill="#fff" opacity=".7" />
            <circle cx="42" cy="22" r="8" fill="#fff" opacity=".35" />
          </g>
        </g>

        {/* Wallets rail (mid) */}
        <g transform="translate(30,110)">
          <rect width="440" height="86" rx="8" fill="url(#g-card-b)" />
          <rect x="20" y="20" width="80" height="10" rx="2" fill="#fff" opacity=".9" />
          <rect x="20" y="36" width="200" height="6" rx="2" fill="#fff" opacity=".55" />
          <rect x="20" y="48" width="140" height="6" rx="2" fill="#fff" opacity=".45" />
          {/* Coin / wallet icon */}
          <g transform="translate(360,22)">
            <circle cx="20" cy="20" r="20" fill="#fff" opacity=".22" />
            <circle cx="20" cy="20" r="12" fill="#fff" opacity=".55" />
            <text x="20" y="25" textAnchor="middle" fontFamily="'IBM Plex Sans', sans-serif" fontWeight="700" fontSize="14" fill="#0043ce">$</text>
          </g>
        </g>

        {/* Data layer (front) - analytics chart */}
        <g transform="translate(0,220)">
          <rect width="440" height="120" rx="8" fill="url(#g-card-c)" stroke="#0f62fe" strokeOpacity=".2" />
          <rect x="20" y="18" width="120" height="10" rx="2" fill="#0043ce" opacity=".8" />
          <rect x="20" y="34" width="180" height="6" rx="2" fill="#0043ce" opacity=".4" />

          {/* Bar chart */}
          <g transform="translate(20,58)" fill="#0f62fe">
            <rect x="0"   y="30" width="14" height="30" rx="2" opacity=".55" />
            <rect x="22"  y="20" width="14" height="40" rx="2" opacity=".7" />
            <rect x="44"  y="8"  width="14" height="52" rx="2" />
            <rect x="66"  y="22" width="14" height="38" rx="2" opacity=".7" />
            <rect x="88"  y="14" width="14" height="46" rx="2" opacity=".85" />
            <rect x="110" y="0"  width="14" height="60" rx="2" />
          </g>

          {/* Trend line */}
          <g transform="translate(160,58)" fill="none" stroke="#0043ce" strokeWidth="2">
            <path d="M0 50 L 30 35 L 60 40 L 95 18 L 135 22 L 175 4 L 220 12 L 260 0" />
            <circle cx="260" cy="0" r="4" fill="#0043ce" />
          </g>
        </g>

        {/* Connecting "rails" - vertical hops between layers */}
        <g stroke="#0f62fe" strokeWidth="1.4" strokeDasharray="3 4" opacity=".55" fill="none">
          <path d="M120 86 L 120 110" />
          <path d="M260 86 L 260 110" />
          <path d="M120 196 L 120 220" />
          <path d="M260 196 L 260 220" />
          <path d="M380 196 L 380 220" />
        </g>

        {/* Data pulse moving across the bottom */}
        <rect x="0" y="338" width="440" height="2" fill="url(#g-pulse)" />
      </g>

      {/* Subtle grid */}
      <g stroke="#0f62fe" strokeOpacity=".06" strokeWidth="1">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1={i * 50} y1="0" x2={i * 50} y2="460" />
        ))}
      </g>
    </svg>
  );
}
