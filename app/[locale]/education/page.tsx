import { getEducation } from '@/data/index'
import { genPageMetadata } from 'app/seo'
import EducationList from '@/components/EducationList'
import PageTitle from '@/components/PageTitle'

export function generateMetadata({ params }: { params: { locale: string } }) {
  return genPageMetadata({
    title: params.locale === 'en' ? 'Education' : 'Utbildning',
    locale: params.locale,
  })
}

export default function EducationPage({ params }: { params: { locale: string } }) {
  const locale = params.locale
  const educationData = getEducation(locale)

  const t = {
    title: locale === 'en' ? 'Education' : 'Utbildning',
    description:
      locale === 'en' ? 'Academic background and courses.' : 'Akademisk bakgrund och kurser.',
  }

  return (
    <>
      <PageTitle title={t.title} description={t.description} />
      <div className="mt-16 md:mt-24">
        <EducationList education={educationData} locale={locale} />
      </div>
    </>
  )
}
