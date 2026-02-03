import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '@/config/site.config';
import { Button, Container } from '@/components/ui';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Handle anchor links
    if (href.startsWith('#')) {
      // If we're not on the home page, navigate to home with the hash
      if (location.pathname !== '/') {
        navigate('/' + href);
        return;
      }

      // If we are on home page, smooth scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'py-1' : 'py-2'
        )}
      >
        {/* Background with glassmorphism */}
        <motion.div
          className="absolute inset-0 glass-premium"
          style={{ opacity: headerOpacity }}
        />

        <Container className="relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/images/logo.png"
                alt={siteConfig.metadata.siteName}
                className="h-32 w-auto -my-6"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {siteConfig.navigation.links.map((link) => (
                <div key={link.href}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="relative px-4 py-2 text-foreground-secondary hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="relative px-4 py-2 text-foreground-secondary hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                href={siteConfig.navigation.ctaButton.href}
                variant="primary"
                size="sm"
                icon="ArrowRight"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">{siteConfig.navigation.ctaButton.label}</span>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-surface transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-[88px] z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              className="relative bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl"
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
            >
              <div className="container py-8 space-y-2 flex flex-col items-center">
                {siteConfig.navigation.links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full text-center"
                  >
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="block w-full text-center px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-surface rounded-xl transition-all"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full text-center px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-surface rounded-xl transition-all"
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6 w-full max-w-xs"
                >
                  <Button
                    href={siteConfig.navigation.ctaButton.href}
                    variant="primary"
                    size="md"
                    fullWidth
                    icon="ArrowRight"
                  >
                    {siteConfig.navigation.ctaButton.label}
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
