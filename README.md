# DevOps Portfolio — Setup Guide

A dark-theme, minimalist portfolio site built for a DevOps Engineer. The hero
section shows a live-animated CI/CD pipeline (Build → Test → Deploy → Live)
instead of a generic banner, to make the point visually before you say a word.

---

## 1. What's inside (tech stack)

| Piece | Tool | Why |
|---|---|---|
| Framework | **Next.js 14** (App Router) | Modern React framework, fast, exports to plain static files |
| Language | **TypeScript** | Catches mistakes before they reach the browser |
| Styling | **Tailwind CSS** | Utility classes, no separate CSS files to maintain |
| Icons | **lucide-react** | Clean, lightweight icon set |
| Fonts | Space Grotesk (headings) + Inter (body) + JetBrains Mono (labels/data) | Loaded automatically via `next/font` — no manual downloads |

You do **not** need to know all of these deeply — you're mainly editing text
inside files that are already built.

---

## 2. Folder structure

```
devops-portfolio/
├── app/
│   ├── layout.tsx        ← page-wide setup (fonts, <title>, description)
│   ├── page.tsx          ← the homepage — lists sections in order
│   └── globals.css       ← global styles, color of text selection, focus outline
├── components/
│   ├── Header.tsx        ← top navigation bar
│   ├── Hero.tsx          ← the big intro section with your name/tagline
│   ├── PipelineVisual.tsx← the animated Build→Test→Deploy→Live graphic
│   ├── About.tsx         ← your bio + stats (years experience, uptime, etc.)
│   ├── Skills.tsx        ← skills grouped by category (Cloud, IaC, CI/CD...)
│   ├── Projects.tsx      ← project cards (edit titles/descriptions/links here)
│   ├── Certifications.tsx← certification list
│   ├── Contact.tsx       ← email/GitHub/LinkedIn links
│   └── Footer.tsx        ← bottom bar
├── public/               ← put your resume.pdf and any images here
├── tailwind.config.ts    ← color palette + fonts are defined here
├── package.json          ← list of dependencies
└── next.config.mjs       ← tells Next.js to export a plain static site
```

**Rule of thumb:** to change *content* (your name, projects, skills, links),
edit the files in `components/`. You won't need to touch the config files.

---

## 3. What you need installed on your computer

1. **Node.js** (version 18 or higher) — this is what runs the project.
   Download from: https://nodejs.org (choose the LTS version)
2. A code editor — **VS Code** is recommended (free): https://code.visualstudio.com
3. (Optional but recommended) **Git** — to version control and deploy easily:
   https://git-scm.com

Check Node is installed correctly by opening a terminal and running:
```bash
node -v
npm -v
```
You should see version numbers, not an error.

---

## 4. How to run it locally

1. Open a terminal inside the `devops-portfolio` folder.
2. Install all dependencies (this reads `package.json` and downloads everything
   needed — only needs to be done once, or after you add a new package):
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open your browser at **http://localhost:3000** — you'll see the site live.
   Any change you save in a `.tsx` file will instantly refresh the browser.

---

## 5. How to customize it (in order)

1. **Your name & tagline** → `components/Hero.tsx` and `components/Header.tsx`
2. **About text & stats** → `components/About.tsx`
3. **Skills list** → `components/Skills.tsx` (edit the `categories` array)
4. **Projects** → `components/Projects.tsx` (edit the `projects` array — add
   your GitHub repo links in the `link` field)
5. **Certifications** → `components/Certifications.tsx`
6. **Contact links** → `components/Contact.tsx` (update email, GitHub, LinkedIn)
7. **Resume file** → drop your PDF into `public/resume.pdf` (the Hero button
   already links to `/resume.pdf`)
7b. **Your photo** → replace `public/profile.jpg` with your own headshot.
   - Use a square image, at least 400×400px, for the cleanest crop.
   - Keep the same filename (`profile.jpg`) or update the path in
     `components/Hero.tsx` (search for `src="/profile.jpg"`).
   - The little green dot in the corner is a "status: online" touch — remove
     it in `Hero.tsx` if you don't want it (search for `animate-blink-slow`
     near the photo).
8. **Page title / SEO description** → `app/layout.tsx` (the `metadata` object)
9. **Colors** → `tailwind.config.ts` under `colors` — change the hex codes if
   you want a different accent color, but the palette is already chosen to be
   distinct and cohesive, so change with care.

---

## 6. How to build for production (create the final deployable files)

```bash
npm run build
```
This creates an `out/` folder containing plain HTML/CSS/JS — this is the
folder you deploy. No server or database needed; it's a fully static site.

---

## 7. How to deploy it (pick one — all are free for personal sites)

### Option A — Vercel (easiest, made by the Next.js team)
1. Push this project to a GitHub repository.
2. Go to https://vercel.com → "New Project" → import your GitHub repo.
3. Click Deploy. Done — you get a live URL and automatic redeploys on every
   `git push`.

### Option B — Netlify
1. Push to GitHub.
2. Go to https://netlify.com → "Add new site" → connect your repo.
3. Build command: `npm run build` — Publish directory: `out`

### Option C — GitHub Pages
1. Run `npm run build` locally.
2. Push the contents of the `out/` folder to a branch named `gh-pages`.
3. Enable GitHub Pages in your repo settings, pointing to that branch.

### Option D (DevOps-flex option) — Your own server/VPS with CI/CD
This is the option that best matches your role: set up a GitHub Actions
workflow that runs `npm run build` and deploys the `out/` folder to an S3
bucket + CloudFront, or an Nginx server on a VM, on every push to `main`. This
also becomes a portfolio project in itself, since the deploy pipeline is
visible in your GitHub Actions tab.

---

## 8. Adding a custom domain

Once deployed on Vercel/Netlify, go to the project's "Domain settings" and add
your domain (e.g. `yourname.dev`). They give you DNS records to add at your
domain registrar (Namecheap, GoDaddy, Cloudflare, etc.) — usually just one
CNAME or A record. HTTPS is issued automatically.

---

## 9. About the animations

- **Scroll-reveal:** every section fades and slides in the first time it
  enters view, using `components/Reveal.tsx` (built with `IntersectionObserver`
  — no extra library needed). Cards within a section stagger in one after
  another using the `delay` prop.
- **Hover transitions:** buttons lift slightly and gain a soft glow, cards lift
  with a subtle shadow, nav links get an animated underline, project arrows
  nudge toward the corner.
- **Header:** gains a background blur and shadow once you scroll past the top,
  so it stays readable without looking static.
- **Reduced motion:** if a visitor has "reduce motion" turned on at the OS
  level, all animations are shortened automatically — already handled in
  `app/globals.css`.

To turn any animation off, just remove the relevant `transition-*` or
`animate-*` class, or delete the `<Reveal>` wrapper around a section.

## 10. Quick checklist before sharing your portfolio

- [ ] Replace all "Your Name" and placeholder emails/links
- [ ] Add your real resume PDF to `public/resume.pdf`
- [ ] Replace project cards with your actual projects + real GitHub links
- [ ] Update certifications to match what you've actually earned
- [ ] Test on mobile (resize your browser or use dev tools device mode)
- [ ] Run `npm run build` once to make sure there are no errors before deploying
