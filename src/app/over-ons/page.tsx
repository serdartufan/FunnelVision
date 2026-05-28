import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { team } from '@/data/content';

export const metadata: Metadata = {
  title: 'Over Ons | Marketing Bureau Groningen | FunnelVision',
  description:
    'Maak kennis met Serdar en Dogukan, de drijvende krachten achter FunnelVision. Resultaatgericht, persoonlijk en transparant.',
  alternates: { canonical: 'https://funnelvisionagency.com/over-ons' },
};

const milestones = [
  { year: '2019', event: 'Opgericht met focus op Meta Advertenties.' },
  { year: '2022', event: 'Uitbreiding naar Google Ads en website bouwen.' },
  { year: '2023', event: 'Meer dan 3 miljoen euro advertentiebudget beheerd.' },
  { year: '2026', event: 'AI oplossingen toegevoegd na 2 jaar intern gebruik.' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://funnelvisionagency.com' },
    { '@type': 'ListItem', position: 2, name: 'Over ons', item: 'https://funnelvisionagency.com/over-ons' },
  ],
};

const personSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Serdar',
      jobTitle: 'Copywriter & Meta Ads Specialist',
      worksFor: { '@type': 'Organization', name: 'FunnelVision' },
      sameAs: ['https://www.linkedin.com/in/serdartufan'],
    },
    {
      '@type': 'Person',
      name: 'Dogukan',
      jobTitle: 'Google Ads & LinkedIn Ads Specialist',
      worksFor: { '@type': 'Organization', name: 'FunnelVision' },
    },
  ],
};

export default function OverOnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#1A1A1A] pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-gray-500">
              <li><Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-gray-400">Over ons</li>
            </ol>
          </nav>
          <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-widest block mb-4">Over ons</span>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Twee broers. <em className="italic text-[#F5A623]">Één missie.</em>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
            FunnelVision is opgericht door Serdar en Dogukan. Twee specialisten die geloven dat marketing
            meetbaar, transparant en eerlijk moet zijn.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {team.map((member) => (
              <article key={member.name} className="bg-white rounded-2xl overflow-hidden">
                <div className="relative h-72">
                  <Image
                    src={member.unsplash}
                    alt={member.unsplashAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-serif)' }}>
                      {member.name}
                    </h2>
                    <p className="text-[#F5A623] font-medium text-sm mt-1">{member.role}</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-500 leading-relaxed mb-6">{member.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#F5F2EB] text-[#3D3D3D] px-3 py-1.5 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Aanpak */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#3D3D3D] mb-8"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Onze <em className="italic text-[#F5A623]">aanpak.</em>
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: 'Persoonlijk',
                  desc: 'Geen accountmanager die je doorschuift. Je werkt direct met Serdar of Dogukan, de specialist die jouw campagnes bouwt en beheert.',
                },
                {
                  title: 'Transparant',
                  desc: 'Je krijgt maandelijks een helder rapport met alle cijfers. We leggen uit wat werkt, wat niet, en wat we gaan aanpassen.',
                },
                {
                  title: 'Resultaatgericht',
                  desc: 'Alles draait om jouw groei. We kijken niet naar likes of bereik, maar naar leads, omzet en rendement op jouw investering.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#F5A623] flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#3D3D3D] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tijdlijn */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#3D3D3D] mb-16"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Onze <em className="italic text-[#F5A623]">mijlpalen.</em>
          </h2>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-[#F5A623]/30 hidden md:block" />
            <div className="space-y-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="relative flex flex-col items-center hidden md:flex">
                    <div className="w-10 h-10 rounded-full bg-[#F5A623] flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {m.year.slice(2)}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 flex-1">
                    <span className="text-xs font-semibold text-[#F5A623] block mb-2">{m.year}</span>
                    <p className="text-[#3D3D3D] font-medium">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Klaar om samen te <em className="italic text-[#F5A623]">groeien?</em>
          </h2>
          <p className="text-gray-400 mb-8">
            Plan een vrijblijvend kennismakingsgesprek met Serdar of Dogukan.
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
