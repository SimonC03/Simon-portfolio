import { educationData, certificationsData } from '@/data/cvData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Utbildning & Certifikat' })

export default function EducationPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Utbildning
        </h1>
      </div>

      {/* Skolor */}
      <div className="py-8">
        {educationData.map((d) => (
          <div key={d.school} className="border-primary-500 mb-8 flex flex-col border-l-4 pl-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{d.school}</h2>
            <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">{d.degree}</div>
            <span className="mb-2 text-sm text-gray-500">
              {d.year} | {d.location}
            </span>
            <p className="text-gray-600 dark:text-gray-400">{d.summary}</p>
            {d.details && (
              <ul className="mt-2 list-disc pl-4 text-sm text-gray-500 dark:text-gray-400">
                {d.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Certifikat Sektion */}
      <div className="border-t border-gray-200 pt-8 dark:border-gray-700">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Certifikat & Utmärkelser
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {certificationsData.map((c) => (
            <div key={c.title} className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-gray-100">{c.title}</h3>
              <p className="text-sm text-gray-500">
                {c.issuer} • {c.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
