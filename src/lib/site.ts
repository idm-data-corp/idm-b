/* Global brand strings used across the site. Single source of truth - never
   inline these in components or copy. */

export const SITE = {
  brand: 'IDMB',
  productionUrl: 'https://www.idm-b.com',
  defaultLocale: 'en-US',
  email: {
    sales: 'sales@idm-b.com',
    support: 'support@idm-b.com',
    developers: 'developers@idm-b.com',
    privacy: 'privacy@idm-b.com',
    careers: 'careers@idm-b.com',
    newsletter: 'newsletter@idm-b.com',
    summit: 'summit@idm-b.com',
    training: 'training@idm-b.com',
    contact: 'hello@idm-b.com',
    press: 'press@idm-b.com',
    compliance: 'compliance@idm-b.com',
    security: 'security@idm-b.com',
    partnerships: 'partnerships@idm-b.com',
    oncall: 'oncall@idm-b.com',
    accounts: 'accounts@idm-b.com',
    accessibility: 'accessibility@idm-b.com',
    legal: 'legal@idm-b.com',
    dpo: 'dpo@idm-b.com',
  },
} as const;

export const mailto = (
  to: keyof typeof SITE.email,
  subject?: string,
): string => {
  const base = `mailto:${SITE.email[to]}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
};
