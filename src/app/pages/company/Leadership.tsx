import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import { mailto } from '../../../lib/site';
import './Company.css';

const LEADERS = [
  /* Team members coming soon - we'll add them when they're ready. */
];

export default function Leadership() {
  const route = findRoute(PATHS.companyLeadership)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="co-hero">
        <div className="container">
          <p className="co-eyebrow">Company</p>
          <h1 className="co-h">Leadership team</h1>
          <p className="co-sub">
            The IDMB leadership team brings together decades of experience in core banking,
            payments, compliance and enterprise software.
          </p>
        </div>
      </section>

      <section className="co-leadership">
        <div className="container">
          <ul className="co-leadership-grid">
            {LEADERS.map((p) => (
              <li key={p.name} className="co-person-card">
                <div className="co-person-avatar" aria-hidden="true">{p.initials}</div>
                <div className="co-person-body">
                  <p className="co-person-name">{p.name}</p>
                  <p className="co-person-title">{p.title}</p>
                  <p className="co-person-bio">{p.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Join the team"
        subheading="We are hiring across engineering, product, compliance and commercial. See open roles."
        primary={{ label: 'View open roles', href: mailto('careers', 'Leadership page CTA') }}
        secondary={{ label: 'About IDMB', href: PATHS.company }}
      />
    </>
  );
}
