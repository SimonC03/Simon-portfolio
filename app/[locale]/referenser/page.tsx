import { referencesData } from '@/data/sv/references/references' // Ändrad import
import { genPageMetadata } from 'app/seo'
import Image from 'next/image'
export const metadata = genPageMetadata({ title: 'Referenser' })

export default function ReferencesPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Rekommendationer
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Vad kollegor, chefer och samarbetspartners säger om mig.
        </p>
      </div>

      <div className="container py-12">
        {/* Ändrat till en centrerad kolumn med max-bredd */}
        <div className="mx-auto max-w-3xl space-y-8">
          {referencesData.map((ref, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl border border-gray-100 bg-gray-50 p-8 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800/50"
            >
              <div className="mb-6 flex items-center gap-5">
                {/* Avatar / Initialer */}
                <div className="bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white text-xl font-bold shadow-sm dark:border-gray-800">
                  {ref.image ? (
                    <Image src={ref.image} alt={ref.name} className="h-full w-full object-cover" />
                  ) : (
                    ref.name.charAt(0)
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{ref.name}</h3>
                  <div className="text-base text-gray-500 dark:text-gray-400">
                    {ref.role} @{' '}
                    <span className="font-medium text-gray-900 dark:text-gray-200">
                      {ref.company}
                    </span>
                  </div>
                </div>
              </div>

              <blockquote className="border-primary-200 dark:border-primary-900 relative border-l-4 pl-4">
                <p className="text-lg leading-relaxed text-gray-700 italic dark:text-gray-300">
                  "{ref.quote}"
                </p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
