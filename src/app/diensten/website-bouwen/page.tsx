import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/content';

export const metadata: Metadata = {
  title: 'Website Laten Bouwen voor MKB | FunnelVision',
  description:
    'Een snelle, professionele website die bezoekers omzet in klanten. FunnelVision bouwt conversiegerichte websites voor het MKB.',
  alternates: { canonical: 'https://funnelvisionagency.com/diensten/website-bouwen' },
};

const service = services[3];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://funnelvisionagency.com' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://funnelvisionagency.com/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Website Bouwen', item: 'https://funnelvisionagency.com/diensten/website-bouwen' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Bouwen',
  description: service.description,
  provider: { '@type': 'Organization', name: 'FunnelVision', url: 'https://funnelvisionagency.com' },
  areaServed: 'NL',
  url: 'https://funnelvisionagency.com/diensten/website-bouwen',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat kost het laten bouwen van een website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De kosten zijn afhankelijk van de functionaliteit en het aantal pagina\'s. We hanteren vaste prijsafspraken zodat jij nooit voor verrassingen staat. Plan een gratis gesprek voor een persoonlijke offerte.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt het bouwen van een website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een gemiddeld websiteproject duurt 3 tot 6 weken, afhankelijk van de complexiteit en hoe snel content wordt aangeleverd. We werken met een duidelijke planning zodat je altijd weet waar we staan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is de website daarna van mij?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, volledig. Na oplevering en betaling is de website 100% jouw eigendom. Je krijgt alle inloggegevens en toegangen overgedragen.',
      },
    },
  ],
};

export default function WebsiteBouwenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-[#1A1A1A] pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-gray-500">
              <li><Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/diensten" className="hover:text-[#F5A623] transition-colors">Diensten</Link></li>
              <li><span>/</span></li>
              <li className="text-gray-400">Website Bouwen</li>
            </ol>
          </nav>
          <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-widest block mb-4">
            {service.number} · {service.subtitle}
          </span>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white leading-tight max-w-3xl"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Een website die <em className="italic text-[#F5A623]">klanten oplevert.</em>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">{service.description}</p>
        </div>
      </section>

      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden lg:order-last">
              <Image
                src={service.unsplash}
                alt={service.unsplashAlt}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-[#3D3D3D] mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
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
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Voor wie is dit?
            </h2>
            <p className="text-gray-500 leading-relaxed">{service.target}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 max-w-lg">
            {service.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl lg:text-5xl font-bold text-[#F5A623]" style={{ fontFamily: 'var(--font-serif)' }}>
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#3D3D3D] mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
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

      <section className="bg-[#F5F2EB] py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#3D3D3D] mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Klaar voor een website die <em className="italic text-[#F5A623]">werkt?</em>
          </h2>
          <p className="text-gray-500 mb-8">
            Plan een gratis gesprek en ontdek hoe een nieuwe website jouw bedrijf laat groeien.
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
