import { getProjects } from '@/data/index'
import { notFound } from 'next/navigation'
import Image from '@/components/Image'
import Tag from '@/components/Tag'

export async function generateStaticParams() {
  const svProjects = getProjects('sv')
  const enProjects = getProjects('en')
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
    gallery: params.locale === 'en' ? 'Project Gallery' : 'Projektgalleri',
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
        {/* Vänster kolumn: Huvudbild och Meta */}
        <div className="pt-6 xl:pt-11">
          {project.imgSrc && (
            <div className="mb-6 overflow-hidden rounded-lg">
              <Image
                src={project.imgSrc}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover shadow-lg transition-transform duration-500 hover:scale-105"
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
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 flex items-center gap-1 font-bold"
              >
                {t.visit} &rarr;
              </a>
            )}
          </div>
        </div>

        {/* Höger kolumn: Beskrivning och Galleri */}
        <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
          <div className="prose dark:prose-invert max-w-none pt-10 pb-8">
            {project.fullDescription.map((paragraph, i) => (
              <p key={i} className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Förbättrat Bildgalleri */}
          {project.attachments && project.attachments.length > 0 && (
            <div className="pt-10 pb-8">
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {t.gallery}
              </h2>
              <div className="columns-1 gap-4 sm:columns-2">
                {project.attachments.map((img, index) => (
                  <div
                    key={index}
                    className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-gray-100 bg-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-800"
                  >
                    <Image
                      src={img.url}
                      alt={`Project screenshot ${index + 1}`}
                      width={800}
                      height={600}
                      className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
