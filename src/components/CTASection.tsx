import Button from './Button';
import './CTASection.css';

export type CTA = { label: string; href: string };

type Props = {
  heading: string;
  subheading?: string;
  primary: CTA;
  secondary?: CTA;
  /* Visual tone - 'dark' uses an indigo background with white text;
     'light' is neutral. */
  tone?: 'dark' | 'light';
};

export default function CTASection({
  heading,
  subheading,
  primary,
  secondary,
  tone = 'dark',
}: Props) {
  return (
    <section className={`cta cta-${tone}`} aria-labelledby="cta-h">
      <div className="container cta-grid">
        <div className="cta-text">
          <h2 id="cta-h" className="cta-h">
            {heading}
          </h2>
          {subheading && <p className="cta-sub">{subheading}</p>}
        </div>
        <div className="cta-buttons">
          <Button variant="primary" href={primary.href}>{primary.label}</Button>
          {secondary && (
            <Button variant="tertiary" href={secondary.href}>{secondary.label}</Button>
          )}
        </div>
      </div>
    </section>
  );
}
