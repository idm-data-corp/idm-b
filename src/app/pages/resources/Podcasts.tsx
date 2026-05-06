import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import Button from '../../../components/Button';
import { mailto } from '../../../lib/site';
import './Resources.css';
import './Podcasts.css';

const EPISODES = [
  {
    num: 12,
    title: 'The banking modernisation playbook with Sofia Lindqvist, Northbank',
    guest: 'Sofia Lindqvist, Head of Core Banking, Northbank',
    date: '2026-04-10',
    duration: '58 min',
    desc: 'How Northbank rebuilt its core banking system on IDMB in 11 months — the team structure, the migration strategy, and what they would do differently.',
  },
  {
    num: 11,
    title: 'Cross-border wallets at scale with Karim El-Amin, Vela',
    guest: 'Karim El-Amin, CTO, Vela',
    date: '2026-03-20',
    duration: '51 min',
    desc: 'How Vela runs 47 cross-border corridors with one operations team — corridor selection, liquidity management and the compliance model.',
  },
  {
    num: 10,
    title: 'Data-driven lending with the Mosaic team',
    guest: 'Fatima Al-Rashid, Head of Data, Mosaic',
    date: '2026-02-28',
    duration: '46 min',
    desc: 'How Mosaic uses IDMB Data signals to underwrite borrowers in under 4 minutes — the model design, the data pipeline and the regulatory constraints.',
  },
];

export default function Podcasts() {
  const route = findRoute(PATHS.resourcesPodcasts)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="res-hero" aria-label="Podcasts">
        <div className="container">
          <p className="res-eyebrow">Podcasts</p>
          <h1 className="res-h">IDMB conversations with builders</h1>
          <p className="res-sub">
            Long-form conversations with engineers, product leaders and operators building
            financial products on modern infrastructure.
          </p>
        </div>
      </section>

      <section className="res-list" aria-labelledby="res-pod-list-h">
        <div className="container">
          <h2 id="res-pod-list-h" className="res-section-h">Recent episodes</h2>
          <ul className="pod-list">
            {EPISODES.map((ep) => (
              <li key={ep.num} className="pod-item">
                <div className="pod-num">Ep {ep.num}</div>
                <div className="pod-item-text">
                  <p className="pod-item-meta">
                    {new Date(ep.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    {' · '}{ep.duration}
                  </p>
                  <strong className="pod-item-title">{ep.title}</strong>
                  <p className="pod-item-guest">{ep.guest}</p>
                  <p className="pod-item-desc">{ep.desc}</p>
                  <Button variant="tertiary" href={mailto('newsletter', `Podcast episode ${ep.num} — listen`)} hideArrow>
                    Listen now
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Subscribe to the podcast"
        subheading="New episodes monthly. Available on Spotify, Apple Podcasts and everywhere you listen."
        primary={{ label: 'Subscribe', href: mailto('newsletter', 'Podcast subscription') }}
        secondary={{ label: 'View the blog', href: PATHS.resourcesBlog }}
        tone="dark"
      />
    </>
  );
}
