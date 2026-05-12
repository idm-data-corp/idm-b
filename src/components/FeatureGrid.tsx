import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from './icons';
import { isOutbound } from '../lib/links';
import './FeatureGrid.css';

export type FeatureItem = {
  title: string;
  desc: string;
  href: string;
  /* Optional small icon (32×32, currentColor). */
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  /* When true, render a "Coming soon" pill next to the title. */
  comingSoon?: boolean;
};

export type FeatureGridVariant =
  | 'cards'      // default - bordered grid, icon top, arrow bottom-right
  | 'numbered'   // big monospace numbers replace icons
  | 'horizontal' // icon on the left, copy on the right, no border grid
  | 'minimal';   // text-only, no card backgrounds, simple list

type Props = {
  eyebrow?: string;
  heading?: string;
  intro?: React.ReactNode;
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  variant?: FeatureGridVariant;
  /* Section background. Defaults to white; pass 'alt' for the carbon gray bg. */
  bg?: 'default' | 'alt';
};

export default function FeatureGrid({
  eyebrow,
  heading,
  intro,
  items,
  columns = 3,
  variant = 'cards',
  bg = 'default',
}: Props) {
  return (
    <section className={`fg fg-bg-${bg} fg-v-${variant}`} aria-labelledby={heading ? 'fg-h' : undefined}>
      <div className="container">
        {(eyebrow || heading || intro) && (
          <div className="fg-header">
            {eyebrow && <p className="fg-eyebrow">{eyebrow}</p>}
            {heading && (
              <h2 id="fg-h" className="fg-h">
                {heading}
              </h2>
            )}
            {intro && <p className="fg-intro">{intro}</p>}
          </div>
        )}
        <ul className={`fg-grid fg-cols-${columns}`}>
          {items.map((it, i) => (
            <li key={it.href + it.title}>
              <FeatureCard item={it} index={i} variant={variant} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeatureCard({
  item,
  index,
  variant,
}: {
  item: FeatureItem;
  index: number;
  variant: FeatureGridVariant;
}) {
  const external = isOutbound(item.href);
  const Arrow = external ? ArrowUpRight : ArrowRight;

  const inner = (
    <>
      {variant === 'numbered' && (
        <span className="fg-num" aria-hidden>
          {String(index + 1).padStart(2, '0')}
        </span>
      )}
      {variant !== 'numbered' && variant !== 'minimal' && item.icon && (
        <span className="fg-icon" aria-hidden>
          <item.icon size={32} />
        </span>
      )}
      <strong className="fg-title">
        {item.title}
        {item.comingSoon && <span className="fg-pill" aria-label="Coming soon">Coming soon</span>}
      </strong>
      <p className="fg-desc">{item.desc}</p>
      <span className="fg-arrow">
        <Arrow size={20} />
      </span>
    </>
  );

  const cardClass = item.comingSoon ? 'fg-card fg-card-coming-soon' : 'fg-card';

  if (external) {
    const isHttp = /^https?:\/\//.test(item.href);
    return (
      <a
        className={cardClass}
        href={item.href}
        {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link className={cardClass} to={item.href}>
      {inner}
    </Link>
  );
}
