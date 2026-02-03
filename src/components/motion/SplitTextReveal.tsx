import React, { useRef, useEffect } from 'react';
import { gsap, prefersReducedMotion } from '../../lib/gsap-config';

interface SplitTextRevealProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
  duration?: number;
  stagger?: number;
  splitBy?: 'chars' | 'words';
}

export const SplitTextReveal: React.FC<SplitTextRevealProps> = ({
  children,
  className = '',
  as: Component = 'h1',
  delay = 0,
  duration = 0.6,
  stagger = 0.02,
  splitBy = 'words',
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current) return;

    const element = containerRef.current;
    const text = element.textContent || '';
    
    // Clear and split text
    element.innerHTML = '';
    
    if (splitBy === 'words') {
      const words = text.split(' ');
      words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'inline-block overflow-hidden';
        
        const innerSpan = document.createElement('span');
        innerSpan.className = 'split-word inline-block';
        innerSpan.textContent = word;
        innerSpan.style.transform = 'translateY(100%)';
        innerSpan.style.opacity = '0';
        
        wordSpan.appendChild(innerSpan);
        element.appendChild(wordSpan);
        
        // Add space between words (except last)
        if (index < words.length - 1) {
          element.appendChild(document.createTextNode(' '));
        }
      });
    } else {
      // Split by characters
      const chars = text.split('');
      chars.forEach((char) => {
        if (char === ' ') {
          element.appendChild(document.createTextNode(' '));
        } else {
          const charSpan = document.createElement('span');
          charSpan.className = 'inline-block overflow-hidden';
          
          const innerSpan = document.createElement('span');
          innerSpan.className = 'split-char inline-block';
          innerSpan.textContent = char;
          innerSpan.style.transform = 'translateY(100%)';
          innerSpan.style.opacity = '0';
          
          charSpan.appendChild(innerSpan);
          element.appendChild(charSpan);
        }
      });
    }

    // Animate
    const selector = splitBy === 'words' ? '.split-word' : '.split-char';
    const elements = element.querySelectorAll(selector);

    gsap.to(elements, {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      delay,
      ease: 'power3.out',
    });

    return () => {
      // Reset on cleanup
      if (element) {
        element.textContent = text;
      }
    };
  }, [children, delay, duration, stagger, splitBy]);

  // Fallback for reduced motion
  if (prefersReducedMotion()) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component ref={containerRef as React.RefObject<HTMLHeadingElement>} className={className}>
      {children}
    </Component>
  );
};

export default SplitTextReveal;
