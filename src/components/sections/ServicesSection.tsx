import React, { useState } from 'react';
import { Card, Icon, Accordion } from '../ui';
import { FadeInUp, StaggerContainer, StaggerItem } from '../motion';
import { siteConfig } from '../../config/site.config';

export const ServicesSection: React.FC = () => {
  const { services } = siteConfig;
  const [activeCategory, setActiveCategory] = useState(services.categories[0].id);

  const activeServices = services.categories.find(c => c.id === activeCategory);

  return (
    <section id="services" className="section">
      <div className="container">
        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {services.sectionTitle}
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              {services.sectionDescription}
            </p>
          </div>
        </FadeInUp>

        {/* Category Tabs */}
        <FadeInUp delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-xl font-medium
                  transition-all duration-300
                  ${activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-surface text-foreground-secondary hover:bg-primary/10 hover:text-primary'
                  }
                `}
              >
                <Icon name={category.icon as any} size={20} />
                <span className="hidden sm:inline">{category.title.split(',')[0]}</span>
              </button>
            ))}
          </div>
        </FadeInUp>

        {/* Active Category Card */}
        <FadeInUp delay={0.3}>
          <Card variant="elevated" padding="lg" className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon name={activeServices?.icon as any} size={28} className="text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {activeServices?.title}
              </h3>
            </div>

            {/* Service Items Accordion */}
            <Accordion
              items={activeServices?.items.map((item, index) => ({
                id: `${activeCategory}-${index}`,
                title: item.title,
                content: (
                  <div className="space-y-4 pt-2">
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        What We Do
                      </span>
                      <p className="mt-1">{item.whatWeDo}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        What Clients Get
                      </span>
                      <p className="mt-1">{item.whatClientsGet}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        Why It Matters
                      </span>
                      <p className="mt-1">{item.whyItMatters}</p>
                    </div>
                  </div>
                ),
              })) || []}
              defaultOpen={[`${activeCategory}-0`]}
            />
          </Card>
        </FadeInUp>

        {/* All Services Quick View */}
        <div className="mt-16">
          <FadeInUp>
            <h3 className="text-xl font-bold text-center text-foreground mb-8">
              All Service Areas at a Glance
            </h3>
          </FadeInUp>
          
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.categories.map((category) => (
              <StaggerItem key={category.id}>
                <Card 
                  variant="bordered" 
                  padding="md" 
                  className={`
                    cursor-pointer transition-all duration-300
                    ${activeCategory === category.id ? 'border-primary bg-primary/5' : ''}
                  `}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center shrink-0
                      ${activeCategory === category.id ? 'bg-primary text-white' : 'bg-surface text-primary'}
                    `}>
                      <Icon name={category.icon as any} size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-sm">
                        {category.title}
                      </h4>
                      <p className="text-xs text-foreground-muted">
                        {category.items.length} services
                      </p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
