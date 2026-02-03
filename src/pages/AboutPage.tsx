import { siteConfig } from '@/config/site.config';
import { Container, Icon } from '@/components/ui';
import { FadeInUp } from '@/components/motion';
import { CTASection } from '@/components/sections';
import { motion } from 'framer-motion';
import type * as LucideIcons from 'lucide-react';

export default function AboutPage() {
  const { aboutPage } = siteConfig;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gray-50">
        <Container>
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {aboutPage.hero.title}
              </h1>
              {aboutPage.hero.subtitle && (
                <p className="text-xl text-foreground-secondary">
                  {aboutPage.hero.subtitle}
                </p>
              )}
            </div>
          </FadeInUp>
        </Container>
      </section>

      {/* Intro */}
      <section className="section bg-white py-16">
        <Container>
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                {aboutPage.intro.title}
              </h2>
              <p className="text-lg text-foreground-secondary leading-relaxed">
                {aboutPage.intro.description}
              </p>
            </div>
          </FadeInUp>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-gray-50 py-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            {/* Vision */}
            <FadeInUp>
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm h-full">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Icon name="Eye" size={20} className="text-gray-500" />
                  </div>
                  Our Vision
                </h3>
                <ul className="space-y-4">
                  {aboutPage.vision.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon
                          name={item.icon as keyof typeof LucideIcons}
                          size={16}
                          className="text-gray-400"
                        />
                      </div>
                      <p className="text-gray-600 text-sm">{item.text}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeInUp>

            {/* Mission */}
            <FadeInUp delay={0.1}>
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm h-full">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Icon name="Target" size={20} className="text-gray-500" />
                  </div>
                  Our Mission
                </h3>
                <ul className="space-y-4">
                  {aboutPage.mission.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon
                          name={item.icon as keyof typeof LucideIcons}
                          size={16}
                          className="text-gray-400"
                        />
                      </div>
                      <p className="text-gray-600 text-sm">{item.text}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection data={aboutPage.cta} />
    </>
  );
}
