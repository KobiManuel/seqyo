# SEQYO — Cybersecurity Intelligence Platform

A full Next.js 14 landing page for SEQYO, inspired by the Bonsai UI reference (dark green background, white cards, stacked hero mockups, GSAP animations).

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **GSAP 3** + ScrollTrigger (animations throughout)
- **Lucide React** (icons)
- **Google Fonts** — Playfair Display (display) + DM Sans (body)

## Pages
| Route | Description |
|---|---|
| `/` | Home — Hero, Features (flip cards), Stats, Integrations, How It Works, Experts, CTA |
| `/solutions` | Industry-specific solutions (Enterprise, Startup, Cloud, Healthcare, Finance, E-Commerce) |
| `/pricing` | Pricing plans with monthly/annual toggle |
| `/about` | Company story, values, and team |
| `/contact` | Contact form with interest selector |

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

## Customization Guide

### Replace placeholder images
Search for comments like `[Replace with real screenshot]` or colored `<div>` placeholders in components. These are intentional placeholders — swap them with real `<Image>` components pointing to your actual screenshots.

### Colors
All brand colors live in `tailwind.config.js` under `theme.extend.colors.green`. The CSS variables are also in `app/globals.css`.

### Copy
All page copy is inline in each component. Update headlines, descriptions, and feature lists directly in the component files.

### Fonts
Fonts are loaded in `app/layout.tsx` via `next/font/google`. Change `Playfair_Display` and `DM_Sans` to any Google Font.

## Architecture

```
app/
  layout.tsx          — Root layout, fonts, metadata
  globals.css         — Global styles, animations, Tailwind
  page.tsx            — Home page
  pricing/page.tsx
  about/page.tsx
  solutions/page.tsx
  contact/page.tsx
components/
  Navbar.tsx          — Sticky nav with GSAP entrance
  Hero.tsx            — Full hero with SVG botanicals + stacked cards
  Features.tsx        — 3×2 flip card grid
  SocialProof.tsx     — Stats + testimonials
  IntegrationsMarquee.tsx — Infinite scroll ticker
  HowItWorks.tsx      — 4-step alternating layout
  Experts.tsx         — Expert network cards
  CTA.tsx             — Conversion section
  Footer.tsx          — Full footer with links
```
