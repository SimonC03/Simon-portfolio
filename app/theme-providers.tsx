'use client'

import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import { SearchProvider } from 'pliny/search'
import KBarActions from '@/components/KBarActions'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      {/* Kontrollera om search finns definierat i siteMetadata innan vi renderar */}
      {siteMetadata.search ? (
        <SearchProvider searchConfig={siteMetadata.search}>
          <KBarActions />
          {children}
        </SearchProvider>
      ) : (
        /* Om sök inte är aktiverat, rendera bara innehållet som vanligt */
        children
      )}
    </ThemeProvider>
  )
}
