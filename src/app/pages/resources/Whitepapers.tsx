import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import CTASection from '../../../components/CTASection';
import Button from '../../../components/Button';
import { ArrowRight } from '../../../components/icons';
import { mailto } from '../../../lib/site';
import { WHITEPAPERS } from '../../../content/resources/whitepapers/index';
import './Resources.css';
import './Whitepapers.css';

export default function WhitepapersIndex() {
  const route = findRoute(PATHS.resourcesWhitepapers)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="res-hero" aria-label="Whitepapers">
        <div className="container">
          <p className="res-eyebrow">Whitepapers</p>
          <h1 className="res-h">In-depth research and technical guides</h1>
          <p className="res-sub">
            Long-form guides on banking architecture, compliance, payments infrastructure and
            data analytics - written by the IDMB team for builders and operators.
          </p>
        </div>
      </section>

      <section className="res-list" aria-labelledby="res-wp-list-h">
        <div className="container">
          <h2 id="res-wp-list-h" className="res-section-h">All whitepapers</h2>
          <ul className="wp-list">
            {WHITEPAPERS.map((e) => (
              <li key={e.slug} className="wp-item">
                <div className="wp-item-text">
                  <p className="wp-item-date">
                    {new Date(e.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    {' · '}{e.readTime}
                  </p>
                  <strong className="wp-item-title">{e.title}</strong>
                  <p className="wp-item-excerpt">{e.excerpt}</p>
                  <p className="wp-item-author">{e.author.name} · {e.author.role}</p>
                  <div className="wp-item-actions">
                    <Button variant="secondary" href={`/resources/whitepapers/${e.slug}`} hideArrow>
                      Read online
                    </Button>
                    {e.pdfUrl && (
                      <a className="wp-item-pdf" href={mailto('sales', `Whitepaper PDF request - ${e.title}`)}>
                        Request PDF <ArrowRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Stay ahead of the curve"
        subheading="New whitepapers published quarterly. Subscribe to get them first."
        primary={{ label: 'Subscribe', href: mailto('newsletter', 'Whitepapers newsletter') }}
        secondary={{ label: 'Engineering blog', href: PATHS.resourcesEngineering }}
        tone="dark"
      />
    </>
  );
}
