# Edistone Real Estates - Premium Landing Page

This is a high-fidelity, responsive landing page for Edistone Real Estates Private Limited, built with Next.js, React, Tailwind CSS, and Framer Motion.

## Features

- **Premium Design**: Dark, elegant aesthetic using Slate-900 and Amber-500/Gold accents.
- **Animations**: Subtle entry animations using `framer-motion`.
- **Responsive**: Fully responsive across Mobile, Tablet, and Desktop (Ultra HD optimized).
- **SEO Optimized**: Metadata, Open Graph tags, and semantic HTML.
- **Lead Generation**: Contact form with validation and `mailto` integration (backend ready).

## Structure

- `app/components/`: Contains all UI components (Hero, Navbar, About, etc.)
- `app/globals.css`: Global styles and Tailwind v4 configuration.
- `app/layout.tsx`: Root layout with font imports (Inter, Playfair Display, Montserrat).
- `app/page.tsx`: Main landing page assembly.

## Customization

1. **Images**: Replace the Unsplash placeholder URLs in `components/Hero.tsx`, `components/About.tsx`, and `components/Projects.tsx` with licensed assets.
2. **Content**: Update text in `components/About.tsx` and `components/Footer.tsx` with specific company details as needed.
3. **Contact Form**: Update the `mailto` address in `components/Contact.tsx` or integrate with a backend API.

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
