import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import { mailto } from '../../../lib/site';
import './Company.css';

const LEADERS = [
  {
    initials: 'AO',
    name: 'Amara Osei',
    title: 'Chief Executive Officer',
    bio: 'Amara co-founded IDMB after a decade running payment infrastructure at large West African banks. He leads strategy, commercial relationships and the regulatory programme.',
  },
  {
    initials: 'TA',
    name: 'Tunde Adeyemi',
    title: 'Chief Technology Officer',
    bio: 'Tunde architected three production core-banking systems before joining IDMB. He leads platform engineering, infrastructure and developer experience.',
  },
  {
    initials: 'KA',
    name: 'Kwame Asante',
    title: 'Chief Compliance Officer',
    bio: 'Kwame previously led financial crime compliance at a Tier 1 bank. He owns IDMB\'s regulatory posture, certification programme and customer compliance support.',
  },
  {
    initials: 'PN',
    name: 'Priya Nair',
    title: 'VP Payments',
    bio: 'Priya built and operated cross-border payment rails in 40+ corridors at a global payments network. She leads IDMB\'s payments and FX product.',
  },
  {
    initials: 'SL',
    name: 'Sofia Lindqvist',
    title: 'VP Commercial',
    bio: 'Sofia brings 12 years of enterprise fintech sales experience from Stockholm, London and Singapore. She leads the global commercial team.',
  },
  {
    initials: 'KE',
    name: 'Karim El-Amin',
    title: 'VP Customer Success',
    bio: 'Karim ensures that IDMB customers go live on schedule and operate successfully at scale. He leads implementation, support and account management.',
  },
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
