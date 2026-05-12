# Robocode IT Academy — Yozgi Robototexnika Lageri 2026

Premium, production-ready landing page for the 3-month Robocode summer robotics camp.

Built with **React + Vite + TailwindCSS + Framer Motion + lucide-react**.

---

## Quick start

```bash
# 1. install
npm install

# 2. run dev server
npm run dev

# 3. production build
npm run build
npm run preview
```

The dev server runs on http://localhost:5173 by default.

---

## Project structure

```
src/
├── animations/        Framer Motion variants (single source of truth)
│   └── variants.js
├── assets/            Static assets (icons, images)
├── components/        Reusable UI primitives
│   ├── AnimatedCounter.jsx
│   ├── BackgroundFX.jsx
│   ├── BackToTop.jsx
│   ├── FloatingCTA.jsx
│   ├── GlassCard.jsx
│   ├── GradientButton.jsx
│   ├── LoadingScreen.jsx
│   ├── Particles.jsx
│   ├── RobotIllustration.jsx
│   ├── ScrollProgress.jsx
│   └── SectionTitle.jsx
├── data/              Mock JSON-ready data (API integration point)
│   ├── activities.js
│   ├── comparison.js
│   ├── contact.js
│   ├── faq.js
│   ├── hero.js
│   ├── navigation.js
│   ├── pricing.js
│   ├── results.js
│   ├── stats.js
│   └── weekly.js
├── hooks/             Custom React hooks
│   ├── useCountUp.js
│   └── useScrollPosition.js
├── layouts/
│   └── MainLayout.jsx Navbar + footer + floating helpers wrapper
├── pages/
│   └── Home.jsx       Landing page section composition
├── sections/          Page sections (one per landing chunk)
│   ├── About.jsx
│   ├── Activities.jsx
│   ├── Comparison.jsx
│   ├── FAQ.jsx
│   ├── FinalCTA.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Pricing.jsx
│   ├── Results.jsx
│   ├── Stats.jsx
│   └── WeeklyFormat.jsx
├── utils/             Pure helper utilities
│   └── helpers.js
├── App.jsx
├── index.css          Tailwind base + design tokens + glass utilities
└── main.jsx
```

---

## Backend integration

Every section reads from a file in `src/data/`. Each file has a comment pointing to its future API endpoint, e.g.:

```js
// Mock data — GET /api/v1/activities
export const activities = [ ... ];
```

When the backend (Express / Nest / Firebase) is ready, replace the `export const` arrays with a fetch wrapper or a React Query hook — no section code needs to change.

Suggested migration:

```js
// src/data/activities.js  →  src/services/activities.js
import { api } from './api';
export const getActivities = () => api.get('/api/v1/activities');
```

Then in `sections/Activities.jsx`:

```jsx
const { data: activities = [] } = useQuery(['activities'], getActivities);
```

---

## Design system

- **Theme**: Dark (`#070b18` base) with neon-blue → neon-purple gradients
- **Typography**: Space Grotesk (display) + Inter (body)
- **Cards**: Glassmorphism — `bg-white/[0.04] + backdrop-blur-xl + border-white/[0.08]`
- **Accent**: `#00d4ff` (neon blue), `#a855f7` (neon purple), `#22d3ee` (cyan)
- **Motion**: All animations centralized in `src/animations/variants.js`

Tailwind tokens (custom colors, keyframes, gradients) live in `tailwind.config.js`.

---

## Features

- Sticky navbar with scroll-triggered glass blur
- Animated mobile drawer with stagger
- Hero with composed robot illustration (no external images) + particles
- Count-up animated stats
- 10 activity cards with gradient glow on hover
- Weekly timeline with alternating layout
- Results grid with glowing check icons
- Highlighted comparison table (Robocode vs others)
- Premium pricing card with payment plan, features, discounts
- Animated FAQ accordion
- Final CTA with floating particles + animated rings
- Footer with socials + contact
- Scroll progress bar, back-to-top button, floating Telegram FAB
- Full Uzbek localization

---

## License

© 2026 Robocode IT Academy.
