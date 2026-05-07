import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import Button from '../../../components/Button';
import { ArrowRight } from '../../../components/icons';
import { mailto } from '../../../lib/site';
import './Webinars.css';

type Webinar = {
  date: string;
  title: string;
  desc: string;
  duration: string;
  status: 'upcoming' | 'on-demand';
};

const WEBINARS: Webinar[] = [
  {
    date: '12 June 2026',
    title: 'Building a card issuing programme on IDMB in 60 days',
    desc: 'End-to-end walkthrough: BIN sponsorship, programme setup, virtual card issuance and the authorisation engine. Live Q&A with the IDMB cards team.',
    duration: '60 min',
    status: 'upcoming',
  },
  {
    date: '15 May 2026',
    title: 'Real-time fraud signals: from ledger event to decision in under 200ms',
    desc: 'How IDMB Data risk signals work, how to tune thresholds and how Mosaic uses them to underwrite borrowers in four minutes.',
    duration: '45 min',
    status: 'upcoming',
  },
  {
    date: '17 April 2026',
    title: 'Cross-border wallets: corridors, compliance and FX at scale',
    desc: 'Architecture of the cross-border wallet module - how Vela runs 47 corridors on a single ledger with one operations team.',
    duration: '55 min',
    status: 'on-demand',
  },
  {
    date: '20 March 2026',
    title: 'Core banking modernisation: lifting and shifting vs. parallel run',
    desc: 'Migration strategies for licensed banks: dual-ledger, gradual cutover and the lessons from Northbank\'s 11-month rebuild.',
    duration: '60 min',
    status: 'on-demand',
  },
  {
    date: '13 February 2026',
    title: 'IDMB Wallets deep-dive: stored-value, multi-tenancy and programmable controls',
    desc: 'Technical walkthrough of the wallet API: opening wallets, managing balances, spending rules and the reconciliation feed.',
    duration: '50 min',
    status: 'on-demand',
  },
  {
    date: '9 January 2026',
    title: 'Regulatory reporting on IDMB: how it works, what\'s covered and what\'s next',
    desc: 'Overview of IDMB\'s pre-built regulatory report packs, the data model behind them and our roadmap for new jurisdictions.',
    duration: '40 min',
    status: 'on-demand',
  },
];

export default function EventWebinars() {
  const route = findRoute(PATHS.eventsWebinars)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  const upcoming = WEBINARS.filter((w) => w.status === 'upcoming');
  const onDemand = WEBINARS.filter((w) => w.status === 'on-demand');

  return (
    <>
      <section className="wb-hero" aria-label="Webinars">
        <div className="container">
          <p className="wb-eyebrow">Webinars</p>
          <h1 className="wb-h">Technical deep-dives from the IDMB team</h1>
          <p className="wb-sub">
            Monthly webinars on specific IDMB modules, customer engineering case studies and
            platform updates. All sessions include live Q&A and are recorded for on-demand viewing.
          </p>
          <Button variant="secondary" href={mailto('summit', 'Webinar newsletter signup')}>
            Get notified of new webinars
          </Button>
        </div>
      </section>

      {upcoming.length > 0 && (
        <section className="wb-list" aria-labelledby="wb-upcoming-h">
          <div className="container">
            <h2 id="wb-upcoming-h" className="wb-list-h">Upcoming webinars</h2>
            <ul className="wb-cards">
              {upcoming.map((w) => (
                <li key={w.title} className="wb-card wb-card-upcoming">
                  <div className="wb-card-meta">
                    <span className="wb-card-badge wb-badge-upcoming">Upcoming</span>
                    <span className="wb-card-date">{w.date}</span>
                    <span className="wb-card-duration">{w.duration}</span>
                  </div>
                  <strong className="wb-card-title">{w.title}</strong>
                  <p className="wb-card-desc">{w.desc}</p>
                  <a
                    className="wb-card-link"
                    href={mailto('summit', `Webinar registration - ${w.title}`)}
                  >
                    Register <ArrowRight size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="wb-list wb-list-alt" aria-labelledby="wb-demand-h">
        <div className="container">
          <h2 id="wb-demand-h" className="wb-list-h">On-demand recordings</h2>
          <ul className="wb-cards">
            {onDemand.map((w) => (
              <li key={w.title} className="wb-card">
                <div className="wb-card-meta">
                  <span className="wb-card-badge wb-badge-demand">On demand</span>
                  <span className="wb-card-date">{w.date}</span>
                  <span className="wb-card-duration">{w.duration}</span>
                </div>
                <strong className="wb-card-title">{w.title}</strong>
                <p className="wb-card-desc">{w.desc}</p>
                <a
                  className="wb-card-link"
                  href={mailto('summit', `Webinar recording request - ${w.title}`)}
                >
                  Watch recording <ArrowRight size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Want to present at an IDMB webinar?"
        subheading="We feature customer engineering teams and IDMB partners. Reach out to propose a topic."
        primary={{ label: 'Propose a session', href: mailto('summit', 'Webinar speaker proposal') }}
        secondary={{ label: 'View Connect 2026', href: PATHS.eventsConnect }}
        tone="dark"
      />
    </>
  );
}
