import { allProjects } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { notFound } from 'next/navigation'
import { genPageMetadata } from 'app/seo'
import Tag from '@/components/Tag'
import Link from '@/components/Link'
import Image from '@/components/Image'

// Generera statiska params för alla projekt vid build
export async function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }))
}

// Generera metadata för SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.slug === params.slug)
  if (!project) return
  return genPageMetadata({ title: project.title, description: project.summary })
}

// Själva sidan
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.slug === params.slug)

  if (!project) {
    return notFound()
  }

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="space-y-1 py-12 xl:grid xl:grid-cols-4 xl:space-y-0 xl:gap-x-8">
        {/* Vänster kolumn: Info */}
        <div className="xl:col-span-1">
          <div className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
            <dt className="sr-only">Datum</dt>
            <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
              <time dateTime={project.date}>
                {new Date(project.date).toLocaleDateString('sv-SE', {
                  year: 'numeric',
                  month: 'long',
                })}
              </time>
            </dd>
          </div>

          <div className="py-4">
            <h3 className="text-xs font-bold tracking-wide text-gray-500 uppercase dark:text-gray-400">
              Teknik
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags?.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>

          <div className="pt-8">
            <Link
              href="/projects"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              &larr; Tillbaka till projekt
            </Link>
          </div>
        </div>

        {/* Höger kolumn: Innehåll (MDX) */}
        <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
          <div className="prose dark:prose-invert max-w-none pt-10 pb-8">
            <h1 className="mb-4 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
              {project.title}
            </h1>

            {project.imgSrc && (
              <div className="my-8 overflow-hidden rounded-lg border border-gray-200 shadow-lg dark:border-gray-700">
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  width={1200}
                  height={630}
                  className="object-cover"
                />
              </div>
            )}

            <MDXLayoutRenderer code={project.body.code} />
          </div>
        </div>
      </div>
    </article>
  )
}
