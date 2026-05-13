import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/content';

export const metadata: Metadata = {
  title: 'Meta Advertenties Bureau | Facebook & Instagram Ads — FunnelVision',
  description:
    'Meer leads en omzet via Facebook en Instagram advertenties. FunnelVision bouwt winstgevende Meta campagnes voor het MKB.',
  alternates: { canonical: 'https://funnelvisionagency.com/diensten/meta-advertenties' },
};

const service = services[0];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://funnelvisionagency.com' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://funnelvisionagency.com/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Meta Advertenties', item: 'https://funnelvisionagency.com/diensten/meta-advertenties' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Meta Advertenties',
  description: service.description,
  provider: { '@type': 'Organization', name: 'FunnelVision', url: 'https://funnelvisionagency.com' },
  areaServed: 'NL',
  url: 'https://funnelvisionagency.com/diensten/meta-advertenties',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat zijn Meta Advertenties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Meta Advertenties zijn betaalde advertenties op Facebook en Instagram. Met Meta Ads kun je jouw doelgroep heel specifiek bereiken op basis van demografische gegevens, interesses en gedrag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel budget heb ik nodig voor Meta Advertenties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We raden aan minimaal €500 per maand advertentiebudget te reserveren om voldoende data te verzamelen en te optimaliseren. Onze beheervergoeding staat hier los van.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel zie ik resultaten met Meta Advertenties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Binnen 2 tot 4 weken zie je de eerste resultaten. De campagnes worden continu geoptimaliseerd, waarna de resultaten in de tweede en derde maand doorgaans aanzienlijk verbeteren.',
      },
    },
  ],
};

export default function MetaAdvertentiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#1A1A1A] pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-gray-500">
              <li><Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/diensten" className="hover:text-[#F5A623] transition-colors">Diensten</Link></li>
              <li><span>/</span></li>
              <li className="text-gray-400">Meta Advertenties</li>
            </ol>
          </nav>
          <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-widest block mb-4">
            {service.number} · {service.subtitle}
          </span>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white leading-tight max-w-3xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            <em className="italic text-[#F5A623]">Meta Advertenties</em> die écht converteren.
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">{service.description}</p>
        </div>
      </section>

      {/* Wat houdt het in */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-[#3D3D3D] mb-6"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Wat krijg je?
              </h2>
              <ul className="space-y-4">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded-full bg-[#F5A623] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-[#3D3D3D]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src={service.unsplash}
                alt={service.unsplashAlt}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2
              className="text-2xl lg:text-3xl font-bold text-[#3D3D3D] mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Voor wie is dit?
            </h2>
            <p className="text-gray-500 leading-relaxed">{service.target}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 max-w-lg">
            {service.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl lg:text-5xl font-bold text-[#F5A623]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#3D3D3D] mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
            Veelgestelde vragen
          </h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="border-b border-[#F5F2EB] pb-6">
                <h3 className="font-bold text-[#3D3D3D] mb-2">{faq.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F2EB] py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#3D3D3D] mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Klaar voor <em className="italic text-[#F5A623]">meer leads?</em>
          </h2>
          <p className="text-gray-500 mb-8">
            Plan een gratis gesprek en ontdek hoe Meta advertenties jouw bedrijf kunnen laten groeien.
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
