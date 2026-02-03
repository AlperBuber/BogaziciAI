import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'full';
}

const sizes = {
  sm: 'max-w-4xl',
  default: 'max-w-6xl',
  lg: 'max-w-7xl',
  full: 'max-w-full',
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'default',
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
