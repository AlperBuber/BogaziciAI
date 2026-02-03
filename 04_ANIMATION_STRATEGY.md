# 🎬 Animation Strategy: Framer Motion Implementation

> **Amaç:** Conium.ai'daki "premium" hissi veren animasyonları, içerikten bağımsız ve tekrar kullanılabilir şekilde kurgulamak.

---

## 🔍 Conium.ai Animasyon Analizi

| Efekt | Kullanıldığı Yer | Tetikleyici |
|-------|------------------|-------------|
| **Fade-in Up** | Tüm section'lar | Scroll into view |
| **Staggered Cards** | Feature grid, Agent kartları | Parent görünür olunca |
| **Floating Elements** | Hero section dekoratif parçacıklar | Sayfa yüklenince (infinite) |
| **Tab Content Fade** | Use Cases bölümü | Sekme değişimi |
| **Sticky Scroll** | Product sayfası | Scroll position |
| **Hover Scale** | Butonlar, kartlar | Mouse hover |
| **Parallax** | Arka plan elementleri | Scroll |

---

## 📦 Motion Variants Kütüphanesi

### `lib/motion-variants.ts`

```typescript
import { Variants } from 'framer-motion';

// ========================================
// FADE IN VARIANTS
// ========================================

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom easing (smooth out)
    },
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ========================================
// STAGGER CONTAINER
// ========================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// ========================================
// SCALE VARIANTS
// ========================================

export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.2 },
};

export const tapScale = {
  scale: 0.98,
};

// ========================================
// FLOATING ANIMATION (Infinite)
// ========================================

export const floatingVariant: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const floatingRotate: Variants = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ========================================
// TAB CONTENT TRANSITION
// ========================================

export const tabContentVariant: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.2,
    },
  },
};
```

---

## 🔧 Reusable Motion Components

### FadeInUp Component

```tsx
// components/motion/FadeInUp.tsx
'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion-variants';

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeInUp: React.FC<FadeInUpProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: fadeInUp.hidden,
        visible: {
          ...fadeInUp.visible,
          transition: {
            ...fadeInUp.visible.transition,
            delay,
            duration,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
```

### StaggerContainer Component

```tsx
// components/motion/StaggerContainer.tsx
'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/motion-variants';

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  className,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Her child bunu kullanmalı
export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <motion.div variants={staggerItem} className={className}>
    {children}
  </motion.div>
);
```

### FloatingElement Component

```tsx
// components/motion/FloatingElement.tsx
'use client';

import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: React.ReactNode;
  direction?: 'up' | 'down';
  duration?: number;
  delay?: number;
  className?: string;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  direction = 'up',
  duration = 4,
  delay = 0,
  className,
}) => {
  const yValues = direction === 'up' ? [0, -15, 0] : [0, 15, 0];

  return (
    <motion.div
      animate={{
        y: yValues,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
```

### ParallaxWrapper Component

```tsx
// components/motion/ParallaxWrapper.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxWrapperProps {
  children: React.ReactNode;
  speed?: number;        // -1 ile 1 arası (negatif = ters yön)
  className?: string;
}

export const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({
  children,
  speed = 0.5,
  className,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};
```

---

## 🎯 Kullanım Örnekleri

### Hero Section Animasyonları

```tsx
// Hero başlık ve açıklama sıralı animasyon
<FadeInUp delay={0}>
  <Badge>🚀 Yeni Özellik</Badge>
</FadeInUp>

<FadeInUp delay={0.1}>
  <h1>Başlık Metni</h1>
</FadeInUp>

<FadeInUp delay={0.2}>
  <p>Açıklama paragrafı...</p>
</FadeInUp>

<FadeInUp delay={0.3}>
  <div className="flex gap-4">
    <Button>CTA 1</Button>
    <Button variant="secondary">CTA 2</Button>
  </div>
</FadeInUp>

{/* Sağdaki görsel */}
<FadeInUp delay={0.4}>
  <FloatingElement>
    <img src="/hero.png" alt="Hero" />
  </FloatingElement>
</FadeInUp>
```

### Feature Grid Stagger

```tsx
<StaggerContainer className="grid grid-cols-3 gap-6">
  {features.map((feature) => (
    <StaggerItem key={feature.id}>
      <Card>
        <Icon name={feature.icon} />
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </Card>
    </StaggerItem>
  ))}
</StaggerContainer>
```

### Tab İçerik Geçişi

```tsx
import { AnimatePresence, motion } from 'framer-motion';
import { tabContentVariant } from '@/lib/motion-variants';

// Tab içerik değişimi
<AnimatePresence mode="wait">
  <motion.div
    key={activeTab}
    variants={tabContentVariant}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    {tabs.find(t => t.id === activeTab)?.content}
  </motion.div>
</AnimatePresence>
```

---

## ⚡ Performans Optimizasyonu

### GPU Hızlandırma

```typescript
// Performans için sadece transform ve opacity animasyonu yap
// KAÇIN: width, height, margin, padding animasyonu

// ✅ DOĞRU
{
  opacity: [0, 1],
  transform: 'translateY(30px)',
}

// ❌ YANLIŞ
{
  height: [0, 'auto'],
  marginTop: [0, 20],
}
```

### Reduced Motion Desteği

```tsx
import { useReducedMotion } from 'framer-motion';

export const FadeInUp = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div>{children}</div>;
  }
  
  return (
    <motion.div variants={fadeInUp}>
      {children}
    </motion.div>
  );
};
```

### Viewport Once

```tsx
// Animasyon sadece 1 kez çalışsın (scroll geri gelince tekrarlanmasın)
whileInView="visible"
viewport={{ once: true, margin: '-100px' }}
```

---

## 📝 Animasyon Standartları

| Property | Değer | Açıklama |
|----------|-------|----------|
| Duration (fade) | 0.5-0.6s | Section geçişleri |
| Duration (hover) | 0.2s | Hızlı tepki |
| Duration (tab) | 0.3s | İçerik değişimi |
| Stagger delay | 0.1s | Card'lar arası |
| Easing | [0.22, 1, 0.36, 1] | Smooth out |
| Viewport margin | -100px | Erken başla |

> 💡 **Pro Tip:** Tüm animasyonlar `motion-variants.ts` dosyasından import edilmeli. Bu sayede tek dosyadan tüm sitenin animasyon hızı kontrol edilebilir.
