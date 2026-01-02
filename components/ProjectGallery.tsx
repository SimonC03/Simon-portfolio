'use client'

import { useState, useMemo } from 'react'
import { Project, SKILLS } from '@/data/cvData'
import Image from './Image'
import Link from './Link'
// import SpotlightCard from './SpotlightCard' <-- Borttagen

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const usedSkills = useMemo(() => {
    const ids = new Set<string>()
    projects.forEach((p) => p.relatedSkills.forEach((id) => ids.add(id)))
    return Array.from(ids)
      .map((id) => SKILLS[id])
      .filter(Boolean)
  }, [projects])

  const filteredProjects = activeFilter
    ? projects.filter((p) => p.relatedSkills.includes(activeFilter))
    : projects

  return (
    <>
      {/* --- Filtermeny --- */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveFilter(null)}
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
            activeFilter === null
              ? 'bg-primary-500 text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
          }`}
        >
          Alla
        </button>
        {usedSkills.map((skill) => (
          <button
            key={skill.id}
            onClick={() => setActiveFilter(activeFilter === skill.id ? null : skill.id)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
              activeFilter === skill.id
                ? 'bg-primary-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
            }`}
          >
            {skill.name}
          </button>
        ))}
      </div>

      {/* --- Grid utan SpotlightCard --- */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Link key={project.title} href={project.href || '#'} className="block h-full">
            {/* Ersatte SpotlightCard med en vanlig div som har border och hover-effekt */}
            <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
              {project.imgSrc && (
                <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    alt={project.title}
                    src={project.imgSrc}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={544}
                    height={306}
                  />
                </div>
              )}

              <div className="flex flex-grow flex-col p-6">
                <h3 className="group-hover:text-primary-500 mb-2 text-xl font-bold text-gray-900 transition-colors dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="mb-4 line-clamp-3 flex-grow text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Skills/Taggar */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.relatedSkills.slice(0, 3).map((id) => (
                    <span
                      key={id}
                      className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {SKILLS[id]?.name}
                    </span>
                  ))}
                  {project.relatedSkills.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium text-gray-400">
                      +{project.relatedSkills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
