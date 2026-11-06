import { Reference } from '@/data/types'

const ReferencesSection = ({ references }: { references: Reference[] }) => {
  if (!references || references.length === 0) return null

  return (
    <div>
      <h3 className="text-small text-muted mb-4 font-medium">Referenser</h3>
      <div className="bg-surface space-y-12 p-6 md:p-10">
        {references.map((ref, idx) => (
          <figure key={idx}>
            {ref.quote && (
              <blockquote className="text-lead mb-8 max-w-[52ch] leading-[1.45]">
                <p>{ref.quote}</p>
              </blockquote>
            )}
            <figcaption className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="bg-accent text-accent-ink flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-medium"
              >
                {ref.name.charAt(0)}
              </span>
              <span>
                <span className="block font-medium">{ref.name}</span>
                <span className="text-small text-muted block">
                  {[ref.role, ref.company].filter(Boolean).join(', ')}
                </span>
                {ref.contact && (
                  <span className="text-small text-muted mt-1 block">
                    Kontakt:{' '}
                    <a
                      href={`mailto:${ref.contact}`}
                      className="hover:text-accent-text underline decoration-1 underline-offset-4 transition-colors"
                    >
                      {ref.contact}
                    </a>
                  </span>
                )}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

export default ReferencesSection
