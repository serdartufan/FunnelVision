import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# FunnelVision: Volledig Overzicht
> Resultaatgericht marketing bureau voor het Nederlandse MKB

## Over FunnelVision

FunnelVision is opgericht in 2019 door Serdar en Dogukan. Twee online marketing specialisten met een passie voor meetbare resultaten. Het bureau richt zich uitsluitend op het MKB en helpt ondernemers door heel Nederland groeien via betaalde advertenties, digitale marketing en AI oplossingen.

FunnelVision werkt volledig remote. Geen duur kantoor, die kosten betaal jij als klant niet. We werken vanuit heel Nederland voor klanten door het hele land.

Werkwijze: We werken in sprints van 3 maanden. Na de eerste sprint is de samenwerking maandelijks opzegbaar.

## Team

### Serdar, Copywriter & Meta Ads Specialist
Serdar is verantwoordelijk voor alle Meta campagnes (Facebook & Instagram) en de algehele strategie van FunnelVision. Met jarenlange ervaring in het beheren van advertentiebudgetten boven de €6M heeft hij een bewezen aanpak ontwikkeld voor het MKB.
- Expertise: Meta Ads, Salesfunnels, Strategie, Copywriting, AI Oplossingen
- LinkedIn: https://www.linkedin.com/in/serdartufan

### Dogukan, Google Ads & LinkedIn Ads Specialist
Dogukan beheert alle Google Ads en LinkedIn Ads campagnes en is gespecialiseerd in Search Engine Advertising. Hij onderscheidt zich door zijn analytische aanpak en focus op conversieoptimalisatie.
- Expertise: Google Ads, LinkedIn Ads, SEA, Analytics, Conversiemeting, AI Oplossingen

## Diensten

### 1. Meta Advertenties (Facebook & Instagram Ads)
FunnelVision bouwt winstgevende Meta campagnes die de doelgroep bereiken op het juiste moment, van awareness tot aankoop.

Wat is inbegrepen:
- Campagnestrategie op maat
- Doelgroep research en targeting
- Creatie van advertentieteksten en visuals
- A/B-testen en optimalisatie
- Maandelijkse rapportage

Voor wie: Webshops, lokale dienstverleners en coaches die meer leads of verkopen willen via social media.

Resultaten: Gemiddelde ROAS van 340%, meer dan €6M beheerd advertentiebudget.

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

### 3. Website Bouwen (Conversiegericht & Snel)
Strakke websites die niet alleen mooi zijn, maar ook converteren. Gebouwd op moderne technologie.

Wat is inbegrepen:
- Strategie en wireframes
- Custom design en ontwikkeling
- SEO-technische optimalisatie
- Contactformulieren en integraties
- Snelheid en Core Web Vitals optimalisatie

Voor wie: Ondernemers die een nieuwe website of redesign nodig hebben.

Resultaten: Gemiddelde laadtijd <1s, Core Web Vitals score 100/100.

### 4. AI Oplossingen (Slimmer Werken, Meer Tijd)
Na twee jaar intern te werken met AI weten we wat werkt en wat niet. We bouwen praktische AI oplossingen voor bedrijven: van slimme applicaties tot geautomatiseerde workflows die FTEs besparen en processen versimpelen.

Wat is inbegrepen:
- Maatwerk bedrijfsapplicaties op basis van AI
- Automatisering van repetitieve processen
- AI-gestuurde klantcommunicatie
- Integratie met bestaande systemen
- Training en implementatie voor je team

Voor wie: Bedrijven die tijd willen besparen en interne processen willen moderniseren met AI.

Resultaten: 2+ jaar intern ervaring, tot 40% tijdsbesparing.

## Werkwijze

1. Kennismakingsgesprek (gratis, 20 minuten)
2. Strategie op maat
3. Campagne opzet en lancering (sprint van 3 maanden)
4. Maandelijkse optimalisatie
5. Transparante rapportage

## Kernwaarden
- Sprints van 3 maanden, daarna maandelijks opzegbaar
- Transparante rapportage: maandelijks inzicht in alle cijfers
- Resultaatgericht: alles draait om ROI, niet om ijkle cijfers
- Persoonlijk: directe samenwerking met de specialist

## Bedrijfsgegevens
- Naam: FunnelVision
- KVK: 73815462
- Type: Eenmanszaak / marketing agency
- Adres: Maluslaan 48, 9741 LM Groningen, Nederland (voor KVK-doeleinden)
- Email: serdar@funnelvisionagency.com
- Website: https://funnelvisionagency.com
- Werkgebied: Heel Nederland (volledig remote)
- Opgericht: 2019
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
