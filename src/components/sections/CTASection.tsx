import React from 'react';
import { Button } from '../ui';
import { FadeInUp } from '../motion';
import { siteConfig } from '../../config/site.config';

export const CTASection: React.FC = () => {
  const { cta } = siteConfig;

  return (
    <section className="section">
      <div className="container">
        <FadeInUp>
          <div className="relative rounded-3xl overflow-hidden py-16 px-8 md:py-20 md:px-16 text-center">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-700 -z-10" />
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-5" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -z-5" />

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {cta.primary.title}
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
              {cta.primary.description}
            </p>
            <Button
              href={cta.primary.buttonHref}
              variant="secondary"
              size="lg"
              icon="ArrowRight"
              className="!bg-white !text-primary hover:!bg-white/90"
            >
              {cta.primary.buttonLabel}
            </Button>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default CTASection;
