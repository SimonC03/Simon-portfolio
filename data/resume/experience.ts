// data/resume/experience.ts
import { Experience } from '../types'

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
      'Strategiskt ansvar för sju dotterbolag och över 180 medarbetare.',
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
