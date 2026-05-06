import './StatBlock.css';

export type Stat = {
  value: string;
  label: string;
  /* Optional sub-line shown beneath the label (cards/rail variants). */
  sub?: string;
};

export type StatBlockVariant =
  | 'cards'  // default - bordered grid, white tiles
  | 'inline' // big numbers in a row, no boxes, on a tinted band
  | 'rail';  // left-rail copy, stats stacked on the right

type Props = {
  eyebrow?: string;
  heading?: string;
  intro?: React.ReactNode;
  stats: Stat[];
  variant?: StatBlockVariant;
  /* Background tone - defaults to alt (carbon gray); some pages need plain. */
  bg?: 'default' | 'alt' | 'dark';
};

export default function StatBlock({
  eyebrow,
  heading,
  intro,
  stats,
  variant = 'cards',
  bg = 'alt',
}: Props) {
  return (
    <section
      className={`sbk sbk-bg-${bg} sbk-v-${variant}`}
      aria-labelledby={heading ? 'sbk-h' : undefined}
    >
      <div className="container sbk-grid">
        {(eyebrow || heading || intro) && (
          <div className="sbk-header">
            {eyebrow && <p className="sbk-eyebrow">{eyebrow}</p>}
            {heading && (
              <h2 id="sbk-h" className="sbk-h">
                {heading}
              </h2>
            )}
            {intro && <p className="sbk-intro">{intro}</p>}
          </div>
        )}
        <ul className="sbk-row" data-count={stats.length}>
          {stats.map((s) => (
            <li key={s.label} className="sbk-item">
              <p className="sbk-value">{s.value}</p>
              <p className="sbk-label">{s.label}</p>
              {s.sub && <p className="sbk-sub">{s.sub}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
