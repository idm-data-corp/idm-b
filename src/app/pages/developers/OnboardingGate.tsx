import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '../../../components/icons';
import { usePageMeta } from '../../../lib/seo';
import { SITE } from '../../../lib/site';
import { PORTAL } from '../../../lib/links';
import { PATHS } from '../../../lib/routes';

/* Shown when every "Open the sandbox" / "Get started" CTA is clicked.
   When onboardingStatus is 'live': auto-redirects to onboarding.idm-b.com.
   When onboardingStatus is 'down': shows a friendly unavailability message. */
export default function OnboardingGate() {
  usePageMeta({
    title: 'Get started — IDMB',
    description: 'Open the IDMB onboarding portal to create your account and access the sandbox.',
    canonical: PATHS.developersSandbox,
  });

  const isLive = SITE.onboardingStatus === 'live';
  const onboardingUrl = PORTAL.onboarding;

  useEffect(() => {
    if (isLive) {
      window.location.replace(onboardingUrl);
    }
  }, [isLive, onboardingUrl]);

  if (isLive) {
    return (
      <section className="cs">
        <div className="container cs-grid">
          <div className="cs-copy">
            <h1 className="cs-h">Redirecting&hellip;</h1>
            <p className="cs-lede">
              Taking you to{' '}
              <a href={onboardingUrl} rel="noopener noreferrer">
                {onboardingUrl}
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  /* Onboarding portal is currently down — show friendly fallback */
  return (
    <section className="cs">
      <div className="container cs-grid">
        <div className="cs-copy">
          <h1 className="cs-h">Onboarding is temporarily unavailable</h1>
          <p className="cs-lede">
            Our onboarding portal is currently down. We'll have it back up shortly.
            In the meantime, reach out and we'll get you started manually.
          </p>

          <div className="cs-ctas">
            <a
              className="btn btn-primary"
              href={`mailto:${SITE.email.onboarding}?subject=${encodeURIComponent('Get started with IDMB')}`}
            >
              <span>Email onboarding@idm-b.com</span>
              <ArrowRight />
            </a>
            <a
              className="btn btn-secondary"
              href={`mailto:${SITE.email.sales}?subject=${encodeURIComponent('Get started with IDMB')}`}
            >
              <span>Email sales@idm-b.com</span>
              <ArrowRight />
            </a>
          </div>

          <p className="cs-note">
            Once the portal is live you'll be able to open a free sandbox, post your
            first ledger entry and issue a card — all without talking to anyone.
          </p>

          <Link className="arrow-link" to={PATHS.home ?? '/'}>
            ← Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
