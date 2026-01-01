import { educationData, getSkills } from '@/data/cvData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Utbildning' })

export default function EducationPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Utbildning
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Akademisk bakgrund och examina.
        </p>
      </div>

      <div className="py-8">
        {educationData.map((d) => {
          const skills = d.relatedSkills ? getSkills(d.relatedSkills) : []
          return (
            <div key={d.school} className="border-primary-500 mb-10 flex flex-col border-l-4 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{d.school}</h2>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {d.degree}
              </div>
              <span className="mb-2 text-sm text-gray-500">
                {d.year} | {d.location}
              </span>
              <p className="mb-2 text-gray-600 dark:text-gray-400">{d.summary}</p>

              {d.details && (
                <ul className="mt-2 mb-3 list-disc pl-4 text-sm text-gray-500 dark:text-gray-400">
                  {d.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}

              {/* Visa skills om de finns */}
              {skills.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.id}
                      className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
