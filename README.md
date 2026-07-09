# Modern Portfolio (Next.js 15)

A responsive personal portfolio starter built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Mobile-first responsive layout
- Elegant dark theme with optional light mode toggle
- Sections: Hero, About, Skills, Experience, Projects, Achievements, Contact
- Smooth reveal animations via Framer Motion
- Gradient visuals and glassmorphism cards
- Reusable component structure with editable placeholder content
- SEO metadata configured in `app/layout.tsx`
- Accessible semantic HTML and labels

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  footer.tsx
  navbar.tsx
  project-card.tsx
  reveal.tsx
  theme-provider.tsx
  theme-toggle.tsx
  timeline.tsx
lib/
  site-data.ts
public/
  projects/
    project-atlas.svg
    project-insight-hub.svg
    project-shopwave.svg
tailwind.config.ts
```

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Customize Content

Edit `/home/runner/work/Portfolio/Portfolio/lib/site-data.ts` to update personal info, skills, projects, experience, and achievements.

## Build & Lint

```bash
npm run lint
npm run build
```

## Deployment

### Vercel

- Import this repository into Vercel.
- Deploy with default Next.js settings.

### GitHub Pages

This project is compatible with static hosting workflows. Build/export in CI and publish the generated static output to Pages.

