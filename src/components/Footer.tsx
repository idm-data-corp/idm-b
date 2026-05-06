import { Link } from 'react-router-dom';
import IbmLogo from './IbmLogo';
import { FOOTER, LEGAL } from '../lib/nav';
import { isOutbound } from '../lib/links';
import './Footer.css';

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  if (isOutbound(href)) {
    const isHttp = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
      >
        {children}
      </a>
    );
  }
  return <Link to={href}>{children}</Link>;
}

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="container ftr-inner">
        <div className="ftr-logo">
          <IbmLogo size={32} tone="light" />
        </div>
        <div className="ftr-cols">
          {FOOTER.map((c) => (
            <div key={c.heading} className="ftr-col">
              <h4 className="ftr-h">{c.heading}</h4>
              <ul>
                {c.links.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <ul className="ftr-legal">
          {LEGAL.map((l) => (
            <li key={l.label}>
              <FooterLink href={l.href}>{l.label}</FooterLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
