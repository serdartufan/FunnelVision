'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const serviceLinks = [
  { href: '/diensten/meta-advertenties', label: 'Meta Advertenties' },
  { href: '/diensten/google-ads', label: 'Google Ads' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openServices() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }
  function scheduleClose() {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 300);
  }

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
        <Link href="/" className="logo-link flex items-center">
          <Image src="/Logo 2.png" alt="FunnelVision logo" height={40} width={160} className="h-10 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleClose}
          >
            <button
              className={`nav-link transition-colors text-sm font-medium flex items-center gap-1 ${scrolled ? 'text-[#3D3D3D] hover:text-[#F5A623]' : 'text-[#F5A623]'}`}
              data-active={pathname.startsWith('/diensten') ? '' : undefined}
            >
              Diensten
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-[#F5F2EB] py-2"
                onMouseEnter={openServices}
                onMouseLeave={scheduleClose}
              >
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

          <Link
            href="/cases"
            className={`nav-link transition-colors text-sm font-medium ${scrolled ? 'text-[#3D3D3D] hover:text-[#F5A623]' : 'text-[#F5A623]'}`}
            data-active={pathname === '/cases' ? '' : undefined}
          >
            Cases
          </Link>
          <Link
            href="/over-ons"
            className={`nav-link transition-colors text-sm font-medium ${scrolled ? 'text-[#3D3D3D] hover:text-[#F5A623]' : 'text-[#F5A623]'}`}
            data-active={pathname === '/over-ons' ? '' : undefined}
          >
            Over ons
          </Link>
          <Link
            href="/contact"
            className={`nav-link transition-colors text-sm font-medium ${scrolled ? 'text-[#3D3D3D] hover:text-[#F5A623]' : 'text-[#F5A623]'}`}
            data-active={pathname === '/contact' ? '' : undefined}
          >
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
          className={`lg:hidden p-2 ${scrolled ? 'text-[#3D3D3D]' : 'text-[#F5A623]'}`}
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
