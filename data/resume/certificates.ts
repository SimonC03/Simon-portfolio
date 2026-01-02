// data/resume/certificates.ts
import { Certificate, Award, Membership } from '../types'

export const certificationsData: Certificate[] = [
  {
    title: 'McKinsey Forward Program',
    issuer: 'McKinsey & Company',
    date: '2024',
    relatedSkills: ['leadership', 'strategy'],
  },
  {
    title: 'Skyddsvaktsbevis',
    issuer: 'Försvarsmakten',
    date: '2022',
  },
  {
    title: 'Heta Arbeten',
    issuer: 'Brandskyddsföreningen',
    date: '2022',
  },
  {
    title: 'Körkort B + AM',
    issuer: 'Transportstyrelsen',
    date: '',
  },
]

export const awardsData: Award[] = [
  {
    title: 'Adlerbertska Stiftelsernas Stipendium',
    organization: 'Chalmers Tekniska Högskola',
    summary: 'Tilldelad stipendium 2024 och 2025 för goda studieresultat.',
  },
  {
    title: 'Hedersmedalj - Värdeordet "Driv"',
    organization: 'Handels Consulting',
    summary: 'Erkännande för exceptionellt driv och engagemang internt.',
  },
  {
    title: 'Bästa Uppsats (Exempel)',
    organization: 'Handelshögskolan',
    summary: 'Belönad för kandidatuppsats inom organisation.',
  },
]

export const membershipsData: Membership[] = [
  {
    organization: 'Nova Talent',
    role: 'Nova Member',
    summary: 'Utvald medlem i globalt talangnätverk (Top 3% Talent).',
  },
  {
    organization: 'Chalmers',
    role: 'Chalmers AI Society',
    summary: 'Aktiv medlem med fokus på maskininlärning och etik.',
  },
  {
    organization: 'Ungdom',
    role: 'Aktiespararna',
    summary: 'Medlem och aktiv deltagare i event.',
  },
]
