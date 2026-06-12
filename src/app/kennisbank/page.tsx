import type { Metadata } from 'next';
import Link from 'next/link';
import { kennisbank } from '@/data/content';

export const metadata: Metadata = {
  title: 'Kennisbank | FunnelVision',
  description:
    'Praktische kennis over marketing, websites en AI, geschreven vanuit de praktijk door de specialisten van FunnelVision.',
  alternates: { canonical: 'https://funnelvisionagency.com/kennisbank' },
  openGraph: {
    url: 'https://funnelvisionagency.com/kennisbank',
    title: 'Kennisbank | FunnelVision',
    description: 'Praktische kennis over marketing, websites en AI, geschreven vanuit de praktijk.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://funnelvisionagency.com' },
    { '@type': 'ListItem', position: 2, name: 'Kennisbank', item: 'https://funnelvisionagency.com/kennisbank' },
  ],
};

export default function KennisbankPage() {
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
              <li className="text-gray-400">Kennisbank</li>
            </ol>
          </nav>
          <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-widest block mb-4">Kennisbank</span>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Praktische kennis. <em className="italic text-[#F5A623]">Vanuit de praktijk.</em>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
            Praktische kennis over marketing, websites en AI, geschreven vanuit de praktijk.
          </p>
        </div>
      </section>

      {/* Artikelen grid */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kennisbank.map((artikel) => (
              <article
                key={artikel.id}
                className="group bg-white rounded-2xl overflow-hidden cursor-pointer transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-[6px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(245,166,35,0.20)]"
              >
                <div className="p-7 flex flex-col h-full">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-wider">
                      {artikel.category}
                    </span>
                  </div>
                  <h2
                    className="font-bold text-lg text-[#3D3D3D] mb-3 leading-snug"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {artikel.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                    {artikel.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>{artikel.readTime}</span>
                      <span>·</span>
                      <span>
                        {new Date(artikel.publishDate).toLocaleDateString('nl-NL', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <Link
                      href={`/kennisbank/${artikel.slug}`}
                      className="text-sm font-semibold text-[#F5A623] transition-[gap] duration-200 group-hover:underline"
                    >
                      Lees meer →
                    </Link>
                  </div>
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
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Hulp nodig met jouw <em className="italic text-[#F5A623]">marketing?</em>
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Plan een gratis kennismakingsgesprek en ontdek wat FunnelVision voor jouw bedrijf kan betekenen.
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
