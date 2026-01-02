import { projectsData } from '@/data/cvData'
import { genPageMetadata } from 'app/seo'
import ProjectGallery from '@/components/ProjectGallery' // Importera den nya komponenten

export const metadata = genPageMetadata({ title: 'Projekt' })

export default function Projects() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Projekt
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Här är ett urval av projekt jag arbetat med. Klicka för mer information.
        </p>
      </div>

      {/* Här använder vi ProjectGallery istället för att loopa Cards manuellt */}
      <div className="container py-12">
        <ProjectGallery projects={projectsData} />
      </div>
    </div>
  )
}
