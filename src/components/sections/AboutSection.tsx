import React from 'react';
import { Check } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '../motion';
import { siteConfig } from '../../config/site.config';

export const AboutSection: React.FC = () => {
  const { about } = siteConfig;

  return (
    <section id="about" className="section bg-surface">
      <div className="container">
        {/* Intro */}
        <FadeInUp>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About <span className="text-gradient">Boğaziçi AI</span>
            </h2>
            <p className="text-lg text-foreground-secondary leading-relaxed">
              {about.intro}
            </p>
          </div>
        </FadeInUp>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision */}
          <FadeInUp delay={0.2}>
            <div className="bg-white rounded-2xl p-8 shadow-card h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">{about.vision.title}</h3>
              </div>
              <StaggerContainer staggerDelay={0.1}>
                <ul className="space-y-4">
                  {about.vision.items.map((item, index) => (
                    <StaggerItem key={index}>
                      <li className="flex gap-3">
                        <div className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check size={12} className="text-primary" />
                        </div>
                        <span className="text-foreground-secondary">{item}</span>
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </StaggerContainer>
            </div>
          </FadeInUp>

          {/* Mission */}
          <FadeInUp delay={0.3}>
            <div className="bg-white rounded-2xl p-8 shadow-card h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">{about.mission.title}</h3>
              </div>
              <StaggerContainer staggerDelay={0.1}>
                <ul className="space-y-4">
                  {about.mission.items.map((item, index) => (
                    <StaggerItem key={index}>
                      <li className="flex gap-3">
                        <div className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check size={12} className="text-primary" />
                        </div>
                        <span className="text-foreground-secondary">{item}</span>
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </StaggerContainer>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
