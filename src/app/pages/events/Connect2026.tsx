import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import Button from '../../../components/Button';
import { mailto } from '../../../lib/site';
import './Connect2026.css';

const AGENDA = [
  {
    day: 'Day 1 - Thursday 18 September',
    sessions: [
      { time: '08:30', title: 'Registration & breakfast' },
      { time: '09:30', title: 'Opening keynote: The decade of infrastructure - IDMB CEO' },
      { time: '10:30', title: 'Panel: Core banking modernisation without the multi-year freeze' },
      { time: '12:00', title: 'Lunch & product demos' },
      { time: '13:30', title: 'Track A: Ledger architecture for 10M TPS' },
      { time: '13:30', title: 'Track B: Card issuing at scale - learnings from 50M cards' },
      { time: '15:00', title: 'Customer showcase: Northbank - rebuilding a core in 11 months' },
      { time: '16:00', title: 'Track A: Real-time payments and FX settlement' },
      { time: '16:00', title: 'Track B: Compliance-as-code: AML automation' },
      { time: '18:00', title: 'Evening reception & networking dinner' },
    ],
  },
  {
    day: 'Day 2 - Friday 19 September',
    sessions: [
      { time: '09:00', title: 'Keynote: The developer platform roadmap - IDMB CTO' },
      { time: '10:00', title: 'Workshop: Building on IDMB Wallets in 90 minutes' },
      { time: '11:30', title: 'Panel: Embedded finance - where the next billion users come from' },
      { time: '13:00', title: 'Lunch' },
      { time: '14:00', title: 'Track A: Data & fraud signals - from events to decisions' },
      { time: '14:00', title: 'Track B: Regulatory reporting across multiple jurisdictions' },
      { time: '15:30', title: 'Customer showcase: Paywave - wallets for 9M users' },
      { time: '16:30', title: "Closing keynote: What we're building next" },
      { time: '17:30', title: 'Close' },
    ],
  },
];

const SPEAKERS = [
  { name: 'Amara Osei', role: 'CEO, IDMB', desc: 'Opening and closing keynotes.' },
  { name: 'Tunde Adeyemi', role: 'CTO, IDMB', desc: 'Developer platform roadmap keynote.' },
  { name: 'Sofia Lindqvist', role: 'Head of Core Banking, Northbank', desc: 'Customer showcase: Core rebuild case study.' },
  { name: 'Karim El-Amin', role: 'CTO, Paywave', desc: 'Customer showcase: Wallets at scale.' },
  { name: 'Priya Nair', role: 'Head of Payments, IDMB', desc: 'Real-time payments and FX settlement.' },
  { name: 'Kwame Asante', role: 'Chief Compliance Officer, IDMB', desc: 'Compliance-as-code workshop.' },
];

export default function EventConnect2026() {
  const route = findRoute(PATHS.eventsConnect)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="ec-hero" aria-label="IDMB Connect 2026">
        <div className="container ec-hero-grid">
          <div className="ec-hero-text">
            <p className="ec-eyebrow">Summit · London · 18–19 Sep 2026</p>
            <h1 className="ec-hero-h">IDMB Connect 2026</h1>
            <p className="ec-hero-sub">
              The flagship banking infrastructure summit. Two days of keynotes, customer
              showcases, workshops and deep-dives on core banking, wallets, payments and data
              - for the engineers and product leaders building the next generation of finance.
            </p>
            <div className="ec-hero-actions">
              <Button variant="primary" href={mailto('summit', 'IDMB Connect 2026 - Registration')}>
                Reserve your seat
              </Button>
              <Button variant="secondary" href={mailto('summit', 'IDMB Connect 2026 - Sponsor enquiry')}>
                Sponsor the summit
              </Button>
            </div>
          </div>
          <div className="ec-hero-meta">
            <dl className="ec-meta-list">
              <div className="ec-meta-item">
                <dt className="ec-meta-dt">Date</dt>
                <dd className="ec-meta-dd">18–19 September 2026</dd>
              </div>
              <div className="ec-meta-item">
                <dt className="ec-meta-dt">Location</dt>
                <dd className="ec-meta-dd">The Brewery, London EC1Y 4SD</dd>
              </div>
              <div className="ec-meta-item">
                <dt className="ec-meta-dt">Format</dt>
                <dd className="ec-meta-dd">In-person + live stream</dd>
              </div>
              <div className="ec-meta-item">
                <dt className="ec-meta-dt">Attendance</dt>
                <dd className="ec-meta-dd">~600 engineers, product leads & operators</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="ec-agenda" aria-labelledby="ec-agenda-h">
        <div className="container">
          <h2 id="ec-agenda-h" className="ec-section-h">Agenda</h2>
          <p className="ec-agenda-note">Detailed session schedule published June 2026. Speakers and topics subject to change.</p>
          {AGENDA.map((day) => (
            <div key={day.day} className="ec-agenda-day">
              <h3 className="ec-agenda-day-h">{day.day}</h3>
              <ol className="ec-agenda-list">
                {day.sessions.map((s, i) => (
                  <li key={i} className="ec-agenda-item">
                    <span className="ec-agenda-time">{s.time}</span>
                    <span className="ec-agenda-title">{s.title}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className="ec-speakers" aria-labelledby="ec-speakers-h">
        <div className="container">
          <h2 id="ec-speakers-h" className="ec-section-h">Featured speakers</h2>
          <ul className="ec-speakers-grid">
            {SPEAKERS.map((s) => (
              <li key={s.name} className="ec-speaker-card">
                <div className="ec-speaker-avatar" aria-hidden="true">
                  {s.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <strong className="ec-speaker-name">{s.name}</strong>
                  <p className="ec-speaker-role">{s.role}</p>
                  <p className="ec-speaker-desc">{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="ec-speakers-note">Full speaker line-up announced April 2026.</p>
        </div>
      </section>

      <section className="ec-register" aria-labelledby="ec-register-h">
        <div className="container ec-register-grid">
          <div>
            <h2 id="ec-register-h" className="ec-section-h" style={{ marginBottom: 12 }}>Register for Connect 2026</h2>
            <p className="ec-register-body">
              Seats are limited to 600 attendees. Early-bird registration opens 1 June 2026.
              All IDMB customers receive two complimentary passes. Enterprise account holders
              receive a dedicated sponsor table.
            </p>
          </div>
          <div className="ec-register-actions">
            <Button variant="primary" size="lg" href={mailto('summit', 'IDMB Connect 2026 - Registration')}>
              Reserve your seat
            </Button>
            <Button variant="tertiary" href={PATHS.eventsWebinars}>
              View upcoming webinars
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        heading="Sponsor IDMB Connect 2026"
        subheading="Reach 600 senior engineers, product leaders and operators in the banking infrastructure space."
        primary={{ label: 'Enquire about sponsorship', href: mailto('summit', 'Sponsorship enquiry - Connect 2026') }}
        secondary={{ label: 'View all events', href: PATHS.events }}
        tone="dark"
      />
    </>
  );
}
