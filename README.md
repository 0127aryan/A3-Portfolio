# A3 Technologies — Portfolio

A high-performance, full-stack studio portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. The design is a modern tech-dark aesthetic blending minimalism with glassmorphism, featuring an interactive WebGL shader hero, atmospheric glows, and a blueprint grid texture.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router, React 19)
- TypeScript
- Tailwind CSS 3 (custom Material-derived design tokens)
- WebGL (raw shader background, no dependencies)
- `next/font` for Space Grotesk, Inter, and JetBrains Mono
- Google Material Symbols for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Available scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run Next.js ESLint checks            |

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx          Composes all page sections
  globals.css       Tailwind layers + glassmorphism utilities
components/
  Navbar.tsx        Sticky nav with scroll-spy + mobile menu
  Hero.tsx          Hero section
  ShaderBackground.tsx  Interactive WebGL background
  SelectedWork.tsx  Project cards
  Stack.tsx         Tech stack categories
  About.tsx         "Why A3" advantages
  Testimonials.tsx  Client quotes
  Services.tsx      Service offerings
  Contact.tsx       Contact form (client-side)
  Footer.tsx        Footer
  Logo.tsx          Inline SVG logo
lib/
  data.ts           Editable content for all sections
tailwind.config.ts  Design tokens (colors, fonts, spacing)
```

## Customization

Most content lives in `lib/data.ts` — edit projects, skills, services, and testimonials there. Design tokens (colors, typography, spacing) are defined in `tailwind.config.ts`.
