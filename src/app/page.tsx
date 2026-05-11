import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { services, cases, team } from '@/data/content';

export const metadata: Metadata = {
  title: 'FunnelVision — Marketing Bureau voor het MKB',
  description:
    'Meer klanten en omzet via Meta advertenties, Google Ads en e-mailmarketing. FunnelVision is jouw resultaatgerichte marketing partner.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, #F5A623 0%, transparent 60%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-24 lg:pt-52 lg:pb-32">
          <div className="max-w-3xl">
            <h1
              className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Meer klanten.
              <br />
              Meer omzet.
              <br />
              <em className="italic text-[#F5A623]">Meer groei.</em>
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
              FunnelVision helpt Nederlandse ondernemers groeien via resultaatgerichte Meta ads, Google Ads en
              e-mailmarketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/cases"
                className="inline-flex items-center gap-2 bg-[#F5A623] text-white font-semibold px-7 py-4 rounded-full hover:bg-[#e09520] transition-colors"
              >
                Bekijk onze cases →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-4 rounded-full hover:border-[#F5A623] hover:text-[#F5A623] transition-colors"
              >
                Gratis kennismaken
              </Link>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '€2M+', label: 'Beheerd budget' },
              { value: '50+', label: 'Klanten geholpen' },
              { value: '340%', label: 'Gem. ROAS' },
              { value: 'Sinds 2023', label: 'Opgericht' },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-3xl lg:text-4xl font-bold text-[#F5A623]"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten preview */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-16"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Wat we <em className="italic text-[#F5A623]">voor je doen.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <article key={service.slug} className="bg-white rounded-2xl p-8 hover:shadow-md transition-shadow group">
                <span className="text-xs font-semibold text-[#F5A623] tracking-widest uppercase block mb-6">
                  {service.number} · {service.subtitle}
                </span>
                <h3
                  className="text-2xl lg:text-3xl font-bold text-[#3D3D3D] mb-4"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-8 leading-relaxed">{service.short}</p>
                <Link
                  href={`/diensten/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[#F5A623] font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Meer lezen →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cases preview */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-16"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Resultaten die <em className="italic text-[#F5A623]">spreken.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.slice(0, 3).map((c) => (
              <article key={c.id} className="group rounded-2xl overflow-hidden bg-[#F5F2EB]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={c.unsplash}
                    alt={c.unsplashAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-wider">{c.branch}</span>
                  <p
                    className="text-5xl font-bold text-[#3D3D3D] my-3"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {c.result}
                  </p>
                  <p className="text-sm font-medium text-[#3D3D3D] mb-2">{c.metric}</p>
                  <p className="text-sm text-gray-500">{c.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/cases" className="inline-flex items-center gap-2 text-[#F5A623] font-semibold">
              Alle cases bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* Over ons preview */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-16"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Twee broers. <em className="italic text-[#F5A623]">Één missie.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-8 flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
                    <Image src={member.unsplash} alt={member.unsplashAlt} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#3D3D3D]" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#F5A623] font-medium mt-1">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-500 leading-relaxed text-sm">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((tag) => (
                    <span key={tag} className="text-xs bg-[#F5F2EB] text-[#3D3D3D] px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/over-ons" className="inline-flex items-center gap-2 text-[#F5A623] font-semibold">
              Leer ons kennen →
            </Link>
          </div>
        </div>
      </section>

      {/* Waarom FunnelVision */}
      <section className="bg-[#1A1A1A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Waarom <em className="italic text-[#F5A623]">FunnelVision?</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Geen contracten',
                desc: 'Geen lange bindingen. Je werkt met ons omdat de resultaten spreken, niet omdat je vastzit.',
              },
              {
                title: 'Transparante rapportage',
                desc: 'Elke maand een helder rapport. Jij ziet precies wat je uitgeeft, wat het oplevert en wat we volgende maand doen.',
              },
              {
                title: 'Resultaat staat centraal',
                desc: 'We meten alles. Elke euro die je uitgeeft aan advertenties wordt gevolgd en geoptimaliseerd op rendement.',
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-5">
                <div className="w-3 h-3 rounded-full bg-[#F5A623]" />
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Klaar om te <em className="italic text-[#F5A623]">groeien?</em>
          </h2>
          <p className="text-lg text-gray-500 mb-10 leading-relaxed">
            Plan een vrijblijvend kennismakingsgesprek en ontdek wat FunnelVision voor jouw bedrijf kan betekenen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#F5A623] text-white font-bold text-lg px-10 py-5 rounded-full hover:bg-[#e09520] transition-colors"
          >
            Gratis kennismaken
          </Link>
        </div>
      </section>
    </>
  );
}
