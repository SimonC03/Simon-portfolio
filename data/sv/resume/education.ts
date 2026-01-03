import { Education } from '../../types'

export const educationData: Education[] = [
  {
    school: 'Handelshögskolan vid Göteborgs universitet',
    degree: 'Ekonomie kandidatexamen i Företagsekonomi',
    location: 'Göteborg, Sverige',
    year: '2024 - 2027',
    summary:
      'Parallella studier för att komplettera ingenjörskompetensen med affärsmannaskap och strategisk förståelse.',
    details: [
      'Fokus på företagsstyrning, redovisning, marknadsföring och organisationsteori.',
      'Utvecklar förmågan att analysera finansiella rapporter och leda organisationer mot ekonomiska mål.',
      'Kombinerar dessa studier med Chalmers för att skapa en unik profil i gränslandet mellan teknik och affärer.',
    ],
    relatedSkills: [
      'Företagsekonomi',
      'Ekonomistyrning',
      'Marknadsföring',
      'Nationalekonomi',
      'Strategi',
    ],
  },
  {
    school: 'Chalmers tekniska högskola',
    degree: 'BSc i Mekatronik & Automation',
    location: 'Göteborg, Sverige',
    year: '2023 - 2026',
    summary:
      'Ingenjörsutbildning med fokus på synergin mellan mekanik, elektronik och mjukvara. Höga akademiska resultat med spets inom matematik och programmering.',
    details: [
      'Tilldelad Adlerbertska Stipendiet två år i rad (2024 & 2025) för exceptionella studieresultat.',
      'Praktisk tillämpning av reglerteknik, inbyggda system och robotik genom projektbaserat lärande.',
      'Har genomgående höga betyg (5:or) i tunga matematiska och tekniska kurser.',
    ],
    courses: [
      { name: 'Linjära system', credits: '7.5 hp', grade: '5' },
      { name: 'Datorprogrammering', credits: '7.5 hp', grade: '5' },
      { name: 'Elektriska kretsar', credits: '7.5 hp', grade: '5' },
      { name: 'Linjär algebra och differentialekvationer', credits: '7.5 hp', grade: '5' },
      { name: 'Introduktion till datorteknik', credits: '7.5 hp', grade: '5' },
      { name: 'Matematisk analys', credits: '7.5 hp', grade: '5' },
      { name: 'Mekanik', credits: '7.5 hp', grade: '4' },
      { name: 'Styrtekniksprojekt', credits: '7.5 hp', grade: 'G' },
      { name: 'Introduktion till mekatronik', credits: '7.5 hp', grade: 'G' },
    ],
    relatedSkills: ['C/C++', 'Python', 'Matlab', 'Reglerteknik', 'CAD (Catia V5)', 'PLC'],
  },
  {
    school: 'Linköpings universitet',
    degree: 'Fristående kurser',
    location: 'Distans',
    year: 'Sommar 2024',
    summary:
      'Proaktiva sommarstudier för att bredda kompetensen inom framtidsteknologi och affärsskapande.',
    details: [
      'Fördjupning i Artificiell Intelligenss grunder och dess samhällspåverkan.',
      'Studier i innovationsprocesser och entreprenörskap för att förstå resan från idé till marknad.',
    ],
    courses: [
      { name: 'Elements of AI', credits: '2.0 hp', grade: 'G' },
      { name: 'Innovation och entreprenörskap', credits: '6.0 hp', grade: 'G' },
    ],
    relatedSkills: ['Artificiell Intelligens', 'Entreprenörskap', 'Innovation'],
  },
]
