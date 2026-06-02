# Luxora Watches

A luxury watch e-commerce website — light editorial aesthetic with real photography, multi-page React + Vite app, Playfair Display + Montserrat typography, and a black + dark gold (#735c00) palette.

## Run & Operate

- `pnpm --filter @workspace/luxora run dev` — run the frontend (port auto-assigned)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4
- Typography: Playfair Display (serif/display), Montserrat (sans/body/label)
- Icons: Material Symbols Outlined (via Google Fonts CDN link in index.html)
- API: Express 5 (template, no endpoints yet)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/luxora/` — main frontend app
- `artifacts/luxora/src/pages/Home.tsx` — homepage (hero, bento grid, arrivals, brand story, newsletter)
- `artifacts/luxora/src/pages/Collection.tsx` — product listing with sidebar filters
- `artifacts/luxora/src/pages/ProductDetail.tsx` — PDP for Oceanic Deep 42 (specs, movement, inspiration, related)
- `artifacts/luxora/src/components/Navbar.tsx` — shared nav (LUXORA wordmark, links, icons)
- `artifacts/luxora/src/components/Footer.tsx` — shared footer (light or dark variant via `dark` prop)
- `artifacts/luxora/src/index.css` — Luxora design tokens (light theme, custom colors, fonts, Material Symbols)
- `artifacts/api-server/` — Express API server (extend as needed)

## Architecture decisions

- Three-page SPA with wouter routing: `/`, `/collection`, `/product/:id`
- Light theme (#f9f9f9 surface, black primary, #735c00 dark gold secondary)
- Real watch photography sourced from Google AIDA-public CDN (no local assets needed)
- All styling via inline `style` objects for precise pixel-level matching to the design template
- Navbar and Footer are shared components; Footer accepts `dark` boolean prop
- Material Symbols loaded as web font via `<link>` in index.html — used as `<span className="material-symbols-outlined">icon_name</span>`
- No Three.js or GSAP in the new build (removed — pure CSS/React)

## Design System (from template)

- Surface: `#f9f9f9` (background), `#ffffff` (surface-container-lowest), `#f3f3f4` (surface-container-low)
- Primary: `#000000`, Secondary: `#735c00`
- Secondary accents: `#ffe088` (secondary-fixed), `#e9c349` (secondary-fixed-dim)
- On-surface: `#1a1c1c`, On-surface-variant: `#444748`
- Outline-variant: `#c4c7c7`
- Typography scale:
  - display-lg: Playfair Display 64px/700
  - headline-md: Playfair Display 32px/600
  - headline-sm: Playfair Display 24px/600
  - body-lg: Montserrat 18px/400
  - body-md: Montserrat 16px/400
  - label-caps: Montserrat 12px/600 uppercase tracking-widest
- Page margins: 80px desktop, 20px mobile
- Section gaps: 120px

## Product

A luxury watch brand showcase with:
- **Homepage**: Cinematic dark hero, bento grid collections (Heritage/Sport/Limited), New Arrivals 4-col grid, brand story split section, newsletter signup
- **Collection page**: "The Master Collection" header, sidebar filters (collection/material/movement), 3-col product grid with hover spec overlays and tags, pagination, dark legacy banner
- **Product Detail**: Split image/info layout, horological specs bento (3 cards), Experience the Movement storytelling, ocean inspiration fullbleed, related timepieces

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Material Symbols must be loaded via `<link>` in `index.html` — NOT via @import in CSS
- Google Fonts @import must be the FIRST line of index.css before any other @import statements
- Watch photos use Google AIDA-public CDN (`lh3.googleusercontent.com/aida-public/...`) — these URLs load in browser but may 404 in SSR/Node fetch
- All styles use inline `style` objects to avoid Tailwind class conflicts with the custom token names from the template

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
