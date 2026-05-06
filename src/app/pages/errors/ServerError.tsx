import { Link, useRouteError } from 'react-router-dom';
import { ArrowRight } from '../../../components/icons';
import { usePageMeta } from '../../../lib/seo';
import { mailto } from '../../../lib/site';
import './Error.css';

export default function ServerError() {
  const err = useRouteError() as { status?: number; statusText?: string; message?: string } | null;
  const status = err?.status ?? 500;

  usePageMeta({
    title: `${status} - Something went wrong | IDMB`,
    description: 'We hit an unexpected error rendering this page.',
    noindex: true,
  });

  return (
    <section className="err">
      <div className="container err-grid">
        <p className="err-code">{status}</p>
        <h1 className="err-h">Something went wrong</h1>
        <p className="err-lede">
          We hit an unexpected error rendering this page. The IDMB engineering team has been
          notified. Please try again, or contact us if the issue persists.
        </p>
        <div className="err-ctas">
          <Link className="btn btn-primary" to="/">
            <span>Back to home</span>
            <ArrowRight />
          </Link>
          <a className="btn btn-tertiary" href={mailto('support', `Error ${status} on IDMB`)}>
            <span>Contact support</span>
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
