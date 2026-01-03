import { Certificate, Award, Membership } from '../../types'

export const certificationsData: Certificate[] = [
  {
    title: 'Certified Board Member',
    issuer: 'Unknown',
    date: '2024',
    relatedSkills: ['Board Work', 'Governance'],
  },
  {
    title: 'McKinsey Forward Program',
    issuer: 'McKinsey & Company',
    date: '2024',
    relatedSkills: ['Leadership', 'Business Strategy'],
  },
  {
    title: 'Security Guard Certificate', // Översatt från Skyddsvaktsbevis
    issuer: 'Swedish Armed Forces', // Översatt från Försvarsmakten
    date: '2022',
    relatedSkills: ['Security', 'Defense'],
  },
  {
    title: 'Hot Works Certificate', // Översatt från Heta arbeten
    issuer: 'Fire Protection Association', // Översatt från Brandskyddsföreningen
    date: '2023',
    relatedSkills: ['Safety'],
  },
  {
    title: 'Driving Licence B + AM',
    issuer: 'Transportstyrelsen',
    date: '2021',
  },
  {
    title: 'Logic Test',
    issuer: 'Unknown',
    date: '2024',
  },
]

export const awardsData: Award[] = [
  {
    title: 'Adlerbertska Stiftelsernas Stipendium',
    organization: 'Adlerbertska Stiftelserna',
    summary: 'Awarded twice (2024 & 2025) for academic achievements.',
  },
  {
    title: 'Mastercard Stipendium',
    organization: 'Chalmers Mastercard',
    summary: 'Scholarship awarded for work on StuNote.',
  },
  {
    title: 'Nova Top Talent',
    organization: 'Nova',
    summary: 'Recognized as Top 3% talent.',
  },
  {
    title: 'Medal of Honor - Value Word "Drive"', // Översatt
    organization: 'Swedish Armed Forces',
    summary: 'Awarded for exceptional drive and motivation during military service.',
  },
]

export const membershipsData: Membership[] = [
  {
    organization: 'Nova',
    role: 'Member',
    summary: 'Top 3% Talent Network.',
  },
  {
    organization: 'Chalmers Börssällskap (CBS)',
    role: 'Member',
    summary: 'Finance and investment society.',
  },
  {
    organization: 'Unga Aktiespararna',
    role: 'Member',
    summary: 'Young Investors Association.',
  },
  {
    organization: 'Chalmers AI Society',
    role: 'Member',
    summary: 'Artificial Intelligence interest group.',
  },
]
