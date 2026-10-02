# Matra landing page

Next.js (App Router) + Tailwind CSS + lucide-react.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Deploy to Netlify

- Build command: `npm run build`
- Netlify detects Next.js automatically (uses the Next.js runtime). No extra config needed.

## Where to edit

- `app/page.tsx` : whole page. Edit `BRAND`, `CONTACT`, `TIERS` and `TESTIMONIALS` at the top.
- `app/layout.tsx` : page title and description (SEO).
- `app/globals.css` : Tailwind directives and global styles.

The testimonials in `app/page.tsx` are placeholders. Replace them with real quotes before launch.
