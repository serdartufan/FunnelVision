import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Cormorant } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap', weight: ['400', '700'] });
const cormorant = Cormorant({ subsets: ['latin'], variable: '--font-serif', display: 'swap', weight: ['400', '700'], style: ['normal', 'italic'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://funnelvisionagency.com'),
  title: {
    default: 'FunnelVision | Marketing Bureau voor het MKB',
    template: '%s | FunnelVision',
  },
  description:
    'FunnelVision bouwt marketing en AI-systemen die Nederlandse bedrijven meer leads en klanten opleveren. Groeipartner voor het MKB.',
  keywords: [
    'marketing bureau',
    'meta advertenties',
    'google ads bureau',
    'online marketing mkb',
    'website bouwen',
    'ai oplossingen marketing',
  ],
  authors: [{ name: 'Serdar', url: 'https://funnelvisionagency.com/over-ons' }],
  creator: 'FunnelVision',
  publisher: 'FunnelVision',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://funnelvisionagency.com',
    siteName: 'FunnelVision',
    title: 'FunnelVision | Marketing Bureau voor het MKB',
    description: 'FunnelVision bouwt marketing en AI-systemen die Nederlandse bedrijven meer leads en klanten opleveren.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FunnelVision | Marketing Bureau voor het MKB',
    description: 'FunnelVision bouwt marketing en AI-systemen die Nederlandse bedrijven meer leads en klanten opleveren.',
  },
  alternates: {
    canonical: 'https://funnelvisionagency.com',
  },
  other: {
    'geo.region': 'NL-GR',
    'geo.placename': 'Groningen',
    'geo.position': '53.2194;6.5665',
    ICBM: '53.2194, 6.5665',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'FunnelVision',
  url: 'https://funnelvisionagency.com',
  email: 'serdar@funnelvisionagency.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Maluslaan 48',
    addressLocality: 'Groningen',
    postalCode: '9741 LM',
    addressCountry: 'NL',
  },
  areaServed: 'NL',
  description:
    'FunnelVision bouwt de marketing en AI-systemen die Nederlandse bedrijven meer leads en klanten opleveren. Groeipartner voor het MKB, actief via Meta advertenties, Google Ads, websites en maatwerk AI-systemen.',
  foundingDate: '2019',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 2 },
  sameAs: [
    'https://www.linkedin.com/company/funnelvision',
    'https://www.instagram.com/funnelvision',
    'https://www.facebook.com/funnelvision',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Marketing Diensten',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta Advertenties' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Bouwen' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Oplossingen' } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${plusJakartaSans.variable} ${cormorant.variable}`}>
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
