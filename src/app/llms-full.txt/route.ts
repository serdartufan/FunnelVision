import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# FunnelVision: Volledig Overzicht
> Performance marketing bureau voor het Nederlandse MKB

## Over FunnelVision

FunnelVision is opgericht in 2019 door Serdar en Dogukan. Twee performance marketing specialisten gespecialiseerd in Meta Ads en Google Ads. Het bureau richt zich uitsluitend op het MKB en helpt ondernemers door heel Nederland meer leads en omzet genereren via betaalde advertenties. AI wordt ingezet als co-piloot om sneller te testen, beter te targeten en campagnes continu te optimaliseren.

FunnelVision werkt volledig remote. Geen duur kantoor, die kosten betaal jij als klant niet. We werken vanuit heel Nederland voor klanten door het hele land.

Werkwijze: We werken in sprints van 3 maanden. Na de eerste sprint is de samenwerking maandelijks opzegbaar.

## Team

### Serdar, Meta Ads Specialist & Strateeg
Serdar is verantwoordelijk voor alle Meta campagnes (Facebook & Instagram) en de algehele strategie van FunnelVision. Met jarenlange ervaring in het beheren van advertentiebudgetten boven de €6M heeft hij een bewezen aanpak ontwikkeld voor het MKB. Hij gebruikt AI als co-piloot om sneller te optimaliseren en betere resultaten te behalen.
- Expertise: Meta Ads, Salesfunnels, Strategie, Copywriting
- LinkedIn: https://www.linkedin.com/in/serdartufan

### Dogukan, Google Ads Specialist
Dogukan beheert alle Google Ads campagnes en is gespecialiseerd in Search Engine Advertising. Hij onderscheidt zich door zijn analytische aanpak en focus op conversieoptimalisatie.
- Expertise: Google Ads, SEA, Analytics, Conversiemeting

## Diensten

### 1. Meta Advertenties (Facebook & Instagram Ads)
FunnelVision bouwt winstgevende Meta campagnes die de doelgroep bereiken op het juiste moment, van awareness tot aankoop. Wij gebruiken AI om sneller te testen, beter te targeten en meer uit het budget te halen.

Wat is inbegrepen:
- Campagnestrategie op maat
- Doelgroep research en targeting
- Creatie van advertentieteksten en visuals
- A/B-testen en optimalisatie met AI-ondersteuning
- Maandelijkse rapportage

Voor wie: Webshops, lokale dienstverleners en coaches die meer leads of verkopen willen via social media.

Resultaten: Gemiddelde ROAS van 340%, meer dan €6M beheerd advertentiebudget.

### 2. Google Ads (Search Engine Advertising)
Gerichte Google Ads campagnes die het bedrijf bovenaan zetten bij koopklare zoekopdrachten. Wij gebruiken AI om sneller te testen, beter te targeten en meer uit het budget te halen.

Wat is inbegrepen:
- Zoekwoordenonderzoek en strategie
- Search, Shopping en Display campagnes
- Landingspagina optimalisatie
- Conversiemeting via Google Analytics 4
- Maandelijkse prestatierapportage

Voor wie: MKB-bedrijven die direct zichtbaar willen zijn voor lokale of nationale zoekopdrachten.

Resultaten: Gemiddeld 42% CPC reductie, cost per lead vanaf €0,80.

## Werkwijze

1. Gratis audit (analyse van je huidige advertenties)
2. Strategie op maat
3. Campagne opzet en lancering (sprint van 3 maanden)
4. Maandelijkse optimalisatie
5. Transparante rapportage

## Kernwaarden
- Sprints van 3 maanden, daarna maandelijks opzegbaar
- Transparante rapportage: maandelijks inzicht in alle cijfers
- Resultaatgericht: leads en sales zijn ons enige doel
- Persoonlijk: directe samenwerking met de specialist
- AI als co-piloot: sneller testen, beter targeten, meer resultaat

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
