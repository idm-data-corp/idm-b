import {
  ArrowRight,
  IconAIProductivity,
  IconDataMgmt,
  IconSecurity,
  IconIntegration,
  IconHybridInfra,
  IconAIModels,
  IconAnalytics,
  IconConsulting,
} from './icons';
import './EnterpriseTech.css';

const TILES = [
  { id: 'banking',        title: 'Core banking & ledger',     Icon: IconHybridInfra,     href: '#banking' },
  { id: 'wallets',        title: 'Wallets & stored value',    Icon: IconIntegration,     href: '#wallets' },
  { id: 'cards',          title: 'Card issuing & processing', Icon: IconAIModels,        href: '#cards' },
  { id: 'payments',       title: 'Payments & FX rails',       Icon: IconAIProductivity,  href: '#payments' },
  { id: 'compliance',     title: 'KYC, AML & compliance',     Icon: IconSecurity,        href: '#compliance' },
  { id: 'data',           title: 'Data lake & warehousing',   Icon: IconDataMgmt,        href: '#data' },
  { id: 'analytics',      title: 'Real-time analytics',       Icon: IconAnalytics,       href: '#analytics' },
  { id: 'implementation', title: 'Implementation services',   Icon: IconConsulting,      href: '#implementation' },
];

export default function EnterpriseTech() {
  return (
    <section id="platform" className="et" aria-labelledby="et-h">
      <div className="container">
        <div className="et-header">
          <h2 id="et-h" className="et-h">The IDMB platform</h2>
          <p className="et-lede">
            One regulated stack for the three things every modern money product needs: a real-time
            <a href="#banking"> banking core</a>, programmable <a href="#wallets">wallets</a> and
            an analytics layer that turns transactions into decisions.
          </p>
        </div>

        <ul className="et-grid">
          {TILES.map(({ id, title, Icon, href }) => (
            <li key={id} id={id}>
              <a className="et-tile" href={href}>
                <span className="et-tile-title">{title}</span>
                <Icon size={32} className="et-tile-icon" />
                <span className="et-tile-arrow">
                  <ArrowRight size={20} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
