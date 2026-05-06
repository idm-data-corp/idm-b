import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from './icons';
import { isOutbound } from '../lib/links';

/* IDMB's primary CTA primitive. A button that's actually a link 95% of the
   time on a marketing site, so we render it as `<Link>` for in-app routes,
   `<a target="_blank">` for outbound URLs, and `<button>` only when the
   caller passes `onClick` without `href`. The arrow icon flips to the
   "external" variant automatically for outbound URLs. */

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';
export type ButtonSize = 'md' | 'lg';

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /* Hide the trailing arrow icon (rare — most CTAs want it). */
  hideArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = CommonProps & {
  href: string;
  onClick?: () => void;
  type?: never;
  disabled?: never;
};

type ButtonProps = CommonProps & {
  href?: never;
  onClick: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

type Props = LinkProps | ButtonProps;

export default function Button(props: Props) {
  const variant = props.variant ?? 'primary';
  const size = props.size ?? 'md';
  const className = ['btn', `btn-${variant}`, `btn-size-${size}`, props.className]
    .filter(Boolean)
    .join(' ');

  /* Link form */
  if ('href' in props && props.href) {
    const Arrow = isOutbound(props.href) ? ArrowUpRight : ArrowRight;
    const arrow = props.hideArrow ? null : <Arrow />;

    if (isOutbound(props.href)) {
      const isHttp = /^https?:\/\//.test(props.href);
      return (
        <a
          className={className}
          href={props.href}
          onClick={props.onClick}
          {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
        >
          <span>{props.children}</span>
          {arrow}
        </a>
      );
    }
    return (
      <Link className={className} to={props.href} onClick={props.onClick}>
        <span>{props.children}</span>
        {arrow}
      </Link>
    );
  }

  /* Pure button form (modals, form submits, JS triggers) */
  const Arrow = ArrowRight;
  return (
    <button
      type={props.type ?? 'button'}
      className={className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <span>{props.children}</span>
      {!props.hideArrow && <Arrow />}
    </button>
  );
}
