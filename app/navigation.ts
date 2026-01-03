// app/navigation.ts
import { createNavigation } from 'next-intl/navigation'
import { routing } from '@/i18n/routing'

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)

// Exportera locales om du behöver använda listan i andra komponenter (t.ex. språkväljare)
export const { locales } = routing
