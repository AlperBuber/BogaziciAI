import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config/site.config';
import { Container, Icon } from '@/components/ui';
import { FadeInUp } from '@/components/motion';
import { CTASection } from '@/components/sections';
import { ChevronDown } from 'lucide-react';

interface ServiceAccordionProps {
  service: {
    id: string;
    title: string;
    whatWeDo: string;
    whatClientsGet: string;
    whyItMatters: string;
  };
  isOpen: boolean;
  onToggle: () => void;
}

const ServiceAccordion: React.FC<ServiceAccordionProps> = ({ service, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between text-left group"
      >
        <span className="text-foreground group-hover:text-primary transition-colors">
          {service.title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">What we do</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{service.whatWeDo}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">What clients get</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{service.whatClientsGet}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Why it matters</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{service.whyItMatters}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ServicesPage() {
  const { servicesPage } = siteConfig;
  const [openServices, setOpenServices] = useState<Record<string, boolean>>({});

  const toggleService = (id: string) => {
    setOpenServices(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <Container>
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {servicesPage.hero.title}
              </h1>
              <p className="text-lg text-foreground-secondary">
                {servicesPage.hero.subtitle}
              </p>
            </div>
          </FadeInUp>
        </Container>
      </section>

      {/* Service Categories */}
      <section className="pb-16">
        <Container>
          <div className="space-y-16">
            {servicesPage.categories.map((category, catIndex) => (
              <FadeInUp key={category.id} delay={catIndex * 0.1}>
                <div id={category.id} className="scroll-mt-24">
                  {/* Category Header */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={category.icon as keyof typeof import('lucide-react')}
                        size={24}
                        className="text-gray-600"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-foreground mb-1">
                        {category.title}
                      </h2>
                      <p className="text-foreground-secondary text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Services Accordion */}
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="px-6">
                      {category.services.map((service) => (
                        <ServiceAccordion
                          key={service.id}
                          service={service}
                          isOpen={openServices[service.id] || false}
                          onToggle={() => toggleService(service.id)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection data={servicesPage.cta} />
    </>
  );
}
