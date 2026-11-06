import { getProjects } from '@/data/index'
import Card from '@/components/Card'
import PageTitle from '@/components/PageTitle'
import { genPageMetadata } from 'app/seo'

export function generateMetadata({ params }: { params: { locale: string } }) {
  return genPageMetadata({
    title: params.locale === 'en' ? 'Projects' : 'Projekt',
    locale: params.locale,
  })
}

export default function Projects({ params }: { params: { locale: string } }) {
  const locale = params.locale
  const projectsData = getProjects(locale)
  const withImage = projectsData.filter((d) => d.imgSrc)
  const withoutImage = projectsData.filter((d) => !d.imgSrc)

  const t = {
    title: locale === 'en' ? 'Projects' : 'Projekt',
    description:
      locale === 'en'
        ? 'A selection of what I have built and created.'
        : 'Ett urval av vad jag byggt och skapat.',
    more: locale === 'en' ? 'More projects' : 'Fler projekt',
  }

  return (
    <>
      <PageTitle title={t.title} description={t.description} />

      <ul className="reveal mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:mt-24 md:grid-cols-2">
        {withImage.map((d, i) => {
          // An odd count would leave a lone tile in the last row, so the first one leads across the row.
          const wide = i === 0 && withImage.length % 2 === 1
          return (
            <li key={d.slug} className={wide ? 'md:col-span-2' : undefined}>
              <Card
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={`/projects/${d.slug}`}
                wide={wide}
              />
            </li>
          )
        })}
      </ul>

      {withoutImage.length > 0 && (
        <section
          aria-labelledby="more-projects"
          className="reveal mt-24 grid gap-8 md:mt-32 md:grid-cols-12"
        >
          <h2
            id="more-projects"
            className="text-head leading-[1.05] font-medium tracking-[-0.03em] md:col-span-4"
          >
            {t.more}
          </h2>
          <ul className="space-y-12 md:col-span-8">
            {withoutImage.map((d) => (
              <li key={d.slug}>
                <Card title={d.title} description={d.description} href={`/projects/${d.slug}`} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
