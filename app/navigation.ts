// app/navigation.ts
import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const locales = ['sv', 'en'] as const
export const localePrefix = 'always' // Eller 'as-needed' om du vill dölja /sv/ som standard

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  localePrefix,
})
