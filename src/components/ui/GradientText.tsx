import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p';
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className,
  as: Component = 'span',
}) => {
  return (
    <Component
      className={cn(
        'text-gradient bg-gradient-cta',
        className
      )}
    >
      {children}
    </Component>
  );
};

export default GradientText;
