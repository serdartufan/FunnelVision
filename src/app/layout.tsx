import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://funnelvisionagency.com'),
  title: {
    default: 'FunnelVision — Marketing Bureau voor het MKB',
    template: '%s | FunnelVision',
  },
  description:
    'Meer klanten en omzet via Meta advertenties, Google Ads en e-mailmarketing. FunnelVision is jouw resultaatgerichte marketing partner in Nederland.',
  keywords: [
    'marketing bureau',
    'meta advertenties',
    'google ads bureau',
    'online marketing mkb',
    'linkedin advertising',
    'emailmarketing bureau nederland',
  ],
  authors: [{ name: 'Serdar Tufan', url: 'https://funnelvisionagency.com/over-ons' }],
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
    title: 'FunnelVision — Marketing Bureau voor het MKB',
    description: 'Meer klanten en omzet via Meta advertenties, Google Ads en e-mailmarketing.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FunnelVision — Marketing Bureau voor het MKB',
    description: 'Meer klanten en omzet via Meta advertenties, Google Ads en e-mailmarketing.',
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
    'Resultaatgericht marketing bureau voor het Nederlandse MKB. Specialist in Meta advertenties, Google Ads, LinkedIn Advertising en e-mailmarketing.',
  foundingDate: '2023',
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
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LinkedIn Advertising' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-mailmarketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Bouwen' } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable}`}>
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
