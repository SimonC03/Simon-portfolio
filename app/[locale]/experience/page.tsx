// app/experience/page.tsx
import { experienceData } from '@/data/sv/resume/experience' // Ändrad import
import { genPageMetadata } from 'app/seo'
import ExperienceList from '@/components/ExperienceList'

export const metadata = genPageMetadata({ title: 'Erfarenhet' })

export default function ExperiencePage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Erfarenhet
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Min karriär i korthet. Klicka på rollerna för att se detaljer och prestationer.
        </p>
      </div>
      <div className="py-8">
        <ExperienceList experiences={experienceData} />
      </div>
    </div>
  )
}
