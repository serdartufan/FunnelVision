export const siteConfig = {
  name: 'FunnelVision',
  tagline: 'marketing · sales · strategies',
  email: 'serdar@funnelvisionagency.com',
  domain: 'funnelvisionagency.com',
  instagram: 'https://instagram.com/funnelvision',
  linkedin: 'https://linkedin.com/company/funnelvision',
  facebook: 'https://facebook.com/funnelvision',
};

export const services = [
  {
    slug: 'meta-advertenties',
    number: '01',
    title: 'Meta Advertenties',
    subtitle: 'Facebook & Instagram Ads',
    short: 'Bereik jouw ideale klant op Facebook en Instagram met advertenties die écht converteren.',
    description:
      'We bouwen winstgevende Meta campagnes die jouw doelgroep raken op het juiste moment — van awareness tot aankoop. Geen verspild budget, alleen resultaat.',
    bullets: [
      'Campagnestrategie op maat',
      'Doelgroep research en targeting',
      'Creatie van advertentieteksten en visuals',
      'A/B-testen en optimalisatie',
      'Maandelijkse rapportage',
    ],
    target: 'Webshops, lokale dienstverleners en coaches die meer leads of verkopen willen via social media.',
    stats: [
      { label: 'Gem. ROAS', value: '340%' },
      { label: 'Beheerd budget', value: '€2M+' },
    ],
    unsplash: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    unsplashAlt: 'Social media advertenties op smartphone',
  },
  {
    slug: 'google-ads',
    number: '02',
    title: 'Google Ads',
    subtitle: 'Search Engine Advertising',
    short: 'Word gevonden door mensen die nu actief zoeken naar jouw dienst of product.',
    description:
      'Dogukan bouwt gerichte Google Ads campagnes die jouw bedrijf bovenaan zetten bij koopklare zoekopdrachten. Van zoekwoorden tot conversiemeting.',
    bullets: [
      'Zoekwoordenonderzoek en strategie',
      'Search, Shopping en Display campagnes',
      'Landingspagina optimalisatie',
      'Conversiemeting via Google Analytics 4',
      'Maandelijkse prestatierapportage',
    ],
    target: 'MKB-bedrijven die direct zichtbaar willen zijn voor lokale of nationale zoekopdrachten.',
    stats: [
      { label: 'Gem. CPC reductie', value: '42%' },
      { label: 'Cost per lead', value: '€0,80' },
    ],
    unsplash: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80',
    unsplashAlt: 'Google zoekresultaten op laptop',
  },
  {
    slug: 'emailmarketing',
    number: '03',
    title: 'E-mailmarketing',
    subtitle: 'Automatisering & Campagnes',
    short: 'Bouw een relatie met je klanten en genereer omzet op autopilot via slimme e-mailflows.',
    description:
      'We bouwen geautomatiseerde e-mailsequenties die leads opwarmen, klanten terugbrengen en jouw omzet verhogen — zonder dat jij er dagelijks naar hoeft te kijken.',
    bullets: [
      'Welkomstsequenties en nurture flows',
      'Winkelwagen verlaten e-mails',
      'Nieuwsbrief strategie en copy',
      'Segmentatie en personalisatie',
      'Rapportage en optimalisatie',
    ],
    target: 'Webshops en dienstverleners met een bestaande klantenlijst die meer willen halen uit hun database.',
    stats: [
      { label: 'Gem. open rate', value: '38%' },
      { label: 'Omzet via e-mail', value: '+55%' },
    ],
    unsplash: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80',
    unsplashAlt: 'E-mail marketing dashboard op laptop',
  },
  {
    slug: 'website-bouwen',
    number: '04',
    title: 'Website Bouwen',
    subtitle: 'Conversiegericht & Snel',
    short: 'Een snelle, professionele website die bezoekers omzet in klanten — gebouwd om te scoren.',
    description:
      'We bouwen strakke websites die niet alleen mooi zijn, maar ook converteren. Gebouwd op moderne technologie, geoptimaliseerd voor zoekmachines en volledig op maat.',
    bullets: [
      'Strategie en wireframes',
      'Custom design en ontwikkeling',
      'SEO-technische optimalisatie',
      'Contactformulieren en integraties',
      'Snelheid en Core Web Vitals optimalisatie',
    ],
    target:
      'Ondernemers die een nieuwe website of redesign nodig hebben die klanten oplevert in plaats van alleen indruk maakt.',
    stats: [
      { label: 'Gem. laadtijd', value: '<1s' },
      { label: 'Core Web Vitals', value: '100/100' },
    ],
    unsplash: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    unsplashAlt: 'Website design op meerdere apparaten',
  },
];

export const cases = [
  {
    id: 1,
    branch: 'Beauty salon',
    company: 'Salon Yasmine',
    result: '+280%',
    metric: 'leads',
    description: 'Via gerichte Meta campagnes vulden we de agenda van Yasmine in 60 dagen volledig vol.',
    service: 'Meta Advertenties',
    unsplash: 'https://images.unsplash.com/photo-1560066984-138daaa0b87b?w=600&q=80',
    unsplashAlt: 'Beauty salon interieur',
  },
  {
    id: 2,
    branch: 'Personal trainer',
    company: 'TrainHard NL',
    result: '+190%',
    metric: 'aanmeldingen',
    description: 'Online aanmeldingen voor PT-sessies schoten omhoog dankzij een strakke Instagram ads funnel.',
    service: 'Meta Advertenties',
    unsplash: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    unsplashAlt: 'Personal trainer met klant in sportschool',
  },
  {
    id: 3,
    branch: 'Tandarts',
    company: 'Tandartsenpraktijk De Glimlach',
    result: '€0,80',
    metric: 'cost per lead',
    description: 'Lokale Google Ads strategie die nieuwe patiënten binnenbracht voor minder dan een euro per lead.',
    service: 'Google Ads',
    unsplash: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80',
    unsplashAlt: 'Tandartspraktijk wachtkamer',
  },
  {
    id: 4,
    branch: 'Aannemer',
    company: 'Bouwbedrijf Van der Berg',
    result: '+340%',
    metric: 'offerteaanvragen',
    description: 'Gecombineerde Search en Meta aanpak zorgde voor een explosie aan kwalitatieve leads.',
    service: 'Google Ads & Meta',
    unsplash: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    unsplashAlt: 'Bouwproject in uitvoering',
  },
  {
    id: 5,
    branch: 'Webshop',
    company: 'StyleNow.nl',
    result: '420%',
    metric: 'ROAS',
    description:
      'Dynamische productadvertenties en retargeting zorgden voor een verviervoudiging van het advertentierendement.',
    service: 'Meta Advertenties',
    unsplash: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
    unsplashAlt: 'Online webshop op laptop',
  },
  {
    id: 6,
    branch: 'Restaurant',
    company: "Bistro L'Étoile",
    result: '3 weken',
    metric: 'volgeboekt vooruit',
    description: 'Instagram ads met reserveringslink zorgden dat het restaurant wekenlang volgeboekt zat.',
    service: 'Meta Advertenties',
    unsplash: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    unsplashAlt: 'Sfeervol restaurant interieur',
  },
];

export const team = [
  {
    name: 'Serdar Tufan',
    role: 'Oprichter & Meta Ads Specialist',
    description:
      "Serdar is de drijvende kracht achter FunnelVision's Meta campagnes en salesfunnels. Met jarenlange ervaring in Facebook en Instagram advertenties weet hij precies hoe hij jouw doelgroep bereikt en converteert.",
    expertise: ['Meta Ads', 'Salesfunnels', 'Strategie', 'Copywriting'],
    unsplash: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    unsplashAlt: 'Professioneel portretfoto man',
  },
  {
    name: 'Dogukan',
    role: 'Google Ads Specialist',
    description:
      'Dogukan is de Google Ads expert van het duo. Hij heeft een scherp oog voor zoekintentie en weet precies hoe hij campagnes inricht die zowel klikken als conversies opleveren voor een minimale investering.',
    expertise: ['Google Ads', 'SEA', 'Analytics', 'Conversiemeting'],
    unsplash: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    unsplashAlt: 'Professioneel portretfoto man',
  },
];
