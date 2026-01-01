export interface Experience {
  title: string
  company: string
  location: string
  range: string
  url?: string
  summary: string
  description: string[]
}

export interface Education {
  school: string
  degree: string
  location: string
  year: string
  summary: string
  details?: string[]
}

export interface Certificate {
  title: string
  issuer: string
  date: string
  url?: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

// --- ARBETSLIVSERFARENHET ---
export const experienceData: Experience[] = [
  {
    title: 'President & CEO',
    company: 'HandelsFöretagen',
    location: 'Göteborg',
    range: '2023 - Nu',
    url: 'https://handels.se',
    summary: 'Leder strategiskt arbete och organisationens tillväxt.',
    description: [
      'Ansvarar för en personalstyrka på 160 personer.',
      'Leder budgetarbete och strategisk planering för 7 dotterbolag.',
      'Implementerade nya processer som ökade effektiviteten.',
    ],
  },
  {
    title: 'Senior Utvecklare',
    company: 'Tech Bolaget',
    location: 'Stockholm',
    range: '2021 - 2023',
    summary: 'Fullstack-utveckling med fokus på React.',
    description: ['Byggde skalbara mikrotjänster.', 'Mentor för juniora utvecklare.'],
  },
]

// --- UTBILDNING ---
export const educationData: Education[] = [
  {
    school: 'Chalmers Tekniska Högskola',
    degree: 'Civilingenjör i Mekatronik',
    location: 'Göteborg',
    year: '2020 - 2025',
    summary: 'Master inom AI och Maskininlärning.',
    details: ['Aktiv i studentkåren.', 'Kursansvarig för introduktionskurs i programmering.'],
  },
  {
    school: 'Handelshögskolan vid Göteborgs Universitet',
    degree: 'Kandidat i Företagsekonomi',
    location: 'Göteborg',
    year: '2021 - 2024',
    summary: 'Fokus på ekonomistyrning och strategi.',
  },
]

// --- CERTIFIKAT ---
export const certificationsData: Certificate[] = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
  },
  {
    title: 'Certified Board Member',
    issuer: 'Styrelseakademien',
    date: '2022',
  },
]

// --- FÄRDIGHETER ---
export const skillsData: SkillCategory[] = [
  {
    category: 'Programmering',
    items: ['TypeScript', 'React', 'Python', 'C++', 'SQL'],
  },
  {
    category: 'Verktyg & Plattformar',
    items: ['Git', 'Docker', 'AWS', 'Jira', 'Figma'],
  },
  {
    category: 'Språk',
    items: ['Svenska (Modersmål)', 'Engelska (Flytande)', 'Tyska (Grundläggande)'],
  },
]
