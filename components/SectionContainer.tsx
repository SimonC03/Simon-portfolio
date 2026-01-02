import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    // Ändrat från max-w-5xl till max-w-7xl
    // Detta gör att hela sidan (header + innehåll) kan bli bredare på stora skärmar
    <section className="mx-auto max-w-7xl px-4 sm:px-6 xl:px-0">{children}</section>
  )
}
