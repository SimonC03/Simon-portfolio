import { Inter } from 'next/font/google'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { ReactNode } from 'react'
import Header from './Header'

interface Props {
  children: ReactNode
  locale: string // <--- LÄGG TILL DENNA
}

const inter = Inter({
  subsets: ['latin'],
})

// Ta emot locale i props
const LayoutWrapper = ({ children, locale }: Props) => {
  return (
    <SectionContainer>
      <div className={`${inter.className} flex h-screen flex-col justify-between font-sans`}>
        {/* Skicka vidare locale till Header */}
        <Header locale={locale} />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
