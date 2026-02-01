// ============================================
// TYPE DEFINITIONS
// ============================================

export interface SiteMetadata {
  siteName: string;
  siteUrl: string;
  description: string;
  ogImage: string;
  twitterHandle?: string;
}

export interface CTAButton {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: string;
}

export interface HeroContent {
  badge?: {
    text: string;
    icon?: string;
  };
  title: string;
  highlightedText?: string;
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export interface PillarItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  whatWeDo: string;
  whatClientsGet: string;
  whyItMatters: string;
}

export interface ServiceCategory {
  id: string;
  icon: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

export interface IndustryItem {
  id: string;
  icon: string;
  title: string;
  description?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
}

export interface VisionMissionItem {
  icon: string;
  text: string;
}

export interface CTASection {
  title: string;
  description?: string;
  button: CTAButton;
  backgroundGradient?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'github' | 'instagram';
  url: string;
}

export interface SiteConfig {
  metadata: SiteMetadata;
  navigation: {
    logo: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    links: Array<{
      label: string;
      href: string;
    }>;
    ctaButton: CTAButton;
  };
  homePage: {
    hero: HeroContent;
    pillars: PillarItem[];
    cta: CTASection;
  };
  aboutPage: {
    hero: {
      title: string;
      subtitle?: string;
    };
    intro: {
      title: string;
      description: string;
    };
    vision: VisionMissionItem[];
    mission: VisionMissionItem[];
    cta: CTASection;
  };
  servicesPage: {
    hero: {
      title: string;
      subtitle?: string;
    };
    categories: ServiceCategory[];
    cta: CTASection;
  };
  industries: IndustryItem[];
  team: TeamMember[];
  contactPage: {
    hero: {
      title: string;
      description: string;
    };
    form: {
      submitLabel: string;
      successMessage: string;
    };
    contactInfo: {
      email?: string;
      website?: string;
      linkedin?: string;
      twitter?: string;
    };
  };
  footer: {
    sections: FooterSection[];
    socialLinks: SocialLink[];
    copyright: string;
    bottomLinks?: FooterLink[];
  };
}

// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig: SiteConfig = {
  metadata: {
    siteName: 'Boğaziçi AI',
    siteUrl: 'https://www.bogazici.ai',
    description: 'End-to-end, secure and regulation-ready AI transformation for institutions and enterprises.',
    ogImage: '/og-image.png',
    twitterHandle: '@bogaziciai',
  },

  navigation: {
    logo: {
      src: '/logo.svg',
      alt: 'Boğaziçi AI Logo',
      width: 160,
      height: 40,
    },
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '/services' },
      { label: 'Industries', href: '#industries' },
      { label: 'Team', href: '#team' },
      { label: 'Contact', href: '/contact' },
    ],
    ctaButton: {
      label: 'Book a Call',
      href: '/contact',
      variant: 'primary',
    },
  },

  homePage: {
    hero: {
      badge: {
        text: 'AI Consultancy',
        icon: 'Brain',
      },
      title: 'End‑to‑end, secure and regulation‑ready AI transformation.',
      description:
        'We help institutions and enterprises create value with AI while managing risk responsibly.',
      primaryCTA: {
        label: 'Book a Call',
        href: '/contact',
        variant: 'primary',
        icon: 'ArrowRight',
      },
      secondaryCTA: {
        label: 'Explore Services',
        href: '/services',
        variant: 'secondary',
        icon: 'ArrowDown',
      },
    },

    pillars: [
      {
        id: 'governance',
        icon: 'Shield',
        title: 'Responsible AI Governance, Compliance & AI Safety',
        description:
          'Establish transparent, auditable, regulation-ready AI governance frameworks that enable innovation with control.',
      },
      {
        id: 'value',
        icon: 'TrendingUp',
        title: 'AI Value Creation',
        description:
          'Align AI initiatives with business objectives for measurable, scalable strategic value that drives real outcomes.',
      },
      {
        id: 'school',
        icon: 'GraduationCap',
        title: 'AI Business School',
        description:
          'Equip leaders and teams with human-centered, responsible, strategically aligned AI capabilities.',
      },
    ],

    cta: {
      title: 'Ready to Transform with AI?',
      description: 'Let us help you create value with AI while managing risk responsibly.',
      button: {
        label: 'Book a Call',
        href: '/contact',
        variant: 'primary',
      },
      backgroundGradient: true,
    },
  },

  aboutPage: {
    hero: {
      title: 'About Boğaziçi AI',
      subtitle: 'Responsible AI transformation for the modern enterprise',
    },
    intro: {
      title: 'About Boğaziçi AI',
      description:
        'We focus on the business-model question: how organizations create value with AI while managing risk responsibly. Our approach goes beyond technical implementation to address governance, strategy, and capability building.',
    },
    vision: [
      {
        icon: 'Target',
        text: 'Become the trusted authority for responsible, regulation-aligned AI governance.',
      },
      {
        icon: 'TrendingUp',
        text: 'Lead the transformation of AI into a measurable, scalable strategic driver for enterprises.',
      },
      {
        icon: 'GraduationCap',
        text: "Build the region's leading AI business school and become a reference consultancy in Türkiye and surrounding region.",
      },
    ],
    mission: [
      {
        icon: 'Shield',
        text: 'Establish transparent, auditable, regulation-ready AI governance for every client.',
      },
      {
        icon: 'BarChart3',
        text: 'Align AI initiatives with business objectives for measurable value.',
      },
      {
        icon: 'Users',
        text: 'Equip leaders and teams with human-centered, responsible, strategically aligned AI capabilities.',
      },
    ],
    cta: {
      title: 'Partner with Us',
      description: 'Join leading institutions transforming with responsible AI.',
      button: {
        label: 'Get in Touch',
        href: '/contact',
        variant: 'primary',
      },
      backgroundGradient: true,
    },
  },

  servicesPage: {
    hero: {
      title: 'Our Services',
      subtitle: 'Comprehensive AI transformation services for enterprises',
    },
    categories: [
      {
        id: 'governance',
        icon: 'Shield',
        title: 'Responsible AI Governance, Compliance & AI Safety',
        description: 'End-to-end governance frameworks that ensure responsible, safe, and compliant AI deployment.',
        services: [
          {
            id: 'foundations',
            title: 'Responsible AI Foundations',
            whatWeDo: 'Define Responsible AI principles, governance structures, and lifecycle controls tailored to your organization.',
            whatClientsGet: 'An enforceable framework with clear accountability, enabling innovation with control.',
            whyItMatters: 'Builds trust with stakeholders and ensures long-term AI sustainability.',
          },
          {
            id: 'risk-assessment',
            title: 'AI Risk & Compliance Assessment',
            whatWeDo: 'Inventory and classify AI systems, assess gaps, create audit/regulator readiness scorecards.',
            whatClientsGet: 'A clear remediation roadmap with prioritized actions for compliance.',
            whyItMatters: 'Reduces regulatory risk and prepares for upcoming AI legislation.',
          },
          {
            id: 'managed-office',
            title: 'Managed Responsible and Safe AI Office',
            whatWeDo: 'Provide ongoing governance operations, continuous audit readiness, and post-deployment monitoring.',
            whatClientsGet: 'Real-time safety monitoring for drift, misuse, and emerging risks.',
            whyItMatters: 'Ensures sustained compliance without building internal overhead.',
          },
        ],
      },
      {
        id: 'value-creation',
        icon: 'TrendingUp',
        title: 'AI Value Creation',
        description: 'Transform AI investments into measurable business outcomes.',
        services: [
          {
            id: 'use-case-engineering',
            title: 'AI Value Creation & Use-Case Engineering',
            whatWeDo: 'Identify, prioritize, and design high-impact AI use cases aligned with strategic goals.',
            whatClientsGet: 'A validated pipeline of AI initiatives with clear ROI projections.',
            whyItMatters: 'Focuses resources on initiatives that drive real business value.',
          },
          {
            id: 'operating-model',
            title: 'AI Operating Model & Portfolio Management',
            whatWeDo: 'Design organizational structures and processes to scale AI across the enterprise.',
            whatClientsGet: 'An AI operating model with governance, roles, and portfolio management.',
            whyItMatters: 'Enables systematic AI scaling beyond individual projects.',
          },
          {
            id: 'change-management',
            title: 'AI Change Management & Adoption Programs',
            whatWeDo: 'Drive organizational change to ensure AI adoption and value realization.',
            whatClientsGet: 'Change programs with communication, training, and adoption tracking.',
            whyItMatters: 'Ensures AI investments translate to actual business transformation.',
          },
          {
            id: 'procurement',
            title: 'AI Procurement, Vendor & Partner Advisory',
            whatWeDo: 'Guide vendor selection, contract negotiation, and partner ecosystem development.',
            whatClientsGet: 'Vendor assessments, RFP support, and partnership frameworks.',
            whyItMatters: 'Avoids vendor lock-in and ensures best-fit technology choices.',
          },
          {
            id: 'ethics-trust',
            title: 'AI Ethics, Trust & Reputation Advisory',
            whatWeDo: 'Develop ethical AI practices that protect and enhance brand reputation.',
            whatClientsGet: 'Ethics frameworks, stakeholder communication strategies.',
            whyItMatters: 'Builds trust with customers, regulators, and the public.',
          },
          {
            id: 'investment-advisory',
            title: 'AI Investment, Due Diligence & Board Advisory',
            whatWeDo: 'Support M&A due diligence, investment decisions, and board-level AI strategy.',
            whatClientsGet: 'AI maturity assessments, investment recommendations, board presentations.',
            whyItMatters: 'Enables informed strategic decisions at the highest level.',
          },
        ],
      },
      {
        id: 'business-school',
        icon: 'GraduationCap',
        title: 'AI Business School',
        description: 'Build AI capabilities across your organization from board to frontline.',
        services: [
          {
            id: 'senior-programs',
            title: 'Senior Management & Board AI Programs',
            whatWeDo: 'Deliver executive education on AI strategy, governance, and value creation.',
            whatClientsGet: 'Board-ready AI literacy and strategic decision-making capabilities.',
            whyItMatters: 'Empowers leadership to guide AI transformation effectively.',
          },
          {
            id: 'workforce-design',
            title: 'Workforce Automation & Operating Model Design with AI',
            whatWeDo: 'Redesign work processes and roles for the AI-augmented workforce.',
            whatClientsGet: 'Future-ready operating models and workforce transition plans.',
            whyItMatters: 'Prepares the organization for AI-driven operational changes.',
          },
          {
            id: 'mini-mba',
            title: 'AI for Leaders Mini MBA & Certificate Programs',
            whatWeDo: 'Comprehensive programs covering AI fundamentals, applications, and leadership.',
            whatClientsGet: 'Certified AI-literate leaders across the organization.',
            whyItMatters: 'Creates internal AI champions who drive adoption.',
          },
          {
            id: 'hackathons',
            title: 'Hackathons',
            whatWeDo: 'Design and facilitate AI innovation challenges and hackathons.',
            whatClientsGet: 'Engaged teams, innovative solutions, and identified AI talent.',
            whyItMatters: 'Accelerates innovation and builds organizational excitement for AI.',
          },
          {
            id: 'responsible-ai-training',
            title: 'Responsible AI, Risk & Trust',
            whatWeDo: 'Train teams on responsible AI practices, risk management, and trust-building.',
            whatClientsGet: 'Organization-wide responsible AI awareness and capabilities.',
            whyItMatters: 'Ensures everyone understands their role in responsible AI.',
          },
        ],
      },
    ],
    cta: {
      title: 'Ready to Start Your AI Journey?',
      description: 'Our team is ready to help you navigate the AI transformation.',
      button: {
        label: 'Book a Call',
        href: '/contact',
        variant: 'primary',
      },
      backgroundGradient: true,
    },
  },

  industries: [
    { id: 'financial', icon: 'Landmark', title: 'Financial Services', description: 'Banks, insurance, and investment firms navigating AI regulation and risk management.' },
    { id: 'telecom', icon: 'Smartphone', title: 'Telecommunications & Big Tech', description: 'Tech leaders scaling AI responsibly across products and operations.' },
    { id: 'public', icon: 'Building2', title: 'Public & Regulatory Institutions', description: 'Government bodies implementing transparent AI governance frameworks.' },
    { id: 'energy', icon: 'Zap', title: 'Energy & Infrastructure', description: 'Utilities and infrastructure companies optimizing with AI safely.' },
    { id: 'healthcare', icon: 'Heart', title: 'Healthcare', description: 'Healthcare providers adopting AI with patient safety and compliance at the core.' },
    { id: 'media', icon: 'Tv', title: 'Media', description: 'Media companies leveraging AI for content and audience engagement.' },
    { id: 'retail', icon: 'ShoppingCart', title: 'Retail & E-commerce', description: 'Retailers using AI for personalization while maintaining trust.' },
  ],

  team: [
    {
      id: 'mehmet',
      name: 'Mehmet Dolgan',
      role: 'Founder & Managing Partner',
      bio: 'AI strategist and digital transformation leader with extensive experience advising global enterprises on responsible AI adoption.',
      linkedin: 'https://www.linkedin.com/in/mehmet-dolgan-1a563b2/',
    },
    {
      id: 'hakan',
      name: 'Hakan Özkara',
      role: 'Cofounder & Managing Partner',
      bio: 'Experienced leader driving AI innovation and strategic partnerships in enterprise technology.',
      linkedin: 'https://www.linkedin.com/in/hakan-ozkara/',
    },
  ],

  contactPage: {
    hero: {
      title: 'Get in Touch',
      description: 'Ready to transform your organization with responsible AI? Let\'s start the conversation.',
    },
    form: {
      submitLabel: 'Send Message',
      successMessage: 'Thank you! We\'ll be in touch within 24 hours.',
    },
    contactInfo: {
      email: 'info@bogazici.ai',
      website: 'www.bogazici.ai',
      linkedin: 'https://linkedin.com/company/bogaziciai',
      twitter: 'https://twitter.com/bogaziciai',
    },
  },

  footer: {
    sections: [
      {
        title: 'Services',
        links: [
          { label: 'AI Governance', href: '/services#governance' },
          { label: 'AI Value Creation', href: '/services#value-creation' },
          { label: 'AI Business School', href: '/services#business-school' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#about' },
          { label: 'Team', href: '#team' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Industries', href: '#industries' },
          { label: 'Services', href: '/services' },
        ],
      },
    ],
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/company/bogaziciai' },
      { platform: 'twitter', url: 'https://twitter.com/bogaziciai' },
    ],
    copyright: '© 2024 Boğaziçi AI. All rights reserved.',
    bottomLinks: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
};
