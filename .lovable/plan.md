

# Fix Floating Buttons & Navbar Visibility

## Issues Found

1. **Floating button overlap**: Three buttons compete for bottom-right corner:
   - BackToTop: `bottom-5 right-5` (w-10 h-10)
   - WhatsApp: `bottom-20 right-5` (w-12 h-12)  
   - MobileFloatingCTA: `bottom-6 right-6` (w-14 h-14) — overlaps BackToTop on mobile

2. **Call button hidden on small mobile**: Uses `hidden sm:flex` — invisible below 640px

3. **Hero stats bar** still says "24/7" — should match updated working hours

## Plan

### 1. Remove MobileFloatingCTA entirely
It duplicates the WhatsApp button's purpose (contact action) and causes the overlap. WhatsApp already serves as the mobile contact CTA. Remove from `Index.tsx` and delete the component file.

### 2. Fix floating button stacking (`BackToTop.tsx` + `WhatsAppButton.tsx`)
- BackToTop: `bottom-5 right-5` (stays as-is, base position)
- WhatsApp: change to `bottom-[4.5rem] right-5` so it sits cleanly above BackToTop with proper spacing

### 3. Make call button always visible in Navbar (`HeroSection.tsx`)
- Change phone link from `hidden sm:flex` to `flex` so it shows on all screen sizes
- On very small screens, show just the phone icon (hide the number text below `sm`)
- Keep "Get Quote" button hidden on mobile (menu has it)

### 4. Update hero stats bar
- Replace "24/7 Availability" with "15+ Years Experience" or similar (since working hours are no longer 24/7)

### Files Changed
- `src/components/HeroSection.tsx` — navbar call button visibility + stats bar
- `src/components/WhatsAppButton.tsx` — adjust bottom position
- `src/components/MobileFloatingCTA.tsx` — delete
- `src/pages/Index.tsx` — remove MobileFloatingCTA import/usage

