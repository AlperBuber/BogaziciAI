import React from 'react';
import { Button, Card, Icon } from '../ui';
import { FadeInUp, SplitTextReveal, StaggerContainer, StaggerItem } from '../motion';
import { siteConfig } from '../../config/site.config';

export const HeroSection: React.FC = () => {
  const { hero, pillars } = siteConfig;

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <SplitTextReveal 
            as="h1" 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight"
            delay={0.2}
            stagger={0.03}
          >
            {hero.headline}
          </SplitTextReveal>

          <FadeInUp delay={0.6}>
            <p className="text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto mb-8">
              {hero.subtext}
            </p>
          </FadeInUp>

          <FadeInUp delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href={hero.primaryCTA.href} 
                size="lg" 
                icon="ArrowRight"
              >
                {hero.primaryCTA.label}
              </Button>
              <Button 
                href={hero.secondaryCTA.href} 
                variant="secondary" 
                size="lg"
                icon="ChevronDown"
              >
                {hero.secondaryCTA.label}
              </Button>
            </div>
          </FadeInUp>
        </div>

        {/* Trust Strip / Stats */}
        <FadeInUp delay={1} className="mb-20">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {hero.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeInUp>

        {/* Three Pillars */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.id}>
              <Card 
                variant="elevated" 
                padding="lg" 
                className="h-full text-center group cursor-pointer"
              >
                <div className={`
                  w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center
                  bg-primary/10 text-primary
                  group-hover:bg-primary group-hover:text-white
                  transition-all duration-300
                `}>
                  <Icon name={pillar.icon as any} size={28} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-foreground-secondary text-sm">
                  {pillar.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default HeroSection;
