import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { hoverScale } from '@/lib/motion-variants';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'none';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

const variants = {
  default: 'bg-surface',
  elevated: 'bg-surface shadow-lg',
  bordered: 'bg-surface border border-border',
  gradient: 'bg-gradient-to-br from-primary/10 via-accent/10 to-accent-secondary/10',
};

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'bordered',
  padding = 'md',
  hover = true,
  className,
  onClick,
}) => {
  const cardClasses = cn(
    'rounded-xl transition-all duration-base',
    variants[variant],
    paddings[padding],
    hover && 'hover:shadow-lg hover:border-primary/30',
    onClick && 'cursor-pointer',
    className
  );

  if (hover) {
    return (
      <motion.div
        whileHover={hoverScale}
        className={cardClasses}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
