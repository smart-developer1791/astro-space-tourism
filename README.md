<div align="center">

# 🚀 AstroNova Space Tourism

**Premium commercial space travel experience built with Astro, Tailwind CSS 4, and GSAP.**

[![Astro](https://img.shields.io/badge/Astro-6.1.2-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Sitemap](https://img.shields.io/badge/SEO-Sitemap_Ready-67E8F9?style=for-the-badge)](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
[![Netlify](https://img.shields.io/badge/Netlify-Deploy-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

<br/>

*Immerse yourself in the ultimate luxury of space travel. AstroNova features seamless View Transitions across pages, stunning GSAP scroll animations, and a responsive glassmorphism UI that makes exploring the cosmos feel as premium as it is breathtaking.*

</div>

---

## ✨ Highlights

- **Astro View Transitions:** Seamless, app-like navigation between destinations.
- **GSAP ScrollTrigger:** Cinematic parallax effects and scroll-based entrance animations.
- **Tailwind CSS v4:** Modern styling utilizing CSS-based configuration and glassmorphism.
- **SEO Optimized:** Dynamic `robots.txt`, sitemap generation, and detailed OpenGraph meta tags.

---

## 🧭 Pages

- `/` - Main page with Parallax hero.
- `/destinations` - Index of all travel destinations.
- `/destinations/[slug]` - Dynamic detail page for each planet/station.
- `/fleet` - Interactive Bento Grid showcasing spacecraft.
- `/booking` - Reservation form with interactive elements and confetti feedback.
- `/robots.txt` - Crawler rules generated dynamically.
- `/sitemap-index.xml` - Auto-generated sitemap.

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|------------|
| Framework | Astro 6 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animations | GSAP & Canvas Confetti |
| SEO | `@astrojs/sitemap`, canonical metadata, robots.txt |
| Hosting | Static deployment ready (Netlify optimized) |

---

## 🚀 Local Development

### 📦 Install

```bash
npm install
```

### ▶️ Run dev server

```bash
npm run dev
```

### 🏗️ Build

```bash
npm run build
```

---

## 📁 Project Structure

```text
astro-space-tourism/
├── public/
│   ├── favicon.svg
│   └── og.svg
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── data/
│   │   ├── destinations.ts
│   │   ├── fleet.ts
│   │   └── images.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── destinations/
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   ├── booking.astro
│   │   ├── fleet.astro
│   │   ├── index.astro
│   │   └── robots.txt.ts
│   └── styles/
│       └── global.css
├── .gitignore
├── astro.config.mjs
├── LICENSE
├── netlify.toml
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

---

## 🌐 Deployment

### 🌐 Netlify (Recommended)

1. Push your code to GitHub
2. Connect repository to Netlify
3. Build settings are auto-configured via standard npm scripts (npm run build, dist folder)
4. Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

---

## 📄 License

MIT License. See `LICENSE`.
