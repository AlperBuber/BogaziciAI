import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '../../lib/gsap-config';

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  duration?: number;
  className?: string;
  itemSelector?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  duration = 0.5,
  className = '',
  itemSelector = '.stagger-item',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion() || !containerRef.current) return;

    const items = containerRef.current.querySelectorAll(itemSelector);
    if (items.length === 0) return;

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger: staggerDelay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

// Helper component to wrap stagger items
export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  const shouldReduceMotion = prefersReducedMotion();
  
  return (
    <div 
      className={`stagger-item ${className}`} 
      style={shouldReduceMotion ? {} : { opacity: 0 }}
    >
      {children}
    </div>
  );
};

export default StaggerContainer;
