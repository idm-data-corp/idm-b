/* Site navigation data - single source for the global header (primary nav +
   mega menu), the footer (link columns), the per-pillar sub-navigation
   on product pages, and the legal/footer rows.

   Anything that needs to know "what are the canonical IDMB sections" reads
   from this file. URL constants come from `routes.ts` (PATHS). */

import { PATHS } from './routes';
import { mailto } from './site';

export type PrimaryNavItem =
  | { kind: 'menu'; label: string; key: string }
  | { kind: 'link'; label: string; href: string };

export const PRIMARY_NAV: PrimaryNavItem[] = [
  { kind: 'menu', label: 'Banking',      key: 'banking' },
  { kind: 'menu', label: 'Wallets',      key: 'wallets' },
  { kind: 'menu', label: 'Data',         key: 'data' },
  { kind: 'menu', label: 'Developers',   key: 'developers' },
  { kind: 'link', label: 'Pricing',      href: PATHS.pricing },
];

export type MegaItem = { title: string; desc: string; href: string };
export type MegaCategory = {
  key: string;
  label: string;
  heading: string;
  href: string;
  items: MegaItem[];
};
export type MegaMenuContent = {
  exploreLabel: string;
  exploreHref: string;
  categories: MegaCategory[];
};

export const MEGA_MENUS: Record<string, MegaMenuContent> = {
  banking: {
    exploreLabel: 'Explore the Banking platform',
    exploreHref: PATHS.banking,
    categories: [
      {
        key: 'baas',
        label: 'Banking-as-a-Service',
        heading: 'Banking-as-a-Service',
        href: PATHS.banking,
        items: [
          { title: 'Core ledger',        desc: 'Real-time, double-entry ledger for high-throughput retail and commercial banking.', href: PATHS.bankingCore },
          { title: 'Accounts',           desc: 'Issue current, savings, escrow and trust accounts in any supported currency.',   href: PATHS.bankingCore },
          { title: 'Treasury & funding', desc: 'Settlement accounts, intra-day liquidity and end-of-day reconciliation.',         href: PATHS.bankingTreasury },
        ],
      },
      {
        key: 'cards',
        label: 'Card issuing',
        heading: 'Card issuing & processing',
        href: PATHS.bankingCards,
        items: [
          { title: 'Virtual & physical cards', desc: 'Issue branded debit, credit and prepaid cards on Visa and Mastercard rails in days.', href: PATHS.bankingCards },
          { title: 'Authorisation engine',     desc: 'Programmable approve/decline logic with low-latency, observable decision streams.', href: PATHS.bankingCards },
          { title: '3-D Secure & disputes',    desc: 'In-house authentication and chargeback workflows with native dispute lifecycle.',     href: PATHS.bankingCards },
        ],
      },
      {
        key: 'payments',
        label: 'Payments & FX',
        heading: 'Payments & FX rails',
        href: PATHS.bankingPayments,
        items: [
          { title: 'Real-time payments', desc: 'Connect to instant payment schemes across Africa, EMEA and APAC from one integration.', href: PATHS.bankingPayments },
          { title: 'Cross-border & FX',  desc: 'Settle in 40+ currencies with transparent quotes, hedging and corridor coverage.',     href: PATHS.bankingPayments },
          { title: 'Direct debits & payouts', desc: 'Recurring collections, batch payouts and refunds with retry logic baked in.',     href: PATHS.bankingPayments },
        ],
      },
      {
        key: 'compliance',
        label: 'Compliance & risk',
        heading: 'Compliance, KYC & risk',
        href: PATHS.bankingCompliance,
        items: [
          { title: 'KYC & onboarding',     desc: 'Identity verification, document capture and ongoing screening for individuals and businesses.', href: PATHS.bankingCompliance },
          { title: 'AML & sanctions',      desc: 'Real-time transaction monitoring with tunable rules, case management and audit trails.',       href: PATHS.bankingCompliance },
          { title: 'Regulatory reporting', desc: 'Pre-built reports for the major banking regulators IDMB customers operate under.',              href: PATHS.dataReporting },
        ],
      },
    ],
  },
  wallets: {
    exploreLabel: 'Explore the Wallets platform',
    exploreHref: PATHS.wallets,
    categories: [
      {
        key: 'wallets-api',
        label: 'Wallets API',
        heading: 'Wallets API',
        href: PATHS.walletsStored,
        items: [
          { title: 'Stored-value accounts', desc: 'Open multi-currency, multi-tenant wallets in one call, with full lifecycle controls.', href: PATHS.walletsStored },
          { title: 'Instant transfers',     desc: 'Move funds wallet-to-wallet in under 200ms across the IDMB network.',                  href: PATHS.walletsStored },
          { title: 'Top-ups & payouts',     desc: 'Fund and cash out wallets through cards, bank transfers and mobile money channels.',  href: PATHS.walletsStored },
        ],
      },
      {
        key: 'card-linked',
        label: 'Card-linked wallets',
        heading: 'Card-linked wallets',
        href: PATHS.walletsCardLinked,
        items: [
          { title: 'Tap-to-pay cards',    desc: 'Attach issued cards to wallets so customers spend balances anywhere cards are accepted.', href: PATHS.walletsCardLinked },
          { title: 'Wallet provisioning', desc: 'Push tokens to Apple Pay, Google Pay and Samsung Wallet from the same API.',              href: PATHS.walletsCardLinked },
          { title: 'Spending controls',   desc: 'Programmable limits, MCC restrictions and per-merchant rules at the wallet level.',       href: PATHS.walletsCardLinked },
        ],
      },
      {
        key: 'merchant',
        label: 'Merchant & B2B wallets',
        heading: 'Merchant & B2B wallets',
        href: PATHS.walletsMerchant,
        items: [
          { title: 'Marketplace payouts', desc: 'Multi-party splits, fee accruals and on-demand seller payouts from one ledger.', href: PATHS.walletsMerchant },
          { title: 'Treasury wallets',    desc: 'Operating, escrow and reserve wallets with role-based approvals and audit trails.', href: PATHS.walletsMerchant },
          { title: 'Loyalty & rewards',   desc: 'Issue points, vouchers and closed-loop balances alongside customer money.',         href: PATHS.walletsMerchant },
        ],
      },
      {
        key: 'cross-border',
        label: 'Cross-border wallets',
        heading: 'Cross-border wallets',
        href: PATHS.walletsCrossBorder,
        items: [
          { title: 'Remittance corridors', desc: 'Live corridors across 47 countries with always-on screening and reconciliation.', href: PATHS.walletsCrossBorder },
          { title: 'FX inside the wallet', desc: 'Hold balances in any supported currency; convert at quoted rates.',               href: PATHS.walletsCrossBorder },
          { title: 'Compliance pack',      desc: 'Travel rule, beneficial ownership and country-of-origin checks pre-wired.',        href: PATHS.walletsCrossBorder },
        ],
      },
    ],
  },
  data: {
    exploreLabel: 'Explore Data analytics',
    exploreHref: PATHS.data,
    categories: [
      {
        key: 'lake',
        label: 'Data lake & warehouse',
        heading: 'Data lake & warehouse',
        href: PATHS.dataLake,
        items: [
          { title: 'Ledger lake',                desc: 'Every ledger event streamed to your warehouse with strong schemas and replay support.', href: PATHS.dataLake },
          { title: 'Native Snowflake & BigQuery', desc: 'Managed pipes into the warehouses your finance, risk and growth teams already use.',  href: PATHS.dataLake },
          { title: 'Customer 360 model',         desc: 'Pre-modelled views of customers, accounts, wallets and transactions ready for BI.',     href: PATHS.dataLake },
        ],
      },
      {
        key: 'realtime',
        label: 'Real-time analytics',
        heading: 'Real-time analytics',
        href: PATHS.dataRealTime,
        items: [
          { title: 'Streaming dashboards', desc: 'Sub-second dashboards over live ledger and wallet activity, with role-aware access.', href: PATHS.dataRealTime },
          { title: 'Operator console',     desc: 'Search any account, wallet or transaction across your platform from one timeline.',  href: PATHS.dataRealTime },
          { title: 'Embedded charts',      desc: 'Drop IDMB analytics into your own product with secure, signed iframe widgets.',      href: PATHS.dataRealTime },
        ],
      },
      {
        key: 'risk',
        label: 'Risk & fraud',
        heading: 'Risk & fraud signals',
        href: PATHS.dataRisk,
        items: [
          { title: 'Transaction scoring', desc: 'Real-time risk scores on every authorisation and transfer, tuned to your portfolio.', href: PATHS.dataRisk },
          { title: 'Behavioural fraud',   desc: 'Device, geo and velocity signals stitched into the transaction stream automatically.', href: PATHS.dataRisk },
          { title: 'Case management',     desc: 'Investigators triage alerts, freeze funds and resolve cases without leaving IDMB.',    href: PATHS.dataRisk },
        ],
      },
      {
        key: 'reporting',
        label: 'Regulatory reporting',
        heading: 'Regulatory reporting',
        href: PATHS.dataReporting,
        items: [
          { title: 'Statutory reports',    desc: 'Pre-built returns for the regulators IDMB customers file with - refreshed in lockstep.', href: PATHS.dataReporting },
          { title: 'Audit-grade exports',  desc: 'Tamper-evident, time-stamped exports of any ledger slice for audit and forensic work.',  href: PATHS.dataReporting },
          { title: 'Revenue intelligence', desc: 'Unit economics, take-rate and corridor-level P&L derived from one source of truth.',     href: PATHS.dataReporting },
        ],
      },
    ],
  },
  developers: {
    exploreLabel: 'Visit the developer portal',
    exploreHref: PATHS.developersDocs,
    categories: [
      {
        key: 'docs',
        label: 'Documentation',
        heading: 'Documentation',
        href: PATHS.developersDocs,
        items: [
          { title: 'Quickstart',     desc: 'Open a sandbox, post your first ledger entry and issue your first card in under an hour.', href: PATHS.developersDocs },
          { title: 'Guides',         desc: 'End-to-end recipes for launching a neobank, a wallet super-app or a lending product.',     href: PATHS.developersDocs },
          { title: 'Architecture',   desc: 'How the IDMB platform is built - modules, data flow and operational guarantees.',          href: PATHS.developersDocs },
        ],
      },
      {
        key: 'api',
        label: 'API reference',
        heading: 'API reference',
        href: PATHS.developersApi,
        items: [
          { title: 'REST APIs',     desc: 'Versioned, typed REST endpoints for every IDMB service with copy-pasteable examples.', href: PATHS.developersApi },
          { title: 'Webhooks',      desc: 'At-least-once delivery, replay tools and signed payloads for every platform event.',   href: PATHS.developersApi },
          { title: 'OpenAPI specs', desc: 'Download the latest OpenAPI specs to generate clients in any language.',               href: PATHS.developersApi },
        ],
      },
      {
        key: 'sdks',
        label: 'SDKs & samples',
        heading: 'SDKs & samples',
        href: PATHS.developersSdks,
        items: [
          { title: 'Server SDKs', desc: 'TypeScript, Go, Python, Java and Kotlin SDKs maintained by the IDMB team.', href: PATHS.developersSdks },
          { title: 'Mobile SDKs', desc: 'iOS and Android SDKs for KYC capture, card provisioning and wallet UX.',     href: PATHS.developersSdks },
          { title: 'Sample apps', desc: 'Open-source reference apps showing how to compose IDMB modules into products.', href: PATHS.developersSdks },
        ],
      },
      {
        key: 'ops',
        label: 'Sandbox, status & changelog',
        heading: 'Sandbox, status & changelog',
        href: PATHS.developersSandbox,
        items: [
          { title: 'Sandbox',     desc: 'A free, fully-featured environment with simulated card networks and instant rails.', href: PATHS.developersSandbox },
          { title: 'Status page', desc: 'Live availability across every IDMB region, with subscribable incident notifications.', href: PATHS.developersStatus },
          { title: 'Changelog',   desc: 'Every API and platform change, dated, versioned and tagged for easy filtering.',     href: PATHS.developersChangelog },
        ],
      },
    ],
  },
};

/* Per-pillar sub-nav (used by ProductLayout) */
export const SUB_NAV: Record<string, { label: string; href: string }[]> = {
  banking: [
    { label: 'Overview',     href: PATHS.banking },
    { label: 'Core ledger',  href: PATHS.bankingCore },
    { label: 'Card issuing', href: PATHS.bankingCards },
    { label: 'Payments',     href: PATHS.bankingPayments },
    { label: 'Compliance',   href: PATHS.bankingCompliance },
    { label: 'Treasury',     href: PATHS.bankingTreasury },
  ],
  wallets: [
    { label: 'Overview',          href: PATHS.wallets },
    { label: 'Stored-value',      href: PATHS.walletsStored },
    { label: 'Card-linked',       href: PATHS.walletsCardLinked },
    { label: 'Merchant & B2B',    href: PATHS.walletsMerchant },
    { label: 'Cross-border',      href: PATHS.walletsCrossBorder },
  ],
  data: [
    { label: 'Overview',             href: PATHS.data },
    { label: 'Lake & warehouse',     href: PATHS.dataLake },
    { label: 'Real-time analytics',  href: PATHS.dataRealTime },
    { label: 'Risk & fraud',         href: PATHS.dataRisk },
    { label: 'Regulatory reporting', href: PATHS.dataReporting },
  ],
  developers: [
    { label: 'Overview',       href: PATHS.developers },
    { label: 'Documentation',  href: PATHS.developersDocs },
    { label: 'API reference',  href: PATHS.developersApi },
    { label: 'SDKs',           href: PATHS.developersSdks },
    { label: 'Sandbox',        href: PATHS.developersSandbox },
    { label: 'Changelog',      href: PATHS.developersChangelog },
    { label: 'Status',         href: PATHS.developersStatus },
  ],
};

/* Map a route path → which sub-nav (if any) to show */
export function subNavForPath(path: string): { items: { label: string; href: string }[]; pillar: string } | null {
  if (path.startsWith('/banking'))    return { items: SUB_NAV.banking,    pillar: 'Banking' };
  if (path.startsWith('/wallets'))    return { items: SUB_NAV.wallets,    pillar: 'Wallets' };
  if (path.startsWith('/data'))       return { items: SUB_NAV.data,       pillar: 'Data' };
  if (path.startsWith('/developers')) return { items: SUB_NAV.developers, pillar: 'Developers' };
  return null;
}

/* Footer columns */
export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };

export const FOOTER: FooterColumn[] = [
  {
    heading: 'Platform',
    links: [
      { label: 'Banking core',   href: PATHS.banking },
      { label: 'Wallets',        href: PATHS.wallets },
      { label: 'Card issuing',   href: PATHS.bankingCards },
      { label: 'Payments',       href: PATHS.bankingPayments },
      { label: 'Data analytics', href: PATHS.data },
      { label: 'Compliance',     href: PATHS.bankingCompliance },
    ],
  },
  {
    heading: 'Build',
    links: [
      { label: 'Developer docs', href: PATHS.developersDocs },
      { label: 'API reference',  href: PATHS.developersApi },
      { label: 'SDKs',           href: PATHS.developersSdks },
      { label: 'Changelog',      href: PATHS.developersChangelog },
      { label: 'Status',         href: PATHS.developersStatus },
      { label: 'Sandbox',        href: PATHS.developersSandbox },
    ],
  },
  {
    heading: 'Follow',
    links: [
      { label: 'LinkedIn',         href: 'https://www.linkedin.com/company/idmb' },
      { label: 'X',                href: 'https://x.com/idmb' },
      { label: 'GitHub',           href: 'https://github.com/idmb' },
      { label: 'YouTube',          href: 'https://www.youtube.com/@idmb' },
      { label: 'Engineering blog', href: PATHS.resourcesEngineering },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About IDMB',             href: PATHS.company },
      { label: 'Customers',              href: PATHS.customers },
      { label: 'Licences & regulators',  href: PATHS.trustLicences },
      { label: 'Careers',                href: PATHS.companyCareers },
      { label: 'Newsroom',               href: PATHS.companyNewsroom },
      { label: 'Contact',                href: mailto('contact') },
    ],
  },
];

export const LEGAL: FooterLink[] = [
  { label: 'Contact',       href: mailto('contact') },
  { label: 'Privacy',       href: PATHS.trustPrivacy },
  { label: 'Terms of use',  href: PATHS.trustTerms },
  { label: 'Cookies',       href: PATHS.trustCookies },
  { label: 'Accessibility', href: PATHS.trustAccessibility },
];
