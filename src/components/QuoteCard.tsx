import { Link } from 'react-router-dom';
import { ArrowRight } from './icons';
import './QuoteCard.css';

type Props = {
  quote: string;
  attribution: {
    name: string;
    role: string;
    company: string;
  };
  /* Optional CTA to the full customer story. */
  cta?: { label: string; href: string };
};

export default function QuoteCard({ quote, attribution, cta }: Props) {
  return (
    <section className="qc" aria-label="Customer quote">
      <div className="container qc-grid">
        <blockquote className="qc-quote">
          <p>"{quote}"</p>
        </blockquote>
        <div className="qc-attr">
          <p className="qc-name">{attribution.name}</p>
          <p className="qc-role">
            {attribution.role}, {attribution.company}
          </p>
          {cta && (
            <Link className="arrow-link qc-cta" to={cta.href}>
              {cta.label}
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
