---
title: UI Aesthetics & Motion System
---

This doc summarizes the visual language and motion system used across the app.

## Background system

- Component: `client/components/layout/BackgroundFX.tsx`
- Layers:
  - Radial vignette + subtle grid SVG
  - Gradient blobs (top-right / bottom-left) with gentle pulse
  - Center glow for depth
  - Noise texture overlay for subtle grain
- Accessibility: `prefers-reduced-motion` respected (animations scoped with `motion-safe:` or driven via Framer Motion)

## Glass surfaces

- Header: `client/components/layout/SiteHeader.tsx`
  - Glass/blur, gradient underline hover, bottom gradient divider
- Footer: `client/components/layout/SiteFooter.tsx`
  - Glass/blur, top gradient divider, accent dot
- Cards/Sections
  - Features: `client/components/sections/FeaturesGrid.tsx`
  - Stats: `client/components/sections/StatsStrip.tsx`
  - Testimonials: `client/components/sections/TestimonialsCarousel.tsx`
  - Logos strip: `client/components/sections/LogosStrip.tsx` (glass container, fade edges)

Common styles
- Glass: `bg-white/55 dark:bg-background/60 backdrop-blur-md`
- Border + ring: `border ring-1 ring-inset ring-border`
- Gradient accent bars used for card top edges

## Motion system

- Route transitions: `client/components/layout/Layout.tsx`
  - `AnimatePresence` + `motion.div` keyed by `location.pathname`
  - Enter: `{ opacity: 1, y: 0 }`, Exit: `{ opacity: 0, y: -8 }`
- Hero: `client/components/hero/Hero.tsx`
  - Floating image card (gentle vertical sway)
  - Shimmer accent under subtitle
- Stats & Testimonials
  - In-view fade/slide for numbers and quotes
- Global motion preferences: `MotionConfig reducedMotion="user"` in `client/App.tsx`

## Winners UI

- File: `client/pages/Quiz.tsx`
- Winning photos shown for Football/Cricket teams and F1 drivers
- Helpers: `winnerImgPath()`, `placeholderPath()`
- Assets:
  - Real photos: `public/winners/{football|cricket|f1}/<slug>.jpg`
  - Placeholders: `public/winners/placeholders/{football|cricket|f1}.svg`

## Theming

- Theme tokens in `client/global.css` under `@layer base` (`:root` and `.dark`)
- Tailwind utilities used with small custom animations (`@keyframes` in `global.css`)

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBU21hcnRmZWVkYmFjayUzQSUzQVByYXR5dXNoS2F1c2hhbDA5" repo-name="Smartfeedback"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
