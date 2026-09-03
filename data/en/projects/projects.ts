// data/projects/projects.ts
import { Project } from '../../types'

export const projectsData: (Project & { slug: string; fullDescription: string[] })[] = [
  {
    title: 'Vehicle Dynamics Simulator for ECU Testing',
    slug: 'volvo-buses-ecu-validation',
    description:
      'CAN-based vehicle simulation tool that generates DBC-defined CAN signals for ECU validation in Volvo Buses test rigs, enabling shift-left verification of bus software.',
    imgSrc: '/static/images/volvo-buses-thesis.jpg',
    href: '/projects/volvo-buses-ecu-validation',
    relatedSkills: [
      'python',
      'python-can',
      'can',
      'dbc',
      'vector-canalyzer',
      'canoe',
      'hil',
      'vehicle-dynamics',
      'simulation',
      'software-testing',
    ],
    fullDescription: [
      'In my bachelor thesis at Volvo Buses, conducted in collaboration with Chalmers University of Technology, I developed a CAN-based vehicle simulation tool for early verification of vehicle behaviour in a laboratory and HIL environment.',
      'The project resulted in a functional prototype combining a software-based vehicle model, a real-time graphical user interface and a CAN communication module. The vehicle model simulates key states such as velocity, acceleration, orientation, gear selection, engine speed, steering behaviour and wheel-related variables.',
      'Simulated vehicle signals were mapped to DBC-defined CAN messages, encoded with python-can and transmitted through a Vector-based CAN interface into the ECUs of an existing test rig. The signal chain was verified both in virtual CAN testing and in a physical HIL/test rig environment, where the generated signals could be observed and analysed in CANalyzer.',
      'The architecture is modular: the driveline is modelled component by component and can be extended with features such as automatic transmission, closed-loop cruise control and a 6-DOF vehicle model. The setup also supports real-time simulation and map-based visualisation for interactive scenario testing.',
      'By shifting verification from proving grounds to the lab, the approach supports shift-left testing: faster feedback loops, repeatable test cases and earlier detection of issues, while reducing the time, cost and resources required for field testing.',
      'After the thesis, the work was extended into a full-time role in May–June 2026, where Vector CANoe was integrated into a larger test environment and advanced tests were developed for safety systems such as AEBS.',
    ],
    attachments: [],
  },
  {
    title: 'AI Agent Infrastructure & Energy Forecasting – Volvo Buses',
    slug: 'volvo-buses-ai-agents',
    description:
      'MCP servers, an AI agent browser extension and machine learning models forecasting bus energy consumption, built as an Applied AI & Machine Learning intern at Volvo Buses.',
    href: '/projects/volvo-buses-ai-agents',
    relatedSkills: ['python', 'machine-learning', 'time-series', 'mcp', 'ai-agents'],
    fullDescription: [
      "During the summer of 2026 I worked as an Applied AI & Machine Learning intern at Volvo Buses, contributing to the company's AI infrastructure and agent-based workflows.",
      'I built MCP (Model Context Protocol) servers and AI tooling that integrate internal Volvo systems with agent-based workflows, making internal data and functionality available to AI agents in a structured way.',
      'In parallel I developed machine learning models on large-scale bus time-series data to forecast energy and power consumption.',
      "I also contributed to Volvo Buses' AI infrastructure through a browser-based AI agent extension for internal applications. After the summer I was offered a continued position within the AI, machine learning and agent infrastructure area.",
    ],
    attachments: [],
  },
  {
    title: 'CampusLyan',
    slug: 'campuslyan',
    description:
      "Sweden's student housing platform, aggregating listings and queue systems to simplify the search for student housing.",
    imgSrc: '/static/images/project-campuslyan1.png',
    href: 'https://www.campuslyan.se/',
    relatedSkills: [
      'next.js',
      'react',
      'typescript',
      'java',
      'rest-apis',
      'docker',
      'gcp',
      'sql',
      'tailwind',
      'ux',
    ],
    fullDescription: [
      'CampusLyan was founded with a clear vision: to eliminate the stress associated with the student housing market. By centralizing fragmented information on housing queues and available listings, the platform creates a more transparent and secure marketplace.',
      "In autumn 2025 the company was incorporated as CampusLyan Nordics AB. Before launch we secured pilot agreements that created financing runway for several years, and signed agreements with one of Sweden's largest student housing companies as well as several municipal housing companies.",
      'Technically, the solution is a modern web application built with Next.js, React and TypeScript together with Java, REST APIs and Docker, deployed on Google Cloud Platform. It features advanced filtering that calculates commute times to campus and matches students with relevant housing based on their university.',
      'This project bridges technical complexity with business development. As CEO and CTO I manage the entire product lifecycle, from system architecture and database design to user research and go-to-market strategy.',
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
      { name: 'image-1', type: 'image', url: '/static/images/volvo-1.jpg' },
      { name: 'image-2', type: 'image', url: '/static/images/volvo-2.jpg' },
      { name: 'image-3', type: 'image', url: '/static/images/volvo-3.jpg' },
    ],
  },
  {
    title: 'Personal Portfolio',
    slug: 'portfolio',
    description:
      'A responsive, bilingual portfolio built with Next.js to showcase my projects, experience and technical expertise.',
    imgSrc: '/static/images/project-personalportfolio.png',
    href: 'https://github.com/SimonC03/Simon-portfolio',
    relatedSkills: ['next.js', 'react', 'typescript', 'tailwind', 'next-intl', 'ui/ux'],
    fullDescription: [
      'Designed and developed a personal brand platform to display my case studies, technical skills and professional background in a cohesive way, in both Swedish and English.',
      'Built with a strong focus on performance, accessibility and modern UI/UX principles to ensure a seamless experience across all devices.',
      'The project serves as a small and fun continuous playground for experimenting with new frontend technologies and design patterns. The source code is available on GitHub.',
    ],
    attachments: [],
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
