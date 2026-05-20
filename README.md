# MEGATACH Dental Lab

Marketing site for MEGATACH Dental Lab — an Ontario-based dental laboratory and denturist clinic.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v3 · Radix UI primitives · Lucide icons

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and fill in values as needed
cp .env.example .env.local

# 3. Start dev server (http://localhost:3000)
npm run dev
```

## Scripts

| Command            | What it does                          |
| ------------------ | ------------------------------------- |
| `npm run dev`      | Start Next.js dev server              |
| `npm run build`    | Production build                      |
| `npm run start`    | Run production build locally          |
| `npm run lint`     | ESLint + Next.js rules                |
| `npm run typecheck`| Strict TypeScript check (no emit)     |

---

## Project structure

```
.
├── public/
│   └── brand/              # logo, brand board
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── api/contact/    # contact form endpoint
│   │   ├── services/       # services index + dynamic [slug]
│   │   ├── about/
│   │   ├── gallery/
│   │   ├── testimonials/
│   │   ├── contact/
│   │   ├── layout.tsx      # root layout (fonts, header, footer, JSON-LD)
│   │   ├── page.tsx        # homepage
│   │   ├── globals.css     # Tailwind + design tokens
│   │   ├── sitemap.ts      # auto-generated sitemap.xml
│   │   └── robots.ts       # auto-generated robots.txt
│   ├── components/
│   │   ├── ui/             # primitives (Button, Section, PageHeader)
│   │   ├── site/           # header, footer, contact form, JSON-LD
│   │   └── sections/       # homepage sections (Hero, Process, CTA, …)
│   └── lib/
│       ├── site-config.ts  # name, contact, nav, hours
│       ├── services.ts     # service data (single source of truth)
│       └── utils.ts        # cn() helper
├── tailwind.config.ts
├── next.config.mjs
└── vercel.json
```

---

## Brand tokens

Exact values pulled from the supplied logo:

| Token              | Value      | Tailwind class           |
| ------------------ | ---------- | ------------------------ |
| Brand ink          | `#232628`  | `bg-brand-ink`           |
| Brand teal         | `#29B1C5`  | `bg-brand-teal`          |
| Teal (dark)        | `#1F8FA0`  | `bg-brand-tealDark`      |
| Teal (light)       | `#5BCBDB`  | `bg-brand-tealLight`     |
| Surface            | `#F8FAFC`  | `bg-brand-surface`       |
| Line               | `#E2E8F0`  | `border-brand-line`      |

Fonts: **Sora** (display) + **Inter** (body), both loaded via `next/font/google`.

---

## Content editing

- **Site name, contact, hours, social, nav:** `src/lib/site-config.ts`
- **Services list (homepage cards + dedicated pages):** `src/lib/services.ts`
- **Testimonials:** `src/components/sections/testimonials.tsx`
- **Gallery images:** `src/app/gallery/page.tsx`

All copy is intentionally placed in data modules so non-developers can edit it without touching layout code.

---

## Deploy to Vercel

### One-click

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js. No extra config needed.
4. Set `NEXT_PUBLIC_SITE_URL` to your production URL in the Vercel env settings.
5. Click **Deploy**.

### CLI

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

---

## Contact form delivery

The `/api/contact` route currently logs to the server. To enable real email delivery, plug in [Resend](https://resend.com):

```bash
npm install resend
```

Then update `src/app/api/contact/route.ts` to call `resend.emails.send(...)` using `process.env.RESEND_API_KEY`.

---

## SEO checklist (already wired)

- [x] `metadata` / `openGraph` / `twitter` in root layout
- [x] Per-page metadata (services, gallery, about, etc.)
- [x] `sitemap.xml` auto-generated
- [x] `robots.txt` auto-generated
- [x] `LocalBusiness` + `MedicalBusiness` JSON-LD
- [x] Semantic HTML, `next/image` everywhere
- [x] Mobile-first responsive layout
- [x] AODA-friendly contrast (`#232628` on white = 14.7:1)
