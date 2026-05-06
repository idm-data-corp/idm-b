import { useEffect, useState } from 'react';
import { Close } from './icons';
import './CookieBanner.css';

const STORAGE_KEY = 'idmb-cookie-pref';

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (!v) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  function close(value: 'all' | 'partial' | 'dismiss') {
    try { localStorage.setItem(STORAGE_KEY, value); } catch { /* ignore */ }
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="ck" role="dialog" aria-labelledby="ck-h">
      <div className="container ck-inner">
        <button className="ck-close" aria-label="Close" onClick={() => close('dismiss')}>
          <Close size={20} />
        </button>
        <div className="ck-grid">
          <div>
            <h2 id="ck-h" className="ck-h">About cookies on this site</h2>
            <p>
              IDMB uses required cookies to keep our platform working. With your consent, we also use cookies
              to analyse usage, improve the developer experience and measure the impact of our content.
            </p>
          </div>
          <div>
            <p>
              For more information, please review your <a href="mailto:privacy@idmb.com?subject=Cookie%20preferences">cookie preferences</a>. By visiting
              idmb.com, you agree to our processing of information as described in IDMB's{' '}
              <a href="mailto:privacy@idmb.com?subject=Privacy%20statement">privacy statement</a>.
            </p>
          </div>
          <div className="ck-actions">
            <p className="ck-note">
              To provide a smooth experience, your cookie preferences will be shared across the IDMB web
              properties listed <a href="mailto:privacy@idmb.com?subject=IDMB%20web%20properties">here</a>.
            </p>
            <button className="ck-btn ck-btn-primary" onClick={() => close('all')}>Accept all</button>
            <button className="ck-btn ck-btn-secondary" onClick={() => close('partial')}>More options</button>
          </div>
        </div>
      </div>
    </div>
  );
}
