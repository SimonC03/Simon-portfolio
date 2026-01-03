import { Certificate, Award, Membership } from '../../types'

export const certificationsData: Certificate[] = [
  {
    title: 'Certifierad Styrelseledamot',
    issuer: 'Okänd',
    date: '2024',
    relatedSkills: ['Styrelsearbete', 'Bolagsstyrning'],
  },
  {
    title: 'McKinsey Forward Program',
    issuer: 'McKinsey & Company',
    date: '2024',
    relatedSkills: ['Ledarskap', 'Affärsstrategi'],
  },
  {
    title: 'Skyddsvaktsbevis',
    issuer: 'Försvarsmakten',
    date: '2022',
    relatedSkills: ['Säkerhet', 'Försvar'],
  },
  {
    title: 'Heta arbeten',
    issuer: 'Brandskyddsföreningen',
    date: '2023',
    relatedSkills: ['Säkerhet'],
  },
  {
    title: 'Körkort B + AM',
    issuer: 'Transportstyrelsen',
    date: '2021',
  },
  {
    title: 'Logiktest',
    issuer: 'Okänd',
    date: '2024',
  },
]

export const awardsData: Award[] = [
  {
    title: 'Adlerbertska Stiftelsernas Stipendium',
    organization: 'Adlerbertska Stiftelserna',
    summary: 'Tilldelad två gånger (2024 & 2025) för akademiska meriter.',
  },
  {
    title: 'Mastercard Stipendium',
    organization: 'Chalmers Mastercard',
    summary: 'Stipendium tilldelat för arbete med StuNote.',
  },
  {
    title: 'Nova Top Talent',
    organization: 'Nova',
    summary: 'Erkänd som topp 3% talang.',
  },
  {
    title: 'Hedersmedalj - Värdeordet "Driv"',
    organization: 'Försvarsmakten',
    summary: 'Tilldelad för exceptionellt driv och motivation under värnplikten.',
  },
]

export const membershipsData: Membership[] = [
  {
    organization: 'Nova',
    role: 'Medlem',
    summary: 'Nätverk för topp 3% talanger.',
  },
  {
    organization: 'Chalmers Börssällskap (CBS)',
    role: 'Medlem',
    summary: 'Finans- och investeringsförening.',
  },
  {
    organization: 'Unga Aktiespararna',
    role: 'Medlem',
    summary: 'Förening för unga investerare.',
  },
  {
    organization: 'Chalmers AI Society',
    role: 'Medlem',
    summary: 'Intressegrupp för Artificiell Intelligens.',
  },
]
