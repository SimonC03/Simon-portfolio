import { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { getProjects } from '@/data/index'
import { routing } from '@/i18n/routing'

export const dynamic = 'force-static'

const pages = [
  '',
  'about',
  'experience',
  'education',
  'projects',
  'meriter',
  'referenser',
  'contact',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl
  const lastModified = new Date().toISOString().split('T')[0]

  return routing.locales.flatMap((locale) => {
    const staticRoutes = pages.map((page) => ({
      url: `${siteUrl}/${locale}${page ? `/${page}` : ''}`,
      lastModified,
    }))

    const projectRoutes = getProjects(locale).map((project) => ({
      url: `${siteUrl}/${locale}/projects/${project.slug}`,
      lastModified,
    }))

    return [...staticRoutes, ...projectRoutes]
  })
}
