import { Link } from 'react-router-dom';
import ProductHero, { type ProductHeroVariant } from '../../../components/ProductHero';
import FeatureGrid, { type FeatureItem, type FeatureGridVariant } from '../../../components/FeatureGrid';
import HowItWorks, { type Step, type HowItWorksVariant } from '../../../components/HowItWorks';
import CodeBlock from '../../../components/CodeBlock';
import QuoteCard from '../../../components/QuoteCard';
import CTASection from '../../../components/CTASection';
import { ArrowRight } from '../../../components/icons';
import { usePageMeta } from '../../../lib/seo';
import type { RouteEntry } from '../../../lib/routes';
import './SubProductPage.css';

/* The shared archetype for every page under /banking/*, /wallets/*, /data/*.
   Pages plug typed `SubProductContent` in; the archetype renders the
   canonical sub-product layout. Per-section variants give each page its own
   visual rhythm without forking the archetype. */

export type SubProductContent = {
  /* Hero */
  heroEyebrow: string;
  heroTitle: React.ReactNode;
  heroLede: React.ReactNode;
  heroPrimary: { label: string; href: string };
  heroSecondary?: { label: string; href: string };
  heroVisual?: React.ComponentType;
  heroVariant?: ProductHeroVariant;
  heroTone?: 'plain' | 'tinted';

  /* Capabilities */
  capabilitiesHeading: string;
  capabilitiesIntro?: React.ReactNode;
  capabilities: FeatureItem[];
  capabilitiesVariant?: FeatureGridVariant;
  capabilitiesBg?: 'default' | 'alt';

  /* How it works */
  howHeading: string;
  howIntro?: React.ReactNode;
  steps: Step[];
  howVariant?: HowItWorksVariant;
  howBg?: 'default' | 'alt';

  /* Optional code sample (for dev-facing modules) */
  code?: {
    heading: string;
    intro?: React.ReactNode;
    samples: { label: string; language: string; code: string }[];
  };

  /* Customer quote — set quotePlaceholder: true to hide until real quotes are collected */
  quotePlaceholder?: boolean;
  quote: {
    quote: string;
    name: string;
    role: string;
    company: string;
    storyHref?: string;
  };

  /* Pricing teaser */
  pricing: {
    headline: string;
    detail: string;
    href: string;
  };

  /* Related sub-products */
  relatedHeading: string;
  related: FeatureItem[];
  relatedVariant?: FeatureGridVariant;

  /* Closing CTA */
  cta: {
    heading: string;
    subheading?: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };

  /* When true, render a "Launching soon" banner above the hero and apply
     a muted visual treatment to the rest of the page. The marketing copy
     and CTAs still render so visitors can read what's coming. */
  comingSoon?: boolean;
  /* Optional override for the banner's body copy. */
  comingSoonNote?: React.ReactNode;
};

type Props = { route: RouteEntry; content: SubProductContent };

export default function SubProductPage({ route, content }: Props) {
  usePageMeta({
    title: route.title,
    description: route.description,
    canonical: route.path,
  });

  return (
    <div className={content.comingSoon ? 'sp-coming-soon' : undefined}>
      {content.comingSoon && (
        <div className="sp-coming-soon-banner" role="status">
          <div className="container sp-coming-soon-row">
            <span className="sp-coming-soon-tag">Launching soon</span>
            <p>
              {content.comingSoonNote ?? (
                <>This module is on the IDMB roadmap and not yet generally available. The page below describes what we're building.</>
              )}
            </p>
          </div>
        </div>
      )}
      <ProductHero
        eyebrow={content.heroEyebrow}
        title={content.heroTitle}
        lede={content.heroLede}
        primary={content.heroPrimary}
        secondary={content.heroSecondary}
        variant={content.heroVariant ?? 'split'}
        tone={content.heroTone ?? 'plain'}
      />

      <FeatureGrid
        heading={content.capabilitiesHeading}
        intro={content.capabilitiesIntro}
        items={content.capabilities}
        columns={content.capabilities.length === 4 ? 4 : 3}
        variant={content.capabilitiesVariant ?? 'cards'}
        bg={content.capabilitiesBg ?? 'default'}
      />

      <HowItWorks
        heading={content.howHeading}
        intro={content.howIntro}
        steps={content.steps}
        variant={content.howVariant ?? 'rail'}
        bg={content.howBg ?? 'default'}
      />

      {content.code && (
        <section className="sp-code" aria-labelledby="sp-code-h">
          <div className="container sp-code-grid">
            <div className="sp-code-text">
              <h2 id="sp-code-h" className="sp-code-h">{content.code.heading}</h2>
              {content.code.intro && <p className="sp-code-intro">{content.code.intro}</p>}
            </div>
            <div className="sp-code-block">
              <CodeBlock
                tabs={content.code.samples.map((s) => ({
                  label: s.label,
                  language: s.language,
                  code: s.code,
                }))}
              />
            </div>
          </div>
        </section>
      )}

      {!content.quotePlaceholder && (
        <QuoteCard
          quote={content.quote.quote}
          attribution={{
            name: content.quote.name,
            role: content.quote.role,
            company: content.quote.company,
          }}
          cta={content.quote.storyHref ? { label: 'Read the customer story', href: content.quote.storyHref } : undefined}
        />
      )}

      <section className="sp-price" aria-label="Pricing">
        <div className="container sp-price-card">
          <div>
            <p className="sp-price-eyebrow">Pricing</p>
            <p className="sp-price-headline">{content.pricing.headline}</p>
            <p className="sp-price-detail">{content.pricing.detail}</p>
          </div>
          <Link className="arrow-link" to={content.pricing.href}>
            See pricing in detail
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <FeatureGrid
        heading={content.relatedHeading}
        items={content.related}
        columns={3}
        variant={content.relatedVariant ?? 'minimal'}
        bg="alt"
      />

      <CTASection
        heading={content.cta.heading}
        subheading={content.cta.subheading}
        primary={content.cta.primary}
        secondary={content.cta.secondary}
        tone="dark"
      />
    </div>
  );
}
