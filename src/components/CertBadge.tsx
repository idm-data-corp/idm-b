/* Stylised in-house compliance badges. These are not the trademark seals of
   the certifying bodies — we render our own marks in a unified visual
   language so the trust centre stays cohesive. The auditor name is in the
   adjacent caption and on the Compliance page table. */

type Kind =
  | 'iso27001'
  | 'iso27701'
  | 'soc2'
  | 'pcidss'
  | 'gdpr'
  | 'ukdpa';

type Props = {
  kind: Kind;
  size?: number;
  title?: string;
};

export default function CertBadge({ kind, size = 88, title }: Props) {
  switch (kind) {
    case 'iso27001':
      return <IsoSeal size={size} top="ISO 27001" mid="27001" bot="INFORMATION SECURITY" title={title ?? 'ISO/IEC 27001'} />;
    case 'iso27701':
      return <IsoSeal size={size} top="ISO 27701" mid="27701" bot="PRIVACY INFO MGMT" title={title ?? 'ISO/IEC 27701'} />;
    case 'soc2':
      return <SocShield size={size} title={title ?? 'SOC 2 Type II'} />;
    case 'pcidss':
      return <PciHex size={size} title={title ?? 'PCI DSS Level 1'} />;
    case 'gdpr':
      return <GdprBlock size={size} title={title ?? 'GDPR'} />;
    case 'ukdpa':
      return <UkDpaBlock size={size} title={title ?? 'UK Data Protection Act 2018'} />;
  }
}

const baseSvg = (size: number, vb = '0 0 96 96', title?: string) => ({
  width: size,
  height: size,
  viewBox: vb,
  xmlns: 'http://www.w3.org/2000/svg',
  role: 'img' as const,
  'aria-label': title,
});

/* ── ISO seal: dual ring, arc text top + bottom, big number centre ─────── */
function IsoSeal({ size, top, mid, bot, title }: { size: number; top: string; mid: string; bot: string; title: string }) {
  const id = `arc-${mid}`;
  const idBot = `arc-bot-${mid}`;
  return (
    <svg {...baseSvg(size, '0 0 96 96', title)}>
      <defs>
        <path id={id} d="M 14 48 A 34 34 0 0 1 82 48" fill="none" />
        <path id={idBot} d="M 18 50 A 30 30 0 0 0 78 50" fill="none" />
      </defs>
      <circle cx="48" cy="48" r="44" fill="#f4f7ff" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="48" cy="48" r="38" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.55" />
      <text fontSize="7" fontWeight="700" letterSpacing="2" fill="currentColor">
        <textPath href={`#${id}`} startOffset="50%" textAnchor="middle">{top}</textPath>
      </text>
      <text fontSize="5" fontWeight="600" letterSpacing="1.5" fill="currentColor" opacity="0.75">
        <textPath href={`#${idBot}`} startOffset="50%" textAnchor="middle">{bot}</textPath>
      </text>
      <line x1="22" y1="56" x2="74" y2="56" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <text x="48" y="50" fontSize="14" fontWeight="700" textAnchor="middle" fill="currentColor" letterSpacing="0.5">{mid}</text>
      <text x="48" y="68" fontSize="6" fontWeight="600" textAnchor="middle" fill="currentColor" letterSpacing="2">CERTIFIED</text>
    </svg>
  );
}

/* ── SOC 2 shield with checkmark ──────────────────────────────────────── */
function SocShield({ size, title }: { size: number; title: string }) {
  return (
    <svg {...baseSvg(size, '0 0 96 96', title)}>
      <path
        d="M48 6 L84 18 V48 C84 68 68 84 48 90 C28 84 12 68 12 48 V18 Z"
        fill="#f4f7ff"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M48 12 L78 22 V48 C78 64 65 77 48 82 C31 77 18 64 18 48 V22 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.45"
      />
      <text x="48" y="42" fontSize="14" fontWeight="700" textAnchor="middle" fill="currentColor">SOC 2</text>
      <line x1="28" y1="48" x2="68" y2="48" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <text x="48" y="60" fontSize="7" fontWeight="600" textAnchor="middle" fill="currentColor" letterSpacing="2">TYPE II</text>
      <path d="M40 70 L46 76 L58 64" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── PCI DSS hexagonal seal ───────────────────────────────────────────── */
function PciHex({ size, title }: { size: number; title: string }) {
  return (
    <svg {...baseSvg(size, '0 0 96 96', title)}>
      <polygon
        points="48,6 84,26 84,70 48,90 12,70 12,26"
        fill="#f4f7ff"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <polygon
        points="48,14 77,30 77,66 48,82 19,66 19,30"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.45"
      />
      <text x="48" y="42" fontSize="15" fontWeight="700" textAnchor="middle" fill="currentColor" letterSpacing="1">PCI</text>
      <line x1="28" y1="48" x2="68" y2="48" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <text x="48" y="60" fontSize="9" fontWeight="700" textAnchor="middle" fill="currentColor">DSS</text>
      <text x="48" y="72" fontSize="6" fontWeight="600" textAnchor="middle" fill="currentColor" letterSpacing="2">LEVEL 1</text>
    </svg>
  );
}

/* ── GDPR badge with EU stars motif ───────────────────────────────────── */
function GdprBlock({ size, title }: { size: number; title: string }) {
  return (
    <svg {...baseSvg(size, '0 0 96 96', title)}>
      <rect x="6" y="6" width="84" height="84" rx="6" fill="#f4f7ff" stroke="currentColor" strokeWidth="1.25" />
      <rect x="10" y="10" width="76" height="76" rx="3" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.45" />
      {/* arc of 5 stars */}
      {Array.from({ length: 5 }).map((_, i) => {
        const a = (-90 + (i - 2) * 16) * (Math.PI / 180);
        const cx = 48 + Math.cos(a) * 22;
        const cy = 38 + Math.sin(a) * 22;
        return <Star key={i} cx={cx} cy={cy} r={2.6} />;
      })}
      <line x1="20" y1="52" x2="76" y2="52" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <text x="48" y="68" fontSize="14" fontWeight="700" textAnchor="middle" fill="currentColor" letterSpacing="2">GDPR</text>
      <text x="48" y="80" fontSize="5.5" fontWeight="600" textAnchor="middle" fill="currentColor" letterSpacing="1.5" opacity="0.75">EU 2016/679</text>
    </svg>
  );
}

/* ── UK DPA badge ──────────────────────────────────────────────────────── */
function UkDpaBlock({ size, title }: { size: number; title: string }) {
  return (
    <svg {...baseSvg(size, '0 0 96 96', title)}>
      <rect x="6" y="6" width="84" height="84" rx="6" fill="#f4f7ff" stroke="currentColor" strokeWidth="1.25" />
      <rect x="10" y="10" width="76" height="76" rx="3" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.45" />
      <text x="48" y="36" fontSize="13" fontWeight="700" textAnchor="middle" fill="currentColor" letterSpacing="3">UK</text>
      <line x1="20" y1="44" x2="76" y2="44" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <text x="48" y="60" fontSize="12" fontWeight="700" textAnchor="middle" fill="currentColor" letterSpacing="1.5">DPA</text>
      <text x="48" y="76" fontSize="6.5" fontWeight="600" textAnchor="middle" fill="currentColor" letterSpacing="2">2018 · ICO</text>
    </svg>
  );
}

function Star({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const points: string[] = [];
  for (let i = 0; i < 10; i++) {
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    const radius = i % 2 === 0 ? r : r * 0.45;
    points.push(`${cx + Math.cos(angle) * radius},${cy + Math.sin(angle) * radius}`);
  }
  return <polygon points={points.join(' ')} fill="currentColor" />;
}
