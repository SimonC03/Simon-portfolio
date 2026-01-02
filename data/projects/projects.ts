// data/projects/projects.ts
import { Project } from '../types'

export const projectsData: (Project & { slug: string; fullDescription: string[] })[] = [
  {
    title: 'CampusLyan',
    slug: 'campuslyan', // Viktigt! Används för URL:en /projects/campuslyan
    description: 'Modern bostadsplattform för studenter...',
    imgSrc: '/static/images/project-campuslyan.jpg',
    href: '/projects/campuslyan',
    relatedSkills: ['next', 'ts', 'sql', 'tailwind'],
    fullDescription: [
      'CampusLyan är en plattform jag grundade för att lösa bostadskrisen för studenter.',
      'Tekniskt sett är det en Next.js-applikation med en SQL-databas som hanterar...',
      'Projektet har lärt mig massor om både fullstack-utveckling och affärsutveckling.',
    ],
    attachments: [],
  },
  // Lägg till fler projekt här...
]
