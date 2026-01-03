import { Experience } from '../../types'

export const experienceData: Experience[] = [
  {
    id: 'handelsforetagen',
    title: 'VD & Koncernchef',
    company: 'HandelsFöretagen',
    location: 'Göteborg, Sverige',
    range: 'Aug 2025 - Nuvarande',
    url: 'https://handelsforetagen.se',
    summary:
      'Leder en strategisk turnaround av Nordens största studentdrivna bolagsgrupp med sju dotterbolag och 180 medarbetare. Levererade koncernens starkaste Q3 någonsin.',
    description: [
      'Har totalt operativt och strategiskt ansvar för koncernens tillväxt, rekrytering och bolagsstyrning.',
      'Implementerade en ny affärsstrategi som vände en negativ trend till rekordresultat.',
      'Effektiviserar organisationen genom digital transformation och implementering av nya affärsprocesser.',
      'Coachar och leder 7 dotterbolags-VD:ar och en ledningsgrupp.',
    ],
    relatedSkills: ['Koncernledning', 'Strategi', 'Turnaround', 'Affärsutveckling', 'Ekonomi'],
    achievements: [
      {
        type: 'bar',
        label: 'Intäktstillväxt Q3',
        value: '+95%',
        subtext: 'Jämförelse mot föregående år (Index)',
        data: [
          { label: 'Föregående år', value: 100, color: '#9CA3AF' }, // Grå för "förra"
          { label: 'Detta år', value: 195, color: '#10B981' }, // Grön för succé
        ],
      },
      {
        type: 'stat',
        label: 'Organisation',
        value: '180+',
        subtext: 'Medarbetare & Konsulter',
      },
      {
        type: 'stat',
        label: 'Dotterbolag',
        value: '7 st',
        subtext: 'Aktiva bolag i koncernen',
      },
    ],
  },
  {
    id: 'handelsconsulting',
    title: 'Managementkonsult',
    company: 'HandelsConsulting',
    location: 'Göteborg, Sverige',
    range: 'Jan 2025 - Jul 2025',
    url: 'https://handelsconsulting.se',
    summary:
      'Arbetade med strategi, kundinsikter och digital transformation. Slog säljmålen på rekordtid och erbjöds rollen som Affärsområdeschef.',
    description: [
      'Presterade som toppsäljare och blev erbjuden tjänsten som Affärsområdeschef (Business Area Manager) efter kort tid.',
      'Ansvarade för hela säljcykeln: från identifiering av nya affärsmöjligheter till kundrelationer och projektleverans.',
      'Drev projekt mot stora kunder inom tech- och datasektorn.',
      'Tilldelades bolagets hedersmedalj för värdeordet "Driv" efter att ha vunnit interna säljtävlingar.',
    ],
    relatedSkills: ['Management Consulting', 'B2B-försäljning', 'Strategi', 'Kundanalys'],
    achievements: [
      {
        type: 'progress',
        label: 'Säljmål (3 månader)',
        value: '150%',
        target: 100,
        current: 150,
        subtext: 'Målet uppnåddes på endast 5 veckor',
      },
      {
        type: 'stat',
        label: 'Utmärkelse',
        value: 'Hedersmedalj',
        subtext: 'För värdeordet "Driv"',
      },
    ],
  },
  {
    id: 'campuslyan',
    title: 'Grundande VD & CTO',
    company: 'CampusLyan',
    location: 'Göteborg, Sverige',
    range: 'Okt 2024 - Nuvarande',
    summary:
      'Leder ett ingenjörsteam på sex personer i utvecklingen av en modern bostadsplattform skräddarsydd för studenter.',
    description: [
      'Ansvarar för både den tekniska färdplanen (Technical Roadmap) och go-to-market-strategin.',
      'Kombinerar rollen som produktägare med hands-on utveckling i modern tech-stack (Next.js, Supabase).',
      'Säkerställer agil leverans från konceptfas till lansering.',
    ],
    relatedSkills: ['Produktledning', 'Systemarkitektur', 'Teamledarskap', 'Next.js'],
    achievements: [
      {
        type: 'stat',
        label: 'Team',
        value: '6',
        subtext: 'Ingenjörer & Utvecklare',
      },
      {
        type: 'stat',
        label: 'Roll',
        value: 'Grundare',
        subtext: 'VD & CTO',
      },
    ],
  },
  {
    id: 'volvo-buses',
    title: 'Platform Development Intern',
    company: 'Volvo Bussar',
    location: 'Göteborg, Sverige',
    range: 'Jun 2025 - Aug 2025',
    url: 'https://www.volvobuses.com',
    summary:
      'Arbetade inom Virtual Verification & Analysis med fokus på mjukvarukoncept för nästa generations bussplattformar.',
    description: [
      'Utvecklade applikationskoncept för visualisering av "softbuttons" i förarmiljöer med Kotlin och Java.',
      'Samarbetade i tvärfunktionella team och använde System Weaver för kravhantering och spårbarhet.',
      'Tog fram prototyper som integrerade design (Figma) med teknisk funktionalitet.',
    ],
    relatedSkills: ['Kotlin', 'Java', 'System Weaver', 'HMI-utveckling', 'C#'],
    achievements: [
      {
        type: 'stat',
        label: 'Fokus',
        value: 'R&D',
        subtext: 'Virtual Verification',
      },
    ],
  },
  {
    id: 'stunote',
    title: 'Grundare & Fullstack-utvecklare',
    company: 'StuNote',
    location: 'Göteborg, Sverige',
    range: 'Apr 2024 - Mar 2025',
    url: 'https://stunote.se',
    summary:
      'Grundade och utvecklade en EdTech-plattform med funktioner för anteckningsdelning, bokmarknad och AI-quiz.',
    description: [
      'Byggde hela arkitekturen från grunden med Next.js, TypeScript och SQL (MySQL).',
      'Implementerade AI-funktionalitet för att generera automatiska instuderingsfrågor.',
      'Belönades med Chalmers Mastercard-stipendium för innovationen.',
    ],
    relatedSkills: ['Fullstack Development', 'AI-integration', 'MySQL', 'Next.js', 'PHP'],
    achievements: [
      {
        type: 'stat',
        label: 'Utmärkelse',
        value: 'Stipendium',
        subtext: 'Chalmers Mastercard Scholarship',
      },
    ],
  },
  {
    id: 'armed-forces',
    title: 'Gruppchef Systemteknik',
    company: 'Försvarsmakten',
    location: 'Halmstad, Sverige',
    range: 'Aug 2022 - Jun 2023',
    summary:
      'Ansvarade för drift och felsökning av avancerade radiosystem under krävande förhållanden.',
    description: [
      'Ledde en teknisk grupp med ansvar för att säkra kommunikation i pressade och tidskritiska miljöer.',
      'Tilldelades hedersutmärkelse för exceptionellt "Driv" och ledarskap under tjänstgöringen.',
      'Utvecklade förmågan att fatta snabba beslut baserade på komplex information.',
    ],
    relatedSkills: ['Ledarskap', 'Teknisk felsökning', 'Krishantering', 'Radio- & Signalsystem'],
    achievements: [
      {
        type: 'stat',
        label: 'Utmärkelse',
        value: 'Hedersmedalj',
        subtext: 'Tilldelad för exceptionellt "Driv"',
      },
    ],
  },
  {
    id: 'chalmers-ta',
    title: 'Lärarassistent i matematik',
    company: 'Chalmers tekniska högskola',
    location: 'Göteborg, Sverige',
    range: 'Aug 2024 - Sep 2024',
    summary: 'Handledde studenter i matematisk problemlösning och analys.',
    description: [
      'Pedagogiskt stöd för ingenjörsstudenter i komplexa matematiska kurser.',
      'Tränade förmågan att förklara svåra koncept på ett lättförståeligt sätt.',
    ],
    relatedSkills: ['Matematik', 'Pedagogik', 'Presentationsteknik'],
  },
  {
    id: 'hemkop',
    title: 'Butiksmedarbetare',
    company: 'Hemköp',
    location: 'Göteborg, Sverige',
    range: 'Mar 2021 - Mar 2022',
    summary: 'Ansvarade för kundbemötande och kassaarbete.',
    description: [
      'Hanterade högt kundflöde och levererade service under stressiga perioder.',
      'Lärde mig grunderna i daglig drift och samarbete i arbetslag.',
    ],
    relatedSkills: ['Service', 'Teamwork', 'Problemlösning'],
  },
  {
    id: 'allakando',
    title: 'Privatlärare',
    company: 'Allakando',
    location: 'Göteborg, Sverige',
    range: 'Jan 2021 - Jun 2021',
    summary: 'Hjälpte elever att nå sina akademiska mål.',
    description: [
      'Skräddarsydde undervisning för att möta individuella elevers behov och lärstilar.',
    ],
    relatedSkills: ['Pedagogik', 'Ledarskap'],
  },
  {
    id: 'goteborgs-stad',
    title: 'Feriearbetare',
    company: 'Göteborgs Stad',
    location: 'Göteborg, Sverige',
    range: 'Jul 2020 - Aug 2020',
    summary: 'Skötsel av offentliga miljöer.',
    description: ['Ansvarade för underhåll av parker och grönområden.'],
    relatedSkills: [],
  },
  {
    id: 'havd-group',
    title: 'Praktikant Design',
    company: 'HAVD Group',
    location: 'Göteborg, Sverige',
    range: 'Apr 2017 - Apr 2017',
    summary: 'Introduktion till produktutveckling.',
    description: ['Fick insyn i designprocesser och produktionsflöden.'],
    relatedSkills: ['Design'],
  },
]
