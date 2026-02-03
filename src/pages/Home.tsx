import React from 'react';
import { Header, Footer } from '../components/layout';
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  IndustriesSection,
  TeamSection,
  ContactSection,
  CTASection,
} from '../components/sections';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <TeamSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
