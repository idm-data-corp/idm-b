import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Close, ChevronDown, ChevronUp, ArrowRight } from './icons';
import { PRIMARY_NAV, MEGA_MENUS } from '../lib/nav';
import { mailto } from '../lib/site';
import { isOutbound } from '../lib/links';
import './MobileDrawer.css';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileDrawer({ open, onClose }: Props) {
  const [expandedKey, setExpandedKey] = useState<string | null>(null);
  const { pathname } = useLocation();

  /* Close the drawer whenever the route changes (e.g. after navigation). */
  useEffect(() => {
    if (open) onClose();
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [pathname]);

  /* Esc closes; lock body scroll while open. */
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="md" role="dialog" aria-modal="true" aria-label="Site navigation">
      <div className="md-bar">
        <span className="md-bar-title">Menu</span>
        <button
          type="button"
          className="md-close"
          aria-label="Close menu"
          onClick={onClose}
        >
          <Close size={20} />
        </button>
      </div>

      <nav className="md-nav" aria-label="Primary mobile">
        <ul>
          {PRIMARY_NAV.map((n) => {
            if (n.kind === 'menu') {
              const isExpanded = expandedKey === n.key;
              const menu = MEGA_MENUS[n.key];
              return (
                <li key={n.label}>
                  <button
                    type="button"
                    className="md-row"
                    aria-expanded={isExpanded}
                    onClick={() => setExpandedKey(isExpanded ? null : n.key)}
                  >
                    <span>{n.label}</span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {isExpanded && menu && (
                    <div className="md-sub">
                      {menu.categories.map((c) => (
                        <div key={c.key} className="md-cat">
                          <Link
                            to={c.href}
                            className="md-cat-heading"
                            onClick={onClose}
                          >
                            {c.heading}
                            <ArrowRight size={14} />
                          </Link>
                          <ul className="md-cat-items">
                            {c.items.map((it) => (
                              <li key={it.title}>
                                <Link to={it.href} className="md-item" onClick={onClose}>
                                  {it.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Link
                        className="md-explore"
                        to={menu.exploreHref}
                        onClick={onClose}
                      >
                        {menu.exploreLabel}
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  )}
                </li>
              );
            }
            return (
              <li key={n.label}>
                <Link to={n.href} className="md-row md-row-link" onClick={onClose}>
                  <span>{n.label}</span>
                  <ArrowRight size={16} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="md-footer">
        <a className="md-cta" href={mailto('sales')}>
          Talk to sales <ArrowRight size={16} />
        </a>
        <ul className="md-utility">
          <li>
            <SmartUtil href="/developers">Developer portal</SmartUtil>
          </li>
          <li>
            <SmartUtil href={mailto('support')}>Support</SmartUtil>
          </li>
        </ul>
      </div>
    </div>
  );
}

function SmartUtil({ href, children }: { href: string; children: React.ReactNode }) {
  if (isOutbound(href)) {
    return <a href={href}>{children}</a>;
  }
  return <Link to={href}>{children}</Link>;
}
