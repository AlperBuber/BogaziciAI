import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui';
import { siteConfig } from '../../config/site.config';
import { scrollToElement } from '../../lib/gsap-config';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navigation } = siteConfig;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        scrollToElement(target, 80);
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled 
          ? 'glassmorphism shadow-md py-3' 
          : 'bg-transparent py-5'
        }
      `}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img
            src={navigation.logo.src}
            alt={navigation.logo.alt}
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-foreground-secondary hover:text-primary font-medium transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Button
            href={navigation.ctaButton.href}
            icon="ArrowRight"
            size="md"
          >
            {navigation.ctaButton.label}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden fixed inset-0 top-[60px] bg-white z-40
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-4'
          }
        `}
      >
        <nav className="container py-8 flex flex-col gap-6">
          {navigation.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <Button
              href={navigation.ctaButton.href}
              icon="ArrowRight"
              fullWidth
            >
              {navigation.ctaButton.label}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
