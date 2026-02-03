import {
  HeroSection,
  PillarsSection,
  AboutSection,
  IndustriesSection,
  TeamSection,
  CTASection,
} from '@/components/sections';
import { siteConfig } from '@/config/site.config';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <AboutSection />
      <IndustriesSection />
      <TeamSection />
      <CTASection data={siteConfig.homePage.cta} />
    </>
  );
}
