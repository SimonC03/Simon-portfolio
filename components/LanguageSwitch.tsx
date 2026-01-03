'use client'

import { Fragment, useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
// Vi använder hooksen från din konfigurerade navigation för korrekt routing
import { usePathname, useRouter } from '../app/navigation'
import { useLocale } from 'next-intl'

const LanguageSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const locale = useLocale() // Hämtar nuvarande språk (sv eller en)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Hantera språkbyte
  const onSelectChange = (newLocale: 'sv' | 'en') => {
    // router.push från @/app/navigation hanterar automatiskt prefixet (t.ex. /en/...)
    router.push(pathname, { locale: newLocale })
  }

  if (!mounted) return null

  // Konfiguration för flaggor och namn
  const languages = {
    sv: { flag: '🇸🇪', name: 'Svenska' },
    en: { flag: '🇺🇸', name: 'English' },
  }

  // Type assertion för att vara säker på att locale är en nyckel
  const currentLang = languages[locale as keyof typeof languages] || languages.sv

  return (
    <div className="ml-2 flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton
            aria-label="Byt språk"
            className="flex h-9 w-9 items-center justify-center rounded-md text-xl transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {/* Visa flaggan för nuvarande språk */}
            {currentLang.flag}
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
          <MenuItems className="ring-opacity-5 absolute right-0 z-50 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black focus:outline-none dark:divide-gray-700 dark:bg-gray-800">
            <div className="p-1">
              {Object.entries(languages).map(([key, lang]) => (
                <MenuItem key={key}>
                  {({ active }) => (
                    <button
                      onClick={() => onSelectChange(key as 'sv' | 'en')}
                      className={`${
                        active ? 'bg-primary-600 text-white' : 'text-gray-900 dark:text-gray-100'
                      } group flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm font-medium`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  )}
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}

export default LanguageSwitch
