import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '@/config/site.config';
import { Container, Button, Badge } from '@/components/ui';
import { SplitText, MagneticButton, TextReveal } from '@/components/motion';

export const HeroSection: React.FC = () => {
  const { hero } = siteConfig.homePage;
  const { scrollY } = useScroll();

  // Parallax effects
  const textY = useTransform(scrollY, [0, 500], [0, 50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Light Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-50/50 to-white" />

      {/* Subtle Glass overlay */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Decorative Blobs - Blue tones only */}
      <motion.div
        className="absolute top-1/4 left-10 w-48 h-48 md:w-72 md:h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <Container className="relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          style={{ opacity }}
        >
          <motion.div style={{ y: textY }}>
            {hero.badge && (
              <TextReveal delay={0} duration={0.8}>
                <Badge variant="primary" className="mb-6">
                  <motion.span
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mr-2"
                  >
                    🧠
                  </motion.span>
                  {hero.badge.text}
                </Badge>
              </TextReveal>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight tracking-tight mb-8">
              End‑to‑end, secure and{' '}
              <span className="text-primary">regulation‑ready</span> AI transformation.
            </h1>

            <TextReveal delay={0.8} duration={1}>
              <p className="text-lg sm:text-xl text-foreground-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
                {hero.description}
              </p>
            </TextReveal>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                href={hero.primaryCTA.href}
                variant="primary"
                size="lg"
                icon="ArrowRight"
                className="relative overflow-hidden group"
              >
                <span className="relative z-10">{hero.primaryCTA.label}</span>
              </Button>

              {hero.secondaryCTA && (
                <Button
                  href={hero.secondaryCTA.href}
                  variant="secondary"
                  size="lg"
                  icon="ArrowDown"
                >
                  {hero.secondaryCTA.label}
                </Button>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

    </section>
  );
};

export default HeroSection;
