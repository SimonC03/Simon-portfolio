// data/projects/projects.ts
import { Project } from '../../types'

export const projectsData: (Project & { slug: string; fullDescription: string[] })[] = [
  {
    title: 'CampusLyan',
    slug: 'campuslyan',
    description:
      'Student housing platform aggregating listings and queue systems to simplify the search process.',
    imgSrc: '/static/images/project-campuslyan1.png',
    href: '/projects/campuslyan',
    relatedSkills: ['next.js', 'react', 'typescript', 'sql', 'tailwind', 'ux'],
    fullDescription: [
      'CampusLyan was founded with a clear vision: to eliminate the stress associated with the student housing market. By centralizing fragmented information on housing queues and available listings, the platform creates a more transparent and secure marketplace.',
      'Technically, the solution is a modern web application built with Next.js and TypeScript. It features advanced filtering algorithms that calculate commute times to campus and match students with relevant housing based on their university.',
      'This project bridges technical complexity with business development. I managed the entire product lifecycle—from system architecture and database design to user research and go-to-market strategy.',
    ],
    attachments: [],
  },
  {
    title: 'Personal Portfolio',
    slug: 'portfolio',
    description:
      'A responsive and minimalist portfolio designed to showcase my projects and technical expertise.',
    imgSrc: '/static/images/project-personalportfolio.png', // Glöm inte att ta en screenshot på din sida!
    href: 'https://simon-portfolio-wine.vercel.app/en', // Eller länka till ditt repo om du föredrar
    relatedSkills: ['next.js', 'react', 'typescript', 'tailwind', 'ui/ux'],
    fullDescription: [
      'Designed and developed a personal brand platform to effectively display my case studies, technical skills, and professional background in a cohesive manner.',
      'Built with a strong focus on performance, accessibility, and modern UI/UX principles to ensure a seamless experience across all devices.',
      'The project serves as a smal and fun continuous playground for experimenting with new frontend technologies and design patterns',
    ],
    attachments: [],
  },
  {
    title: 'Driver Environment Enhancement - Volvo Buses',
    slug: 'volvo-buses',
    description:
      'Exploring the future of driver environments and intuitive driving experiences through innovation and user-centered design.',
    imgSrc: '/static/images/volvo-2.jpg',
    relatedSkills: ['ux-design', 'product-innovation', 'user-research', 'prototyping'],
    fullDescription: [
      'During a summer at Volvo Buses, I worked alongside my project team to explore new ways of enhancing the driver environment and creating a more intuitive experience behind the wheel.',
      'The project involved analyzing driver needs and developing solutions to make vehicle interaction both simpler and safer.',
      'The work culminated in presentations for executives as well as an open demo, where Volvo Buses employees could step into the bus and experience our solution live.',
    ],
    attachments: [
      { type: 'image', url: '/static/images/volvo-1.jpg' },
      { type: 'image', url: '/static/images/volvo-2.jpg' },
      { type: 'image', url: '/static/images/volvo-3.jpg' },
    ],
  },
  {
    title: 'StuNote',
    slug: 'stunote',
    description:
      'EdTech platform combining study material sharing with a marketplace and AI-driven tools.',
    imgSrc: '/static/images/project-stunote.png',
    relatedSkills: [
      'next.js',
      'typescript',
      'tailwind css',
      'javascript',
      'php',
      'sql',
      'appwrite',
      'ux',
      'vercel',
    ],
    fullDescription: [
      'StuNote was developed as a comprehensive solution for students – a platform integrating a marketplace for course literature with the sharing of high-quality lecture notes.',
      "To streamline exam preparation, an AI-driven feature was implemented to automatically generate quizzes and practice questions based on the student's own course material.",
      'The project received several awards and a scholarship worth 27,000 SEK. It also provided deep insights into building community-driven applications and scalable EdTech solutions (the project is currently archived).',
    ],
    attachments: [],
  },
]
