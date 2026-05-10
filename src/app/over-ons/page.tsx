import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/data/content';

export const metadata: Metadata = {
  title: 'Over Ons',
  description: 'Leer Serdar en Dogukan kennen — de twee broers achter FunnelVision, het resultaatgerichte marketingbureau voor het MKB.',
};

const aanpak = [
  { icon: '🤝', titel: 'Geen contracten', tekst: 'Wij geloven in resultaten. Geen langlopende contracten, gewoon maand-tot-maand.' },
  { icon: '📈', titel: 'Resultaatgericht', tekst: 'Elke euro die je investeert moet terugverdiend worden. Dat is onze belofte.' },
  { icon: '📞', titel: 'Persoonlijk contact', tekst: 'Geen accountmanagers of tussenpersonen. Je werkt altijd direct met Serdar of Dogukan.' },
  { icon: '🇳🇱', titel: 'MKB-specialist', tekst: 'We begrijpen het Nederlandse MKB en weten wat werkt voor bedrijven zoals dat van jou.' },
];

export default function OverOnsPage() {
  return (
    <>
      <section className="bg-[#4A4A4A] pb-20 pt-36">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">Het team</p>
          <h1 className="font-bold text-white" style={{fontSize: 'clamp(2rem, 5vw, 4rem)'}}>
            Twee broers.<br />Één missie.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/70">
            FunnelVision is opgericht door Serdar en Dogukan met één doel: Nederlandse MKB-bedrijven laten groeien met eerlijke, resultaatgerichte marketing.
          </p>
        </div>
      </section>

      {/* Team members */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
            {/* Serdar */}
            <div>
              <div className="relative mb-8 h-[420px] overflow-hidden rounded-3xl">
                <Image src={images.serdar} alt="Serdar — oprichter FunnelVision" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#F5A623]">Oprichter &amp; Meta Specialist</p>
              <h2 className="mb-4 text-3xl font-bold text-[#4A4A4A]">Serdar</h2>
              <p className="leading-relaxed text-[#4A4A4A]/70">
                Serdar is gespecialiseerd in Meta Ads en het bouwen van winstgevende marketing funnels. Met jarenlange ervaring in het helpen van MKB-bedrijven weet hij precies hoe je koude doelgroepen omzet in betalende klanten.
              </p>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]/70">
                Zijn aanpak: data-gedreven, creatief en altijd gericht op meetbaar resultaat.
              </p>
            </div>

            {/* Dogukan */}
            <div>
              <div className="relative mb-8 h-[420px] overflow-hidden rounded-3xl">
                <Image src={images.dogukan} alt="Dogukan — Google Ads specialist FunnelVision" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#F5A623]">Google Ads Specialist</p>
              <h2 className="mb-4 text-3xl font-bold text-[#4A4A4A]">Dogukan</h2>
              <p className="leading-relaxed text-[#4A4A4A]/70">
                Dogukan is de Google Ads expert van het duo. Van zoekadvertenties tot shopping campagnes &mdash; hij zorgt ervoor dat jij zichtbaar bent op het moment dat je potenti&euml;le klanten zoeken.
              </p>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]/70">
                Zijn kracht: technische precisie gecombineerd met een scherp oog voor conversie-optimalisatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aanpak */}
      <section className="bg-[#F8F8F8] py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">Waarom FunnelVision</p>
            <h2 className="text-4xl font-bold text-[#4A4A4A]">Onze aanpak</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {aanpak.map((item) => (
              <div key={item.titel} className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="mb-3 text-lg font-bold text-[#4A4A4A]">{item.titel}</h3>
                <p className="text-sm leading-relaxed text-[#4A4A4A]/65">{item.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office/vibe image */}
      <section className="relative h-80 md:h-[480px]">
        <Image src={images.office} alt="FunnelVision kantoor" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#4A4A4A]/60" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#F5A623]">Den Haag</p>
            <p className="text-3xl font-bold text-white md:text-4xl">Wij werken voor heel Nederland</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="mb-4 text-3xl font-bold text-[#4A4A4A]">Maak kennis met ons</h2>
          <p className="mb-8 text-[#4A4A4A]/70">Een gratis kennismakingsgesprek kost je niets en levert je altijd iets op.</p>
          <Link href="/contact" className="inline-block rounded-full bg-[#F5A623] px-10 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90">
            Plan een kennismakingsgesprek
          </Link>
        </div>
      </section>
    </>
  );
}
