import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import { mailto } from '../../../lib/site';
import './Company.css';

const CHANNELS = [
  {
    label: 'Sales',
    desc: 'Talk to our team about platform pricing, contract terms or a custom proof-of-concept.',
    href: mailto('sales', 'Sales inquiry from contact page'),
    cta: 'Contact sales',
  },
  {
    label: 'Press & media',
    desc: 'Interview requests, embargoed briefings and press kit downloads.',
    href: mailto('press', 'Press inquiry from contact page'),
    cta: 'Contact press',
  },
  {
    label: 'Compliance & legal',
    desc: 'Regulatory inquiries, audit report requests, DPA and NDA processing.',
    href: mailto('compliance', 'Compliance inquiry from contact page'),
    cta: 'Contact compliance',
  },
  {
    label: 'Security',
    desc: 'Responsible disclosure, penetration test coordination and security questionnaires.',
    href: mailto('security', 'Security inquiry from contact page'),
    cta: 'Contact security',
  },
  {
    label: 'Partnerships',
    desc: 'Technology partnerships, system integrators and reseller arrangements.',
    href: mailto('partnerships', 'Partnership inquiry from contact page'),
    cta: 'Contact partnerships',
  },
  {
    label: 'Careers',
    desc: 'Questions about open roles, hiring process or working at IDMB.',
    href: mailto('careers', 'Careers inquiry from contact page'),
    cta: 'Contact careers',
  },
];

const OFFICES = [
  {
    city: 'London (HQ)',
    address: '100 Bishopsgate\nLondon EC2N 4AG\nUnited Kingdom',
  },
  {
    city: 'Dublin',
    address: '1 Grand Canal Square\nDublin 2\nIreland',
  },
  {
    city: 'Nairobi',
    address: 'Upper Hill, Upperhill Road\nNairobi\nKenya',
  },
];

export default function Contact() {
  const route = findRoute(PATHS.companyContact)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="co-hero">
        <div className="container">
          <p className="co-eyebrow">Company</p>
          <h1 className="co-h">Contact IDMB</h1>
          <p className="co-sub">
            Use the right channel below and we will get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="co-contact">
        <div className="container co-contact-grid">
          <div>
            <h2 className="co-section-h">Get in touch</h2>
            <div className="co-contact-channels">
              {CHANNELS.map((c) => (
                <div key={c.label} className="co-contact-channel">
                  <strong>{c.label}</strong>
                  <p>{c.desc}</p>
                  <a href={c.href}>{c.cta} →</a>
                </div>
              ))}
            </div>
          </div>

          <aside className="co-contact-offices">
            <h3>Offices</h3>
            {OFFICES.map((o) => (
              <div key={o.city} className="co-office">
                <strong>{o.city}</strong>
                <p style={{ whiteSpace: 'pre-line' }}>{o.address}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}
