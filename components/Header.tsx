import siteMetadata from '@/data/siteMetadata'
import { getHeaderNavLinks } from '@/data/headerNavLinks' // Ändrad import
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import LanguageSwitch from './LanguageSwitch'
import Image from './Image'

const Header = ({ locale }: { locale: string }) => {
  const headerNavLinks = getHeaderNavLinks(locale)

  // Enkel översättning för statiska texter i Headern
  const t = {
    cv: locale === 'en' ? 'My CV' : 'Mitt CV',
    contact: locale === 'en' ? 'Contact' : 'Kontakta mig',
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 xl:px-0">
      <header className="flex items-center justify-between py-10">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <span className="flex items-center justify-between">
              <span className="mr-3">
                <Image
                  src={siteMetadata.image}
                  alt="Profilbild"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border border-gray-200 object-cover dark:border-gray-700"
                />
              </span>
              {typeof siteMetadata.headerTitle === 'string' ? (
                <span className="hidden h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </span>
              ) : (
                siteMetadata.headerTitle
              )}
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          {headerNavLinks
            .filter((link) => link.href !== '/' && link.href !== '/contact')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary-500 dark:hover:text-primary-400 hidden font-medium text-gray-900 transition-colors xl:block dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
          <div className="hidden items-center gap-3 pl-2 xl:flex">
            <Link
              href="/cv.pdf"
              target="_blank"
              className="group inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-gray-300 transition-all ring-inset hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:ring-gray-700 dark:hover:bg-gray-700"
            >
              <span className="mr-2">📄</span> {t.cv}
            </Link>

            <Link
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 dark:bg-primary-600 dark:hover:bg-primary-500 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-bold text-white shadow-sm transition-all hover:shadow-md focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              {t.contact}
            </Link>
          </div>
          <ThemeSwitch />
          <LanguageSwitch />
          {/* Skicka med länkar och texter till mobilenav */}
          <MobileNav navLinks={headerNavLinks} t={t} />
        </div>
      </header>
    </div>
  )
}

export default Header
