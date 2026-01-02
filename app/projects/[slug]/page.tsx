import { allProjects } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { notFound } from 'next/navigation'
import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'
import Image from '@/components/Image'
import { SKILLS } from '@/data/cvData'
import HardSkillRating from '@/components/HardSkillRating'

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

  // Mappa tags (som nu bör vara ID:n, t.ex. 'next', 'ts') till SKILLS-objektet
  const projectSkills =
    project.tags?.map((tagId) => SKILLS[tagId]).filter((skill) => skill !== undefined) || []

  return (
    <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 xl:px-0">
      {/* --- TOP NAV --- */}
      <div className="mb-8 border-b border-gray-200 pb-8 dark:border-gray-700">
        <Link
          href="/projects"
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mb-4 inline-block text-sm font-medium"
        >
          &larr; Tillbaka till alla projekt
        </Link>
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          {project.title}
        </h1>
        <div className="mt-2 text-lg leading-7 text-gray-500 dark:text-gray-400">
          {project.summary}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 xl:grid-cols-4 xl:gap-x-12">
        {/* --- VÄNSTER KOLUMN (METADATA & SKILLS) --- */}
        <div className="xl:col-span-1">
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-6 shadow-sm xl:sticky xl:top-24 dark:border-gray-700 dark:bg-gray-800/40">
            {/* Metadata */}
            <div className="mb-6 space-y-4">
              <div>
                <h3 className="text-xs font-bold tracking-wider text-gray-500 uppercase">Datum</h3>
                <time
                  dateTime={project.date}
                  className="text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  {new Date(project.date).toLocaleDateString('sv-SE', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </time>
              </div>

              {/* Länkar (om de finns i din contentlayer config, annars kan du lägga till dem) */}
              {(project.demoUrl || project.githubUrl) && (
                <div className="flex flex-col gap-2 pt-2">
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline"
                    >
                      Se mer här &rarr;
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      GitHub repository ↗
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Hard Skills Section */}
            {projectSkills.length > 0 && (
              <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
                <h3 className="mb-4 text-xs font-bold tracking-wider text-gray-500 uppercase">
                  Teknisk Kompetens
                </h3>
                <div className="flex flex-col gap-3">
                  {projectSkills.map((skill) => (
                    <HardSkillRating key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* --- HÖGER KOLUMN (INNEHÅLL) --- */}
        <div className="xl:col-span-3">
          {project.imgSrc && (
            <div className="mb-10 overflow-hidden rounded-xl border border-gray-200 shadow-md dark:border-gray-700">
              <Image
                src={project.imgSrc}
                alt={project.title}
                width={1200}
                height={630}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          )}

          <div className="prose dark:prose-invert max-w-none pb-8">
            <MDXLayoutRenderer code={project.body.code} />
          </div>
        </div>
      </div>
    </article>
  )
}
