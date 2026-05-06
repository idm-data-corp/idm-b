import { ArrowRight } from './icons';
import './AnnouncementBar.css';

export default function AnnouncementBar() {
  return (
    <div className="abar" role="region" aria-label="Announcement">
      <div className="abar-inner">
        <strong className="abar-title">IDMB Connect 2026 is almost here</strong>
        <a className="abar-link" href="#connect-2026">
          Reserve your seat for the banking infrastructure summit
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
