import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

export const isEnglish = (locale?: string) => locale === 'en'

export const descriptionFor = (locale?: string) =>
  isEnglish(locale) ? siteMetadata.description : siteMetadata.descriptionSv

export const ogImageFor = (locale?: string) =>
  isEnglish(locale) ? siteMetadata.ogImage.en : siteMetadata.ogImage.sv

export const ogLocaleFor = (locale?: string) => (isEnglish(locale) ? 'en_US' : 'sv_SE')

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  locale?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({
  title,
  description,
  image,
  locale,
  ...rest
}: PageSEOProps): Metadata {
  const pageDescription = description || descriptionFor(locale)
  const pageImage = image || ogImageFor(locale)
  const fullTitle = `${title} | ${siteMetadata.author}`

  return {
    title,
    description: pageDescription,
    openGraph: {
      title: fullTitle,
      description: pageDescription,
      url: './',
      siteName: siteMetadata.title,
      images: [pageImage],
      locale: ogLocaleFor(locale),
      type: 'website',
    },
    twitter: {
      title: fullTitle,
      description: pageDescription,
      card: 'summary_large_image',
      images: [pageImage],
    },
    ...rest,
  }
}
