import { Link } from 'react-router-dom';
import type { ResourceEntry } from '../../../content/resources/types';
import './Resources.css';

type Props = {
  entry: ResourceEntry;
  href: string;
};

const KIND_LABELS: Record<string, string> = {
  blog: 'Blog',
  whitepaper: 'Whitepaper',
  engineering: 'Engineering',
  podcast: 'Podcast',
};

export default function ResourceCard({ entry, href }: Props) {
  const label = KIND_LABELS[entry.kind] ?? entry.kind;
  const dateStr = new Date(entry.date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  });

  return (
    <Link className="res-card" to={href}>
      <div className="res-card-meta">
        <span className="res-card-kind">{label}</span>
        <span className="res-card-date">{dateStr}</span>
      </div>
      <p className="res-card-title">{entry.title}</p>
      <p className="res-card-excerpt">{entry.excerpt}</p>
      <div className="res-card-footer">
        <span className="res-card-author">{entry.author.name}</span>
        <span className="res-card-read">{entry.readTime}</span>
      </div>
    </Link>
  );
}
