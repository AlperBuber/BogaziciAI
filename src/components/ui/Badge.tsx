import React from 'react';
import * as LucideIcons from 'lucide-react';

type IconName = keyof typeof LucideIcons;

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md';
  icon?: IconName;
  className?: string;
}

const variantClasses = {
  default: 'bg-surface text-foreground-secondary border border-border',
  primary: 'bg-primary-light text-primary border border-primary/20',
  success: 'bg-green-50 text-green-700 border border-green-200',
  warning: 'bg-amber-50 text-amber-700 border border-amber-200',
  info: 'bg-blue-50 text-blue-700 border border-blue-200',
};

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  icon,
  className = '',
}) => {
  const IconComponent = icon ? (LucideIcons[icon] as React.ComponentType<{ className?: string; size?: number }>) : null;

  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        font-medium rounded-full
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `.trim()}
    >
      {IconComponent && <IconComponent size={size === 'sm' ? 12 : 14} />}
      {children}
    </span>
  );
};

export default Badge;
