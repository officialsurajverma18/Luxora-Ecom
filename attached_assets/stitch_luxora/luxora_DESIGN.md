---
name: Luxora
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system is engineered to evoke exclusivity, precision, and heritage. It targets a discerning audience that values craftsmanship over trends. The aesthetic combines **Minimalism** with **Modern Editorial** influences, prioritizing vast negative space to allow product imagery to breathe. 

The emotional response should be one of "quiet luxury"—calm, confident, and expensive. This is achieved through a rigorous adherence to a grid, high-contrast typography, and a deliberate lack of decorative clutter. Every element must feel intentional and curated, mimicking the experience of a high-end physical boutique.

## Colors
The palette is rooted in a "Noir & Gold" philosophy. 
- **Primary (#1A1A1A):** Deep Charcoal is used for all primary text, borders, and high-impact backgrounds to provide a sense of weight and authority.
- **Secondary (#D4AF37):** Elegant Gold is used sparingly as an accent for call-to-actions, active states, and micro-interactions. It must never overwhelm the layout.
- **Backgrounds:** Use Crisp White (#FFFFFF) for the primary canvas to maintain a gallery-like feel. Off-white/Light Gray (#F4F4F4) is reserved for subtle section differentiation or secondary card surfaces.

## Typography
The typographic hierarchy relies on the contrast between the serif’s character and the sans-serif’s utility. 
- **Headlines:** Use Playfair Display for all major titles. It should feel authoritative. High-end editorial layouts often use tight letter-spacing for large displays.
- **Body Text:** Montserrat provides a clean, modern counterpoint. Increase line-height (1.6) to improve readability and reinforce the "airy" feel of the brand.
- **Labels:** Small caps with generous letter-spacing (0.15em) are mandatory for category labels, breadcrumbs, and metadata to signify premium technical specifications.

## Layout & Spacing
The design system utilizes a **Fixed Grid** for desktop (12 columns) and a **Fluid Grid** for mobile (4 columns). 

- **Margins:** Desktop margins are intentionally wide (80px) to center the focus on the product. 
- **Section Gaps:** Use a vertical rhythm of 120px between major homepage sections to prevent visual fatigue.
- **Alignment:** Content should predominantly be center-aligned for hero sections and left-aligned for product descriptions and editorial content. 
- **Image Ratios:** Use consistent 4:5 or 1:1 aspect ratios for product photography to maintain a structured, "catalog" appearance.

## Elevation & Depth
Depth is created through **Tonal Layering** and **Subtle Shadows** rather than heavy gradients.
- **Surfaces:** Use 1px solid borders (#1A1A1A at 10% opacity) for cards and input fields instead of shadows where possible.
- **Shadows:** When necessary (e.g., for hovering over a product or a modal), use a "Whisper Shadow": `0px 12px 32px rgba(0, 0, 0, 0.05)`. It should be barely perceptible, suggesting the object is slightly lifted off the white marble-like surface.
- **Glassmorphism:** Reserved exclusively for the global navigation bar when scrolling, using a 20px background blur and 90% white opacity to maintain legibility over vibrant imagery.

## Shapes
This design system utilizes **Sharp (0px)** roundedness. Every corner—from primary buttons to product images and form fields—must be perfectly rectangular. This choice communicates precision, architecture, and timelessness. Circular elements are permitted only for functional icons or color-swatch selectors.

## Components
- **Buttons:** Primary buttons are solid Charcoal (#1A1A1A) with White text, uppercase, and 0px radius. Secondary buttons use a 1px Charcoal border with no fill.
- **Input Fields:** Bottom-border only (1px #1A1A1A) to mimic high-end stationery. Labels should float or disappear on focus.
- **Product Cards:** No visible borders by default. On hover, a subtle 1px border or the "Whisper Shadow" appears, along with a "Quick View" text link in Gold.
- **Chips/Tags:** Used for "New Arrival" or "Limited Edition." Use a light gray background (#F4F4F4) with Montserrat bold caps at 10px.
- **Navigation:** Minimalist top-tier menu. Use high-quality icons with 1.5pt stroke weight for the cart and search to match the refined typography.
- **Imagery:** All product shots should be on neutral, high-key backgrounds or in highly styled architectural settings.