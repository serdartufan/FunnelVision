@AGENTS.md

# FunnelVision — Project Context

## Bedrijf
- Naam: FunnelVision
- KVK: 73815462
- Type: Eenmanszaak, performance marketing agency
- Eigenaren: Serdar (Meta Ads Specialist & Strateeg) en Dogukan (Google Ads Specialist)
- Email: serdar@funnelvisionagency.com
- Adres: Maluslaan 48, 9741 LM Groningen (alleen voor KVK, bedrijf werkt volledig remote)
- Domein: https://funnelvisionagency.com
- GitHub: https://github.com/serdartufan/FunnelVision
- Server: Hetzner VPS (CX22) — IP 46.225.5.91 — /var/www/funnelvision — poort 3003

## Diensten (huidig — alleen deze twee)
- Meta Advertenties (Facebook & Instagram)
- Google Ads (SEA)
- AI wordt intern ingezet als optimalisatietool, niet als apart aangeboden dienst

## Stack
- Next.js 16.2.6 (App Router), TypeScript, Tailwind CSS v4
- Hetzner VPS (CX22), Nginx + Cloudflare (Flexible SSL)
- next/font voor Google Fonts (geen externe CDN)
- next/image voor alle afbeeldingen
- Brevo (voorheen Resend) voor e-mail via /api/contact

## Branding
- Achtergrond: warm crème #F5F2EB
- Primaire tekst: antraciet #3D3D3D
- Accent: warm goud/oranje #F5A623
- Donkere secties: #1A1A1A
- Headlines: Cormorant (bold + italic cursief accenten)
- Body: Plus Jakarta Sans
- Stijl: grote bold typografie, premium, veel witruimte, strakke kaarten
- Taal: Nederlands
- Primaire CTA overal: "Vraag een gratis audit aan"

## Pagina's (live)
- / (homepage) — hero ("Wij draaien ads die geld opleveren."), stats, diensten, cases preview (3 cases), team, waarom, FAQ, CTA
- /diensten — overzicht Meta Ads + Google Ads
- /diensten/meta-advertenties
- /diensten/google-ads
- /cases — 4 cases: The Fight Company, OrganicLink, Dreamfit, Verpoorten Vitality
- /over-ons — team, aanpak, tijdlijn (actief sinds 2019)
- /contact — formulier → Brevo API → serdar@funnelvisionagency.com
- /privacy-policy — AVG-compliant privacybeleid
- /algemene-voorwaarden — volledige AV (zonder verwijderde diensten)
- /llms.txt — beknopt overzicht voor AI-crawlers
- /llms-full.txt — uitgebreide Markdown voor AI-crawlers
- /kennisbank — overzicht (2 artikelen, niet in navbar)
- /kennisbank/google-ads-bureau-vergelijken
- /kennisbank/meer-leads-genereren
- /sitemap.xml — automatisch via src/app/sitemap.ts
- /robots.txt — automatisch via src/app/robots.ts
- /fv-indexnow-2026.txt — IndexNow verificatiesleutel

## SEO & AEO
- Elke pagina heeft metadata export (title, description, canonical, openGraph)
- Meta title: "FunnelVision — AI-Powered Meta Ads & Google Ads Bureau"
- Organization schema in layout.tsx (JSON-LD in <head>)
- FAQPage schema op homepage + dienstenpagina's (3 vragen per dienst)
- Service schema op elke dienstenpagina
- BreadcrumbList schema + zichtbare breadcrumb op alle pagina's
- Person schema op /over-ons (Serdar + Dogukan)
- LocalBusiness schema op /contact
- WebPage + speakable sectie op homepage
- Article + FAQPage + BreadcrumbList JSON-LD per kennisbank artikel
- Robots.txt: GPTBot / ClaudeBot / PerplexityBot toegelaten, Google-Extended geblokkeerd
- Security headers in next.config.ts (HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy, CSP)
- poweredByHeader: false in next.config.ts
- Image optimalisatie: loading="lazy" + sizes op alle images
- NAP-consistentie in footer (adres, KVK, email)
- Geo meta tags in layout.tsx (geo.region, geo.placename, ICBM)

## Componenten
- src/components/Navbar.tsx — sticky, scroll-effect, dropdown diensten (2 items), hamburger mobile, logo via next/image, 300ms hover-delay; menu-items en hamburger goud (#F5A623) transparant, donker (#3D3D3D) na scrollen; kennisbank NIET in navbar
- src/components/Footer.tsx — 4 kolommen, socials, NAP-regel, copyright, logo via next/image
- src/components/ContactForm.tsx — 'use client', POST naar /api/contact, loading state, foutmelding; honeypot veld 'website' (display:none), dropdown klantdoelen (meer leads, meer verkopen, meer afspraken, merkbekendheid, weet niet), bericht verplicht + minLength=10
- src/components/ScrollAnimation.tsx — IntersectionObserver scroll-in animaties
- src/components/CountUp.tsx — animerende cijfers bij scroll
- src/app/api/contact/route.ts — Brevo SMTP API (BREVO_API_KEY via env var); escHtml() op alle user input, rate limiter (5 req/uur/IP), server-side validatie, honeypot check
- src/app/api/indexnow/route.ts — POST/GET endpoint dat pagina's aanmeldt bij IndexNow; beveiligd met x-indexnow-secret header (INDEXNOW_SECRET env var)
- src/lib/indexnow.ts — pingIndexNow() functie (POST naar api.indexnow.org)
- src/data/content.ts — centrale databron: services[] (2), cases[] (4), team[], kennisbank[] (2), siteConfig
- src/data/article-content.tsx — JSX-content voor kennisbank artikelen; exporteert articleContent: Record<slug, { quickAnswer, faqs, body }>
- src/app/kennisbank/page.tsx — overzichtspagina: donkere hero, 3-koloms artikelgrid, CTA
- src/app/kennisbank/[slug]/page.tsx — artikeltemplate: snel antwoord, body, FAQ accordion, gerelateerde artikelen, JSON-LD
- public/logos/ — klantenlogos (PNG/SVG)
- public/ — Serdar.jpeg, Dogukan.jpeg, Logo 2.png

## Environment variables (op server: /var/www/funnelvision/.env)
- BREVO_API_KEY — vereist voor werkend contactformulier (vervangt eerder RESEND_API_KEY)
- INDEXNOW_SECRET — vereist voor /api/indexnow (waarde: 32c8e6e5d347c820f31ceac4a10ff3e1)

## Huidige staat (2026-06-09)
- ✅ Positionering: puur performance marketing (Meta Ads + Google Ads)
- ✅ Hero headline: "Wij draaien ads die geld opleveren."
- ✅ Verwijderd: LinkedIn Advertising, E-mailmarketing, Website Bouwen, AI Oplossingen als diensten
- ✅ Verwijderd: cases My Miracle en Just Harry
- ✅ Verwijderd: kennisbank artikelen website-laten-bouwen-kosten, marketing-bureau-groningen, ai-consultant-inhuren
- ✅ Contactformulier dropdown: klantdoelen i.p.v. diensten
- ✅ Email provider: Resend vervangen door Brevo (BREVO_API_KEY)
- ✅ Rate limiting contactformulier: 5 req/uur/IP
- ✅ Security: escHtml(), honeypot, server-side validatie, CSP header, poweredByHeader: false
- ✅ Kennisbank uit navbar gehaald (pagina bestaat nog wel)
- ✅ Sitemap: 14 routes (homepage, 2 diensten, cases, 2 kennisbank-artikelen, kennisbank-overzicht, over-ons, contact, privacy-policy, algemene-voorwaarden, llms-varianten)
- ✅ Build clean, site live op funnelvisionagency.com
- ✅ Google Search Console gekoppeld, sitemap gesubmit
- ✅ Google Business Profile aangemaakt
- ✅ IndexNow geïmplementeerd

## To do
- [ ] Kennisbank uitbreiden met performance marketing artikelen: meta advertising kosten, google ads vs meta ads, wat is ROAS, leads genereren met meta ads, google ads voor mkb
- [ ] Hero headline verder aanscherpen indien gewenst
- [ ] LinkedIn bedrijfspagina aanmaken (voor sameAs links in schema)
- [ ] Externe bronlinks toevoegen aan kennisbank artikelen (kvk.nl, rijksoverheid.nl) voor E-E-A-T
- [ ] Over ons teksten personaliseren
- [ ] GEO citatiemonitoring opzetten (Otterly.ai of Semrush)
- [ ] Schema markup uitbreiden: telephone, priceRange, image toevoegen
- [ ] Logo FunnelVision vernieuwen
- [ ] Nieuwe Stackwerk.nl website bouwen

## Workflow
- Claude.ai chat voor planning en instructies
- Claude Code terminal voor bouwen en deployen
- git push naar main → GitHub Action → SSH naar Hetzner VPS → git pull + npm install + npm run build + pm2 restart

## Sessie-afsluiting (automatisch)
Aan het einde van elke sessie voert Claude Code automatisch de volgende stappen uit, zonder dat de gebruiker dit hoeft te vragen:

1. **CLAUDE.md bijwerken** — voeg toe wat er gedaan is (✅) en pas de To do lijst aan
2. **Committen en pushen**:
   ```
   git add .
   git commit -m "<korte beschrijving van wat er gedaan is in deze sessie>"
   git push
   ```

Dit geldt altijd, ook als er maar kleine wijzigingen zijn. De commit message beschrijft de sessie in 1 regel.
