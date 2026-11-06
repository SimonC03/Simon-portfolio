import 'css/tailwind.css'

import { Hanken_Grotesk } from 'next/font/google'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from '../theme-providers'
import { Metadata, Viewport } from 'next'
import { descriptionFor, ogImageFor, ogLocaleFor } from 'app/seo'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hanken',
})

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale
  const description = descriptionFor(locale)
  const ogImage = ogImageFor(locale)

  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
      default: siteMetadata.title,
      template: `%s | ${siteMetadata.author}`,
    },
    description,
    applicationName: siteMetadata.author,
    authors: [{ name: siteMetadata.author, url: siteMetadata.siteUrl }],
    creator: siteMetadata.author,
    openGraph: {
      title: siteMetadata.title,
      description,
      url: './',
      siteName: siteMetadata.title,
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteMetadata.author }],
      locale: ogLocaleFor(locale),
      type: 'website',
    },
    alternates: {
      canonical: './',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: siteMetadata.title,
      description,
      images: [ogImage],
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '48x48' },
        { url: '/static/favicons/favicon.svg', type: 'image/svg+xml' },
        { url: '/static/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/static/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      apple: [{ url: '/static/favicons/apple-touch-icon.png', sizes: '180x180' }],
      shortcut: ['/favicon.ico'],
    },
    manifest: '/static/favicons/site.webmanifest',
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#eff0f1' },
    { media: '(prefers-color-scheme: dark)', color: '#18191b' },
  ],
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Messages for next-intl (configured in i18n/request.ts)
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${hanken.variable} scroll-smooth [scrollbar-gutter:stable]`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-body text-ink overflow-x-clip antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProviders>
            <SectionContainer>
              <Header locale={locale} />
              <main className="mb-auto">{children}</main>
              <Footer />
              <RevealObserver />
            </SectionContainer>
          </ThemeProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
