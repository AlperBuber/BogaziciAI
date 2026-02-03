import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/ui';
import { FadeInUp } from '@/components/motion';
import { Linkedin } from 'lucide-react';

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

export const TeamSection: React.FC = () => {
  const { team } = siteConfig;

  return (
    <section id="team" className="section bg-white py-24">
      <Container>
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Team
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Expert leadership driving responsible AI transformation
            </p>
          </div>
        </FadeInUp>

        {/* Centered grid for 2 cards side by side */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
            {team.map((member, index) => (
              <FadeInUp key={member.id} delay={index * 0.1}>
                <motion.div
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Grey background section with avatar - enlarged for future photos */}
                  <div className="bg-gray-100 py-20 flex justify-center items-center min-h-[240px]">
                    <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center shadow-sm">
                      <span className="text-3xl font-semibold text-gray-600">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Name */}
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>

                    {/* Role */}
                    <p className="text-sm font-medium text-foreground mb-4">
                      {member.role}
                    </p>

                    {/* Bio */}
                    <p className="text-sm text-foreground-secondary leading-relaxed mb-6 flex-grow">
                      {member.bio}
                    </p>

                    {/* LinkedIn */}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-10 h-10 rounded-lg border border-gray-200 items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-all duration-200"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                  </div>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
