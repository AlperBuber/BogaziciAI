import React from 'react';
import { motion } from 'framer-motion';

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  splitBy?: 'chars' | 'words';
  staggerDelay?: number;
  duration?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({
  children,
  className = '',
  delay = 0,
  splitBy = 'words',
  staggerDelay = 0.03,
  duration = 0.8,
}) => {
  const items = splitBy === 'chars' 
    ? children.split('') 
    : children.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      y: '100%',
      opacity: 0,
      rotateX: -90,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {items.map((item, index) => (
        <span key={index} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            variants={child}
            style={{ transformOrigin: 'bottom' }}
          >
            {item}
            {splitBy === 'words' && index < items.length - 1 && '\u00A0'}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default SplitText;
