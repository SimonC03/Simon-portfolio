import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
// import SearchButton from './SearchButton'  <-- Borttagen
import Image from './Image'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image
                src={siteMetadata.siteLogo}
                alt="Profilbild"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full border border-gray-200 object-cover dark:border-gray-700"
              />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 sm:block dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}

        {/* --- CV-KNAPP --- */}
        <Link
          href="/static/cv.pdf"
          target="_blank"
          className="bg-primary-500 hover:bg-primary-700 focus:ring-primary-500 dark:bg-primary-600 dark:hover:bg-primary-500 hidden rounded-md px-4 py-2 font-medium text-white shadow-sm focus:ring-2 focus:ring-offset-2 sm:block"
        >
          Mitt CV
        </Link>

        {/* <SearchButton />  <-- Borttagen härifrån */}

        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
