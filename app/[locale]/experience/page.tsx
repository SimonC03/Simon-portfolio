import { getExperience } from '@/data/index'
import { genPageMetadata } from 'app/seo'
import ExperienceList from '@/components/ExperienceList'
import PageTitle from '@/components/PageTitle'

export function generateMetadata({ params }: { params: { locale: string } }) {
  return genPageMetadata({
    title: params.locale === 'en' ? 'Experience' : 'Erfarenhet',
    locale: params.locale,
  })
}

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
    <>
      <PageTitle title={t.title} description={t.description} />
      <div className="mt-16 md:mt-24">
        <ExperienceList experiences={experienceData} locale={locale} />
      </div>
    </>
  )
}
