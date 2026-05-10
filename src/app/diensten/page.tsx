import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { diensten } from '@/data/content';

export const metadata: Metadata = {
  title: 'Diensten',
  description: 'Meta Ads, Google Ads, e-mailmarketing en websitebouw door FunnelVision. Ontdek hoe wij jouw bedrijf laten groeien.',
};

export default function DienstenPage() {
  return (
    <>
      <section className="bg-[#4A4A4A] pb-20 pt-36">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">Wat wij doen</p>
          <h1 className="max-w-xl font-bold text-white" style={{fontSize: 'clamp(2rem, 5vw, 4rem)'}}>
            Onze diensten
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/70">
            Van advertenties tot websites &mdash; alles wat je nodig hebt om online te groeien.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="space-y-32">
            {diensten.map((d, i) => (
              <div
                key={d.id}
                className={`grid grid-cols-1 items-center gap-16 md:grid-cols-2 ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                <div className="relative h-80 overflow-hidden rounded-3xl md:h-[420px]">
                  <Image src={d.img} alt={d.titel} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#F5A623]">{d.subtitel}</p>
                  <h2 className="mb-5 text-4xl font-bold text-[#4A4A4A]">{d.titel}</h2>
                  <p className="mb-8 leading-relaxed text-[#4A4A4A]/70">{d.beschrijving}</p>
                  <ul className="space-y-3">
                    {d.punten.map((punt) => (
                      <li key={punt} className="flex items-center gap-3 text-[#4A4A4A]/80">
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F5A623]/20">
                          <svg className="h-3 w-3 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {punt}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-10 inline-block rounded-full bg-[#F5A623] px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                    Vraag een gratis adviesgesprek aan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F8F8] py-20 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="mb-4 text-3xl font-bold text-[#4A4A4A]">Nog niet zeker welke dienst past?</h2>
          <p className="mb-8 text-[#4A4A4A]/70">Neem contact op en we kijken samen wat het beste bij jouw situatie past.</p>
          <Link href="/contact" className="inline-block rounded-full bg-[#4A4A4A] px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-80">
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  );
}
