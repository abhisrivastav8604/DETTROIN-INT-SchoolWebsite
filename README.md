# Vasant Valley School — Premium Website Redesign

A production-quality, fully responsive marketing website for Vasant Valley School (Vasant Kunj, New Delhi, est. 1990).

## Intern Details

| Field | Value |
|---|---|
| **Full Name** | *(Your Name)* |
| **Intern ID** | *(Your ID)* |
| **Email** | *(Your Email)* |
| **GitHub Username** | *(Your Username)* |
| **Selected Website** | Vasant Valley School (vasantvalley.org) |
| **Live Demo Link** | *(Vercel URL after deployment)* |

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 (Vite) |
| Styling | Tailwind CSS v3 |
| Routing | React Router v6 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Deployment | Vercel (zero-config) |

## Key Improvements Over Original Site

1. **Philosophy-First Information Architecture** — The homepage leads with the school's values and founding story rather than a banner + announcement flow.
2. **Original Design Language** — Deep charcoal/navy base with amber-to-rose accent gradient, Fraunces serif + Manrope sans, glassmorphism cards.
3. **Eight Pillars Grid** — Interactive hover-glow card grid with per-pillar icons and a dedicated Learning Experience page with tab navigation.
4. **Reinterpreted IA** — 8 purposeful routes merging thin pages, splitting dense ones, with original section ordering.
5. **Framer Motion Animations** — Scroll-triggered fade-up/slide-in reveals with prefers-reduced-motion support.
6. **Fully Responsive & Accessible** — Mobile-first, hamburger nav, ARIA roles, visible focus states, WCAG AA contrast.
7. **Code-Split Routing** — All pages lazy-loaded with Suspense fallback.
8. **Validated Forms** — Admissions and Contact forms with real-time errors, ARIA error messages, and success states.
9. **News Filtering** — Category + year filter pills with animated layout transitions.
10. **Testimonials Carousel** — Directional slide carousel with ARIA tab panel roles.

## Project Structure

```
src/
├── components/
│   ├── layout/        Navbar, Footer, Layout
│   ├── ui/            AnimatedOnScroll, Button, GlassCard, SectionHeading
│   └── home/          Hero, BeliefStrip, FoundingStory, PillarsGrid,
│                      Testimonials, NewsPreview, AdmissionCTA
├── pages/             HomePage, AboutPage, LearningPage, AcademicsPage,
│                      CampusPage, AdmissionsPage, NewsPage, ContactPage
├── data/              nav.js, pillars.js, events.js, testimonials.js
├── App.jsx
├── main.jsx
└── index.css
```

## Running Locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Building for Production

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → New Project → import your repository.
3. Framework preset: **Vite**. No environment variables needed.
4. Click **Deploy**. Done.

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | < 640px | Single column, hamburger nav |
| Tablet | 640–1024px | 2-column grids, condensed nav |
| Desktop | > 1024px | Full layout, sticky glass navbar |
