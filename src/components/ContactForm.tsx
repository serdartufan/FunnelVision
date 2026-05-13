'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    naam: '',
    bedrijf: '',
    email: '',
    telefoon: '',
    dienst: '',
    bericht: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Send failed');
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-[#F5A623]/10 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2
          className="text-2xl font-bold text-[#3D3D3D] mb-4"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Bedankt, {form.naam}!
        </h2>
        <p className="text-gray-500">
          We hebben je bericht ontvangen en nemen binnen 24 uur contact met je op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 lg:p-10 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#3D3D3D] mb-2" htmlFor="naam">
            Naam *
          </label>
          <input
            id="naam"
            name="naam"
            type="text"
            required
            value={form.naam}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#3D3D3D] focus:outline-none focus:border-[#F5A623] transition-colors"
            placeholder="Jouw naam"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#3D3D3D] mb-2" htmlFor="bedrijf">
            Bedrijfsnaam
          </label>
          <input
            id="bedrijf"
            name="bedrijf"
            type="text"
            value={form.bedrijf}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#3D3D3D] focus:outline-none focus:border-[#F5A623] transition-colors"
            placeholder="Naam van je bedrijf"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#3D3D3D] mb-2" htmlFor="email">
            E-mailadres *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#3D3D3D] focus:outline-none focus:border-[#F5A623] transition-colors"
            placeholder="jij@bedrijf.nl"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#3D3D3D] mb-2" htmlFor="telefoon">
            Telefoonnummer
          </label>
          <input
            id="telefoon"
            name="telefoon"
            type="tel"
            value={form.telefoon}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#3D3D3D] focus:outline-none focus:border-[#F5A623] transition-colors"
            placeholder="+31 6 12345678"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-[#3D3D3D] mb-2" htmlFor="dienst">
          Waarmee kunnen we je helpen?
        </label>
        <select
          id="dienst"
          name="dienst"
          value={form.dienst}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#3D3D3D] focus:outline-none focus:border-[#F5A623] transition-colors bg-white"
        >
          <option value="">Selecteer een dienst</option>
          <option value="meta">Meta Advertenties (Facebook & Instagram)</option>
          <option value="google">Google Ads</option>
          <option value="email">E-mailmarketing</option>
          <option value="website">Website Bouwen</option>
          <option value="linkedin">LinkedIn Advertising</option>
          <option value="anders">Ik weet het nog niet</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-[#3D3D3D] mb-2" htmlFor="bericht">
          Vertel ons over je bedrijf
        </label>
        <textarea
          id="bericht"
          name="bericht"
          rows={5}
          value={form.bericht}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#3D3D3D] focus:outline-none focus:border-[#F5A623] transition-colors resize-none"
          placeholder="Wat doe je, wat is je doel, en wat loopt er nu nog niet zoals je wilt?"
        />
      </div>
      {error && (
        <p className="text-sm text-red-500 text-center">
          Er ging iets mis, probeer het opnieuw of mail ons direct op{' '}
          <a href="mailto:serdar@funnelvisionagency.com" className="underline">
            serdar@funnelvisionagency.com
          </a>.
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#F5A623] text-white font-bold py-4 rounded-full hover:bg-[#e09520] transition-colors text-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Bezig met verzenden…' : 'Verstuur bericht'}
      </button>
      <p className="text-xs text-gray-400 text-center">
        We reageren binnen 24 uur op werkdagen. Geen spam, nooit.
      </p>
    </form>
  );
}
