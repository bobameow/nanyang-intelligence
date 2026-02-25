# Nanyang Intelligence Website

## Project Overview
Company website for Nanyang Intelligence — a Singapore-based AI consultancy.
Built with Next.js 16 + Tailwind CSS 4 alpha, deployed on Vercel (auto-deploys from `main`).

Domain: nanyangintelligence.com

## Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS 4.0.0-alpha.13 via PostCSS
- **Blog**: MDX via next-mdx-remote, posts in `app/blog/posts/`
- **Analytics**: Vercel Analytics + Speed Insights
- **Font**: Geist (sans + mono)
- **TypeScript**

## Key Commands
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — serve production build

## Site Structure
```
app/
├── page.tsx              # Homepage — hero image, intro copy, blog posts
├── about/page.tsx        # Contact form (Formspree)
├── blog/                 # Blog listing + MDX posts
│   ├── page.tsx
│   ├── posts/            # MDX blog post files
│   └── [slug]/page.tsx
├── careers/page.tsx      # Careers/join us page
├── privacy/page.tsx      # Privacy policy (PDPA compliant)
├── terms/page.tsx        # Terms of service (Singapore law)
├── components/
│   ├── nav.tsx           # Top navigation
│   ├── footer.tsx        # Footer with privacy/terms links
│   ├── posts.tsx         # Blog post list component
│   └── mdx.tsx           # MDX rendering components
├── layout.tsx            # Root layout
├── sitemap.ts            # Sitemap (baseUrl: nanyangintelligence.com)
├── robots.ts             # Robots.txt (inherits baseUrl from sitemap)
└── global.css            # Global styles
```

## External Services
- **Formspree** (form ID: `xaqdazba`) — contact form on /about
  - Logged in as: jovan chua (jovancyy@gmail.com)
  - Email notifications go to: jovan@nanyangintelligence.com
  - Free plan (no custom redirect — users see Formspree "Thanks!" page after submit)
- **Vercel** — hosting, auto-deploys from main branch
- **Porkbun** — domain registrar / DNS
  - A record: 216.198.79.1
  - MX record: smtp.google.com (priority 1) — for Google Workspace email
  - TXT/SPF: v=spf1 include:_spf.google.com ~all
- **Google Workspace** — email for jovan@nanyangintelligence.com

## Dark/Light Mode
- Site supports dark mode via Tailwind `dark:` classes
- Hero image has separate light (`/hero-light.png`) and dark (`/hero-dark.png`) versions

## Notes
- The `_next` redirect field in the contact form is set but requires Formspree paid plan to work. Currently users see Formspree's default thank you page.
- Blog posts use frontmatter with `title`, `publishedAt`, `summary`, `image` (optional) fields.
