// data/projects/projects.ts
import { Project } from '../../types'

export const projectsData: (Project & { slug: string; fullDescription: string[] })[] = [
  {
    title: 'CampusLyan',
    slug: 'campuslyan', // Important! Used for the URL /projects/campuslyan
    description: 'Modern housing platform for students...',
    imgSrc: '/static/images/project-campuslyan.jpg',
    href: '/projects/campuslyan',
    relatedSkills: ['next', 'ts', 'sql', 'tailwind'],
    fullDescription: [
      'CampusLyan is a platform I founded to solve the student housing crisis.',
      'Technically, it is a Next.js application with a SQL database handling...',
      'The project has taught me a lot about both full-stack development and business development.',
    ],
    attachments: [],
  },
  // Add more projects here...
]
