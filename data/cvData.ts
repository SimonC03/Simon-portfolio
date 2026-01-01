// data/cvData.ts

export type SkillCategory = 'Development' | 'Business' | 'Tools' | 'Languages'

// --- TYPER & INTERFACES ---

export interface Attachment {
  name: string
  url: string
  type: 'link' | 'file'
}

export interface Reference {
  name: string
  role: string
  company: string
  contact?: string
  quote?: string
  image?: string
}

// Uppdaterad för att stödja alla grafer
export type AchievementType = 'stat' | 'progress' | 'donut' | 'bar' | 'graph'

export interface Achievement {
  type: AchievementType
  label: string
  value: string | number
  subtext?: string

  // För progress/donut
  target?: number
  current?: number

  // För bar/graph
  data?: { label: string; value: number; color?: string }[]
}

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  proficiency?: number
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  range: string
  url?: string
  summary: string
  description: string[]
  relatedSkills: string[]
  achievements?: Achievement[]
  attachments?: Attachment[]
  references?: Reference[]
}

export interface Education {
  school: string
  degree: string
  location: string
  year: string
  summary: string
  details?: string[]
  relatedSkills?: string[]
  attachments?: Attachment[]
}

export interface Certificate {
  title: string
  issuer: string
  date: string
  url?: string
  relatedSkills?: string[]
  attachments?: Attachment[]
}

export interface Project {
  title: string
  description: string
  imgSrc?: string
  href?: string
  relatedSkills: string[]
  attachments?: Attachment[]
}

export interface Award {
  title: string
  organization: string
  summary?: string
}

export interface Language {
  language: string
  proficiency: string
}

// --- 1. SKILLS ---
export const SKILLS: Record<string, Skill> = {
  // Development
  react: { id: 'react', name: 'React', category: 'Development', proficiency: 5 },
  next: { id: 'next', name: 'Next.js', category: 'Development', proficiency: 5 },
  ts: { id: 'ts', name: 'TypeScript', category: 'Development', proficiency: 4 },
  js: { id: 'js', name: 'JavaScript', category: 'Development', proficiency: 5 },
  python: { id: 'python', name: 'Python', category: 'Development', proficiency: 3 },
  c: { id: 'c', name: 'C / C++', category: 'Development', proficiency: 2 },

  // ... fyll i resten av dina skills ...
  figma: { id: 'figma', name: 'Figma', category: 'Tools', proficiency: 4 },
}

export const getSkills = (ids: string[]) => ids.map((id) => SKILLS[id]).filter(Boolean)

// --- 2. ERFARENHET (DEMO AV ALLA GRAFER) ---
export const experienceData: Experience[] = [
  {
    id: 'handelsforetagen',
    title: 'President & CEO',
    company: 'HandelsFöretagen',
    location: 'Göteborg',
    range: 'Jan 2023 - Nu',
    url: 'https://handels.se',
    summary: 'Leder Nordens största studentdrivna koncern och dess tillväxtresa.',
    description: [
      'Strategiskt ansvar för 7 dotterbolag och över 180 medarbetare.',
      'Levererade starkaste Q3 någonsin med kraftig intäktstillväxt.',
    ],
    relatedSkills: ['leadership', 'strategy', 'budget', 'sales', 'analysis'],
    achievements: [
      // 1. STAT CARD (Enkel siffra)
      {
        type: 'stat',
        value: '95%',
        label: 'Intäktstillväxt',
        subtext: 'Q3 YoY (Rekordår)',
      },
      // 2. TREND GRAPH (Area chart) - Visar utveckling över tid
      {
        type: 'graph',
        label: 'Omsättningstillväxt',
        value: '+2.4M',
        subtext: 'Ackumulerad försäljning 2024 (SEK)',
        data: [
          { label: 'Jan', value: 100 },
          { label: 'Feb', value: 120 },
          { label: 'Mar', value: 180 },
          { label: 'Apr', value: 250 },
          { label: 'Maj', value: 300 },
          { label: 'Jun', value: 450 }, // Stor ökning
          { label: 'Jul', value: 480 },
        ],
      },
      // 3. BAR CHART (Staplar) - Jämför kategorier
      {
        type: 'bar',
        label: 'Resultat per Dotterbolag',
        value: 'Q3',
        subtext: 'Försäljning i TKR',
        data: [
          { label: 'Consulting', value: 850 },
          { label: 'Rekrytering', value: 620 },
          { label: 'Event', value: 450 },
          { label: 'IT', value: 300 },
        ],
      },
      // 4. STAT CARD (Personal)
      {
        type: 'stat',
        value: '180+',
        label: 'Anställda',
        subtext: 'Total personalstyrka i koncernen',
      },
    ],
    attachments: [
      { name: 'Årsredovisning 2024.pdf', url: '#', type: 'file' },
      { name: 'Artikel i Dagens Industri', url: 'https://di.se', type: 'link' },
    ],
    references: [
      {
        name: 'Anna Andersson',
        role: 'Styrelseordförande',
        company: 'HandelsFöretagen',
        quote:
          'Simon är en visionär ledare som transformerade vår säljprocess och ökade lönsamheten markant.',
        contact: 'anna.andersson@example.com',
      },
    ],
  },
  {
    id: 'handelsconsulting',
    title: 'Management Consultant',
    company: 'HandelsConsulting',
    location: 'Göteborg',
    range: 'Jan 2025 - Jul 2025',
    summary: 'Fokus på strategi, kundinsikter och digital transformation.',
    description: [
      'Arbetade med organisationsutveckling för stora företag.',
      'Överträffade säljmål snabbt och erbjöds roll som Business Area Manager.',
    ],
    relatedSkills: ['strategy', 'sales', 'analysis', 'leadership'],
    achievements: [
      // 5. PROGRESS BAR (Måluppfyllelse)
      {
        type: 'progress',
        label: 'Säljmål Q1',
        value: '150%',
        current: 150000,
        target: 100000,
        subtext: '150tkr av 100tkr mål på 5 veckor',
      },
      // 6. DONUT CHART (Cirkel)
      {
        type: 'donut',
        label: 'Debiteringsgrad',
        value: '85%',
        current: 85,
        target: 100,
        subtext: 'Snitt under perioden',
      },
      {
        type: 'stat',
        value: 'BAM',
        label: 'Befordran',
        subtext: 'Erbjuden Business Area Manager',
      },
    ],
    references: [
      {
        name: 'Johan Svensson',
        role: 'Senior Partner',
        company: 'HandelsConsulting',
        quote: 'En av de skarpaste konsulterna vi haft. Levererar alltid över förväntan.',
        contact: 'johan@handelsconsulting.se',
      },
    ],
  },
  {
    id: 'campuslyan',
    title: 'Founding CEO/CTO',
    company: 'CampusLyan',
    location: 'Göteborg',
    range: 'Okt 2025 - Nu',
    summary: 'Leder ett ingenjörsteam som utvecklar en modern plattform för studentbostäder.',
    description: [
      'Leder ett team på sex personer inom produktutveckling.',
      'Ansvarar för teknisk arkitektur och affärsstrategi.',
    ],
    relatedSkills: ['leadership', 'strategy', 'next', 'ts', 'figma'],
    achievements: [
      {
        type: 'stat',
        value: '6',
        label: 'Ingenjörer',
        subtext: 'Storlek på utvecklingsteamet',
      },
      // Trend för användare
      {
        type: 'graph',
        label: 'Användartillväxt',
        value: '2.5k',
        subtext: 'Aktiva studenter på plattformen',
        data: [
          { label: 'Okt', value: 100 },
          { label: 'Nov', value: 800 },
          { label: 'Dec', value: 1500 },
          { label: 'Jan', value: 2500 },
        ],
      },
    ],
  },
  {
    id: 'volvo',
    title: 'Platform Development Internship',
    company: 'Volvo Buses',
    location: 'Göteborg',
    range: 'Jun 2025 - Aug 2025',
    summary: 'Arbetade med virtuell verifiering och apputveckling för nästa generations bussar.',
    description: [
      'Utvecklade visualiseringskoncept för "softbuttons".',
      'Teknisk stack inkluderade Kotlin, Java, Python och System Weaver.',
    ],
    relatedSkills: ['kotlin', 'java', 'python', 'figma', 'systemweaver'],
    achievements: [
      {
        type: 'stat',
        value: '2',
        label: 'Prototyper',
        subtext: 'Levererade koncept för förarmiljö',
      },
    ],
  },
  {
    id: 'stunote',
    title: 'Founder & Fullstack Developer',
    company: 'StuNote',
    location: 'Göteborg',
    range: 'Apr 2024 - Mar 2025',
    summary: 'Grundade en innovativ plattform för studiematerial och AI-quiz.',
    description: [
      'Byggde en marknadsplats för begagnad kurslitteratur och studiemedel.',
      'Utvecklade hela tech-stacken i Next.js, TypeScript och MySQL.',
    ],
    relatedSkills: ['next', 'ts', 'js', 'sql', 'php', 'tailwind', 'figma'],
    achievements: [
      // Stapeldiagram för tech-stack fördelning (bara som exempel)
      {
        type: 'bar',
        label: 'Codebase Distribution',
        value: '20k+',
        subtext: 'Rader kod',
        data: [
          { label: 'TS/JS', value: 12000 },
          { label: 'SQL', value: 3000 },
          { label: 'CSS', value: 5000 },
        ],
      },
    ],
  },
  {
    id: 'forsvarsmakten',
    title: 'System Technician Group Leader',
    company: 'Försvarsmakten',
    location: 'Sverige',
    range: 'Aug 2022 - Jun 2023',
    summary: 'Specialist på radiosystem och teknisk drift.',
    description: [
      'Ansvarade för felsökning och prestandaoptimering av kommunikationssystem.',
      'Ledde tekniska operationer i fält.',
    ],
    relatedSkills: ['leadership', 'analysis'],
    achievements: [
      {
        type: 'stat',
        value: '100%',
        label: 'Drifttid',
        subtext: 'Under kritiska övningar',
      },
    ],
  },
]

// --- 3. PROJEKT ---
export const projectsData: Project[] = [
  {
    title: 'StuNote Platform',
    description:
      'En fullskalig plattform för studenter med marknadsplats för böcker och AI-genererade quiz för tentaplugget.',
    imgSrc: '/static/images/project-stunote.jpg',
    href: '#',
    relatedSkills: ['next', 'ts', 'sql', 'tailwind'],
  },
  {
    title: 'CampusLyan',
    description:
      'Modern bostadsplattform för studenter. Leder utvecklingen av både frontend och backend.',
    imgSrc: '/static/images/project-campuslyan.jpg',
    href: '#',
    relatedSkills: ['react', 'figma', 'strategy'],
  },
  {
    title: 'Simon Portfolio',
    description: 'Min personliga portföljsida byggd med Next.js, Contentlayer och Tailwind CSS.',
    imgSrc: '/static/images/twitter-card.png',
    href: 'https://github.com/SimonC03/Simon-portfolio',
    relatedSkills: ['next', 'ts', 'tailwind'],
  },
]

// --- 4. UTBILDNING ---
export const educationData: Education[] = [
  {
    school: 'Chalmers Tekniska Högskola',
    degree: 'BSc Mechatronics & Automation Engineering',
    location: 'Göteborg',
    year: '2023 - 2026',
    summary: 'Fokus på systemteknik, C/C++ programmering och reglerteknik.',
    details: [
      'Expertis inom CAD-modellering (CATIA V5) och PLC-programmering.',
      'Medlem i Chalmers Börssällskap och Chalmers AI Society.',
    ],
    relatedSkills: ['c', 'catia', 'matlab', 'python'],
    attachments: [{ name: 'Betygsutdrag.pdf', url: '#', type: 'file' }],
  },
  {
    school: 'Handelshögskolan vid Göteborgs Universitet',
    degree: 'Kandidat i Företagsekonomi',
    location: 'Göteborg',
    year: 'Pågående',
    summary: 'Dubbel examen med fokus på strategi och ekonomi.',
    relatedSkills: ['strategy', 'analysis', 'budget'],
  },
]

// --- 5. CERTIFIKAT & LICENSER ---
export const certificationsData: Certificate[] = [
  {
    title: 'Certified Board Member',
    issuer: 'Styrelseakademien',
    date: '2023',
    relatedSkills: ['leadership', 'strategy'],
  },
  {
    title: 'Skyddsvaktsbevis',
    issuer: 'Försvarsmakten',
    date: '2022',
    relatedSkills: ['leadership'],
  },
  {
    title: 'Heta Arbeten',
    issuer: 'Brandskyddsföreningen',
    date: '2022',
  },
  {
    title: 'Körkort B + AM',
    issuer: 'Transportstyrelsen',
    date: '',
  },
]

// --- 6. UTMÄRKELSER & FÖRENINGAR ---
export const awardsData: Award[] = [
  {
    title: 'Nova Member',
    organization: 'Nova Talent',
    summary: 'Top 3% Talent. Utvald medlem i globalt talangnätverk.',
  },
  {
    title: 'Styrelseledamot & Medlem',
    organization: 'Chalmers Börssällskap (CBS)',
  },
  {
    title: 'Medlem',
    organization: 'Unga Aktiesparare',
  },
  {
    title: 'Medlem',
    organization: 'Chalmers AI Society',
  },
]

// --- 7. SPRÅK ---
export const languagesData: Language[] = [
  { language: 'Svenska', proficiency: 'Modersmål' },
  { language: 'Engelska', proficiency: 'Flytande' },
  { language: 'Franska', proficiency: 'Grundläggande' },
]

// --- 8. FÄRDIGHETER (För "Om mig"-sidan) ---
export const skillsData = [
  {
    category: 'Programmering',
    items: ['TypeScript', 'React', 'Next.js', 'Python', 'C/C++', 'SQL', 'Kotlin', 'Java', 'PHP'],
  },
  {
    category: 'Verktyg & Design',
    items: ['Git', 'Figma', 'Canva', 'CATIA V5', 'MATLAB', 'System Weaver'],
  },
]
