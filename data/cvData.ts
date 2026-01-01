// data/cvData.ts

export type SkillCategory = 'Development' | 'Business' | 'Tools' | 'Languages'

export interface Skill {
  id: string
  name: string
  category: SkillCategory
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
}

export interface Education {
  school: string
  degree: string
  location: string
  year: string
  summary: string
  details?: string[]
  relatedSkills?: string[]
}

export interface Certificate {
  title: string
  issuer: string
  date: string
  url?: string
  relatedSkills?: string[]
}

export interface Project {
  title: string
  description: string
  imgSrc?: string
  href?: string
  relatedSkills: string[]
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
  react: { id: 'react', name: 'React', category: 'Development' },
  next: { id: 'next', name: 'Next.js', category: 'Development' },
  ts: { id: 'ts', name: 'TypeScript', category: 'Development' },
  js: { id: 'js', name: 'JavaScript', category: 'Development' },
  python: { id: 'python', name: 'Python', category: 'Development' },
  c: { id: 'c', name: 'C / C++', category: 'Development' },
  kotlin: { id: 'kotlin', name: 'Kotlin', category: 'Development' },
  java: { id: 'java', name: 'Java', category: 'Development' },
  sql: { id: 'sql', name: 'SQL', category: 'Development' },
  php: { id: 'php', name: 'PHP', category: 'Development' },
  matlab: { id: 'matlab', name: 'MATLAB', category: 'Development' },
  tailwind: { id: 'tailwind', name: 'Tailwind CSS', category: 'Development' },

  // Tools
  git: { id: 'git', name: 'Git', category: 'Tools' },
  figma: { id: 'figma', name: 'Figma', category: 'Tools' },
  catia: { id: 'catia', name: 'CATIA V5', category: 'Tools' },
  systemweaver: { id: 'systemweaver', name: 'System Weaver', category: 'Tools' },

  // Business
  strategy: { id: 'strategy', name: 'Strategi', category: 'Business' },
  leadership: { id: 'leadership', name: 'Ledarskap', category: 'Business' },
  sales: { id: 'sales', name: 'Försäljning', category: 'Business' },
  budget: { id: 'budget', name: 'Budgetansvar', category: 'Business' },
  analysis: { id: 'analysis', name: 'Analys', category: 'Business' },
}

export const getSkills = (ids: string[]) => ids.map((id) => SKILLS[id]).filter(Boolean)

// --- 2. ERFARENHET ---
export const experienceData: Experience[] = [
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
  },
  {
    id: 'handelsforetagen',
    title: 'President & CEO',
    company: 'HandelsFöretagen',
    location: 'Göteborg',
    range: 'Jan 2023 - Nu',
    url: 'https://handels.se',
    summary: 'Leder Nordens största studentdrivna koncern och dess tillväxtresa.',
    description: [
      'Levererade starkaste Q3 någonsin med 95% intäktstillväxt.',
      'Ansvarar för en organisation med över 160 medarbetare.',
      'Strategisk planering för 7 dotterbolag som levererar tjänster till ledande svenska företag.',
    ],
    relatedSkills: ['leadership', 'strategy', 'budget', 'sales', 'analysis'],
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
  },
  {
    id: 'handelsconsulting',
    title: 'Management Consultant',
    company: 'HandelsConsulting',
    location: 'Göteborg',
    range: 'Jan 2025 - Jul 2025',
    summary: 'Fokus på strategi, kundinsikter och digital transformation.',
    description: [
      'Befordrad efter att ha överträffat säljmålet med 150% på 5 veckor.',
      'Arbetade med organisationsutveckling för stora företag.',
      'Fick erbjudande om rollen som Business Area Manager.',
    ],
    relatedSkills: ['strategy', 'sales', 'analysis', 'leadership'],
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

// --- 6. UTMÄRKELSER & FÖRENINGAR (Ny) ---
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

// --- 7. SPRÅK (Ny) ---
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
