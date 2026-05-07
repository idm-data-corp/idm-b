import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import { ArrowRight } from '../../../components/icons';
import { usePageMeta } from '../../../lib/seo';
import { mailto } from '../../../lib/site';
import type { RouteEntry } from '../../../lib/routes';
import { PATHS } from '../../../lib/routes';
import './ProductLaunchSoon.css';

/* Renders a product-flavoured "Launching soon" page for IDMB modules that
   are roadmapped but not yet generally available. Distinct from the
   ComingSoon site stub: this is the public placeholder for a product, not
   a placeholder for an unfinished site section. */

type Props = {
  route: RouteEntry;
  /* Product display name (e.g. "Card issuing"). */
  product: string;
  /* One-paragraph product description. */
  description: string;
  /* Bullet list of capabilities the module will ship with. */
  capabilities: string[];
  /* Subject line used on the early-access mailto. */
  enquirySubject?: string;
};

export default function ProductLaunchSoon({
  route,
  product,
  description,
  capabilities,
  enquirySubject,
}: Props) {
  usePageMeta({
    title: route.title,
    description: route.description,
    canonical: route.path,
  });

  return (
    <section className="pls">
      <div className="container pls-grid">
        <div className="pls-copy">
          <p className="pls-eyebrow">
            <span className="pls-tag">Launching soon</span>
          </p>
          <h1 className="pls-h">{product}</h1>
          <p className="pls-lede">{description}</p>

          <ul className="pls-list">
            {capabilities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <div className="pls-ctas">
            <Button
              variant="primary"
              href={mailto('sales', enquirySubject ?? `Early access: ${product}`)}
            >
              Request early access
            </Button>
            <Button variant="tertiary" href={PATHS.banking}>
              Back to Banking
            </Button>
          </div>

          <p className="pls-note">
            We're rolling out {product.toLowerCase()} to design partners now. Existing IDMB
            customers will be notified ahead of general availability.
          </p>

          <Link className="arrow-link pls-back" to="/">
            Return to IDMB home
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
