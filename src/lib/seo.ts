/* Per-page metadata helper. React 18 doesn't render <title>/<meta> hoisted to
   <head>, so we manage it imperatively in a small useEffect-driven hook.
   When we move to React 19 (or SSG via vite-plugin-ssr), this becomes a
   one-liner. */

import { useEffect } from 'react';
import { SITE } from './site';

export type PageMeta = {
  title: string;
  description: string;
  /* Optional canonical URL override; defaults to current location pathname. */
  canonical?: string;
  noindex?: boolean;
};

function setOrCreateMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setOrCreateLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function usePageMeta({ title, description, canonical, noindex }: PageMeta) {
  useEffect(() => {
    document.title = title;
    setOrCreateMeta('description', description);
    setOrCreateMeta('og:title', title, 'property');
    setOrCreateMeta('og:description', description, 'property');
    setOrCreateMeta('twitter:title', title);
    setOrCreateMeta('twitter:description', description);

    const url = canonical
      ? `${SITE.productionUrl}${canonical}`
      : `${SITE.productionUrl}${window.location.pathname}`;
    setOrCreateLink('canonical', url);
    setOrCreateMeta('og:url', url, 'property');

    if (noindex) {
      setOrCreateMeta('robots', 'noindex, nofollow');
    } else {
      setOrCreateMeta(
        'robots',
        'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      );
    }
  }, [title, description, canonical, noindex]);
}
