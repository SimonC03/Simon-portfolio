// data/cvData.ts

export type SkillCategory = 'Development' | 'Business' | 'Tools' | 'Languages' | 'Engineering'

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

export type AchievementType = 'stat' | 'progress' | 'donut' | 'bar' | 'graph'

export interface Achievement {
  type: AchievementType
  label: string
  value: string | number
  subtext?: string
  target?: number
  current?: number
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

// --- UTBILDNINGSDATA ---

export interface Course {
  name: string
  code?: string
  credits?: string // t.ex. "7.5 hp"
  grade?: string // Valfritt betyg (t.ex. "VG", "5")
}

export interface Education {
  school: string
  degree: string
  location: string
  year: string
  summary: string
  details?: string[] // "Höjdpunkter"
  courses?: Course[] // Lista med kurser
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

export interface Membership {
  organization: string
  role?: string
  summary?: string
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

// --- 1. SKILLS (Baserat på CV & LinkedIn) ---
export const SKILLS: Record<string, Skill> = {
  // Development
  next: { id: 'next', name: 'Next.js', category: 'Development', proficiency: 4 },
  react: { id: 'react', name: 'React', category: 'Development', proficiency: 3 },
  ts: { id: 'ts', name: 'TypeScript', category: 'Development', proficiency: 3 },
  js: { id: 'js', name: 'JavaScript', category: 'Development', proficiency: 4 },
  python: { id: 'python', name: 'Python', category: 'Development', proficiency: 4 },
  kotlin: { id: 'kotlin', name: 'Kotlin', category: 'Development', proficiency: 3 },
  java: { id: 'java', name: 'Java', category: 'Development', proficiency: 3 },
  sql: { id: 'sql', name: 'SQL (Postgre/MySQL)', category: 'Development', proficiency: 3 },
  c: { id: 'c', name: 'C / C++', category: 'Development', proficiency: 4 },
  php: { id: 'php', name: 'PHP', category: 'Development', proficiency: 3 },
  tailwind: { id: 'tailwind', name: 'Tailwind CSS', category: 'Development', proficiency: 3 },

  // Engineering & Tools
  catia: { id: 'catia', name: 'CATIA V5', category: 'Engineering', proficiency: 5 },
  matlab: { id: 'matlab', name: 'MATLAB', category: 'Engineering', proficiency: 3 },
  figma: { id: 'figma', name: 'Figma / Canva', category: 'Tools', proficiency: 3 },
  git: { id: 'git', name: 'Git', category: 'Tools', proficiency: 3 },
  systemweaver: { id: 'systemweaver', name: 'System Weaver', category: 'Tools', proficiency: 2 },

  // Business
  strategy: { id: 'strategy', name: 'Strategi', category: 'Business', proficiency: 4 },
  leadership: { id: 'leadership', name: 'Ledarskap', category: 'Business', proficiency: 4 },
  sales: { id: 'sales', name: 'Försäljning', category: 'Business', proficiency: 4 },
  budget: { id: 'budget', name: 'Budgetansvar', category: 'Business', proficiency: 4 },
  analysis: { id: 'analysis', name: 'Analys', category: 'Business', proficiency: 4 },
  management: { id: 'management', name: 'Management', category: 'Business', proficiency: 4 },
}

export const getSkills = (ids: string[]) => ids.map((id) => SKILLS[id]).filter(Boolean)

// --- 2. ERFARENHET (Uppdaterad från LinkedIn/CV) ---
export const experienceData: Experience[] = [
  {
    id: 'handelsforetagen',
    title: 'President & CEO',
    company: 'Handels Företagen',
    location: 'Göteborg',
    range: 'Maj 2025 - Nu',
    url: 'https://handels.se',
    summary:
      'Leder Nordens största studentdrivna bolagskoncern med fokus på juridik, ekonomi och marknadsföring.',
    description: [
      'Strategiskt ansvar för sju dotterbolag och över 160 medarbetare.',
      'Levererade koncernens starkaste Q3 någonsin med 95% intäktstillväxt YoY.',
      'Ansvarig för tvärbolagligt samarbete och långsiktig tillväxt.',
    ],
    relatedSkills: ['leadership', 'strategy', 'management', 'budget', 'analysis'],
    achievements: [
      {
        type: 'stat',
        value: '95%',
        label: 'Intäktstillväxt',
        subtext: 'Bästa Q3 någonsin',
      },
      {
        type: 'stat',
        value: '160+',
        label: 'Medarbetare',
        subtext: 'Under mitt ledarskap',
      },
    ],
  },
  {
    id: 'campuslyan',
    title: 'Founding CEO/CTO',
    company: 'CampusLyan',
    location: 'Göteborg',
    range: 'Okt 2026 - Nu',
    summary: 'Grundare och teknisk ledare för en modern plattform för studentbostäder.',
    description: [
      'Leder ett ingenjörsteam på sex personer genom produktutvecklingen.',
      'Ansvarig för teknisk arkitektur och affärsstrategi.',
    ],
    relatedSkills: ['next', 'ts', 'leadership', 'strategy', 'figma'],
  },
  {
    id: 'volvo',
    title: 'Platform Development Internship',
    company: 'Volvo Buses',
    location: 'Göteborg',
    range: 'Jun 2025 - Aug 2025',
    summary: 'Arbetade med virtuell verifiering och apputveckling för framtida bussplattformar.',
    description: [
      'Utvecklade visualiseringskoncept för "softbuttons" i nästa generations förarmiljö.',
      'Teknisk stack inkluderade Kotlin, Java, Python, Figma och System Weaver.',
    ],
    relatedSkills: ['kotlin', 'java', 'python', 'systemweaver', 'c', 'figma'],
  },
  {
    id: 'handelsconsulting',
    title: 'Management Consultant',
    company: 'HandelsConsulting',
    location: 'Göteborg',
    range: 'Jan 2025 - Jul 2025',
    summary:
      'Fokus på strategi, kundinsikter, operativ ledning och digital transformation för stora företag.',
    description: [
      'Överträffade försäljningsmålet på 3 månader med 150% inom mina första fem veckor.',
      'Erbjuden roll som Business Area Manager efter exceptionella resultat.',
    ],
    relatedSkills: ['strategy', 'sales', 'analysis', 'management', 'leadership'],
  },
  {
    id: 'stunote',
    title: 'Founder & Fullstack Developer',
    company: 'StuNote',
    location: 'Göteborg',
    range: 'Apr 2024 - Mar 2025',
    summary: 'Innovativ plattform för studiematerial, marknadsplats för böcker och AI-quiz.',
    description: [
      'Fullstack-utveckling i Next.js, TypeScript, MySQL, PHP och TailwindCSS.',
      'Design och användarupplevelse utvecklad i Figma.',
    ],
    relatedSkills: ['next', 'ts', 'sql', 'php', 'tailwind', 'figma'],
  },
  {
    id: 'forsvarsmakten',
    title: 'System Technician Group Leader',
    company: 'Försvarsmakten',
    location: 'Halmstad / Sverige',
    range: 'Aug 2022 - Jun 2023',
    summary: 'Specialist på radiosystem och ansvarig för teknisk drift och kommunikation.',
    description: [
      'Ansvarade för felsökning och prestandaoptimering av kommunikationssystem.',
      'Ledde tekniska operationer och personal i krävande miljöer.',
    ],
    relatedSkills: ['leadership', 'analysis'],
  },
]

// --- 3. PROJEKT (Baserat på portfölj & LinkedIn) ---
export const projectsData: Project[] = [
  {
    title: 'CampusLyan', // Måste matcha titeln i din .mdx fil
    description: 'Modern bostadsplattform för studenter...',
    imgSrc: '/static/images/project-campuslyan.jpg',
    // VIKTIGT: Peka på din interna sida nu, inte externa länkar
    href: '/projects/campuslyan',
    relatedSkills: ['next', 'ts', 'sql', 'tailwind'],
  },
  // ... andra projekt
]

// --- 4. UTBILDNING (Dubbel examen) ---
export const educationData: Education[] = [
  {
    school: 'Handelshögskolan vid Göteborgs Universitet',
    degree: 'BSc Business Administration',
    location: 'Göteborg',
    year: '2024 - 2027',
    summary: 'Jag har byggt en stark grund inom organisatoriskt ledarskap och ekonomi...',
    details: ['Stipendium för bästa uppsats', 'Studentrepresentant i programrådet'],
    courses: [
      { name: 'Extern Redovisning', code: 'FEK101', credits: '7.5 hp', grade: 'VG' },
      { name: 'Organisatoriskt Ledarskap', code: 'FEK102', credits: '7.5 hp', grade: 'VG' },
      { name: 'Marknadsföring', code: 'FEK103', credits: '7.5 hp', grade: 'G' },
      { name: 'Finansiell Styrning', code: 'FEK201', credits: '15 hp', grade: 'VG' },
    ],
    relatedSkills: ['strategy', 'analysis', 'budget', 'management'],
  },
  {
    school: 'Chalmers Tekniska Högskola',
    degree: 'BSc Mechatronics & Automation Engineering',
    location: 'Göteborg',
    year: '2023 - 2026',
    summary: 'Jag har byggt upp kompetens inom systemteknik, programmering i C/C++...',
    details: ['Expertis inom CAD-modellering (CATIA V5).', 'Aktiv medlem i Chalmers AI Society.'],
    courses: [
      { name: 'Mekatronik grundkurs', credits: '7.5 hp', grade: '5' },
      { name: 'Linjär Algebra', credits: '7.5 hp', grade: '4' },
      { name: 'Programmering i C', credits: '7.5 hp', grade: '5' },
    ],
    relatedSkills: ['c', 'catia', 'matlab', 'python'],
  },
]

// --- 5. CERTIFIKAT & LICENSER ---
export const certificationsData: Certificate[] = [
  {
    title: 'McKinsey Forward Program',
    issuer: 'McKinsey & Company',
    date: '2024',
    relatedSkills: ['leadership', 'strategy'],
  },
  {
    title: 'Skyddsvaktsbevis',
    issuer: 'Försvarsmakten',
    date: '2022',
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
    title: 'Adlerbertska Stiftelsernas Stipendium',
    organization: 'Chalmers Tekniska Högskola',
    summary: 'Tilldelad stipendium 2024 och 2025 för goda studieresultat.',
  },
  {
    title: 'Hedersmedalj - Värdeordet "Driv"',
    organization: 'Handels Consulting',
    summary: 'Erkännande för exceptionellt driv och engagemang internt.',
  },
  {
    title: 'Bästa Uppsats (Exempel)',
    organization: 'Handelshögskolan',
    summary: 'Belönad för kandidatuppsats inom organisation.',
  },
]

// --- 7. FÖRENINGAR & NÄTVERK (Ny kategori) ---
export const membershipsData: Award[] = [
  {
    title: 'Nova Member',
    organization: 'Nova Talent',
    summary: 'Utvald medlem i globalt talangnätverk (Top 3% Talent).',
  },
  {
    title: 'Chalmers AI Society',
    organization: 'Chalmers',
    summary: 'Aktiv medlem med fokus på maskininlärning och etik.',
  },
  {
    title: 'Aktiespararna',
    organization: 'Ungdom',
    summary: 'Medlem och aktiv deltagare i event.',
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
    items: ['TypeScript', 'React', 'Next.js', 'Python', 'C/C++', 'SQL', 'Kotlin', 'Java'],
  },
  {
    category: 'Teknik & Design',
    items: ['CATIA V5', 'MATLAB', 'Figma', 'System Weaver', 'Git', 'Tailwind CSS'],
  },
  {
    category: 'Affär & Ledarskap',
    items: ['Strategi', 'Management', 'Ledarskap', 'Försäljning', 'Budgetansvar', 'Analys'],
  },
]
export const referencesData: Reference[] = [
  {
    name: 'Anna Andersson', // Byt ut mot riktiga namn
    role: 'Senior Project Manager',
    company: 'Volvo Buses',
    quote:
      'Simon visade ett otroligt driv under sin tid hos oss. Han satte sig snabbt in i komplexa system och levererade över förväntan. Jag kan varmt rekommendera honom för framtida uppdrag.',
  },
  {
    name: 'Johan Johansson',
    role: 'VD',
    company: 'HandelsConsulting',
    quote:
      'En av de mest talangfulla konsulter jag arbetat med. Simon kombinerar teknisk förståelse med affärsnytta på ett unikt sätt.',
  },
  {
    name: 'Maria Svensson',
    role: 'Kursansvarig',
    company: 'Chalmers Tekniska Högskola',
    quote: 'Simon var en ledande figur i projektarbetet och visade stor mognad i sitt ledarskap.',
  },
]
