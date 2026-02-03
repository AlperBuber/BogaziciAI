import React from 'react';
import { Header, Footer } from '../components/layout';
import { ServicesSection, CTASection } from '../components/sections';
import { FadeInUp } from '../components/motion';

const Services: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="section pb-0">
          <div className="container">
            <FadeInUp>
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Our <span className="text-gradient">Services</span>
                </h1>
                <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                  Comprehensive AI transformation across governance, value creation, and capability building.
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Services;
