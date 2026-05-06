import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import IbmLogo from './IbmLogo';
import { ChevronDown, ChevronUp, Search, Chat, Globe, User, Close, Menu } from './icons';
import MegaMenu from './MegaMenu';
import MobileDrawer from './MobileDrawer';
import { PRIMARY_NAV, MEGA_MENUS } from '../lib/nav';
import { mailto } from '../lib/site';
import './Header.css';

type Tray = null | 'search' | 'region' | 'account';

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [tray, setTray] = useState<Tray>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  function selectMenu(label: string) {
    setOpenMenu((prev) => (prev === label ? null : label));
    setTray(null);
  }

  function openTray(t: Tray) {
    setTray((prev) => (prev === t ? null : t));
    setOpenMenu(null);
  }

  const activeMenuKey = openMenu
    ? PRIMARY_NAV.find((n) => n.label === openMenu && n.kind === 'menu')?.kind === 'menu'
      ? (PRIMARY_NAV.find((n) => n.label === openMenu) as { key: string }).key
      : null
    : null;
  const activeContent = activeMenuKey ? MEGA_MENUS[activeMenuKey] : null;
  const activeTriggerRef = openMenu
    ? { current: triggerRefs.current[openMenu] }
    : undefined;

  return (
    <header className="hdr" role="banner">
      <a href="#main" className="sr-only">Skip to main content</a>
      <div className="hdr-inner">
        <button
          type="button"
          className="hdr-burger"
          aria-label="Open menu"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(true)}
        >
          <Menu size={20} />
        </button>
        <Link to="/" className="hdr-logo" aria-label="IDMB home">
          <IbmLogo size={26} />
        </Link>
        <nav className="hdr-nav" aria-label="Primary">
          <ul>
            {PRIMARY_NAV.map((n) => {
              if (n.kind === 'menu') {
                const isOpen = openMenu === n.label;
                return (
                  <li key={n.label}>
                    <button
                      type="button"
                      ref={(el) => { triggerRefs.current[n.label] = el; }}
                      className={`hdr-link ${isOpen ? 'is-open' : ''}`}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() => selectMenu(n.label)}
                    >
                      {n.label}
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </li>
                );
              }
              return (
                <li key={n.label}>
                  <Link className="hdr-link" to={n.href}>
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hdr-actions">
          <button
            type="button"
            className={`hdr-icon ${tray === 'search' ? 'is-open' : ''}`}
            aria-label="Search"
            aria-expanded={tray === 'search'}
            onClick={() => openTray('search')}
          >
            <Search />
          </button>
          <a
            className="hdr-icon hdr-icon-secondary"
            aria-label="Contact sales"
            href={mailto('sales')}
          >
            <Chat />
          </a>
          <button
            type="button"
            className={`hdr-icon hdr-icon-secondary ${tray === 'region' ? 'is-open' : ''}`}
            aria-label="Region"
            aria-expanded={tray === 'region'}
            onClick={() => openTray('region')}
          >
            <Globe />
          </button>
          <button
            type="button"
            className={`hdr-icon ${tray === 'account' ? 'is-open' : ''}`}
            aria-label="Account"
            aria-expanded={tray === 'account'}
            onClick={() => openTray('account')}
          >
            <User />
          </button>
        </div>
      </div>

      {activeContent && openMenu && (
        <MegaMenu
          content={activeContent}
          onClose={() => setOpenMenu(null)}
          triggerRef={activeTriggerRef}
        />
      )}

      {tray && <HeaderTray tray={tray} onClose={() => setTray(null)} />}

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}

function HeaderTray({ tray, onClose }: { tray: Exclude<Tray, null>; onClose: () => void }) {
  return (
    <div className="hdr-tray" role="dialog" aria-label={trayLabel(tray)}>
      <div className="hdr-tray-inner">
        {tray === 'search' && (
          <form
            className="hdr-search"
            onSubmit={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            <Search />
            <input
              autoFocus
              type="search"
              name="q"
              placeholder="Search IDMB platform, docs and customers"
              className="hdr-search-input"
            />
            <button type="submit" className="hdr-search-go">Search</button>
          </form>
        )}
        {tray === 'region' && (
          <div className="hdr-tray-content">
            <h3>Choose your region</h3>
            <ul className="hdr-tray-list">
              {['Africa', 'EMEA', 'Asia Pacific', 'Americas'].map((r) => (
                <li key={r}><button type="button" onClick={onClose}>{r}</button></li>
              ))}
            </ul>
          </div>
        )}
        {tray === 'account' && (
          <div className="hdr-tray-content">
            <h3>Account</h3>
            <ul className="hdr-tray-list">
              <li><Link to="/developers" onClick={onClose}>Sign in to dashboard</Link></li>
              <li><Link to="/developers" onClick={onClose}>Create an account</Link></li>
              <li><a href={mailto('sales')} onClick={onClose}>Talk to sales</a></li>
            </ul>
          </div>
        )}
        <button className="hdr-tray-close" aria-label="Close" onClick={onClose}>
          <Close size={20} />
        </button>
      </div>
    </div>
  );
}

function trayLabel(t: Exclude<Tray, null>) {
  if (t === 'search') return 'Search';
  if (t === 'region') return 'Region';
  return 'Account';
}
