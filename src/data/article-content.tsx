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
const qa = 'bg-[#F5F2EB] rounded-xl p-6 border-l-4 border-[#F5A623] my-8';

export const articleContent: Record<string, ArticleContentData> = {

  /* ─────────────────────────────────────────────
     ARTIKEL 1 — website laten bouwen kosten
  ───────────────────────────────────────────── */
  'website-laten-bouwen-kosten': {
    quickAnswer:
      'Een website laten bouwen begint vanaf €500. Wat je daarboven betaalt, hangt volledig af van wat je nodig hebt: het aantal pagina\'s, de functionaliteiten, of je kiest voor een template of maatwerk, en wie de content schrijft. Een website kan zo duur zijn als je zelf wilt. Wil je weten wat een website voor jouw situatie kost? Neem dan contact op voor een vrijblijvend gesprek.',
    faqs: [
      {
        q: 'Hoe lang gaat een website mee?',
        a: 'Gemiddeld 3 tot 5 jaar voordat een redesign zinvol is. Technisch gezien gaat een website langer mee, maar de stijl, snelheid en mobiele optimalisatie verouderen. Na 3 jaar is het verstandig om kritisch te kijken of je website nog voldoet.',
      },
      {
        q: 'Wat kost websiteonderhoud per maand?',
        a: 'Dat hangt af van wat je uitbesteedt. Als je het zelf doet, betaal je alleen voor hosting en eventuele plugins. Besteed je onderhoud en updates uit, dan betaal je voor de tijd die daarin gaat zitten. Hoe meer aanpassingen, hoe hoger de kosten. Vraag altijd om een concreet voorstel zodat je precies weet waar je aan toe bent.',
      },
      {
        q: 'Is een goedkopere website altijd van mindere kwaliteit?',
        a: 'Niet per se. Als je wensen bescheiden zijn, is een eenvoudige template-website prima. De prijs hangt af van de complexiteit, niet altijd van de kwaliteit van het eindresultaat. Een ervaren bouwer kan ook voor een laag budget iets goeds neerzetten.',
      },
    ],
    body: (
      <>
        <p className={p}>
          Je bent op zoek naar een nieuwe website. Dan kom je al snel de vraag tegen: wat gaat dit kosten?
          Het eerlijke antwoord is dat het er helemaal van afhangt. Maar met de juiste informatie bouw je een
          realistische verwachting op voordat je offertes opvraagt. In dit artikel zetten we alle factoren op een rij.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Wat bepaalt de prijs van een website?
        </h2>
        <p className={p}>
          De prijs van een website wordt niet bepaald door één factor, maar door een combinatie.
          De belangrijkste zijn het aantal pagina&apos;s, de keuze tussen een template en maatwerk design,
          de functionaliteiten die je nodig hebt, wie de content schrijft en wat de doorlopende kosten zijn.
          Elk van deze onderdelen kan de prijs aanzienlijk beïnvloeden.
        </p>
        <p className={p}>
          <strong>Aantal pagina&apos;s.</strong> Een website met 5 pagina&apos;s kost minder dan een website met 20 pagina&apos;s.
          Meer pagina&apos;s betekent meer design, meer content en meer ontwikkelwerk. Bepaal vooraf hoeveel pagina&apos;s
          je echt nodig hebt en schrap wat niet nodig is.
        </p>
        <p className={p}>
          <strong>Template vs. maatwerk.</strong> Een template-website is gebouwd op een bestaand ontwerp dat je aanpast
          naar je eigen stijl. Dat is goedkoper en sneller, maar je hebt minder vrijheid en het ontwerp lijkt op dat
          van honderden andere bedrijven. Maatwerk design is volledig op maat gemaakt voor jouw bedrijf en doelgroep.
          Dat kost meer tijd en geld, maar levert een uniek resultaat op dat beter converteert.
        </p>
        <p className={p}>
          <strong>Functionaliteiten.</strong> Een eenvoudig contactformulier is snel ingebouwd. Maar als je een webshop wil,
          een boekingssysteem, een ledenomgeving of een koppeling met je CRM-systeem, dan lopen de ontwikkelkosten snel op.
          Elke extra functie kost tijd om te bouwen, testen en onderhouden.
        </p>
        <p className={p}>
          <strong>Content.</strong> Wie schrijft de teksten? Wie levert de foto&apos;s aan? Als de webbouwer dat voor je doet,
          betaal je extra. Doe je het zelf, dan bespaar je kosten, maar het kost je tijd. Goede teksten schrijven
          voor je website kost gemiddeld een halve tot een volledige dag per pagina als je het serieus aanpakt.
        </p>
        <p className={p}>
          <strong>Hosting en onderhoud.</strong> Een website is nooit echt klaar. Na de lancering heb je hosting nodig,
          updates en soms kleine aanpassingen. Reken die kosten ook mee in je totaalplaatje.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Wat kost een eenvoudige website?
        </h2>
        <p className={p}>
          Een eenvoudige website, ook wel een one-pager of visitekaartje-website, begint vanaf €500.
          Dit type website bestaat uit één pagina of een kleine set pagina&apos;s met de basisinformatie
          over jouw bedrijf: wie je bent, wat je doet, hoe mensen contact met je kunnen opnemen.
        </p>
        <p className={p}>
          Dit is geschikt voor ZZP&apos;ers en kleine bedrijven die online vindbaar willen zijn zonder grote investering.
          Denk aan een lokale kapper, coach, fotograaf of aannemer die een nette online aanwezigheid wil.
          Je hebt geen ingewikkelde functionaliteiten nodig, alleen een plek waar klanten je kunnen vinden en bereiken.
        </p>
        <p className={p}>Wat je in deze categorie doorgaans krijgt:</p>
        <ul className={ul}>
          <li>Één pagina of een kleine set subpagina&apos;s</li>
          <li>Een template-gebaseerd ontwerp aangepast naar je huisstijl</li>
          <li>Een contactformulier</li>
          <li>Mobiel- en tabletoptimalisatie</li>
          <li>Basis SEO-instellingen zodat Google je kan vinden</li>
        </ul>
        <p className={p}>
          Voor een instapbudget koop je functionaliteit, geen originaliteit. Het ontwerp lijkt op dat van veel andere
          websites. Dat hoeft geen probleem te zijn als jouw doel alleen is om online vindbaar te zijn.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Wat kost een professionele bedrijfswebsite?
        </h2>
        <p className={p}>
          Wil je een professionele website die jouw bedrijf goed vertegenwoordigt, bezoekers aanspreekt en
          leads genereert? Dan heb je meer nodig dan een eenvoudige one-pager. De prijs hangt af van hoeveel
          pagina&apos;s je wil, of je kiest voor maatwerk design en welke functionaliteiten je nodig hebt.
          Een website kan zo uitgebreid worden als jij wil, en de prijs groeit mee met de complexiteit.
        </p>
        <p className={p}>Wat je bij een professionele bedrijfswebsite doorgaans terugziet:</p>
        <ul className={ul}>
          <li>Meerdere pagina&apos;s afgestemd op jouw diensten en doelgroep</li>
          <li>Maatwerk design passend bij jouw merk</li>
          <li>Contactformulier met e-mailkoppeling</li>
          <li>SEO-technische basis: snelheid, metadata, sitemap</li>
          <li>Integraties zoals Google Analytics of CRM</li>
          <li>Een beheersysteem zodat je zelf teksten kunt aanpassen</li>
        </ul>
        <p className={p}>
          Bij FunnelVision bouwen we websites die niet alleen mooi zijn, maar ook converteren.
          Bekijk onze{' '}
          <Link href="/diensten/website-bouwen" className={ilink}>dienst Website Bouwen</Link>
          {' '}of{' '}
          <Link href="/contact" className={ilink}>neem contact op</Link>
          {' '}voor een vrijblijvende prijsindicatie op maat.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Wat kost een webshop of platform?
        </h2>
        <p className={p}>
          Een webshop is een ander verhaal dan een bedrijfswebsite. Naast de standaard onderdelen heb je
          betaalintegraties nodig, productpagina&apos;s, een winkelwagen, een bestelproces en koppelingen
          met je logistiek of voorraadsysteem. Dat vraagt veel meer ontwikkelwerk en de investering groeit
          mee met de complexiteit van jouw wensen.
        </p>
        <p className={p}>
          Een eenvoudige webshop op een bestaand platform vraagt een andere investering dan een volledig
          maatwerk platform met meerdere koppelingen, abonnementslogica of meerdere leveranciers.
          De keuzes die je maakt op het vlak van platform, design en functionaliteiten bepalen uiteindelijk
          wat je betaalt.
        </p>
        <p className={p}>
          Bij webshops tellen ook de doorlopende kosten sterk mee: transactiekosten, softwarelicenties,
          productfoto&apos;s, content schrijven en updates blijven doorlopen. Reken die structurele lasten
          altijd mee in je totaalbudget voordat je een beslissing maakt.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Terugkerende kosten die je niet mag vergeten
        </h2>
        <p className={p}>
          Veel ondernemers vergeten de terugkerende kosten mee te nemen in hun budget. Een website bouwen
          is één ding, maar een website draaiende houden is een ander. Dit zijn de vaste lasten die je kunt verwachten:
        </p>
        <ul className={ul}>
          <li><strong>Hosting:</strong> afhankelijk van de provider en het plan dat je kiest</li>
          <li><strong>Domeinnaam:</strong> een jaarlijkse vergoeding voor je .nl of .com domein</li>
          <li><strong>SSL-certificaat:</strong> meestal inbegrepen bij hostingpakketten, soms een apart jaarlijks bedrag</li>
          <li><strong>Onderhoud en updates:</strong> wat je betaalt als je dit uitbesteedt, hangt af van hoeveel werk er is</li>
          <li><strong>Contentbeheer:</strong> als je regelmatig nieuwe teksten of afbeeldingen plaatst, kost dat tijd of geld</li>
        </ul>
        <p className={p}>
          Wat je precies betaalt aan terugkerende kosten hangt af van de keuzes die je maakt: welke hostingprovider,
          welk onderhoudsniveau en hoe actief je de website wil bijhouden. Goedkopere hostingpakketten zijn er,
          maar voor snelheid en betrouwbaarheid is kwaliteitshosting de moeite waard.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Wanneer loont investeren in een duurdere website?
        </h2>
        <p className={p}>
          Een website is een investering, geen kostenpost. De vraag is niet wat een website kost, maar wat
          een website oplevert. Als jouw website maandelijks nieuwe klanten of leads genereert, dan verdient
          hij zichzelf terug. Hoe meer je investeert in een website die converteert, hoe groter dat effect kan zijn.
          Zo kijken wij ernaar.
        </p>
        <p className={p}>Een grotere investering loont als:</p>
        <ul className={ul}>
          <li>Je website de primaire bron van leads of omzet moet zijn</li>
          <li>Je concurrenten professionele websites hebben en jij achterblijft</li>
          <li>Klanten een hoogwaardig online visitekaartje van je verwachten</li>
          <li>Je website onderdeel is van een bredere marketingstrategie</li>
        </ul>
        <p className={p}>
          Een eenvoudige website is prima als je al via andere kanalen voldoende klanten binnenhaalt en je website
          alleen hoeft te dienen als bevestiging dat je bestaat. Maar wil je groeien, dan is een professionele website
          de basis van alles wat daarna komt.
        </p>
        <p className={p}>
          Wil je een concrete prijsindicatie voor jouw situatie?{' '}
          <Link href="/contact" className={ilink}>Neem vrijblijvend contact op</Link>
          {' '}en we denken graag met je mee.
        </p>

        <div className={qa}>
          <p className="font-bold text-[#3D3D3D] mb-2">Kan ik zelf een website bouwen?</p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Ja, dat kan. Platforms zoals Squarespace, Wix en WordPress maken het toegankelijk voor iedereen.
            Je betaalt weinig geld maar investeert flink wat tijd. Het resultaat is minder professioneel dan maatwerk,
            maar voor een eenvoudige online aanwezigheid werkt het prima. Verwacht wel dat je er meer uren in steekt
            dan je van tevoren denkt.
          </p>
        </div>

        <div className={qa}>
          <p className="font-bold text-[#3D3D3D] mb-2">Hoe lang duurt het bouwen van een website?</p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Een eenvoudige website duurt 1 tot 2 weken. Een professionele bedrijfswebsite kost 4 tot 8 weken,
            afhankelijk van het aantal revisierondes en hoe snel jij feedback geeft. Een complex platform of
            webshop kan 3 maanden of meer in beslag nemen. De doorlooptijd wordt voor een groot deel bepaald
            door de klant, niet door de bouwer.
          </p>
        </div>
      </>
    ),
  },

  /* ─────────────────────────────────────────────
     ARTIKEL 2 — ai consultant inhuren
  ───────────────────────────────────────────── */
  'ai-consultant-inhuren': {
    quickAnswer:
      'Een AI consultant helpt bedrijven slimmer werken met AI-tools en automatisering. De kosten beginnen vanaf €75 per uur, afhankelijk van de ervaring en het type project. Een duidelijke opdracht met concrete doelen zorgt ervoor dat je het meeste haalt uit de samenwerking.',
    faqs: [
      {
        q: 'Wat is het verschil tussen een AI consultant en een IT consultant?',
        a: 'Een IT consultant richt zich op systemen, netwerken en infrastructuur. Een AI consultant richt zich op het inzetten van intelligente tools en automatisering om processen te verbeteren. De twee kunnen overlappen, maar het zijn verschillende specialisaties.',
      },
      {
        q: 'Moet ik zelf AI-kennis hebben om met een consultant te werken?',
        a: 'Nee. Dat is precies wat de consultant voor je meebrengt. Je hoeft alleen te weten wat je wil bereiken, niet hoe het technisch werkt. Een goede consultant vertaalt jouw bedrijfsvraagstuk naar een passende technische oplossing.',
      },
      {
        q: 'Kan een AI consultant ook helpen met tools zoals ChatGPT of Claude?',
        a: 'Ja. Veel opdrachten draaien om het goed inzetten van bestaande tools: prompt engineering, koppelingen bouwen, of workflows automatiseren met tools die je al gebruikt. Je hoeft niet altijd iets nieuws te bouwen.',
      },
    ],
    body: (
      <>
        <p className={p}>
          AI is niet langer iets voor grote technologiebedrijven. Steeds meer MKB-bedrijven ontdekken dat ze
          met de juiste tools tientallen uren per maand kunnen besparen op terugkerend werk. Maar hoe begin je?
          En wat doet een AI consultant eigenlijk? We zetten het op een rij.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Wat doet een AI consultant precies?
        </h2>
        <p className={p}>
          Een AI consultant kijkt naar de processen in jouw bedrijf en bedenkt waar AI echte waarde toevoegt.
          Dat is niet altijd de meest geavanceerde oplossing. Soms is een simpele automatisering van een
          terugkerend proces al genoeg om tientallen uren per maand te besparen.
        </p>
        <p className={p}>Wat een AI consultant concreet doet:</p>
        <ul className={ul}>
          <li>Processen analyseren en bottlenecks identificeren</li>
          <li>AI-tools selecteren die passen bij jouw situatie, zoals ChatGPT, Claude, Make, Zapier of n8n</li>
          <li>Implementatie begeleiden of zelf uitvoeren</li>
          <li>Medewerkers trainen in het gebruik van nieuwe tools</li>
          <li>Resultaten meten en de aanpak bijsturen</li>
        </ul>
        <p className={p}>
          Bij FunnelVision doen we dit zelf ook, zowel intern als voor klanten. Na twee jaar intensief
          experimenteren weten we wat werkt en wat niet. Niet elke AI-tool is de moeite waard. Een consultant
          die de markt kent, bespaart je de tijd van zelf alles uitproberen.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Wanneer heb je een AI consultant nodig?
        </h2>
        <p className={p}>
          Niet elk bedrijf heeft een AI consultant nodig. Maar er zijn situaties waarbij de investering snel
          terugverdiend is. Herken je een van de volgende situaties? Dan is de kans groot dat een consultant
          iets voor je kan betekenen.
        </p>
        <p className={p}>
          <strong>Je team doet veel repetitief werk.</strong> Denk aan data verwerken, e-mails beantwoorden,
          rapporten opstellen of informatie opzoeken. Dit soort werk leent zich uitstekend voor automatisering.
          Als een medewerker 2 uur per dag kwijt is aan taken die geautomatiseerd kunnen worden, is dat 40 uur
          per maand die vrij kan komen voor werk met meer waarde.
        </p>
        <p className={p}>
          <strong>Je wil automatiseren maar weet niet waar te beginnen.</strong> AI-tools schieten als paddenstoelen
          uit de grond. Zonder iemand die de opties kent, verlies je makkelijk tijd aan tools die niet bij jou passen.
          Een consultant brengt overzicht en helpt je de juiste keuzes maken.
        </p>
        <p className={p}>
          <strong>Concurrenten werken sneller.</strong> Als je merkt dat collega-bedrijven efficiënter werken,
          sneller offertes sturen of meer klanten kunnen bedienen met hetzelfde team, is de kans groot dat
          ze AI-tools gebruiken die jij nog niet kent.
        </p>
        <p className={p}>
          <strong>Je bouwt een nieuw product of dienst.</strong> Als je een AI-component wil inbouwen, zoals een
          chatbot, een aanbevelingssysteem of een slimme zoekmachine, heb je technische kennis nodig die
          een AI consultant kan leveren.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Wat kost een AI consultant?
        </h2>
        <p className={p}>
          De kosten hangen af van de ervaring en het type opdracht. Een grove richtlijn:
        </p>
        <ul className={ul}>
          <li>Junior consultant of freelancer: €75 tot €100 per uur</li>
          <li>Ervaren consultant met bewezen cases: €100 tot €175 per uur</li>
          <li>Bureau met AI-specialisatie: €150 tot €250 per uur</li>
        </ul>
        <p className={p}>
          Voor een volledig project met analyse, implementatie en begeleiding reken je al snel op €2.000 tot
          €10.000, afhankelijk van de scope. Naast uurtarieven zijn er ook andere contractvormen. Projectbasis
          geeft je een vaste prijs voor een afgebakend resultaat. Een retainer is een maandelijks vast bedrag
          voor doorlopende ondersteuning.
        </p>
        <p className={p}>
          Bij FunnelVision bieden we AI-oplossingen op maat aan voor bedrijven die slimmer willen werken.
          Bekijk de mogelijkheden op onze pagina{' '}
          <Link href="/diensten/ai-oplossingen" className={ilink}>AI Oplossingen</Link>.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Waar moet je op letten bij het inhuren?
        </h2>
        <p className={p}>
          Een consultant die goed praat is niet per se een consultant die goed levert. Let op het volgende
          voordat je iemand inhuurt.
        </p>
        <p className={p}>
          <strong>Vraag naar concrete cases.</strong> Wat heeft de consultant eerder gebouwd of geïmplementeerd?
          Zijn er klanten die je kunt bellen voor een referentie? Resultaten die aantoonbaar zijn in cijfers?
          Iedereen kan zeggen dat hij of zij AI-expert is. Bewijs is wat telt.
        </p>
        <p className={p}>
          <strong>Is implementatiebegeleiding inbegrepen?</strong> Sommige consultants leveren een adviesrapport
          en verdwijnen daarna. Zorg dat de consultant ook de implementatie begeleidt of zelf uitvoert.
          Advies zonder uitvoering is weinig waard als je team niet weet hoe het moet.
        </p>
        <p className={p}>
          <strong>Heeft hij kennis van jouw branche?</strong> AI-implementaties zijn contextafhankelijk.
          Een consultant die weet hoe jouw sector werkt, levert sneller resultaat dan iemand die alles van nul
          moet leren. Vraag naar relevante brancheervaring.
        </p>
        <p className={p}>
          <strong>Spreek af hoe meerwerk vergoed wordt.</strong> Bij uurtarieven loopt een project makkelijk uit.
          Projectprijzen geven meer zekerheid. Maak vooraf duidelijke afspraken over scope, tijdlijn en kosten.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          AI consultant vs. AI bureau: wat past bij jou?
        </h2>
        <p className={p}>
          Een freelance AI consultant is flexibel en persoonlijk. Je hebt één aanspreekpunt en de lijnen zijn kort.
          Goed voor kleinere opdrachten waarbij je snel wil schakelen zonder veel overhead.
        </p>
        <p className={p}>
          Een AI bureau heeft meer capaciteit en kan grotere projecten aan. Ze hebben vaak specialisten
          voor zowel de strategie als de technische uitvoering. Nadeel: meer overhead en hogere kosten per uur.
        </p>
        <p className={p}>
          Voor de meeste MKB-bedrijven is een ervaren freelancer of een klein gespecialiseerd bureau de beste keuze.
          Groot bureau, grote kosten en soms ook grote afstand tot de klant.
        </p>

        <div className={qa}>
          <p className="font-bold text-[#3D3D3D] mb-2">Heeft mijn bedrijf AI nodig?</p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Als je medewerkers veel repetitieve taken uitvoeren of als processen trager verlopen dan je wil,
            is de kans groot dat AI iets voor je kan doen. Het is geen must voor elk bedrijf, maar voor de
            meeste MKB-bedrijven liggen er kansen die nu nog onbenut zijn. Een gesprek met een specialist
            maakt snel duidelijk of het ook voor jou zinvol is.
          </p>
        </div>

        <div className={qa}>
          <p className="font-bold text-[#3D3D3D] mb-2">Hoe snel zie je resultaat van een AI implementatie?</p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Een simpele automatisering is soms binnen een week live. Een complexere implementatie duurt
            1 tot 3 maanden. Resultaten zoals tijdsbesparing zijn al snel meetbaar, maar de echte impact
            zie je pas na een paar maanden consistent gebruik.
          </p>
        </div>
      </>
    ),
  },

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
          Bekijk onze{' '}
          <Link href="/diensten/ai-oplossingen" className={ilink}>AI Oplossingen</Link>.
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

  /* ─────────────────────────────────────────────
     ARTIKEL 5 — marketing bureau groningen
  ───────────────────────────────────────────── */
  'marketing-bureau-groningen': {
    quickAnswer:
      'Een marketing bureau in Groningen helpt je met online zichtbaarheid, leads en klanten. FunnelVision is gevestigd in Groningen en werkt voor bedrijven door heel Nederland. We combineren lokale kennis met een resultaatgerichte aanpak en werken zonder langdurige contracten.',
    faqs: [
      {
        q: 'Wat is het verschil tussen een full-service bureau en een specialist?',
        a: 'Een full-service bureau doet alles: strategie, content, SEO, advertenties en meer. Een specialist focust op één kanaal of discipline en levert daar meer diepgang. Specialisten zijn vaak goedkoper per dienst, maar je hebt dan meerdere partijen nodig.',
      },
      {
        q: 'Moet ik een lang contract tekenen bij FunnelVision?',
        a: 'Nee. We werken in sprints van 3 maanden. Na de eerste sprint is de samenwerking maandelijks opzegbaar. We verdienen onze plek elke maand opnieuw. Geen langdurige binding, geen boeteclausules.',
      },
      {
        q: 'Hoe weet ik of mijn marketing bureau resultaat levert?',
        a: 'Via heldere rapportage met vaste KPI\'s: aantal leads, cost per lead, ROAS of websiteconversies. Als een bureau niet concreet kan uitleggen wat een campagne heeft opgeleverd in meetbare cijfers, is er een probleem.',
      },
    ],
    body: (
      <>
        <p className={p}>
          Ben je op zoek naar een marketing bureau? Dan wil je weten wat je kunt verwachten,
          wat het kost en hoe je een bureau kiest dat bij jou past. In dit artikel leggen we het uit,
          zodat je straks een weloverwogen keuze maakt.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Wat doet een marketing bureau?
        </h2>
        <p className={p}>
          Een marketing bureau neemt het online deel van jouw marketing uit handen. Dat kan van alles zijn:
          van het beheren van je advertentiecampagnes tot het bouwen van je website, van het opzetten van
          e-mailflows tot het implementeren van AI-tools.
        </p>
        <p className={p}>Wat de meeste MKB-bureaus doen:</p>
        <ul className={ul}>
          <li><strong>Strategie:</strong> bepalen welke kanalen de meeste kans hebben voor jouw bedrijf</li>
          <li><strong>Uitvoering:</strong> campagnes opzetten, content maken, websites bouwen</li>
          <li><strong>Meting:</strong> bijhouden wat werkt en wat niet via data en rapportages</li>
          <li><strong>Optimalisatie:</strong> op basis van resultaten de aanpak continu verbeteren</li>
        </ul>
        <p className={p}>
          Een goed bureau werkt als een verlengde van jouw eigen team. Geen adviseurs die rapporten schrijven
          en verdwijnen, maar specialisten die resultaten leveren en uitleggen wat ze doen.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Waarom kiezen voor een lokaal bureau?
        </h2>
        <p className={p}>
          Korte lijnen zijn een groot voordeel van een lokaal bureau. Als je snel iets wil bespreken, spreek
          je direct met de specialist die jouw campagnes beheert. Geen accountmanager die doorverbindt,
          maar direct contact met degene die het werk doet.
        </p>
        <p className={p}>
          Een kleinschalig bureau werkt persoonlijker dan een groot, anoniem bureau. Je bent geen nummer
          in een systeem, maar een klant waarbij iedereen in het team weet wat er speelt. Dat maakt
          sneller schakelen mogelijk en zorgt dat er echt meegedacht wordt met jouw situatie.
        </p>
        <p className={p}>
          Tegelijk hoeft een lokaal bureau je niet te beperken tot de eigen regio. Bij FunnelVision werken we voor
          bedrijven door heel Nederland. De meeste samenwerking verloopt via video calls en online tools.
          Locatie is geen belemmering voor goede resultaten.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Welke diensten biedt FunnelVision aan?
        </h2>
        <p className={p}>We dekken de meestgebruikte online marketingkanalen voor het MKB:</p>
        <ul className={ul}>
          <li>
            <Link href="/diensten/meta-advertenties" className={ilink}>Meta Advertenties</Link>
            {': Facebook en Instagram campagnes die conversies opleveren'}
          </li>
          <li>
            <Link href="/diensten/google-ads" className={ilink}>Google Ads</Link>
            {': zichtbaarheid op het moment dat klanten actief zoeken'}
          </li>
          <li>
            <Link href="/diensten/website-bouwen" className={ilink}>Website Bouwen</Link>
            {': conversiegerichte websites die bezoekers omzetten in klanten'}
          </li>
          <li>
            <Link href="/diensten/ai-oplossingen" className={ilink}>AI Oplossingen</Link>
            {': processen automatiseren en slimmer laten werken met AI'}
          </li>
        </ul>
        <p className={p}>
          We werken in sprints van 3 maanden. Na de eerste sprint is de samenwerking maandelijks opzegbaar.
          Geen langdurige contracten. We verdienen onze plek elke maand opnieuw.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Wat kost een marketing bureau?
        </h2>
        <p className={p}>
          De kosten hangen sterk af van welke dienst je afneemt en wat de scope is. Een Google Ads campagne
          heeft andere kosten dan een volledig website-project. Een bureau dat alles doet kost meer dan een
          specialist op één kanaal.
        </p>
        <p className={p}>
          We werken niet met standaard prijslijsten, omdat elke situatie anders is. Jouw budget, je doelen
          en de sector waarin je werkt bepalen samen wat de meest zinvolle aanpak is. Plan een gratis
          kennismakingsgesprek via onze{' '}
          <Link href="/contact" className={ilink}>contactpagina</Link>
          {' '}en we bespreken wat bij jou past.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }} className={h2}>
          Hoe kies je het juiste marketing bureau?
        </h2>
        <p className={p}>
          Er zijn veel bureaus, en ze zien er van buiten allemaal aantrekkelijk uit. Hier is hoe je slim vergelijkt.
        </p>
        <p className={p}>
          <strong>Vraag naar cases.</strong> Heeft het bureau resultaten behaald voor bedrijven zoals dat van jou?
          Niet een vage beschrijving, maar concrete cijfers. Cost per lead, ROAS, omzetgroei. Als een bureau
          geen harde resultaten kan laten zien, is dat een waarschuwing.
        </p>
        <p className={p}>
          <strong>Check de aanpak.</strong> Sluit de werkwijze aan bij hoe jij wil samenwerken?
          Wil je maandelijks een rapport of wil je nauw betrokken zijn? Vraag hoe het bureau communiceert
          en hoe snel ze reageren.
        </p>
        <p className={p}>
          <strong>Kijk naar de contracten.</strong> Lange contracten zijn een risico als resultaten tegenvallen.
          Bureaus die goed presteren, hebben geen jarenlange binding nodig. Kijk altijd wat de uitstapopties zijn
          voordat je tekent.
        </p>
        <p className={p}>
          <strong>Spreek af wie eigenaar is van je accounts en data.</strong> Jij bent altijd eigenaar van je
          advertentieaccounts, je website en je klantdata. Dat moet altijd zo zijn, ook als je stopt met het bureau.
        </p>

        <div className={qa}>
          <p className="font-bold text-[#3D3D3D] mb-2">Werkt FunnelVision alleen in Groningen?</p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Nee. We zijn gevestigd in Groningen maar werken voor klanten door heel Nederland. De meeste
            samenwerking verloopt via video calls en online tools. Locatie is geen belemmering voor een
            goede samenwerking.
          </p>
        </div>

        <div className={qa}>
          <p className="font-bold text-[#3D3D3D] mb-2">Hoe begin ik met een marketing bureau?</p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Begin met een vrijblijvend kennismakingsgesprek. Beschrijf wat je doelen zijn, wat je tot nu
            toe hebt geprobeerd en waar je tegenaan loopt. Een goed bureau luistert eerst en stelt daarna
            een aanpak voor die past bij jouw situatie en budget.
          </p>
        </div>
      </>
    ),
  },
};
