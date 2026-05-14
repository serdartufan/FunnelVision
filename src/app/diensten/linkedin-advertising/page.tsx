import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/content';

export const metadata: Metadata = {
  title: 'LinkedIn Advertising Bureau | B2B Lead Generatie | FunnelVision',
  description:
    'Bereik beslissers en professionals via LinkedIn Advertising. FunnelVision bouwt gerichte B2B campagnes die leads opleveren.',
  alternates: { canonical: 'https://funnelvisionagency.com/diensten/linkedin-advertising' },
};

const service = services[4];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://funnelvisionagency.com' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://funnelvisionagency.com/diensten' },
    { '@type': 'ListItem', position: 3, name: 'LinkedIn Advertising', item: 'https://funnelvisionagency.com/diensten/linkedin-advertising' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LinkedIn Advertising',
  description: service.description,
  provider: { '@type': 'Organization', name: 'FunnelVision', url: 'https://funnelvisionagency.com' },
  areaServed: 'NL',
  url: 'https://funnelvisionagency.com/diensten/linkedin-advertising',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wanneer is LinkedIn Advertising zinvol voor mijn bedrijf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LinkedIn Advertising is ideaal voor B2B bedrijven die beslissers willen bereiken. Als jouw doelgroep bestaat uit managers, directeuren of professionals in een specifieke branche, is LinkedIn het meest effectieve platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost LinkedIn Advertising?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De kosten per klik op LinkedIn zijn doorgaans hoger dan op Meta of Google, maar de leadkwaliteit is ook aanzienlijk beter. Een minimaal advertentiebudget van €1.000 per maand wordt aanbevolen voor optimale resultaten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke LinkedIn advertentieformaten zet FunnelVision in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We werken met Sponsored Content (in de feed), Message Ads (in de inbox) en Lead Gen Forms (waarmee mensen hun gegevens achterlaten zonder LinkedIn te verlaten). De keuze hangt af van jouw doelstelling.',
      },
    },
  ],
};

export default function LinkedInAdvertisingPage() {
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
              <li className="text-gray-400">LinkedIn Advertising</li>
            </ol>
          </nav>
          <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-widest block mb-4">
            {service.number} · {service.subtitle}
          </span>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white leading-tight max-w-3xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            <em className="italic text-[#F5A623]">LinkedIn Advertising</em> voor serieuze B2B groei.
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
            <h2 className="text-2xl lg:text-3xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
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
            Klaar voor <em className="italic text-[#F5A623]">meer B2B leads?</em>
          </h2>
          <p className="text-gray-500 mb-8">
            Plan een gratis gesprek en ontdek hoe LinkedIn Advertising jouw bedrijf kan laten groeien.
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
