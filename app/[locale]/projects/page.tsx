import { getProjects } from '@/data/index'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projekt' })

export default function Projects({ params }: { params: { locale: string } }) {
  const locale = params.locale
  const projectsData = getProjects(locale)

  const t = {
    title: locale === 'en' ? 'Projects' : 'Projekt',
    description:
      locale === 'en'
        ? 'A selection of what I have built and created.'
        : 'Ett urval av vad jag byggt och skapat.',
  }

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          {t.title}
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{t.description}</p>
      </div>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={`/projects/${d.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
