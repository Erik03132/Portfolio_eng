import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  containerClassName?: string;
}

export default function Section({
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section className={cn('py-16 md:py-24', className)} {...props}>
      <div className={cn('container mx-auto px-4 md:px-6 max-w-7xl', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
