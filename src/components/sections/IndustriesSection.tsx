import React from 'react';
import { Card, Icon } from '../ui';
import { FadeInUp, StaggerContainer, StaggerItem } from '../motion';
import { siteConfig } from '../../config/site.config';

export const IndustriesSection: React.FC = () => {
  const { industries } = siteConfig;

  return (
    <section id="industries" className="section bg-surface">
      <div className="container">
        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {industries.sectionTitle}
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              {industries.sectionDescription}
            </p>
          </div>
        </FadeInUp>

        {/* Industries Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.items.map((industry) => (
            <StaggerItem key={industry.id}>
              <Card 
                variant="default" 
                padding="md" 
                className="text-center group cursor-pointer bg-white"
              >
                <div className={`
                  w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center
                  bg-primary/10 text-primary
                  group-hover:bg-primary group-hover:text-white
                  transition-all duration-300
                `}>
                  <Icon name={industry.icon as any} size={24} />
                </div>
                <h3 className="font-semibold text-foreground text-sm md:text-base">
                  {industry.label}
                </h3>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default IndustriesSection;
