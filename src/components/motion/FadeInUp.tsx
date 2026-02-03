import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion-variants';

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeInUp: React.FC<FadeInUpProps> = ({
  children,
  delay = 0,
  duration = 0.9,
  className,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: fadeInUp.hidden,
        visible: {
          ...fadeInUp.visible,
          transition: {
            ...(fadeInUp.visible as { transition?: object }).transition,
            delay,
            duration,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUp;
