import Button from './Button';
import './ProductHero.css';

export type ProductHeroCTA = { label: string; href: string };

export type ProductHeroVariant =
  | 'split'        // default: copy left, visual right
  | 'centered'     // copy stacked centered, visual full-width below
  | 'visual-left'; // visual left, copy right (mirrors 'split')

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  lede: React.ReactNode;
  primary: ProductHeroCTA;
  secondary?: ProductHeroCTA;
  visual?: React.ReactNode;
  variant?: ProductHeroVariant;
  /* Visual tone - 'tinted' uses a subtle gradient bg behind the hero. */
  tone?: 'plain' | 'tinted';
};

export default function ProductHero({
  eyebrow,
  title,
  lede,
  primary,
  secondary,
  visual,
  variant = 'split',
  tone = 'plain',
}: Props) {
  const showVisual = !!visual;
  const className = [
    'ph',
    `ph-v-${variant}`,
    `ph-tone-${tone}`,
    showVisual ? 'ph-with-visual' : 'ph-no-visual',
  ].join(' ');

  return (
    <section className={className} aria-labelledby="ph-h">
      <div className="container ph-grid">
        <div className="ph-copy">
          {eyebrow && <p className="ph-eyebrow">{eyebrow}</p>}
          <h1 id="ph-h" className="ph-h">
            {title}
          </h1>
          <p className="ph-lede">{lede}</p>
          <div className="ph-ctas">
            <Button variant="primary"  href={primary.href}>{primary.label}</Button>
            {secondary && (
              <Button variant="tertiary" href={secondary.href}>{secondary.label}</Button>
            )}
          </div>
        </div>
        {showVisual && (
          <div className="ph-visual" aria-hidden>
            {visual}
          </div>
        )}
      </div>
    </section>
  );
}
