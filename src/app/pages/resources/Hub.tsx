import { Link } from 'react-router-dom';
import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import { mailto } from '../../../lib/site';
import ResourceCard from './ResourceCard';
import { BLOG_POSTS } from '../../../content/resources/blog/index';
import { WHITEPAPERS } from '../../../content/resources/whitepapers/index';
import { ENGINEERING_POSTS } from '../../../content/resources/engineering/index';
import './Resources.css';

export default function ResourcesHub() {
  const route = findRoute(PATHS.resources)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="res-hero" aria-label="Resources">
        <div className="container">
          <p className="res-eyebrow">Resources</p>
          <h1 className="res-h">Ideas, engineering and research from IDMB</h1>
          <p className="res-sub">
            Product stories, technical deep-dives, whitepapers and engineering posts from the
            team building the modern money infrastructure stack.
          </p>
        </div>
      </section>

      <section className="res-hub-section" aria-labelledby="res-hub-blog-h">
        <div className="container">
          <div className="res-hub-section-head">
            <h2 id="res-hub-blog-h" className="res-section-h">Latest from the blog</h2>
            <Link className="res-hub-link" to={PATHS.resourcesBlog}>View all posts →</Link>
          </div>
          <div className="res-cards">
            {BLOG_POSTS.slice(0, 3).map((e) => (
              <ResourceCard key={e.slug} entry={e} href={`/resources/blog/${e.slug}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="res-hub-section res-list-alt" aria-labelledby="res-hub-wp-h">
        <div className="container">
          <div className="res-hub-section-head">
            <h2 id="res-hub-wp-h" className="res-section-h">Whitepapers</h2>
            <Link className="res-hub-link" to={PATHS.resourcesWhitepapers}>View all →</Link>
          </div>
          <div className="res-cards">
            {WHITEPAPERS.slice(0, 3).map((e) => (
              <ResourceCard key={e.slug} entry={e} href={`/resources/whitepapers/${e.slug}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="res-hub-section" aria-labelledby="res-hub-eng-h">
        <div className="container">
          <div className="res-hub-section-head">
            <h2 id="res-hub-eng-h" className="res-section-h">From the engineering blog</h2>
            <Link className="res-hub-link" to={PATHS.resourcesEngineering}>View all posts →</Link>
          </div>
          <div className="res-cards">
            {ENGINEERING_POSTS.slice(0, 3).map((e) => (
              <ResourceCard key={e.slug} entry={e} href={`/resources/engineering/${e.slug}`} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Stay up to date"
        subheading="Get new articles, whitepapers and engineering posts delivered to your inbox."
        primary={{ label: 'Subscribe to updates', href: mailto('newsletter', 'Resources newsletter') }}
        secondary={{ label: 'Open the sandbox', href: PATHS.developersSandbox }}
        tone="dark"
      />
    </>
  );
}
