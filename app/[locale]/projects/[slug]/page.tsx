import { getProjects } from '@/data/index'
import { notFound } from 'next/navigation'
import { Fragment } from 'react'
import Image from '@/components/Image'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import Tag from '@/components/Tag'
import { genPageMetadata } from 'app/seo'

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
  return genPageMetadata({
    title: project.title,
    description: project.description,
    image: project.imgSrc,
    locale: params.locale,
  })
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

  // Some projects link to their own page; a "visit" link back to itself is pointless.
  const visitHref = project.href !== `/projects/${project.slug}` ? project.href : undefined

  return (
    <>
      {/* Long Swedish compounds would overflow on phones; break-words covers browsers without a sv hyphenation dictionary */}
      <PageTitle
        title={<span className="break-words hyphens-auto">{project.title}</span>}
        description={project.description}
      />

      {project.imgSrc && (
        <figure className="enter enter-3 mt-16 md:mt-24">
          {/* Natural aspect ratio, capped by the viewport height, so posters are not cropped */}
          <Image
            src={project.imgSrc}
            alt={project.title}
            width={1920}
            height={1080}
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="h-auto max-h-[80svh] w-auto max-w-full"
            priority
          />
        </figure>
      )}

      <div className="reveal mt-16 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-12 md:gap-8">
        <div className="max-w-[65ch] space-y-6 leading-[1.65] md:col-span-7">
          {project.fullDescription.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <h2 className="font-medium">{t.technologies}</h2>
          <p className="text-small text-muted mt-3 leading-[1.7]">
            {project.relatedSkills.map((skill, i) => (
              <Fragment key={skill}>
                {i > 0 && ' · '}
                <Tag text={skill} />
              </Fragment>
            ))}
          </p>
          {visitHref && (
            <Link
              href={visitHref}
              className="text-accent-text mt-10 inline-block font-medium underline-offset-4 hover:underline"
            >
              {t.visit} →
            </Link>
          )}
        </aside>
      </div>

      {project.attachments && project.attachments.length > 0 && (
        <section aria-labelledby="gallery-title" className="reveal mt-24 md:mt-32">
          <h2
            id="gallery-title"
            className="text-head mb-10 leading-[1.05] font-medium tracking-[-0.03em] md:mb-14"
          >
            {t.gallery}
          </h2>
          {/* Uniform crop so mixed portrait/landscape photos read as one calm contact sheet */}
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {project.attachments.map((img, index) => (
              <li key={index} className="bg-surface relative aspect-[4/5] overflow-hidden">
                <Image
                  src={img.url}
                  alt={`Project screenshot ${index + 1}`}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
