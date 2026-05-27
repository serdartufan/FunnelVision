import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { kennisbank } from '@/data/content';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return kennisbank.map((artikel) => ({ slug: artikel.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artikel = kennisbank.find((a) => a.slug === slug);
  if (!artikel) return {};
  return {
    title: `${artikel.title} | FunnelVision`,
    description: artikel.excerpt,
    alternates: { canonical: `https://funnelvisionagency.com/kennisbank/${artikel.slug}` },
    openGraph: {
      url: `https://funnelvisionagency.com/kennisbank/${artikel.slug}`,
      title: `${artikel.title} | FunnelVision`,
      description: artikel.excerpt,
    },
  };
}

export default async function ArtikelPage({ params }: Props) {
  const { slug } = await params;
  const artikel = kennisbank.find((a) => a.slug === slug);
  if (!artikel) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://funnelvisionagency.com' },
      { '@type': 'ListItem', position: 2, name: 'Kennisbank', item: 'https://funnelvisionagency.com/kennisbank' },
      { '@type': 'ListItem', position: 3, name: artikel.title, item: `https://funnelvisionagency.com/kennisbank/${artikel.slug}` },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: artikel.title,
    description: artikel.excerpt,
    datePublished: artikel.publishDate,
    author: { '@type': 'Organization', name: 'FunnelVision' },
    publisher: { '@type': 'Organization', name: 'FunnelVision', url: 'https://funnelvisionagency.com' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#1A1A1A] pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
              <li><Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/kennisbank" className="hover:text-[#F5A623] transition-colors">Kennisbank</Link></li>
              <li><span>/</span></li>
              <li className="text-gray-400">{artikel.title}</li>
            </ol>
          </nav>
          <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-widest block mb-4">
            {artikel.category}
          </span>
          <h1
            className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {artikel.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{artikel.readTime} leestijd</span>
            <span>·</span>
            <span>
              {new Date(artikel.publishDate).toLocaleDateString('nl-NL', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
      </section>

      {/* Artikel body */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xl text-gray-500 leading-relaxed mb-12 border-l-4 border-[#F5A623] pl-6">
            {artikel.excerpt}
          </p>
          <div className="bg-[#F5F2EB] rounded-2xl p-10 text-center">
            <p
              className="text-2xl font-bold text-[#3D3D3D] mb-3"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Dit artikel wordt binnenkort gepubliceerd.
            </p>
            <p className="text-gray-500 mb-6">
              Wil je alvast een vraag stellen? Neem dan contact met ons op.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F5A623] text-white font-bold px-6 py-3 rounded-full hover:bg-[#e09520] transition-colors"
            >
              Stel je vraag
            </Link>
          </div>
          <div className="mt-12">
            <Link
              href="/kennisbank"
              className="inline-flex items-center gap-2 text-[#F5A623] font-semibold hover:gap-3 transition-[gap] duration-200"
            >
              ← Terug naar kennisbank
            </Link>
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
