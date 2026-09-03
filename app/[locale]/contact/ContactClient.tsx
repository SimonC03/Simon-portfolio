'use client'

import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { Linkedin, Github } from '@/components/social-icons/icons'

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
    meetPre: 'Prefer meeting in person? I am based in',
    city: 'Gothenburg',
    meetPost: 'but flexible for travel or digital meetings.',
  },
}

export default function ContactClient({ locale }: { locale: string }) {
  const t = translations[locale === 'en' ? 'en' : 'sv']
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteMetadata.email)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  // Shared classes so every card has exactly the same look
  const cardClasses =
    'group relative flex h-full w-full flex-col items-start justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-primary-50 to-white p-8 text-left shadow-sm transition-all hover:scale-[1.01] hover:shadow-xl dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700'

  const ArrowIcon = () => (
    <div className="absolute top-8 right-8 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="text-primary-500 h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </div>
  )

  const BgBubble = () => (
    <div className="bg-primary-100/50 dark:bg-primary-900/20 group-hover:bg-primary-200/50 dark:group-hover:bg-primary-800/30 absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full blur-3xl transition-all"></div>
  )

  const CtaArrow = ({ hoverClass }: { hoverClass: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 text-gray-400 transition-colors ${hoverClass}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          {t.title}
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{t.intro}</p>
      </div>

      <div className="container py-12">
        {/* Mail spans both rows on the left, LinkedIn and GitHub stack on the right */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:grid-rows-2">
          <div className="min-h-[320px] lg:col-span-2 lg:row-span-2">
            <button onClick={handleCopyEmail} className={cardClasses}>
              <ArrowIcon />

              <div className="relative z-10 mb-8 rounded-full bg-white p-4 shadow-sm transition-transform duration-300 group-hover:scale-110 dark:bg-gray-800">
                {isCopied ? (
                  <span className="text-3xl" role="img" aria-label="copied">
                    ✅
                  </span>
                ) : (
                  <span className="text-3xl" role="img" aria-label="mail">
                    ✉️
                  </span>
                )}
              </div>

              <div className="z-10 mt-auto w-full">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {isCopied ? t.mailCopied : t.mailTitle}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">{t.mailText}</p>

                <div className="border-primary-500 mt-6 flex items-center justify-between border-b-2 pb-2">
                  <span className="mr-4 truncate text-lg font-bold text-gray-900 sm:text-xl dark:text-gray-100">
                    {siteMetadata.email}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-gray-400 transition-all ${isCopied ? 'scale-0' : 'group-hover:text-primary-500 scale-100'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>

              <BgBubble />
            </button>
          </div>

          <div className="min-h-[220px]">
            <a
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClasses}
            >
              <ArrowIcon />

              <div className="relative z-10 mb-8 rounded-full bg-white p-4 shadow-sm transition-transform duration-300 group-hover:scale-110 dark:bg-gray-800">
                <Linkedin className="h-8 w-8 fill-[#0077b5] dark:fill-white" />
              </div>

              <div className="z-10 mt-auto w-full">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">LinkedIn</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">{t.linkedinText}</p>

                <div className="mt-6 flex items-center justify-between border-b-2 border-transparent pb-2 transition-colors group-hover:border-[#0077b5]">
                  <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {t.linkedinCta}
                  </span>
                  <CtaArrow hoverClass="group-hover:text-[#0077b5]" />
                </div>
              </div>

              <BgBubble />
            </a>
          </div>

          <div className="min-h-[220px]">
            <a
              href={siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClasses}
            >
              <ArrowIcon />

              <div className="relative z-10 mb-8 rounded-full bg-white p-4 shadow-sm transition-transform duration-300 group-hover:scale-110 dark:bg-gray-800">
                <Github className="h-8 w-8 fill-gray-900 dark:fill-white" />
              </div>

              <div className="z-10 mt-auto w-full">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">GitHub</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">{t.githubText}</p>

                <div className="mt-6 flex items-center justify-between border-b-2 border-transparent pb-2 transition-colors group-hover:border-gray-900 dark:group-hover:border-white">
                  <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {t.githubCta}
                  </span>
                  <CtaArrow hoverClass="group-hover:text-gray-900 dark:group-hover:text-white" />
                </div>
              </div>

              <BgBubble />
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8 text-center dark:border-gray-800">
          <p className="mx-auto max-w-2xl text-gray-500 dark:text-gray-400">
            {t.meetPre}
            <span className="font-semibold text-gray-900 dark:text-gray-100"> {t.city} </span>
            {t.meetPost}
          </p>
        </div>
      </div>
    </div>
  )
}
