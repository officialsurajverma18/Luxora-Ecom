# Luxora Watches

A cinematic luxury watch brand website with immersive scroll animations, interactive 3D watch viewer, and a dark-gold aesthetic.

## Run & Operate

- `pnpm --filter @workspace/luxora run dev` — run the frontend (port auto-assigned)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4
- 3D: Three.js (with CSS fallback for non-WebGL environments)
- Animation: GSAP + ScrollTrigger
- Typography: Cormorant Garamond (serif), Inter (sans)
- API: Express 5 (template, no endpoints yet)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/luxora/` — main frontend app
- `artifacts/luxora/src/pages/Home.tsx` — single-page layout with all sections
- `artifacts/luxora/src/components/WatchViewer.tsx` — Three.js 3D watch (+ CSS fallback)
- `artifacts/luxora/src/components/Customizer.tsx` — interactive watch configurator
- `artifacts/luxora/src/components/CollectionGrid.tsx` — collection showcase with filter
- `artifacts/luxora/src/index.css` — Luxora design tokens (charcoal + gold palette)
- `artifacts/luxora/public/luxora-logo.png` — brand logo
- `artifacts/api-server/` — Express API server (extend as needed)

## Architecture decisions

- Single-page app with all content as scroll sections — no routing needed beyond "/"
- Three.js WatchViewer detects WebGL support at mount time; falls back to a CSS watch illustration if unavailable (e.g. Replit sandbox)
- GSAP ScrollTrigger contexts are scoped per component and reverted on unmount to prevent memory leaks
- Navbar scroll effect uses inline style manipulation instead of GSAP toggleClass (which cannot handle space-separated class strings)
- Watch collection uses CSS-drawn watch illustrations instead of image files for zero-asset-dependency design

## Product

A luxury watch brand showcase with:
- Cinematic dark-gold hero with GSAP character-by-character text animation
- Brand story / manifesto section with scroll-triggered reveals
- Interactive 3D watch viewer (Three.js with real-time clock hands + OrbitControls)
- Watch configurator (Dial Color · Strap Material · Case Finish)
- Filterable collection grid (Heritage / Limited / Sport)
- Gold marquee scrolling ticker
- Contact / reservation form footer

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- WebGL is disabled in the Replit preview sandbox — the CSS watch fallback activates automatically
- GSAP toggleClass cannot use space-separated class strings — use onEnter/onLeaveBack callbacks with inline styles instead
- Google Fonts @import must be the FIRST line of index.css before any other @import statements

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
