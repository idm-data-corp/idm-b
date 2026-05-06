/* Centralized inline SVG icons (Carbon-style 16/20/24 stroke) */
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 20): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: `0 0 ${size === 16 ? 16 : size === 24 ? 24 : 20} ${size === 16 ? 16 : size === 24 ? 24 : 20}`,
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
});

export function ChevronDown({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
    </svg>
  );
}

export function ChevronUp({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M4 10l4-4 4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowRight({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M11.5 4.5l5 5-5 5M2 9.5h14" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowUpRight({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M5 11l6-6M11 11V5H5" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
    </svg>
  );
}

export function Search({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  );
}

export function Chat({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="M3 3h14v10H8.5L4.5 17v-4H3V3z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Globe({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M10 3c-2.5 2-2.5 12 0 14M10 3c2.5 2 2.5 12 0 14M3 10h14"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function User({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <circle cx="10" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M3.5 17c.6-3.4 3.3-5.5 6.5-5.5s5.9 2.1 6.5 5.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function Close({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  );
}

export function Menu({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  );
}

export function ChevronRight({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="square" fill="none" />
    </svg>
  );
}

/* Tile icons - thin Carbon-style line illustrations */

export function IconAIProductivity({ size = 32, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
      {...rest}
    >
      <circle cx="16" cy="16" r="9" />
      <path d="M9 16c2-3 5-3 7 0s5 3 7 0" />
      <circle cx="16" cy="16" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconDataMgmt({ size = 32, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
      {...rest}
    >
      <rect x="6" y="6" width="20" height="20" />
      <path d="M6 6l20 20" />
      <circle cx="6" cy="6" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="26" cy="26" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="16" cy="16" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconSecurity({ size = 32, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
      {...rest}
    >
      <path d="M11 16V12a3 3 0 0 1 6 0v4" />
      <rect x="9" y="16" width="10" height="9" />
      <circle cx="14" cy="20" r="1" fill="currentColor" stroke="none" />
      <path d="M14 21v2" />
      <circle cx="22" cy="11" r="3" />
      <path d="M22 14v4" />
    </svg>
  );
}

export function IconIntegration({ size = 32, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
      {...rest}
    >
      <polygon points="16,5 26,11 26,22 16,28 6,22 6,11" />
      <path d="M16 5v23M6 11l20 11M26 11L6 22" />
    </svg>
  );
}

export function IconHybridInfra({ size = 32, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
      {...rest}
    >
      <path d="M11 12a4 4 0 1 1 7.5 2H21a3 3 0 0 1 0 6h-9a4 4 0 0 1-1-7.9z" />
      <rect x="9" y="22" width="14" height="3" />
    </svg>
  );
}

export function IconAIModels({ size = 32, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
      {...rest}
    >
      <rect x="6" y="6" width="9" height="9" />
      <rect x="17" y="6" width="9" height="9" />
      <rect x="6" y="17" width="9" height="9" />
      <rect x="17" y="17" width="9" height="9" />
      <path d="M9 9l3 3M20 9l3 3M9 20l3 3M20 20l3 3" />
    </svg>
  );
}

export function IconAnalytics({ size = 32, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
      {...rest}
    >
      <path d="M5 26V6M5 26h22" />
      <rect x="9" y="18" width="3" height="6" />
      <rect x="14" y="14" width="3" height="10" />
      <rect x="19" y="10" width="3" height="14" />
      <rect x="24" y="6" width="3" height="18" />
    </svg>
  );
}

export function IconConsulting({ size = 32, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
      {...rest}
    >
      <circle cx="11" cy="11" r="3.5" />
      <circle cx="21" cy="11" r="3.5" />
      <path d="M5 25c.5-3.5 3-5.5 6-5.5s5.5 2 6 5.5" />
      <path d="M15 25c.5-3.5 3-5.5 6-5.5s5.5 2 6 5.5" />
    </svg>
  );
}
