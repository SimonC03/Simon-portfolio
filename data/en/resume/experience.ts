import { Experience } from '../../types'

export const experienceData: Experience[] = [
  {
    id: 'handelsforetagen',
    title: 'President & CEO',
    company: 'HandelsFöretagen',
    location: 'Gothenburg, Sweden',
    range: 'Aug 2025 - Present',
    url: 'https://handelsforetagen.se',
    summary:
      'Accountable for the strategic leadership and operational development of the Nordics’ largest student-run corporate group. By steering six independent subsidiaries through their respective CEOs and management teams, I focus on optimizing group-wide synergies, ensuring financial sustainability, and institutionalizing professional business processes for over 180 employees.',
    description: [
      'Orchestrate and coach six subsidiary CEOs and their management teams to ensure operational alignment, high service delivery, and the attainment of group-wide objectives.',
      'Developed and implemented a data-driven growth framework that consolidated performance metrics across all entities to drive informed decision-making.',
      'Executed a strategic cost-optimization program by eliminating redundant SaaS and operational systems, reducing system costs by approximately 60% and significantly strengthening margins.',
      'Lead the group’s digital transformation strategy, including the modernization of infrastructure to support scalable growth and enhance cross-functional collaboration.',
      'Define long-term sustainable growth strategies, balancing aggressive market expansion with financial stability and organizational health.',
      'Delivered the strongest Q3 financial performance in the organization’s history during my first quarter in the role (Q3-2025).',
    ],
    relatedSkills: [
      'Group Management',
      'Strategic Planning',
      'Cost Optimization',
      'Executive Coaching',
      'Business Analytics',
      'Financial Governance',
    ],
    achievements: [
      /*
      {
        type: 'bar', // Visualiserar den stora ökningen mot föregående år
        label: 'Revenue Growth Q3',
        value: '+95%',
        subtext: 'Year-over-year revenue index comparison',
        data: [
          { label: 'Previous Year', value: 100 },
          { label: 'Current Year', value: 195 },
        ],
      },
      {
        type: 'donut', // Visualiserar kostnadsbesparingen
        label: 'System Cost Reduction',
        value: '60%',
        current: 60,
        subtext: 'Elimination of redundant software and infrastructure',
      },
      {
        type: 'graph', // Visar på den stabila trenden i prestation
        label: 'Performance Trend',
        value: 'Record High',
        subtext: 'Consolidated quarterly performance index',
        data: [
          { label: 'Q4-24', value: 92 },
          { label: 'Q1-25', value: 98 },
          { label: 'Q2-25', value: 115 },
          { label: 'Q3-25', value: 195 },
        ],
      },
      {
        type: 'stat', // Enkel och tydlig storlek på bolaget
        label: 'Group Scale',
        value: '180+',
        subtext: 'Professionals & Consultants across 7 subsidiaries',
      },
      {
        type: 'progress', // Visar att du jobbar mot ett mål med dotterbolagen
        label: 'Sub-Org Optimization',
        value: '7 / 7',
        current: 7,
        target: 7,
        subtext: 'Subsidiaries successfully transitioned to new growth strategy',
      },*/
    ],
  },
  {
    id: 'campuslyan',
    title: 'Founding CEO & CTO',
    company: 'CampusLyan',
    location: 'Gothenburg, Sweden',
    range: 'Oct 2025 - Present',
    summary:
      'Leading an engineering team of ten in developing a modern housing platform tailored for students.',
    description: [
      'Responsible for both the Technical Roadmap and the Go-to-Market strategy.',
      'Combining the role of Product Owner with hands-on development in a modern tech stack (Next.js).',
      'Ensuring agile delivery from concept phase to launch.',
    ],
    relatedSkills: ['Product Management', 'System Architecture', 'Team Leadership', 'Next.js'],
    achievements: [],
  },
  {
    id: 'volvo-buses',
    title: 'Platform Development Intern',
    company: 'Volvo Buses',
    location: 'Gothenburg, Sweden',
    range: 'Jun 2025 - Aug 2025',
    url: 'https://www.volvobuses.com',
    summary:
      'Worked within Virtual Verification & Analysis focusing on software concepts for next-generation bus platforms.',
    description: [
      'Developed application concepts for visualizing "softbuttons" in driver environments using Kotlin and Java.',
      'Created prototypes integrating design (Figma) with technical functionality.',
    ],
    relatedSkills: ['Kotlin', 'Java', 'HMI Development', 'C#'],
    achievements: [],
  },
  {
    id: 'handelsconsulting',
    title: 'Management Consultant',
    company: 'HandelsConsulting',
    location: 'Gothenburg, Sweden',
    range: 'Jan 2025 - Jul 2025',
    url: 'https://handelsconsulting.se',
    summary:
      'Worked with strategy, customer insights, and digital transformation. Smashed sales targets in record time and was offered the position of Business Area Manager.',
    description: [
      'Performed as a top seller and was quickly promoted, receiving an offer for Business Area Manager.',
      'Managed the full sales cycle: from identifying new business opportunities to client relations and project delivery.',
      'Drove projects for large clients within the tech and data sectors.',
      'Awarded the company Medal of Honor for the core value "Drive" after winning internal sales competitions.',
    ],
    relatedSkills: ['Management Consulting', 'B2B Sales', 'Strategy', 'Client Analysis'],
    achievements: [
      {
        type: 'progress',
        label: 'Sales Target (3 Months)',
        value: '150%',
        target: 100,
        current: 150,
        subtext: 'Target reached in just 5 weeks',
      },
      {
        type: 'stat',
        label: 'Award',
        value: 'Medal of Honor',
        subtext: 'For the core value "Drive"',
      },
    ],
  },
  {
    id: 'stunote',
    title: 'Founder & Fullstack Developer',
    company: 'StuNote',
    location: 'Gothenburg, Sweden',
    range: 'Apr 2024 - Mar 2025',
    url: 'https://stunote.se',
    summary:
      'Founded and developed an EdTech platform with features for note sharing, a book marketplace, and AI quizzes.',
    description: [
      'Built the entire architecture from scratch using Next.js, TypeScript, and SQL (MySQL).',
      'Implemented AI functionality to generate automatic study questions.',
      'Awarded the Chalmers Mastercard Scholarship for the innovation.',
    ],
    relatedSkills: ['Fullstack Development', 'AI Integration', 'MySQL', 'Next.js', 'PHP'],
    achievements: [
      {
        type: 'stat',
        label: 'Award',
        value: 'Scholarship',
        subtext: 'Chalmers Mastercard Scholarship',
      },
    ],
  },
  {
    id: 'chalmers-ta',
    title: 'Teaching Assistant in Mathematics',
    company: 'Chalmers University of Technology',
    location: 'Gothenburg, Sweden',
    range: 'Aug 2024 - Sep 2024',
    summary: 'Tutored students in mathematical problem-solving and analysis.',
    description: [
      'Provided pedagogical support for engineering students in mathematics.',
      'Honed the ability to explain difficult concepts in an easily understandable way.',
    ],
    relatedSkills: ['Mathematics', 'Pedagogy', 'Presentation Skills'],
  },
  {
    id: 'armed-forces',
    title: 'Group Leader System Technician',
    company: 'Swedish Armed Forces',
    location: 'Halmstad, Sweden',
    range: 'Aug 2022 - Jun 2023',
    summary:
      'Responsible for operation and troubleshooting of advanced radio systems under demanding conditions.',
    description: [
      'Led a technical squad responsible for securing communication in high-pressure and time-critical environments.',
      'Developed the ability to make rapid decisions based on complex information.',
    ],
    relatedSkills: [
      'Leadership',
      'Technical Troubleshooting',
      'Crisis Management',
      'Radio & Signal Systems',
    ],
    achievements: [],
  },
  {
    id: 'hemkop',
    title: 'Store Associate',
    company: 'Hemköp',
    location: 'Gothenburg, Sweden',
    range: 'Mar 2021 - Mar 2022',
    summary: 'Responsible for customer service and cashier duties.',
    description: [
      'Managed high customer flow and delivered service during stressful periods.',
      'Learned the basics of daily operations and teamwork.',
    ],
    relatedSkills: ['Service', 'Teamwork', 'Problem Solving'],
  },
  {
    id: 'allakando',
    title: 'Private Tutor',
    company: 'Allakando',
    location: 'Gothenburg, Sweden',
    range: 'Jan 2021 - Jun 2021',
    summary: 'Helped students achieve their academic goals, specificly in mathematics.',
    description: ['Tailored instruction to meet individual student needs and learning styles.'],
    relatedSkills: ['Pedagogy', 'Leadership'],
  },
  {
    id: 'goteborgs-stad',
    title: 'Caretaker in grounds & forest',
    company: 'City of Gothenburg',
    location: 'Gothenburg, Sweden',
    range: 'Jul 2020 - Aug 2020',
    summary: 'Maintenance of public spaces.',
    description: ['Responsible for the upkeep of parks and green areas.'],
    relatedSkills: [],
  },
  {
    id: 'havd-group',
    title: 'Design and Product Development',
    company: 'HAVD Group',
    location: 'Gothenburg, Sweden',
    range: 'Apr 2017 - Apr 2017',
    summary: 'Introduction to product development.',
    description: ['Gained insight into design processes and production flows.'],
    relatedSkills: ['Design'],
  },
]
