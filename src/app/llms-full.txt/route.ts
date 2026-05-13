import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# FunnelVision — Volledig Overzicht
> Resultaatgericht marketing bureau voor het Nederlandse MKB

## Over FunnelVision

FunnelVision is opgericht in 2023 door Serdar Tufan en Dogukan — twee online marketing specialisten met een passie voor meetbare resultaten. Het bureau richt zich uitsluitend op het MKB en helpt ondernemers door heel Nederland groeien via betaalde advertenties en digitale marketing.

Missie: Marketing die werkt. Transparant, meetbaar en zonder langlopende contracten.

## Team

### Serdar Tufan — Oprichter & Meta Ads Specialist
Serdar is verantwoordelijk voor alle Meta campagnes (Facebook & Instagram) en de algehele strategie van FunnelVision. Met jarenlange ervaring in het beheren van advertentiebudgetten boven de €2M heeft hij een bewezen aanpak ontwikkeld voor het MKB.
- Expertise: Meta Ads, Salesfunnels, Strategie, Copywriting
- LinkedIn: https://www.linkedin.com/in/serdartufan

### Dogukan — Google Ads Specialist
Dogukan beheert alle Google Ads campagnes en is gespecialiseerd in Search Engine Advertising. Hij onderscheidt zich door zijn analytische aanpak en focus op conversieoptimalisatie.
- Expertise: Google Ads, SEA, Analytics, Conversiemeting

## Diensten

### 1. Meta Advertenties (Facebook & Instagram Ads)
FunnelVision bouwt winstgevende Meta campagnes die de doelgroep bereiken op het juiste moment — van awareness tot aankoop.

Wat is inbegrepen:
- Campagnestrategie op maat
- Doelgroep research en targeting
- Creatie van advertentieteksten en visuals
- A/B-testen en optimalisatie
- Maandelijkse rapportage

Voor wie: Webshops, lokale dienstverleners en coaches die meer leads of verkopen willen via social media.

Resultaten: Gemiddelde ROAS van 340%, meer dan €2M beheerd advertentiebudget.

### 2. Google Ads (Search Engine Advertising)
Gerichte Google Ads campagnes die het bedrijf bovenaan zetten bij koopklare zoekopdrachten.

Wat is inbegrepen:
- Zoekwoordenonderzoek en strategie
- Search, Shopping en Display campagnes
- Landingspagina optimalisatie
- Conversiemeting via Google Analytics 4
- Maandelijkse prestatierapportage

Voor wie: MKB-bedrijven die direct zichtbaar willen zijn voor lokale of nationale zoekopdrachten.

Resultaten: Gemiddeld 42% CPC reductie, cost per lead vanaf €0,80.

### 3. LinkedIn Advertising (B2B Lead Generatie)
Gerichte LinkedIn campagnes die beslissers bereiken op het moment dat ze openstaan voor een aanbod.

Wat is inbegrepen:
- Doelgroep op functietitel, bedrijfsgrootte en branche
- Sponsored Content en Message Ads
- Lead Gen Forms voor directe conversie
- Retargeting van websitebezoekers
- Maandelijkse rapportage

Voor wie: B2B bedrijven, consultants en dienstverleners die zakelijke klanten willen bereiken.

### 4. E-mailmarketing (Automatisering & Campagnes)
Geautomatiseerde e-mailsequenties die leads opwarmen, klanten terugbrengen en omzet verhogen.

Wat is inbegrepen:
- Welkomstsequenties en nurture flows
- Winkelwagen verlaten e-mails
- Nieuwsbrief strategie en copy
- Segmentatie en personalisatie
- Rapportage en optimalisatie

Voor wie: Webshops en dienstverleners met een bestaande klantenlijst.

Resultaten: Gemiddelde open rate van 38%, +55% omzet via e-mail.

### 5. Website Bouwen (Conversiegericht & Snel)
Strakke websites die niet alleen mooi zijn, maar ook converteren. Gebouwd op moderne technologie.

Wat is inbegrepen:
- Strategie en wireframes
- Custom design en ontwikkeling
- SEO-technische optimalisatie
- Contactformulieren en integraties
- Snelheid en Core Web Vitals optimalisatie

Voor wie: Ondernemers die een nieuwe website of redesign nodig hebben.

Resultaten: Gemiddelde laadtijd <1s, Core Web Vitals score 100/100.

## Werkwijze

1. Kennismakingsgesprek (gratis, 20 minuten)
2. Strategie op maat
3. Campagne opzet en lancering
4. Maandelijkse optimalisatie
5. Transparante rapportage

## Kernwaarden
- Geen contracten — maandelijks opzegbaar
- Transparante rapportage — maandelijks inzicht in alle cijfers
- Resultaatgericht — alles draait om ROI, niet om ijkle cijfers
- Persoonlijk — directe samenwerking met de specialist

## Bedrijfsgegevens
- Naam: FunnelVision
- KVK: 73815462
- Type: Eenmanszaak / marketing agency
- Adres: Maluslaan 48, 9741 LM Groningen, Nederland
- Email: serdar@funnelvisionagency.com
- Website: https://funnelvisionagency.com
- Werkgebied: Heel Nederland
- Opgericht: 2023
- Medewerkers: 2

## Sociale media
- LinkedIn: https://www.linkedin.com/company/funnelvision
- Instagram: https://www.instagram.com/funnelvision
- Facebook: https://www.facebook.com/funnelvision

## Juridisch
- Privacybeleid: https://funnelvisionagency.com/privacy-policy
- Algemene voorwaarden: https://funnelvisionagency.com/algemene-voorwaarden
`;

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
