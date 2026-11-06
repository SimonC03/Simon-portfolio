'use client'

import { useState, useEffect } from 'react'
import Link from './Link'

interface MobileNavProps {
  navLinks: { href: string; title: string }[]
  t: { cv: string; contact: string }
}

const MobileNav = ({ navLinks, t }: MobileNavProps) => {
  const [navShow, setNavShow] = useState(false)

  useEffect(() => {
    document.body.style.overflow = navShow ? 'hidden' : 'auto'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setNavShow(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', onKey)
    }
  }, [navShow])

  const close = () => setNavShow(false)
  const mainLinks = navLinks.filter((link) => link.href !== '/contact')

  return (
    <div className="xl:hidden">
      <button
        type="button"
        className="text-ink flex h-10 w-10 items-center justify-center"
        aria-label={navShow ? 'Stäng meny' : 'Öppna meny'}
        aria-expanded={navShow}
        onClick={() => setNavShow((s) => !s)}
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6" aria-hidden="true">
          <path d="M3 6h14v1.5H3zM3 12.5h14V14H3z" />
        </svg>
      </button>

      <div
        data-lenis-prevent
        className={`bg-bg fixed inset-0 z-50 flex flex-col px-4 pt-6 pb-10 transition-[opacity,transform] duration-300 ease-out sm:px-6 ${
          navShow ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="text-ink flex h-10 w-10 items-center justify-center"
            aria-label="Stäng meny"
            onClick={close}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6" aria-hidden="true">
              <path d="M5.06 4L4 5.06 8.94 10 4 14.94 5.06 16 10 11.06 14.94 16 16 14.94 11.06 10 16 5.06 14.94 4 10 8.94z" />
            </svg>
          </button>
        </div>

        <nav className="mt-6 flex flex-1 flex-col justify-between overflow-y-auto">
          <ul className="space-y-1">
            {mainLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="text-head text-ink hover:text-accent-text block py-2 font-medium tracking-[-0.03em] transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 gap-2">
            <Link
              href="/cv.pdf"
              target="_blank"
              onClick={close}
              className="bg-surface text-ink flex h-14 items-center justify-center font-medium"
            >
              {t.cv}
            </Link>
            <Link
              href="/contact"
              onClick={close}
              className="bg-accent text-accent-ink flex h-14 items-center justify-center font-medium"
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
