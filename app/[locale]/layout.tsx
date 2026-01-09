import 'css/tailwind.css'

import { Space_Grotesk } from 'next/font/google'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from '../theme-providers'
import { Metadata } from 'next'

// NYTT: Importera dessa från next-intl
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import SnowEffect from '@/components/SnowEffect'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'sv_SE',
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
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

// ÄNDRAT: Funktionen är nu async och tar emot params
export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const basePath = process.env.BASE_PATH || ''

  // NYTT: Hämta meddelanden (konfigurationen från i18n/request.ts)
  const messages = await getMessages()

  return (
    <html
      lang={locale} // ÄNDRAT: Använd dynamisk locale istället för siteMetadata.language
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* VIKTIGT: Lägg till denna för standard favicon.ico */}
        <link rel="shortcut icon" href={`${basePath}/static/favicons/favicon.ico`} />

        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${basePath}/static/favicons/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${basePath}/static/favicons/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${basePath}/static/favicons/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`${basePath}/static/favicons/safari-pinned-tab.svg`}
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      </head>

      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        {/* NYTT: Omslut allt innehåll med NextIntlClientProvider */}
        <NextIntlClientProvider messages={messages}>
          <ThemeProviders>
            <SnowEffect />
            <SectionContainer>
              <Header locale={locale} />
              <main className="mb-auto">{children}</main>
              <Footer />
            </SectionContainer>
          </ThemeProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
