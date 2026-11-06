import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
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
    <PageTitle title="404" description={t.title}>
      <p className="enter enter-2 text-muted mt-4 max-w-[48ch]">{t.text}</p>
      <Link
        href="/"
        className="enter enter-3 bg-accent text-accent-ink hover:bg-ink hover:text-bg mt-10 inline-flex h-12 items-center px-6 font-medium transition-colors"
      >
        {t.cta}
      </Link>
    </PageTitle>
  )
}
