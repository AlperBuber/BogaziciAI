import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../../lib/gsap-config';

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  triggerStart?: string;
}

export const FadeInUp: React.FC<FadeInUpProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  distance = 40,
  className = '',
  triggerStart = 'top 85%',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion() || !containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: distance,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: triggerStart,
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: containerRef });

  // Fallback for reduced motion
  if (prefersReducedMotion()) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={containerRef} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default FadeInUp;
