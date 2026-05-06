import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import ResourceCard from './ResourceCard';
import { ENGINEERING_POSTS } from '../../../content/resources/engineering/index';
import './Resources.css';

export default function EngineeringBlog() {
  const route = findRoute(PATHS.resourcesEngineering)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="res-hero" aria-label="Engineering blog">
        <div className="container">
          <p className="res-eyebrow">Engineering blog</p>
          <h1 className="res-h">How the IDMB platform is built and run</h1>
          <p className="res-sub">
            Deep technical posts from the IDMB engineering team: distributed systems, database
            performance, API design, infrastructure and reliability.
          </p>
        </div>
      </section>

      <section className="res-list" aria-labelledby="res-eng-list-h">
        <div className="container">
          <h2 id="res-eng-list-h" className="res-section-h">All posts</h2>
          <div className="res-cards">
            {ENGINEERING_POSTS.map((e) => (
              <ResourceCard key={e.slug} entry={e} href={`/resources/engineering/${e.slug}`} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Interested in the engineering problems?"
        subheading="We're hiring engineers who want to work on them. View open roles or talk to our team."
        primary={{ label: 'View open roles', href: PATHS.companyCareers }}
        secondary={{ label: 'Open the sandbox', href: PATHS.developersSandbox }}
        tone="dark"
      />
    </>
  );
}
