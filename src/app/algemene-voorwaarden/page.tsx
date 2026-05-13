import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden — FunnelVision',
  description: 'De algemene voorwaarden van FunnelVision voor al onze marketing- en advertentiediensten.',
};

export default function AlgemeneVoorwaardenPage() {
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
            <em className="italic text-[#F5A623]">Algemene Voorwaarden</em>
          </h1>
          <p className="mt-6 text-gray-400">Laatste versie: mei 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F5F2EB] py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              1. Identiteit
            </h2>
            <p className="text-gray-600 leading-relaxed">
              FunnelVision, gevestigd in Nederland, ingeschreven bij de Kamer van Koophandel.
              E-mail:{' '}
              <a href="mailto:serdar@funnelvisionagency.com" className="text-[#F5A623] hover:underline">
                serdar@funnelvisionagency.com
              </a>.
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, opdrachten en
              overeenkomsten van FunnelVision.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              2. Diensten
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              FunnelVision biedt de volgende diensten aan:
            </p>
            <ul className="space-y-2">
              {[
                'Meta Advertenties (Facebook & Instagram)',
                'Google Ads (Search Engine Advertising)',
                'LinkedIn Advertising',
                'E-mailmarketing en automatisering',
                'Website bouwen en optimalisatie',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-[#F5A623] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              De specifieke inhoud van de dienst wordt vastgelegd in een offerte of opdrachtbevestiging.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              3. Betaling
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Betaling vindt maandelijks <strong>vooraf</strong> plaats, tenzij schriftelijk anders is
              overeengekomen. FunnelVision stuurt aan het begin van iedere maand een factuur.
              Betaling dient binnen 14 dagen na factuurdatum te geschieden. Bij niet-tijdige betaling
              is de opdrachtgever van rechtswege in verzuim en zijn wettelijke rente en
              redelijke incassokosten verschuldigd.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              4. Looptijd en opzegging
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Overeenkomsten worden aangegaan voor onbepaalde tijd, tenzij anders afgesproken.
              Opzegging kan schriftelijk (per e-mail) met inachtneming van een opzegtermijn van
              <strong> één (1) kalendermaand</strong>. Opzegging gaat in op de eerste dag van de
              kalendermaand volgend op de maand van opzegging.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              5. Aansprakelijkheid
            </h2>
            <p className="text-gray-600 leading-relaxed">
              FunnelVision is niet aansprakelijk voor indirecte schade, gevolgschade, gederfde winst
              of gemiste besparingen. De aansprakelijkheid van FunnelVision is in alle gevallen
              beperkt tot het bedrag dat in de betreffende maand door de opdrachtgever is betaald.
              FunnelVision garandeert geen specifieke resultaten (zoals een bepaald aantal leads of
              een bepaalde ROAS), omdat advertentieresultaten mede afhankelijk zijn van externe factoren.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              6. Verplichtingen opdrachtgever
            </h2>
            <p className="text-gray-600 leading-relaxed">
              De opdrachtgever zorgt tijdig voor alle benodigde informatie, toegangen en
              materialen die FunnelVision nodig heeft voor de uitvoering van de opdracht.
              Vertraging als gevolg van het niet tijdig aanleveren van informatie komt voor
              rekening van de opdrachtgever.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              7. Intellectueel eigendom
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Alle door FunnelVision ontwikkelde strategieën, advertentieteksten, visuals en andere
              creatieve materialen blijven eigendom van FunnelVision totdat de opdrachtgever aan
              alle betalingsverplichtingen heeft voldaan. Na volledige betaling gaan de rechten over
              op de opdrachtgever voor zover het specifiek voor hem ontwikkeld materiaal betreft.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              8. Geheimhouding
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Beide partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie
              die zij in het kader van de samenwerking van elkaar ontvangen. Deze verplichting
              geldt ook na het einde van de overeenkomst.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              9. Toepasselijk recht en geschillen
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Op alle overeenkomsten met FunnelVision is <strong>Nederlands recht</strong> van toepassing.
              Geschillen worden bij voorkeur in onderling overleg opgelost. Indien dit niet lukt,
              worden geschillen voorgelegd aan de bevoegde rechter in Nederland.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              10. Wijzigingen
            </h2>
            <p className="text-gray-600 leading-relaxed">
              FunnelVision behoudt zich het recht voor deze voorwaarden te wijzigen. Wijzigingen
              worden minimaal 30 dagen van tevoren aangekondigd. Bij voortgezet gebruik van onze
              diensten na de ingangsdatum gaat de opdrachtgever akkoord met de nieuwe voorwaarden.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
