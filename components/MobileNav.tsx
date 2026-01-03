'use client'

import { useState, useEffect } from 'react'
import Link from './Link'
import LanguageSwitch from './LanguageSwitch'

// Definiera props
interface MobileNavProps {
  navLinks: { href: string; title: string }[]
  t: { cv: string; contact: string }
}

const MobileNav = ({ navLinks, t }: MobileNavProps) => {
  const [navShow, setNavShow] = useState(false)

  useEffect(() => {
    if (navShow) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [navShow])

  const onToggleNav = () => {
    setNavShow((status) => !status)
  }

  // Filtrera bort eventuella kontakt-länkar om de finns i arrayen (baserat på href för säkerhet)
  const mainLinks = navLinks.filter((link) => link.href !== '/contact')

  return (
    <div className="xl:hidden">
      <button
        type="button"
        className="mr-1 ml-1 h-8 w-8 rounded py-1"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          {navShow ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>

      <div
        className={`fixed top-0 left-0 z-50 h-full w-full transform bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-in-out dark:bg-gray-950/95 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mt-11 mr-5 flex items-center justify-end">
          <div className="mr-4">
            <LanguageSwitch />
          </div>

          <button className="h-8 w-8 rounded" aria-label="Toggle Menu" onClick={onToggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <nav className="fixed mt-8 flex h-full w-full flex-col justify-between overflow-y-auto px-12 pb-24">
          <div className="space-y-4">
            {mainLinks.map((link) => (
              <div key={link.title} className="border-b border-gray-100 py-4 dark:border-gray-800">
                <Link
                  href={link.href}
                  className="hover:text-primary-500 dark:hover:text-primary-400 text-2xl font-bold tracking-wide text-gray-900 dark:text-gray-100"
                  onClick={onToggleNav}
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 pb-12">
            <Link
              href="/static/cv.pdf"
              target="_blank"
              onClick={onToggleNav}
              className="flex items-center justify-center rounded-full border border-gray-300 bg-white py-3 text-lg font-bold text-gray-900 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
            >
              <span className="mr-2">📄</span> {t.cv}
            </Link>

            <Link
              href="/contact"
              onClick={onToggleNav}
              className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 flex items-center justify-center rounded-full py-3 text-lg font-bold text-white shadow-md transition-colors focus:ring-2 focus:outline-none"
            >
              {t.contact}
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
