/* Shared types for all resource content (blog, whitepapers, engineering). */

export type ResourceKind = 'blog' | 'whitepaper' | 'engineering' | 'podcast';

export type Author = {
  name: string;
  role: string;
};

export type ArticleMeta = {
  kind: ResourceKind;
  slug: string;
  title: string;
  date: string;           // ISO 8601 date string, e.g. "2026-03-15"
  author: Author;
  excerpt: string;
  readTime: string;       // e.g. "8 min read"
  tags: string[];
  /* Whitepapers only */
  pdfUrl?: string;
};

export type ResourceEntry = ArticleMeta & {
  /** Lazy-load the MDX component. */
  load: () => Promise<{ default: React.ComponentType; meta: ArticleMeta }>;
};
