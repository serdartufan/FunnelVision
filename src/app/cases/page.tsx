import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { cases } from '@/data/content';

export const metadata: Metadata = {
  title: 'Cases & Resultaten | FunnelVision Marketing Bureau',
  description:
    'Bekijk de resultaten die FunnelVision heeft behaald voor Nederlandse ondernemers via Meta ads, Google Ads en e-mailmarketing.',
  alternates: { canonical: 'https://funnelvisionagency.com/cases' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://funnelvisionagency.com' },
    { '@type': 'ListItem', position: 2, name: 'Cases', item: 'https://funnelvisionagency.com/cases' },
  ],
};

export default function CasesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#1A1A1A] pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-gray-500">
              <li><Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-gray-400">Cases</li>
            </ol>
          </nav>
          <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-widest block mb-4">Cases</span>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Resultaten die <em className="italic text-[#F5A623]">spreken.</em>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
            Geen mooie praatjes, maar harde cijfers. Bekijk wat FunnelVision heeft bereikt voor ondernemers zoals jij.
          </p>
        </div>
      </section>

      {/* Cases grid */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c) => (
              <article key={c.id} className="group rounded-2xl overflow-hidden bg-white">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={c.unsplash}
                    alt={c.unsplashAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-wider">{c.branch}</span>
                    <span className="text-xs text-gray-400 bg-[#F5F2EB] px-2 py-1 rounded-full">{c.service}</span>
                  </div>
                  <h2 className="font-bold text-lg text-[#3D3D3D] mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {c.company}
                  </h2>
                  <p
                    className="text-5xl font-bold text-[#3D3D3D] mb-1"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {c.result}
                  </p>
                  <p className="text-sm font-medium text-[#F5A623] mb-4">{c.metric}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Jouw bedrijf hier? <em className="italic text-[#F5A623]">Laten we praten.</em>
          </h2>
          <p className="text-gray-400 mb-8">
            Plan een gratis kennismakingsgesprek en ontdek hoe wij jouw cijfers kunnen verbeteren.
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
