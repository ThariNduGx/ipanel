# i-Panel — Project Documentation

> **Status:** In active development
> **Last Updated:** March 2026 (rev 2)
> **Branch:** `claude/build-ipanel-pages-YA1ux`

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Getting Started](#3-getting-started)
4. [Project Structure](#4-project-structure)
5. [Site Architecture & Routes](#5-site-architecture--routes)
6. [Components Reference](#6-components-reference)
7. [State Management](#7-state-management)
8. [Data Layer](#8-data-layer)
9. [Backend & Database](#9-backend--database)
10. [Styling System](#10-styling-system)
11. [Animations & Motion](#11-animations--motion)
12. [E-Commerce Flow](#12-e-commerce-flow)
13. [Product Catalog Model](#13-product-catalog-model)
14. [SEO & Performance](#14-seo--performance)
15. [Environment Variables](#15-environment-variables)
16. [Conventions & Patterns](#16-conventions--patterns)
17. [Changelog](#17-changelog)
18. [Known Gaps & Future Work](#18-known-gaps--future-work)

---

## 1. Project Overview

**i-Panel** is a luxury interior wall/ceiling panel brand based in Sri Lanka. This repository is the full-stack website for the brand, combining a marketing/content site with an e-commerce storefront.

**Business context:**
- Products are architectural PVC-based wall and ceiling panels
- Sold through a dealer network and directly via the website
- Primary market: Sri Lanka (pricing in LKR, provinces, local dealer map)
- Products are organized into 4 main series, each with multiple color/finish variants

**Site goals:**
- Showcase products with luxury visual identity
- Allow customers to browse, configure, and purchase panels online
- Provide dealer lookup and dealer registration
- Offer educational resources (guides, blog, FAQs, installation guides)
- Capture quote/inquiry leads

---

## 2. Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| React | 19.0.0 | UI library |
| React Router | 7.13.1 | Client-side routing |
| TypeScript | ~5.8.2 | Type safety |
| Vite | 6.2.0 | Build tool & dev server |
| Tailwind CSS | 4.1.14 | Utility-first CSS |
| Motion | 12.23.24 | Animations (Framer Motion successor) |
| Lucide React | 0.546.0 | Icon library |
| @google/genai | 1.29.0 | Google Gemini AI integration |

### Backend

| Technology | Version | Purpose |
|---|---|---|
| Express | 4.21.2 | HTTP server |
| better-sqlite3 | 12.4.1 | SQLite database driver |
| tsx | 4.21.0 | TypeScript runner for Node |
| dotenv | 17.2.3 | Environment variable loading |

### Architecture Summary

- **Pure SPA** — No server-side rendering. React handles all routing client-side.
- **Vite proxy** — Dev server proxies `/api/*` requests to the Express backend on port 3001.
- **Static data** — Product catalog and colors are stored as TypeScript data files, not fetched from an API.
- **SQLite** — Orders are persisted in a local SQLite file (`data/shop.db`).

---

## 3. Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone <repo-url>
cd ipanel
npm install
```

### Environment

Copy `.env.example` to `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

Required variables:

```
GEMINI_API_KEY=your_google_ai_key_here
APP_URL=http://localhost:3000
```

### Running Locally

You need two processes running simultaneously:

```bash
# Terminal 1 — Frontend (Vite dev server, port 3000)
npm run dev

# Terminal 2 — Backend (Express API, port 3001)
npm run server
```

The frontend proxies all `/api/*` requests to the backend automatically.

### Building for Production

```bash
npm run build     # Outputs to /dist
npm run preview   # Preview the production build locally
```

---

## 4. Project Structure

```
ipanel/
├── src/
│   ├── App.tsx                  # Root router with all route definitions
│   ├── main.tsx                 # React entry point (renders <App />)
│   ├── index.css                # Global styles, Tailwind base, design tokens
│   │
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.tsx           # Site navigation (desktop + mobile)
│   │   ├── Footer.tsx           # Site footer
│   │   ├── PageShell.tsx        # Layout wrapper (Navbar + CartSidebar + Footer)
│   │   ├── CartSidebar.tsx      # Slide-out cart drawer
│   │   ├── Hero.tsx             # Homepage hero section
│   │   ├── Series.tsx           # Series showcase section
│   │   ├── Anatomy.tsx          # Product anatomy section
│   │   ├── Performance.tsx      # Performance metrics section
│   │   ├── Gallery.tsx          # Image gallery section
│   │   ├── Trust.tsx            # Trust/social proof section
│   │   ├── Quotation.tsx        # Quote CTA component
│   │   ├── FAQ.tsx              # FAQ accordion
│   │   ├── BlurReveal.tsx       # Scroll-triggered blur reveal animation
│   │   ├── Sustainability.tsx   # Sustainability messaging section
│   │   └── ImageComparison.tsx  # Before/after image slider
│   │
│   ├── pages/                   # Page components (30+ files)
│   │   ├── HomePage.tsx         # / (homepage, all homepage sections)
│   │   ├── AboutHub.tsx         # /about
│   │   ├── OurStory.tsx         # /about/our-story
│   │   ├── WhyIPanell.tsx       # /about/why-ipanel
│   │   ├── SustainabilityPage.tsx
│   │   ├── Awards.tsx
│   │   ├── Contact.tsx
│   │   ├── TechnicalQuote.tsx   # /get-a-quote
│   │   ├── CeilingCalculator.tsx
│   │   ├── ProductsPage.tsx     # /products (main shop grid)
│   │   ├── ColoursGallery.tsx   # /products/colours
│   │   ├── ProductCompare.tsx   # /products/compare
│   │   ├── SeriesPage.tsx       # /products/:series
│   │   ├── ColourPage.tsx       # /products/:series/:slug
│   │   ├── FinishingSeriesPage.tsx
│   │   ├── SolutionPage.tsx     # /solutions/:type
│   │   ├── GuidePage.tsx        # /guides/:slug
│   │   ├── InformedChoices.tsx  # /resources/faq
│   │   ├── InstallationGuide.tsx
│   │   ├── MaintenancePage.tsx
│   │   ├── Downloads.tsx
│   │   ├── BlogHub.tsx
│   │   ├── BlogPost.tsx         # /resources/blog/:slug
│   │   ├── ProjectsHub.tsx
│   │   ├── ProjectDetail.tsx    # /resources/projects/:slug
│   │   ├── ShopCart.tsx         # /cart
│   │   ├── Checkout.tsx         # /checkout
│   │   ├── OrderConfirmation.tsx# /checkout/confirmation/:id
│   │   ├── ShopMyAccount.tsx    # /account
│   │   ├── ShopProductDetail.tsx# /shop/product/:sku
│   │   ├── FindADealer.tsx      # /find-a-dealer
│   │   ├── BecomeADealer.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   ├── TermsAndConditions.tsx
│   │   ├── WarrantyPage.tsx
│   │   ├── WarrantyActivation.tsx
│   │   └── Inspiration.tsx      # Legacy page
│   │
│   ├── context/
│   │   └── CartContext.tsx       # Cart state (Context + useReducer)
│   │
│   └── data/
│       ├── shopProducts.ts       # Product series, lengths, prices
│       └── colours.ts            # Color specifications per series
│
├── server/
│   ├── index.ts                  # Express server, route handlers
│   └── db.ts                     # SQLite schema, query functions
│
├── public/
│   └── products/                 # Product images (*.jpg)
│
├── data/
│   └── shop.db                   # SQLite database (auto-created at runtime)
│
├── vite.config.ts
├── tsconfig.json
├── package.json
├── index.html
├── .env.example
└── PROJECT.md                    # This file
```

---

## 5. Site Architecture & Routes

All routes are defined in `src/App.tsx`. The site uses React Router v7 with `<BrowserRouter>`.

### Route Map

#### Core Pages

| Path | Component | Description |
|---|---|---|
| `/` | `HomePage` | Homepage with all hero sections |
| `/contact` | `Contact` | Contact form |
| `/get-a-quote` | `TechnicalQuote` | Technical quote request form |
| `/ceiling-calculator` | `CeilingCalculator` | Interactive calculator tool |

#### About

| Path | Component |
|---|---|
| `/about` | `AboutHub` |
| `/about/our-story` | `OurStory` |
| `/about/why-ipanel` | `WhyIPanell` |
| `/about/sustainability` | `SustainabilityPage` |
| `/about/awards` | `Awards` |

#### Products

| Path | Component | Notes |
|---|---|---|
| `/products` | `ProductsPage` | Main shop/product listing |
| `/products/colours` | `ColoursGallery` | Full color palette view |
| `/products/compare` | `ProductCompare` | Side-by-side series comparison |
| `/products/:series` | `SeriesPage` | Series detail (i-series, heavy-b, lite, heavy-f) |
| `/products/:series/:slug` | `ColourPage` | Individual color detail page |
| `/products/finishing-series` | `FinishingSeriesPage` | Finishing profiles landing |
| `/products/finishing-series/:profile` | `FinishingSeriesPage` | Profile-specific view |
| `/products/finishing-profile-a` | `FinishingSeriesPage` | Direct profile A link |
| `/products/finishing-profile-b` | `FinishingSeriesPage` | Direct profile B link |
| `/products/finishing-profile-c` | `FinishingSeriesPage` | Direct profile C link |

#### Solutions

| Path | Component |
|---|---|
| `/solutions/:type` | `SolutionPage` |

#### Resources / Guides

| Path | Component |
|---|---|
| `/guides/:slug` | `GuidePage` |
| `/resources/faq` | `InformedChoices` |
| `/resources/installation-guide` | `InstallationGuide` |
| `/resources/maintenance` | `MaintenancePage` |
| `/resources/downloads` | `Downloads` |
| `/resources/blog` | `BlogHub` |
| `/resources/blog/:slug` | `BlogPost` |
| `/resources/projects` | `ProjectsHub` |
| `/resources/projects/:slug` | `ProjectDetail` |

#### Shop / E-Commerce

| Path | Component |
|---|---|
| `/cart` | `ShopCart` |
| `/checkout` | `Checkout` |
| `/checkout/confirmation/:id` | `OrderConfirmation` |
| `/account` | `ShopMyAccount` |
| `/account/orders` | `ShopMyAccount` |
| `/account/certificates` | `ShopMyAccount` |
| `/shop/product/:sku` | `ShopProductDetail` |

#### Dealers

| Path | Component |
|---|---|
| `/find-a-dealer` | `FindADealer` |
| `/find-a-dealer/:province` | `FindADealer` (province-filtered) |
| `/become-a-dealer` | `BecomeADealer` |

#### Legal

| Path | Component |
|---|---|
| `/privacy-policy` | `PrivacyPolicy` |
| `/terms-and-conditions` | `TermsAndConditions` |
| `/warranty` | `WarrantyPage` |
| `/warranty-activation` | `WarrantyActivation` |

#### Legacy Redirects (301-style Navigate)

| Old Path | Redirects To |
|---|---|
| `/our-story` | `/about/our-story` |
| `/faq` | `/resources/faq` |
| `/locate-store` | `/find-a-dealer` |
| `/quote` | `/get-a-quote` |
| `/shop` | `/products` |
| `/shop/cart` | `/cart` |
| `/shop/checkout` | `/checkout` |
| `/products/architectural-flat` | `/products/i-series` |
| `/products/architectural-heavy` | `/products/heavy-b` |
| (other old slugs) | new clean slugs |

### Layout Pattern

All pages (except the homepage which manages its own scroll effects) are wrapped in `<PageShell>`:

```tsx
// PageShell renders: Navbar + CartSidebar + {children} + Footer
<PageShell>
  <YourPageComponent />
</PageShell>
```

The `HomePage` renders the Navbar and each section component directly (without PageShell) to allow full-page scroll effects.

---

## 6. Components Reference

### `Navbar.tsx`
Fixed floating navigation dock. Features:
- Desktop: horizontal link bar with mega menu dropdowns
- Mobile: hamburger menu with accordion-expanded sections
- Cart icon showing item count badge (from CartContext)
- "Get a Quote" CTA button

### `Footer.tsx`
Full-width footer with:
- Brand logo and tagline
- Navigation columns: Products, Resources, Company, Legal
- Social media links
- Copyright line

### `PageShell.tsx`
Thin layout wrapper that composes Navbar, CartSidebar, `{children}`, and Footer. Use this for every new page.

```tsx
import PageShell from '../components/PageShell';

export default function MyNewPage() {
  return (
    <PageShell>
      <section>...</section>
    </PageShell>
  );
}
```

### `CartSidebar.tsx`
Slide-in drawer from the right. Reads from CartContext. Contains:
- List of cart items with quantity controls
- Remove item buttons
- Subtotal display
- "Proceed to Checkout" button

### `Hero.tsx`
Full-viewport homepage hero with:
- Parallax scroll transforms via `useScroll()` + `useTransform()`
- Background image fade
- Animated headline with stagger reveal
- Scroll indicator

### `BlurReveal.tsx`
Utility animation component for scroll-triggered reveals:

```tsx
<BlurReveal>
  <p>This will blur-in when scrolled into view</p>
</BlurReveal>
```

### `ImageComparison.tsx`
Drag-handle before/after slider. Takes `beforeSrc` and `afterSrc` props.

### Other Section Components
`Series`, `Anatomy`, `Performance`, `Gallery`, `Trust`, `Quotation`, `FAQ`, `Sustainability` — These are homepage section components. Each is a self-contained section with its own data and animations. They can technically be used on other pages but are primarily composed in `HomePage.tsx`.

---

## 7. State Management

Cart state is managed via React Context + `useReducer`, with automatic persistence to `localStorage`.

**File:** `src/context/CartContext.tsx`

### Persistence

Cart items are saved to `localStorage` under the key `ipanel-cart` on every state change, and loaded back on app initialisation. This means the cart survives page refreshes, browser close/reopen, and navigation away from the site.

```typescript
// Saved automatically — no manual calls needed
localStorage.setItem('ipanel-cart', JSON.stringify(state.items));

// Loaded on first render
const stored = localStorage.getItem('ipanel-cart');
const initialItems = stored ? JSON.parse(stored) : [];
```

If `localStorage` is unavailable (private browsing restrictions, storage quota full), the failure is caught silently and the cart continues to work in-memory for the session.

### CartItem Type

```typescript
interface CartItem {
  cartKey: string;         // Unique key: "{seriesId}-{colorSlug}-{length}[-{profile}]"
  seriesId: string;        // e.g., "lite", "i-series", "heavy-b"
  seriesName: string;      // e.g., "LITE Series"
  colorName: string;       // e.g., "Kaluwara"
  colorSwatch: string;     // Hex color string for visual swatch
  selectedLength: string;  // "122", "305", or "366"
  lengthLabel: string;     // Display: "305 cm (10 ft)"
  selectedProfile?: string;// "A", "B", or "C" — only for Finishing Series
  quantity: number;
  pricePerPiece: number;   // LKR
}
```

### Actions

| Action | Payload | Effect |
|---|---|---|
| `ADD_ITEM` | `CartItem` | Adds item or increments quantity if cartKey exists |
| `REMOVE_ITEM` | `{ cartKey }` | Removes item from cart |
| `UPDATE_QUANTITY` | `{ cartKey, quantity }` | Sets specific quantity |
| `CLEAR_CART` | — | Empties cart |
| `OPEN_CART` | — | Opens sidebar |
| `CLOSE_CART` | — | Closes sidebar |

### Using the Cart

Wrap your app (already done in `main.tsx`) with `<CartProvider>`, then in any component:

```tsx
import { useCart } from '../context/CartContext';

function MyComponent() {
  const { state, dispatch, itemCount, subtotal } = useCart();

  // Add an item
  dispatch({ type: 'ADD_ITEM', payload: { ...cartItem } });

  // Open the sidebar
  dispatch({ type: 'OPEN_CART' });
}
```

---

## 8. Data Layer

Product and color data are **static TypeScript files** — not fetched from an API at runtime.

### `src/data/shopProducts.ts`

Defines the product series catalog:

```typescript
interface ProductSeries {
  id: string;               // "i-series" | "heavy-b" | "lite" | "finishing"
  name: string;             // "i Series"
  subtitle: string;
  tagline: string;
  warranty: string;         // "7 Years"
  width: string;            // "12 in (±5 mm)"
  thickness: string;        // "8 mm"
  weight: string;           // "0.250 Kg/Lft"
  lengths: Array<{
    cm: string;             // "305"
    label: string;          // "305 cm (10 ft)"
  }>;
  prices: Record<string, number>;  // { "305": 3500, "366": 4200 }
  colors: string[];         // Array of color names available in this series
}
```

### `src/data/colours.ts`

Defines color specifications:

```typescript
interface ColourSpec {
  name: string;             // "Kaluwara"
  slug: string;             // "kaluwara"
  series: string[];         // Which series offer this color
  hex: string;              // Approximate hex for UI swatch
  description: string;
  imagePath?: string;       // Path under /public/products/
  // ... additional spec fields
}
```

### Updating Product Data

To add a new product series or color:
1. Edit `src/data/shopProducts.ts` — add the new series object
2. Edit `src/data/colours.ts` — add the new color objects
3. Add product images to `public/products/`
4. Add the route in `src/App.tsx` if a new series page is needed

---

## 9. Backend & Database

The backend is a minimal Express server for order management.

### Server

**File:** `server/index.ts`
**Port:** 3001
**Started by:** `npm run server`

### API Endpoints

#### `POST /api/orders`

Creates a new order.

**Request body:**
```json
{
  "customerName": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+94771234567",
  "address": "123 Main St",
  "city": "Colombo",
  "province": "Western",
  "notes": "Optional delivery notes",
  "items": [
    {
      "seriesId": "lite",
      "seriesName": "LITE Series",
      "colorName": "Kaluwara",
      "selectedLength": "305",
      "quantity": 10,
      "pricePerPiece": 2800
    }
  ],
  "total": 28000
}
```

**Response (201):**
```json
{
  "id": "IPO-1718000000000-abc123",
  "status": "pending"
}
```

#### `GET /api/orders/:id`

Retrieves an order by ID (used on the confirmation page).

**Response (200):**
```json
{
  "id": "IPO-...",
  "customer_name": "Jane Doe",
  "email": "...",
  "items": [...],
  "total": 28000,
  "status": "pending",
  "created_at": "2026-03-16T10:00:00.000Z"
}
```

### Database Schema

**File:** `server/db.ts`
**Engine:** SQLite via `better-sqlite3`
**Location:** `data/shop.db` (auto-created, gitignored)

```sql
CREATE TABLE orders (
  id            TEXT PRIMARY KEY,
  customer_name TEXT NOT NULL,
  email         TEXT NOT NULL,
  phone         TEXT NOT NULL,
  address       TEXT NOT NULL,
  city          TEXT NOT NULL,
  province      TEXT NOT NULL,
  notes         TEXT DEFAULT '',
  items         TEXT NOT NULL,   -- JSON string of CartItem[]
  total         REAL NOT NULL,
  status        TEXT DEFAULT 'pending',
  created_at    TEXT NOT NULL    -- ISO 8601 timestamp
);
```

Order IDs are generated as: `IPO-{Date.now()}-{random6chars}`

WAL mode is enabled on the database for better concurrent read performance.

---

## 10. Styling System

### Tailwind CSS 4

The project uses Tailwind CSS v4 with the official Vite plugin (no `tailwind.config.js` needed).

**Design tokens** are defined in `src/index.css` using `@theme`:

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-brand-surface` | `#F9F9F8` | Page background (warm off-white) |
| `--color-brand-surface-alt` | `#FFFFFF` | Card/panel backgrounds |
| `--color-brand-dark` | `#121212` | Primary text, dark backgrounds |
| `--color-brand-charcoal` | `#1C1C1C` | Secondary dark surfaces |
| `--color-brand-muted` | `#6B7280` | Secondary/placeholder text |
| `--color-brand-gold` | `#C5A059` | Primary brand accent |
| `--color-brand-gold-light` | `#E2C792` | Hover states, highlights |
| `--color-brand-gold-dark` | `#A68444` | Active states, deep accents |

Use these with Tailwind: `bg-brand-gold`, `text-brand-dark`, `border-brand-gold-light`, etc.

### Typography

| Token | Font | Used For |
|---|---|---|
| `--font-sans` | Outfit | Body text, UI labels, navigation |
| `--font-serif` | Playfair Display | Hero headlines, section titles |

Apply with: `font-sans` / `font-serif` Tailwind utilities.

### Custom CSS Utilities

Defined in `src/index.css`:

```css
.glass-panel       /* White glassmorphism card with backdrop blur */
.glass-panel-dark  /* Dark glassmorphism variant */
.noise-overlay     /* Subtle noise texture (pseudo-element) */
.text-gradient-gold /* Gold gradient text fill */
```

### Responsive Breakpoints (Tailwind defaults)

| Prefix | Min Width |
|---|---|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

---

## 11. Animations & Motion

The project uses `motion` (Framer Motion v12 / successor package).

### Scroll-based Parallax

Used in `Hero.tsx` and other scroll-heavy sections:

```tsx
import { useScroll, useTransform } from 'motion/react';

const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

<motion.div style={{ y }}>...</motion.div>
```

### Scroll-triggered Reveal

Used via `BlurReveal.tsx` or directly with `useInView`:

```tsx
import { useInView } from 'motion/react';

const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

<motion.div
  ref={ref}
  initial={{ opacity: 0, filter: 'blur(8px)' }}
  animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
>
```

### Standard Transition Values

Keep animations consistent by reusing these timing values:

```tsx
// Fast UI interactions
{ duration: 0.2, ease: 'easeOut' }

// Content reveals
{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }

// Hero/dramatic reveals
{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }
```

---

## 12. E-Commerce Flow

```
ProductsPage (/products)                     FinishingSeriesPage (/products/finishing-series)
    └── SeriesPage (/products/:series)             └── Profile detail → /shop/product/finishing-matt-white?profile=A
            └── ColourPage (/products/:series/:slug)
                    └── [Add to Cart] → CartContext (persisted to localStorage)
                                            └── CartSidebar (slide-out)
                                                    └── ShopCart (/cart)
                                                            └── Checkout (/checkout)
                                                                    └── POST /api/orders
                                                                            └── OrderConfirmation (/checkout/confirmation/:id)
```

### Adding to Cart

From any product page, dispatch `ADD_ITEM` with a fully-populated `CartItem` object. The `cartKey` must be unique per configuration:

```typescript
const cartKey = `${seriesId}-${colorSlug}-${selectedLength}${selectedProfile ? `-${selectedProfile}` : ''}`;
```

If an item with the same `cartKey` is added again, the quantity increments. The cart sidebar opens automatically on add.

### Checkout

`Checkout.tsx` features:
- **Steps progress indicator** — Cart → Checkout → Confirmation bar at the top of the page
- Customer name, email, phone (Sri Lankan format validated: `^(\+94|0)[0-9]{9}$`)
- Delivery address, city, province (9 Sri Lankan provinces dropdown)
- Optional order notes
- Sticky order summary sidebar with item breakdown

On submit, POSTs to `/api/orders` and redirects to `/checkout/confirmation/:id`. Cart is cleared on success.

### Order Confirmation

`OrderConfirmation.tsx` fetches the order from `GET /api/orders/:id` and displays:
- Success header with customer first name
- Order reference ID with a **copy-to-clipboard** button
- Status badge (amber "pending")
- Full item breakdown with subtotals
- Delivery details (address, contact info)
- **"What happens next?" timeline** — Three steps: team confirms order (within 1 business day) → delivery arranged (2–5 days lead time) → panels arrive. Includes contact phone and email.
- Continue Shopping / Back to Home CTAs

---

## 13. Product Catalog Model

### Series

There are 4 main product series:

| Series ID | Name | Target Market |
|---|---|---|
| `i-series` | i Series | Premium architectural |
| `heavy-b` | HEAVY B Series | Heavy-duty commercial |
| `lite` | LITE Series | Residential budget-friendly |
| `finishing` | Finishing Series | Edge/trim profiles (A, B, C) |

### Lengths Available

| cm | Imperial | Label |
|---|---|---|
| 122 | ~4 ft | 122 cm (4 ft) |
| 305 | ~10 ft | 305 cm (10 ft) |
| 366 | ~12 ft | 366 cm (12 ft) |

Not all series offer all lengths — check `shopProducts.ts` for per-series availability.

### Finishing Series Profiles

The Finishing Series has 3 sub-profiles:
- **Profile A** — Flat end cap
- **Profile B** — Corner trim
- **Profile C** — J-channel / edge trim

These are selected via a `selectedProfile` field on the CartItem.

### Color Slugs

Color slugs are kebab-case versions of color names. Examples:

| Color Name | Slug |
|---|---|
| Kaluwara | `kaluwara` |
| Africa Teak | `africa-teak` |
| Matt White | `matt-white` |
| Solid Fabric | `solid-fabric` |

The URL structure for a color page is: `/products/{seriesId}/{colorSlug}`

---

## 14. SEO & Performance

### Current State

- The app is a **pure SPA** — search engines receive a blank HTML shell until JS loads
- Page titles are set per-component but via JavaScript (no SSR)
- No Open Graph or Twitter Card meta tags
- No `robots.txt` or `sitemap.xml`
- URL structure is SEO-friendly (clean slugs, no IDs in URLs)

### Recommended Improvements (not yet implemented)

1. **Add React Helmet / react-head** — Set `<title>` and `<meta>` tags per page
2. **Consider SSR/SSG** — Migrate to Next.js or Remix for pre-rendered HTML
3. **Add sitemap.xml** — List all static routes and key dynamic URLs
4. **Add robots.txt** — Allow indexing of product and content pages
5. **Open Graph tags** — For social sharing previews
6. **Schema markup** — Product schema for Google Shopping, FAQ schema

### Performance Notes

- Motion animations use CSS transform and opacity (GPU-accelerated, no layout reflows)
- Images in `public/products/` are served statically — ensure they are properly sized and compressed
- No code splitting currently configured beyond Vite's default chunk strategy
- Consider `<Suspense>` + lazy loading for heavy pages

---

## 15. Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | Yes (for AI features) | Google AI Studio API key |
| `APP_URL` | No | Base URL for the app (default: `http://localhost:3000`) |

Variables are loaded by Vite on the frontend (must be prefixed `VITE_` to be exposed to browser) and by `dotenv` on the backend.

**Note:** `GEMINI_API_KEY` is exposed to the frontend via `vite.config.ts` using `define`. For production, consider moving AI calls to the backend to protect the key.

---

## 16. Conventions & Patterns

### File Naming

| Type | Convention | Example |
|---|---|---|
| React components | PascalCase | `SeriesPage.tsx` |
| Utility files | camelCase | `shopProducts.ts` |
| CSS classes | kebab-case | `glass-panel` |
| URL slugs | kebab-case | `/about/our-story` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_QUANTITY` |

### Component Structure

Follow this order within a component file:

```tsx
// 1. Imports
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// 2. Types/Interfaces local to this file
interface Props { ... }

// 3. Helper data local to this component (if small)
const TAB_LABELS = [...];

// 4. Component function
export default function MyPage() {
  // a. Hooks (state, context, router)
  // b. Derived values
  // c. Event handlers
  // d. Effects
  // e. Early returns (loading, 404)
  // f. JSX return
}
```

### Adding a New Page

1. Create `src/pages/MyNewPage.tsx`
2. Wrap content in `<PageShell>` (unless full-scroll homepage-style)
3. Add route in `src/App.tsx`
4. Add link to `Navbar.tsx` or `Footer.tsx` as appropriate

### Adding a New Product Color

1. Add color object to `src/data/colours.ts`
2. Add the color name to the relevant series in `src/data/shopProducts.ts`
3. Add product image to `public/products/{slug}.jpg`
4. The color page at `/products/{series}/{slug}` will be accessible automatically via the existing `ColourPage` dynamic route

---

## 17. Changelog

### Rev 2 — March 2026

**E-Commerce improvements:**
- `CartContext.tsx` — Cart now persists to `localStorage`. Items survive page refresh and browser close.
- `Checkout.tsx` — Added 3-step progress indicator (Cart → Checkout → Confirmation) at top of page. Relabelled "Back to Shop" → "Back to Cart".
- `OrderConfirmation.tsx` — Added copy-to-clipboard button on order reference ID. Added "What happens next?" 3-step timeline section with contact phone/email.
- `FinishingSeriesPage.tsx` — Fixed broken "Buy Profile A/B/C" button. Was routing to non-existent `/products/finishing-profile-a`. Now routes to `/shop/product/finishing-matt-white?profile=A`.

**Products page redesign:**
- `Products.tsx` — Replaced the static HTML comparison table in the "01 — Series Overview" section with a luxury editorial stacked list. Each series row features a faint ghost series code, animated gold left-accent bar on hover, inline badge pill, colour dot swatch strip, and a translating arrow.

**Housekeeping:**
- `index.html` — Title updated to "i-Panel — Luxury Wall & Ceiling Panels" with a meta description.
- `package.json` — Project name updated from `react-example` to `ipanel`.

---

## 18. Known Gaps & Future Work

### Not Yet Implemented

- **User authentication** — No login/account system. `/account` routes exist as UI shells only (forms render but submit is a no-op).
- **Payment gateway** — Checkout captures order details but has no payment processing. A Sri Lankan gateway (PayHere, Genie) or Stripe must be integrated before going live.
- **Email notifications** — No order confirmation emails sent to customers or admins after checkout.
- **Admin dashboard** — No interface to view/manage/fulfil orders. Orders are only accessible by querying `data/shop.db` directly.
- **Order status progression** — Orders are created as `pending` and have no update mechanism. No fulfilment pipeline.
- **Inventory management** — No stock tracking; all products always appear available.
- **Dealer portal** — `/find-a-dealer` exists but dealer data is hardcoded. No backend for dealer management.
- **Blog & Project CMS** — Blog and Projects pages exist but content is hardcoded. No CMS integration.
- **Dynamic SEO** — Pure SPA, no server-rendered meta tags, no `sitemap.xml`, no `robots.txt`.
- **Search** — No site-wide search.
- **Multi-language** — English only; no i18n framework.
- **Analytics** — No Google Analytics or equivalent tracking.
- **Error monitoring** — No Sentry or equivalent.

### Technical Debt

- `README.md` still references Google AI Studio setup — replace with project-specific instructions.
- `GEMINI_API_KEY` is exposed to the browser via `vite.config.ts` `define` — move AI calls to backend proxy before production.
- Several TypeScript errors exist in pre-existing files (`ColourPage.tsx`, `Shop.tsx`, `SeriesPage.tsx`, etc.) — all are `key` prop type mismatches on sub-components. Non-breaking but should be resolved.
- No test suite exists.

### Recommended Next Steps

1. Integrate a Sri Lankan payment gateway (PayHere or Genie) — highest priority before launch
2. Add `nodemailer` or a transactional email service (Resend, SendGrid) for order confirmation emails
3. Build a minimal admin UI (a protected `/admin/orders` route) to view and update order status
4. Set up a CMS (Sanity, Contentful, or Strapi) for blog, projects, and dealer data
5. Implement user authentication (Clerk, Firebase Auth, or custom JWT)
6. Add `react-helmet-async` for per-page `<title>` and meta tags
7. Add `sitemap.xml` and `robots.txt`
8. Write unit tests for `CartContext` and key utility functions
9. Optimise and compress all product images (WebP format, `srcset` for responsive sizes)
10. Consider migrating to Next.js (App Router) for SSR/SSG and better SEO
