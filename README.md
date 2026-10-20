# Matra F-Commerce (one page)

A one-page version of the Matra site for Facebook sellers. Next.js (App Router) + Tailwind CSS + lucide-react.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Netlify

- Build command: `npm run build`
- Netlify detects Next.js automatically. No extra config needed.

## Where to edit

- `app/lib/content.ts` : your phone, email, WhatsApp number and location (currently placeholders).
- `app/page.tsx` : all page copy, plans and FAQ.
- `app/lib/images.ts` : drop real photos into `public/images/fcommerce/` to replace the illustrations.

## Case study tracking

Every WhatsApp button pre-fills a message ending in "[Site]", and each plan button names the plan,
so you can count which enquiries came from this website and which plan they asked about.
