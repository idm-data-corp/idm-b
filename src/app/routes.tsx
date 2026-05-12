import { lazy, Suspense } from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import MarketingLayout from './layouts/MarketingLayout';
import ProductLayout from './layouts/ProductLayout';
import LegalLayout from './layouts/LegalLayout';
import EventLayout from './layouts/EventLayout';
import ErrorLayout from './layouts/ErrorLayout';
import Home from './pages/home/Home';
import ComingSoon from './pages/_shared/ComingSoon';
import NotFound from './pages/errors/NotFound';
import ServerError from './pages/errors/ServerError';
import { ROUTES, PATHS, type LayoutKind } from '../lib/routes';

/* Real Phase-1 pages - lazy-loaded so each one is its own chunk.
   When this list reaches every URL in lib/routes.ts, the ComingSoon
   fallback can be deleted. */

/* Pillar overviews */
const BankingOverview = lazy(() => import('./pages/banking/Overview'));
const WalletsOverview = lazy(() => import('./pages/wallets/Overview'));
const DataOverview    = lazy(() => import('./pages/data/Overview'));

/* Banking sub-products */
const BankingCore       = lazy(() => import('./pages/banking/Core'));
const BankingCardsLaunchSoon = lazy(() => import('./pages/banking/CardsLaunchSoon'));
const BankingPayments   = lazy(() => import('./pages/banking/Payments'));
const BankingCompliance = lazy(() => import('./pages/banking/Compliance'));
const BankingTreasury   = lazy(() => import('./pages/banking/Treasury'));

/* Wallets sub-products */
const WalletsStored      = lazy(() => import('./pages/wallets/StoredValue'));
const WalletsCardLinked  = lazy(() => import('./pages/wallets/CardLinked'));
const WalletsMerchant    = lazy(() => import('./pages/wallets/MerchantB2B'));
const WalletsCrossBorder = lazy(() => import('./pages/wallets/CrossBorder'));

/* Data sub-products */
const DataLake      = lazy(() => import('./pages/data/Lake'));
const DataRealTime  = lazy(() => import('./pages/data/RealTime'));
const DataRisk      = lazy(() => import('./pages/data/Risk'));
const DataReporting = lazy(() => import('./pages/data/Reporting'));

/* Solutions */
const SolutionsIndex     = lazy(() => import('./pages/solutions/Index'));
const SolutionBanks      = lazy(() => import('./pages/solutions/Banks'));
const SolutionFintechs   = lazy(() => import('./pages/solutions/Fintechs'));
const SolutionMarketplaces = lazy(() => import('./pages/solutions/Marketplaces'));
const SolutionMobileMoney  = lazy(() => import('./pages/solutions/MobileMoney'));
const SolutionTelecoms   = lazy(() => import('./pages/solutions/Telecoms'));
const SolutionEmbedded   = lazy(() => import('./pages/solutions/EmbeddedFinance'));
const SolutionLenders    = lazy(() => import('./pages/solutions/Lenders'));

/* Customer stories */
const CustomersIndex = lazy(() => import('./pages/customers/Index'));
const StoryNorthbank = lazy(() => import('./pages/customers/Northbank'));
const StoryPaywave   = lazy(() => import('./pages/customers/Paywave'));
const StoryMosaic    = lazy(() => import('./pages/customers/Mosaic'));
const StoryVela      = lazy(() => import('./pages/customers/Vela'));

/* Pricing */
const PricingOverview = lazy(() => import('./pages/pricing/Overview'));
const PricingBanking  = lazy(() => import('./pages/pricing/Banking'));
const PricingWallets  = lazy(() => import('./pages/pricing/Wallets'));
const PricingData     = lazy(() => import('./pages/pricing/Data'));

/* Events */
const EventsLanding  = lazy(() => import('./pages/events/Landing'));
const EventConnect   = lazy(() => import('./pages/events/Connect2026'));
const EventWebinars  = lazy(() => import('./pages/events/Webinars'));

/* Resources */
const ResourcesHub        = lazy(() => import('./pages/resources/Hub'));
const ResourcesBlog       = lazy(() => import('./pages/resources/Blog'));
const ResourcesWhitepapers = lazy(() => import('./pages/resources/Whitepapers'));
const ResourcesEngineering = lazy(() => import('./pages/resources/Engineering'));
const ResourcesPodcasts   = lazy(() => import('./pages/resources/Podcasts'));
const ResourceArticle     = lazy(() => import('./pages/resources/Article'));

/* Trust */
const TrustCentre      = lazy(() => import('./pages/trust/TrustCentre'));
const TrustSecurity    = lazy(() => import('./pages/trust/Security'));
const TrustCompliance  = lazy(() => import('./pages/trust/Compliance'));
const TrustPrivacy     = lazy(() => import('./pages/trust/Privacy'));
const TrustTerms       = lazy(() => import('./pages/trust/Terms'));
const TrustCookies     = lazy(() => import('./pages/trust/Cookies'));
const TrustAccessibility = lazy(() => import('./pages/trust/Accessibility'));
const TrustLicences    = lazy(() => import('./pages/trust/Licences'));

/* Company */
const CompanyAbout      = lazy(() => import('./pages/company/About'));
const CompanyLeadership = lazy(() => import('./pages/company/Leadership'));
const CompanyNewsroom   = lazy(() => import('./pages/company/Newsroom'));
const CompanyContact    = lazy(() => import('./pages/company/Contact'));

/* Support */
const SupportLanding = lazy(() => import('./pages/support/Landing'));
const SupportContact = lazy(() => import('./pages/support/Contact'));

/* Map of real (non-stub) page modules. Anything in here overrides the
   default ComingSoon for that path. The `stub` flag in lib/routes.ts is
   metadata only; routing is decided here. */
const REAL_PAGES: Record<string, () => React.ReactElement> = {
  /* Pillars */
  [PATHS.banking]:                () => <Suspense fallback={null}><BankingOverview      /></Suspense>,
  [PATHS.wallets]:                () => <Suspense fallback={null}><WalletsOverview      /></Suspense>,
  [PATHS.data]:                   () => <Suspense fallback={null}><DataOverview         /></Suspense>,
  /* Banking */
  [PATHS.bankingCore]:            () => <Suspense fallback={null}><BankingCore          /></Suspense>,
  [PATHS.bankingCards]:           () => <Suspense fallback={null}><BankingCardsLaunchSoon /></Suspense>,
  [PATHS.bankingPayments]:        () => <Suspense fallback={null}><BankingPayments      /></Suspense>,
  [PATHS.bankingCompliance]:      () => <Suspense fallback={null}><BankingCompliance    /></Suspense>,
  [PATHS.bankingTreasury]:        () => <Suspense fallback={null}><BankingTreasury      /></Suspense>,
  /* Wallets */
  [PATHS.walletsStored]:          () => <Suspense fallback={null}><WalletsStored        /></Suspense>,
  [PATHS.walletsCardLinked]:      () => <Suspense fallback={null}><WalletsCardLinked    /></Suspense>,
  [PATHS.walletsMerchant]:        () => <Suspense fallback={null}><WalletsMerchant      /></Suspense>,
  [PATHS.walletsCrossBorder]:     () => <Suspense fallback={null}><WalletsCrossBorder   /></Suspense>,
  /* Data */
  [PATHS.dataLake]:               () => <Suspense fallback={null}><DataLake             /></Suspense>,
  [PATHS.dataRealTime]:           () => <Suspense fallback={null}><DataRealTime         /></Suspense>,
  [PATHS.dataRisk]:               () => <Suspense fallback={null}><DataRisk             /></Suspense>,
  [PATHS.dataReporting]:          () => <Suspense fallback={null}><DataReporting        /></Suspense>,
  /* Solutions */
  [PATHS.solutions]:              () => <Suspense fallback={null}><SolutionsIndex       /></Suspense>,
  [PATHS.solutionsBanks]:         () => <Suspense fallback={null}><SolutionBanks        /></Suspense>,
  [PATHS.solutionsFintechs]:      () => <Suspense fallback={null}><SolutionFintechs     /></Suspense>,
  [PATHS.solutionsMarketplaces]:  () => <Suspense fallback={null}><SolutionMarketplaces /></Suspense>,
  [PATHS.solutionsMobileMoney]:   () => <Suspense fallback={null}><SolutionMobileMoney  /></Suspense>,
  [PATHS.solutionsTelecoms]:      () => <Suspense fallback={null}><SolutionTelecoms     /></Suspense>,
  [PATHS.solutionsEmbedded]:      () => <Suspense fallback={null}><SolutionEmbedded     /></Suspense>,
  [PATHS.solutionsLenders]:       () => <Suspense fallback={null}><SolutionLenders      /></Suspense>,
  /* Customer stories - hidden until real customers are onboarded
  [PATHS.customers]:              () => <Suspense fallback={null}><CustomersIndex       /></Suspense>,
  [PATHS.customerNorthbank]:      () => <Suspense fallback={null}><StoryNorthbank       /></Suspense>,
  [PATHS.customerPaywave]:        () => <Suspense fallback={null}><StoryPaywave         /></Suspense>,
  [PATHS.customerMosaic]:         () => <Suspense fallback={null}><StoryMosaic          /></Suspense>,
  [PATHS.customerVela]:           () => <Suspense fallback={null}><StoryVela            /></Suspense>,
  */
  /* Pricing */
  [PATHS.pricing]:                () => <Suspense fallback={null}><PricingOverview      /></Suspense>,
  [PATHS.pricingBanking]:         () => <Suspense fallback={null}><PricingBanking       /></Suspense>,
  [PATHS.pricingWallets]:         () => <Suspense fallback={null}><PricingWallets       /></Suspense>,
  [PATHS.pricingData]:            () => <Suspense fallback={null}><PricingData          /></Suspense>,
  /* Events */
  [PATHS.events]:                 () => <Suspense fallback={null}><EventsLanding        /></Suspense>,
  [PATHS.eventsConnect]:          () => <Suspense fallback={null}><EventConnect         /></Suspense>,
  [PATHS.eventsWebinars]:         () => <Suspense fallback={null}><EventWebinars        /></Suspense>,
  /* Resources */
  [PATHS.resources]:              () => <Suspense fallback={null}><ResourcesHub         /></Suspense>,
  [PATHS.resourcesBlog]:          () => <Suspense fallback={null}><ResourcesBlog        /></Suspense>,
  [PATHS.resourcesWhitepapers]:   () => <Suspense fallback={null}><ResourcesWhitepapers /></Suspense>,
  [PATHS.resourcesEngineering]:   () => <Suspense fallback={null}><ResourcesEngineering /></Suspense>,
  [PATHS.resourcesPodcasts]:      () => <Suspense fallback={null}><ResourcesPodcasts    /></Suspense>,
  /* Trust */
  [PATHS.trust]:                  () => <Suspense fallback={null}><TrustCentre          /></Suspense>,
  [PATHS.trustSecurity]:          () => <Suspense fallback={null}><TrustSecurity        /></Suspense>,
  [PATHS.trustCompliance]:        () => <Suspense fallback={null}><TrustCompliance      /></Suspense>,
  [PATHS.trustPrivacy]:           () => <Suspense fallback={null}><TrustPrivacy         /></Suspense>,
  [PATHS.trustTerms]:             () => <Suspense fallback={null}><TrustTerms           /></Suspense>,
  [PATHS.trustCookies]:           () => <Suspense fallback={null}><TrustCookies         /></Suspense>,
  [PATHS.trustAccessibility]:     () => <Suspense fallback={null}><TrustAccessibility   /></Suspense>,
  [PATHS.trustLicences]:          () => <Suspense fallback={null}><TrustLicences        /></Suspense>,
  /* Company */
  [PATHS.company]:                () => <Suspense fallback={null}><CompanyAbout         /></Suspense>,
  [PATHS.companyLeadership]:      () => <Suspense fallback={null}><CompanyLeadership    /></Suspense>,
  [PATHS.companyNewsroom]:        () => <Suspense fallback={null}><CompanyNewsroom      /></Suspense>,
  [PATHS.companyContact]:         () => <Suspense fallback={null}><CompanyContact       /></Suspense>,
  /* Support */
  [PATHS.support]:                () => <Suspense fallback={null}><SupportLanding       /></Suspense>,
  [PATHS.supportContact]:         () => <Suspense fallback={null}><SupportContact       /></Suspense>,
};

function routesByLayout(layout: LayoutKind): RouteObject[] {
  return ROUTES
    .filter((r) => r.path !== '/' && r.layout === layout)
    .map((r) => {
      const real = REAL_PAGES[r.path];
      if (real) return { path: r.path, element: real() };
      return { path: r.path, element: <ComingSoon route={r} /> };
    });
}

const withErrorBoundary = (children: RouteObject[]): RouteObject[] => [
  { errorElement: <ServerError />, children },
];

export const router = createBrowserRouter([
  {
    element: <MarketingLayout />,
    children: withErrorBoundary([
      { index: true, element: <Home /> },
      ...routesByLayout('marketing'),
      /* Dynamic article routes - slug-based, under MarketingLayout */
      {
        path: '/resources/blog/:slug',
        element: <Suspense fallback={null}><ResourceArticle kind="blog" /></Suspense>,
      },
      {
        path: '/resources/whitepapers/:slug',
        element: <Suspense fallback={null}><ResourceArticle kind="whitepaper" /></Suspense>,
      },
      {
        path: '/resources/engineering/:slug',
        element: <Suspense fallback={null}><ResourceArticle kind="engineering" /></Suspense>,
      },
    ]),
  },
  {
    element: <ProductLayout />,
    children: withErrorBoundary(routesByLayout('product')),
  },
  {
    element: <LegalLayout />,
    children: withErrorBoundary(routesByLayout('legal')),
  },
  {
    element: <EventLayout />,
    children: withErrorBoundary(routesByLayout('event')),
  },
  {
    element: <ErrorLayout />,
    children: [{ path: '*', element: <NotFound /> }],
  },
]);
