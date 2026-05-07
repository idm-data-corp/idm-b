import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import Button from '../../../components/Button';
import { mailto } from '../../../lib/site';
import './Pricing.css';

const MODULES = [
  { name: 'Data lake & warehouse',  desc: 'Stream every ledger event into your data warehouse with strong schemas.', rate: 'Per million events streamed · tiered' },
  { name: 'Real-time dashboards',   desc: 'Sub-second analytics over live ledger and wallet activity.', rate: 'Per active seat / month' },
  { name: 'Risk & fraud signals',   desc: 'Real-time risk scores and behavioural fraud signals per transaction.', rate: 'Per transaction evaluated' },
  { name: 'Case management',        desc: 'Investigation queues, analyst workflows and decision audit trail.', rate: 'Per analyst seat / month' },
  { name: 'Regulatory reporting',   desc: 'Pre-built returns for applicable regulators, refreshed with the ledger.', rate: 'Per report run / filing period' },
  { name: 'Custom data exports',    desc: 'Scheduled exports to S3, GCS, Azure Blob or SFTP in Parquet or CSV.', rate: 'Per export job + data egress' },
];

const INCLUDED = [
  { title: 'Sandbox data access', body: 'Synthetic ledger event stream available in the sandbox at no charge.' },
  { title: 'Schema registry', body: 'Versioned Avro schemas for every event type so your pipelines never break silently.' },
  { title: 'Replay support', body: 'Re-stream historical events from any point in your ledger history.' },
  { title: 'Role-aware access', body: 'Row-level and column-level data access policies enforced at query time.' },
  { title: 'Anomaly alerts', body: 'Out-of-the-box threshold alerts on transaction volumes, fail rates and velocity.' },
  { title: 'Compliance bundles', body: 'Pre-built report templates for all regulators IDMB customers file with.' },
];

export default function PricingData() {
  const route = findRoute(PATHS.pricingData)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="pr-sub-hero" aria-label="Data pricing">
        <div className="container">
          <p className="pr-sub-eyebrow">Pricing · Data</p>
          <h1 className="pr-sub-h">Data module pricing</h1>
          <p className="pr-sub-lede">
            Event-based pricing on the data layer - pay per event streamed, per seat on real-time
            dashboards and per transaction evaluated for risk. No warehouse markup, no egress
            surprises.
          </p>
          <div className="pr-sub-hero-actions">
            <Button variant="primary" href={PATHS.developersSandbox}>Open the sandbox</Button>
            <Button variant="secondary" href={mailto('sales', 'Data pricing enquiry')}>Get a quote</Button>
          </div>
        </div>
      </section>

      <section className="pr-sub-modules" aria-labelledby="pr-data-modules-h">
        <div className="container">
          <h2 id="pr-data-modules-h" className="pr-sub-modules-h">Module pricing</h2>
          <div style={{ overflowX: 'auto' }}>
            <table className="pr-sub-table">
              <thead>
                <tr>
                  <th scope="col">Module</th>
                  <th scope="col">What it covers</th>
                  <th scope="col">Pricing model</th>
                  <th scope="col">Rate</th>
                </tr>
              </thead>
              <tbody>
                {MODULES.map((m) => (
                  <tr key={m.name}>
                    <td className="pr-sub-td-module">{m.name}</td>
                    <td className="pr-sub-td-desc">{m.desc}</td>
                    <td className="pr-sub-td-rate">{m.rate}</td>
                    <td>
                      <a className="pr-sub-td-contact" href={mailto('sales', `Data pricing - ${m.name}`)}>
                        Contact for rate
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pr-sub-included" aria-labelledby="pr-data-incl-h">
        <div className="container">
          <h2 id="pr-data-incl-h" className="pr-sub-included-h">Included with every Data plan</h2>
          <div className="pr-sub-included-grid">
            {INCLUDED.map((item) => (
              <div key={item.title} className="pr-sub-included-item">
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to build on IDMB Data?"
        subheading="Open a sandbox and start streaming ledger events today, or talk to our team for a volume-based rate card."
        primary={{ label: 'Open the sandbox', href: PATHS.developersSandbox }}
        secondary={{ label: 'Talk to sales', href: mailto('sales', 'Data pricing page') }}
        tone="dark"
      />
    </>
  );
}
