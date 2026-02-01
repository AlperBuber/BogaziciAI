import React from 'react';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';

type IconName = keyof typeof LucideIcons;

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'accent';
  size?: 'sm' | 'md';
  icon?: IconName;
  className?: string;
}

const variants = {
  default: 'bg-surface text-foreground-secondary border border-border',
  primary: 'bg-primary-light text-primary border border-primary/20',
  success: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
  warning: 'bg-amber-50 text-amber-600 border border-amber-200',
  accent: 'bg-accent/10 text-accent border border-accent/20',
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  icon,
  className,
}) => {
  const IconComponent = icon ? (LucideIcons[icon] as React.ComponentType<{ size: number; className?: string }>) : null;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-full',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {IconComponent && <IconComponent size={size === 'sm' ? 12 : 14} />}
      {children}
    </span>
  );
};

export default Badge;
