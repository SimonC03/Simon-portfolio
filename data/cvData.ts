// data/cvData.ts

export interface Experience {
  title: string
  company: string
  location: string
  range: string
  url?: string
  summary: string // Kort text för startsidan
  description: string[] // Punkter för detaljsidan
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

export const experienceData: Experience[] = [
  {
    title: 'President & CEO',
    company: 'HandelsFöretagen',
    location: 'Göteborg',
    range: '2023 - Nu',
    url: 'https://handels.se',
    summary: 'Leder strategiskt arbete och organisationens tillväxt.',
    description: [
      'Ansvarar för en personalstyrka på X personer.',
      'Leder budgetarbete och strategisk planering.',
      'Implementerade nya processer som ökade effektiviteten med 20%.',
    ],
  },
  {
    title: 'Senior Utvecklare',
    company: 'Tech Bolaget',
    location: 'Stockholm',
    range: '2021 - 2023',
    summary: 'Fullstack-utveckling med fokus på React och Node.js.',
    description: ['Byggde skalbara mikrotjänster.', 'Mentor för juniora utvecklare.'],
  },
]

export const educationData: Education[] = [
  {
    school: 'Chalmers Tekniska Högskola',
    degree: 'Civilingenjör i Mekatronik',
    location: 'Göteborg',
    year: '2020 - 2025',
    summary: 'Fokus på inbyggda system och reglerteknik.',
    details: ['Master inom AI och maskininlärning.', 'Aktiv i studentkåren.'],
  },
]

export const certificationsData: Certificate[] = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    url: '#',
  },
]
