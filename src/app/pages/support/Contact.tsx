import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import { mailto } from '../../../lib/site';
import './Support.css';

const CHANNELS = [
  {
    label: 'Production incident (P1/P2)',
    desc: '24/7 on-call response. For active incidents affecting live customer operations.',
    href: mailto('oncall', 'Production incident'),
    cta: 'Page on-call',
  },
  {
    label: 'Technical support',
    desc: 'Integration questions, SDK issues and platform behaviour queries. Business hours.',
    href: mailto('support', 'Technical support request'),
    cta: 'Email technical support',
  },
  {
    label: 'Account & billing',
    desc: 'Invoices, contract queries and account access issues.',
    href: mailto('accounts', 'Account and billing inquiry'),
    cta: 'Email accounts team',
  },
];

const PRIORITIES = [
  { p: 'P1', label: 'Critical', desc: 'Core ledger, payments or card processing unavailable. Production traffic impacted.', response: '30 min' },
  { p: 'P2', label: 'High', desc: 'Degraded performance on production systems. Workaround available.', response: '2 hours' },
  { p: 'P3', label: 'Medium', desc: 'Non-critical production issue or pre-production blocker.', response: '1 business day' },
  { p: 'P4', label: 'Low', desc: 'General questions, documentation feedback, feature requests.', response: '3 business days' },
];

export default function SupportContact() {
  const route = findRoute(PATHS.supportContact)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="sup-hero">
        <div className="container">
          <p className="sup-eyebrow">Support</p>
          <h1 className="sup-h">Contact support</h1>
          <p className="sup-sub">
            Use the right channel for your issue and we will route it to the appropriate team.
          </p>
        </div>
      </section>

      <section className="sup-contact">
        <div className="container sup-contact-grid">
          <div>
            <h2 className="sup-section-h">Support channels</h2>
            {CHANNELS.map((c) => (
              <div key={c.label} className="sup-contact-row">
                <strong>{c.label}</strong>
                <p>{c.desc}</p>
                <a href={c.href}>{c.cta} →</a>
              </div>
            ))}
          </div>

          <aside className="sup-contact-info">
            <h3>Response time targets</h3>
            {PRIORITIES.map((pr) => (
              <div key={pr.p} className="sup-contact-row">
                <strong>{pr.p} — {pr.label}</strong>
                <p>{pr.desc}</p>
                <p style={{ marginTop: 4, color: 'var(--c-link)', fontWeight: 600, fontSize: '0.875rem' }}>
                  Initial response: {pr.response}
                </p>
              </div>
            ))}
            <div className="sup-contact-row" style={{ marginTop: 24 }}>
              <strong>Platform status</strong>
              <p>Check live and historical availability at the IDMB Status page.</p>
              <a href={PATHS.developersStatus}>View status →</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
