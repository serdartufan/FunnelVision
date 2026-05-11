import type { Metadata } from 'next';
import { siteConfig } from '@/data/content';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — FunnelVision Marketing Bureau',
  description:
    'Plan een gratis kennismakingsgesprek met FunnelVision. We kijken samen wat Meta ads, Google Ads of e-mailmarketing voor jouw bedrijf kan betekenen.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-widest block mb-4">Contact</span>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Laten we <em className="italic text-[#F5A623]">kennismaken.</em>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
            Plan een vrijblijvend gesprek van 20 minuten. We kijken samen wat FunnelVision voor jouw bedrijf kan
            betekenen.
          </p>
        </div>
      </section>

      {/* Form + contact info */}
      <section className="bg-[#F5F2EB] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact info */}
            <div>
              <h2
                className="text-2xl font-bold text-[#3D3D3D] mb-8"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Direct contact
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-[#F5A623] uppercase tracking-wider mb-2">E-mail</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-[#3D3D3D] hover:text-[#F5A623] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#F5A623] uppercase tracking-wider mb-2">Reactietijd</p>
                  <p className="text-[#3D3D3D]">Binnen 24 uur op werkdagen</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#F5A623] uppercase tracking-wider mb-3">Volg ons</p>
                  <div className="flex gap-4">
                    {[
                      { href: siteConfig.instagram, label: 'Instagram' },
                      { href: siteConfig.linkedin, label: 'LinkedIn' },
                      { href: siteConfig.facebook, label: 'Facebook' },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#3D3D3D] hover:text-[#F5A623] transition-colors font-medium"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
