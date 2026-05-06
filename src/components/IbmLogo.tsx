/* IDMB wordmark - a heavy, tightly-tracked sans-serif lockup of the four letters
   I·D·M·B. No surrounding shape: the wordmark sits transparently on whatever
   background it's placed on. Gray by default; lighter gray when used on a dark
   surface (footer). */
type Props = {
  size?: number;
  color?: string;
  tone?: 'dark' | 'light';
  className?: string;
};

export default function IbmLogo({ size = 30, color, tone = 'dark', className }: Props) {
  const fill = color ?? (tone === 'dark' ? '#525252' : '#c6c6c6');
  // viewBox is sized to the four letters at weight 700 with tight tracking.
  // Width≈2.5× height keeps the proportions of the dfcu-style block wordmark.
  const w = Math.round(size * 2.5);
  const h = size;

  return (
    <svg
      className={className}
      width={w}
      height={h}
      viewBox="0 0 100 40"
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
    </svg>
  );
}
