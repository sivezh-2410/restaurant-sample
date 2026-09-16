# Saffron & Ember — Restaurant Website

A premium, fully responsive restaurant website built with React, TypeScript, Vite, and Tailwind CSS. This is a portfolio project showcasing a modern fine-dining restaurant called **Saffron & Ember**, featuring a multi-page experience with smooth animations, accessible UI, and a polished design aesthetic.

## Tech Stack

- **React 18** — UI framework
- **TypeScript** — Type safety
- **Vite 5** — Build tool and dev server
- **Tailwind CSS 3** — Styling
- **Lucide React** — Icon library

## Features

- **Home Page** — Hero section, featured dishes, restaurant specialties, about preview, customer testimonials, opening hours, and location
- **Menu Page** — 30 dishes across 5 categories (Starters, Main Course, Vegetarian, Desserts, Beverages) with category filtering
- **About Page** — Restaurant story, chef profile, philosophy, highlights, and a visual timeline
- **Gallery Page** — Filterable image grid with a full lightbox modal (keyboard navigable)
- **Contact Page** — Contact cards, validated enquiry form, opening hours, embedded map, and WhatsApp button
- **Reservation Modal** — Full form with validation and success confirmation
- **Responsive Design** — Optimized for mobile, tablet, and desktop
- **Accessible UI** — Semantic HTML, ARIA labels, keyboard navigation, and focus states
- **Smooth Animations** — Scroll-triggered reveals, hover effects, and transitions

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
git clone https://github.com/your-username/restaurant-sample.git
cd restaurant-sample
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build

```bash
npm run build
```

The production build will be output to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Type Check

```bash
npm run typecheck
```

### Lint

```bash
npm run lint
```

## Project Structure

```
restaurant-sample/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── home/          # Home page sections
│   │   ├── layout/        # Navbar, Footer
│   │   └── ui/            # Reusable UI components (Modal, Reveal, etc.)
│   ├── data/             # Static menu and restaurant data
│   ├── pages/            # Page components
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Root component with routing
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles + Tailwind
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Deployment

This project can be deployed to any static hosting provider:

### Vercel

1. Push the repository to GitHub
2. Import the project in Vercel
3. Vercel will auto-detect Vite — no configuration needed

### Netlify

1. Push the repository to GitHub
2. Connect the repository in Netlify
3. Set build command to `npm run build` and publish directory to `dist`

### GitHub Pages

1. Build the project: `npm run build`
2. Deploy the `dist/` folder using your preferred GitHub Pages action

## Design

The design uses a warm, sophisticated color palette:

- **Ember** (orange-red) — Primary accent, CTAs, highlights
- **Saffron** (golden yellow) — Secondary accent, ratings
- **Charcoal** (warm dark) — Text, dark sections, footer
- **Cream** (off-white) — Page backgrounds

Typography pairs **Cormorant Garamond** (serif headings) with **Inter** (sans-serif body) for an elegant, readable aesthetic.

## License

This project is for portfolio demonstration purposes. All food and restaurant imagery is sourced from [Pexels](https://www.pexels.com/) (free to use).
