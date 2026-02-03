import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'gradient' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

const variantClasses = {
  default: 'bg-white border border-border',
  elevated: 'bg-white shadow-card',
  bordered: 'bg-white border-2 border-border',
  gradient: 'bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20',
  glass: 'glassmorphism',
};

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  hover = true,
  className = '',
  onClick,
}) => {
  const hoverClasses = hover
    ? 'transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1'
    : '';

  return (
    <div
      className={`
        rounded-xl
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${hoverClasses}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `.trim()}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
