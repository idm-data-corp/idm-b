import { useEffect, useState } from 'react';
import { Close } from './icons';
import './CookieBanner.css';

const STORAGE_KEY = 'idmb-cookie-consent';

// Load analytics script based on user consent
function loadAnalyticsScript() {
  try {
    // Google Analytics or similar tracking code would go here
    // This is a placeholder for the actual analytics implementation
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID';
    document.head.appendChild(script);
    
    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(..._args: any[]) {
      (window as any).dataLayer.push(arguments);
    }
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'YOUR_TRACKING_ID');
  } catch {
    /* ignore analytics errors */
  }
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      
      // If user hasn't made a choice yet, show the banner
      if (!v) {
        setOpen(true);
      } else if (v === 'all') {
        // User previously accepted all - load analytics
        loadAnalyticsScript();
      }
      // If 'partial' or other values, only essential cookies are used (already active)
    } catch {
      setOpen(true);
    }
  }, []);

  function close(value: 'all' | 'partial' | 'dismiss') {
    try {
      localStorage.setItem(STORAGE_KEY, value);
      
      // If accepting all cookies, load analytics now
      if (value === 'all') {
        loadAnalyticsScript();
      }
    } catch {
      /* ignore storage errors */
    }
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
              For more information, please review your <a href="mailto:privacy@idm-b.com?subject=Cookie%20preferences">cookie preferences</a>. By visiting
              idm-b.com, you agree to our processing of information as described in IDMB's{' '}
              <a href="https://www.idm-b.com/trust/cookies">privacy statement</a>.
            </p>
          </div>
          <div className="ck-actions">
            <p className="ck-note">
              To provide a smooth experience, your cookie preferences will be shared across the IDMB web
              properties.
            </p>
            <button className="ck-btn ck-btn-primary" onClick={() => close('all')}>Accept all</button>
            <button className="ck-btn ck-btn-secondary" onClick={() => close('partial')}>Essential only</button>
          </div>
        </div>
      </div>
    </div>
  );
}
