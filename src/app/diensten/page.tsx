import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/content';

export const metadata: Metadata = {
  title: 'Onze Diensten | FunnelVision Marketing Bureau',
  description:
    'Meta advertenties, Google Ads, website bouwen en AI oplossingen. Ontdek hoe FunnelVision jouw bedrijf laat groeien.',
};

export default function DienstenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-widest block mb-4">Diensten</span>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Wat we <em className="italic text-[#F5A623]">voor je doen.</em>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
            Van advertenties tot websites, alles gericht op één doel: meer omzet voor jouw bedrijf.
          </p>
        </div>
      </section>

      {/* Diensten afwisselend */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {services.map((service, i) => (
            <article
              key={service.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-widest block mb-4">
                  {service.number} · {service.subtitle}
                </span>
                <h2
                  className="text-3xl lg:text-4xl font-bold text-[#3D3D3D] mb-5"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {service.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">{service.description}</p>
                <ul className="space-y-3 mb-10">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-[#3D3D3D]">
                      <span className="text-[#F5A623] mt-0.5 shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/diensten/${service.slug}`}
                  className="inline-flex items-center gap-2 bg-[#F5A623] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#e09520] transition-colors"
                >
                  Meer over {service.title} →
                </Link>
              </div>
              <div className={`relative h-80 lg:h-96 rounded-2xl overflow-hidden ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                <Image src={service.unsplash} alt={service.unsplashAlt} fill className="object-cover" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Niet zeker welke dienst <em className="italic text-[#F5A623]">bij jou past?</em>
          </h2>
          <p className="text-gray-400 mb-8">
            Plan een gratis gesprek en we kijken samen wat het meeste resultaat oplevert voor jouw bedrijf.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#F5A623] text-white font-bold px-8 py-4 rounded-full hover:bg-[#e09520] transition-colors"
          >
            Gratis kennismaken
          </Link>
        </div>
      </section>
    </>
  );
}
