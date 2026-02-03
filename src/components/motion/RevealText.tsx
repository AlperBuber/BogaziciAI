import React from 'react';
import { motion } from 'framer-motion';

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
}

export const RevealText: React.FC<RevealTextProps> = ({
  children,
  delay = 0,
  duration = 1,
  direction = 'left',
  className,
}) => {
  const directionOffset = {
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealText;
