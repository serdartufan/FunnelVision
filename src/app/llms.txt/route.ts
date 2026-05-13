import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# FunnelVision
> Resultaatgericht marketing bureau voor het Nederlandse MKB

FunnelVision is een marketing agency gespecialiseerd in betaalde advertenties en digitale marketing voor kleine en middelgrote bedrijven in Nederland. Opgericht door Serdar Tufan en Dogukan.

## Diensten
- Meta Advertenties (Facebook & Instagram Ads)
- Google Ads (Search, Shopping, Display)
- LinkedIn Advertising (B2B lead generatie)
- E-mailmarketing (flows, campagnes, automation)
- Website Bouwen (Next.js, conversiegericht)

## Belangrijkste pagina's
- Homepage: https://funnelvisionagency.com
- Diensten: https://funnelvisionagency.com/diensten
- Meta Advertenties: https://funnelvisionagency.com/diensten/meta-advertenties
- Google Ads: https://funnelvisionagency.com/diensten/google-ads
- LinkedIn Advertising: https://funnelvisionagency.com/diensten/linkedin-advertising
- E-mailmarketing: https://funnelvisionagency.com/diensten/emailmarketing
- Website Bouwen: https://funnelvisionagency.com/diensten/website-bouwen
- Cases: https://funnelvisionagency.com/cases
- Over ons: https://funnelvisionagency.com/over-ons
- Contact: https://funnelvisionagency.com/contact

## Contact
- Email: serdar@funnelvisionagency.com
- Adres: Maluslaan 48, 9741 LM Groningen, Nederland
- KVK: 73815462

## Meer informatie
Voor uitgebreide content: https://funnelvisionagency.com/llms-full.txt
`;

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
