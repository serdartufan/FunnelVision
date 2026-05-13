@AGENTS.md

# FunnelVision — Project Context

## Bedrijf
- Naam: FunnelVision
- KVK: 73815462
- Type: Eenmanszaak, marketing agency
- Eigenaren: Serdar Tufan (Meta ads & funnels) en Dogukan (Google Ads specialist)
- Email: serdar@funnelvisionagency.com
- Adres: Maluslaan 48, 9741 LM Groningen
- Domein: https://funnelvisionagency.com
- GitHub: https://github.com/serdartufan/FunnelVision
- Vercel: https://funnelvision-lake.vercel.app/

## Diensten
- Meta Advertenties (Facebook & Instagram)
- Google Ads (SEA)
- LinkedIn Advertising (B2B)
- E-mailmarketing
- Websites bouwen

## Stack
- Next.js 16.2.6 (App Router), TypeScript, Tailwind CSS v4
- Vercel hosting
- next/font voor Google Fonts (geen externe CDN)
- next/image voor alle afbeeldingen (Unsplash via remotePatterns)
- Resend voor e-mail via /api/contact

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
- / (homepage) — hero, stats, diensten, cases preview, team, waarom, FAQ, CTA
- /diensten — overzicht met afwisselende lay-out
- /diensten/meta-advertenties
- /diensten/google-ads
- /diensten/emailmarketing
- /diensten/website-bouwen
- /diensten/linkedin-advertising
- /cases — 6 placeholder cases in grid
- /over-ons — team, aanpak, tijdlijn
- /contact — formulier → Resend API → serdar@funnelvisionagency.com
- /privacy-policy — AVG-compliant privacybeleid
- /algemene-voorwaarden — volledige AV
- /llms.txt — beknopt overzicht voor AI-crawlers
- /llms-full.txt — uitgebreide Markdown voor AI-crawlers
- /sitemap.xml — automatisch via src/app/sitemap.ts
- /robots.txt — automatisch via src/app/robots.ts

## SEO & AEO
- Elke pagina heeft metadata export (title, description, canonical, openGraph)
- Organization schema in layout.tsx (JSON-LD in <head>)
- FAQPage schema op homepage + alle 5 dienstenpagina's (3 vragen per dienst)
- Service schema op elke dienstenpagina
- BreadcrumbList schema + zichtbare breadcrumb op alle pagina's
- Person schema op /over-ons (Serdar + Dogukan)
- LocalBusiness schema op /contact (adres + openingstijden)
- WebPage + speakable sectie op homepage
- Robots.txt: GPTBot / ClaudeBot / PerplexityBot toegelaten, Google-Extended geblokkeerd
- Security headers in next.config.ts (HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy)
- Image optimalisatie: loading="lazy" + sizes op alle images
- NAP-consistentie in footer (adres, KVK, email)
- Geo meta tags in layout.tsx (geo.region, geo.placename, ICBM)

## Componenten
- src/components/Navbar.tsx — sticky, scroll-effect, dropdown diensten (5 items), hamburger mobile
- src/components/Footer.tsx — 4 kolommen, socials, NAP-regel, copyright
- src/components/ContactForm.tsx — 'use client', POST naar /api/contact, loading state, foutmelding
- src/app/api/contact/route.ts — Resend API route (RESEND_API_KEY via env var)
- src/data/content.ts — centrale databron: services[], cases[], team[], siteConfig

## Environment variables (Vercel)
- RESEND_API_KEY — vereist voor werkend contactformulier

## Status (2026-05-13)
- ✅ Volledig nieuw design gebouwd van scratch
- ✅ LinkedIn Advertising toegevoegd als 5e dienst
- ✅ Privacy Policy en Algemene Voorwaarden pagina's
- ✅ Contactformulier gekoppeld aan Resend (e-mail naar serdar@funnelvisionagency.com)
- ✅ Complete SEO & AEO optimalisatie (schema markup, breadcrumbs, FAQ, llms.txt)
- ✅ Security headers en image optimalisatie
- ✅ Build clean: 20/20 routes zonder errors
- ✅ Domein funnelvisionagency.com gekoppeld aan Vercel
- ✅ Google Search Console gekoppeld, sitemap gesubmit
- ✅ Rich results test: 1 valid item detected
- Cases en teamfoto's zijn placeholders (Unsplash), worden later vervangen door echte content

## To do
- [ ] Schema markup uitbreiden: telephone, priceRange en image toevoegen aan Organization schema (3 non-critical issues in Rich Results Test)
- [ ] Google Business Profile aanmaken (belangrijk voor lokale SEO Groningen)
- [ ] LinkedIn bedrijfspagina aanmaken (voor sameAs links in schema)
- [ ] GEO citatiemonitoring opzetten (Otterly.ai of Semrush)
- [ ] Logo vernieuwen
- [ ] Cases en teamfoto's vervangen door echte foto's

## Workflow
- Claude.ai chat voor planning en instructies
- Claude Code terminal voor bouwen en deployen
- git push → automatische deploy via Vercel
