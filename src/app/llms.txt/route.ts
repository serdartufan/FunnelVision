import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# FunnelVision
> Performance marketing bureau voor het Nederlandse MKB

FunnelVision is een performance marketing bureau gespecialiseerd in Meta Ads en Google Ads. Wij draaien advertenties met AI als co-piloot voor meer leads en meer omzet. Opgericht door Serdar en Dogukan.

## Diensten
- Meta Advertenties (Facebook & Instagram Ads)
- Google Ads (Search, Shopping, Display)

## Belangrijkste pagina's
- Homepage: https://funnelvisionagency.com
- Diensten: https://funnelvisionagency.com/diensten
- Meta Advertenties: https://funnelvisionagency.com/diensten/meta-advertenties
- Google Ads: https://funnelvisionagency.com/diensten/google-ads
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
