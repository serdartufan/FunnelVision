import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { kennisbank } from '@/data/content';
import { articleContent } from '@/data/article-content';

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

  const content = articleContent[slug];
  const gerelateerd = kennisbank.filter((a) => a.slug !== slug);

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
    dateModified: artikel.publishDate,
    author: { '@type': 'Person', name: 'Serdar Tufan', url: 'https://funnelvisionagency.com/over-ons' },
    publisher: { '@type': 'Organization', name: 'FunnelVision', url: 'https://funnelvisionagency.com' },
  };

  const faqSchema = content
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: content.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

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
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
            <span>{artikel.readTime} leestijd</span>
            <span>·</span>
            <span>
              {new Date(artikel.publishDate).toLocaleDateString('nl-NL', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span>·</span>
            <span>Laatst bijgewerkt: {new Date(artikel.publishDate).toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' })}</span>
          </div>
          <p className="text-sm text-gray-500">Door <span className="text-gray-300 font-medium">Serdar Tufan</span>, FunnelVision</p>
        </div>
      </section>

      {content ? (
        <>
          {/* Snel antwoord */}
          <section className="bg-[#F5F2EB] py-10">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <div className="flex items-start gap-4">
                <span className="shrink-0 mt-1 w-6 h-6 rounded-full bg-[#F5A623] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold text-[#F5A623] uppercase tracking-widest mb-2">Snel antwoord</p>
                  <p className="text-[#3D3D3D] leading-relaxed font-medium">{content.quickAnswer}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Artikel body */}
          <section className="bg-white py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <p className="text-xl text-gray-500 leading-relaxed mb-12 border-l-4 border-[#F5A623] pl-6">
                {artikel.excerpt}
              </p>
              <div className="prose-wrapper">
                {content.body}
              </div>
            </div>
          </section>

          {/* FAQ sectie */}
          <section className="bg-[#F5F2EB] py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2
                className="text-2xl lg:text-3xl font-bold text-[#3D3D3D] mb-8"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Veelgestelde vragen
              </h2>
              <div className="space-y-5">
                {content.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="bg-white rounded-2xl overflow-hidden group"
                  >
                    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                      <span className="font-semibold text-[#3D3D3D] pr-4">{faq.q}</span>
                      <span className="shrink-0 w-6 h-6 rounded-full bg-[#F5F2EB] flex items-center justify-center text-[#F5A623] group-open:rotate-45 transition-transform duration-200">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <p className="px-6 pb-5 text-gray-500 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Gerelateerde artikelen */}
          <section className="bg-white py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2
                className="text-xl font-bold text-[#3D3D3D] mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Meer lezen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gerelateerd.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/kennisbank/${a.slug}`}
                    className="group block bg-[#F5F2EB] rounded-xl p-5 hover:shadow-md transition-shadow"
                  >
                    <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-wider block mb-2">{a.category}</span>
                    <p className="font-semibold text-[#3D3D3D] leading-snug group-hover:text-[#F5A623] transition-colors">{a.title}</p>
                    <p className="text-xs text-gray-400 mt-2">{a.readTime} leestijd</p>
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/kennisbank"
                  className="inline-flex items-center gap-2 text-[#F5A623] font-semibold hover:gap-3 transition-[gap] duration-200"
                >
                  ← Terug naar kennisbank
                </Link>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Fallback voor artikelen zonder content */
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
      )}

      {/* CTA */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Klaar om samen te <em className="italic text-[#F5A623]">groeien?</em>
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
