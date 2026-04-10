# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build (outputs to dist/)
npm run preview    # Preview production build
npm run lint       # TypeScript type-check only (no ESLint configured)
npm run clean      # Remove dist/
```

There is no test framework configured.

## Architecture

This is a Google AI Studio React SPA for LuxeWash Dubai — a premium mobile car detailing booking service.

**Single-file component architecture:** All screens and components live in `src/App.tsx`. There is no file-based routing or component modularization.

**Screen navigation** is driven by a `screen` state variable (`'home' | 'booking' | 'confirmation' | 'profile'`) passed down from `App`. Navigation between screens is done via `setScreen()` calls — not a router.

**Main screens:**
- `LandingPage` — Hero, package tiers, testimonials, process steps
- `BookingPage` — 4-step form (vehicle → package → datetime → location) with sticky price summary
- `ConfirmationPage` — Booking status timeline, detailer info, booking details
- `ProfilePage` — Garage, order history, LuxePoints loyalty, payment/location settings

**Shared components** (`Navbar`, `Footer`) receive `setScreen` as a prop.

**Animations** use `motion/react` (Framer Motion) with `AnimatePresence` for page transitions and micro-interactions.

## Styling

Tailwind CSS 4 via `@tailwindcss/vite`. Custom design tokens are defined as CSS variables in `src/index.css`:
- Primary brand color: `#00478d` (dark blue)
- Fonts: `Inter` (body), `Manrope` (headlines)
- Custom utility classes: `.signature-gradient` (CTA buttons), `.glass-header` (navbar blur effect)

## Environment

`GEMINI_API_KEY` is required for Google Gemini AI features (`@google/genai` is installed). In Google AI Studio, this is auto-injected. Locally, copy `.env.example` to `.env` and add the key.

The `express` package is installed but not wired up — no backend server is currently active.

HMR can be disabled via `DISABLE_HMR=true` env var (used by AI Studio environment).
