/* External portal URLs - read from env so staging points at staging portals.
   Every outbound portal link in the app should resolve through PORTAL.x so
   we have a single place to swap environments and a single audit surface. */

type PortalKey =
  | 'developers'
  | 'dashboard'
  | 'status'
  | 'careers'
  | 'investors'
  | 'trust'
  | 'onboarding';

const FALLBACKS: Record<PortalKey, string> = {
  developers: 'https://developers.idm-b.com',
  dashboard: 'https://dashboard.idm-b.com',
  status: 'https://status.idm-b.com',
  careers: 'https://careers.idm-b.com',
  investors: 'https://investors.idm-b.com',
  trust: 'https://trust.idm-b.com',
  onboarding: 'https://onboarding.idm-b.com',
};

const ENV_KEYS: Record<PortalKey, string> = {
  developers: 'VITE_PORTAL_DEVELOPERS',
  dashboard: 'VITE_PORTAL_DASHBOARD',
  status: 'VITE_PORTAL_STATUS',
  careers: 'VITE_PORTAL_CAREERS',
  investors: 'VITE_PORTAL_INVESTORS',
  trust: 'VITE_PORTAL_TRUST',
  onboarding: 'VITE_PORTAL_ONBOARDING',
};

function read(key: PortalKey): string {
  /* `import.meta.env` is provided by Vite in the browser bundle and may be
     undefined when this file is loaded by a Node script (e.g. the sitemap
     generator). Fall back gracefully in both cases. */
  const env = (import.meta as { env?: Record<string, string | undefined> }).env;
  const value = env?.[ENV_KEYS[key]];
  return value ?? FALLBACKS[key];
}

export const PORTAL: Record<PortalKey, string> = {
  developers: read('developers'),
  dashboard: read('dashboard'),
  status: read('status'),
  careers: read('careers'),
  investors: read('investors'),
  trust: read('trust'),
  onboarding: read('onboarding'),
};

/* Helper for components that need to know whether a link should open in a new
   tab. Anything starting with http:// or https:// is treated as external. */
export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href);
}

/* Mailto helper, also treated as external for target/rel purposes. */
export function isOutbound(href: string): boolean {
  return isExternal(href) || href.startsWith('mailto:') || href.startsWith('tel:');
}
