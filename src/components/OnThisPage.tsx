import { useEffect, useRef, useState } from 'react';
import './OnThisPage.css';

export type TocItem = { id: string; label: string };

type Props = {
  items: TocItem[];
  /* The minimum vertical offset, in px, between the document scroll origin
     and the top of a section before it counts as "the active section".
     Defaults to 96 - covers the 48px sticky header + 48px breathing room. */
  offset?: number;
};

/* OnThisPage - sticky right-rail table of contents for long-form pages.
   - Click highlights and smooth-scrolls to the target with proper offset
     (so the section heading clears the sticky 48px header).
   - Updates the URL hash without forcing a router navigation.
   - IntersectionObserver scroll-spy keeps the active link in sync as the
     reader scrolls.
   - Picks up a hash on initial load and scrolls there with the same offset
     so the target heading isn't covered when arriving via deep link. */
export default function OnThisPage({ items, offset = 96 }: Props) {
  const [activeId, setActiveId] = useState<string>(() => {
    /* Prefer a hash from the URL on first render; fall back to first TOC item. */
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.slice(1);
      if (items.some((i) => i.id === hash)) return hash;
    }
    return items[0]?.id ?? '';
  });
  const observerRef = useRef<IntersectionObserver | null>(null);

  /* Scroll-spy: observe each TOC target and pick the one nearest the top
     of the viewport (just below the sticky header). */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const targets = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);

    if (targets.length === 0) return;

    /* The "active" rule: an item is active when its top edge is within the
       top 60% of the viewport, with the sticky header subtracted off. */
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target as HTMLElement);
        if (visible.length === 0) return;

        /* Pick the first visible target by document order. */
        const next = visible.reduce<HTMLElement>((acc, el) => {
          return acc.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_PRECEDING ? el : acc;
        }, visible[0]);

        setActiveId(next.id);
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: 0,
      },
    );

    targets.forEach((t) => obs.observe(t));
    observerRef.current = obs;
    return () => obs.disconnect();
  }, [items, offset]);

  /* Initial deep-link: if the page loads with a hash, scroll there with
     proper offset (the browser's native scroll usually under-shoots because
     scroll-margin-top isn't respected during initial layout in some cases). */
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    /* Defer to next paint so heading offsets are stable. */
    window.requestAnimationFrame(() => {
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
    /* Run once on mount only. */
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  function jumpTo(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    /* Allow modified clicks (cmd/ctrl) to do their default thing. */
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    setActiveId(id);
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    /* Update the URL hash without triggering a router navigation. */
    history.replaceState(null, '', `#${id}`);
  }

  return (
    <aside className="otp" aria-label="On this page">
      <p className="otp-h">On this page</p>
      <ul className="otp-list">
        {items.map((it) => {
          const isActive = it.id === activeId;
          return (
            <li key={it.id} className={`otp-item ${isActive ? 'is-active' : ''}`}>
              <a
                href={`#${it.id}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={(e) => jumpTo(e, it.id)}
              >
                {it.label}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
