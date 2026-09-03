import { Skill } from '../../types'

export const SKILLS: Skill[] = [
  // Development
  { id: 'python', name: 'Python', category: 'Development', proficiency: 4 },
  { id: 'typescript', name: 'TypeScript', category: 'Development', proficiency: 4 },
  { id: 'java', name: 'Java', category: 'Development', proficiency: 4 },
  { id: 'c', name: 'C', category: 'Development', proficiency: 5 },
  { id: 'cpp', name: 'C++', category: 'Development', proficiency: 3 },
  { id: 'kotlin', name: 'Kotlin', category: 'Development', proficiency: 3 },
  { id: 'csharp', name: 'C#', category: 'Development', proficiency: 3 },
  { id: 'php', name: 'PHP', category: 'Development', proficiency: 3 },
  { id: 'sql', name: 'SQL (PostgreSQL/MySQL)', category: 'Development', proficiency: 4 },
  { id: 'nextjs', name: 'Next.js', category: 'Development', proficiency: 4 },
  { id: 'react', name: 'React', category: 'Development', proficiency: 4 },
  { id: 'nodejs', name: 'Node.js', category: 'Development', proficiency: 4 },
  { id: 'rest', name: 'REST-API:er', category: 'Development', proficiency: 4 },
  { id: 'tailwind', name: 'TailwindCSS', category: 'Development', proficiency: 4 },

  // AI & Data
  { id: 'machine-learning', name: 'Maskininlärning', category: 'AI & Data', proficiency: 4 },
  { id: 'time-series', name: 'Tidsserieprognoser', category: 'AI & Data', proficiency: 4 },
  { id: 'mcp', name: 'MCP-servrar', category: 'AI & Data', proficiency: 4 },
  { id: 'ai-agents', name: 'AI-agenter & verktyg', category: 'AI & Data', proficiency: 4 },
  { id: 'dsa', name: 'Datastrukturer & algoritmer', category: 'AI & Data', proficiency: 4 },

  // Engineering
  { id: 'embedded', name: 'Inbyggda system', category: 'Engineering', proficiency: 4 },
  { id: 'microcontrollers', name: 'Mikrokontroller', category: 'Engineering', proficiency: 4 },
  { id: 'can', name: 'CAN / DBC', category: 'Engineering', proficiency: 4 },
  { id: 'canoe', name: 'Vector CANoe / CANalyzer', category: 'Engineering', proficiency: 4 },
  { id: 'hil', name: 'HIL-testning', category: 'Engineering', proficiency: 4 },
  { id: 'control-theory', name: 'Reglerteknik', category: 'Engineering', proficiency: 4 },
  { id: 'matlab', name: 'MATLAB / Simulink', category: 'Engineering', proficiency: 4 },
  { id: 'plc', name: 'PLC-programmering', category: 'Engineering', proficiency: 5 },
  { id: 'catia', name: 'CATIA V5', category: 'Engineering', proficiency: 4 },
  { id: 'system-weaver', name: 'SystemWeaver', category: 'Engineering', proficiency: 3 },

  // Tools & Cloud
  { id: 'git', name: 'Git', category: 'Tools', proficiency: 4 },
  { id: 'docker', name: 'Docker', category: 'Tools', proficiency: 4 },
  { id: 'aws', name: 'AWS', category: 'Tools', proficiency: 3 },
  { id: 'gcp', name: 'Google Cloud Platform (GCP)', category: 'Tools', proficiency: 3 },
  { id: 'figma', name: 'Figma', category: 'Tools', proficiency: 4 },
  { id: 'canva', name: 'Canva', category: 'Tools', proficiency: 4 },

  // Business
  { id: 'strategy', name: 'Strategi', category: 'Business', proficiency: 5 },
  { id: 'leadership', name: 'Ledarskap', category: 'Business', proficiency: 5 },
  { id: 'consulting', name: 'Management Consulting', category: 'Business', proficiency: 4 },
  { id: 'finance', name: 'Finans', category: 'Business', proficiency: 4 },
  { id: 'entrepreneurship', name: 'Entreprenörskap', category: 'Business', proficiency: 5 },

  // Languages
  { id: 'swedish', name: 'Svenska (Modersmål)', category: 'Languages', proficiency: 5 },
  { id: 'english', name: 'Engelska (Flytande)', category: 'Languages', proficiency: 4 },
  { id: 'french', name: 'Franska (Grundläggande)', category: 'Languages', proficiency: 2 },
]
