

# World-Class Construction Color Theme Redesign

## Inspiration

The world's top construction firms (Bechtel, Skanska, Turner, AECOM, Fluor) share a common visual language: **deep navy blues** for authority and trust, paired with **warm amber/gold accents** for premium quality. Clean whites and cool grays provide contrast and professionalism.

## New Color Palette

```text
┌──────────────────────────────────────────────┐
│  PRIMARY:    Deep Navy    #1a365d (220 55% 23%)  │
│  ACCENT:     Amber Gold   #d97706 (38 92% 44%)   │
│  DARK BG:    Charcoal     #0f172a (222 47% 11%)  │
│  LIGHT BG:   Cool White   #f8fafc (210 40% 98%)  │
│  MUTED:      Warm Gray    #94a3b8                │
│  STEEL:      Dark Navy    #1e293b                │
│  CARDS:      Pure White   #ffffff                │
└──────────────────────────────────────────────┘
```

## Files to Change

### 1. `src/index.css` — CSS custom properties
- `--primary` → deep navy (220 55% 23%)
- `--accent` → amber gold (38 92% 44%) — separate from primary for highlights
- `--slate-dark` → rich charcoal navy
- `--steel` → medium dark navy
- Add `--gold` custom property for accent highlights
- Adjust all related foreground/muted/border tones

### 2. `tailwind.config.ts` — Add gold accent color
- Add `gold` color using new `--gold` variable

### 3. `src/components/ui/button.tsx` — Update hero button variants
- `hero` variant → deep navy bg with gold hover effects
- `hero-outline` → gold border with gold text on dark backgrounds

### 4. `src/components/HeroSection.tsx`
- Update gradient overlays to use deeper navy tones
- Stats bar text accents → gold highlights

### 5. `src/components/ServicesSection.tsx`
- Replace hardcoded `bg-white`, `text-slate-900`, `text-slate-700` with theme tokens
- Icon backgrounds → navy, with gold hover states

### 6. `src/components/MethodologySection.tsx`
- Dark section bg → charcoal navy gradient
- Timeline line → gold accent
- Step colors remain multi-colored (already good)

### 7. `src/components/CTABanner.tsx`
- Gradient → deep navy to charcoal
- CTA buttons → gold primary action

### 8. `src/components/TestimonialsSection.tsx`
- Dark bg → charcoal navy
- Quote icon → gold accent

### 9. `src/components/AboutSection.tsx`
- Stat cards accent borders → gold highlights
- Section label text → gold instead of primary blue

### 10. `src/components/ContactSection.tsx`
- Submit button → navy primary
- Icon highlights → gold accents

### 11. `src/components/Footer.tsx`
- Already uses `slate-dark` — will inherit new navy tones

### 12. All section label text (`text-primary` used for "What We Do", "Our Story", etc.)
- These will automatically shift to navy via CSS variable change
- Add a gold accent class for section subtitles to create visual hierarchy

## Key Principle
Most color changes happen through the CSS variables, so the majority of the site updates automatically. Only hardcoded Tailwind colors (like `bg-white`, `text-slate-900` in ServicesSection) and the accent differentiation (navy vs gold) require component-level edits.

