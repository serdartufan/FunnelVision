import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Neem contact op met FunnelVision voor een gratis kennismakingsgesprek. Wij reageren binnen één werkdag.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#4A4A4A] pb-20 pt-36">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">Neem contact op</p>
          <h1 className="font-bold text-white" style={{fontSize: 'clamp(2rem, 5vw, 4rem)'}}>
            Gratis kennismaken
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/70">
            Vertel ons over jouw bedrijf en doelen. We nemen binnen één werkdag contact op.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 md:grid-cols-2 md:px-8">
          {/* Contact info */}
          <div>
            <h2 className="mb-8 text-2xl font-bold text-[#4A4A4A]">Direct contact</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F5A623]/20 text-lg">
                  ✉️
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#4A4A4A]">E-mail</p>
                  <a href="mailto:serdar@funnelvisionagency.com" className="text-sm text-[#F5A623]">
                    serdar@funnelvisionagency.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F5A623]/20 text-lg">
                  ⏱️
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#4A4A4A]">Reactietijd</p>
                  <p className="text-sm text-[#4A4A4A]/70">Binnen één werkdag</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F5A623]/20 text-lg">
                  🆓
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#4A4A4A]">Kennismakingsgesprek</p>
                  <p className="text-sm text-[#4A4A4A]/70">Altijd gratis en vrijblijvend</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
