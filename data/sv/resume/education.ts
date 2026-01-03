import { Education } from '../../types'

export const educationData: Education[] = [
  {
    school: 'Handelshögskolan vid Göteborgs universitet',
    degree: 'Ekonomie kandidatexamen',
    location: 'Göteborg, Sverige',
    year: '2024 - 2027',
    summary: 'Studerar till en kandidatexamen i företagsekonomi.',
    details: [
      'Aktiv i studentorganisationer och näringslivskontakter.',
      'Kombinerar ekonomistudier med ingenjörsstudier för en dubbelexamen.',
    ],
    relatedSkills: ['Nationalekonomi', 'Företagsekonomi', 'Finans'],
  },
  {
    school: 'Chalmers tekniska högskola',
    degree: 'Kandidat i Mekatronik & Automation',
    location: 'Göteborg, Sverige',
    year: '2023 - 2026',
    summary:
      'Ingenjörsprogram fokuserat på systemteknik, C/C++-programmering och design av dynamiska system.',
    details: [
      'Arbetade med Catia V5 för CAD-modellering och PLC-programmering för automation.',
      'Fokus på att kombinera teknisk expertis med strategisk problemlösning.',
    ],
    courses: [
      { name: 'Linjära system', grade: '5' },
      { name: 'Datorprogrammering', credits: '7.5 hp', grade: '5' },
      { name: 'Elektriska kretsar', credits: '7.5 hp', grade: '5' },
      { name: 'Linjär algebra och differentialekvationer', credits: '7.5 hp', grade: '5' },
      { name: 'Introduktion till datorteknik', credits: '7.5 hp', grade: '5' },
      { name: 'Matematisk analys', credits: '7.5 hp', grade: '5' },
      { name: 'Mekanik', credits: '7.5 hp', grade: '4' },
      { name: 'Styrtekniksprojekt', credits: '7.5 hp', grade: 'G' },
      { name: 'Introduktion till mekatronik', credits: '7.5 hp', grade: 'G' },
    ],
    relatedSkills: ['C', 'C++', 'Matlab', 'Elektronik', 'Mekanik', 'PLC'],
  },
  {
    school: 'Linköpings universitet',
    degree: 'Fristående kurser',
    location: 'Distans / Linköping',
    year: 'Sommar 2024',
    summary: 'Sommarkurser inom AI och entreprenörskap.',
    courses: [
      { name: 'Elements of AI', credits: '2.0 hp', grade: 'G' },
      { name: 'Innovation och entreprenörskap', credits: '6.0 hp', grade: 'G' },
    ],
    relatedSkills: ['Artificiell Intelligens', 'Entreprenörskap'],
  },
]
