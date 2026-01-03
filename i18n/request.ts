import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  // Hämta locale från URL:en
  let locale = await requestLocale

  // Typ-säker kontroll: Om locale är undefined eller inte finns i vår lista
  // Vi använder 'as' för att berätta för TS att vi jämför med våra godkända språk
  if (!locale || !routing.locales.includes(locale as 'sv' | 'en')) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: {}, // Tomt just nu eftersom du använder egna datafiler
  }
})
