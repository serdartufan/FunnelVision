'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Diensten', href: '/diensten' },
  { label: 'Cases', href: '/cases' },
  { label: 'Over ons', href: '/over-ons' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center">
            <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
              <polygon points="16,2 30,28 2,28" fill="#F5A623" />
              <polygon points="16,10 24,28 8,28" fill="#4A4A4A" />
            </svg>
          </span>
          <span className="text-xl font-bold tracking-tight text-[#4A4A4A]">
            Funnel<span className="text-[#F5A623]">Vision</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#F5A623] ${
                pathname === link.href ? 'text-[#F5A623]' : 'text-[#4A4A4A]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-[#F5A623] px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Gratis kennismaken
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 p-1 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu openen"
        >
          <span className={`block h-0.5 w-6 bg-[#4A4A4A] transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-[#4A4A4A] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-[#4A4A4A] transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium ${pathname === link.href ? 'text-[#F5A623]' : 'text-[#4A4A4A]'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-full bg-[#F5A623] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Gratis kennismaken
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
