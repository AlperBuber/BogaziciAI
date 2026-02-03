// ============================================
// BOĞAZIÇI AI - SITE CONFIGURATION
// All content is centralized here for easy updates
// ============================================

export const siteConfig = {
  // === METADATA ===
  metadata: {
    siteName: 'Boğaziçi AI',
    siteUrl: 'https://www.bogazici.ai',
    description: 'End-to-end, secure and regulation-ready AI transformation for institutions and enterprises.',
    email: 'info@bogazici.ai',
    linkedin: 'https://www.linkedin.com/company/bo%C4%9Fazi%C3%A7i-ai/',
    twitter: '@bogaziciai',
  },

  // === NAVIGATION ===
  navigation: {
    logo: {
      src: '/img/Logo.png',
      alt: 'Boğaziçi AI Logo',
    },
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Industries', href: '#industries' },
      { label: 'Team', href: '#team' },
      { label: 'Contact', href: '#contact' },
    ],
    ctaButton: {
      label: 'Book a Call',
      href: '#contact',
    },
  },

  // === HERO SECTION ===
  hero: {
    headline: 'End‑to‑end, secure and regulation‑ready AI transformation.',
    subtext: 'We help institutions and enterprises create value with AI while managing risk responsibly.',
    primaryCTA: {
      label: 'Book a Call',
      href: '#contact',
    },
    secondaryCTA: {
      label: 'Explore Services',
      href: '#services',
    },
    stats: [
      { value: '90%', label: 'AI Value Creation' },
      { value: '100%', label: 'Regulation Compliance' },
      { value: '50+', label: 'Enterprise Clients' },
    ],
  },

  // === THREE PILLARS ===
  pillars: [
    {
      id: 'governance',
      icon: 'Shield',
      title: 'Responsible AI Governance, Compliance & AI Safety',
      description: 'Establish transparent, auditable, and regulation-ready governance frameworks.',
      color: 'blue',
    },
    {
      id: 'value',
      icon: 'TrendingUp',
      title: 'AI Value Creation',
      description: 'Align AI initiatives with business objectives for measurable, scalable value.',
      color: 'green',
    },
    {
      id: 'school',
      icon: 'GraduationCap',
      title: 'AI Business School',
      description: 'Equip leaders and teams with human-centered, responsible, strategically aligned AI skills.',
      color: 'purple',
    },
  ],

  // === ABOUT SECTION ===
  about: {
    intro: 'Boğaziçi AI focuses on the business-model question: how organizations create value with AI while managing risk responsibly—not just technical implementation.',
    vision: {
      title: 'Our Vision',
      items: [
        'Become the trusted authority for responsible, regulation-aligned AI governance.',
        'Lead the transformation of AI into a measurable, scalable strategic driver.',
        'Build the region\'s leading AI Business School and become a reference consultancy in Türkiye and surrounding region.',
      ],
    },
    mission: {
      title: 'Our Mission',
      items: [
        'Establish transparent, auditable, regulation-ready governance frameworks.',
        'Align AI initiatives with business objectives for measurable value.',
        'Equip leaders and teams with human-centered, responsible, strategically aligned AI capabilities.',
      ],
    },
  },

  // === SERVICES ===
  services: {
    sectionTitle: 'Our Services',
    sectionDescription: 'Comprehensive AI transformation across governance, value creation, and capability building.',
    categories: [
      {
        id: 'governance',
        icon: 'Shield',
        title: 'Responsible AI Governance, Compliance & AI Safety',
        items: [
          {
            title: 'Responsible AI Foundations',
            whatWeDo: 'Define Responsible AI principles, governance structures, and lifecycle controls.',
            whatClientsGet: 'Enforceable framework, clear accountability, innovation with control.',
            whyItMatters: 'Build AI systems that are trustworthy, compliant, and sustainable from day one.',
          },
          {
            title: 'AI Risk & Compliance Assessment',
            whatWeDo: 'Inventory and classify AI systems, assess gaps, and deliver audit/regulator readiness scorecard.',
            whatClientsGet: 'Comprehensive remediation roadmap and compliance documentation.',
            whyItMatters: 'Stay ahead of evolving AI regulations and avoid costly compliance failures.',
          },
          {
            title: 'Managed Responsible and Safe AI Office',
            whatWeDo: 'Provide ongoing governance operations, continuous audit readiness, and post-deployment monitoring.',
            whatClientsGet: 'Safety monitoring, drift detection, and misuse prevention.',
            whyItMatters: 'Ensure your AI systems remain compliant and safe throughout their lifecycle.',
          },
        ],
      },
      {
        id: 'value',
        icon: 'TrendingUp',
        title: 'AI Value Creation',
        items: [
          {
            title: 'AI Value Creation & Use‑Case Engineering',
            whatWeDo: 'Identify high-impact AI opportunities and engineer practical use cases.',
            whatClientsGet: 'Prioritized AI roadmap with clear ROI projections.',
            whyItMatters: 'Focus resources on AI initiatives that deliver measurable business value.',
          },
          {
            title: 'AI Operating Model & Portfolio Management',
            whatWeDo: 'Design organizational structures and processes for AI at scale.',
            whatClientsGet: 'Scalable AI operating model and portfolio management framework.',
            whyItMatters: 'Transform from ad-hoc AI experiments to systematic value creation.',
          },
          {
            title: 'AI Change Management & Adoption Programs',
            whatWeDo: 'Drive organizational change and user adoption for AI initiatives.',
            whatClientsGet: 'Change management playbook and adoption metrics.',
            whyItMatters: 'Ensure AI investments translate into actual business transformation.',
          },
          {
            title: 'AI Procurement, Vendor & Partner Advisory',
            whatWeDo: 'Guide AI technology selection, vendor evaluation, and partnership structuring.',
            whatClientsGet: 'Vendor assessment framework and negotiation support.',
            whyItMatters: 'Make informed AI technology decisions and build strategic partnerships.',
          },
          {
            title: 'AI Ethics, Trust & Reputation Advisory',
            whatWeDo: 'Develop ethical AI guidelines and stakeholder trust strategies.',
            whatClientsGet: 'Ethics framework and reputation risk mitigation plan.',
            whyItMatters: 'Build and maintain stakeholder trust in your AI initiatives.',
          },
          {
            title: 'AI Investment, Due Diligence & Board Advisory',
            whatWeDo: 'Provide AI expertise for investment decisions and board-level guidance.',
            whatClientsGet: 'Due diligence reports and board presentation materials.',
            whyItMatters: 'Make strategic AI investment decisions with confidence.',
          },
        ],
      },
      {
        id: 'school',
        icon: 'GraduationCap',
        title: 'AI Business School',
        items: [
          {
            title: 'Senior Management & Board AI Programs',
            whatWeDo: 'Executive education on AI strategy, governance, and value creation.',
            whatClientsGet: 'Customized executive programs and leadership alignment.',
            whyItMatters: 'Ensure leadership understands and champions AI transformation.',
          },
          {
            title: 'Workforce Automation & Operating Model Design with AI',
            whatWeDo: 'Train teams on AI-augmented workflows and process redesign.',
            whatClientsGet: 'Workforce readiness assessment and training curriculum.',
            whyItMatters: 'Prepare your workforce for the AI-enabled future of work.',
          },
          {
            title: 'AI for Leaders Mini MBA & Certificate Programs',
            whatWeDo: 'Comprehensive AI business education for mid-senior leaders.',
            whatClientsGet: 'Certified AI business leaders across your organization.',
            whyItMatters: 'Build internal AI capability and reduce dependency on external consultants.',
          },
          {
            title: 'Hackathons',
            whatWeDo: 'Facilitate innovation events to ideate and prototype AI solutions.',
            whatClientsGet: 'Rapid AI prototypes and innovation culture boost.',
            whyItMatters: 'Accelerate AI innovation and engage your workforce.',
          },
          {
            title: 'Responsible AI, Risk & Trust',
            whatWeDo: 'Specialized training on AI ethics, risk management, and trust building.',
            whatClientsGet: 'Risk-aware AI practitioners across your organization.',
            whyItMatters: 'Embed responsible AI practices into your organizational DNA.',
          },
        ],
      },
    ],
  },

  // === INDUSTRIES ===
  industries: {
    sectionTitle: 'Industries We Serve',
    sectionDescription: 'Deep expertise across sectors navigating AI transformation.',
    items: [
      { id: 'finance', icon: 'Building2', label: 'Financial Services' },
      { id: 'telecom', icon: 'Radio', label: 'Telecommunications / Big Tech' },
      { id: 'public', icon: 'Landmark', label: 'Public & Regulatory Institutions' },
      { id: 'energy', icon: 'Zap', label: 'Energy & Infrastructure' },
      { id: 'health', icon: 'Heart', label: 'Healthcare' },
      { id: 'media', icon: 'Tv', label: 'Media' },
      { id: 'retail', icon: 'ShoppingCart', label: 'Retail & E‑commerce' },
    ],
  },

  // === TEAM ===
  team: {
    sectionTitle: 'Our Team',
    sectionDescription: 'Expert consultants driving responsible AI transformation.',
    members: [
      {
        id: 'mehmet',
        name: 'Mehmet Dolgan',
        role: 'Founder & Managing Partner',
        bio: 'AI strategist with 15+ years of experience in enterprise transformation. Former technology executive at leading financial institutions. Passionate about responsible AI adoption.',
        image: '/img/team/mehmet.jpg', // Placeholder - will use generated avatar
        linkedin: 'https://linkedin.com/in/mehmetdolgan',
      },
    ],
  },

  // === CONTACT ===
  contact: {
    sectionTitle: 'Get in Touch',
    sectionDescription: 'Ready to start your AI transformation journey? Let\'s talk.',
    email: 'info@bogazici.ai',
    website: 'www.bogazici.ai',
    linkedin: 'https://linkedin.com/company/bogaziciai',
    twitter: '@bogaziciai',
    form: {
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      organizationPlaceholder: 'Organization',
      messagePlaceholder: 'How can we help you?',
      submitLabel: 'Send Message',
      successMessage: 'Thank you! We\'ll be in touch soon.',
    },
  },

  // === FOOTER ===
  footer: {
    description: 'End-to-end, secure and regulation-ready AI transformation for institutions and enterprises.',
    sections: [
      {
        title: 'Services',
        links: [
          { label: 'AI Governance', href: '#services' },
          { label: 'AI Value Creation', href: '#services' },
          { label: 'AI Business School', href: '#services' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#about' },
          { label: 'Team', href: '#team' },
          { label: 'Contact', href: '#contact' },
        ],
      },
    ],
    copyright: '© 2024 Boğaziçi AI. All rights reserved.',
  },

  // === CTA SECTIONS ===
  cta: {
    primary: {
      title: 'Ready to Transform with AI?',
      description: 'Book a consultation to discuss your AI journey.',
      buttonLabel: 'Book a Call',
      buttonHref: '#contact',
    },
  },
};

export type SiteConfig = typeof siteConfig;
