import { NavLink } from 'react-router-dom';
import './SubNav.css';

type Props = {
  pillar: string;
  items: { label: string; href: string }[];
};

export default function SubNav({ pillar, items }: Props) {
  return (
    <nav className="snav" aria-label={`${pillar} sub-navigation`}>
      <div className="snav-inner">
        <span className="snav-pillar">{pillar}</span>
        <ul className="snav-list">
          {items.map((it) => (
            <li key={it.href}>
              <NavLink
                to={it.href}
                end
                className={({ isActive }) =>
                  `snav-link ${isActive ? 'is-active' : ''}`
                }
              >
                {it.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
