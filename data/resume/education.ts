// data/resume/education.ts
import { Education } from '../types'

export const educationData: Education[] = [
  {
    school: 'Handelshögskolan vid Göteborgs Universitet',
    degree: 'BSc Business Administration',
    location: 'Göteborg',
    year: '2024 - 2027',
    summary: 'Jag har byggt en stark grund inom organisatoriskt ledarskap och ekonomi...',
    details: ['Stipendium för bästa uppsats', 'Studentrepresentant i programrådet'],
    courses: [
      { name: 'Extern Redovisning', code: 'FEK101', credits: '7.5 hp', grade: 'VG' },
      { name: 'Organisatoriskt Ledarskap', code: 'FEK102', credits: '7.5 hp', grade: 'VG' },
      { name: 'Marknadsföring', code: 'FEK103', credits: '7.5 hp', grade: 'G' },
      { name: 'Finansiell Styrning', code: 'FEK201', credits: '15 hp', grade: 'VG' },
    ],
    relatedSkills: ['strategy', 'analysis', 'budget', 'management'],
  },
  {
    school: 'Chalmers Tekniska Högskola',
    degree: 'BSc Mechatronics & Automation Engineering',
    location: 'Göteborg',
    year: '2023 - 2026',
    summary: 'Jag har byggt upp kompetens inom systemteknik, programmering i C/C++...',
    details: ['Expertis inom CAD-modellering (CATIA V5).', 'Aktiv medlem i Chalmers AI Society.'],
    courses: [
      { name: 'Mekatronik grundkurs', credits: '7.5 hp', grade: '5' },
      { name: 'Linjär Algebra', credits: '7.5 hp', grade: '4' },
      { name: 'Programmering i C', credits: '7.5 hp', grade: '5' },
    ],
    relatedSkills: ['c', 'catia', 'matlab', 'python'],
  },
]
