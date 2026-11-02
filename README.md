# Portfolio

My personal portfolio site in Swedish and English, covering my experience, education, projects and references.

Live: [simon-portfolio-wine.vercel.app](https://simon-portfolio-wine.vercel.app) (English at [/en](https://simon-portfolio-wine.vercel.app/en))

## Features

- Swedish and English versions with locale-prefixed URLs (`/sv`, `/en`) and a language switcher. Swedish is the default.
- Pages for About, Experience, Education, Projects (each with its own detail page), Achievements (certificates, awards, memberships, languages), References and Contact.
- Clicking an experience or education entry opens a modal with tabbed details: an overview with related skills, plus courses, references and attachments. Achievements are shown as small charts: stat cards, progress bars, donut, bar and trend graphs.
- A downloadable CV in each language, and a contact page that copies my email address with one click.
- Light, dark and system themes, metadata and Open Graph images for each language, a sitemap and robots.txt.

## Tech stack

Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS 4, next-intl, next-themes and Headless UI, deployed on Vercel.

## Getting started

Requires Node.js 20.

```bash
npm install
npm run dev        # http://localhost:3000 (redirects to /sv)
```

Production build:

```bash
npm run build
npm run serve
```

No environment variables are required.

## Editing content

All content is stored as typed data in `data/sv/` and `data/en/` (experience, education, projects, skills, certificates, references and page text). Site-wide settings are in `data/siteMetadata.js`, and the CVs are in `public/sv/cv.pdf` and `public/en/cv.pdf`.
