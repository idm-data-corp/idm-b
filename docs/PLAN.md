# IDMB Site - Engineering & Product Plan

> Status: draft v1 - 2026-05-05  
> Owners: Web platform team  
> Audience: engineers, designers, content, brand, security, compliance

This plan describes how we take the current single-page IDMB marketing site to a
multi-product, multi-region, IBM-grade web property. It is the source of truth
for site architecture, page archetypes, the component system, the content model
and the phased delivery roadmap. Anything not in this plan is out of scope for
v1 unless explicitly added here.

---

## 1. Vision and non-goals

### Vision
IDMB is the regulated infrastructure layer behind modern money. The website
must communicate that with the polish of the largest enterprise brands
(IBM, Stripe, Adyen, Snowflake) and convert three audiences:

1. **Engineering buyers** - CTOs, platform leads, integration architects
2. **Business buyers** - heads of payments, product, risk, compliance, treasury
3. **Operators** - bank operations, fraud, finance, reporting

Every page either:
- Educates a buyer about a product or capability,
- Proves credibility (customers, regulators, certifications, scale numbers), or
- Drives one of the four primary actions: **Talk to sales**, **Open a sandbox**,
  **Read the docs**, or **Subscribe**.

### Non-goals (v1)
- We are **not** building any logged-in product surface inside the marketing
  app. Operator dashboards, developer consoles, sandbox, status and careers all
  live in dedicated portals (see §10).
- We are **not** introducing a CMS in v1. Content is hand-authored TypeScript
  modules, typed and reviewed in PRs. CMS migration is Phase 7.
- We are **not** going multi-language in v1. English-only, en-US default. i18n
  is Phase 4.

---

## 2. Site map

```
/                                       Home
                                        ├─ Hero
                                        ├─ Recommended for you
                                        ├─ Customer stories
                                        ├─ Event banner
                                        ├─ Platform overview tiles
                                        ├─ Training
                                        └─ Newsletter

/banking                                Banking overview
/banking/core                           Core banking & ledger
/banking/cards                          Card issuing & processing
/banking/payments                       Payments & FX rails
/banking/compliance                     KYC, AML & compliance
/banking/treasury                       Treasury & liquidity

/wallets                                Wallets overview
/wallets/stored-value                   Stored-value accounts
/wallets/card-linked                    Card-linked wallets
/wallets/merchant-b2b                   Merchant & B2B wallets
/wallets/cross-border                   Cross-border wallets

/data                                   Data analytics overview
/data/lake                              Data lake & warehouse
/data/real-time                         Real-time analytics
/data/risk                              Risk & fraud
/data/reporting                         Regulatory reporting

/solutions                              Solutions index
/solutions/banks                        For licensed banks
/solutions/fintechs                     For fintechs & neobanks
/solutions/marketplaces                 For marketplaces & super-apps
/solutions/mobile-money                 For mobile-money operators
/solutions/telecoms                     For telecom operators
/solutions/embedded-finance             For embedded finance platforms
/solutions/lenders                      For lenders & credit products

/customers                              Customer stories index
/customers/northbank                    Story (in-depth)
/customers/paywave
/customers/mosaic
/customers/vela

/developers                             Developer landing
/developers/docs            → portal    (external - developers.idmb.com)
/developers/api             → portal    (external)
/developers/sdks            → portal    (external)
/developers/sandbox         → portal    (external)
/developers/changelog       → portal    (external)
/developers/status          → portal    (external - status.idmb.com)

/pricing                                Pricing overview
/pricing/banking                        Banking pricing
/pricing/wallets                        Wallets pricing
/pricing/data                           Data pricing

/events                                 Events landing
/events/connect-2026                    Flagship summit
/events/webinars                        Webinar series

/resources                              Resources hub
/resources/blog
/resources/blog/[slug]                  Blog post
/resources/whitepapers
/resources/whitepapers/[slug]
/resources/podcasts
/resources/engineering                  Engineering blog

/company                                About IDMB
/company/leadership
/company/newsroom
/company/newsroom/[slug]                Press release / news article
/company/careers            → portal    (external - careers.idmb.com)
/company/contact

/trust                                  Trust center landing
/trust/security                         Security overview
/trust/compliance                       Compliance & certifications
/trust/privacy                          Privacy statement
/trust/terms                            Terms of use
/trust/cookies                          Cookie statement
/trust/accessibility                    Accessibility statement
/trust/licences                         Licences & regulators

/support                                Support landing
/support/contact

/404                                    Not found
/500                                    Error
/sitemap.xml                            Auto-generated
/robots.txt                             Static (already exists)
```

Total static routes at v1 target: **~70 pages** (excluding dynamic
`/blog/[slug]`, `/whitepapers/[slug]`, `/newsroom/[slug]`, `/customers/[slug]`).

---

## 3. Information architecture

### Primary nav (mega menu - already built)
`Banking · Wallets · Data · Developers · Pricing · Connect 2026`

Each mega menu has 4 categories × ~3 items → ~12 entry points per pillar.
Categories below are the canonical structure used by the mega menu, the footer
and the URL plan; if any change here, all three must change.

### Secondary nav (in-page sticky sub-nav on product pages)
On every product overview page (`/banking`, `/wallets`, `/data`) we surface a
sticky 40px sub-nav directly below the global header. It lists the sub-pages of
that pillar so users can move within a topic without going back to the global
nav. This is the IBM pattern (e.g. ibm.com/products/watsonx-orchestrate).

### Footer (already built)
Four columns: **Platform · Build · Follow · Company**. Plus legal row. Footer
uses the same canonical link data as the header - both are generated from
`src/lib/nav.ts`.

### Breadcrumbs
Every non-home page renders a `BreadcrumbNav` directly under the sub-nav.
Breadcrumb data is derived from the route tree, not hand-authored.

---

## 4. Page archetypes

We standardise on a small number of archetypes. Every page picks one and
composes ordered modules. New page types require sign-off; we don't grow the
list unconstrained.

### A. Marketing landing (Home)
Hero · Recommended · Customer stories · Event · Platform tiles · Training ·
Newsletter

### B. Pillar overview (Banking / Wallets / Data)
Hero · Sub-nav · Sub-product grid · Customer story (single) · Architecture
diagram · Outcomes (stat block) · CTA section · Newsletter

### C. Sub-product page (e.g. Card issuing)
Hero (with sub-nav) · Capability grid · How it works diagram · Code sample (for
dev-facing products) · Customer quote · Pricing teaser · Related products ·
CTA section

### D. Solution page (industry vertical)
Hero · Pain-point block · Outcomes stat row · Stack diagram (which products) ·
Customer story · Quote · CTA section

### E. Customer story (long form)
Hero with logo + summary stats · Long body (problem · approach · result) ·
Quote pull-out · Stack list (products used) · Related stories · CTA

### F. Pricing
Hero · Plan comparison table · Usage calculator · FAQ · CTA

### G. Resource list (Blog, Whitepapers, Podcasts)
Hero · Filter bar · Card grid · Pagination · Newsletter

### H. Resource article (Blog post, Press release, Whitepaper)
Article hero · Long body (prose, code, callouts) · Author · Related · CTA

### I. Legal
Narrow column · Last-updated · TOC · Long body · Contact for questions

### J. Trust centre
Hero · Cert grid · Security pillars · Compliance map · Reports request · CTA

### K. Event
Hero · Agenda · Speakers · Venue · Register · Sponsors · FAQ

### L. Developers landing (marketing-side)
Hero (with embedded sandbox CTA) · Quickstart card · API tour · SDK list ·
Reference architecture · CTA into portal

### M. Error pages (404 / 500)
Compact layout with helpful links and a search.

---

## 5. Component system

We're building an internal Carbon-style component system specific to IDMB,
not adopting Carbon directly (we want full design control). Every component
ships with: TypeScript types, accessibility annotations, focus management,
a snapshot test, and a Storybook entry (Phase 1).

### Primitives (Phase 0–1)
- `Button` - variants: primary / secondary / tertiary / ghost / danger; sizes:
  sm / md / lg; states: default / hover / focus / disabled / loading
- `IconButton`
- `Link` - internal vs external (auto `target="_blank"` + `noreferrer`)
- `TextInput`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Toggle`
- `Tabs`
- `Accordion`
- `Tooltip`
- `Modal`
- `Toast` (notification system)
- `Badge`, `Tag`, `Chip`
- `Skeleton`, `Spinner`
- `Pagination`
- `Breadcrumb`

### Marketing modules (Phase 1)
- `Hero` - `MarketingHero`, `ProductHero`, `ArticleHero`, `EventHero`
- `SectionHeading`
- `FeatureGrid` (2/3/4 col)
- `StatBlock`
- `CustomerStoryCard`
- `LogoStrip`
- `QuoteCard`
- `PricingTable` & `PricingCalculator`
- `CTASection`
- `NewsletterSignup` (already partially built)
- `CodeBlock` with copy button
- `APIEndpointCard` (for /developers landing)
- `Stepper` (used in How-it-works)
- `ComparisonTable`
- `ResourceCard` (for blog / whitepapers / press)

### Layout components (Phase 0)
- `Container` - already a class, formalise as a component
- `Grid` & `Stack`
- `SectionDivider`

### Navigation (already built / to extend)
- `Header`, `Footer`, `MegaMenu`, `HeaderTray`
- `SubNav` - sticky in-page nav under the global header on pillar/sub pages
- `BreadcrumbNav`
- `OnThisPage` - right-rail TOC for long pages (legal, articles)

### Standards every component must meet
- Keyboard navigable; visible focus styles (`:focus-visible`)
- ARIA roles only where needed; otherwise rely on semantic HTML
- Color contrast ≥ WCAG 2.2 AA (4.5:1 body, 3:1 large text/UI)
- Reduced-motion fallback (no parallax / autoplay video by default)
- Lazy-render below-the-fold via `IntersectionObserver` or
  `content-visibility: auto`
- Server-renderable (no top-level `window` access)
- Type-safe public API; no `any`

---

## 6. Tech stack & directory structure

### Stack
- **React 18** + **TypeScript 5** (current)
- **Vite 5** (current) - extended with `vite-plugin-ssr` or migrate to
  **React Router 7** (which has a static export mode) in Phase 5
- **React Router v7** (replacing the implicit one-page setup) - Phase 0
- **CSS modules** (per-component `.css` files alongside `.tsx` - current
  pattern, keep)
- **Vanilla CSS custom properties** for tokens (current)
- **Zod** for content schema validation (Phase 1)
- **Vitest** + **React Testing Library** for unit (Phase 1)
- **Playwright** for end-to-end + visual regression (Phase 9)
- **axe-core** for automated accessibility checks (Phase 9)
- **Lighthouse CI** in CI (Phase 9)
- **Storybook 8** for component review (Phase 1)
- **MDX** as the long-form content authoring format (Phase 3)
- **Sanity** as the headless CMS for resources (Phase 7) - decision deferred

### Target directory structure (post Phase 0 refactor)

```
idmb-n/
  PLAN.md                       (this file)
  README.md
  package.json
  vite.config.ts
  tsconfig.*.json
  index.html                    (SPA shell + static SEO fallback)
  public/
    logo.svg                    (brand mark - color)
    logo_gray.svg               (brand mark - gray, used as favicon)
    favicon.svg                 (in-page wordmark, kept for back-compat)
    og-image.svg                (default Open Graph image)
    site.webmanifest
    robots.txt
    sitemap.xml                 (generated; checked in for crawlers)
    .well-known/
  src/
    main.tsx                    (mounts <App /> with router)
    app/
      App.tsx                   (router + global providers)
      routes.tsx                (route tree - single source of truth)
      router.ts                 (createBrowserRouter / createStaticRouter)
      providers/
        AnalyticsProvider.tsx
        ToastProvider.tsx
        ConsentProvider.tsx     (cookie/consent state)
      layouts/
        MarketingLayout.tsx
        ProductLayout.tsx       (marketing + sub-nav + breadcrumbs)
        LegalLayout.tsx         (narrow column + on-this-page)
        ArticleLayout.tsx
        EventLayout.tsx
        ErrorLayout.tsx
      pages/
        home/Home.tsx
        banking/
          Overview.tsx
          Core.tsx
          Cards.tsx
          Payments.tsx
          Compliance.tsx
          Treasury.tsx
        wallets/...
        data/...
        solutions/...
        customers/
          index.tsx
          northbank.tsx
          ...
        developers/
          Landing.tsx
        pricing/
          Overview.tsx
          Banking.tsx
          Wallets.tsx
          Data.tsx
        events/
          Landing.tsx
          Connect2026.tsx
          Webinars.tsx
        resources/
          Hub.tsx
          Blog.tsx
          BlogPost.tsx
          Whitepapers.tsx
          Whitepaper.tsx
          Podcasts.tsx
          Engineering.tsx
        company/
          About.tsx
          Leadership.tsx
          Newsroom.tsx
          NewsroomItem.tsx
          Contact.tsx
        trust/
          Centre.tsx
          Security.tsx
          Compliance.tsx
          Privacy.tsx
          Terms.tsx
          Cookies.tsx
          Accessibility.tsx
          Licences.tsx
        support/
          Landing.tsx
          Contact.tsx
        errors/
          NotFound.tsx
          ServerError.tsx
    components/
      Header/
      Footer/
      MegaMenu/
      SubNav/
      Breadcrumb/
      Hero/
      Button/
      Link/
      ... (see §5)
    content/
      home.ts
      banking/
        overview.ts
        core.ts
        cards.ts
        ...
      customers/
        northbank.ts
        ...
      mega-menu.ts             (already exists; lift into here)
      footer.ts
      site.ts                  (global brand strings, contact emails, URLs)
    lib/
      seo.ts                   (Helmet helpers; per-page <title>/<meta>)
      structured-data.ts       (JSON-LD builders)
      nav.ts                   (typed nav data - single source for header,
                                footer, sitemap)
      links.ts                 (portal URLs + helpers)
      analytics.ts
      consent.ts
      slug.ts
      money.ts
    hooks/
      useMediaQuery.ts
      useFocusTrap.ts
      useEscape.ts
      useScrollSpy.ts
      useIntersection.ts
    styles/
      tokens.css               (split out of global.css)
      global.css
      utilities.css
    types/
      content.d.ts             (Zod-derived content types)
  scripts/
    generate-sitemap.ts        (run at build; emits public/sitemap.xml)
    generate-og-images.ts      (per-page OG image - Phase 5)
  tests/
    e2e/
    visual/
```

### Code-splitting policy
- Every page is its own chunk (lazy-loaded).
- Mega menu content (`megaMenuContent.ts`) stays bundled with the header - it's
  needed before any nav click and it's tiny.
- Heavy modules (PricingCalculator, code playgrounds, charts) are dynamically
  imported on first interaction.

---

## 7. Routing

- Adopt **React Router v7** in data-router mode (`createBrowserRouter`).
- Single `routes.tsx` file that exports the tree. Lazy via `lazy()` per route.
- Each route exports a typed `meta` object: `{ title, description, og, jsonld,
  noindex }`. The `MarketingLayout`/`ProductLayout` pulls `meta` from
  `useMatches()` and renders into `<head>` via a Helmet replacement (the React
  19 native `<title>`/`<meta>` is preferred).
- 404: catch-all route renders `NotFound` with status 404 (when SSG, the static
  404.html is emitted).
- Trailing slashes: redirect `/foo/` → `/foo` at the edge.
- All in-app navigation uses `<Link>`; never `<a href="/...">`.

---

## 8. Layouts

- **MarketingLayout** - `<Header /> + <main /> + <Footer /> + <CookieBanner /> +
  <ChatWidget />`. Used by Home, Solutions, Customers index, Resources hub,
  Trust centre.
- **ProductLayout** - MarketingLayout + sticky `<SubNav />` + `<BreadcrumbNav />`.
  Used by every page under `/banking/*`, `/wallets/*`, `/data/*`.
- **LegalLayout** - narrow column (max-width 720px) with right-rail
  `<OnThisPage />`. Used by `/trust/privacy`, `/trust/terms`, etc.
- **ArticleLayout** - for blog posts and press releases. Same narrow column,
  with author block + related-posts footer.
- **EventLayout** - full-bleed hero, sticky agenda nav, registration footer.
- **ErrorLayout** - minimal header (logo only) + centred message + global search.

---

## 9. Content model

### v1 - typed TypeScript modules
Every page has a colocated content module that exports a typed object validated
by Zod at build time. Pages are dumb renderers that take content as props.

Example shape:

```ts
// src/content/banking/cards.ts
export const cardsContent: ProductPageContent = {
  meta: {
    title: 'Card issuing & processing - IDMB Banking',
    description: 'Issue branded debit, credit and prepaid cards on Visa and Mastercard rails in days.',
    canonical: '/banking/cards',
  },
  hero: { ... },
  capabilities: [ ... ],
  diagram: { ... },
  customer: { quoteId: 'northbank-cards-quote' },
  related: ['/banking/payments', '/banking/compliance'],
  cta: { ... },
};
```

Zod validates structure (required fields, lengths, link shapes) at build -
broken content fails CI, never reaches prod.

### v3 - MDX
For long-form (blog posts, whitepapers, engineering articles): MDX with a
constrained component palette (`<Heading>`, `<Callout>`, `<CodeBlock>`,
`<Image>`, `<Quote>`, `<Stat>`).

### v7 - Headless CMS
Move `/resources/*` content to Sanity (proposed). The marketing pages stay in
the repo so engineers and designers can iterate without an editor handoff.

---

## 10. Portals (external apps)

The marketing site **never** ships logged-in product UI. The following portals
live as separate apps on dedicated subdomains and are linked from the
marketing site. Each one has its own repo, deploy, on-call rotation and
release cadence.

| Portal               | URL                            | Owner team             | Auth        |
|----------------------|--------------------------------|------------------------|-------------|
| Developer portal     | `developers.idmb.com`          | DevEx                  | Optional    |
| Customer dashboard   | `dashboard.idmb.com`           | Platform UI            | Required    |
| Status page          | `status.idmb.com`              | SRE                    | Public      |
| Careers              | `careers.idmb.com`             | People (3rd party ATS) | Public      |
| Investors            | `investors.idmb.com`           | Finance                | Public      |
| Trust documents      | `trust.idmb.com` (proposed)    | Security               | Gated       |

### Outbound link contract
Every link to a portal:
- Goes via `lib/links.ts` (single source for portal URLs across env)
- Renders with `target="_blank"` + `rel="noopener noreferrer"`
- Carries a `data-portal="<name>"` attribute for analytics
- Shows the `ArrowUpRight` icon (we already have this in `icons.tsx`)

The `lib/links.ts` module reads from `import.meta.env` so we point at
`developers-staging.idmb.com` from the staging deploy and `developers.idmb.com`
from prod. No URLs hard-coded in components.

---

## 11. SEO & metadata

Every page must ship:

- `<title>` - unique, ≤ 60 chars
- `<meta name="description">` - unique, 140–160 chars
- Canonical link
- Open Graph: `og:title`, `og:description`, `og:image` (1200×630),
  `og:url`, `og:type`
- Twitter card: `summary_large_image`
- JSON-LD: `WebPage` + `BreadcrumbList` minimum; `Product` for sub-product
  pages; `Article` for blog/news; `Event` for events; `FAQPage` where
  applicable; `Organization` once (in `index.html`, already present)
- `lang="en"` and `dir="ltr"` on `<html>` (already set)

### Sitemap
`scripts/generate-sitemap.ts` runs at build, walks the route tree, emits
`public/sitemap.xml` with `lastmod` from git metadata. Dynamic routes
(`/blog/[slug]`) are enumerated from the content directory (later, the CMS).

### OG images
v1: hand-authored SVG per page section (banking/wallets/data have one each).
v5: `scripts/generate-og-images.ts` uses Satori + Resvg to render PNG OG
images per page using a templated React component, baked into `public/og/`.

### Static fallback
`index.html` already ships a meaningful static fallback inside `#root`. When we
move to SSG (Phase 5) the fallback is replaced by full pre-rendered HTML for
crawlers and link previews.

---

## 12. Performance budgets

Per-page budgets - measured by Lighthouse CI on every PR against a
representative set of pages (Home, /banking, /banking/cards, /pricing,
/customers/northbank, /trust/privacy):

| Metric                          | Budget           |
|---------------------------------|------------------|
| Performance score               | ≥ 95             |
| Largest Contentful Paint        | ≤ 2.0s on 4G     |
| Cumulative Layout Shift         | ≤ 0.05           |
| Total JS shipped (initial)      | ≤ 96kB gzipped   |
| Total CSS shipped (initial)     | ≤ 20kB gzipped   |
| Image bytes per page            | ≤ 250kB          |
| Number of network requests      | ≤ 30             |
| Time to Interactive             | ≤ 3.0s on 4G     |

Tactics:
- Per-route code splitting (already in place on Home; extend to all pages)
- Inline critical CSS for above-the-fold modules in SSG output (Phase 5)
- Self-host fonts (replace Google Fonts CDN) - Phase 1
- Use `srcset` + `<picture>` for hero imagery; AVIF + WebP fallbacks
- Defer the chat widget and cookie banner until idle (already in place)
- `content-visibility: auto` on offscreen sections (already in place)

The 96 kB shell-JS budget reflects React + ReactDOM + React Router 7 + the
MDX runtime + IDMB bootstrap. It's enforced on every `npm run build` by
`scripts/check-bundle-size.ts`, which fails the build on a shell over-run
and warns on individual lazy chunks above 40 kB JS / 8 kB CSS.

---

## 13. Accessibility standards

Target: **WCAG 2.2 AA** across the site. Audited per release with axe and
manually with VoiceOver, NVDA and keyboard-only.

Hard rules:
- Single `<h1>` per page; logical heading hierarchy below it
- Skip-to-content link on every page (already present)
- Visible `:focus-visible` ring on every interactive element
- Form fields paired with `<label>`; errors announced via `aria-describedby`
- Color is never the only indicator of state
- Respect `prefers-reduced-motion` (already wired in global.css)
- All images have `alt`; decorative images have `alt=""` or `aria-hidden`
- Mega menu and trays trap focus and restore on close
- Modals trap focus, restore on close, close on Esc

Tooling: axe-core in dev (toast on violation in dev mode only); axe-core in
Playwright tests; manual screen-reader pass on every new page archetype.

---

## 14. Internationalisation (Phase 4)

- Language strategy: `en-US` is canonical. Add `en-GB` and `fr-FR` first
  (largest customer footprint after US/UK).
- URL strategy: subdirectory (`/fr/banking`) - keeps a single domain for SEO
  authority. Default locale not prefixed.
- Translation files: ICU MessageFormat in JSON, one file per locale per route.
  Source-language strings extracted from JSX with `formatjs`.
- `Globe` icon in the header opens a locale switcher (already wired as a
  region picker - extend to also pick language).
- `hreflang` tags emitted per page from the route tree.

---

## 15. Analytics & consent

- **Privacy-first analytics**: Plausible or PostHog (decision deferred). No
  third-party trackers without explicit consent.
- **Consent**: cookie banner already present; reorganise around four
  categories (Required / Functional / Analytics / Marketing). Until consent is
  given, only Required cookies set.
- **Events**: capture page view, primary CTA clicks, mega menu opens,
  newsletter signup, sandbox-launch click, contact-sales click. Schema in
  `lib/analytics.ts` so adding events is type-safe.
- **Outbound portal clicks**: every link to `developers.idmb.com`,
  `dashboard.idmb.com`, etc. fires an `outbound_portal_click` event with the
  portal name (via the `data-portal` attribute).

---

## 16. Roadmap & phasing

Each phase is a shippable, reviewable milestone - not a flag day.

### Phase 0 - Foundations (this PR's successor)
**Goal**: introduce routing, layouts and a place for every future page.
- [ ] Add React Router v7
- [ ] Restructure `src/` into `app/`, `components/`, `lib/`, `content/`
- [ ] Lift current home into `app/pages/home/Home.tsx` under `MarketingLayout`
- [ ] Create stub routes for every URL in §2 with a "coming soon" hero
- [ ] Add `lib/nav.ts`, `lib/links.ts`, `lib/seo.ts`
- [ ] Add `404` and `500` error pages
- [ ] Update mega menu, footer and sub-nav to read from `lib/nav.ts`
- [ ] Update sitemap.xml generation
**Acceptance**: every URL in §2 returns 200, has unique `<title>`, and links
back to /. Existing home page is visually unchanged.

### Phase 1 - Core marketing surface
**Goal**: real content for every pillar overview and every sub-product.
- [ ] Build `Hero` + `ProductHero` + `Pillar overview` archetype
- [ ] Author content + ship pages for `/banking`, `/wallets`, `/data` and all
      sub-products (15 pages)
- [ ] Build the shared modules: `FeatureGrid`, `StatBlock`, `CTASection`,
      `QuoteCard`, `CodeBlock`
- [ ] Self-host fonts; remove Google Fonts CDN
- [ ] Storybook 8 with primary primitives + marketing modules
**Acceptance**: Lighthouse perf ≥ 95 on `/banking` and `/banking/cards`;
contributors can author a new sub-product page in a day.

### Phase 2 - Solutions, customers, events, pricing
- [ ] `/solutions/*` (7 pages) - solution archetype
- [ ] `/customers/*` (index + 4 stories) - long-form story archetype
- [ ] `/pricing` + 3 sub-pages - pricing table + calculator (calculator is
      lazy-loaded)
- [ ] `/events`, `/events/connect-2026`, `/events/webinars`

### Phase 3 - Resources & MDX
- [ ] MDX pipeline + constrained component palette
- [ ] `/resources/blog` + a seed of 6 articles
- [ ] `/resources/whitepapers` + 3 seed PDFs
- [ ] `/resources/engineering` + 4 seed posts
- [ ] RSS feed for blog and engineering

### Phase 4 - Trust + legal + company
- [ ] `/trust/*` (8 pages) - Trust centre archetype + Legal archetype
- [ ] `/company/*` - About, Leadership, Newsroom (+ press release archetype),
      Contact

### Phase 5 - Pre-rendering / SSG
- [ ] Migrate to `vite-plugin-ssr` (or React Router 7's static export), pre-render
      every static route
- [ ] Per-page OG images generated at build (Satori + Resvg)
- [ ] Edge cache headers + sitemap submission

### Phase 6 - Portals integration
- [ ] `lib/links.ts` typed against env (`VITE_PORTAL_DEVELOPERS`, etc.)
- [ ] `Link` component handles portal links uniformly (icon + analytics)
- [ ] Pre-launch checks of every portal link in Playwright (HEAD request 200)

### Phase 7 - CMS
- [ ] Stand up Sanity studio
- [ ] Migrate `/resources/*` content
- [ ] Preview deploys for unpublished content
- [ ] Editor roles (Author / Reviewer / Publisher)

### Phase 8 - i18n
- [ ] formatjs extraction + ICU messages in JSON
- [ ] `en-GB` + `fr-FR` translations seeded
- [ ] `hreflang` and locale switcher live

### Phase 9 - Quality gates
- [ ] Lighthouse CI on PRs against a fixed page set
- [x] Axe CI on PRs — `tests/e2e/a11y.spec.ts` runs axe-core (WCAG 2.1 AA tags)
      against 9 representative pages; fails on `serious` / `critical`
      violations. Run with `npm run test:a11y`.
- [x] Playwright e2e smoke + visual regression — `tests/e2e/smoke.spec.ts`
      (page titles, primary CTAs, mega menu, footer, 404),
      `tests/e2e/mobile-drawer.spec.ts` (hamburger + accordion),
      `tests/visual/regression.spec.ts` (full-page screenshots at desktop
      + iPhone 14 widths). 68 tests across 4 spec files. Run with
      `npm run test:e2e` and `npm run test:visual`. Browser binaries are
      installed once via `npx playwright install chromium`.
- [x] Bundle-size CI guard against §12 budgets — `scripts/check-bundle-size.ts`
      runs as the final step of `npm run build`. Fails on shell over-run
      (96 kB JS / 20 kB CSS), warns on lazy-chunk over-run (40 kB JS /
      8 kB CSS).

---

## 17. Open decisions

These need an owner and a date before Phase 1 starts.

| ID  | Question                                                             | Owner    | Decide by |
|-----|----------------------------------------------------------------------|----------|-----------|
| D-1 | Stick with Vite + vite-plugin-ssr, or move to React Router 7 SSR?   | Web      | 2026-05-19 |
| D-2 | CMS choice for Phase 7 (Sanity vs Contentful vs DatoCMS)            | Content  | 2026-06-30 |
| D-3 | Analytics tool (Plausible vs PostHog vs first-party only)           | Privacy  | 2026-05-19 |
| D-4 | Is there a brand video on the home hero from Phase 1, or text only? | Brand    | 2026-05-12 |
| D-5 | Do we ship a chat (Intercom-style) or stay with mailto?             | Sales    | 2026-05-26 |
| D-6 | Pricing surface (true public pricing vs "Talk to sales")            | Product  | 2026-05-26 |
| D-7 | Trust/SOC report distribution (gated portal vs request-by-form)     | Security | 2026-06-09 |

---

## 18. What we are *not* changing in Phase 0

So the refactor stays low-risk and reviewable:

- The visual design of the existing home page modules
- The brand palette (Carbon-derived blue + grays)
- The lowercase `idmb` wordmark in the header/footer
- The gray favicon
- The mega menu interaction model and content (already shipped)
- The fonts (IBM Plex Sans, served from Google Fonts) - replaced in Phase 1
- The cookie banner and chat widget (kept as-is, just moved into
  `MarketingLayout`)

Anything in this section moves to its own follow-up issue when we touch it.
