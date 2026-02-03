# 🚀 Proje Yol Haritası: Theme-Agnostic Template



---

## 📦 Teknoloji Stack'i

| Katman | Teknoloji | Versiyon |
|--------|-----------|----------|
| Framework | React (Vite) | 18.x |
| Styling | Tailwind CSS | 3.x |
| Animasyon | Framer Motion | 11.x |
| İkon | Lucide React | - |
| Font | Inter (Google Fonts) | - |

---

## 🏗️ Mimari Genel Bakış

```
src/
├── pages/                  # React Sayfaları
│   ├── Home.tsx           # Ana sayfa
│   ├── About.tsx          # Hakkımızda
│   ├── Product.tsx        # Ürün/Hizmetler
│   └── Contact.tsx        # İletişim
│
├── components/
│   ├── layout/            # Header, Footer, Navigation
│   ├── sections/          # Hero, Features, UseCases, CTA
│   ├── ui/                # Button, Card, Badge, Tabs
│   └── motion/            # Reusable animation wrappers
│
├── config/
│   ├── site.config.ts     # Tüm metin, görsel, link verileri
│   └── theme.config.ts    # Renk, spacing, typography sabitleri
│
├── styles/
│   └── globals.css        # CSS değişkenleri + Tailwind
│
└── lib/
    └── motion-variants.ts # Framer Motion varyantları
```

---

## 📅 Proje Fazları

### Faz 1: Temel Kurulum (1-2 gün)
- [ ] React projesi oluştur (`npm create vite@latest ./ -- --template react-ts`) ve Tailwind CSS kur
- [ ] Klasör yapısını oluştur
- [ ] `globals.css` içinde CSS değişkenlerini tanımla
- [ ] `tailwind.config.ts` içinde semantik renkleri ayarla
- [ ] Google Fonts (Inter) entegrasyonu

### Faz 2: Design System (2-3 gün)
- [ ] `theme.config.ts` dosyasını oluştur
- [ ] Reusable UI bileşenleri: `Button`, `Card`, `Badge`, `Container`
- [ ] Tipografi bileşenleri: `Heading`, `Text`, `Gradient Text`
- [ ] Motion wrapper'ları: `FadeInUp`, `StaggerContainer`, `ParallaxWrapper`

### Faz 3: Layout Bileşenleri (1-2 gün)
- [ ] `Header` - Sticky navigation, glassmorphism efekti
- [ ] `Footer` - Link grupları, sosyal medya
- [ ] `MobileNav` - Hamburger menü, overlay

### Faz 4: Section Bileşenleri (3-4 gün)
- [ ] `HeroSection` - CTA butonları, floating elements
- [ ] `FeatureGrid` - Bento grid layout
- [ ] `StickyScrollSection` - Sol sabit, sağ scroll
- [ ] `VerticalTabs` - İnteraktif sekme sistemi
- [ ] `ComparisonSection` - Before/After grid
- [ ] `CTASection` - Gradient arka plan, aksiyon çağrısı
- [ ] `TestimonialSlider` - Müşteri yorumları

### Faz 5: Sayfa Entegrasyonu (2 gün)
- [ ] Ana sayfa (`/`) - Tüm section'ların birleşimi
- [ ] Hakkımızda (`/about`) - Misyon, vizyon, değerler
- [ ] Ürün (`/product`) - Feature showcase
- [ ] İletişim (`/contact`) - Form + bilgiler

### Faz 6: Polish & Optimization (1-2 gün)
- [ ] Responsive kontrolleri (mobile-first)
- [ ] Animasyon fine-tuning
- [ ] SEO meta tag'leri
- [ ] Lighthouse performans optimizasyonu
- [ ] Dark mode desteği (opsiyonel)

---

## 🔧 Fork Rehberi

Bu şablonu farklı bir sektöre uyarlamak için:

1. **`config/site.config.ts`** → Tüm metinleri ve görselleri değiştir
2. **`config/theme.config.ts`** → Renk paletini güncelle
3. **`globals.css`** → CSS değişkenlerini yeni temaya göre ayarla
4. **`public/`** → Logo, favicon ve görselleri değiştir

> 💡 **İpucu:** Kod değişikliği yapmadan sadece config dosyalarını düzenleyerek yeni bir site oluşturabilirsiniz!

---

## 📊 Tahmini Süre

| Faz | Süre |
|-----|------|
| Kurulum | 2 gün |
| Design System | 3 gün |
| Layout | 2 gün |
| Sections | 4 gün |
| Sayfa Entegrasyonu | 2 gün |
| Polish | 2 gün |
| **TOPLAM** | **~15 gün** |
