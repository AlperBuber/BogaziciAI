import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: React.ReactNode;
  direction?: 'up' | 'down';
  duration?: number;
  delay?: number;
  className?: string;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  direction = 'up',
  duration = 4,
  delay = 0,
  className,
}) => {
  const yValues = direction === 'up' ? [0, -15, 0] : [0, 15, 0];

  return (
    <motion.div
      animate={{
        y: yValues,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
