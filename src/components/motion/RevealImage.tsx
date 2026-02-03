import React from 'react';
import { motion } from 'framer-motion';

interface RevealImageProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const RevealImage: React.FC<RevealImageProps> = ({
  children,
  delay = 0,
  duration = 1.2,
  className,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
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

export default RevealImage;
