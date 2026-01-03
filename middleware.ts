import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // En lista över alla språk som stöds
  locales: ['en', 'sv'],

  // Standard-språket om inget matchar
  defaultLocale: 'sv',

  // Valfritt: Om du vill dölja "sv" prefixet för standardspråket (t.ex. /about istället för /sv/about)
  // kan du sätta denna till 'as-needed'. Annars 'always' (standard).
  localePrefix: 'always',
})

export const config = {
  // Matcher ser till att middleware körs på rätt sidor men ignorerar interna filer
  matcher: [
    // Matcha alla sökvägar...
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // ...men inkludera roten "/" och specifika språk-mappar
    // Detta mönster utesluter filer med punkt (t.ex. favicon.ico, bilder)
  ],
}
