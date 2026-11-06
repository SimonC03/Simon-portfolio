import { ReactNode } from 'react'

interface Props {
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
}

// Shared opening for every sub-page: one h1 and one plain sentence under it.
export default function PageTitle({ title, description, children }: Props) {
  return (
    <div className="pt-10 md:pt-20">
      <h1 className="enter text-display leading-[0.95] font-medium tracking-[-0.045em]">{title}</h1>
      {description && (
        <p className="enter enter-2 text-lead mt-6 max-w-[48ch] leading-[1.4]">{description}</p>
      )}
      {children}
    </div>
  )
}
