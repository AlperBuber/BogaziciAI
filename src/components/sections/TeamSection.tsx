import React from 'react';
import { Linkedin, User } from 'lucide-react';
import { Card } from '../ui';
import { FadeInUp, StaggerContainer, StaggerItem } from '../motion';
import { siteConfig } from '../../config/site.config';

export const TeamSection: React.FC = () => {
  const { team } = siteConfig;

  return (
    <section id="team" className="section">
      <div className="container">
        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {team.sectionTitle}
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              {team.sectionDescription}
            </p>
          </div>
        </FadeInUp>

        {/* Team Grid */}
        <StaggerContainer staggerDelay={0.15} className="flex flex-wrap justify-center gap-8">
          {team.members.map((member) => (
            <StaggerItem key={member.id}>
              <Card 
                variant="elevated" 
                padding="lg" 
                className="w-full max-w-sm text-center"
              >
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                  <User size={64} className="text-primary/40" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-foreground-secondary text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Link */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-primary transition-colors"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                )}
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TeamSection;
