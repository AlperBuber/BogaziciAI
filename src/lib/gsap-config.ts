import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Default animation settings
export const GSAP_DEFAULTS = {
  duration: 0.6,
  ease: 'power3.out',
};

// Custom easing curves
export const EASING = {
  smooth: 'power2.out',
  smoothIn: 'power2.in',
  smoothInOut: 'power2.inOut',
  bounce: 'back.out(1.7)',
  elastic: 'elastic.out(1, 0.3)',
  premium: 'power3.out',
};

// Check for reduced motion preference
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Initialize GSAP with default settings
export const initGSAP = () => {
  gsap.defaults({
    duration: GSAP_DEFAULTS.duration,
    ease: GSAP_DEFAULTS.ease,
  });

  // ScrollTrigger defaults
  ScrollTrigger.defaults({
    toggleActions: 'play none none reverse',
    start: 'top 80%',
    end: 'bottom 20%',
  });
};

// Smooth scroll to element
export const scrollToElement = (target: string | Element, offset: number = 0) => {
  if (prefersReducedMotion()) {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
    return;
  }

  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: target,
      offsetY: offset,
    },
    ease: 'power2.inOut',
  });
};

// Export GSAP and plugins for use in components
export { gsap, ScrollTrigger };
