import React from 'react';
import { Container, Button } from '@/components/ui';
import { FadeInUp } from '@/components/motion';
import { CTASection as CTASectionType } from '@/config/site.config';

interface CTASectionProps {
  data: CTASectionType;
}

export const CTASection: React.FC<CTASectionProps> = ({ data }) => {
  return (
    <section className="section relative overflow-hidden bg-surface py-24">
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {data.title}
            </h2>
          </FadeInUp>
          {data.description && (
            <FadeInUp delay={0.1}>
              <p className="text-lg sm:text-xl text-foreground-secondary mb-8">
                {data.description}
              </p>
            </FadeInUp>
          )}
          <FadeInUp delay={0.2}>
            <Button
              href={data.button.href}
              variant="primary"
              size="lg"
              icon="ArrowRight"
            >
              {data.button.label}
            </Button>
          </FadeInUp>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
