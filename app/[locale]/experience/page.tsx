import { getExperience } from '@/data/index'
import { genPageMetadata } from 'app/seo'
import ExperienceList from '@/components/ExperienceList'

// För metadata kan vi inte använda params i den enkla config-objektet, men vi behåller titeln statisk eller
// använder generateMetadata (async) om du vill ha den översatt i fliken.
export const metadata = genPageMetadata({ title: 'Erfarenhet' })

export default function ExperiencePage({ params }: { params: { locale: string } }) {
  const locale = params.locale
  const experienceData = getExperience(locale)

  const t = {
    title: locale === 'en' ? 'Experience' : 'Erfarenhet',
    description:
      locale === 'en'
        ? 'My career in brief. Click on roles to see details and achievements.'
        : 'Min karriär i korthet. Klicka på rollerna för att se detaljer och prestationer.',
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
        <ExperienceList experiences={experienceData} locale={locale} />
      </div>
    </div>
  )
}
