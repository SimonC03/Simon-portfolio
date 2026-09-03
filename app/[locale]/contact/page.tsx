import { genPageMetadata } from 'app/seo'
import ContactClient from './ContactClient'

export function generateMetadata({ params }: { params: { locale: string } }) {
  return genPageMetadata({
    title: params.locale === 'en' ? 'Contact' : 'Kontakt',
    locale: params.locale,
  })
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  return <ContactClient locale={params.locale} />
}
