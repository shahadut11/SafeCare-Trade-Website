# 🔥 PyroShield V2 Premium — Next.js Project

A **premium, production-ready** fire safety corporate website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.
Dark glassmorphic theme · Fire gradient palette · Scroll animations · Fully responsive.

---

## 📁 Project Structure

```
pyroshield-v2-nextjs/
│
├── src/
│   ├── app/
│   │   ├── layout.jsx          ← Root layout (fonts, metadata, global CSS)
│   │   ├── page.jsx            ← Home page — assembles all sections
│   │   └── globals.css         ← Tailwind base + custom CSS classes
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx      ← Sticky glassmorphic navbar + mobile menu
│   │   │   └── Footer.jsx      ← Full 4-column footer with social links
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.jsx        ← Full-screen hero with parallax bg + floating cards
│   │   │   ├── Ticker.jsx      ← Animated marquee banner
│   │   │   ├── About.jsx       ← Image + feature list + skill progress bars
│   │   │   ├── Contact.jsx     ← Contact form with success state
│   │   │   ├── Sections.jsx    ← Stats, Services, Products, Projects, CtaBanner,
│   │   │   │                      Clients, Testimonials, Faq — all in one file
│   │   │   └── index.js        ← Re-exports from Sections.jsx
│   │   │
│   │   └── ui/
│   │       └── WhatsAppBtn.jsx ← Floating WhatsApp button
│   │
│   ├── hooks/
│   │   └── useScrollReveal.js  ← IntersectionObserver scroll animation hook
│   │
│   └── lib/
│       └── data.js             ← ⭐ ALL site content — edit only this to rebrand
│
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started

### 1 — Install dependencies
```bash
npm install
```

### 2 — Start development server
```bash
npm run dev
```
Open **http://localhost:3000**

### 3 — Build for production
```bash
npm run build
npm start
```

---

## ✏️ Customizing Content

**Edit `src/lib/data.js` to change any text, images, or data.**
One file controls the entire website — no touching components.

| Export | Controls |
|---|---|
| `SITE` | Company name, phone, email, address, WhatsApp number |
| `NAV_LINKS` | Navigation menu links |
| `HERO` | Eyebrow text, background image, stats strip |
| `TICKER_ITEMS` | Scrolling marquee items |
| `ABOUT` | Image URL, body text, feature list, skill percentages |
| `STATS` | Animated counter targets |
| `SERVICES` | 6 service cards (icon emoji, title, description) |
| `PRODUCTS` | 8 product cards (category, name, image URL, description) |
| `PROJECTS` | Portfolio items (name, type, image, description) |
| `CLIENTS` | Client name strings |
| `TESTIMONIALS` | Review cards (name, role, quote, star count) |
| `FAQS` | Accordion questions and answers |

### Quick example — change phone number:
```js
// src/lib/data.js
export const SITE = {
  phone: '+880 1800-YOUR-NUM',  // ← updates navbar, hero, CTA, footer
  ...
}
```

---

## 🎨 Customizing Design

Edit **`tailwind.config.js`** to change brand colors:
```js
colors: {
  fire: {
    DEFAULT: '#ff4500',  // ← primary fire red
    2: '#ff8c00',        // ← amber accent
  }
}
```

Edit **`src/app/globals.css`** for:
- `.grad-fire` — gradient text
- `.glass` — glassmorphism utility
- `.section-label` — pill badge style
- `.reveal` / `.reveal-l` / `.reveal-r` — scroll animation classes

---

## 📦 Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 14 | Framework (App Router, SSR) |
| React 18 | UI library |
| Tailwind CSS 3 | Utility-first styling |
| Lucide React | Icon set |
| Google Fonts | Poppins + Inter typography |
| Framer Motion | (installed, ready to add animations) |
| IntersectionObserver | Scroll-triggered reveals (no library needed) |

---

## 🌐 Deploying

### Vercel (recommended — 1 command):
```bash
npx vercel
```

### Netlify:
```bash
npm run build
# Upload the .next/static output or connect GitHub repo
```

### Static export (no server needed):
Add to `next.config.js`:
```js
output: 'export'
```
Then run `npm run build` — output goes to `/out` folder.
Upload `/out` to any static host (GitHub Pages, S3, etc.)

---

## 💡 Sections Overview

| Section | Component | File |
|---|---|---|
| Navbar + Mobile Menu | `Navbar` | `layout/Navbar.jsx` |
| Hero | `Hero` | `sections/Hero.jsx` |
| Marquee ticker | `Ticker` | `sections/Ticker.jsx` |
| About + Skills | `About` | `sections/About.jsx` |
| Stats counters | `Stats` | `sections/Sections.jsx` |
| Services 6-grid | `Services` | `sections/Sections.jsx` |
| Products + Filter | `Products` | `sections/Sections.jsx` |
| Portfolio grid | `Projects` | `sections/Sections.jsx` |
| CTA Banner | `CtaBanner` | `sections/Sections.jsx` |
| Client logos | `Clients` | `sections/Sections.jsx` |
| Testimonials | `Testimonials` | `sections/Sections.jsx` |
| FAQ accordion | `Faq` | `sections/Sections.jsx` |
| Contact form | `Contact` | `sections/Contact.jsx` |
| Footer | `Footer` | `layout/Footer.jsx` |
| WhatsApp float | `WhatsAppBtn` | `ui/WhatsAppBtn.jsx` |
