import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import { mailto } from '../../../lib/site';
import ResourceCard from './ResourceCard';
import { BLOG_POSTS } from '../../../content/resources/blog/index';
import './Resources.css';

export default function BlogIndex() {
  const route = findRoute(PATHS.resourcesBlog)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="res-hero" aria-label="Blog">
        <div className="container">
          <p className="res-eyebrow">Blog</p>
          <h1 className="res-h">Product, customer and industry stories</h1>
          <p className="res-sub">
            How banks, fintechs and operators build on IDMB - plus the product thinking
            and industry analysis behind what we build.
          </p>
        </div>
      </section>

      <section className="res-list" aria-labelledby="res-blog-list-h">
        <div className="container">
          <h2 id="res-blog-list-h" className="res-section-h">All posts</h2>
          <div className="res-cards">
            {BLOG_POSTS.map((e) => (
              <ResourceCard key={e.slug} entry={e} href={`/resources/blog/${e.slug}`} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Get new posts in your inbox"
        subheading="Subscribe to the IDMB newsletter and get new articles delivered weekly."
        primary={{ label: 'Subscribe', href: mailto('newsletter', 'Blog newsletter signup') }}
        secondary={{ label: 'Engineering blog', href: PATHS.resourcesEngineering }}
        tone="dark"
      />
    </>
  );
}
