import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import FeatureGrid, { type FeatureItem } from '../../../components/FeatureGrid';
import QuoteCard from '../../../components/QuoteCard';
import CTASection from '../../../components/CTASection';
import { ArrowRight } from '../../../components/icons';
import { usePageMeta } from '../../../lib/seo';
import type { RouteEntry } from '../../../lib/routes';
import { PATHS } from '../../../lib/routes';
import { mailto } from '../../../lib/site';
import './CustomerStoryPage.css';

/* The long-form customer-story archetype (docs/PLAN.md §4 archetype E).
   Hero with logo + summary stats · Problem · Approach · Result · Quote ·
   Stack list · Related stories · CTA. */

export type CustomerStoryContent = {
  /* Hero */
  customer: {
    name: string;
    industry: string;
    region: string;
    /* Inline SVG logo component for the customer (uses the same fictional
       logos as the home SmarterBusiness section). */
    logo: React.ComponentType<{ size?: number }>;
  };
  heroEyebrow: string;
  heroTitle: React.ReactNode;
  heroSubtitle: React.ReactNode;
  heroStats: { value: string; label: string }[];

  /* Body - three columns of long-form copy. Use <p> elements as the children. */
  body: {
    problem: React.ReactNode;
    approach: React.ReactNode;
    result: React.ReactNode;
  };

  /* Pull-quote */
  quote: {
    quote: string;
    name: string;
    role: string;
  };

  /* IDMB stack used by this customer */
  stack: FeatureItem[];

  /* Related stories (2-3) */
  related: FeatureItem[];
};

type Props = { route: RouteEntry; content: CustomerStoryContent };

export default function CustomerStoryPage({ route, content }: Props) {
  usePageMeta({
    title: route.title,
    description: route.description,
    canonical: route.path,
  });

  const Logo = content.customer.logo;

  return (
    <>
      <section className="cs-hero">
        <div className="container cs-hero-grid">
          <div className="cs-hero-meta">
            <Link className="cs-back" to={PATHS.customers}>
              <span aria-hidden>←</span> All customer stories
            </Link>
            <div className="cs-hero-logo">
              <Logo size={56} />
            </div>
            <p className="cs-hero-eyebrow">
              <span>{content.heroEyebrow}</span>
              <span aria-hidden> · </span>
              <span>{content.customer.industry}</span>
              <span aria-hidden> · </span>
              <span>{content.customer.region}</span>
            </p>
            <h1 className="cs-hero-h">{content.heroTitle}</h1>
            <p className="cs-hero-sub">{content.heroSubtitle}</p>
          </div>
          <ul className="cs-hero-stats">
            {content.heroStats.map((s) => (
              <li key={s.label}>
                <p className="cs-hero-stat-value">{s.value}</p>
                <p className="cs-hero-stat-label">{s.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cs-body" aria-label="Story">
        <div className="container cs-body-grid">
          <article className="cs-body-block">
            <h2>The problem</h2>
            {content.body.problem}
          </article>
          <article className="cs-body-block">
            <h2>The approach</h2>
            {content.body.approach}
          </article>
          <article className="cs-body-block">
            <h2>The result</h2>
            {content.body.result}
          </article>
        </div>
      </section>

      <QuoteCard
        quote={content.quote.quote}
        attribution={{
          name: content.quote.name,
          role: content.quote.role,
          company: content.customer.name,
        }}
      />

      <FeatureGrid
        eyebrow="Stack"
        heading={`What ${content.customer.name} runs on IDMB`}
        items={content.stack}
        columns={3}
        variant="horizontal"
        bg="alt"
      />

      <section className="cs-rel" aria-labelledby="cs-rel-h">
        <div className="container">
          <h2 id="cs-rel-h" className="cs-rel-h">More customer stories</h2>
          <ul className="cs-rel-list">
            {content.related.map((it) => (
              <li key={it.href}>
                <Link className="cs-rel-card" to={it.href}>
                  <strong className="cs-rel-card-title">{it.title}</strong>
                  <p className="cs-rel-card-desc">{it.desc}</p>
                  <span className="cs-rel-card-arrow">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="cs-rel-cta">
            <Button variant="tertiary" href={PATHS.customers}>See all customer stories</Button>
          </div>
        </div>
      </section>

      <CTASection
        heading={`Build the next IDMB story`}
        subheading="Open a sandbox and try the same modules these teams used, or talk to our team about a regulated rollout."
        primary={{ label: 'Open the sandbox', href: PATHS.developersSandbox }}
        secondary={{ label: 'Talk to sales', href: mailto('sales', `Customer story enquiry: ${content.customer.name}`) }}
        tone="dark"
      />
    </>
  );
}
