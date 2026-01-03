import { Education } from '../../types'

export const educationData: Education[] = [
  {
    school: 'School of Business, Economics and Law at the University of Gothenburg',
    degree: 'BSc in Business Administration',
    location: 'Gothenburg, Sweden',
    year: '2024 - 2027',
    summary:
      'Academic program focused on quantitative financial analysis, economic theory, and corporate management processes.',
    details: [
      'Building a solid foundation in preparing and analyzing financial reports, cash flows, and investment calculations.',
      'Applying economic models to solve optimization problems and understand market dynamics (Economics).',
      'Developing data-driven decision-making skills by integrating accounting theory with strategic management control.',
    ],
    relatedSkills: [
      'Business Administration',
      'Managerial Accounting',
      'Marketing',
      'Financial Analysis',
      'Strategy',
    ],
  },
  {
    school: 'Chalmers University of Technology',
    degree: 'BSc in Automation & Mechatronics',
    location: 'Gothenburg, Sweden',
    year: '2023 - 2026',
    summary:
      'Engineering program at the intersection of mechanics, electronics, and software. The education provides a deep understanding of how modern products—from autonomous vehicles to smart home systems—interact. I have built a strong technical base in control theory, AI, and systems engineering, with practical expertise in C/C++, PLC programming, and CAD (Catia V5). To meet future demands for software-intensive technology, I am pursuing an extended study plan focusing on algorithms and data structures.',
    details: [
      'Awarded the Adlerbertska Scholarship in years 1 and 2 for exceptional academic results.',
      'Pursuing an extended study plan with extra courses in Data Structures and Algorithms for deepened software expertise.',
      'Gained practical experience in CAD (Catia V5), PLC programming, and embedded systems through project-based learning.',
    ],
    /*
    courses: [
      { name: 'Calculus', credits: '7.5 hp', grade: '5' },
      { name: 'Linear Algebra & Differential Equations', credits: '7.5 hp', grade: '5' },
      { name: 'Linear Systems', credits: '7.5 hp', grade: '5' },
      { name: 'Dynamical Systems & Control', credits: '7.5 hp', grade: '5' },
      { name: 'Embedded Control Systems', credits: '7.5 hp', grade: '5' },
      { name: 'Machine Oriented Programming', credits: '7.5 hp', grade: '5' },
      { name: 'Computer Programming', credits: '7.5 hp', grade: '5' },
      { name: 'Electrical Circuits', credits: '7.5 hp', grade: '5' },
      { name: 'Introduction to Computer Engineering', credits: '7.5 hp', grade: '5' },
      { name: 'Energy Systems & Sustainability', credits: '7.5 hp', grade: '5' },
      { name: 'Transducers & Actuators', credits: '7.5 hp', grade: '5' },
      { name: 'Solid Mechanics & Materials', credits: '7.5 hp', grade: '5' },
      { name: 'Mechanics, Advanced Course', credits: '7.5 hp', grade: '5' },
      { name: 'Mathematical Analysis in Several Variables', credits: '7.5 hp', grade: '4' },
      { name: 'Data Structures and Algorithms', credits: '6.0 hp', grade: '4' },
      { name: 'Mechanics', credits: '7.5 hp', grade: '4' },
      { name: 'Mechatronics Project', credits: '7.5 hp', grade: '4' },
      { name: 'Preparatory Course in Mathematics', credits: '7.5 hp', grade: 'G' }, // G i betyg
      { name: 'Introduction to Mechatronics', credits: '7.5 hp', grade: 'G' }, // G i betyg
      { name: 'Logic Control Project', credits: '7.5 hp', grade: 'G' }, // G i betyg
    ],
    */
    relatedSkills: [
      'C/C++',
      'Python',
      'Matlab',
      'Control Systems',
      'CAD (Catia V5)',
      'System Engineering',
    ],
  },
  {
    school: 'Linköping University',
    degree: 'Standalone Courses',
    location: 'Remote',
    year: 'Summer 2024',
    summary:
      'Proactive studies to broaden competence within AI technology and business-creating innovation processes.',
    details: [
      'Innovation & Entrepreneurship: Deep dive into business modeling, market strategies, and the commercialization of ideas.',
      "Elements of AI: Studies in machine learning (k-NN, logistic regression), neural networks, and Bayes' theorem, as well as the societal impact of AI.",
    ],
    courses: [
      { name: 'Elements of AI', credits: '2.0 hp', grade: 'Pass' },
      { name: 'Innovation and Entrepreneurship', credits: '6.0 hp', grade: 'Pass' },
    ],
    relatedSkills: ['Artificial Intelligence', 'Business Development', 'Innovation'],
  },
  {
    school: 'Swedish Armed Forces',
    degree: 'Signal Mechanic Specialist Training',
    location: 'Sweden',
    year: 'Oct 2022 - Feb 2023',
    summary:
      'Technical specialization in the installation, operation, and maintenance of advanced military communication systems.',
    details: [
      'Responsible for troubleshooting and repairing communication equipment under field conditions.',
      'Ensured critical communication infrastructure with high demands on operational reliability and technical precision.',
    ],
    relatedSkills: [
      'Communication Technology',
      'System Maintenance',
      'Troubleshooting',
      'Electronics',
    ],
  },
  {
    school: 'Swedish Armed Forces',
    degree: 'Squad Leader (GBU) / Leadership Training',
    location: 'Sweden',
    year: 'Oct 2022 - Nov 2022',
    summary:
      'Training in military and strategic leadership with a focus on leading groups under pressure.',
    details: [
      'Included both theoretical studies and practical application of leadership in the field.',
      'Developed the ability to make rapid decisions, give clear orders, and maintain unit morale and combat value.',
    ],
    relatedSkills: ['Leadership', 'Strategic Planning', 'Decision Making', 'Crisis Management'],
  },
  {
    school: 'Unga Aktiesparare',
    degree: 'Finance & Stock Market Analysis (Certified)',
    location: 'Sweden',
    year: 'Dec 2020 - Dec 2021',
    summary:
      'Comprehensive education ranging from basic to advanced levels within the stock market and finance.',
    details: [
      'Deepened knowledge in portfolio management, stock analysis, and financial instruments.',
      'Laid the foundation for a strong interest in financial markets and strategic investments.',
    ],
    relatedSkills: ['Stock Analysis', 'Portfolio Management', 'Personal Finance'],
  },
]
