import Link from '@/components/Link'
import { getLocale } from 'next-intl/server'

const translations = {
  sv: {
    title: 'Sidan kunde tyvärr inte hittas.',
    text: 'Men oroa dig inte, det finns mycket annat att upptäcka på startsidan.',
    cta: 'Tillbaka till startsidan',
  },
  en: {
    title: "Sorry, we couldn't find this page.",
    text: "But don't worry, you can find plenty of other things on the homepage.",
    cta: 'Back to homepage',
  },
}

export default async function NotFound() {
  const locale = await getLocale().catch(() => 'sv')
  const t = translations[locale === 'en' ? 'en' : 'sv']

  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl leading-9 font-extrabold tracking-tight text-gray-900 md:border-r-2 md:px-6 md:text-8xl md:leading-14 dark:text-gray-100">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl leading-normal font-bold md:text-2xl">{t.title}</p>
        <p className="mb-8">{t.text}</p>
        <Link
          href="/"
          className="bg-primary-600 hover:bg-primary-700 dark:hover:bg-primary-500 inline rounded-lg border border-transparent px-4 py-2 text-sm leading-5 font-medium text-white shadow-xs transition-colors duration-150 focus:outline-hidden"
        >
          {t.cta}
        </Link>
      </div>
    </div>
  )
}
