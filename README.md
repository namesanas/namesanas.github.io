# Anas Khan — Portfolio

A premium, single-page portfolio for an embedded systems & firmware engineer.
Dark, near-black theme with a restrained electric-cyan accent, a live circuit
field in the hero, an interactive "Signal Path" architecture diagram, and a
central data file that drives every piece of content.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and
**Framer Motion**.

---

## Quick start

Requires **Node.js 18.17+** (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

To build and run the production version:

```bash
npm run build
npm run start
```

---

## Editing your content

**Everything you'll want to change lives in one file:**
[`src/data/portfolio.ts`](src/data/portfolio.ts)

That file is the single source of truth for your name, role, bio, links,
capabilities, the signal-path diagram, your journey, projects, the exploration
(in-development) track, philosophy, certifications, and contact details. Edit
the values there and the whole site updates — no component changes needed.

A few specifics:

- **GitHub / LinkedIn / email** → `socials`
- **Projects** → `projects`. Each project has an optional `repo` field. It's
  currently empty, so every project card links to your GitHub profile. Paste the
  exact repository URL into a project's `repo` to turn its card into a direct
  deep-link. (Suggested slugs to verify are noted in a comment above the array.)
- **RFID / PCB work** lives in `exploration` and is labelled *In development* /
  *Exploring* on purpose — kept separate from shipped work so nothing is
  overstated.
- **Resume**: drop a PDF into `public/` and set `site.resumeHref` (e.g.
  `"/anas-khan-resume.pdf"`) if you want to link it.

---

## Customization

- **Accent color, fonts, spacing** → [`tailwind.config.ts`](tailwind.config.ts).
  The accent is `accent` (`#38bdf8`); change it there to re-theme the whole site.
- **Fonts** → [`src/app/layout.tsx`](src/app/layout.tsx) (Space Grotesk for
  display/body, IBM Plex Mono for technical labels), loaded via `next/font`.
- **Production URL** → [`src/lib/siteUrl.ts`](src/lib/siteUrl.ts). Update this
  one value after deploying; it drives canonical metadata, the sitemap, robots,
  and social-share URLs.
- **Favicon** → [`src/app/icon.svg`](src/app/icon.svg).
- **Social share image** → generated on the fly by
  [`src/app/opengraph-image.tsx`](src/app/opengraph-image.tsx) (no static asset
  to maintain).

---

## Accessibility & performance

- Fully responsive from small phones up to large desktops.
- Respects `prefers-reduced-motion`: the animated circuit field renders a single
  static frame, and scroll/entrance animations are disabled.
- Keyboard-navigable with visible focus rings; interactive diagram nodes are
  real buttons and update on focus as well as hover.
- Semantic landmarks, labelled controls, and descriptive metadata for SEO.

---

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx          # fonts, SEO metadata, global chrome
│  ├─ page.tsx            # section composition
│  ├─ globals.css         # base styles + component utilities
│  ├─ icon.svg            # favicon (chip glyph)
│  ├─ opengraph-image.tsx # generated OG/social image
│  ├─ twitter-image.tsx
│  ├─ sitemap.ts / robots.ts
├─ components/
│  ├─ CircuitField.tsx    # animated hero canvas (the signature element)
│  ├─ Navbar.tsx          # scroll state + active-section indicator
│  ├─ ScrollProgress.tsx  # top progress line
│  ├─ Reveal.tsx          # reduced-motion-aware scroll reveal
│  ├─ Section.tsx / SectionHeading.tsx / Icon.tsx
│  └─ sections/           # Hero, About, Expertise, SignalPath, Journey,
│                         # Work, Philosophy, Certifications, GitHubSection,
│                         # Contact, Footer
├─ data/portfolio.ts      # ← edit your content here
└─ lib/                   # siteUrl.ts, useActiveSection.ts
```

---

## Deploy

The easiest path is [Vercel](https://vercel.com):

1. Push this folder to a new GitHub repository.
2. Import it into Vercel — it detects Next.js automatically, no config needed.
3. After the first deploy, set your real domain in `src/lib/siteUrl.ts` and
   redeploy so metadata and the sitemap point at the right URL.

Any host that supports Next.js 14 works too.
