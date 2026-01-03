import { getEducation } from '@/data/index'
import { genPageMetadata } from 'app/seo'
import EducationList from '@/components/EducationList'

export const metadata = genPageMetadata({ title: 'Utbildning' })

export default function EducationPage({ params }: { params: { locale: string } }) {
  const locale = params.locale
  const educationData = getEducation(locale)

  const t = {
    title: locale === 'en' ? 'Education' : 'Utbildning',
    description:
      locale === 'en' ? 'Academic background and courses.' : 'Akademisk bakgrund och kurser.',
  }

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          {t.title}
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{t.description}</p>
      </div>
      <div className="py-8">
        <EducationList education={educationData} />
      </div>
    </div>
  )
}
