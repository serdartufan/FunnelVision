export const siteConfig = {
  name: 'FunnelVision',
  tagline: 'performance marketing · meta ads · google ads',
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
    short: 'De juiste mensen op het juiste moment bereiken op Facebook en Instagram. Zodat ze niet alleen zien wie jij bent, maar klant worden.',
    description:
      'Wij bouwen Meta campagnes die jouw doelgroep niet alleen bereiken maar ook overtuigen. Van de eerste indruk tot de aanvraag of aankoop: we optimaliseren elke stap op conversie. Wij gebruiken AI om sneller te testen, beter te targeten en meer uit je budget te halen. Geen verspild budget, alleen resultaat dat je kunt meten.',
    bullets: [
      'Campagnestrategie op maat',
      'Doelgroep research en targeting',
      'Creatie van advertentieteksten en visuals',
      'A/B-testen en optimalisatie met AI-ondersteuning',
      'Maandelijkse rapportage',
    ],
    target: 'Webshops, lokale dienstverleners en coaches die meer leads of verkopen willen via social media.',
    stats: [
      { label: 'Gem. ROAS', value: '340%' },
      { label: 'Beheerd budget', value: '€6M+' },
    ],
    unsplash: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    unsplashAlt: 'Social media advertenties op smartphone',
  },
  {
    slug: 'google-ads',
    number: '02',
    title: 'Google Ads',
    subtitle: 'Search Engine Advertising',
    short: 'Als iemand zoekt naar wat jij aanbiedt, wil je bovenaan staan. Wij zorgen dat koopklare klanten bij jou uitkomen, niet bij de concurrent.',
    description:
      'We bouwen Google Ads campagnes die jou zichtbaar maken op het moment dat het telt: als iemand actief zoekt naar jouw product of dienst. Wij gebruiken AI om sneller te testen, beter te targeten en meer uit je budget te halen. Van zoekwoordenstrategie tot conversiemeting, alles staat strak zodat elke euro advertentiebudget telt.',
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
];

export const cases = [
  {
    id: 1,
    company: 'The Fight Company',
    branch: 'E-commerce',
    result: '6.90',
    metric: 'Gemiddelde ROAS over een volledig jaar',
    description: 'Consistent hoge return on ad spend via Meta advertenties gedurende het hele jaar.',
    service: 'E-commerce',
    imageType: 'logo' as const,
    imageSrc: '/logos/thefightcompany.png',
    unsplash: 'https://images.unsplash.com/photo-1560066984-138daaa0b87b?w=600&q=80',
    unsplashAlt: 'Beauty salon interieur',
  },
  {
    id: 2,
    company: 'OrganicLink',
    branch: 'Copywriting & Sales Strategie',
    result: '9x',
    metric: 'Omzetgroei in één jaar',
    description: 'Van €7k naar €65k per maand binnen 12 maanden via copywriting en sales strategie.',
    service: 'Copywriting & Sales Strategie',
    imageType: 'logo' as const,
    imageSrc: '/logos/organiclink.jpg',
    unsplash: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    unsplashAlt: 'Personal trainer met klant in sportschool',
  },
  {
    id: 3,
    company: 'Dreamfit',
    branch: 'Meta Advertenties',
    result: '300+',
    metric: 'Leads binnen 2 maanden',
    description: 'Ruim 300 gekwalificeerde leads gegenereerd in slechts 2 maanden via Meta ads.',
    service: 'Meta Advertenties',
    imageType: 'logo' as const,
    imageSrc: '/logos/dreamfit.png',
    unsplash: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80',
    unsplashAlt: 'Tandartspraktijk wachtkamer',
  },
  {
    id: 4,
    company: 'Verpoorten Vitality',
    branch: 'Meta Advertenties',
    result: '3 jaar',
    metric: 'Gevulde pijplijn via Meta',
    description: 'Al 3 jaar lang een consistente stroom van klanten via Meta advertenties.',
    service: 'Meta Advertenties',
    imageType: 'logo' as const,
    imageSrc: '/logos/verpoorten-vitality.png',
    unsplash: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    unsplashAlt: 'Bouwproject in uitvoering',
  },
];

export const kennisbank = [
  {
    id: 'google-ads-bureau-vergelijken',
    title: 'Google Ads bureau vergelijken: waar moet je op letten?',
    slug: 'google-ads-bureau-vergelijken',
    category: 'Google Ads',
    excerpt: 'Niet elk Google Ads bureau levert wat het belooft. Met deze checklist kies je een partner die écht resultaat boekt.',
    readTime: '5 min',
    publishDate: '2026-05-27',
  },
  {
    id: 'meer-leads-genereren',
    title: 'Meer leads genereren voor je bedrijf: 7 bewezen methodes',
    slug: 'meer-leads-genereren',
    category: 'Leadgeneratie',
    excerpt: 'Meer leads zonder meer budget? Het kan. Ontdek 7 methodes die wij zelf toepassen voor onze klanten.',
    readTime: '7 min',
    publishDate: '2026-05-27',
  },
];

export const team = [
  {
    name: 'Serdar',
    role: 'Meta Ads Specialist & Strateeg',
    description:
      "Serdar is de drijvende kracht achter FunnelVision's Meta campagnes en salesfunnels. Met jarenlange ervaring in Facebook en Instagram advertenties weet hij precies hoe hij jouw doelgroep bereikt en converteert. Hij gebruikt AI als co-piloot om sneller te optimaliseren en betere resultaten te behalen.",
    expertise: ['Meta Ads', 'Salesfunnels', 'Strategie', 'Copywriting'],
    unsplash: '/Serdar.jpeg',
    unsplashAlt: 'Serdar, FunnelVision',
  },
  {
    name: 'Dogukan',
    role: 'Google Ads Specialist',
    description:
      'Dogukan is de Google Ads expert van het duo. Hij heeft een scherp oog voor zoekintentie en weet precies hoe hij campagnes inricht die zowel klikken als conversies opleveren voor een minimale investering.',
    expertise: ['Google Ads', 'SEA', 'Analytics', 'Conversiemeting'],
    unsplash: '/Dogukan.jpeg',
    unsplashAlt: 'Dogukan, FunnelVision',
  },
];
