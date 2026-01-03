import { getProjects } from '@/data/index'
import { notFound } from 'next/navigation'
import Image from '@/components/Image'
import Tag from '@/components/Tag'

// Generera statiska parametrar för alla projekt vid build.
// Notera: För att detta ska vara helt korrekt med [locale] borde vi egentligen returnera { slug, locale } för alla kombinationer.
// app/[locale]/projects/[slug]/page.tsx

export async function generateStaticParams() {
  const svProjects = getProjects('sv')
  const enProjects = getProjects('en')

  // Explicitly define the type for the array
  const paths: { slug: string; locale: string }[] = []

  svProjects.forEach((p) => paths.push({ slug: p.slug, locale: 'sv' }))
  enProjects.forEach((p) => paths.push({ slug: p.slug, locale: 'en' }))

  return paths
}

export const generateMetadata = ({ params }: { params: { slug: string; locale: string } }) => {
  const projects = getProjects(params.locale)
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return { title: project.title, description: project.description }
}

export default function ProjectPage({ params }: { params: { slug: string; locale: string } }) {
  const projects = getProjects(params.locale)
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return notFound()
  }

  const t = {
    technologies: params.locale === 'en' ? 'Technologies' : 'Tekniker',
    visit: params.locale === 'en' ? 'Visit project' : 'Besök projektet',
  }

  return (
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
            {project.title}
          </h1>
        </div>
      </header>

      <div
        className="divide-y divide-gray-200 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0 dark:divide-gray-700"
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        {/* Vänster kolumn: Bild och Meta */}
        <div className="pt-6 xl:pt-11">
          {project.imgSrc && (
            <div className="mb-6">
              <Image
                src={project.imgSrc}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          )}
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            <div className="mb-4">
              <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                {t.technologies}
              </h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.relatedSkills.map((skill) => (
                  <Tag key={skill} text={skill} />
                ))}
              </div>
            </div>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                className="text-primary-500 hover:text-primary-600 font-bold"
              >
                {t.visit} &rarr;
              </a>
            )}
          </div>
        </div>

        {/* Höger kolumn: Beskrivning */}
        <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
          <div className="prose dark:prose-invert max-w-none pt-10 pb-8">
            {project.fullDescription.map((paragraph, i) => (
              <p key={i} className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
