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
- Headlines: Cormorant (bold + italic cursief accenten)
- Body: Plus Jakarta Sans
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
- /cases — 6 echte cases met logo's en screenshots
- /over-ons — team, aanpak, tijdlijn
- /contact — formulier → Resend API → serdar@funnelvisionagency.com
- /privacy-policy — AVG-compliant privacybeleid
- /algemene-voorwaarden — volledige AV
- /llms.txt — beknopt overzicht voor AI-crawlers
- /llms-full.txt — uitgebreide Markdown voor AI-crawlers
- /kennisbank — overzicht van alle artikelen (3-koloms grid)
- /kennisbank/website-laten-bouwen-kosten
- /kennisbank/ai-consultant-inhuren
- /kennisbank/google-ads-bureau-vergelijken
- /kennisbank/meer-leads-genereren
- /kennisbank/marketing-bureau-groningen
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
- src/components/Navbar.tsx — sticky, scroll-effect, dropdown diensten (6 items), hamburger mobile, logo via next/image, 300ms hover-delay fix; menu-items en hamburger goud (#F5A623) bij transparante staat, donker (#3D3D3D) na scrollen
- src/components/Footer.tsx — 4 kolommen, socials, NAP-regel, copyright, logo via next/image
- src/components/ContactForm.tsx — 'use client', POST naar /api/contact, loading state, foutmelding; bevat honeypot veld 'website' (display:none), bericht verplicht + minLength=10
- src/components/ScrollAnimation.tsx — IntersectionObserver scroll-in animaties
- src/components/CountUp.tsx — animerende cijfers bij scroll
- src/app/api/contact/route.ts — Resend API route (RESEND_API_KEY via env var); escHtml() op alle user input, rate limiter (5 req/uur/IP), server-side validatie, honeypot check
- src/app/api/indexnow/route.ts — POST/GET endpoint dat alle 13 pagina's aanmeldt bij IndexNow; beveiligd met x-indexnow-secret header (INDEXNOW_SECRET env var)
- src/lib/indexnow.ts — pingIndexNow() functie (POST naar api.indexnow.org)
- src/data/content.ts — centrale databron: services[], cases[] (met imageType/imageSrc), team[], kennisbank[], siteConfig
- src/data/article-content.tsx — volledige JSX-content voor alle kennisbank artikelen; exporteert articleContent: Record<slug, { quickAnswer, faqs, body }>
- src/app/kennisbank/page.tsx — overzichtspagina: donkere hero, 3-koloms artikelgrid, CTA
- src/app/kennisbank/[slug]/page.tsx — artikeltemplate: snel antwoord, body, FAQ accordion, gerelateerde artikelen, Article + FAQPage + BreadcrumbList JSON-LD
- public/logos/ — 10 klantenlogos (PNG/SVG)
- public/cases/ — screenshots mymiracle.nl en justharry.co

## Environment variables (Vercel)
- RESEND_API_KEY — vereist voor werkend contactformulier
- INDEXNOW_SECRET — vereist voor /api/indexnow (waarde: 32c8e6e5d347c820f31ceac4a10ff3e1)

## Status (2026-05-22)
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
- ✅ Robots.txt gefixed zodat alle gewenste crawlers de site bereiken
- ✅ Fonts vervangen: Cormorant (headlines) + Plus Jakarta Sans (body)
- ✅ Premium dark card design voor diensten sectie (gradients, Tabler icons, stats per dienst)
- ✅ Nieuwe hero: fluid layout, clamp font-size, scrollende stats banner
- ✅ Microinteracties: hover effects knoppen, cards, navbar underline, scroll animaties (ScrollAnimation, CountUp)
- ✅ Logowall: 10 klantenlogos, crème achtergrond, eigen kleuren, 1 rij, naadloze infinite loop (4x duplicatie, -25% keyframe)
- ✅ Cases bijgewerkt met echte klantdata: The Fight Company, OrganicLink, Dreamfit, Verpoorten Vitality, My Miracle, Just Harry
- ✅ Cases visuals: logo containers (wit #FFFFFF) voor cases 1-4, Playwright screenshots voor My Miracle en Just Harry
- ✅ Navbar dropdown: sluit pas na 300ms delay zodat gebruiker kan klikken
- ✅ Playwright geïnstalleerd voor screenshots van klantwebsites
- ✅ Logowall en stats banner animaties definitief gefixed:
  - width: max-content toegevoegd aan tracks zodat translateX(-25%) correct berekent over contentbreedte
  - transform: translateZ(0) verplaatst van statische CSS naar keyframes om GPU layer clipping op mobile op te lossen
  - Hover pause verwijderd (bevroor animatie permanent na tap op touchscreen)
  - Snelheid: 25s desktop, 18s mobile voor beide tracks

## Status (2026-05-27)
- ✅ Navbar: menu-items en hamburger goud (#F5A623) bij transparante staat, donker (#3D3D3D) na scrollen
- ✅ Homepage cases preview: gefilterd op 3 cases (The Fight Company, Verpoorten Vitality, Just Harry) via filter op c.company in page.tsx; /cases toont nog alle 6
- ✅ Cases pagina: kaartachtergrond bg-[#1A1A1A], tekst wit/gray-400, gold accenten behouden
- ✅ Security audit uitgevoerd en verbeteringen doorgevoerd:
  - escHtml() functie op alle gebruikersinput in /api/contact/route.ts (voorkomt HTML-injectie in e-mail)
  - In-memory rate limiter: 5 requests per uur per IP, 429 bij overschrijding
  - Server-side inputvalidatie: naam (2-100 tekens), email (regex + max 254), bericht (10-5000, verplicht), overige velden max 200 tekens
  - Honeypot veld 'website' in ContactForm.tsx — server stuurt nep-200 zodat bot denkt dat het gelukt is
  - /api/indexnow beveiligd met x-indexnow-secret header (INDEXNOW_SECRET env var)
  - Content-Security-Policy header toegevoegd in next.config.ts (self-hosted fonts, unsafe-inline voor JSON-LD)
  - poweredByHeader: false in next.config.ts (verbergt Next.js versie uit response headers)

## Status (2026-05-27 — kennisbank)
- ✅ Kennisbank sectie gebouwd: /kennisbank overzicht + 5 artikelpagina's
- ✅ src/data/content.ts uitgebreid met kennisbank[] array (5 items: slug, title, category, excerpt, readTime, publishDate)
- ✅ src/data/article-content.tsx aangemaakt met volledige Nederlandse tekst (1000-1500 woorden per artikel), snel antwoord, en 3 FAQ's per artikel
- ✅ Artikel template: snel antwoord blok (crème), artikel body (wit), FAQ accordion (crème, <details>/<summary>), gerelateerde artikelen grid, auteur "Serdar Tufan"
- ✅ JSON-LD schemas per artikel: Article (Person author: Serdar Tufan, datePublished, dateModified), FAQPage (3 vragen), BreadcrumbList
- ✅ Navbar uitgebreid: Kennisbank link toegevoegd desktop + mobiel menu
- ✅ Sitemap uitgebreid: /kennisbank + 5 artikel-slugs (29 routes totaal)
- ✅ Build clean: 29/29 routes zonder errors

## To do
- [ ] LinkedIn bedrijfspagina aanmaken (voor sameAs links in schema)
- [ ] SEO onderzoek kennisbank: sitemap indienen na publicatie, rankings monitoren
- [ ] Externe bronlinks toevoegen aan kennisbank artikelen (autoriteitsbronnen zoals kvk.nl, rijksoverheid.nl) voor E-E-A-T signalering
- [ ] Over ons teksten personaliseren
- [ ] GEO citatiemonitoring opzetten (Otterly.ai of Semrush)
- [ ] Schema markup uitbreiden: telephone, priceRange, image toevoegen
- [ ] Logo FunnelVision vernieuwen
- [ ] Cases foto's vervangen zodra beschikbaar

## Workflow
- Claude.ai chat voor planning en instructies
- Claude Code terminal voor bouwen en deployen
- git push → automatische deploy via Vercel
