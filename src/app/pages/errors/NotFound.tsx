import { Link } from 'react-router-dom';
import { ArrowRight } from '../../../components/icons';
import { usePageMeta } from '../../../lib/seo';
import './Error.css';

export default function NotFound() {
  usePageMeta({
    title: 'Page not found - IDMB',
    description: 'The page you were looking for could not be found. Return to the IDMB home page.',
    noindex: true,
  });

  return (
    <section className="err">
      <div className="container err-grid">
        <p className="err-code">404</p>
        <h1 className="err-h">We can't find that page</h1>
        <p className="err-lede">
          The page you were looking for has either moved, been renamed, or never existed.
          Try the home page, or jump to one of the platform pillars below.
        </p>
        <div className="err-ctas">
          <Link className="btn btn-primary" to="/">
            <span>Back to home</span>
            <ArrowRight />
          </Link>
          <Link className="btn btn-tertiary" to="/banking">
            <span>Banking</span>
            <ArrowRight />
          </Link>
          <Link className="btn btn-tertiary" to="/wallets">
            <span>Wallets</span>
            <ArrowRight />
          </Link>
          <Link className="btn btn-tertiary" to="/data">
            <span>Data</span>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
