import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { LogoNorthbank, LogoPaywave, LogoMosaic, LogoVela } from '../../../components/customer-logos';
import { ArrowRight } from '../../../components/icons';
import CTASection from '../../../components/CTASection';
import Button from '../../../components/Button';
import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import { mailto } from '../../../lib/site';
import './Index.css';

type StoryCard = {
  href: string;
  customer: string;
  industry: string;
  region: string;
  pillar: 'Banking' | 'Wallets' | 'Data';
  headline: string;
  resultStat: { value: string; label: string };
  logo: React.ComponentType<{ size?: number }>;
};

const STORIES: StoryCard[] = [
  {
    href: PATHS.customerNorthbank,
    customer: 'Northbank',
    industry: 'Licensed retail bank',
    region: 'Western Europe',
    pillar: 'Banking',
    headline: 'Northbank rebuilt its core on IDMB in eleven months — with zero customer-facing outages.',
    resultStat: { value: 'USD 2.1B', label: 'in deposits migrated to the IDMB ledger' },
    logo: LogoNorthbank,
  },
  {
    href: PATHS.customerPaywave,
    customer: 'Paywave',
    industry: 'Consumer super-app',
    region: 'East Africa & Middle East',
    pillar: 'Wallets',
    headline: 'Paywave embedded IDMB Wallets into a 9-million-user super-app and cut wallet support volume by half.',
    resultStat: { value: '9.4M', label: 'wallets activated on IDMB in year one' },
    logo: LogoPaywave,
  },
  {
    href: PATHS.customerMosaic,
    customer: 'Mosaic',
    industry: 'Consumer & SMB lender',
    region: 'Southern Africa',
    pillar: 'Data',
    headline: 'Mosaic underwrites a borrower in under four minutes on IDMB Data — and lifted approval rates 38%.',
    resultStat: { value: '+38%', label: 'lift in approval rates with IDMB cashflow signals' },
    logo: LogoMosaic,
  },
  {
    href: PATHS.customerVela,
    customer: 'Vela',
    industry: 'Cross-border remittance',
    region: 'Africa, MENA & APAC',
    pillar: 'Wallets',
    headline: 'Vela runs 47 cross-border corridors on IDMB with one operations team and one ledger.',
    resultStat: { value: '47', label: 'live corridors with 99.99% availability' },
    logo: LogoVela,
  },
];

const FILTERS = ['All', 'Banking', 'Wallets', 'Data'] as const;
type Filter = typeof FILTERS[number];

export default function CustomersIndex() {
  const route = findRoute(PATHS.customers)!;
  usePageMeta({
    title: route.title,
    description: route.description,
    canonical: route.path,
  });

  const [filter, setFilter] = useState<Filter>('All');
  const filtered = useMemo(
    () => (filter === 'All' ? STORIES : STORIES.filter((s) => s.pillar === filter)),
    [filter],
  );

  return (
    <>
      <section className="ci-hero">
        <div className="container">
          <p className="ci-eyebrow">Customer stories</p>
          <h1 className="ci-h">
            Real banks, fintechs<br />and operators on IDMB
          </h1>
          <p className="ci-lede">
            How licensed banks, super-apps, lenders and remittance operators ship financial products
            on the IDMB platform — and what it takes them to stand on a regulated, real-time stack.
          </p>
        </div>
      </section>

      <section className="ci-list" aria-labelledby="ci-list-h">
        <div className="container">
          <div className="ci-toolbar">
            <h2 id="ci-list-h" className="ci-list-h">All stories</h2>
            <div className="ci-filters" role="tablist" aria-label="Filter by pillar">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={filter === f}
                  className={`ci-filter ${filter === f ? 'is-active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="ci-empty">No stories yet under <strong>{filter}</strong>. More are on the way.</p>
          ) : (
            <ul className="ci-grid">
              {filtered.map((s) => {
                const Logo = s.logo;
                return (
                  <li key={s.href}>
                    <Link className="ci-card" to={s.href}>
                      <div className="ci-card-top">
                        <span className="ci-card-pillar">{s.pillar}</span>
                        <span className="ci-card-region">{s.region}</span>
                      </div>
                      <div className="ci-card-logo"><Logo size={36} /></div>
                      <p className="ci-card-headline">{s.headline}</p>
                      <div className="ci-card-stat">
                        <p className="ci-card-stat-value">{s.resultStat.value}</p>
                        <p className="ci-card-stat-label">{s.resultStat.label}</p>
                      </div>
                      <span className="ci-card-cta">
                        Read the story <ArrowRight size={16} />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}

          <div className="ci-cta-row">
            <Button variant="tertiary" href={mailto('sales', 'Customer story enquiry')}>
              Talk to sales about your build
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        heading="Build the next IDMB story"
        subheading="Open a sandbox and try the same modules these teams used, or talk to our team about a regulated rollout."
        primary={{ label: 'Open the sandbox', href: PATHS.developersSandbox }}
        secondary={{ label: 'Talk to sales', href: mailto('sales', 'Customer-stories enquiry') }}
        tone="dark"
      />
    </>
  );
}
