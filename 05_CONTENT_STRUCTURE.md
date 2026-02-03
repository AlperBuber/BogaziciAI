# 📄 Content Structure: Site Configuration System

> **İlke:** Tüm metin, görsel ve ikon verileri koddan tamamen ayrılmalı. Tek dosya değişikliğiyle tüm site içeriği güncellenebilmeli.

---

## 🗂️ Dosya Yapısı

```
config/
├── site.config.ts        # Ana içerik config dosyası
├── navigation.config.ts  # Menü ve linkler
└── theme.config.ts       # Renk ve stil (02_DESIGN_SYSTEM'de)
```

---

## 📦 Ana Site Config Interface

### `config/site.config.ts`

```typescript
// ============================================
// TYPE DEFINITIONS
// ============================================

interface SiteMetadata {
  siteName: string;
  siteUrl: string;
  description: string;
  ogImage: string;
  twitterHandle?: string;
}

interface CTAButton {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: string;
}

interface HeroContent {
  badge?: {
    text: string;
    icon?: string;
  };
  title: string;
  highlightedText?: string;        // Gradient ile vurgulanacak kısım
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
  heroImage: {
    src: string;
    alt: string;
  };
}

interface FeatureItem {
  id: string;
  icon: string;                    // Lucide icon adı: 'Zap', 'Shield', 'Rocket'
  title: string;
  description: string;
  size?: 'default' | 'large' | 'wide';
}

interface TabItem {
  id: string;
  icon: string;
  label: string;
  title: string;
  description: string;
  bulletPoints?: string[];
  image?: string;
}

interface ComparisonRow {
  before: {
    icon?: string;
    text: string;
  };
  after: {
    icon?: string;
    text: string;
  };
}

interface ValueItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface CTASection {
  title: string;
  description?: string;
  button: CTAButton;
  backgroundGradient?: boolean;
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'github' | 'instagram';
  url: string;
}

// ============================================
// MAIN CONFIG INTERFACE
// ============================================

export interface SiteConfig {
  metadata: SiteMetadata;

  // Header / Navigation
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

  // Page: Home
  homePage: {
    hero: HeroContent;
    
    trustedBy?: {
      title: string;
      logos: Array<{
        src: string;
        alt: string;
      }>;
    };

    features: {
      sectionTitle: string;
      sectionDescription?: string;
      items: FeatureItem[];
    };

    useCases: {
      sectionTitle: string;
      tabs: TabItem[];
    };

    comparison?: {
      beforeTitle: string;
      afterTitle: string;
      rows: ComparisonRow[];
    };

    values: {
      sectionTitle: string;
      items: ValueItem[];
    };

    cta: CTASection;
  };

  // Page: About
  aboutPage: {
    hero: {
      title: string;
      subtitle?: string;
    };

    intro: {
      title: string;
      description: string;
      image?: string;
    };

    mission: {
      title: string;
      description: string;
    };

    approach?: {
      title: string;
      description: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };

    values: ValueItem[];

    cta: CTASection;
  };

  // Page: Product
  productPage: {
    hero: {
      title: string;
      subtitle?: string;
    };

    features: FeatureItem[];

    howItWorks?: {
      sectionTitle: string;
      steps: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };

    useCases: TabItem[];

    cta: CTASection;
  };

  // Page: Contact
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
      phone?: string;
      address?: string;
    };
  };

  // Footer
  footer: {
    sections: FooterSection[];
    socialLinks: SocialLink[];
    copyright: string;
    bottomLinks?: FooterLink[];
  };
}
```

---

## 🎯 Örnek Site Config

### Conium.ai Temalı Config

```typescript
// config/site.config.ts

import { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  metadata: {
    siteName: 'Conium AI',
    siteUrl: 'https://conium.ai',
    description: 'Rebuilding Construction with AI',
    ogImage: '/og-image.png',
    twitterHandle: '@coniumai',
  },

  navigation: {
    logo: {
      src: '/logo.svg',
      alt: 'Conium AI Logo',
      width: 140,
      height: 40,
    },
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Product', href: '/product' },
      { label: 'Contact', href: '/contact' },
    ],
    ctaButton: {
      label: 'Request A Demo',
      href: '/demo',
      variant: 'primary',
    },
  },

  homePage: {
    hero: {
      badge: {
        text: '🚀 Now Available',
        icon: 'Sparkles',
      },
      title: 'Rebuilding Construction with AI:',
      highlightedText: 'One Integrated System, Endless Possibilities.',
      description:
        'Conium is transforming construction operations with industry-specific AI agents that understand, decide, and act—automating the complex so you can build with precision.',
      primaryCTA: {
        label: 'Request A Demo',
        href: '/demo',
        variant: 'primary',
        icon: 'ArrowRight',
      },
      secondaryCTA: {
        label: 'How It Works',
        href: '#how-it-works',
        variant: 'secondary',
        icon: 'Play',
      },
      heroImage: {
        src: '/images/hero-construction.png',
        alt: 'Construction AI Dashboard',
      },
    },

    trustedBy: {
      title: 'Trusted by Innovators',
      logos: [
        { src: '/logos/company1.svg', alt: 'Company 1' },
        { src: '/logos/company2.svg', alt: 'Company 2' },
      ],
    },

    features: {
      sectionTitle: 'AI Agents Built for Construction',
      sectionDescription: 'Specialized agents that handle your most complex workflows',
      items: [
        {
          id: 'boq',
          icon: 'FileSpreadsheet',
          title: 'BoQ Generator',
          description: 'Automatically extract and generate Bill of Quantities from project documents.',
          size: 'large',
        },
        {
          id: 'scheduling',
          icon: 'Calendar',
          title: 'Scheduling Agent',
          description: 'Intelligent project scheduling with resource optimization.',
          size: 'default',
        },
        // ... more items
      ],
    },

    useCases: {
      sectionTitle: 'How Teams Use Conium',
      tabs: [
        {
          id: 'rfp',
          icon: 'FileSearch',
          label: 'RFP Analysis',
          title: 'RFP Analysis & Summarization',
          description: 'Automatically analyze and summarize RFP documents...',
          bulletPoints: [
            'Extract key requirements',
            'Identify compliance gaps',
            'Generate executive summaries',
          ],
          image: '/images/rfp-analysis.png',
        },
        // ... more tabs
      ],
    },

    values: {
      sectionTitle: 'Built for Construction',
      items: [
        {
          id: 'security',
          icon: 'Shield',
          title: 'Enterprise Security',
          description: 'SOC 2 compliant with end-to-end encryption.',
        },
        // ... more values
      ],
    },

    cta: {
      title: 'Build Smarter with Conium',
      description: 'Join construction leaders already using AI.',
      button: {
        label: 'Request Access',
        href: '/demo',
        variant: 'primary',
      },
      backgroundGradient: true,
    },
  },

  // ... aboutPage, productPage, contactPage configs

  footer: {
    sections: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '/product#features' },
          { label: 'Use Cases', href: '/product#use-cases' },
          { label: 'Pricing', href: '/pricing' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About Us', href: '/about' },
          { label: 'Careers', href: '/careers' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/company/conium' },
      { platform: 'twitter', url: 'https://twitter.com/coniumai' },
    ],
    copyright: '© 2024 Conium AI. All rights reserved.',
    bottomLinks: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
};
```

---

## 🔄 Fork Rehberi: Yeni Sektör Uyarlama

### Adım 1: Config Dosyasını Kopyala

```bash
cp config/site.config.ts config/site.config.healthcare.ts
```

### Adım 2: İçeriği Güncelle

```typescript
// Sağlık sektörü örneği
export const siteConfig: SiteConfig = {
  metadata: {
    siteName: 'HealthAI',
    description: 'AI-Powered Healthcare Solutions',
    // ...
  },

  homePage: {
    hero: {
      title: 'Revolutionizing Healthcare with',
      highlightedText: 'Intelligent AI Assistants',
      description: 'Empowering healthcare professionals with AI...',
      // ...
    },

    features: {
      sectionTitle: 'AI Assistants for Healthcare',
      items: [
        {
          id: 'diagnosis',
          icon: 'Stethoscope',
          title: 'Diagnosis Assistant',
          description: 'AI-powered diagnostic support...',
        },
        // ...
      ],
    },
  },
};
```

### Adım 3: Görselleri Değiştir

```
public/
├── images/
│   ├── hero-healthcare.png    # Yeni hero görseli
│   └── features/              # Feature ikonları/görseller
└── logos/
    └── healthai-logo.svg      # Yeni logo
```

### Adım 4: Renkleri Güncelle

```css
/* globals.css */
:root {
  --color-primary: 173 80% 40%;    /* Teal */
  --color-accent: 142 76% 36%;     /* Yeşil */
}
```

---

## 🧩 Config Kullanımı (Components İçinde)

### Hero Section Örneği

```tsx
// components/sections/HeroSection.tsx
import { siteConfig } from '@/config/site.config';

export const HeroSection = () => {
  const { hero } = siteConfig.homePage;

  return (
    <section>
      {hero.badge && (
        <Badge icon={hero.badge.icon}>
          {hero.badge.text}
        </Badge>
      )}
      
      <h1>
        {hero.title}
        {hero.highlightedText && (
          <span className="text-gradient">{hero.highlightedText}</span>
        )}
      </h1>
      
      <p>{hero.description}</p>
      
      <div className="flex gap-4">
        <Button href={hero.primaryCTA.href} icon={hero.primaryCTA.icon}>
          {hero.primaryCTA.label}
        </Button>
        
        {hero.secondaryCTA && (
          <Button 
            href={hero.secondaryCTA.href} 
            variant="secondary"
          >
            {hero.secondaryCTA.label}
          </Button>
        )}
      </div>
      
      <img src={hero.heroImage.src} alt={hero.heroImage.alt} />
    </section>
  );
};
```

---

## ✅ Content Değişim Kontrol Listesi

Yeni bir tema oluştururken değiştirilmesi gereken dosyalar:

| Dosya | Değişiklik |
|-------|-----------|
| `config/site.config.ts` | Tüm metinler, başlıklar, açıklamalar |
| `config/theme.config.ts` | Renk paleti (opsiyonel) |
| `globals.css` | CSS değişkenleri (opsiyonel) |
| `public/images/` | Görseller |
| `public/logo.svg` | Logo |
| `public/favicon.ico` | Favicon |

> 💡 **Sonuç:** Kodda HİÇ değişiklik yapmadan, sadece config ve asset dosyalarını güncelleyerek tamamen farklı bir sektöre uygun site oluşturabilirsiniz!
