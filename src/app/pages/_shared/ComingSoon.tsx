import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from '../../../components/icons';
import { usePageMeta } from '../../../lib/seo';
import type { RouteEntry } from '../../../lib/routes';
import { PORTAL, isOutbound } from '../../../lib/links';
import { mailto } from '../../../lib/site';
import './ComingSoon.css';

type Props = { route: RouteEntry };

/* The default renderer for any Phase-0 stub route. Establishes a consistent
   hero, the primary "Talk to sales" CTA, and a portal redirect note where
   applicable. Real Phase-1+ pages replace this entirely. */
export default function ComingSoon({ route }: Props) {
  usePageMeta({
    title: route.title,
    description: route.description,
    canonical: route.path,
  });

  const portalHref = route.portalRedirect ? PORTAL[route.portalRedirect] : null;

  return (
    <section className="cs">
      <div className="container cs-grid">
        <div className="cs-copy">
          <h1 className="cs-h">{route.title.replace(' - IDMB', '')}</h1>
          <p className="cs-lede">{route.description}</p>

          <div className="cs-ctas">
            {portalHref ? (
              <a
                className="btn btn-primary"
                href={portalHref}
                target="_blank"
                rel="noopener noreferrer"
                data-portal={route.portalRedirect}
              >
                <span>Open the {route.portalRedirect} portal</span>
                <ArrowUpRight />
              </a>
            ) : (
              <a className="btn btn-primary" href={mailto('sales', `Enquiry: ${route.title.replace(' - IDMB', '')}`)}>
                <span>Talk to sales</span>
                <ArrowRight />
              </a>
            )}
            <Link className="btn btn-tertiary" to="/">
              <span>Back to home</span>
              <ArrowRight />
            </Link>
          </div>

          <p className="cs-note">
            This page is part of the IDMB site rollout and is being filled in next.
            {isOutbound('https://') && ''}
          </p>
        </div>
      </div>
    </section>
  );
}
