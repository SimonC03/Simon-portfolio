// data/types.ts

export type SkillCategory = 'Development' | 'Business' | 'Tools' | 'Languages' | 'Engineering'

export interface Attachment {
  name: string
  url: string
  type: 'link' | 'file'
}

export interface Reference {
  name: string
  role: string
  company: string
  contact?: string
  quote?: string
  image?: string
}

export type AchievementType = 'stat' | 'progress' | 'donut' | 'bar' | 'graph'

export interface Achievement {
  type: AchievementType
  label: string
  value: string | number
  subtext?: string
  target?: number
  current?: number
  data?: { label: string; value: number; color?: string }[]
}

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  proficiency?: number
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  range: string
  url?: string
  summary: string
  description: string[]
  relatedSkills: string[]
  achievements?: Achievement[]
  attachments?: Attachment[]
  references?: Reference[]
}

export interface Course {
  name: string
  code?: string
  credits?: string
  grade?: string
}

export interface Education {
  school: string
  degree: string
  location: string
  year: string
  summary: string
  details?: string[]
  courses?: Course[]
  relatedSkills?: string[]
  attachments?: Attachment[]
}

export interface Certificate {
  title: string
  issuer: string
  date: string
  url?: string
  relatedSkills?: string[]
  attachments?: Attachment[]
}

export interface Project {
  title: string
  description: string
  imgSrc?: string
  href?: string
  relatedSkills: string[]
  attachments?: Attachment[]
}

export interface Award {
  title: string
  organization: string
  summary?: string
}

export interface Membership {
  organization: string
  role: string
  summary: string
}

export interface Language {
  language: string
  proficiency: string
}
