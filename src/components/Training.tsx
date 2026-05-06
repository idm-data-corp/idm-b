import { ArrowRight, ArrowUpRight } from './icons';
import './Training.css';

const ITEMS = [
  {
    title: 'Developer certifications',
    body: 'Hands-on courses for engineers building on IDMB APIs - from your first ledger entry to production-grade payment flows.',
    cta: 'Get IDMB certified',
    external: false,
    href: 'mailto:training@idmb.com?subject=Developer%20certification',
    bg: '#dde2e6',
    photo: 'pro',
  },
  {
    title: 'Bank operator academy',
    body: 'Train your operations, compliance and risk teams on running a real-time bank or wallet on the IDMB platform.',
    cta: 'Enrol your team',
    external: true,
    href: 'mailto:training@idmb.com?subject=Operator%20academy',
    bg: '#d6efde',
    photo: 'foundational',
  },
  {
    title: 'Data & analytics tracks',
    body: 'Learn to model, monitor and decision on live financial data with IDMB Data - risk, fraud, growth and regulatory reporting.',
    cta: 'Start a data track',
    external: true,
    href: 'mailto:training@idmb.com?subject=Data%20%26%20analytics%20track',
    bg: '#cfe7f8',
    photo: 'students',
  },
] as const;

export default function Training() {
  return (
    <section id="training" className="tr" aria-labelledby="tr-h">
      <div className="container tr-grid">
        <div className="tr-heading">
          <h2 id="tr-h" className="tr-h">
            Training for<br />money builders
          </h2>
        </div>
        <ul className="tr-cards">
          {ITEMS.map((it) => (
            <li key={it.title} className="tr-card">
              <div className="tr-photo" style={{ background: it.bg }} aria-hidden>
                <PhotoArt kind={it.photo} bg={it.bg} />
              </div>
              <div className="tr-body">
                <h3 className="tr-title">{it.title}</h3>
                <p className="tr-text">{it.body}</p>
                <a className="arrow-link" href={it.href}>
                  {it.cta}
                  {it.external ? <ArrowUpRight size={16} /> : <ArrowRight size={16} />}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PhotoArt({ kind, bg }: { kind: 'pro' | 'foundational' | 'students'; bg: string }) {
  return (
    <svg viewBox="0 0 320 220" className="tr-art" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="220" fill={bg} />
      <g stroke="#7a8d99" strokeWidth="1" fill="none" opacity=".55">
        {kind === 'pro' && (
          <>
            <rect x="20" y="24" width="50" height="32" rx="2" />
            <path d="M28 36h22M28 44h16" />
            <circle cx="280" cy="160" r="20" />
            <path d="M260 160h40M280 140v40" />
          </>
        )}
        {kind === 'foundational' && (
          <>
            <circle cx="36" cy="40" r="14" />
            <path d="M22 40h28M36 26v28" />
            <rect x="240" y="160" width="60" height="40" rx="2" />
            <path d="M250 174h40M250 184h30" />
          </>
        )}
        {kind === 'students' && (
          <>
            <circle cx="34" cy="36" r="12" />
            <rect x="22" y="60" width="36" height="22" rx="2" />
            <rect x="240" y="160" width="60" height="40" rx="2" />
            <path d="M250 178h40" />
          </>
        )}
      </g>
      <g>
        <circle cx="160" cy="115" r="78" fill={kind === 'pro' ? '#3d4d57' : kind === 'foundational' ? '#365446' : '#345b76'} />
        <circle cx="160" cy="115" r="78" fill="none" stroke="#fff" strokeWidth="1" opacity=".15" />
        {kind === 'pro' && (
          <g fill="#cfd6db">
            <circle cx="135" cy="98" r="12" />
            <path d="M115 142 c 4 -16 16 -22 28 -22 c 6 0 10 1 12 3" />
            <circle cx="180" cy="100" r="11" />
            <path d="M158 144 c 4 -14 14 -20 26 -20 c 8 0 12 2 14 4" />
          </g>
        )}
        {kind === 'foundational' && (
          <g fill="#cfe2d2">
            <circle cx="160" cy="100" r="14" />
            <path d="M132 154 c 6 -20 16 -28 28 -28 s 22 8 28 28" />
          </g>
        )}
        {kind === 'students' && (
          <g fill="#cad8e5">
            <circle cx="135" cy="98" r="12" />
            <circle cx="180" cy="98" r="12" />
            <path d="M115 152 c 6 -18 14 -24 22 -24 M158 152 c 6 -18 14 -24 22 -24" />
            <rect x="148" y="116" width="40" height="22" rx="2" fill="#a0b7d0" />
          </g>
        )}
      </g>
    </svg>
  );
}
