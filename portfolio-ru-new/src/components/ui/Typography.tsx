import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function H1({ children, className, ...props }: TypographyProps) {
  return (
    <h1
      className={cn(
        'font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: TypographyProps) {
  return (
    <h2
      className={cn(
        'font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: TypographyProps) {
  return (
    <h3
      className={cn('font-display text-2xl md:text-3xl font-semibold', className)}
      {...props}
    >
      {children}
    </h3>
  );
}

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function Body({ children, className, ...props }: ParagraphProps) {
  return (
    <p
      className={cn('text-base md:text-lg text-neutral-600 leading-relaxed', className)}
      {...props}
    >
      {children}
    </p>
  );
}
