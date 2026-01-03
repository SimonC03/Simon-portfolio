import { certificationsData, awardsData, membershipsData } from '@/data/sv/resume/certificates'
import { languagesData } from '@/data/sv/resume/languages'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Meriter & Övrigt' })

export default function MeriterPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* ... (resten av koden är exakt samma som innan) ... */}
      {/* Behåll all JSX-kod nedanför, ändra bara imports i toppen */}
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Meriter & Engagemang
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          En översikt av certifieringar, priser, föreningsliv och språk.
        </p>
      </div>

      <div className="py-10">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* VÄNSTER KOLUMN */}
          <div className="space-y-12">
            {/* 1. CERTIFIKAT */}
            <section>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-xl dark:bg-blue-900/30">
                  📜
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Certifikat & Licenser
                </h2>
              </div>
              <div className="ml-2 space-y-6">
                {certificationsData.map((cert) => (
                  <div key={cert.title} className="group">
                    <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 text-lg font-bold text-gray-900 transition-colors dark:text-gray-100">
                      {cert.url ? (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          {cert.title} <span className="text-xs opacity-50">↗</span>
                        </a>
                      ) : (
                        cert.title
                      )}
                    </h3>
                    <span className="text-primary-600 dark:text-primary-400 mb-1 block text-sm font-bold">
                      {cert.issuer}
                    </span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. UTMÄRKELSER */}
            <section>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 text-xl dark:bg-yellow-900/30">
                  🏆
                </span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Utmärkelser</h2>
              </div>
              <div className="ml-2 space-y-6">
                {awardsData.map((award) => (
                  <div key={award.title} className="group">
                    <h3 className="text-lg leading-tight font-bold text-gray-900 dark:text-gray-100">
                      {award.title}
                    </h3>
                    <span className="text-primary-600 dark:text-primary-400 mt-1 block text-sm font-bold">
                      {award.organization}
                    </span>
                    {award.summary && (
                      <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {award.summary}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* HÖGER KOLUMN */}
          <div className="space-y-12">
            {/* 3. FÖRENINGAR */}
            <section>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-xl dark:bg-green-900/30">
                  🤝
                </span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Föreningar & Medlemskap
                </h2>
              </div>
              <div className="ml-2 space-y-6">
                {membershipsData.map((member) => (
                  <div key={member.organization}>
                    {' '}
                    {/* Notera: Kontrollera att key är unik, t.ex. organization eller title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      {member.role}
                    </h3>
                    <span className="text-primary-600 dark:text-primary-400 mb-1 block text-sm font-bold">
                      {member.organization}
                    </span>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {member.summary}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. SPRÅK */}
            <section>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-xl dark:bg-purple-900/30">
                  🗣️
                </span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Språk</h2>
              </div>
              <div className="ml-2 space-y-6">
                {languagesData.map((lang) => (
                  <div key={lang.language}>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      {lang.language}
                    </h3>
                    <span className="text-primary-600 dark:text-primary-400 block text-sm font-bold">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
