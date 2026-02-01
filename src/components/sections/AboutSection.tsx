import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site.config';
import { Container, Icon } from '@/components/ui';
import { FadeInUp } from '@/components/motion';

export const AboutSection: React.FC = () => {
  const { aboutPage } = siteConfig;

  return (
    <section id="about" className="section bg-white py-24">
      <Container>
        {/* Intro */}
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {aboutPage.intro.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {aboutPage.intro.description}
            </p>
          </div>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <FadeInUp delay={0.1}>
            <motion.div 
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 border border-gray-100 shadow-lg h-full overflow-hidden"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center shadow-sm">
                    <Icon name="Eye" size={24} className="text-gray-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Our Vision
                  </h3>
                </div>
                
                <ul className="space-y-5">
                  {aboutPage.vision.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Icon
                          name={item.icon as keyof typeof import('lucide-react')}
                          size={18}
                          className="text-gray-500"
                        />
                      </div>
                      <p className="text-gray-600 leading-relaxed pt-2">{item.text}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </FadeInUp>

          {/* Mission Card */}
          <FadeInUp delay={0.2}>
            <motion.div 
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 border border-gray-100 shadow-lg h-full overflow-hidden"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-50 to-transparent rounded-bl-full opacity-50" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center shadow-sm">
                    <Icon name="Target" size={24} className="text-gray-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Our Mission
                  </h3>
                </div>
                
                <ul className="space-y-5">
                  {aboutPage.mission.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Icon
                          name={item.icon as keyof typeof import('lucide-react')}
                          size={18}
                          className="text-gray-500"
                        />
                      </div>
                      <p className="text-gray-600 leading-relaxed pt-2">{item.text}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </FadeInUp>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
