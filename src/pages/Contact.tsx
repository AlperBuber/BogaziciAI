import React from 'react';
import { Header, Footer } from '../components/layout';
import { ContactSection } from '../components/sections';
import { FadeInUp } from '../components/motion';

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="section pb-0">
          <div className="container">
            <FadeInUp>
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Get in <span className="text-gradient">Touch</span>
                </h1>
                <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                  Ready to start your AI transformation journey? We'd love to hear from you.
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
