import { Link } from 'react-router-dom';
import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import Button from '../../../components/Button';
import { ArrowRight } from '../../../components/icons';
import { mailto } from '../../../lib/site';
import './Landing.css';

const EVENTS = [
  {
    href: PATHS.eventsWebinars,
    type: 'Webinar series',
    label: 'IDMB Webinars',
    date: 'Monthly - next: 12 June 2026',
    location: 'Online',
    desc: 'Monthly deep-dives into specific IDMB modules, customer engineering case studies, regulatory updates and API walkthroughs. Live Q&A included.',
    cta: 'Browse webinars',
    featured: true,
  },
];

export default function EventsLanding() {
  const route = findRoute(PATHS.events)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="ev-land-hero" aria-label="Events">
        <div className="container">
          <p className="ev-land-eyebrow">Events</p>
          <h1 className="ev-land-h">
            Where builders of the financial stack come together
          </h1>
          <p className="ev-land-sub">
            From our flagship annual summit to monthly technical webinars - IDMB events bring
            together engineers, product teams and operators building on modern money infrastructure.
          </p>
          <Button variant="secondary" href={mailto('summit', 'Events newsletter')}>
            Get event updates
          </Button>
        </div>
      </section>

      <section className="ev-land-list" aria-labelledby="ev-land-list-h">
        <div className="container">
          <h2 id="ev-land-list-h" className="ev-land-list-h">Upcoming events</h2>
          <ul className="ev-land-cards">
            {EVENTS.map((ev) => (
              <li key={ev.href} className={`ev-land-card ${ev.featured ? 'is-featured' : ''}`}>
                <div className="ev-land-card-meta">
                  <span className="ev-land-card-type">{ev.type}</span>
                  <span className="ev-land-card-date">{ev.date}</span>
                  <span className="ev-land-card-loc">{ev.location}</span>
                </div>
                <strong className="ev-land-card-label">{ev.label}</strong>
                <p className="ev-land-card-desc">{ev.desc}</p>
                <Link className="ev-land-card-link" to={ev.href}>
                  {ev.cta} <ArrowRight size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Speak at an IDMB event"
        subheading="We're looking for engineers, architects and operators building on the IDMB platform. Reach out to discuss a session."
        primary={{ label: 'Propose a session', href: mailto('summit', 'Speaker proposal') }}
        secondary={{ label: 'View webinars', href: PATHS.eventsWebinars }}
        tone="dark"
      />
    </>
  );
}
