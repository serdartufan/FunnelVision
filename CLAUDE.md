@AGENTS.md

# FunnelVision — Project Context

## Bedrijf
- Naam: FunnelVision
- Type: Marketing agency
- Eigenaren: Serdar Tufan (Meta ads & funnels) en Dogukan (Google Ads specialist)
- Email: serdar@funnelvisionagency.com
- Domein: funnelvisionagency.com
- GitHub: https://github.com/serdartufan/FunnelVision
- Vercel: https://funnelvision-lake.vercel.app/

## Diensten
- Meta Advertenties (Facebook & Instagram)
- Google Ads (SEA)
- E-mailmarketing
- Websites bouwen

## Stack
- Next.js 16.2.6 (App Router), TypeScript, Tailwind CSS v4
- Vercel hosting
- next/font voor Google Fonts (geen externe CDN)
- next/image voor alle afbeeldingen (Unsplash via remotePatterns)

## Branding
- Achtergrond: warm crème #F5F2EB
- Primaire tekst: antraciet #3D3D3D
- Accent: warm goud/oranje #F5A623
- Donkere secties: #1A1A1A
- Headlines: Playfair Display (bold + italic cursief accenten)
- Body: Inter
- Stijl: grote bold typografie, premium, veel witruimte, strakke kaarten
- Taal: Nederlands

## Pagina's (live)
- / (homepage) — hero, stats, diensten, cases preview, team, waarom, CTA
- /diensten — overzicht met afwisselende lay-out
- /diensten/meta-advertenties
- /diensten/google-ads
- /diensten/emailmarketing
- /diensten/website-bouwen
- /cases — 6 placeholder cases in grid
- /over-ons — team, aanpak, tijdlijn
- /contact — formulier met client-side bedankmelding

## SEO
- Elke pagina heeft metadata export (title + description)
- src/app/sitemap.ts → /sitemap.xml automatisch
- src/app/robots.ts → /robots.txt automatisch

## Componenten
- src/components/Navbar.tsx — sticky, scroll-effect, dropdown diensten, hamburger mobile
- src/components/Footer.tsx — 4 kolommen, socials, copyright
- src/components/ContactForm.tsx — 'use client', state-managed, bedankmelding na submit
- src/data/content.ts — centrale databron: services[], cases[], team[], siteConfig

## Status (2026-05-11)
- ✅ Volledig nieuw design gebouwd van scratch
- ✅ Build clean: 14/14 pagina's zonder errors
- ✅ Deployed: https://funnelvision-lake.vercel.app/
- Cases en teamfoto's zijn placeholders (Unsplash), worden later vervangen door echte content

## Workflow
- Claude.ai chat voor planning en instructies
- Claude Code terminal voor bouwen en deployen
- git push → automatische deploy via Vercel
