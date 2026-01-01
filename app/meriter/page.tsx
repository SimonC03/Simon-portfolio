import { certificationsData, awardsData, languagesData, getSkills } from '@/data/cvData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Meriter & Övrigt' })

export default function MeriterPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Övriga Meriter
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Certifikat, licenser, språk och föreningsengagemang.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 py-8 md:grid-cols-2">
        {/* --- KOLUMN 1: Certifikat & Licenser --- */}
        <div>
          <h2 className="mb-6 flex items-center text-2xl font-bold text-gray-900 dark:text-gray-100">
            <span className="mr-2">📜</span> Certifikat & Licenser
          </h2>
          <div className="space-y-6">
            {certificationsData.map((c) => (
              <div
                key={c.title}
                className="rounded-lg border border-gray-200 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800/50"
              >
                <h3 className="font-bold text-gray-900 dark:text-gray-100">{c.title}</h3>
                <p className="text-primary-500 text-sm">{c.issuer}</p>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {c.date && <span>Utfärdat: {c.date}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- KOLUMN 2: Utmärkelser, Föreningar & Språk --- */}
        <div className="space-y-12">
          {/* Utmärkelser & Föreningar */}
          <div>
            <h2 className="mb-6 flex items-center text-2xl font-bold text-gray-900 dark:text-gray-100">
              <span className="mr-2">🏆</span> Föreningar & Utmärkelser
            </h2>
            <div className="space-y-4">
              {awardsData.map((a) => (
                <div key={a.title} className="border-l-2 border-gray-300 pl-4 dark:border-gray-600">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{a.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{a.organization}</p>
                  {a.summary && <p className="mt-1 text-sm text-gray-500 italic">{a.summary}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Språk */}
          <div>
            <h2 className="mb-6 flex items-center text-2xl font-bold text-gray-900 dark:text-gray-100">
              <span className="mr-2">🗣️</span> Språk
            </h2>
            <div className="flex flex-col gap-3">
              {languagesData.map((l) => (
                <div
                  key={l.language}
                  className="flex items-center justify-between rounded-md bg-gray-50 px-4 py-3 dark:bg-gray-800"
                >
                  <span className="font-medium text-gray-900 dark:text-gray-100">{l.language}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{l.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
