import { useState, type FormEvent } from 'react';
import './StayConnected.css';

export default function StayConnected() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="newsletter" className="sc" aria-labelledby="sc-h">
      <div className="container sc-grid">
        <div className="sc-left">
          <h2 id="sc-h" className="sc-h">Stay connected</h2>
          <div className="sc-art" aria-hidden>
            <NetworkArt />
          </div>
        </div>
        <div className="sc-right">
          <h3 className="sc-sub">The IDMB Money Brief - banking infrastructure, weekly</h3>
          <p className="sc-text">
            Subscribe for product launches, regulatory updates, infrastructure deep-dives and stories from the
            banks, fintechs and operators building on the IDMB platform.
          </p>
          <form className="sc-form" onSubmit={onSubmit} noValidate>
            <label className="sc-label" htmlFor="sc-email">Business email</label>
            <input
              id="sc-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="sc-input"
            />
            <p className="sc-fine">
              The IDMB Money Brief is delivered in English. You will find an unsubscribe link in every issue.
              You can manage your subscriptions or unsubscribe <a href="mailto:newsletter@idmb.com?subject=Unsubscribe">here</a>. Refer to our{' '}
              <a href="#privacy">IDMB Privacy Statement</a> for more information.
            </p>
            <button type="submit" className="sc-submit" disabled={submitted}>
              {submitted ? 'Subscribed' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function NetworkArt() {
  return (
    <svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice" className="sc-svg">
      <defs>
        <linearGradient id="sc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0d4ec4" />
          <stop offset=".55" stopColor="#1a6dff" />
          <stop offset="1" stopColor="#3aa6e3" />
        </linearGradient>
      </defs>
      <rect width="600" height="380" fill="url(#sc-bg)" />
      <polygon points="0,260 360,40 600,80 600,380 0,380" fill="#1c5fff" opacity=".55" />
      <polygon points="0,290 600,140 600,380 0,380" fill="#0e3fa9" opacity=".35" />

      {/* Money network - nodes are wallets / accounts, lines are settlements */}
      <g stroke="#fff" strokeWidth="1.5" fill="none" opacity=".95">
        <path d="M120 180 L 230 80 L 360 130 L 470 110 L 540 200 L 460 270 L 320 320 L 220 290" />
        <path d="M230 80 L 360 220 L 470 110" />
        <path d="M120 180 L 220 290 M 360 130 L 360 220" />
      </g>
      <g fill="#fff">
        {[
          [120, 180], [230, 80], [360, 130], [470, 110], [540, 200],
          [460, 270], [320, 320], [220, 290], [360, 220],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="6" />
        ))}
      </g>

      {/* Coin glyph (replaces eye) - stands for "money in motion" */}
      <g transform="translate(80,180)">
        <circle cx="55" cy="20" r="36" fill="none" stroke="#fff" strokeWidth="2.5" />
        <circle cx="55" cy="20" r="22" fill="#fff" />
        <text
          x="55"
          y="27"
          textAnchor="middle"
          fontFamily="'IBM Plex Sans',sans-serif"
          fontWeight="700"
          fontSize="22"
          fill="#1a6dff"
        >
          $
        </text>
      </g>
    </svg>
  );
}
