import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from './icons';
import type { MegaMenuContent } from '../lib/nav';
import { isOutbound } from '../lib/links';
import './MegaMenu.css';

export type { MegaMenuContent } from '../lib/nav';

type Props = {
  content: MegaMenuContent;
  onClose: () => void;
  /* Element ref of the nav button that opened the menu - used so outside-click
     ignores re-clicks on the same button (Header handles toggling). */
  triggerRef?: React.RefObject<HTMLElement | null>;
};

export default function MegaMenu({ content, onClose, triggerRef }: Props) {
  const [activeKey, setActiveKey] = useState(content.categories[0]?.key ?? '');
  const panelRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setActiveKey(content.categories[0]?.key ?? '');
  }, [content]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (panelRef.current?.contains(target)) return;
      if (triggerRef?.current?.contains(target)) return;
      onClose();
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose, triggerRef]);

  const active =
    content.categories.find((c) => c.key === activeKey) ?? content.categories[0];

  return (
    <div className="mm" ref={panelRef} role="region">
      <div className="mm-inner">
        <div className="mm-rail">
          <ul className="mm-cats">
            {content.categories.map((c) => (
              <li key={c.key}>
                <button
                  type="button"
                  className={`mm-cat ${c.key === active.key ? 'is-active' : ''}`}
                  aria-current={c.key === active.key ? 'true' : undefined}
                  onMouseEnter={() => setActiveKey(c.key)}
                  onFocus={() => setActiveKey(c.key)}
                  onClick={() => {
                    setActiveKey(c.key);
                    if (c.href) {
                      navigate(c.href);
                      onClose();
                    }
                  }}
                >
                  {c.label}
                </button>
              </li>
            ))}
          </ul>
          <SmartLink className="mm-explore" href={content.exploreHref} onClick={onClose}>
            <span>{content.exploreLabel}</span>
            <ArrowRight size={20} />
          </SmartLink>
        </div>

        <div className="mm-panel">
          <SmartLink className="mm-heading" href={active.href} onClick={onClose}>
            <span>{active.heading}</span>
            <ArrowRight size={20} />
          </SmartLink>
          <ul className="mm-items">
            {active.items.map((it) => (
              <li key={it.title}>
                <SmartLink className="mm-item" href={it.href} onClick={onClose}>
                  <strong className="mm-item-title">{it.title}</strong>
                  <p className="mm-item-desc">{it.desc}</p>
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* SmartLink: in-app routes use <Link>; outbound URLs (mailto, http) use <a>
   with target=_blank where appropriate. Keeps the mega menu free of routing
   concerns. */
function SmartLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  if (isOutbound(href)) {
    const isHttp = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
