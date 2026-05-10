'use client';

import { useState } from 'react';

const dienstOpties = [
  'Meta Advertenties',
  'Google Ads (SEA)',
  'E-mailmarketing',
  'Website bouwen',
  'Combinatie van diensten',
  'Weet ik nog niet',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    naam: '', bedrijf: '', email: '', telefoon: '', dienst: '', bericht: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-6 text-6xl">🎉</div>
        <h3 className="mb-3 text-2xl font-bold text-[#4A4A4A]">Bedankt voor je bericht!</h3>
        <p className="text-[#4A4A4A]/70">
          We nemen zo snel mogelijk contact met je op, uiterlijk binnen één werkdag.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#4A4A4A]">Naam *</label>
          <input required name="naam" value={form.naam} onChange={handleChange} type="text" placeholder="Jouw naam" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#4A4A4A] outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#4A4A4A]">Bedrijfsnaam</label>
          <input name="bedrijf" value={form.bedrijf} onChange={handleChange} type="text" placeholder="Jouw bedrijf" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#4A4A4A] outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#4A4A4A]">E-mailadres *</label>
          <input required name="email" value={form.email} onChange={handleChange} type="email" placeholder="jouw@email.nl" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#4A4A4A] outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#4A4A4A]">Telefoonnummer</label>
          <input name="telefoon" value={form.telefoon} onChange={handleChange} type="tel" placeholder="+31 6 12345678" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#4A4A4A] outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20" />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#4A4A4A]">Interesse in</label>
        <select name="dienst" value={form.dienst} onChange={handleChange} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#4A4A4A] outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20">
          <option value="">Selecteer een dienst</option>
          {dienstOpties.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#4A4A4A]">Bericht</label>
        <textarea name="bericht" value={form.bericht} onChange={handleChange} rows={4} placeholder="Vertel ons over jouw bedrijf en doelen..." className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#4A4A4A] outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20" />
      </div>
      <button type="submit" className="w-full rounded-full bg-[#F5A623] py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90">
        Verstuur bericht
      </button>
    </form>
  );
}
