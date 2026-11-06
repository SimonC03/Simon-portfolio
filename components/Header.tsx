import siteMetadata from '@/data/siteMetadata'
import { getHeaderNavLinks } from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import LanguageSwitch from './LanguageSwitch'

const Header = ({ locale }: { locale: string }) => {
  const headerNavLinks = getHeaderNavLinks(locale)

  const t = {
    cv: locale === 'en' ? 'CV' : 'CV',
    contact: locale === 'en' ? 'Contact' : 'Kontakta mig',
  }

  return (
    <header className="flex items-center justify-between gap-6 py-6 md:py-8">
      <Link
        href="/"
        className="text-lead font-medium tracking-[-0.02em] whitespace-nowrap"
        aria-label={`${siteMetadata.headerTitle}, startsida`}
      >
        {siteMetadata.headerTitle}
      </Link>

      <div className="flex items-center gap-1 sm:gap-2">
        <nav aria-label={locale === 'en' ? 'Main' : 'Huvudmeny'} className="hidden xl:block">
          <ul className="mr-4 flex items-center gap-7">
            {headerNavLinks
              .filter((link) => link.href !== '/' && link.href !== '/contact')
              .map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-small text-ink hover:text-accent-text font-medium transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            <li>
              <Link
                href="/cv.pdf"
                target="_blank"
                className="text-small text-ink hover:text-accent-text font-medium underline decoration-1 underline-offset-4 transition-colors"
              >
                {t.cv}
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          href="/contact"
          className="bg-accent text-small text-accent-ink hover:bg-ink hover:text-bg mr-2 hidden h-10 items-center px-4 font-medium transition-colors xl:inline-flex"
        >
          {t.contact}
        </Link>
        <ThemeSwitch />
        <LanguageSwitch />
        <MobileNav navLinks={headerNavLinks} t={t} />
      </div>
    </header>
  )
}

export default Header
