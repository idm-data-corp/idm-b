/* Inline SVG wordmarks for the four reference customers used across the site
   (home SmarterBusiness section, customer-story pages, sub-product quotes).
   Each takes an optional `size` prop (logo height in px) - width scales
   to maintain the wordmark proportions. */

type LogoProps = { size?: number };

export function LogoNorthbank({ size = 28 }: LogoProps) {
  const w = (size * 130) / 32;
  return (
    <svg width={w} height={size} viewBox="0 0 130 32" aria-label="Northbank">
      <g transform="translate(6,6)">
        <path d="M0 20 L 0 0 L 4 0 L 14 14 L 14 0 L 18 0 L 18 20 L 14 20 L 4 6 L 4 20 Z" fill="currentColor" />
      </g>
      <text x="32" y="22" fontFamily="'IBM Plex Sans',sans-serif" fontSize="16" fontWeight="700" fill="currentColor">
        Northbank
      </text>
    </svg>
  );
}

export function LogoPaywave({ size = 28 }: LogoProps) {
  const w = (size * 130) / 32;
  return (
    <svg width={w} height={size} viewBox="0 0 130 32" aria-label="Paywave">
      <g transform="translate(6,6)" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d="M0 16 c 4 -10 8 -10 12 0 s 8 10 12 0" />
      </g>
      <text x="36" y="22" fontFamily="'IBM Plex Sans',sans-serif" fontSize="16" fontWeight="700" fill="currentColor">
        paywave
      </text>
    </svg>
  );
}

export function LogoMosaic({ size = 28 }: LogoProps) {
  const w = (size * 130) / 32;
  return (
    <svg width={w} height={size} viewBox="0 0 130 32" aria-label="Mosaic">
      <g transform="translate(6,6)" fill="currentColor">
        <rect x="0" y="0" width="6" height="6" rx="1" />
        <rect x="8" y="0" width="6" height="6" rx="1" opacity=".7" />
        <rect x="0" y="8" width="6" height="6" rx="1" opacity=".7" />
        <rect x="8" y="8" width="6" height="6" rx="1" />
        <rect x="0" y="16" width="14" height="2" rx="1" opacity=".4" />
      </g>
      <text x="28" y="22" fontFamily="serif" fontStyle="italic" fontSize="18" fontWeight="700" fill="currentColor">
        Mosaic
      </text>
    </svg>
  );
}

export function LogoVela({ size = 28 }: LogoProps) {
  const w = (size * 110) / 32;
  return (
    <svg width={w} height={size} viewBox="0 0 110 32" aria-label="Vela">
      <g transform="translate(6,6)" fill="currentColor">
        <polygon points="0,20 12,0 14,0 6,20" />
        <polygon points="14,20 26,0 28,0 20,20" opacity=".6" />
      </g>
      <text x="40" y="22" fontFamily="'IBM Plex Sans',sans-serif" fontSize="18" fontWeight="700" letterSpacing="2" fill="currentColor">
        VELA
      </text>
    </svg>
  );
}
