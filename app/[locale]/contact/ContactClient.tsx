'use client'

import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'

const translations = {
  sv: {
    title: 'Kontakt',
    intro: 'Öppen för nya möjligheter? Har du en fråga? Tveka inte att höra av dig.',
    mailTitle: 'Skicka ett mail',
    mailCopied: 'Adress kopierad!',
    mailText: 'Jag svarar oftast inom 24 timmar. Klicka för att kopiera.',
    linkedinText: 'Se hela mitt CV och nätverk.',
    linkedinCta: 'Gå till profil',
    githubText: 'Kod och projekt jag bygger.',
    githubCta: 'Se mina repon',
    cvText: 'Utbildning, erfarenhet och meriter i en PDF.',
    cvCta: 'Ladda ner CV',
    meetPre: 'Föredrar du ett fysiskt möte? Jag utgår från',
    city: 'Göteborg',
    meetPost: 'men är flexibel för resor eller digitala möten.',
  },
  en: {
    title: 'Contact',
    intro: 'Open to new opportunities? Have a question? Do not hesitate to reach out.',
    mailTitle: 'Send an email',
    mailCopied: 'Address copied!',
    mailText: 'I usually reply within 24 hours. Click to copy.',
    linkedinText: 'See my full CV and network.',
    linkedinCta: 'Go to profile',
    githubText: 'Code and projects I am building.',
    githubCta: 'See my repositories',
    cvText: 'Education, experience and achievements in one PDF.',
    cvCta: 'Download CV',
    meetPre: 'Prefer meeting in person? I am based in',
    city: 'Gothenburg',
    meetPost: 'but flexible for travel or digital meetings.',
  },
}

export default function ContactClient({ locale }: { locale: string }) {
  const t = translations[locale === 'en' ? 'en' : 'sv']
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard
      ?.writeText(siteMetadata.email)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2500)
      })
      .catch(() => {})
  }

  const channels = [
    { title: 'LinkedIn', text: t.linkedinText, cta: t.linkedinCta, href: siteMetadata.linkedin },
    { title: 'GitHub', text: t.githubText, cta: t.githubCta, href: siteMetadata.github },
    { title: 'CV', text: t.cvText, cta: t.cvCta, href: '/cv.pdf' },
  ]

  return (
    <>
      <PageTitle title={t.title} description={t.intro} />

      <div className="reveal mt-16 grid grid-cols-1 gap-16 md:mt-24 lg:grid-cols-12 lg:gap-8">
        <section
          aria-labelledby="mail-title"
          className="bg-surface flex flex-col p-8 md:p-14 lg:col-span-7"
        >
          <h2 id="mail-title" className="text-lead font-medium">
            {t.mailTitle}
          </h2>
          <p id="mail-hint" className="text-muted mt-2">
            {t.mailText}
          </p>
          <div className="mt-12 lg:mt-auto lg:pt-16">
            <button
              type="button"
              onClick={handleCopyEmail}
              aria-describedby="mail-hint"
              className="text-lead sm:text-head hover:text-accent-text text-left leading-[1.1] font-medium tracking-[-0.03em] break-all underline decoration-1 underline-offset-[0.2em] transition-colors"
            >
              {siteMetadata.email}
            </button>
            <p role="status" className="text-small text-accent-text mt-4 min-h-[1.5em] font-medium">
              {isCopied ? t.mailCopied : ''}
            </p>
          </div>
        </section>

        <ul className="space-y-12 lg:col-span-4 lg:col-start-9 lg:self-center">
          {channels.map((c) => (
            <li key={c.title}>
              <h2 className="text-lead font-medium">{c.title}</h2>
              <p className="text-muted mt-1">{c.text}</p>
              <Link
                href={c.href}
                target="_blank"
                className="text-small text-accent-text mt-3 inline-block font-medium underline-offset-4 hover:underline"
              >
                {c.cta} →
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-muted mt-24 max-w-[60ch] md:mt-32">
        {t.meetPre} <span className="text-ink font-medium">{t.city}</span> {t.meetPost}
      </p>
    </>
  )
}
