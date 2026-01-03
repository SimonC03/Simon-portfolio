'use client'

import { Fragment, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'

const LanguageSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Enkel logik för att avgöra nuvarande språk baserat på URL
  // Förutsätter att du använder routing som /sv/... eller /en/...
  const currentLocale = pathname.startsWith('/en') ? 'en' : 'sv'

  useEffect(() => {
    setMounted(true)
  }, [])

  const switchLanguage = (locale: string) => {
    if (!pathname) return

    // Byt ut nuvarande locale mot den nya i URL:en
    // Detta förutsätter att du konfigurerar middleware senare
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`)

    // Om vi står på roten '/' och vill byta
    if (pathname === '/' && locale === 'en') {
      router.push('/en')
    } else if (pathname === '/en' && locale === 'sv') {
      router.push('/')
    } else {
      // Hantera undersidor
      const segments = pathname.split('/')
      if (segments[1] === 'en' || segments[1] === 'sv') {
        segments[1] = locale
        router.push(segments.join('/'))
      } else {
        // Om ingen locale finns i URL (t.ex. default sv), lägg till den
        router.push(`/${locale}${pathname}`)
      }
    }
  }

  if (!mounted) return null

  return (
    <div className="ml-2 flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div className="hover:text-primary-500 dark:hover:text-primary-400 flex items-center justify-center font-bold transition-colors">
          <MenuButton aria-label="Byt språk" className="w-8 uppercase">
            {currentLocale}
          </MenuButton>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="ring-opacity-5 absolute right-0 z-50 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black focus:outline-none dark:divide-gray-700 dark:bg-gray-800">
            <div className="p-1">
              <MenuItem>
                {({ active }) => (
                  <button
                    onClick={() => switchLanguage('sv')}
                    className={`${
                      active ? 'bg-primary-600 text-white' : 'text-gray-900 dark:text-gray-100'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium`}
                  >
                    🇸🇪 Svenska
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <button
                    onClick={() => switchLanguage('en')}
                    className={`${
                      active ? 'bg-primary-600 text-white' : 'text-gray-900 dark:text-gray-100'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium`}
                  >
                    🇺🇸 English
                  </button>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}

export default LanguageSwitch
