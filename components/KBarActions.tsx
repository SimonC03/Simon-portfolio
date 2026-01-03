'use client'

import { useRegisterActions } from 'kbar'
import { useRouter } from 'next/navigation'
import { projectsData } from '@/data/sv/projects/projects'
import { experienceData } from '@/data/sv/resume/experience'

export default function KBarActions() {
  const router = useRouter()

  const actions = [
    // Projekt
    ...projectsData.map((project) => ({
      id: `project-${project.title}`,
      name: project.title,
      keywords: `projekt portfolio ${project.relatedSkills.join(' ')}`,
      section: 'Projekt',
      subtitle: project.description.slice(0, 50) + '...',
      perform: () => router.push('/projects'),
    })),
    // Erfarenhet
    ...experienceData.map((exp) => ({
      id: `exp-${exp.id}`,
      name: exp.company,
      keywords: `jobb arbete ${exp.relatedSkills.join(' ')}`,
      section: 'Erfarenhet',
      subtitle: exp.title,
      perform: () => router.push('/experience'),
    })),
  ]

  useRegisterActions(actions)

  return null
}
