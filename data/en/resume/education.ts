import { Education } from '../../types'

export const educationData: Education[] = [
  {
    school: 'School of Business, Economics and Law',
    degree: 'BSc in Business Administration',
    location: 'Gothenburg, Sweden',
    year: '2024 - 2027',
    summary:
      'Parallel studies to complement engineering skills with business acumen and strategic understanding.',
    details: [
      'Focus on corporate governance, accounting, marketing, and organizational theory.',
      'Developing the ability to analyze financial reports and lead organizations toward economic goals.',
      'Combining these studies with Chalmers to create a unique profile at the intersection of technology and business.',
    ],
    relatedSkills: [
      'Business Administration',
      'Management Control',
      'Marketing',
      'Economics',
      'Strategy',
    ],
  },
  {
    school: 'Chalmers University of Technology',
    degree: 'BSc in Mechatronics & Automation',
    location: 'Gothenburg, Sweden',
    year: '2023 - 2026',
    summary:
      'Engineering program focused on the synergy between mechanics, electronics, and software. High academic results with a cutting edge in mathematics and programming.',
    details: [
      'Awarded the Adlerbertska Scholarship two years in a row (2024 & 2025) for exceptional academic results.',
      'Practical application of control theory, embedded systems, and robotics through project-based learning.',
      'Consistently high grades (5s) in heavy mathematical and technical courses.',
    ],
    courses: [
      { name: 'Linear Systems', credits: '7.5 hp', grade: '5' },
      { name: 'Computer Programming', credits: '7.5 hp', grade: '5' },
      { name: 'Electrical Circuits', credits: '7.5 hp', grade: '5' },
      { name: 'Linear Algebra and Differential Equations', credits: '7.5 hp', grade: '5' },
      { name: 'Introduction to Computer Engineering', credits: '7.5 hp', grade: '5' },
      { name: 'Mathematical Analysis', credits: '7.5 hp', grade: '5' },
      { name: 'Mechanics', credits: '7.5 hp', grade: '4' },
      { name: 'Control Engineering Project', credits: '7.5 hp', grade: 'Pass' },
      { name: 'Introduction to Mechatronics', credits: '7.5 hp', grade: 'Pass' },
    ],
    relatedSkills: ['C/C++', 'Python', 'Matlab', 'Control Theory', 'CAD (Catia V5)', 'PLC'],
  },
  {
    school: 'Linköping University',
    degree: 'Standalone Courses',
    location: 'Remote',
    year: 'Summer 2024',
    summary:
      'Proactive summer studies to broaden competence within future technology and business creation.',
    details: [
      'Deepening in the fundamentals of Artificial Intelligence and its societal impact.',
      'Studies in innovation processes and entrepreneurship to understand the journey from idea to market.',
    ],
    courses: [
      { name: 'Elements of AI', credits: '2.0 hp', grade: 'Pass' },
      { name: 'Innovation and Entrepreneurship', credits: '6.0 hp', grade: 'Pass' },
    ],
    relatedSkills: ['Artificial Intelligence', 'Entrepreneurship', 'Innovation'],
  },
]
