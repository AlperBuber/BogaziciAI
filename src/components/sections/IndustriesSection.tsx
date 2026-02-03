import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site.config';
import { Container, Icon } from '@/components/ui';
import { FadeInUp } from '@/components/motion';
import type * as LucideIcons from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const { industries } = siteConfig;
  
  // Split industries: first 4 for top row, last 3 for bottom row (centered)
  const topRow = industries.slice(0, 4);
  const bottomRow = industries.slice(4);

  const renderCard = (industry: typeof industries[0], index: number) => (
    <FadeInUp key={industry.id} delay={index * 0.05}>
      <motion.div
        className="bg-white rounded-xl p-4 sm:p-6 border border-gray-100 h-full shadow-sm"
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Icon */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-3 sm:mb-4">
          <Icon
            name={industry.icon as keyof typeof LucideIcons}
            size={18}
            className="text-gray-600 sm:w-5 sm:h-5"
          />
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-foreground mb-1.5 sm:mb-2">
          {industry.title}
        </h3>

        {/* Description */}
        {industry.description && (
          <p className="text-sm text-gray-500 leading-relaxed">
            {industry.description}
          </p>
        )}
      </motion.div>
    </FadeInUp>
  );

  return (
    <section id="industries" className="section bg-gray-50 py-12 sm:py-24">
      <Container>
        <FadeInUp>
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deep expertise across sectors navigating AI transformation and regulatory compliance.
            </p>
          </div>
        </FadeInUp>

        {/* Top Row - 4 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {topRow.map((industry, index) => renderCard(industry, index))}
        </div>

        {/* Bottom Row - 3 items centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl">
            {bottomRow.map((industry, index) => renderCard(industry, index + 4))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IndustriesSection;
