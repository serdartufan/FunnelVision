import Link from 'next/link';

export type ArticleFaq = { q: string; a: string };

export type ArticleContentData = {
  quickAnswer: string;
  faqs: ArticleFaq[];
  body: React.ReactNode;
};

const h2 = 'text-2xl lg:text-3xl font-bold text-[#3D3D3D] mt-14 mb-5';
const h3 = 'text-lg font-bold text-[#3D3D3D] mt-6 mb-2';
const p = 'text-[#3D3D3D] leading-relaxed mb-4';
const ul = 'list-disc pl-6 mb-6 space-y-2 text-[#3D3D3D] leading-relaxed';
const ilink = 'text-[#F5A623] font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity';
const qa = 'bg-[#F5F2EB] rounded-xl p-6 border border-[#3D3D3D]/10 my-8';

export const articleContent: Record<string, ArticleContentData> = {

  /* ─────────────────────────────────────────────
     ARTIKEL 3 — google ads bureau vergelijken
  ───────────────────────────────────────────── */
  'google-ads-bureau-vergelijken': {
    quickAnswer:
      'Let op transparantie over kosten, aantoonbare resultaten en duidelijke rapportage. Vermijd bureaus die resultaten garanderen of lange contracten zonder uitstapclausule eisen. Een goed bureau geeft je altijd toegang tot je eigen advertentieaccount en legt uit wat je geld oplevert.',
    faqs: [
      {
        q: 'Wat is een Google Partner certificering precies?',
        a: 'Een Google Partner is een bureau dat aan bepaalde prestatiecriteria voldoet en gecertificeerde medewerkers in dienst heeft. Het zegt iets over kennis en ervaring, maar is geen absolute garantie voor kwaliteit. Het is een positief signaal, geen eindoordeel.',
      },
      {
        q: 'Hoe snel zie je resultaat van Google Ads?',
        a: 'Binnen enkele weken zie je de eerste klikken en leads. Maar stabiele, goed geoptimaliseerde resultaten duren gemiddeld 2 tot 3 maanden. De eerste maand is altijd een leerperiode voor het algoritme en voor het bureau.',
      },
      {
        q: 'Wat als ik wil stoppen maar het bureau beheert mijn account?',
        a: 'Jij bent altijd eigenaar van je advertentieaccount. Spreek dit van tevoren duidelijk af en zorg dat je zelf de accounttoegang hebt. Bij een goede samenwerking is dit nooit een probleem en geeft een bureau hier ook nooit moeilijk over.',
      },
    ],
    body: (
      <>
        <p className={p}>
          Er zijn veel Google Ads bureaus. Dat maakt de keuze lastig, want van buiten zien ze er allemaal
          hetzelfde uit. Mooie websites, resultaten die ze beloven, klinkende klantlogo&apos;s. Maar de praktijk
          verschilt enorm. Met deze checklist weet je waar je op moet letten.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Wat doet een Google Ads bureau?
        </h2>
        <p className={p}>
          Een Google Ads bureau beheert jouw betaalde zoekmachinecampagnes. Dat begint bij de strategie
          en eindigt bij de maandelijkse rapportage. Wat er tussenin zit:
        </p>
        <ul className={ul}>
          <li><strong>Zoekwoordenonderzoek:</strong> welke zoektermen gebruiken jouw potentiële klanten?</li>
          <li><strong>Campagne-opzet:</strong> advertentiegroepen, biedstrategieën en locatietargeting</li>
          <li><strong>Advertentieteksten schrijven:</strong> teksten die aanzetten tot klikken</li>
          <li><strong>Conversiemeting instellen:</strong> zodat je weet welke klikken ook leiden tot aanvragen</li>
          <li><strong>Optimalisatie:</strong> op basis van data de campagnes verbeteren</li>
          <li><strong>Rapportage:</strong> maandelijks inzicht in de prestaties</li>
        </ul>
        <p className={p}>
          Een goed bureau doet al dit werk en communiceert er helder over. Je hoeft zelf geen specialist te zijn,
          maar je moet wel kunnen begrijpen wat er gedaan wordt en wat het oplevert.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Hoeveel kost een Google Ads bureau?
        </h2>
        <p className={p}>
          Er zijn twee veelgebruikte prijsmodellen. Het eerste is een percentage van je advertentiebudget,
          doorgaans 10% tot 20%. Als je €1.000 per maand aan Google uitgeeft, betaal je €100 tot €200
          aan beheerskosten. Het tweede model is een vast maandbedrag, ongeacht het budget. Dit varieert
          van €250 tot €750 per maand voor een gemiddelde MKB-campagne.
        </p>
        <p className={p}>
          Een percentagemodel kan de prikkel geven om meer budget uit te geven dan nodig. Een vast bedrag
          geeft meer voorspelbaarheid. Vraag het bureau altijd hoe ze hun kosten berekenen en of dat transparant
          inzichtelijk is in de rapportage.
        </p>
        <p className={p}>
          Meer weten over hoe wij dit doen? Bekijk onze{' '}
          <Link href="/diensten/google-ads" className={ilink}>Google Ads dienst</Link>.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Waar let je op bij het vergelijken?
        </h2>
        <p className={p}>
          <strong>Cases in jouw branche.</strong> Een bureau met bewezen resultaten in jouw sector begrijpt de markt
          en heeft minder leerperiode nodig. Vraag altijd naar concrete voorbeelden met cijfers: cost per lead,
          ROAS, aantal aanvragen. Vaag gepraat over &apos;betere campagnes&apos; zonder bewijs is een waarschuwing.
        </p>
        <p className={p}>
          <strong>Google Partner certificering.</strong> Een gecertificeerd bureau heeft aangetoond dat ze aan
          bepaalde kwaliteitseisen voldoen. Het is geen garantie, maar het is een positief signaal dat serieus
          genomen mag worden.
        </p>
        <p className={p}>
          <strong>Toegang tot je eigen account.</strong> Dit is een absolute eis. Jij bent eigenaar van je
          advertentieaccount. Als je ooit van bureau wisselt, neem je je account, je data en je campagnehistorie mee.
          Bureaus die dit weigeren of dit niet standaard aanbieden, zijn geen geschikte partner.
        </p>
        <p className={p}>
          <strong>Rapportagefrequentie en inhoud.</strong> Hoe vaak ontvang je een rapport? Wat staat erin?
          Kun je altijd inloggen in je eigen account? Een goed bureau rapporteert maandelijks met duidelijke KPI&apos;s:
          klikken, kosten, leads, cost per lead en conversiepercentage.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Rode vlaggen bij Google Ads bureaus
        </h2>
        <p className={p}>
          Wees extra kritisch als je een van de volgende signalen herkent:
        </p>
        <ul className={ul}>
          <li><strong>Geen toegang tot je eigen account:</strong> dit is een dealbreaker, altijd</li>
          <li><strong>Garanties op posities of resultaten:</strong> Google Ads geeft geen garanties en een bureau dus ook niet</li>
          <li><strong>Geen inzicht in de kostenopbouw:</strong> je moet kunnen zien wat naar Google gaat en wat naar het bureau</li>
          <li><strong>Lange contracten zonder uitstapclausule:</strong> als een bureau goed presteert, heeft het geen jarenlange binding nodig</li>
          <li><strong>Vaag over zoekwoorden en targeting:</strong> je mag weten waarop je adverteert</li>
          <li><strong>Geen conversiemeting:</strong> een bureau dat niet meet wat een klik oplevert, optimaliseert op de verkeerde dingen</li>
        </ul>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Wat mag je verwachten in de eerste 3 maanden?
        </h2>
        <p className={p}>
          Google Ads heeft een leerperiode. Verwacht je te snel resultaat en je kiest misschien voor het
          verkeerde bureau. Dit is een realistisch tijdspad:
        </p>
        <p className={p}>
          <strong>Eerste maand:</strong> campagnes worden opgezet, tracking wordt ingesteld, de Google-algoritmen
          leren. Resultaten zijn nog beperkt en kosten per lead zijn vaak hoger dan gemiddeld.
        </p>
        <p className={p}>
          <strong>Tweede maand:</strong> eerste optimalisaties op basis van data. Slechte zoekwoorden worden
          uitgezet, goede worden versterkt. Kosten per lead beginnen te dalen.
        </p>
        <p className={p}>
          <strong>Derde maand:</strong> stabielere campagnes. Je ziet een patroon in wat werkt. Kosten per lead
          zijn realistischer te voorspellen en bij te sturen. Pas na deze periode kun je de prestaties goed vergelijken.
        </p>

        <div className={qa}>
          <p className="font-bold text-[#3D3D3D] mb-2">Hoeveel budget heb ik nodig voor Google Ads?</p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Met minder dan €500 per maand heb je te weinig data om goed te optimaliseren. Voor de meeste sectoren
            is €750 tot €1.500 per maand een werkbaar startpunt. Competitieve sectoren zoals juridische diensten,
            verzekeringen of financiën vragen vaak aanzienlijk meer om relevant te kunnen adverteren.
          </p>
        </div>

        <div className={qa}>
          <p className="font-bold text-[#3D3D3D] mb-2">Kan ik Google Ads zelf doen?</p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Ja, het platform is toegankelijk. Maar fouten zijn kostbaar en de leercurve is steil.
            Als je budget hebt en je wil snel resultaat, is een bureau efficiënter dan zelf leren
            door te experimenteren met je eigen advertentiebudget.
          </p>
        </div>
      </>
    ),
  },

  /* ─────────────────────────────────────────────
     ARTIKEL 4 — meer leads genereren
  ───────────────────────────────────────────── */
  'meer-leads-genereren': {
    quickAnswer:
      'Meer leads genereren doe je door een combinatie van SEO, betaalde advertenties, een goede landingspagina en doordachte opvolging. Er is geen enkele methode die alles oplost. De beste aanpak hangt af van je branche, doelgroep en budget.',
    faqs: [
      {
        q: 'Wat is het verschil tussen een lead en een klant?',
        a: 'Een lead is iemand die interesse heeft getoond, bijvoorbeeld door een formulier in te vullen, te bellen of zich aan te melden voor je nieuwsbrief. Een klant heeft ook daadwerkelijk gekocht of een overeenkomst getekend. Tussen lead en klant zit het verkoopproces.',
      },
      {
        q: 'Werkt leadgeneratie voor elk bedrijf?',
        a: 'Ja, maar de aanpak verschilt sterk per sector. Een lokale klusjesboer heeft baat bij Google Ads en lokale SEO. Een B2B-softwarebedrijf profiteert meer van LinkedIn en content marketing. De methode past zich aan het bedrijf aan, niet andersom.',
      },
      {
        q: 'Hoe snel moet ik een lead opvolgen?',
        a: 'Zo snel mogelijk. De kans op conversie daalt fors als je een lead pas na 24 uur opvolgt. De beste resultaten behaal je als je binnen een uur reageert. Automatisering kan daarbij helpen: een directe bevestigingsmail zorgt al voor een eerste contact.',
      },
    ],
    body: (
      <>
        <p className={p}>
          Je hebt een goed product of dienst, maar er komen te weinig aanvragen binnen. Herkenbaar.
          Dit is een van de meest voorkomende uitdagingen bij MKB-bedrijven. Het goede nieuws: er is
          geen gebrek aan methodes. Het slechte nieuws: niet elke methode werkt voor elk bedrijf.
          We zetten de 7 meest effectieve aanpakken op een rij.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          1. Zorg dat je website bezoekers omzet naar leads
        </h2>
        <p className={p}>
          Alle andere methodes in dit artikel sturen bezoekers naar je website. Als die website niet converteert,
          betaal je voor verkeer dat niets oplevert. De fundering is dus altijd je website.
        </p>
        <p className={p}>Wat werkt voor een hogere conversie:</p>
        <ul className={ul}>
          <li><strong>Duidelijke call-to-action boven de vouw:</strong> bezoekers moeten binnen 5 seconden begrijpen wat ze moeten doen</li>
          <li><strong>Contactformulier zichtbaar zonder scrollen:</strong> zeker op mobiel, waar meer dan de helft van het verkeer vandaan komt</li>
          <li><strong>Snelle laadtijd:</strong> elke extra seconde laadtijd kost gemiddeld 7% van je conversies</li>
          <li><strong>Sociaal bewijs:</strong> reviews, klantnamen en cases die laten zien dat je levert wat je belooft</li>
        </ul>
        <p className={p}>
          Een website die goed converteert is de fundering. Alles wat daarna komt, bouwt erop voort.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          2. Google Ads voor directe zichtbaarheid
        </h2>
        <p className={p}>
          Google Ads zet je direct bovenaan de zoekresultaten voor de zoekwoorden die ertoe doen.
          Je betaalt per klik, niet per vertoning. Dat betekent dat je alleen betaalt als iemand
          daadwerkelijk geïnteresseerd is.
        </p>
        <p className={p}>
          Waarom dit werkt: mensen die googelen op &apos;boekhouder amsterdam&apos; of &apos;dakdekker den haag&apos; zijn actief
          op zoek. Ze hebben al een intentie. Als jij op dat moment zichtbaar bent, is de kans op een
          aanvraag veel groter dan bij kanalen waar je mensen interompt.
        </p>
        <p className={p}>
          Voordeel: snel resultaat, direct meetbaar, budget zelf te bepalen.
          Nadeel: zodra je stopt met betalen, stopt het verkeer. Bekijk onze aanpak voor{' '}
          <Link href="/diensten/google-ads" className={ilink}>Google Ads</Link>.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          3. Meta advertenties voor doelgroepgericht bereik
        </h2>
        <p className={p}>
          Facebook en Instagram geven je de mogelijkheid om heel specifiek te targeten. Je bereikt mensen
          op basis van demografie, interesses, gedrag en locatie. Geen koopintentie zoals bij Google,
          maar wel grote schaal en sterke visuele impact.
        </p>
        <p className={p}>Wat goed werkt via Meta:</p>
        <ul className={ul}>
          <li>Lokale bedrijven die een specifiek werkgebied willen bereiken</li>
          <li>Producten of diensten met visuele aantrekkingskracht</li>
          <li>Leadformulieren direct in de advertentie, zonder klik naar de website</li>
          <li>Retargeting van mensen die al je website hebben bezocht</li>
        </ul>
        <p className={p}>
          Meer weten? Bekijk onze{' '}
          <Link href="/diensten/meta-advertenties" className={ilink}>Meta Advertenties dienst</Link>.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          4. SEO voor organisch verkeer op de lange termijn
        </h2>
        <p className={p}>
          Zoekmachineoptimalisatie zorgt ervoor dat je website gevonden wordt in de gratis zoekresultaten.
          Geen advertentiekosten per klik, maar wel tijd nodig om resultaat te zien. SEO is een investering
          met een aanlooptijd van 3 tot 12 maanden, maar de resultaten werken daarna door.
        </p>
        <p className={p}>
          Een goed gerankte pagina blijft verkeer genereren zonder dat je er elke maand geld in pompt.
          Dat maakt SEO op de lange termijn een van de meest kostenefficiënte kanalen. Wat bij SEO helpt:
          relevante, kwalitatieve content schrijven, technische optimalisatie van je website, linkbuilding
          vanuit andere websites en lokale SEO als je een geografisch afgebakend werkgebied hebt.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          5. E-mailmarketing voor warme leads
        </h2>
        <p className={p}>
          Mensen die eerder contact hebben gehad, je nieuwsbrief ontvangen of al klant zijn, zijn veel
          gemakkelijker te overtuigen dan koude prospects. E-mailmarketing helpt je die warme relaties
          onderhouden en op het juiste moment te activeren.
        </p>
        <p className={p}>
          Wat je hiermee kunt doen: geautomatiseerde opvolgsequenties na een eerste contact, een nieuwsbrief
          met waardevolle content die je expertise toont en aanbiedingen of nieuws delen met een warm publiek
          dat al weet wie je bent.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          6. LinkedIn voor B2B leads
        </h2>
        <p className={p}>
          Als je zakelijke klanten bedient, is LinkedIn het krachtigste platform. Je kunt targeten op
          functietitel, bedrijfsgrootte, sector en locatie. Drie manieren om LinkedIn in te zetten voor leads:
        </p>
        <ul className={ul}>
          <li><strong>Organische content:</strong> posts en artikelen die je expertise tonen aan een zakelijk publiek</li>
          <li><strong>Directe outreach:</strong> verbinding maken en een gesprek starten met potentiële klanten</li>
          <li><strong>LinkedIn Ads:</strong> betaald adverteren met Lead Gen Forms die aanvragen direct in LinkedIn verzamelen</li>
        </ul>
        <p className={p}>
          LinkedIn is via zowel organische content, directe outreach als betaalde ads inzetbaar voor B2B leadgeneratie.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          7. AI voor slimmere leadopvolging
        </h2>
        <p className={p}>
          AI kan je helpen om leads sneller en beter op te volgen. Niet door leads te vervangen door robots,
          maar door de handmatige en repetitieve stappen te automatiseren.
        </p>
        <ul className={ul}>
          <li><strong>Automatische kwalificatie:</strong> een chatbot die bezoekers vragen stelt voordat ze bij je team terechtkomen</li>
          <li><strong>Snellere responstijd:</strong> geautomatiseerde eerste reacties die binnen seconden een afspraak plannen</li>
          <li><strong>Lead scoring:</strong> automatisch prioriteit geven aan leads op basis van gedrag en kenmerken</li>
        </ul>
        <p className={p}>
          Hoe meer handmatig werk je automatiseert, hoe meer je team zich kan richten op het sluiten van deals.
          <Link href="/contact" className={ilink}>Vraag een gratis audit aan</Link>
          {' '}en ontdek hoe wij meer leads voor jou genereren.
        </p>

        <div className={qa}>
          <p className="font-bold text-[#3D3D3D] mb-2">Hoeveel leads kan ik verwachten?</p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Dat hangt af van je budget, sector en concurrentie. Een realistisch doel voor een startende
            Google Ads campagne van €1.000 per maand is 5 tot 20 leads per maand, afhankelijk van de branche.
            Niemand kan dit garanderen, maar met de juiste basis is altijd een realistische schatting te maken.
          </p>
        </div>

        <div className={qa}>
          <p className="font-bold text-[#3D3D3D] mb-2">Wat is een goede lead-to-klant conversie?</p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Voor warme leads via inbound kanalen zoals SEO en Google Ads ligt 10% tot 30% conversie in de
            lijn der verwachting. Voor koude outreach is 2% tot 5% realistisch. Hoe warmer de lead en hoe
            sterker je opvolging, hoe hoger de conversie.
          </p>
        </div>
      </>
    ),
  },
};
