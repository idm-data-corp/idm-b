/* IDMB logotype – lowercase wordmark followed by the three-bar brand mark.
   The bars mirror the proportions from favicon.svg (no container, bare bars).
   Gray by default; lighter gray when used on a dark surface (footer). */
type Props = {
  size?: number;
  color?: string;
  tone?: 'dark' | 'light';
  className?: string;
};

export default function IbmLogo({ size = 30, color, tone = 'dark', className }: Props) {
  const fill = color ?? (tone === 'dark' ? '#525252' : '#c6c6c6');
  // viewBox: 130×40 — text occupies ~0–87, gap, then icon occupies 97–127.
  // Width≈3.25× height accounts for the text + bar-icon lockup.
  const w = Math.round(size * 3.25);
  const h = size;

  return (
    <svg
      className={className}
      width={w}
      height={h}
      viewBox="0 0 130 40"
      role="img"
      aria-label="IDMB"
    >
      <text
        x="0"
        y="32"
        fontFamily="'IBM Plex Sans', -apple-system, system-ui, sans-serif"
        fontSize="36"
        fontWeight="700"
        letterSpacing="-1.6"
        fill={fill}
      >
        idmb
      </text>
      {/* Three-bar icon – proportions from favicon.svg scaled to cap height */}
      {/* Middle bar (widest) */}
      <rect x="97" y="16" width="30" height="6" rx="3" fill={fill} />
      {/* Top bar (offset right, same width as bottom) */}
      <rect x="104" y="6" width="21" height="6" rx="3" fill={fill} />
      {/* Bottom bar */}
      <rect x="101" y="26" width="21" height="6" rx="3" fill={fill} />
    </svg>
  );
}
