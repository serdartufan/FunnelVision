import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacybeleid — FunnelVision',
  description: 'Lees hoe FunnelVision omgaat met jouw persoonsgegevens conform de AVG.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-widest block mb-4">
            Juridisch
          </span>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white leading-tight max-w-3xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            <em className="italic text-[#F5A623]">Privacybeleid</em>
          </h1>
          <p className="mt-6 text-gray-400">Laatst bijgewerkt: mei 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F5F2EB] py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              1. Wie zijn wij?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              FunnelVision is een marketing agency gespecialiseerd in online adverteren en digitale groei.
              Wij zijn verantwoordelijk voor de verwerking van jouw persoonsgegevens zoals beschreven in dit privacybeleid.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              <strong>Contactgegevens:</strong><br />
              FunnelVision<br />
              E-mail: <a href="mailto:serdar@funnelvisionagency.com" className="text-[#F5A623] hover:underline">serdar@funnelvisionagency.com</a><br />
              Website: funnelvisionagency.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              2. Welke gegevens verzamelen wij?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Via het contactformulier op onze website verwerken wij de volgende persoonsgegevens:
            </p>
            <ul className="space-y-2">
              {[
                'Naam',
                'Bedrijfsnaam',
                'E-mailadres',
                'Telefoonnummer',
                'Bericht / aanvraag',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-[#F5A623] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              3. Waarvoor gebruiken wij jouw gegevens?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Wij gebruiken jouw gegevens uitsluitend om contact met je op te nemen naar aanleiding van jouw aanvraag
              en om je te informeren over onze diensten. Wij verwerken jouw gegevens op basis van jouw toestemming
              (Art. 6 lid 1 sub a AVG) en/of ter uitvoering van een overeenkomst (Art. 6 lid 1 sub b AVG).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              4. Bewaartermijn
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Wij bewaren jouw persoonsgegevens niet langer dan noodzakelijk. Contactaanvragen worden maximaal
              <strong> 2 jaar</strong> bewaard, tenzij een lopende zakelijke relatie een langere bewaartermijn vereist.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              5. Delen met derden
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Wij verkopen jouw gegevens <strong>nooit</strong> aan derden. Wij delen gegevens alleen met
              verwerkers die strikt noodzakelijk zijn voor het uitvoeren van onze diensten (zoals e-mailsoftware),
              en uitsluitend op basis van een verwerkersovereenkomst.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              6. Cookies en tracking
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Onze website maakt geen gebruik van tracking cookies of analytische cookies van derden.
              Er worden geen gegevens doorgegeven aan advertentienetwerken via cookies op deze website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              7. Jouw rechten
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Op grond van de AVG heb je de volgende rechten:
            </p>
            <ul className="space-y-2">
              {[
                'Recht op inzage in jouw persoonsgegevens',
                'Recht op correctie van onjuiste gegevens',
                'Recht op verwijdering ("recht op vergetelheid")',
                'Recht op beperking van de verwerking',
                'Recht op dataportabiliteit',
                'Recht om bezwaar te maken tegen verwerking',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-[#F5A623] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Je kunt een verzoek indienen via{' '}
              <a href="mailto:serdar@funnelvisionagency.com" className="text-[#F5A623] hover:underline">
                serdar@funnelvisionagency.com
              </a>
              . Wij reageren binnen 30 dagen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              8. Klacht indienen
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Ben je niet tevreden met hoe wij omgaan met jouw persoonsgegevens? Dan heb je het recht om een
              klacht in te dienen bij de{' '}
              <strong>Autoriteit Persoonsgegevens (AP)</strong> via{' '}
              <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-[#F5A623] hover:underline">
                autoriteitpersoonsgegevens.nl
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              9. Wijzigingen
            </h2>
            <p className="text-gray-600 leading-relaxed">
              FunnelVision behoudt zich het recht voor dit privacybeleid te wijzigen. De meest actuele versie
              is altijd te vinden op deze pagina. Bij ingrijpende wijzigingen informeren wij je per e-mail
              als wij jouw gegevens in ons bestand hebben.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
