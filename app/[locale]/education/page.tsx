import { educationData } from '@/data/sv/resume/education' // Ändrad import
import { genPageMetadata } from 'app/seo'
import EducationList from '@/components/EducationList'

export const metadata = genPageMetadata({ title: 'Utbildning' })

export default function EducationPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Utbildning
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Akademisk bakgrund och kurser.
        </p>
      </div>
      <div className="py-8">
        {/* Denna rad är korrekt, se bara till att filen components/EducationList.tsx är uppdaterad */}
        <EducationList education={educationData} />
      </div>
    </div>
  )
}
