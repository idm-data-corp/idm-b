import { Link, useLocation } from 'react-router-dom';
import { findRoute } from '../lib/routes';
import './BreadcrumbNav.css';

export default function BreadcrumbNav() {
  const { pathname } = useLocation();
  if (pathname === '/' ) return null;

  const segments = pathname.split('/').filter(Boolean);
  const crumbs = [
    { label: 'Home', href: '/' },
    ...segments.map((_, i) => {
      const href = '/' + segments.slice(0, i + 1).join('/');
      const route = findRoute(href);
      const fallback = segments[i].replace(/-/g, ' ');
      const labelRaw = route?.title.replace(' - IDMB', '') ?? fallback;
      const label = labelRaw.charAt(0).toUpperCase() + labelRaw.slice(1);
      return { label, href };
    }),
  ];

  return (
    <nav className="bcn" aria-label="Breadcrumb">
      <ol className="bcn-inner">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={c.href} className="bcn-item">
              {isLast ? (
                <span aria-current="page">{c.label}</span>
              ) : (
                <Link to={c.href}>{c.label}</Link>
              )}
              {!isLast && <span className="bcn-sep" aria-hidden>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
