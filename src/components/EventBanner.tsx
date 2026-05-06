import { ArrowRight } from './icons';
import './EventBanner.css';

export default function EventBanner() {
  return (
    <section id="events" className="evb" aria-labelledby="evb-h">
      <div className="container">
        <div className="evb-card">
          <div className="evb-badge" aria-hidden>
            <div className="evb-badge-inner">
              <span>IDMB</span>
              <span>Banking</span>
              <span>Summit</span>
            </div>
          </div>
          <div className="evb-text">
            <h3 id="evb-h" className="evb-title">
              IDMB Banking Summit | 14 May 2026, 10:00 AM GMT (5:00 AM ET)
            </h3>
            <p className="evb-sub">
              Join product leaders from IDMB to see how regulated banks and fintechs are launching
              accounts, cards and wallets on a single, real-time data platform.
            </p>
          </div>
          <a className="evb-btn" href="mailto:summit@idmb.com?subject=IDMB%20Banking%20Summit%20registration">
            <span>Register now</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
