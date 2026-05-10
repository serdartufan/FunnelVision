import Image from 'next/image';
import Link from 'next/link';
import { images, cases, diensten } from '@/data/content';

export default function HomePage() {
  const previewCases = cases.slice(0, 3);
  const previewDiensten = diensten;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-screen items-center bg-[#4A4A4A] pt-20">
        <Image src={images.hero} alt="FunnelVision marketing bureau" fill className="object-cover opacity-20" sizes="100vw" priority />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A623]">
            Resultaatgerichte marketing voor het MKB
          </p>
          <h1 className="mb-6 max-w-3xl font-bold leading-tight text-white" style={{fontSize: 'clamp(2.5rem, 6vw, 5rem)'}}>
            Meer klanten.<br />Meer omzet.<br />Meer groei.
          </h1>
          <p className="mb-10 max-w-xl text-lg text-white/70">
            FunnelVision helpt Nederlandse MKB-bedrijven groeien met bewezen online marketing. Geen bullshit, alleen resultaten.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/cases" className="rounded-full bg-[#F5A623] px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Bekijk onze cases
            </Link>
            <Link href="/contact" className="rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#4A4A4A]">
              Gratis kennismaken
            </Link>
          </div>
        </div>
      </section>

      {/* ── Diensten preview ── */}
      <section className="bg-[#F8F8F8] py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">Wat wij doen</p>
            <h2 className="font-bold text-[#4A4A4A]" style={{fontSize: 'clamp(1.8rem, 4vw, 3rem)'}}>Onze diensten</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {previewDiensten.map((d) => (
              <div key={d.id} className="group rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-5 text-4xl">{d.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-[#4A4A4A]">{d.titel}</h3>
                <p className="mb-5 text-sm leading-relaxed text-[#4A4A4A]/60">{d.beschrijving.slice(0, 100)}&hellip;</p>
                <Link href="/diensten" className="text-sm font-semibold text-[#F5A623] transition-opacity hover:opacity-70">
                  Meer lezen &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#4A4A4A] py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
            {[
              { stat: '€2M+', label: 'Advertentiebudget beheerd' },
              { stat: '50+', label: 'Tevreden klanten' },
              { stat: 'Gem. 340%', label: 'ROAS voor onze klanten' },
            ].map((item) => (
              <div key={item.label}>
                <p className="mb-2 text-5xl font-bold text-[#F5A623]">{item.stat}</p>
                <p className="text-sm font-medium uppercase tracking-widest text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cases preview ── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">Bewezen resultaten</p>
              <h2 className="font-bold text-[#4A4A4A]" style={{fontSize: 'clamp(1.8rem, 4vw, 3rem)'}}>Onze cases</h2>
            </div>
            <Link href="/cases" className="text-sm font-semibold text-[#F5A623] hover:opacity-70">
              Alle cases bekijken &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {previewCases.map((c) => (
              <div key={c.id} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="relative h-52">
                  <Image src={c.img} alt={c.bedrijf} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-[#F5A623] px-3 py-1 text-xs font-semibold text-white">
                    {c.branche}
                  </span>
                </div>
                <div className="p-6">
                  <p className="mb-1 text-xs text-[#4A4A4A]/50">{c.bedrijf}</p>
                  <p className="mb-3 text-2xl font-bold text-[#4A4A4A]">{c.resultaat}</p>
                  <p className="text-sm leading-relaxed text-[#4A4A4A]/60">{c.beschrijving}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team preview ── */}
      <section className="bg-[#F8F8F8] py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">Het team</p>
            <h2 className="font-bold text-[#4A4A4A]" style={{fontSize: 'clamp(1.8rem, 4vw, 3rem)'}}>Twee broers. Één missie.</h2>
          </div>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-10 md:grid-cols-2">
            {[
              { naam: 'Serdar', rol: 'Meta Ads & Funnels', img: images.serdar },
              { naam: 'Dogukan', rol: 'Google Ads Specialist', img: images.dogukan },
            ].map((p) => (
              <div key={p.naam} className="text-center">
                <div className="relative mx-auto mb-5 h-56 w-56 overflow-hidden rounded-full">
                  <Image src={p.img} alt={p.naam} fill className="object-cover object-top" sizes="224px" />
                </div>
                <p className="text-xl font-bold text-[#4A4A4A]">{p.naam}</p>
                <p className="text-sm text-[#F5A623]">{p.rol}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/over-ons" className="text-sm font-semibold text-[#F5A623] hover:opacity-70">
              Meer over ons team &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-[#4A4A4A] to-[#2a2a2a] py-24 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Klaar om te groeien?</h2>
          <p className="mb-10 text-lg text-white/70">
            Plan een vrijblijvend kennismakingsgesprek en ontdek wat FunnelVision voor jouw bedrijf kan betekenen.
          </p>
          <Link href="/contact" className="inline-block rounded-full bg-[#F5A623] px-10 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90">
            Gratis kennismaken
          </Link>
        </div>
      </section>
    </>
  );
}
