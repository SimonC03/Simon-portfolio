'use client'

import { usePathname, useRouter } from '../app/navigation'
import { useLocale } from 'next-intl'

// Shows the other language and switches to it on the same page.
const LanguageSwitch = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const next = locale === 'en' ? 'sv' : 'en'

  return (
    <button
      type="button"
      onClick={() => router.push(pathname, { locale: next })}
      aria-label={next === 'en' ? 'Switch to English' : 'Byt till svenska'}
      lang={next}
      className="text-small text-ink hover:text-accent-text flex h-10 min-w-10 items-center justify-center font-medium transition-colors"
    >
      {next.toUpperCase()}
    </button>
  )
}

export default LanguageSwitch
