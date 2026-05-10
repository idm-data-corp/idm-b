import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import { mailto } from '../../../lib/site';
import './Company.css';

const NEWS = [
  {
    date: '22 Apr 2026',
    tag: 'Product',
    title: 'IDMB launches multi-region active-active deployment across five AWS regions',
    excerpt:
      'IDMB\'s platform is now deployed in eu-west-1, eu-central-1, af-south-1, eu-west-2 and me-south-1, delivering sub-100ms API latency within each region and a 5-minute failover SLA.',
  },
  {
    date: '14 Mar 2026',
    tag: 'Partnership',
    title: 'IDMB and Northbank extend partnership to card issuing and cross-border payments',
    excerpt:
      'Following the successful migration of Northbank\'s core ledger to IDMB, the two organisations have expanded their agreement to cover the full card issuing and FX rails modules.',
  },
  {
    date: '6 Feb 2026',
    tag: 'Compliance',
    title: 'IDMB achieves DORA Article 28 ICT third-party registration in EU and UK',
    excerpt:
      'IDMB has completed registration as an ICT third-party service provider under the EU Digital Operational Resilience Act (DORA) and the equivalent FCA Critical Technology Provider regime in the UK.',
  },
  {
    date: '9 Dec 2025',
    tag: 'Product',
    title: 'IDMB Data adds pre-built IFRS 9 provision schedules and Basel III capital reports',
    excerpt:
      'The IDMB Regulatory Reporting module now ships pre-built templates for IFRS 9 expected credit loss calculations and Basel III capital ratio reporting, refreshed in lockstep with the ledger.',
  },
  {
    date: '3 Nov 2025',
    tag: 'Funding',
    title: 'IDMB raises Series B to accelerate expansion across Middle East and North Africa',
    excerpt:
      'IDMB has closed a Series B funding round to support the build-out of its MENA regional infrastructure and the launch of new FX corridor coverage.',
  },
];

export default function Newsroom() {
  const route = findRoute(PATHS.companyNewsroom)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="co-hero">
        <div className="container">
          <p className="co-eyebrow">Company</p>
          <h1 className="co-h">Newsroom</h1>
          <p className="co-sub">
            Product launches, partnerships, regulatory milestones and events from IDMB. For press
            enquiries contact{' '}
            <a href={mailto('press', 'Press inquiry')}>press@idm-b.com</a>.
          </p>
        </div>
      </section>

      <section className="co-newsroom">
        <div className="container">
          <ul className="co-news-list">
            {NEWS.map((n) => (
              <li key={n.title} className="co-news-item">
                <span className="co-news-date">{n.date}</span>
                <div>
                  <p className="co-news-title">{n.title}</p>
                  <p className="co-news-excerpt">{n.excerpt}</p>
                  <span className="co-news-tag">{n.tag}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
