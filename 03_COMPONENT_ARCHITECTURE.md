# 🧱 Component Architecture: Theme-Agnostic Template

> **İlke:** Her bileşen, içeriğini prop olarak dışarıdan almalı. Hardcoded metin veya görsel YASAKTIR.

---

## 📂 Bileşen Hiyerarşisi

```
components/
├── layout/
│   ├── Header.tsx           # Sticky navigation
│   ├── Footer.tsx           # Site alt bilgi
│   ├── Container.tsx        # Max-width wrapper
│   └── MobileNav.tsx        # Hamburger menü
│
├── sections/
│   ├── HeroSection.tsx      # Ana giriş bölümü
│   ├── FeatureGrid.tsx      # Bento grid özellikler
│   ├── StickyScroll.tsx     # Paralaks scroll section
│   ├── VerticalTabs.tsx     # İnteraktif sekmeler
│   ├── ComparisonGrid.tsx   # Before/After karşılaştırma
│   ├── ValueProposition.tsx # Değer önerileri
│   └── CTASection.tsx       # Call-to-action
│
├── ui/
│   ├── Button.tsx           # Çoklu varyant buton
│   ├── Card.tsx             # Feature/info kartları
│   ├── Badge.tsx            # Etiketler
│   ├── Icon.tsx             # Lucide icon wrapper
│   └── GradientText.tsx     # Renk geçişli metin
│
└── motion/
    ├── FadeInUp.tsx         # Aşağıdan yukarı belirme
    ├── StaggerContainer.tsx # Sıralı animasyon
    ├── ParallaxWrapper.tsx  # Paralaks efekt
    └── FloatingElement.tsx  # Yüzen dekoratif element
```

---

## 🎯 Section Bileşenleri

### 1. HeroSection

**Conium'dan Gözlem:** Büyük başlık, açıklama, 2 CTA butonu ve sağda floating görsel.

```tsx
interface HeroSectionProps {
  badge?: string;                    // "New Feature" etiketi
  title: string;                     // Ana başlık
  highlightedText?: string;          // Gradient renkli kısım
  description: string;               // Açıklama paragrafı
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  image?: {
    src: string;
    alt: string;
  };
  floatingElements?: boolean;        // Dekoratif elementler
}
```

**Kullanım:**
```tsx
<HeroSection
  badge="🚀 Yeni Özellik"
  title="İnşaatı AI ile"
  highlightedText="Yeniden İnşa Ediyoruz"
  description="Conium, inşaat operasyonlarını..."
  primaryCTA={{ label: "Demo Talep Et", href: "/demo" }}
  secondaryCTA={{ label: "Nasıl Çalışır?", href: "#how" }}
  image={{ src: "/hero-image.png", alt: "Hero" }}
  floatingElements
/>
```

---

### 2. FeatureGrid (Bento Grid)

**Conium'dan Gözlem:** Agent modülleri için farklı boyutlarda kartlardan oluşan grid.

```tsx
interface FeatureItem {
  icon: string;                      // Lucide icon adı
  title: string;
  description: string;
  size?: 'default' | 'large' | 'wide'; // Grid yerleşimi
  gradient?: boolean;                // Gradient arka plan
}

interface FeatureGridProps {
  sectionTitle?: string;
  sectionDescription?: string;
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
}
```

**Grid Layout CSS:**
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.bento-item.large {
  grid-column: span 2;
  grid-row: span 2;
}

.bento-item.wide {
  grid-column: span 2;
}
```

---

### 3. StickyScrollSection

**Conium'dan Gözlem:** Sol tarafta sabit başlık/açıklama, sağda scroll eden içerik kartları.

```tsx
interface ScrollItem {
  id: string;
  title: string;
  description: string;
  image?: string;
}

interface StickyScrollProps {
  stickyContent: {
    title: string;
    description: string;
  };
  scrollItems: ScrollItem[];
}
```

**Layout Mantığı:**
```tsx
<section className="relative">
  {/* Sol taraf - Sticky */}
  <div className="sticky top-24 w-1/2">
    <h2>{stickyContent.title}</h2>
    <p>{stickyContent.description}</p>
  </div>
  
  {/* Sağ taraf - Scroll */}
  <div className="w-1/2 ml-auto space-y-8">
    {scrollItems.map(item => (
      <Card key={item.id} {...item} />
    ))}
  </div>
</section>
```

---

### 4. VerticalTabs

**Conium'dan Gözlem:** Sol tarafta dikey sekmeler, sağda değişen içerik alanı.

```tsx
interface TabItem {
  id: string;
  icon: string;
  label: string;
  title: string;
  description: string;
  image?: string;
  bulletPoints?: string[];
}

interface VerticalTabsProps {
  sectionTitle?: string;
  tabs: TabItem[];
  defaultActiveTab?: string;
}
```

**Animasyon Detayı:**
- Sekme değiştiğinde içerik `fade` ile geçiş yapar
- Aktif sekmenin sol kenarında `accent` renk çizgisi
- Hover'da sekme arka planı hafifçe değişir

---

### 5. ComparisonGrid

**Conium'dan Gözlem:** "What You Do Today" vs "What Conium Does" yapısı.

```tsx
interface ComparisonItem {
  before: {
    icon?: string;
    text: string;
  };
  after: {
    icon?: string;
    text: string;
  };
}

interface ComparisonGridProps {
  beforeTitle: string;              // "Bugün Yaptığınız"
  afterTitle: string;               // "Conium ile"
  items: ComparisonItem[];
  highlightAfter?: boolean;         // After sütununu vurgula
}
```

---

### 6. CTASection

**Conium'dan Gözlem:** Gradient arka plan, büyük başlık ve tek CTA butonu.

```tsx
interface CTASectionProps {
  title: string;
  description?: string;
  cta: {
    label: string;
    href: string;
  };
  backgroundGradient?: boolean;
  centered?: boolean;
}
```

---

## 🔘 UI Bileşenleri

### Button

```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;                    // Sağda veya solda ikon
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
  href?: string;                    // Link olarak render
  onClick?: () => void;
}
```

### Card

```tsx
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;                  // Hover efekti
  className?: string;
}
```

### Badge

```tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning';
  size?: 'sm' | 'md';
  icon?: string;
}
```

---

## 🎬 Motion Bileşenleri

### FadeInUp

```tsx
interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;                   // Gecikme (saniye)
  duration?: number;                // Süre
  distance?: number;                // Kayma mesafesi (px)
}

// Kullanım
<FadeInUp delay={0.2}>
  <Card>İçerik</Card>
</FadeInUp>
```

### StaggerContainer

```tsx
interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;            // Her child arası gecikme
}

// Kullanım - children sırayla animasyon yapar
<StaggerContainer staggerDelay={0.1}>
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
</StaggerContainer>
```

---

## 📋 Prop Tasarım İlkeleri

### ✅ DOĞRU Yaklaşım

1. **Tüm içerik prop olarak gelir**
2. **Varsayılan değerler mantıklı olmalı**
3. **Tip güvenliği (TypeScript)**
4. **className prop'u ile override imkanı**

```tsx
// İyi tasarlanmış bileşen
interface SectionProps {
  title: string;           // Zorunlu
  description?: string;    // Opsiyonel
  items: Item[];           // Veri dizisi
  layout?: 'grid' | 'list'; // Varsayılan: 'grid'
  className?: string;      // Stil override
}
```

### ❌ KAÇINILMASI GEREKENLER

```tsx
// KÖTÜ - Hardcoded içerik
const HeroSection = () => (
  <h1>Welcome to Conium</h1>  // ❌ İçerik prop olmalı
);

// KÖTÜ - Sabit renkler
<div className="bg-blue-500">  // ❌ bg-primary olmalı

// KÖTÜ - Sabit görseller
<img src="/construction.jpg" />  // ❌ Prop olarak gelmeli
```

---

## 🔧 Generic İsimlendirme

| Conium'daki Spesifik | Generic Alternatif |
|---------------------|-------------------|
| `AgentCard` | `FeatureCard` |
| `ConstructionHero` | `HeroSection` |
| `AIAgentsTabs` | `VerticalTabs` |
| `BoQGenerator` | (data olarak gelir) |

> 💡 **Kural:** Bileşen isimleri sektör-agnostik olmalı. "Agent", "Construction" gibi kelimeler kullanılMAMALI.
