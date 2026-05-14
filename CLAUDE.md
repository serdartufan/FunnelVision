@AGENTS.md

# FunnelVision — Project Context

## Bedrijf
- Naam: FunnelVision
- KVK: 73815462
- Type: Eenmanszaak, marketing agency
- Eigenaren: Serdar (Copywriter & Meta Ads Specialist) en Dogukan (Google Ads & LinkedIn Ads Specialist)
- Email: serdar@funnelvisionagency.com
- Adres: Maluslaan 48, 9741 LM Groningen (alleen voor KVK, bedrijf werkt volledig remote)
- Domein: https://funnelvisionagency.com
- GitHub: https://github.com/serdartufan/FunnelVision
- Vercel: https://funnelvision-lake.vercel.app/

## Diensten
- Meta Advertenties (Facebook & Instagram)
- Google Ads (SEA)
- LinkedIn Advertising (B2B)
- E-mailmarketing
- Websites bouwen
- AI Oplossingen (automatisering & maatwerk applicaties)

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
- /diensten/ai-oplossingen
- /cases — 6 placeholder cases in grid
- /over-ons — team, aanpak, tijdlijn
- /contact — formulier → Resend API → serdar@funnelvisionagency.com
- /privacy-policy — AVG-compliant privacybeleid
- /algemene-voorwaarden — volledige AV
- /llms.txt — beknopt overzicht voor AI-crawlers
- /llms-full.txt — uitgebreide Markdown voor AI-crawlers
- /sitemap.xml — automatisch via src/app/sitemap.ts
- /robots.txt — automatisch via src/app/robots.ts
- /fv-indexnow-2026.txt — IndexNow verificatiesleutel

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
- src/components/Navbar.tsx — sticky, scroll-effect, dropdown diensten (6 items), hamburger mobile, logo via next/image
- src/components/Footer.tsx — 4 kolommen, socials, NAP-regel, copyright, logo via next/image
- src/components/ContactForm.tsx — 'use client', POST naar /api/contact, loading state, foutmelding
- src/app/api/contact/route.ts — Resend API route (RESEND_API_KEY via env var)
- src/app/api/indexnow/route.ts — POST/GET endpoint dat alle 13 pagina's aanmeldt bij IndexNow
- src/lib/indexnow.ts — pingIndexNow() functie (POST naar api.indexnow.org)
- src/data/content.ts — centrale databron: services[], cases[], team[], siteConfig

## Environment variables (Vercel)
- RESEND_API_KEY — vereist voor werkend contactformulier

## Status (2026-05-14)
- ✅ Volledig nieuw design gebouwd van scratch
- ✅ LinkedIn Advertising toegevoegd als 5e dienst
- ✅ AI Oplossingen toegevoegd als 6e dienst (pagina, navbar, footer, sitemap, ContactForm, IndexNow)
- ✅ Privacy Policy en Algemene Voorwaarden pagina's
- ✅ Contactformulier gekoppeld aan Resend (e-mail naar serdar@funnelvisionagency.com)
- ✅ Complete SEO & AEO optimalisatie (schema markup, breadcrumbs, FAQ, llms.txt)
- ✅ Security headers en image optimalisatie
- ✅ Build clean: 23/23 routes zonder errors
- ✅ Domein funnelvisionagency.com gekoppeld aan Vercel
- ✅ Google Search Console gekoppeld, sitemap gesubmit
- ✅ Rich results test geslaagd
- ✅ Google Business Profile aangemaakt
- ✅ IndexNow geïmplementeerd (sleutel: fv-indexnow-2026, endpoint: POST /api/indexnow)
- ✅ Logo vervangen door Logo 2.png (navbar 40px, footer 48px)
- ✅ Profielfotos Serdar en Dogukan toegevoegd (/Serdar.jpeg, /Dogukan.jpeg)
- ✅ Titels: Serdar = Copywriter & Meta Ads Specialist, Dogukan = Google Ads & LinkedIn Ads Specialist
- ✅ Actief sinds 2019 (foundingDate, stats, mijlpalen, llms-full.txt)
- ✅ Werkwijze: sprints van 3 maanden, daarna maandelijks opzegbaar
- ✅ FAQ locatie: volledig remote, adres verwijderd uit contactpagina
- ✅ Mijlpalen bijgewerkt: 2019, 2022, 2023, 2026
- ✅ Budget aangepast naar €6M+
- ✅ Alle em dashes vervangen door komma, punt of pipe
- Cases zijn placeholders (Unsplash), worden later vervangen door echte content

## To do
- [ ] Cases updaten met echte cases en klantenlogos
- [ ] LinkedIn bedrijfspagina aanmaken (voor sameAs links in schema)
- [ ] SEO onderzoek en kennisbank opzetten met artikelen
- [ ] Over ons teksten personaliseren
- [ ] GEO citatiemonitoring opzetten (Otterly.ai of Semrush)

## Workflow
- Claude.ai chat voor planning en instructies
- Claude Code terminal voor bouwen en deployen
- git push → automatische deploy via Vercel
