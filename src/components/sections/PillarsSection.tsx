import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site.config';
import { Container, Icon } from '@/components/ui';
import { FadeInUp } from '@/components/motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type * as LucideIcons from 'lucide-react';

const pillarFeatures = {
  governance: [
    'Enforceable Frameworks',
    'Continuous Audit Readiness',
    'Risk Assessment',
  ],
  value: [
    'Use-Case Engineering',
    'Operating Models',
    'Change Management',
  ],
  school: [
    'Executive Programs',
    'Mini MBA Certificates',
    'Hands-on Workshops',
  ],
};

export const PillarsSection: React.FC = () => {
  const { pillars } = siteConfig.homePage;

  return (
    <section id="pillars" className="section bg-white py-24">
      <Container>
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Three Pillars of AI Transformation
            </h2>
            <p className="text-md text-foreground-secondary max-w-4xl mx-auto">
              A comprehensive approach to responsible, value-creating AI adoption for your organization.
            </p>
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <FadeInUp key={pillar.id} delay={index * 0.1}>
              <motion.div
                className="bg-white rounded-2xl p-8 h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                  <Icon
                    name={pillar.icon as keyof typeof LucideIcons}
                    size={24}
                    className="text-gray-600"
                  />
                </div>

                {/* Title - fixed height */}
                <h3 className="text-xl font-bold text-foreground mb-4 leading-tight min-h-[56px]">
                  {pillar.title}
                </h3>

                {/* Description - fixed height */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed min-h-[100px]">
                  {pillar.description}
                </p>

                {/* Features List - fixed height */}
                <ul className="space-y-2 mb-6 min-h-[88px]">
                  {pillarFeatures[pillar.id as keyof typeof pillarFeatures]?.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link - always at bottom */}
                <div className="mt-auto">
                  <Link
                    to={`/services#${pillar.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                  >
                    Learn more
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PillarsSection;
