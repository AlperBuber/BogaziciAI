import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/ui';
import { Linkedin, Mail, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const { metadata, contactPage } = siteConfig;

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <Container className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/images/logo.png"
                alt={metadata.siteName}
                className="h-28 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm mb-4 max-w-sm leading-relaxed">
              End-to-end, secure and regulation-ready AI transformation.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/company/bo%C4%9Fazi%C3%A7i-ai/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-all duration-200"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${contactPage.contactInfo.email}`}
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-all duration-200"
              >
                <Mail size={16} />
              </a>
              <a
                href={`https://${contactPage.contactInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-all duration-200"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-foreground mb-4 text-sm">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-foreground transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-foreground mb-4 text-sm">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>{contactPage.contactInfo.email}</li>
              <li>{contactPage.contactInfo.website}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Boğaziçi AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-foreground text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
