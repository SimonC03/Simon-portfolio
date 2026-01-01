import { experienceData } from '@/data/cvData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Erfarenhet' })

export default function ExperiencePage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Arbetslivserfarenhet
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          En djupdykning i min karriär och mina ansvarsområden.
        </p>
      </div>
      <div className="py-8">
        {experienceData.map((d) => (
          <div key={d.company} className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="md:col-span-1">
              <span className="text-primary-500 text-sm font-semibold uppercase">{d.range}</span>
              <div className="text-sm text-gray-500">{d.location}</div>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {d.title} <span className="text-gray-500">@ {d.company}</span>
              </h2>
              <p className="mt-2 mb-4 text-gray-600 italic dark:text-gray-300">{d.summary}</p>
              <ul className="list-disc space-y-2 pl-4 text-gray-600 dark:text-gray-400">
                {d.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
