import { Suspense } from 'react';
import ProductHero, { type ProductHeroVariant } from '../../../components/ProductHero';
import FeatureGrid, { type FeatureItem, type FeatureGridVariant } from '../../../components/FeatureGrid';
import StatBlock, { type Stat, type StatBlockVariant } from '../../../components/StatBlock';
import QuoteCard from '../../../components/QuoteCard';
import CTASection from '../../../components/CTASection';
import { usePageMeta } from '../../../lib/seo';
import type { RouteEntry } from '../../../lib/routes';

/* PillarOverview is the page archetype shared by /banking, /wallets and /data.
   Real Phase-1 product pillar pages render this with typed content; the
   archetype itself is content-agnostic.

   Each page selects per-section variants so no two pillar pages look the
   same. Defaults match the original presentation. */

export type PillarContent = {
  /* Hero */
  heroEyebrow?: string;
  heroTitle: React.ReactNode;
  heroLede: React.ReactNode;
  heroPrimaryCTA: { label: string; href: string };
  heroSecondaryCTA: { label: string; href: string };
  heroVisual?: React.ComponentType;
  heroVariant?: ProductHeroVariant;
  heroTone?: 'plain' | 'tinted';

  /* Sub-products (FeatureGrid) */
  subProductsEyebrow?: string;
  subProductsHeading: string;
  subProductsIntro?: React.ReactNode;
  subProducts: FeatureItem[];
  subProductsVariant?: FeatureGridVariant;
  subProductsBg?: 'default' | 'alt';

  /* Stats (StatBlock) */
  statsEyebrow?: string;
  statsHeading?: string;
  statsIntro?: React.ReactNode;
  stats: Stat[];
  statsVariant?: StatBlockVariant;
  statsBg?: 'default' | 'alt' | 'dark';
  /* When true, render the stats and quote as illustrative placeholders. */
  statsPlaceholder?: boolean;

  /* Customer quote (QuoteCard) */
  quote: {
    quote: string;
    name: string;
    role: string;
    company: string;
    storyHref?: string;
  };
  quotePlaceholder?: boolean;

  /* Capabilities row (FeatureGrid). */
  capabilitiesHeading: string;
  capabilitiesIntro?: React.ReactNode;
  capabilities: FeatureItem[];
  capabilitiesVariant?: FeatureGridVariant;
  capabilitiesBg?: 'default' | 'alt';

  /* Closing CTA */
  cta: {
    heading: string;
    subheading?: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
};

type Props = {
  route: RouteEntry;
  content: PillarContent;
};

export default function PillarOverview({ route, content }: Props) {
  usePageMeta({
    title: route.title,
    description: route.description,
    canonical: route.path,
  });

  const Visual = content.heroVisual;

  return (
    <>
      <ProductHero
        eyebrow={content.heroEyebrow}
        title={content.heroTitle}
        lede={content.heroLede}
        primary={content.heroPrimaryCTA}
        secondary={content.heroSecondaryCTA}
        visual={Visual ? <Suspense fallback={null}><Visual /></Suspense> : undefined}
        variant={content.heroVariant ?? 'split'}
        tone={content.heroTone ?? 'plain'}
      />
      <FeatureGrid
        eyebrow={content.subProductsEyebrow}
        heading={content.subProductsHeading}
        intro={content.subProductsIntro}
        items={content.subProducts}
        columns={content.subProducts.length === 4 ? 4 : 3}
        variant={content.subProductsVariant ?? 'cards'}
        bg={content.subProductsBg ?? 'default'}
      />
      <StatBlock
        eyebrow={content.statsEyebrow}
        heading={content.statsHeading}
        intro={content.statsIntro}
        stats={content.stats}
        variant={content.statsVariant ?? 'cards'}
        bg={content.statsBg ?? 'alt'}
        placeholder={content.statsPlaceholder}
      />
      <QuoteCard
        quote={content.quote.quote}
        attribution={{
          name: content.quote.name,
          role: content.quote.role,
          company: content.quote.company,
        }}
        cta={content.quote.storyHref ? { label: 'Read the customer story', href: content.quote.storyHref } : undefined}
        placeholder={content.quotePlaceholder}
      />
      <FeatureGrid
        heading={content.capabilitiesHeading}
        intro={content.capabilitiesIntro}
        items={content.capabilities}
        columns={3}
        variant={content.capabilitiesVariant ?? 'cards'}
        bg={content.capabilitiesBg ?? 'default'}
      />
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
