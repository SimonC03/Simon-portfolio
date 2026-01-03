// data/index.ts

// ==========================================
// SVENSKA IMPORTER (Från data/sv/...)
// ==========================================
import { projectsData as projectsSv } from './sv/projects'
import { referencesData as referencesSv } from './sv/references'
import {
  certificationsData as certificationsSv,
  awardsData as awardsSv,
  membershipsData as membershipsSv,
} from './sv/resume/certificates'
import { educationData as educationSv } from './sv/resume/education'
import { experienceData as experienceSv } from './sv/resume/experience'
import { languagesData as languagesSv } from './sv/resume/languages'
import { SKILLS as skillsSv } from './sv/resume/skills'
import { aboutContent as aboutSv } from './sv/ui/about'
import { homeContent as homeSv } from './sv/ui/home'

// ==========================================
// ENGELSKA IMPORTER (Från data/en/...)
// ==========================================
// Notera: Se till att filerna finns i 'data/en/' även om de är kopior just nu
import { projectsData as projectsEn } from './en/projects'
import { referencesData as referencesEn } from './en/references'
import {
  certificationsData as certificationsEn,
  awardsData as awardsEn,
  membershipsData as membershipsEn,
} from './en/resume/certificates'
import { educationData as educationEn } from './en/resume/education'
import { experienceData as experienceEn } from './en/resume/experience'
import { languagesData as languagesEn } from './en/resume/languages'
import { SKILLS as skillsEn } from './en/resume/skills'
import { aboutContent as aboutEn } from './en/ui/about'
import { homeContent as homeEn } from './en/ui/home'

// ==========================================
// HELPER FUNCTIONS (Getters)
// ==========================================

export const getProjects = (locale: string) => (locale === 'en' ? projectsEn : projectsSv)

export const getReferences = (locale: string) => (locale === 'en' ? referencesEn : referencesSv)

export const getCertifications = (locale: string) =>
  locale === 'en' ? certificationsEn : certificationsSv

export const getAwards = (locale: string) => (locale === 'en' ? awardsEn : awardsSv)

export const getMemberships = (locale: string) => (locale === 'en' ? membershipsEn : membershipsSv)

export const getEducation = (locale: string) => (locale === 'en' ? educationEn : educationSv)

export const getExperience = (locale: string) => (locale === 'en' ? experienceEn : experienceSv)

export const getLanguages = (locale: string) => (locale === 'en' ? languagesEn : languagesSv)

export const getSkills = (locale: string) => (locale === 'en' ? skillsEn : skillsSv)

export const getAboutContent = (locale: string) => (locale === 'en' ? aboutEn : aboutSv)

export const getHomeContent = (locale: string) => (locale === 'en' ? homeEn : homeSv)
