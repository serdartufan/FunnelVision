import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'FunnelVision — Resultaatgerichte Marketing voor het MKB',
    template: '%s | FunnelVision',
  },
  description:
    'FunnelVision helpt Nederlandse MKB-bedrijven groeien met Meta Ads, Google Ads, e-mailmarketing en websitebouw. Resultaatgericht, persoonlijk en zonder gedoe.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
