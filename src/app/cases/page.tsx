import type { Metadata } from 'next';
import Image from 'next/image';
import { cases } from '@/data/content';

export const metadata: Metadata = {
  title: 'Cases',
  description: 'Bekijk de resultaten die FunnelVision behaalt voor haar klanten. Van beauty salons tot webshops.',
};

export default function CasesPage() {
  return (
    <>
      <section className="bg-[#4A4A4A] pb-20 pt-36">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">Bewezen resultaten</p>
          <h1 className="font-bold text-white" style={{fontSize: 'clamp(2rem, 5vw, 4rem)'}}>Onze cases</h1>
          <p className="mt-6 max-w-lg text-lg text-white/70">
            Cijfers liegen niet. Bekijk wat we voor andere bedrijven hebben bereikt.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((c) => (
              <div key={c.id} className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="relative h-56">
                  <Image src={c.img} alt={c.bedrijf} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <span className="rounded-full bg-[#F5A623] px-3 py-1 text-xs font-semibold text-white">
                      {c.branche}
                    </span>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {c.dienst}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-1 text-xs font-medium text-[#4A4A4A]/50">{c.bedrijf}</p>
                  <p className="mb-1 text-2xl font-bold text-[#4A4A4A]">{c.resultaat}</p>
                  <p className="mb-3 text-xs text-[#F5A623]">in {c.periode}</p>
                  <p className="text-sm leading-relaxed text-[#4A4A4A]/65">{c.beschrijving}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4A4A4A] py-20 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="mb-4 text-3xl font-bold text-white">Jouw bedrijf als volgende case?</h2>
          <p className="mb-8 text-white/70">Plan een kennismakingsgesprek en we laten zien wat er mogelijk is voor jouw situatie.</p>
          <a href="/contact" className="inline-block rounded-full bg-[#F5A623] px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90">
            Ja, ik wil groeien
          </a>
        </div>
      </section>
    </>
  );
}
