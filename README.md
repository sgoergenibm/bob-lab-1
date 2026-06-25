# Agentic AI in Wealth Management

An interactive landing page showcasing IBM watsonx-powered Agentic AI for financial advisors. Built with Next.js 15, TypeScript, and IBM Carbon Design System principles.

## Overview

This application demonstrates how Agentic AI, built on IBM watsonx, drives productivity for financial advisors by enabling them to prioritize clients, surface market research, and schedule meetings — all through natural language.

## Features

- **IBM Carbon Design System** — dark theme following IBM design language
- **Interactive Tabs** — step-by-step user journey (Log In → Prioritize → Research → Schedule)
- **Scroll Animations** — Intersection Observer-based fade-up on section entry
- **Animated Hero** — Canvas particle network background
- **Hover Effects** — card lift, color transitions, glow effects
- **Fully Responsive** — mobile (≥320px), tablet (≥672px), desktop (≥1056px)
- **WCAG 2.1 AA** — skip link, ARIA roles, focus indicators, live regions, semantic HTML

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + IBM Carbon CSS variables
- **Fonts**: IBM Plex Sans (Google Fonts)
- **Icons**: SVG inline (zero external dependencies)

## Project Structure

```
agentic-wealth/
├── app/
│   ├── globals.css       # Global styles, animations, Carbon tokens
│   ├── layout.tsx        # Root layout with IBM Plex Sans font + metadata
│   └── page.tsx          # Main page assembling all sections
├── components/
│   ├── Navigation.tsx    # Fixed header with scroll-aware styling + mobile menu
│   ├── Hero.tsx          # Full-viewport hero with canvas particle animation
│   ├── SolutionOverview.tsx  # Overview + watsonx tech stack cards
│   ├── BusinessValue.tsx     # 3-pillar value proposition
│   ├── UserJourney.tsx       # 4-step interactive tab journey (Fred's workflow)
│   ├── Architecture.tsx      # Multi-layer solution architecture diagram
│   └── Footer.tsx            # IBM-branded footer
├── hooks/
│   └── useIntersectionObserver.ts  # Reusable scroll-entry animation hook
└── public/
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Deployment

This project is ready to deploy to any platform that supports Next.js:

- **Vercel** (recommended): Connect your Git repo and deploy automatically
- **IBM Code Engine**: `npm run build && npm start`
- **Docker**: Use the Next.js standalone output

## Accessibility

- Skip-to-content link at top of every page
- All interactive elements have ARIA labels and roles
- Tab panels use correct `role="tablist"` / `role="tab"` / `role="tabpanel"` pattern
- Scroll progress uses `aria-live="polite"` for screen reader announcements
- Focus-visible outlines on all interactive elements (2px solid `#0f62fe`)
- Color contrast ratios meet WCAG 2.1 AA (minimum 4.5:1 for text)

## IBM Confidential

Client Engineering – Financial Services Market · 2025
