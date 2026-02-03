import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { hoverScale, tapScale } from '@/lib/motion-variants';
import * as LucideIcons from 'lucide-react';

type IconName = keyof typeof LucideIcons;

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg',
  secondary: 'bg-surface border border-border text-foreground hover:bg-primary-light hover:border-primary',
  ghost: 'bg-transparent text-foreground hover:bg-surface',
  outline: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white',
};

const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
};

const iconSizes = {
  sm: 16,
  md: 18,
  lg: 20,
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  loading = false,
  disabled = false,
  href,
  onClick,
  className,
  type = 'button',
}) => {
  const IconComponent = icon ? (LucideIcons[icon] as React.ComponentType<{ size: number }>) : null;
  const iconSize = iconSizes[size];

  const buttonClasses = cn(
    'inline-flex items-center justify-center font-medium rounded-lg',
    'transition-all duration-base',
    'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  );

  const content = (
    <>
      {loading && (
        <LucideIcons.Loader2 className="animate-spin" size={iconSize} />
      )}
      {!loading && IconComponent && iconPosition === 'left' && (
        <IconComponent size={iconSize} />
      )}
      <span>{children}</span>
      {!loading && IconComponent && iconPosition === 'right' && (
        <IconComponent size={iconSize} />
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <motion.div whileHover={hoverScale} whileTap={tapScale}>
        <Link to={href} className={buttonClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={!disabled ? hoverScale : undefined}
      whileTap={!disabled ? tapScale : undefined}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
    >
      {content}
    </motion.button>
  );
};

export default Button;
