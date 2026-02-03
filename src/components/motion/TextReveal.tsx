import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 1,
}) => {
  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Staggered line reveal for paragraphs
interface LineRevealProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  staggerDelay?: number;
}

export const LineReveal: React.FC<LineRevealProps> = ({
  lines,
  className = '',
  lineClassName = '',
  delay = 0,
  staggerDelay = 0.1,
}) => {
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

  const line = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {lines.map((text, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div className={lineClassName} variants={line}>
            {text}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default TextReveal;
