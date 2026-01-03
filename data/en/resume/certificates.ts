import { Certificate, Award, Membership } from '../../types'

export const certificationsData: Certificate[] = [
  {
    title: 'McKinsey Forward Program',
    issuer: 'McKinsey & Company',
    date: '2024',
    url: 'https://www.mckinsey.com/forward',
    relatedSkills: ['Leadership', 'Business Strategy', 'Problem Solving', 'Digital Transformation'],
  },
  {
    title: 'Logic and Cognitive Ability Test',
    issuer: 'Alva Labs',
    date: '2024',
    relatedSkills: ['Analytical Skills', 'Problem Solving'],
  },
  {
    title: 'Hot Works Certificate', // "Heta Arbeten" standard translation
    issuer: 'Brandskyddsföreningen',
    date: '2023',
    relatedSkills: ['Work Environment', 'Risk Analysis', 'Safety'],
  },
  {
    title: 'Security Guard License', // "Skyddsvaktsbevis"
    issuer: 'Försvarsmakten (Swedish Armed Forces)',
    date: '2022',
    relatedSkills: ['Security', 'Conflict Resolution', 'Legal Compliance'],
  },
  {
    title: "Driver's License B + AM",
    issuer: 'Transportstyrelsen',
    date: '2021',
    relatedSkills: [],
  },
]

export const awardsData: Award[] = [
  {
    title: 'Adlerbert Scholarship 2025',
    organization: 'Adlerbertska Stiftelserna',
    summary:
      'Awarded a scholarship of 10,000 SEK for exceptional academic results at Chalmers University of Technology.',
  },
  {
    title: 'Medal of Honor - Drive',
    organization: 'HandelsConsulting',
    summary:
      'Awarded the company\'s medal of honor for personifying the core value "Drive" through extraordinary sales results and commitment.',
  },
  {
    title: 'Chalmers Mastercard Scholarship',
    organization: 'Chalmers Mastercard',
    summary:
      'Scholarship of 27,000 SEK awarded for innovation work and the development of StuNote.',
  },
  {
    title: 'Nova Top Talent',
    organization: 'Nova',
    summary:
      'Selected member of Nova, a global network identifying and connecting the top 3% of talent in business, technology, and innovation.',
  },
  {
    title: 'Adlerbert Scholarship 2024',
    organization: 'Adlerbertska Stiftelserna',
    summary:
      'Awarded a scholarship of 7,500 SEK for exceptional academic results at Chalmers University of Technology.',
  },
]

export const membershipsData: Membership[] = [
  {
    organization: 'Nova',
    role: 'Member',
    summary:
      'Exclusive talent network for high-performing individuals (Top 3%). Participating in networking events and competence development.',
  },
  {
    organization: 'Chalmers Börssällskap (CBS)',
    role: 'Member',
    summary:
      "One of the Nordics' largest student associations for finance. Participating in analyses, lectures, and networking within the finance industry.",
  },
  {
    organization: 'Unga Aktiespararna',
    role: 'Member',
    summary:
      'Commitment to long-term savings and stock analysis. Keeping up to date with market trends and portfolio strategies.',
  },
  {
    organization: 'Chalmers AI Society',
    role: 'Member',
    summary:
      'Platform for discussion and learning regarding Artificial Intelligence, Machine Learning, and their impact on society and business.',
  },
]
