import { Certificate, Award, Membership } from '../../types'

export const certificationsData: Certificate[] = [
  {
    title: 'McKinsey Forward Program',
    issuer: 'McKinsey & Company',
    date: '2024',
    url: 'https://www.mckinsey.com/forward',
    relatedSkills: ['Ledarskap', 'Affärsstrategi', 'Problemlösning', 'Digital Transformation'],
  },
  {
    title: 'Logik- och begåvningstest',
    issuer: 'Alva Labs', // Fyll i rätt utfärdare
    date: '2024',
    relatedSkills: ['Analytisk förmåga', 'Problemlösning'],
  },
  {
    title: 'Heta Arbeten',
    issuer: 'Brandskyddsföreningen',
    date: '2023',
    relatedSkills: ['Arbetsmiljö', 'Riskanalys', 'Säkerhet'],
  },
  {
    title: 'Skyddsvaktsbevis',
    issuer: 'Försvarsmakten',
    date: '2022',
    relatedSkills: ['Säkerhet', 'Konflikthantering', 'Juridik'],
  },
  {
    title: 'Körkort B + AM',
    issuer: 'Transportstyrelsen',
    date: '2021',
    relatedSkills: [],
  },
]

export const awardsData: Award[] = [
  {
    title: 'Adlerbertska Stipendiet 2025',
    organization: 'Adlerbertska Stiftelserna',
    summary:
      'Tilldelad stipendiet på 10 000 SEK för exceptionella studieresultat vid Chalmers tekniska högskola.',
  },
  {
    title: 'Hedersmedalj - Driv',
    organization: 'HandelsConsulting',
    summary:
      'Tilldelad bolagets hedersmedalj för att ha personifierat kärnvärdet "Driv" genom extraordinära säljresultat och engagemang.',
  },
  {
    title: 'Chalmers Mastercard Scholarship',
    organization: 'Chalmers Mastercard',
    summary:
      'Stipendium tilldelat på 27 000 SEK för innovationsarbetet och utvecklingen av StuNote.',
  },
  {
    title: 'Nova Top Talent',
    organization: 'Nova',
    summary:
      'Utvald medlem i Nova, ett globalt nätverk som identifierar och samlar topp 3 % av talanger inom affärer, teknik och innovation.',
  },
  {
    title: 'Adlerbertska Stipendiet 2024',
    organization: 'Adlerbertska Stiftelserna',
    summary:
      'Tilldelad stipendiet på 7 500 SEK för exceptionella studieresultat vid Chalmers tekniska högskola.',
  },
]

export const membershipsData: Membership[] = [
  {
    organization: 'Nova',
    role: 'Medlem',
    summary:
      'Exklusivt talangnätverk för högpresterande individer (Top 3%). Deltar i nätverksträffar och kompetensutveckling.',
  },
  {
    organization: 'Chalmers Börssällskap (CBS)',
    role: 'Medlem',
    summary:
      'En av Nordens största studentföreningar för finans. Deltar i analyser, föreläsningar och nätverkande mot finansbranschen.',
  },
  {
    organization: 'Unga Aktiespararna',
    role: 'Medlem',
    summary:
      'Engagemang för långsiktigt sparande och aktieanalys. Håller mig uppdaterad om marknadstrender och portföljstrategier.',
  },
  {
    organization: 'Chalmers AI Society',
    role: 'Medlem',
    summary:
      'Plattform för diskussion och lärande kring Artificiell Intelligens, Machine Learning och dess påverkan på samhälle och näringsliv.',
  },
]
