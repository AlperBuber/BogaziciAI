import React from 'react';
import { Linkedin, Twitter, Mail, Globe } from 'lucide-react';
import { siteConfig } from '../../config/site.config';

export const Footer: React.FC = () => {
  const { footer, metadata, navigation } = siteConfig;

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img
              src={navigation.logo.src}
              alt={navigation.logo.alt}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70 max-w-md mb-6">
              {footer.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={metadata.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`https://twitter.com/${metadata.twitter.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href={`mailto:${metadata.email}`}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={metadata.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Website"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Link Sections */}
          {footer.sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            {footer.copyright}
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
