import { lazy, Suspense } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { usePageMeta } from '../../../lib/seo';
import CTASection from '../../../components/CTASection';
import { PATHS } from '../../../lib/routes';
import { BLOG_POSTS } from '../../../content/resources/blog/index';
import { WHITEPAPERS } from '../../../content/resources/whitepapers/index';
import { ENGINEERING_POSTS } from '../../../content/resources/engineering/index';
import type { ResourceEntry } from '../../../content/resources/types';
import { mailto } from '../../../lib/site';
import './Article.css';

const ALL: ResourceEntry[] = [...BLOG_POSTS, ...WHITEPAPERS, ...ENGINEERING_POSTS];

const KIND_LABELS: Record<string, string> = {
  blog: 'Blog',
  whitepaper: 'Whitepaper',
  engineering: 'Engineering',
};

type Props = { kind?: string };

export default function ResourceArticle({ kind }: Props) {
  const { slug } = useParams<{ slug: string }>();
  const entry = ALL.find((e) => e.slug === slug && (!kind || e.kind === kind));

  if (!entry) return <Navigate to="/404" replace />;

  usePageMeta({
    title: `${entry.title} - IDMB`,
    description: entry.excerpt,
    canonical: `/resources/${entry.kind === 'blog' ? 'blog' : entry.kind === 'engineering' ? 'engineering' : 'whitepapers'}/${entry.slug}`,
  });

  const Content = lazy(async () => {
    const mod = await entry.load();
    return { default: mod.default };
  });

  const kindLabel = KIND_LABELS[entry.kind] ?? entry.kind;

  return (
    <>
      <section className="art-hero" aria-label={entry.title}>
        <div className="container">
          <p className="art-eyebrow">{kindLabel}</p>
          <h1 className="art-hero-h">{entry.title}</h1>
          <div className="art-byline">
            <span className="art-byline-author">{entry.author.name}</span>
            <span>{entry.author.role}</span>
            <span className="art-byline-date">
              {new Date(entry.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="art-byline-read">{entry.readTime}</span>
          </div>
          <div className="art-tags">
            {entry.tags.map((t) => <span key={t} className="art-tag">{t}</span>)}
          </div>
        </div>
      </section>

      <div className="art-body">
        <div className="container art-body-inner">
          <Suspense fallback={<p style={{ color: 'var(--c-text-mid)', padding: '32px 0' }}>Loading…</p>}>
            <Content />
          </Suspense>
        </div>
      </div>

      <CTASection
        heading="Build on IDMB"
        subheading="Open a sandbox and try the platform, or talk to our team about your infrastructure needs."
        primary={{ label: 'Open the sandbox', href: PATHS.developersSandbox }}
        secondary={{ label: 'Talk to sales', href: mailto('sales', `Article CTA - ${entry.title}`) }}
        tone="dark"
      />
    </>
  );
}
