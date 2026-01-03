// i18n/routing.ts
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // En lista över alla språk som stöds
  locales: ['sv', 'en'],

  // Standard-språket om inget matchar
  defaultLocale: 'sv',

  // Samma inställning som du hade tidigare
  localePrefix: 'always',
})
