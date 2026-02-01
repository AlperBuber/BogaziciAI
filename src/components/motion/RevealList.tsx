import React from 'react';
import { motion } from 'framer-motion';

interface RevealListProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

interface RevealListItemProps {
  children: React.ReactNode;
  className?: string;
}

export const RevealList: React.FC<RevealListProps> = ({
  children,
  staggerDelay = 0.15,
  className,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.2,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const RevealListItem: React.FC<RevealListItemProps> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      variants={{
        hidden: { 
          opacity: 0, 
          y: 30,
          filter: 'blur(4px)',
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealList;
