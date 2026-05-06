import { ArrowRight } from './icons';
import './Recommended.css';

const ITEMS = [
  {
    kind: 'Product',
    title: 'Banking-as-a-Service: launch ledger, cards and payments in weeks, not years',
    href: '#banking',
    palette: ['#a6c8ff', '#0f62fe', '#82cfff'],
  },
  {
    kind: 'Product',
    title: 'Wallets API: spin up multi-currency wallets, FX and instant transfers in one call',
    href: '#wallets',
    palette: ['#82cfff', '#0043ce', '#a6c8ff'],
  },
  {
    kind: 'Insight',
    title: 'Turn raw transaction data into real-time risk, fraud and growth signals',
    href: '#data',
    palette: ['#d0e2ff', '#4589ff', '#0f62fe'],
  },
  {
    kind: 'Guide',
    title: 'Download the 2026 Embedded Finance Buyer\'s Guide for fintech teams',
    href: '#newsletter',
    palette: ['#a6c8ff', '#82cfff', '#0f62fe'],
  },
];

export default function Recommended() {
  return (
    <section id="recommended" className="rec" aria-labelledby="rec-h">
      <div className="container">
        <h2 id="rec-h" className="rec-h">Recommended for you</h2>
        <ul className="rec-grid">
          {ITEMS.map((it) => (
            <li key={it.title}>
              <a className="rec-card" href={it.href}>
                <div className="rec-card-body">
                  <DotArt palette={it.palette} />
                  <div className="rec-card-text">
                    <span className="rec-card-kind">{it.kind}</span>
                    <p className="rec-card-title">{it.title}</p>
                  </div>
                </div>
                <span className="rec-card-arrow"><ArrowRight /></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function DotArt({ palette }: { palette: string[] }) {
  return (
    <svg viewBox="0 0 60 60" width="60" height="60" aria-hidden className="rec-card-art">
      <g style={{ mixBlendMode: 'multiply' }}>
        <circle cx="22" cy="30" r="18" fill={palette[0]} opacity=".75" />
        <circle cx="36" cy="22" r="16" fill={palette[1]} opacity=".75" />
        <circle cx="34" cy="36" r="14" fill={palette[2]} opacity=".75" />
      </g>
    </svg>
  );
}
