// middleware.ts
import createMiddleware from 'next-intl/middleware'
import { routing } from '@/i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Matcher ser till att middleware körs på rätt sidor men ignorerar interna filer
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
