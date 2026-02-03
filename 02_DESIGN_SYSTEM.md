# 🎨 Design System: Theme-Agnostic Template

> **Kritik İlke:** Tüm tasarım değerleri dinamik yönetilmelidir. Hardcoded renkler veya değerler YASAKTIR.

---

## 🌈 Semantik Renk Sistemi

### CSS Değişkenleri (`globals.css`)

```css
:root {
  /* === PRIMARY COLORS === */
  --color-primary: 217 91% 60%;          /* Mavi - Conium'daki ana renk */
  --color-primary-hover: 217 91% 50%;
  --color-primary-light: 217 91% 95%;
  
  /* === SECONDARY/ACCENT === */
  --color-accent: 265 83% 57%;           /* Mor - Gradient vurguları */
  --color-accent-2: 160 84% 39%;         /* Yeşil - İkincil vurgular */
  
  /* === NEUTRAL GRAYS === */
  --color-background: 0 0% 100%;         /* Beyaz arka plan */
  --color-surface: 220 14% 96%;          /* Kartlar, bölümler */
  --color-border: 220 13% 91%;           /* Sınır çizgileri */
  
  /* === TEXT HIERARCHY === */
  --color-text-primary: 222 47% 11%;     /* Ana metin - koyu */
  --color-text-secondary: 220 9% 46%;    /* İkincil metin - gri */
  --color-text-muted: 220 9% 64%;        /* Soluk metin */
  --color-text-on-primary: 0 0% 100%;    /* Buton üzeri beyaz */
  
  /* === GRADIENTS === */
  --gradient-hero: linear-gradient(135deg, hsl(265 83% 57%), hsl(217 91% 60%), hsl(160 84% 39%));
  --gradient-cta: linear-gradient(90deg, hsl(217 91% 60%), hsl(265 83% 57%));
  
  /* === SHADOWS === */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-glow: 0 0 40px rgb(59 130 246 / 0.3);
  
  /* === SPACING SCALE === */
  --space-section: 6rem;      /* Section arası boşluk */
  --space-container: 2rem;    /* Container padding */
  
  /* === RADIUS === */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-full: 9999px;
  
  /* === TRANSITIONS === */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 350ms ease;
}

/* Dark Mode (Opsiyonel) */
.dark {
  --color-background: 222 47% 5%;
  --color-surface: 222 47% 10%;
  --color-text-primary: 0 0% 98%;
  --color-text-secondary: 220 9% 70%;
}
```

---

### Tailwind Konfigürasyonu (`tailwind.config.ts`)

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Semantik renk isimleri - DEĞİŞTİRİLEBİLİR
        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
          hover: 'hsl(var(--color-primary-hover))',
          light: 'hsl(var(--color-primary-light))',
        },
        accent: {
          DEFAULT: 'hsl(var(--color-accent))',
          secondary: 'hsl(var(--color-accent-2))',
        },
        background: 'hsl(var(--color-background))',
        surface: 'hsl(var(--color-surface))',
        border: 'hsl(var(--color-border))',
        foreground: {
          DEFAULT: 'hsl(var(--color-text-primary))',
          secondary: 'hsl(var(--color-text-secondary))',
          muted: 'hsl(var(--color-text-muted))',
        },
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        glow: 'var(--shadow-glow)',
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-cta': 'var(--gradient-cta)',
      },
      spacing: {
        section: 'var(--space-section)',
        container: 'var(--space-container)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '350ms',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 📝 Tipografi Sistemi

### Font Yapılandırması

```typescript
// src/main.tsx veya src/index.css
// Seçenek 1: @fontsource paketi ile (önerilen)
// npm install @fontsource/inter
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

// Seçenek 2: Google Fonts CDN ile (index.html içinde)
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Tipografi Skalası

| Element | Size | Weight | Line Height | Kullanım |
|---------|------|--------|-------------|----------|
| **H1** | 4rem (64px) | 700 | 1.1 | Hero başlıkları |
| **H2** | 2.5rem (40px) | 600 | 1.2 | Section başlıkları |
| **H3** | 1.5rem (24px) | 600 | 1.3 | Kart başlıkları |
| **Body** | 1rem (16px) | 400 | 1.6 | Paragraflar |
| **Small** | 0.875rem (14px) | 400 | 1.5 | Açıklamalar |

### Gradient Text Utility

```css
.text-gradient {
  background: var(--gradient-cta);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 🔲 Spacing Kuralları

### Container Genişlikleri

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding-left: var(--space-container);
  padding-right: var(--space-container);
}

@media (max-width: 768px) {
  :root {
    --space-container: 1rem;
    --space-section: 4rem;
  }
}
```

### Section Spacing

| Breakpoint | Section Gap | Container Padding |
|------------|-------------|-------------------|
| Mobile | 4rem | 1rem |
| Tablet | 5rem | 1.5rem |
| Desktop | 6rem | 2rem |

---

## 🎯 Kullanım Örnekleri

### ❌ YANLIŞ (Hardcoded)

```jsx
<button className="bg-blue-500 hover:bg-blue-600 text-white">
  Demo Talep Et
</button>
```

### ✅ DOĞRU (Semantik)

```jsx
<button className="bg-primary hover:bg-primary-hover text-foreground">
  Demo Talep Et
</button>
```

---

## 🔄 Tema Değiştirme Rehberi

Farklı bir sektör için renkleri değiştirmek:

1. `globals.css` →  `--color-primary`, `--color-accent` değerlerini güncelle
2. Tüm site otomatik olarak yeni renklere adapte olur
3. Tailwind class'larını DEĞİŞTİRMEYE GEREK YOK

**Örnek: Sağlık Sektörü**
```css
:root {
  --color-primary: 173 80% 40%;    /* Teal/Turkuaz */
  --color-accent: 142 76% 36%;     /* Yeşil */
}
```

**Örnek: E-ticaret**
```css
:root {
  --color-primary: 24 95% 53%;     /* Turuncu */
  --color-accent: 340 82% 52%;     /* Pembe */
}
```

---

## 📦 Bileşen Stili Standartları

Her bileşen şu pattern'i takip etmeli:

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary: 'bg-surface border border-border hover:bg-primary-light',
  ghost: 'bg-transparent hover:bg-surface',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};
```

> 💡 **Pro Tip:** `cn()` utility fonksiyonu ile class'ları birleştir (clsx + tailwind-merge)
