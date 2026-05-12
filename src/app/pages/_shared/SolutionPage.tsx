import ProductHero, { type ProductHeroVariant } from '../../../components/ProductHero';
import FeatureGrid, { type FeatureItem, type FeatureGridVariant } from '../../../components/FeatureGrid';
import StatBlock, { type Stat, type StatBlockVariant } from '../../../components/StatBlock';
import QuoteCard from '../../../components/QuoteCard';
import CTASection from '../../../components/CTASection';
import Button from '../../../components/Button';
import { usePageMeta } from '../../../lib/seo';
import type { RouteEntry } from '../../../lib/routes';
import './SolutionPage.css';

/* Archetype D (docs/PLAN.md §4): the buyer-persona solution page.
   Hero → Pain points → Outcomes stat row → IDMB stack → Customer story
   callout → Quote → CTA */

export type PainPoint = {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  desc: string;
};

export type SolutionContent = {
  /* Hero */
  heroEyebrow: string;
  heroTitle: React.ReactNode;
  heroLede: React.ReactNode;
  heroPrimary: { label: string; href: string };
  heroSecondary?: { label: string; href: string };
  heroVariant?: ProductHeroVariant;
  heroTone?: 'plain' | 'tinted';

  /* Pain points - the 3 challenges this buyer persona faces */
  painHeading: string;
  painIntro?: React.ReactNode;
  pains: PainPoint[];

  /* Outcomes / proof stats */
  outcomesHeading: string;
  outcomesIntro?: React.ReactNode;
  outcomes: Stat[];
  outcomesVariant?: StatBlockVariant;

  /* The IDMB modules that serve this persona */
  stackHeading: string;
  stackIntro?: React.ReactNode;
  stack: FeatureItem[];
  stackVariant?: FeatureGridVariant;
  stackColumns?: 2 | 3 | 4;

  /* Customer story spotlight card */
  storyCallout: {
    eyebrow: string;
    heading: React.ReactNode;
    summary: string;
    stat: string;
    statLabel: string;
    href: string;
    logo: React.ComponentType<{ size?: number }>;
  };

  /* Set to true to hide until real data is available */
  outcomesPlaceholder?: boolean;
  quotePlaceholder?: boolean;

  /* Pull quote */
  quote: {
    quote: string;
    name: string;
    role: string;
    company: string;
    storyHref?: string;
  };

  /* Closing CTA */
  cta: {
    heading: string;
    subheading?: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
};

type Props = { route: RouteEntry; content: SolutionContent };

export default function SolutionPage({ route, content }: Props) {
  usePageMeta({
    title: route.title,
    description: route.description,
    canonical: route.path,
  });

  const Logo = content.storyCallout.logo;

  return (
    <>
      <ProductHero
        eyebrow={content.heroEyebrow}
        title={content.heroTitle}
        lede={content.heroLede}
        primary={content.heroPrimary}
        secondary={content.heroSecondary}
        variant={content.heroVariant ?? 'centered'}
        tone={content.heroTone ?? 'tinted'}
      />

      {/* Pain points */}
      <section className="sol-pain" aria-labelledby="sol-pain-h">
        <div className="container">
          <h2 id="sol-pain-h" className="sol-pain-h">{content.painHeading}</h2>
          {content.painIntro && <p className="sol-pain-intro">{content.painIntro}</p>}
          <ul className="sol-pain-grid">
            {content.pains.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.title} className="sol-pain-card">
                  <span className="sol-pain-icon"><Icon size={32} /></span>
                  <strong className="sol-pain-title">{p.title}</strong>
                  <p className="sol-pain-desc">{p.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Outcomes */}
      {!content.outcomesPlaceholder && (
        <StatBlock
          heading={content.outcomesHeading}
          intro={content.outcomesIntro}
          stats={content.outcomes}
          variant={content.outcomesVariant ?? 'inline'}
          bg="dark"
        />
      )}

      {/* IDMB stack */}
      <FeatureGrid
        heading={content.stackHeading}
        intro={content.stackIntro}
        items={content.stack}
        columns={content.stackColumns ?? 3}
        variant={content.stackVariant ?? 'cards'}
        bg="default"
      />

      {/* Customer story callout + quote — hidden until real customer data is available */}
      {!content.quotePlaceholder && (
        <>
          <section className="sol-story" aria-label="Customer story">
            <div className="container sol-story-inner">
              <div className="sol-story-meta">
                <p className="sol-story-eyebrow">{content.storyCallout.eyebrow}</p>
                <div className="sol-story-logo"><Logo size={48} /></div>
                <h2 className="sol-story-h">{content.storyCallout.heading}</h2>
                <p className="sol-story-summary">{content.storyCallout.summary}</p>
                <Button variant="tertiary" href={content.storyCallout.href}>
                  Read the full story
                </Button>
              </div>
              <div className="sol-story-stat">
                <p className="sol-story-stat-value">{content.storyCallout.stat}</p>
                <p className="sol-story-stat-label">{content.storyCallout.statLabel}</p>
              </div>
            </div>
          </section>

          <QuoteCard
            quote={content.quote.quote}
            attribution={{
              name: content.quote.name,
              role: content.quote.role,
              company: content.quote.company,
            }}
            cta={content.quote.storyHref ? { label: 'Read the customer story', href: content.quote.storyHref } : undefined}
          />
        </>
      )}

      <CTASection
        heading={content.cta.heading}
        subheading={content.cta.subheading}
        primary={content.cta.primary}
        secondary={content.cta.secondary}
        tone="dark"
      />
    </>
  );
}
