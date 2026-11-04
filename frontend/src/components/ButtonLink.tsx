import React from 'react';
import Link from 'next/link';
import { buttonClasses, ButtonSize, ButtonVariant } from '../utils/buttonStyles';

interface ButtonLinkProps {
  to?: string;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}

export function ButtonLink({
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  className = '',
  ariaLabel,
  target,
  rel,
  onClick,
  children
}: ButtonLinkProps) {
  const classes = buttonClasses(variant, size, className);
  const content =
  <>
      {icon}
      <span>{children}</span>
      {iconRight}
    </>;


  if (to) {
    return (
      <Link href={to} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>);

  }

  const isExternal = href?.startsWith('http');
  return (
    <a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      target={target ?? (isExternal ? '_blank' : undefined)}
      rel={rel ?? (isExternal ? 'noopener noreferrer' : undefined)}
      onClick={onClick}>
      
      {content}
    </a>);

}