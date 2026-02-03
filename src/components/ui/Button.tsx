import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';

type IconName = keyof typeof LucideIcons;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  href?: string;
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg',
  secondary: 'bg-surface border border-border text-foreground hover:bg-primary-light hover:border-primary/30',
  ghost: 'bg-transparent text-foreground hover:bg-surface',
  outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  href,
  fullWidth = false,
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const IconComponent = icon ? (LucideIcons[icon] as React.ComponentType<{ className?: string; size?: number }>) : null;
  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 22 : 18;

  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold rounded-lg
    transition-all duration-base
    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  const content = (
    <>
      {loading && (
        <LucideIcons.Loader2 className="animate-spin" size={iconSize} />
      )}
      {IconComponent && iconPosition === 'left' && !loading && (
        <IconComponent size={iconSize} />
      )}
      <span>{children}</span>
      {IconComponent && iconPosition === 'right' && !loading && (
        <IconComponent size={iconSize} />
      )}
    </>
  );

  if (href) {
    // Check if it's an anchor link or external link
    if (href.startsWith('#')) {
      return (
        <a href={href} className={baseClasses}>
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClasses} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
};

export default Button;
