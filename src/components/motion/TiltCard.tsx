import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  glareOpacity?: number;
  perspective?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  tiltAmount = 15,
  glareOpacity = 0.15,
  perspective = 1000,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-tiltAmount, tiltAmount]);

  const glareX = useTransform(xSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(ySpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = (e.clientX - rect.left) / rect.width - 0.5;
    const centerY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(centerX);
    y.set(centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full"
      >
        {children}
        
        {/* Glare effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-inherit"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,${glareOpacity}) 0%, transparent 60%)`,
            borderRadius: 'inherit',
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default TiltCard;
