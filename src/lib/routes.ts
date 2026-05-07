/* Single source of truth for the IDMB URL plan (docs/PLAN.md §2).
   The router (app/routes.tsx), the sitemap script and the nav data
   (lib/nav.ts) all derive their URLs from this list. Updating a path
   here updates the entire site. */

import { PORTAL } from './links';
import { mailto } from './site';

export type LayoutKind = 'marketing' | 'product' | 'legal' | 'event' | 'error';

export type RouteEntry = {
  path: string;                  // canonical URL
  title: string;                 // <title> for the page
  description: string;           // <meta name="description">
  layout: LayoutKind;
  /* Phase-0 stub: when true, render the ComingSoon archetype.
     Phase-1+ real pages will set this to false and supply a `module`. */
  stub: boolean;
  /* For the sitemap. */
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority?: number;
  /* If a marketing route is just a redirect to a portal, we render a small
     stub that auto-links there rather than a full page. */
  portalRedirect?: keyof typeof PORTAL;
  /* When true, the route is reachable by direct URL but excluded from the
     sitemap (and should not be linked from public navigation). Use for
     pages that are temporarily hidden but not deleted. */
  noIndex?: boolean;
};

/* Stable navigation IDs used elsewhere (mega menu, footer, sub-nav). */
export const PATHS = {
  home: '/',

  banking: '/banking',
  bankingCore: '/banking/core',
  bankingCards: '/banking/cards',
  bankingPayments: '/banking/payments',
  bankingCompliance: '/banking/compliance',
  bankingTreasury: '/banking/treasury',

  wallets: '/wallets',
  walletsStored: '/wallets/stored-value',
  walletsCardLinked: '/wallets/card-linked',
  walletsMerchant: '/wallets/merchant-b2b',
  walletsCrossBorder: '/wallets/cross-border',

  data: '/data',
  dataLake: '/data/lake',
  dataRealTime: '/data/real-time',
  dataRisk: '/data/risk',
  dataReporting: '/data/reporting',

  solutions: '/solutions',
  solutionsBanks: '/solutions/banks',
  solutionsFintechs: '/solutions/fintechs',
  solutionsMarketplaces: '/solutions/marketplaces',
  solutionsMobileMoney: '/solutions/mobile-money',
  solutionsTelecoms: '/solutions/telecoms',
  solutionsEmbedded: '/solutions/embedded-finance',
  solutionsLenders: '/solutions/lenders',

  customers: '/customers',
  customerNorthbank: '/customers/northbank',
  customerPaywave: '/customers/paywave',
  customerMosaic: '/customers/mosaic',
  customerVela: '/customers/vela',

  developers: '/developers',
  developersDocs: '/developers/docs',
  developersApi: '/developers/api',
  developersSdks: '/developers/sdks',
  developersSandbox: '/developers/sandbox',
  developersChangelog: '/developers/changelog',
  developersStatus: '/developers/status',

  pricing: '/pricing',
  pricingBanking: '/pricing/banking',
  pricingWallets: '/pricing/wallets',
  pricingData: '/pricing/data',

  events: '/events',
  eventsConnect: '/events/connect-2026',
  eventsWebinars: '/events/webinars',

  resources: '/resources',
  resourcesBlog: '/resources/blog',
  resourcesWhitepapers: '/resources/whitepapers',
  resourcesPodcasts: '/resources/podcasts',
  resourcesEngineering: '/resources/engineering',

  company: '/company',
  companyLeadership: '/company/leadership',
  companyNewsroom: '/company/newsroom',
  companyCareers: '/company/careers',
  companyContact: '/company/contact',

  trust: '/trust',
  trustSecurity: '/trust/security',
  trustCompliance: '/trust/compliance',
  trustPrivacy: '/trust/privacy',
  trustTerms: '/trust/terms',
  trustCookies: '/trust/cookies',
  trustAccessibility: '/trust/accessibility',
  trustLicences: '/trust/licences',

  support: '/support',
  supportContact: '/support/contact',
} as const;

/* Compact title helper: the brand suffix is appended uniformly. */
const t = (page: string) => `${page} - IDMB`;

export const ROUTES: RouteEntry[] = [
  {
    path: PATHS.home,
    title: 'IDMB - Banking, Wallets & Data Analytics Infrastructure',
    description:
      'IDMB is the modern infrastructure layer for finance: core banking APIs, embedded wallets and real-time data analytics. Launch faster, scale safely, stay compliant.',
    layout: 'marketing',
    stub: false,
    changefreq: 'weekly',
    priority: 1.0,
  },

  /* Banking */
  {
    path: PATHS.banking,
    title: t('Banking infrastructure'),
    description:
      'Production-grade core banking APIs, ledger, accounts, payments and card issuing - composable services for licensed banks and fintechs.',
    layout: 'product',
    stub: false,
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: PATHS.bankingCore,
    title: t('Core banking & ledger'),
    description:
      'Real-time, double-entry ledger built for high-throughput retail and commercial banking workloads.',
    layout: 'product',
    stub: false,
  },
  {
    path: PATHS.bankingCards,
    title: t('Card issuing & processing'),
    description:
      'Issue branded debit, credit and prepaid cards on Visa and Mastercard rails in days, with a programmable authorisation engine.',
    layout: 'product',
    stub: false,
  },
  {
    path: PATHS.bankingPayments,
    title: t('Payments & FX rails'),
    description:
      'Real-time payments, cross-border settlement and FX in 40+ currencies from one integration.',
    layout: 'product',
    stub: false,
  },
  {
    path: PATHS.bankingCompliance,
    title: t('Compliance, KYC & AML'),
    description:
      'Identity verification, transaction monitoring, sanctions screening and regulator-ready reports built into the platform.',
    layout: 'product',
    stub: false,
  },
  {
    path: PATHS.bankingTreasury,
    title: t('Treasury & liquidity'),
    description:
      'Settlement accounts, intra-day liquidity and end-of-day reconciliation in a single, auditable feed.',
    layout: 'product',
    stub: false,
  },

  /* Wallets */
  {
    path: PATHS.wallets,
    title: t('Wallets infrastructure'),
    description:
      'Multi-currency, multi-tenant wallet infrastructure with stored value, instant transfers, payouts and card-linking.',
    layout: 'product',
    stub: false,
    priority: 0.9,
  },
  {
    path: PATHS.walletsStored,
    title: t('Stored-value accounts'),
    description:
      'Open programmable, multi-currency wallets in one API call with full lifecycle controls.',
    layout: 'product',
    stub: false,
  },
  {
    path: PATHS.walletsCardLinked,
    title: t('Card-linked wallets'),
    description:
      'Attach issued cards to wallets, push tokens to mobile pay platforms and apply programmable spending controls.',
    layout: 'product',
    stub: false,
  },
  {
    path: PATHS.walletsMerchant,
    title: t('Merchant & B2B wallets'),
    description:
      'Marketplace payouts, treasury wallets and loyalty/rewards balances on the same regulated ledger.',
    layout: 'product',
    stub: false,
  },
  {
    path: PATHS.walletsCrossBorder,
    title: t('Cross-border wallets'),
    description:
      'Hold balances in any supported currency and move money across 47 corridors with screening built in.',
    layout: 'product',
    stub: false,
  },

  /* Data */
  {
    path: PATHS.data,
    title: t('Data analytics'),
    description:
      'Real-time analytics on the IDMB ledger and wallet activity - for risk, fraud, growth and regulatory teams.',
    layout: 'product',
    stub: false,
    priority: 0.9,
  },
  {
    path: PATHS.dataLake,
    title: t('Data lake & warehouse'),
    description:
      'Stream every ledger event into your warehouse with strong schemas and replay support.',
    layout: 'product',
    stub: false,
  },
  {
    path: PATHS.dataRealTime,
    title: t('Real-time analytics'),
    description:
      'Sub-second dashboards over live ledger and wallet activity, with role-aware access.',
    layout: 'product',
    stub: false,
  },
  {
    path: PATHS.dataRisk,
    title: t('Risk & fraud signals'),
    description:
      'Real-time risk scores, behavioural fraud signals and case management for every transaction.',
    layout: 'product',
    stub: false,
  },
  {
    path: PATHS.dataReporting,
    title: t('Regulatory reporting'),
    description:
      'Pre-built returns for the regulators IDMB customers file with - refreshed in lockstep with the ledger.',
    layout: 'product',
    stub: false,
  },

  /* Solutions */
  {
    path: PATHS.solutions,
    title: t('Solutions'),
    description:
      'How banks, fintechs, marketplaces and operators ship financial products on IDMB.',
    layout: 'marketing',
    stub: false,
    priority: 0.8,
  },
  { path: PATHS.solutionsBanks,         title: t('For licensed banks'),               description: 'Core, cards, payments and analytics for licensed banks.', layout: 'marketing', stub: false },
  { path: PATHS.solutionsFintechs,      title: t('For fintechs & neobanks'),          description: 'Launch a neobank or fintech product on IDMB.',         layout: 'marketing', stub: false },
  { path: PATHS.solutionsMarketplaces,  title: t('For marketplaces & super-apps'),    description: 'Multi-party payouts, wallets and KYC for marketplaces.', layout: 'marketing', stub: false },
  { path: PATHS.solutionsMobileMoney,   title: t('For mobile-money operators'),       description: 'Modernise mobile-money rails on the IDMB platform.',   layout: 'marketing', stub: false },
  { path: PATHS.solutionsTelecoms,      title: t('For telecom operators'),            description: 'Telecom-grade wallets, cards and analytics on IDMB.',  layout: 'marketing', stub: false },
  { path: PATHS.solutionsEmbedded,      title: t('For embedded-finance platforms'),   description: 'Embed IDMB banking and wallets into your product.',     layout: 'marketing', stub: false },
  { path: PATHS.solutionsLenders,       title: t('For lenders & credit products'),    description: 'Credit decisioning and disbursement on IDMB.',          layout: 'marketing', stub: false },

  /* Customers */
  {
    path: PATHS.customers,
    title: t('Customer stories'),
    description: 'How real banks, fintechs and operators ship on IDMB.',
    layout: 'marketing', stub: false, priority: 0.8,
  },
  { path: PATHS.customerNorthbank, title: t('Northbank - customer story'), description: 'Northbank rebuilt its core on IDMB in 11 months.',     layout: 'marketing', stub: false },
  { path: PATHS.customerPaywave,   title: t('Paywave - customer story'),   description: 'Paywave embedded IDMB Wallets into its 9M-user super-app.', layout: 'marketing', stub: false },
  { path: PATHS.customerMosaic,    title: t('Mosaic - customer story'),    description: 'Mosaic uses IDMB Data to score borrowers in real time.',  layout: 'marketing', stub: false },
  { path: PATHS.customerVela,      title: t('Vela - customer story'),      description: 'Vela runs cross-border settlement on IDMB across 47 corridors.', layout: 'marketing', stub: false },

  /* Developers - landing has the Banking/Wallets/Data sub-nav treatment;
     the leaf pages are portal redirects (and surface the same sub-nav
     so the user can pivot between them). */
  {
    path: PATHS.developers,
    title: t('Developers'),
    description: 'Build on IDMB: SDKs, sandbox, REST APIs and reference architectures.',
    layout: 'product', stub: true, priority: 0.9,
  },
  { path: PATHS.developersDocs,      title: t('Documentation'), description: 'Open the IDMB developer documentation.', layout: 'product', stub: true, portalRedirect: 'developers' },
  { path: PATHS.developersApi,       title: t('API reference'), description: 'Open the IDMB API reference.',           layout: 'product', stub: true, portalRedirect: 'developers' },
  { path: PATHS.developersSdks,      title: t('SDKs'),          description: 'Server, mobile and CLI SDKs.',           layout: 'product', stub: true, portalRedirect: 'developers' },
  { path: PATHS.developersSandbox,   title: t('Sandbox'),       description: 'Open a free, fully-featured sandbox environment.', layout: 'product', stub: true, portalRedirect: 'developers' },
  { path: PATHS.developersChangelog, title: t('Changelog'),     description: 'Every API and platform change, dated and tagged.', layout: 'product', stub: true, portalRedirect: 'developers' },
  { path: PATHS.developersStatus,    title: t('Status'),        description: 'Live availability across every IDMB region.',     layout: 'product', stub: true, portalRedirect: 'status' },

  /* Pricing */
  { path: PATHS.pricing,        title: t('Pricing'),                description: 'Usage-based pricing for the IDMB platform.', layout: 'marketing', stub: false, priority: 0.8 },
  { path: PATHS.pricingBanking, title: t('Banking pricing'),        description: 'Pricing for the IDMB banking modules.',     layout: 'marketing', stub: false },
  { path: PATHS.pricingWallets, title: t('Wallets pricing'),        description: 'Pricing for the IDMB wallets modules.',     layout: 'marketing', stub: false },
  { path: PATHS.pricingData,    title: t('Data pricing'),           description: 'Pricing for the IDMB data modules.',        layout: 'marketing', stub: false },

  /* Events */
  { path: PATHS.events,         title: t('Events'),                  description: 'IDMB events, summits and webinars.', layout: 'event', stub: false, priority: 0.7 },
  { path: PATHS.eventsConnect,  title: t('IDMB Connect 2026'),       description: 'Reserve your seat for IDMB Connect 2026, the banking infrastructure summit.', layout: 'event', stub: false, noIndex: true },
  { path: PATHS.eventsWebinars, title: t('Webinars'),                description: 'Upcoming and on-demand webinars from the IDMB team.', layout: 'event', stub: false },

  /* Resources */
  { path: PATHS.resources,             title: t('Resources'),         description: 'Blog, whitepapers, podcasts and engineering posts from IDMB.', layout: 'marketing', stub: false, priority: 0.7 },
  { path: PATHS.resourcesBlog,         title: t('Blog'),              description: 'IDMB product, customer and industry stories.', layout: 'marketing', stub: false },
  { path: PATHS.resourcesWhitepapers,  title: t('Whitepapers'),       description: 'In-depth IDMB whitepapers and benchmarks.',     layout: 'marketing', stub: false },
  { path: PATHS.resourcesPodcasts,     title: t('Podcasts'),          description: 'IDMB podcasts and conversations with builders.', layout: 'marketing', stub: false },
  { path: PATHS.resourcesEngineering,  title: t('Engineering blog'),  description: 'How the IDMB platform is built and run.',       layout: 'marketing', stub: false },

  /* Company */
  { path: PATHS.company,            title: t('About IDMB'),       description: 'Who IDMB is and how we build modern money infrastructure.', layout: 'marketing', stub: false, priority: 0.6 },
  { path: PATHS.companyLeadership,  title: t('Leadership'),       description: 'IDMB executive leadership.',     layout: 'marketing', stub: false },
  { path: PATHS.companyNewsroom,    title: t('Newsroom'),         description: 'IDMB news, press releases and announcements.', layout: 'marketing', stub: false },
  { path: PATHS.companyCareers,     title: t('Careers'),          description: 'Open roles at IDMB.',            layout: 'marketing', stub: true, portalRedirect: 'careers' },
  { path: PATHS.companyContact,     title: t('Contact IDMB'),     description: 'Get in touch with the IDMB team.', layout: 'marketing', stub: false },

  /* Trust */
  { path: PATHS.trust,              title: t('Trust centre'),     description: 'Security, compliance and privacy at IDMB.', layout: 'legal', stub: false, priority: 0.6 },
  { path: PATHS.trustSecurity,      title: t('Security'),         description: 'How IDMB secures customer money and data.',  layout: 'legal', stub: false },
  { path: PATHS.trustCompliance,    title: t('Compliance'),       description: 'IDMB certifications and regulatory posture.', layout: 'legal', stub: false },
  { path: PATHS.trustPrivacy,       title: t('Privacy statement'), description: 'How IDMB handles your information.',         layout: 'legal', stub: false },
  { path: PATHS.trustTerms,         title: t('Terms of use'),     description: 'IDMB terms of use.',                          layout: 'legal', stub: false },
  { path: PATHS.trustCookies,       title: t('Cookie statement'), description: 'How IDMB uses cookies on this site.',         layout: 'legal', stub: false },
  { path: PATHS.trustAccessibility, title: t('Accessibility'),    description: 'IDMB accessibility commitments.',             layout: 'legal', stub: false },
  { path: PATHS.trustLicences,      title: t('Licences & regulators'), description: 'IDMB licences and the regulators we work with.', layout: 'legal', stub: false },

  /* Support */
  { path: PATHS.support,        title: t('Support'),         description: 'Get help with the IDMB platform.', layout: 'marketing', stub: false, priority: 0.6 },
  { path: PATHS.supportContact, title: t('Contact support'), description: 'Reach the IDMB support team.',     layout: 'marketing', stub: false },
];

/* Helpers */
export function findRoute(path: string): RouteEntry | undefined {
  return ROUTES.find((r) => r.path === path);
}

/* Used by the sales/contact stub buttons so we never hand-type emails. */
export const CONTACT_SALES = mailto('sales', 'Talk to sales');
