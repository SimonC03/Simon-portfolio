import { Reference } from '@/data/types' // <-- ÄNDRAD

const ReferencesSection = ({ references }: { references: Reference[] }) => {
  if (!references || references.length === 0) return null

  return (
    <div className="space-y-4">
      <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">Referenser</h3>
      <div className="grid gap-4 sm:grid-cols-1">
        {references.map((ref, idx) => (
          <div
            key={idx}
            className="relative rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/40"
          >
            {/* Citat-tecken */}
            <div className="text-primary-200 dark:text-primary-900 absolute top-4 right-6 font-serif text-4xl">
              ”
            </div>

            {ref.quote && (
              <blockquote className="relative z-10 mb-4 text-lg text-gray-700 italic dark:text-gray-300">
                {ref.quote}
              </blockquote>
            )}

            <div className="mt-4 flex items-center gap-3 border-t border-gray-200 pt-4 dark:border-gray-700">
              <div className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 flex h-10 w-10 items-center justify-center rounded-full font-bold">
                {ref.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-gray-900 dark:text-gray-100">{ref.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {ref.role} @ {ref.company}
                </div>
              </div>
            </div>

            {ref.contact && (
              <div className="mt-3 text-xs text-gray-400">
                Kontakt:{' '}
                <a
                  href={`mailto:${ref.contact}`}
                  className="hover:text-primary-500 hover:underline"
                >
                  {ref.contact}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReferencesSection
