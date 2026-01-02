import { Education } from '../types'

export const educationData: Education[] = [
  {
    school: 'School of Business, Economics and Law',
    degree: 'BSc Business Administration',
    location: 'Gothenburg, Sweden',
    year: '2024 - 2027',
    summary: 'Pursuing a Bachelor’s degree in Business Administration.',
    details: [
      'Active in student organizations and business relations.',
      'Combining business studies with engineering for a double degree.',
    ],
    relatedSkills: ['Economics', 'Business Administration', 'Finance'],
  },
  {
    school: 'Chalmers University of Technology',
    degree: 'BSc Mechatronics & Automation Engineering',
    location: 'Gothenburg, Sweden',
    year: '2023 - 2026',
    summary:
      'Engineering program focused on system engineering, C/C++ programming, and dynamic systems design.',
    details: [
      'Worked with Catia V5 for CAD modeling and PLC programming for automation.',
      'Focus on combining technical expertise with strategic problem solving.',
    ],
    courses: [
      { name: 'Linear systems', grade: '5' },
      { name: 'Computer programming', credits: '7.5 hp', grade: '5' },
      { name: 'Electrical circuits', credits: '7.5 hp', grade: '5' },
      { name: 'Linear algebra and differential equations', credits: '7.5 hp', grade: '5' },
      { name: 'Introduction to computer engineering', credits: '7.5 hp', grade: '5' },
      { name: 'Calculus', credits: '7.5 hp', grade: '5' },
      { name: 'Mechanics', credits: '7.5 hp', grade: '4' },
      { name: 'Logic control project', credits: '7.5 hp', grade: 'G' },
      { name: 'Introduction to mechatronics', credits: '7.5 hp', grade: 'G' },
    ],
    relatedSkills: ['C', 'C++', 'Matlab', 'Electronics', 'Mechanics', 'PLC'],
  },
  {
    school: 'Linköping University',
    degree: 'Independent Courses',
    location: 'Remote / Linköping',
    year: 'Summer 2024',
    summary: 'Summer courses focused on AI and Entrepreneurship.',
    courses: [
      { name: 'Elements of AI', credits: '2.0 hp', grade: 'G' },
      { name: 'Innovation and Entrepreneurship', credits: '6.0 hp', grade: 'G' },
    ],
    relatedSkills: ['Artificial Intelligence', 'Entrepreneurship'],
  },
]
