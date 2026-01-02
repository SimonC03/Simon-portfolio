// data/resume/skills.ts
import { Skill } from '../types'

export const SKILLS: Record<string, Skill> = {
  // Development
  next: { id: 'next', name: 'Next.js', category: 'Development', proficiency: 4 },
  react: { id: 'react', name: 'React', category: 'Development', proficiency: 3 },
  ts: { id: 'ts', name: 'TypeScript', category: 'Development', proficiency: 3 },
  js: { id: 'js', name: 'JavaScript', category: 'Development', proficiency: 4 },
  python: { id: 'python', name: 'Python', category: 'Development', proficiency: 4 },
  kotlin: { id: 'kotlin', name: 'Kotlin', category: 'Development', proficiency: 3 },
  java: { id: 'java', name: 'Java', category: 'Development', proficiency: 3 },
  sql: { id: 'sql', name: 'SQL (Postgre/MySQL)', category: 'Development', proficiency: 3 },
  c: { id: 'c', name: 'C / C++', category: 'Development', proficiency: 4 },
  php: { id: 'php', name: 'PHP', category: 'Development', proficiency: 3 },
  tailwind: { id: 'tailwind', name: 'Tailwind CSS', category: 'Development', proficiency: 3 },

  // Engineering & Tools
  catia: { id: 'catia', name: 'CATIA V5', category: 'Engineering', proficiency: 5 },
  matlab: { id: 'matlab', name: 'MATLAB', category: 'Engineering', proficiency: 3 },
  figma: { id: 'figma', name: 'Figma / Canva', category: 'Tools', proficiency: 3 },
  git: { id: 'git', name: 'Git', category: 'Tools', proficiency: 3 },
  systemweaver: { id: 'systemweaver', name: 'System Weaver', category: 'Tools', proficiency: 2 },

  // Business
  strategy: { id: 'strategy', name: 'Strategi', category: 'Business', proficiency: 4 },
  leadership: { id: 'leadership', name: 'Ledarskap', category: 'Business', proficiency: 4 },
  sales: { id: 'sales', name: 'Försäljning', category: 'Business', proficiency: 4 },
  budget: { id: 'budget', name: 'Budgetansvar', category: 'Business', proficiency: 4 },
  analysis: { id: 'analysis', name: 'Analys', category: 'Business', proficiency: 4 },
  management: { id: 'management', name: 'Management', category: 'Business', proficiency: 4 },
}

export const getSkills = (ids: string[]) => ids.map((id) => SKILLS[id]).filter(Boolean)

// Används på "Om mig"-sidan
export const skillsData = [
  {
    category: 'Programmering',
    items: ['TypeScript', 'React', 'Next.js', 'Python', 'C/C++', 'SQL', 'Kotlin', 'Java'],
  },
  {
    category: 'Teknik & Design',
    items: ['CATIA V5', 'MATLAB', 'Figma', 'System Weaver', 'Git', 'Tailwind CSS'],
  },
  {
    category: 'Affär & Ledarskap',
    items: ['Strategi', 'Management', 'Ledarskap', 'Försäljning', 'Budgetansvar', 'Analys'],
  },
]
