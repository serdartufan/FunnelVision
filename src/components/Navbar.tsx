'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const serviceLinks = [
  { href: '/diensten/meta-advertenties', label: 'Meta Advertenties' },
  { href: '/diensten/google-ads', label: 'Google Ads' },
  { href: '/diensten/emailmarketing', label: 'E-mailmarketing' },
  { href: '/diensten/website-bouwen', label: 'Website Bouwen' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-[#F5A623] text-lg leading-none">▼</span>
          <span className="font-bold text-xl text-[#3D3D3D]" style={{ fontFamily: 'var(--font-inter)' }}>
            Funnel
          </span>
          <span className="text-xl italic text-[#3D3D3D]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Vision
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-[#3D3D3D] hover:text-[#F5A623] transition-colors text-sm font-medium flex items-center gap-1">
              Diensten
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-[#F5F2EB] py-2">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2.5 text-sm text-[#3D3D3D] hover:bg-[#F5F2EB] hover:text-[#F5A623] transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/cases" className="text-[#3D3D3D] hover:text-[#F5A623] transition-colors text-sm font-medium">
            Cases
          </Link>
          <Link href="/over-ons" className="text-[#3D3D3D] hover:text-[#F5A623] transition-colors text-sm font-medium">
            Over ons
          </Link>
          <Link href="/contact" className="text-[#3D3D3D] hover:text-[#F5A623] transition-colors text-sm font-medium">
            Contact
          </Link>

          <Link
            href="/contact"
            className="bg-[#F5A623] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#e09520] transition-colors"
          >
            Gratis kennismaken
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-[#3D3D3D]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu openen"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#F5F2EB] px-6 py-6 flex flex-col gap-4">
          <p className="text-xs font-semibold text-[#F5A623] uppercase tracking-wider">Diensten</p>
          {serviceLinks.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="text-[#3D3D3D] hover:text-[#F5A623] transition-colors pl-2"
              onClick={() => setMobileOpen(false)}
            >
              {s.label}
            </Link>
          ))}
          <hr className="border-[#F5F2EB]" />
          {[
            { href: '/cases', label: 'Cases' },
            { href: '/over-ons', label: 'Over ons' },
            { href: '/contact', label: 'Contact' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#3D3D3D] hover:text-[#F5A623] transition-colors font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#F5A623] text-white font-semibold px-5 py-3 rounded-full text-center hover:bg-[#e09520] transition-colors mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Gratis kennismaken
          </Link>
        </div>
      )}
    </header>
  );
}
