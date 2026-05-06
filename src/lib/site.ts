/* Global brand strings used across the site. Single source of truth - never
   inline these in components or copy. */

export const SITE = {
  brand: 'IDMB',
  productionUrl: 'https://www.idmb.com',
  defaultLocale: 'en-US',
  email: {
    sales: 'sales@idmb.com',
    support: 'support@idmb.com',
    developers: 'developers@idmb.com',
    privacy: 'privacy@idmb.com',
    careers: 'careers@idmb.com',
    newsletter: 'newsletter@idmb.com',
    summit: 'summit@idmb.com',
    training: 'training@idmb.com',
    contact: 'hello@idmb.com',
    press: 'press@idmb.com',
    compliance: 'compliance@idmb.com',
    security: 'security@idmb.com',
    partnerships: 'partnerships@idmb.com',
    oncall: 'oncall@idmb.com',
    accounts: 'accounts@idmb.com',
    accessibility: 'accessibility@idmb.com',
    legal: 'legal@idmb.com',
    dpo: 'dpo@idmb.com',
  },
} as const;

export const mailto = (
  to: keyof typeof SITE.email,
  subject?: string,
): string => {
  const base = `mailto:${SITE.email[to]}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
};
