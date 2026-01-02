'use client'

import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import { SearchProvider } from 'pliny/search' // <--- Matchar din index.d.ts
import KBarActions from '@/components/KBarActions'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      {/* SearchProvider tar 'searchConfig' och 'children', precis som din fil visar */}
      <SearchProvider searchConfig={siteMetadata.search}>
        {/* KBarActions ligger nu tryggt inuti providern */}
        <KBarActions />

        {children}
      </SearchProvider>
    </ThemeProvider>
  )
}
