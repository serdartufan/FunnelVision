// .
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  IconDeviceMobile,
  IconSearch,
  IconMail,
  IconBrandLinkedin,
  IconCode,
  IconBrain,
} from '@tabler/icons-react';
import { cases, team } from '@/data/content';
import ScrollAnimation from '@/components/ScrollAnimation';
import CountUp from '@/components/CountUp';

const dienstenCards = [
  {
    slug: 'meta-advertenties',
    number: '01',
    label: 'FACEBOOK & INSTAGRAM',
    title: 'Meta Advertenties',
    short: 'Bereik jouw ideale klant op Facebook en Instagram met advertenties die écht converteren.',
    gradient: 'linear-gradient(135deg, #2a2010 0%, #1A1A1A 100%)',
    Icon: IconDeviceMobile,
    stats: [
      { value: '340%', label: 'Gem. ROAS' },
      { value: '50+', label: 'Klanten' },
    ],
  },
  {
    slug: 'google-ads',
    number: '02',
    label: 'SEARCH ENGINE ADVERTISING',
    title: 'Google Ads',
    short: 'Word gevonden door mensen die nu actief zoeken naar jouw dienst of product.',
    gradient: 'linear-gradient(135deg, #0d1f1a 0%, #1A1A1A 100%)',
    Icon: IconSearch,
    stats: [
      { value: '€0,80', label: 'Cost per lead' },
      { value: '+280%', label: 'Meer leads' },
    ],
  },
  {
    slug: 'emailmarketing',
    number: '03',
    label: 'AUTOMATISERING & CAMPAGNES',
    title: 'E-mailmarketing',
    short: 'Bouw een relatie met je klanten en genereer omzet op autopilot via slimme e-mailflows.',
    gradient: 'linear-gradient(135deg, #1a0d1f 0%, #1A1A1A 100%)',
    Icon: IconMail,
    stats: [
      { value: '45%', label: 'Open rate' },
      { value: '3x', label: 'Meer omzet' },
    ],
  },
  {
    slug: 'linkedin-advertising',
    number: '04',
    label: 'B2B LEAD GENERATIE',
    title: 'LinkedIn Advertising',
    short: 'Bereik beslissers en professionals via het meest effectieve B2B advertentieplatform.',
    gradient: 'linear-gradient(135deg, #0d1526 0%, #1A1A1A 100%)',
    Icon: IconBrandLinkedin,
    stats: [
      { value: 'Hoog', label: 'Leadkwaliteit' },
      { value: '1M+', label: 'B2B bereik' },
    ],
  },
  {
    slug: 'website-bouwen',
    number: '05',
    label: 'CONVERSIEGERICHT & SNEL',
    title: 'Website Bouwen',
    short: 'Een snelle, professionele website die bezoekers omzet in klanten. Gebouwd om te scoren.',
    gradient: 'linear-gradient(135deg, #0d1a0d 0%, #1A1A1A 100%)',
    Icon: IconCode,
    stats: [
      { value: '100%', label: 'Conversiegericht' },
      { value: 'Snel', label: '& SEO-proof' },
    ],
  },
  {
    slug: 'ai-oplossingen',
    number: '06',
    label: 'SLIMMER WERKEN, MEER TIJD',
    title: 'AI Oplossingen',
    short: 'Van bedrijfsapplicaties tot geautomatiseerde processen die je team tijd teruggeven.',
    gradient: 'linear-gradient(135deg, #1a1020 0%, #1A1A1A 100%)',
    Icon: IconBrain,
    stats: [
      { value: '2+', label: 'Jaar ervaring' },
      { value: 'Tot 40%', label: 'Tijdsbesparing' },
    ],
  },
];

const row1Logos = [
  'thefightcompany.png',
  'cagedfight.png',
  'dreamfit.png',
  'verpoorten-vitality.png',
  'mymiracle.svg',
];
const row2Logos = [
  'devideovakvrouw.png',
  'channelorange.png',
  'regeljelease.svg',
  'maximizd.png',
  'redmarketing.png',
];

const bannerItems = [
  '€6M+ beheerd budget',
  '50+ tevreden klanten',
  'Gem. 340% ROAS',
  'Geen langdurige contracten',
  'Sinds 2019',
];

export const metadata: Metadata = {
  title: 'FunnelVision | Marketing Bureau voor het MKB',
  description:
    'Meer klanten en omzet via Meta advertenties, Google Ads en e-mailmarketing. FunnelVision is jouw resultaatgerichte marketing partner.',
  alternates: { canonical: 'https://funnelvisionagency.com' },
  openGraph: {
    url: 'https://funnelvisionagency.com',
    title: 'FunnelVision | Marketing Bureau voor het MKB',
    description: 'Meer klanten en omzet via Meta advertenties, Google Ads en e-mailmarketing.',
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'FunnelVision | Marketing Bureau voor het MKB',
  url: 'https://funnelvisionagency.com',
  description:
    'Meer klanten en omzet via Meta advertenties, Google Ads en e-mailmarketing. FunnelVision is jouw resultaatgerichte marketing partner.',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.speakable'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat doet FunnelVision?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FunnelVision is een marketing bureau dat kleine en middelgrote bedrijven helpt groeien via betaalde advertenties. We beheren Meta Advertenties (Facebook & Instagram), Google Ads, LinkedIn Advertising, e-mailmarketing en bouwen conversiegerichte websites.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel kost het samenwerken met FunnelVision?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We werken in sprints van 3 maanden. Na de eerste sprint is de samenwerking maandelijks opzegbaar. De kosten zijn afhankelijk van welke diensten je afneemt. Plan een gratis kennismaking voor een persoonlijk voorstel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt FunnelVision ook met kleine bedrijven?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, absoluut. We zijn gespecialiseerd in het MKB. Of je nu een eenmanszaak bent of een bedrijf met 50 medewerkers, we passen onze aanpak aan op jouw situatie en budget.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waar is FunnelVision gevestigd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FunnelVision werkt volledig remote. Geen duur kantoor met pooltafel, die kosten betaal jij als klant niet. We werken vanuit heel Nederland voor klanten door het hele land.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p className="sr-only speakable">
        FunnelVision is een resultaatgericht marketing bureau voor het Nederlandse MKB, gespecialiseerd in
        Meta advertenties, Google Ads, LinkedIn Advertising en e-mailmarketing. Wij helpen ondernemers meer
        klanten en omzet te genereren via betaalde advertenties en slimme digitale marketing. Actief sinds
        2019, werkzaam door heel Nederland.
      </p>

      {/* Hero */}
      <section
        className="relative overflow-hidden flex flex-col"
        style={{ background: '#111111', minHeight: '100vh' }}
      >
        <div
          className="absolute pointer-events-none"
          style={{ top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: '#F5A62306' }}
        />
        <div
          className="absolute top-0 bottom-0 hidden lg:block pointer-events-none"
          style={{ left: '58%', width: '2px', background: 'linear-gradient(to bottom, transparent, #F5A62325 50%, transparent)' }}
        />

        <div className="relative flex-1 flex items-center w-full max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-16">
          <div className="hero-animate w-full">
            <p
              className="mb-7"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.16em', color: '#F5A623' }}
            >
              Marketing bureau · Nederland
            </p>

            <h1
              className="hero-h1 text-white font-bold mb-8"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Meer klanten.
              <br />
              Meer omzet.
              <br />
              <em className="italic">Meer groei.</em>
            </h1>

            <div style={{ maxWidth: '560px' }}>
              <p
                className="mb-10"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}
              >
                FunnelVision helpt Nederlandse ondernemers groeien via resultaatgerichte Meta ads, Google Ads en
                e-mailmarketing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/cases"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#F5A623] text-[#1A1A1A] font-semibold transition-[background-color,transform] duration-200 hover:bg-[#F0A020] btn-scale"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Bekijk onze cases →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold btn-secondary"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Gratis kennismaken
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Infinite scroll stats banner */}
        <div
          className="relative overflow-hidden py-5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="drift-animate flex whitespace-nowrap" style={{ paddingLeft: '20px' }}>
            {[...bannerItems, ...bannerItems, ...bannerItems, ...bannerItems].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.4)', paddingRight: '20px' }}
              >
                {item}
                <span style={{ color: '#F5A623', margin: '0 20px' }}>◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Logo wall */}
      <section
        className="py-[60px]"
        style={{ background: '#F5F2EB', borderTop: '1px solid rgba(0,0,0,0.08)' }}
      >
        <p
          className="text-center mb-8"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'rgba(0,0,0,0.35)',
          }}
        >
          Bedrijven die ons vertrouwen
        </p>

        <div className="logo-row overflow-hidden">
          <div className="logo-track-left flex items-center" style={{ gap: '56px' }}>
            {[...row1Logos, ...row2Logos, ...row1Logos, ...row2Logos, ...row1Logos, ...row2Logos, ...row1Logos, ...row2Logos].map((logo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={`/logos/${logo}`}
                alt=""
                height="36"
                className="logo-img"
                style={{ height: '36px', width: 'auto', objectFit: 'contain', display: 'block', opacity: 0.65 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Diensten preview */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-16"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Wat we <em className="italic text-[#F5A623]">voor je doen.</em>
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dienstenCards.map((card, i) => (
              <ScrollAnimation key={card.slug} delay={i * 100}>
                <article
                  className="flex flex-col group transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-[6px] hover:shadow-[0_8px_30px_rgba(245,166,35,0.15)]"
                  style={{ background: card.gradient, borderRadius: '16px', padding: '24px', minHeight: '280px' }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <span
                      style={{ color: '#F5A623', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}
                    >
                      {card.number} · {card.label}
                    </span>
                    <card.Icon size={20} style={{ color: '#F5A623', opacity: 0.2, flexShrink: 0 }} />
                  </div>
                  <h3
                    className="font-bold text-white mb-3"
                    style={{ fontFamily: 'var(--font-serif)', fontSize: '30px', lineHeight: '1.1' }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="leading-relaxed mb-6 flex-1"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}
                  >
                    {card.short}
                  </p>
                  <div className="flex items-end justify-between">
                    <div className="flex gap-6">
                      {card.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="font-bold" style={{ fontFamily: 'var(--font-serif)', color: '#F5A623', fontSize: '20px', lineHeight: '1.1' }}>
                            <CountUp value={stat.value} />
                          </p>
                          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/diensten/${card.slug}`}
                      className="transition-transform duration-300 group-hover:translate-x-1 inline-block"
                      style={{ color: '#F5A623', fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600 }}
                    >
                      Meer lezen →
                    </Link>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Cases preview */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-16"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Resultaten die <em className="italic text-[#F5A623]">spreken.</em>
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <ScrollAnimation key={c.id} delay={i * 100}>
                <article className="group rounded-2xl overflow-hidden bg-[#F5F2EB] cursor-pointer transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-[6px] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(245,166,35,0.20)]">
                  {c.imageType === 'logo' ? (
                    <div
                      className="h-48 flex items-center justify-center"
                      style={{ background: '#FFFFFF' }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={c.imageSrc}
                        alt={c.company}
                        loading="lazy"
                        style={{ maxHeight: '80px', maxWidth: '200px', objectFit: 'contain' }}
                      />
                    </div>
                  ) : (
                    <div className="relative h-48 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={c.imageSrc}
                        alt={c.company}
                        loading="lazy"
                        style={{ width: '100%', height: '192px', objectFit: 'cover', objectPosition: 'top' }}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span
                          className="text-white font-semibold text-sm"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          Bekijk case →
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-wider">{c.branch}</span>
                    <p
                      className="text-5xl font-bold text-[#3D3D3D] my-3"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      <CountUp value={c.result} />
                    </p>
                    <p className="text-sm font-medium text-[#3D3D3D] mb-2">{c.metric}</p>
                    <p className="text-sm text-gray-500">{c.description}</p>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/cases" className="inline-flex items-center gap-2 text-[#F5A623] font-semibold transition-[gap] duration-200 hover:gap-3">
              Alle cases bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* Over ons preview */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-16"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Twee broers. <em className="italic text-[#F5A623]">Één missie.</em>
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <ScrollAnimation key={member.name} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 flex flex-col gap-6">
                  <div className="flex items-start gap-5">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={member.unsplash}
                        alt={member.unsplashAlt}
                        fill
                        loading="lazy"
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-[#3D3D3D]" style={{ fontFamily: 'var(--font-serif)' }}>
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
              </ScrollAnimation>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/over-ons" className="inline-flex items-center gap-2 text-[#F5A623] font-semibold transition-[gap] duration-200 hover:gap-3">
              Leer ons kennen →
            </Link>
          </div>
        </div>
      </section>

      {/* Waarom FunnelVision */}
      <section className="bg-[#1A1A1A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Waarom <em className="italic text-[#F5A623]">FunnelVision?</em>
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Sprints van 3 maanden',
                desc: 'We werken in sprints van 3 maanden. Na de eerste sprint is de samenwerking maandelijks opzegbaar.',
              },
              {
                title: 'Transparante rapportage',
                desc: 'Elke maand een helder rapport. Jij ziet precies wat je uitgeeft, wat het oplevert en wat we volgende maand doen.',
              },
              {
                title: 'Resultaat staat centraal',
                desc: 'We meten alles. Elke euro die je uitgeeft aan advertenties wordt gevolgd en geoptimaliseerd op rendement.',
              },
            ].map((item, i) => (
              <ScrollAnimation key={item.title} delay={i * 100}>
                <div className="flex flex-col gap-5">
                  <div className="w-3 h-3 rounded-full bg-[#F5A623]" />
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-serif)' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F2EB] py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#3D3D3D] mb-12 text-center"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Veelgestelde <em className="italic text-[#F5A623]">vragen.</em>
            </h2>
          </ScrollAnimation>
          <div className="space-y-6">
            {[
              {
                q: 'Wat doet FunnelVision?',
                a: 'FunnelVision is een marketing bureau dat MKB-bedrijven helpt groeien via Meta advertenties, Google Ads, LinkedIn Advertising, e-mailmarketing en websitebouw.',
              },
              {
                q: 'Hoeveel kost het samenwerken met FunnelVision?',
                a: 'We werken in sprints van 3 maanden. Na de eerste sprint is de samenwerking maandelijks opzegbaar. Plan een gratis kennismaking voor een persoonlijk voorstel.',
              },
              {
                q: 'Werkt FunnelVision ook met kleine bedrijven?',
                a: 'Ja, absoluut. We zijn gespecialiseerd in het MKB. Of je nu een eenmanszaak of een groeiend bedrijf bent, we passen onze aanpak aan op jouw situatie.',
              },
              {
                q: 'Waar is FunnelVision gevestigd?',
                a: 'FunnelVision werkt volledig remote. Geen duur kantoor met pooltafel, die kosten betaal jij als klant niet. We werken vanuit heel Nederland voor klanten door het hele land.',
              },
            ].map((item, i) => (
              <ScrollAnimation key={item.q} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6">
                  <h3 className="font-bold text-[#3D3D3D] mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                    {item.q}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{item.a}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Klaar om te <em className="italic text-[#F5A623]">groeien?</em>
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Plan een vrijblijvend kennismakingsgesprek en ontdek wat FunnelVision voor jouw bedrijf kan betekenen.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F5A623] text-white font-bold text-lg px-10 py-5 rounded-full transition-[background-color,transform] duration-200 hover:bg-[#F0A020] btn-scale"
            >
              Gratis kennismaken
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
