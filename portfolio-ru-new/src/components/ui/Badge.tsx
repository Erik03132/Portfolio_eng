import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
}

export default function Badge({
  children,
  className,
  variant = 'default',
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        {
          'bg-neutral-100 text-neutral-700': variant === 'default',
          'bg-neutral-900 text-white': variant === 'primary',
          'bg-neutral-200 text-neutral-800': variant === 'secondary',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
