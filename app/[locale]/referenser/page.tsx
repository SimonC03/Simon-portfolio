import { getReferences } from '@/data/index'
import { genPageMetadata } from 'app/seo'
import Image from '@/components/Image'
import PageTitle from '@/components/PageTitle'

export function generateMetadata({ params }: { params: { locale: string } }) {
  return genPageMetadata({
    title: params.locale === 'en' ? 'References' : 'Referenser',
    locale: params.locale,
  })
}

export default function ReferencesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale
  const referencesData = getReferences(locale)

  const t = {
    title: locale === 'en' ? 'Recommendations' : 'Rekommendationer',
    description:
      locale === 'en'
        ? 'What colleagues, managers, and partners say about me.'
        : 'Vad kollegor, chefer och samarbetspartners säger om mig.',
  }

  return (
    <>
      <PageTitle title={t.title} description={t.description} />

      <div className="reveal mt-16 space-y-20 md:mt-24 md:space-y-28">
        {referencesData.map((ref) => (
          <figure key={ref.name} className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <blockquote className="text-lead max-w-[56ch] leading-[1.5] md:col-span-8 md:col-start-5 md:row-start-1">
              <p>{ref.quote}</p>
            </blockquote>
            <figcaption className="flex items-center gap-4 md:col-span-4 md:row-start-1 md:items-start">
              <span
                aria-hidden="true"
                className="bg-accent text-accent-ink relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full font-medium"
              >
                {ref.image ? (
                  <Image src={ref.image} alt="" fill sizes="48px" className="object-cover" />
                ) : (
                  ref.name.charAt(0)
                )}
              </span>
              <span>
                <span className="block font-medium">{ref.name}</span>
                <span className="text-small text-muted block">
                  {[ref.role, ref.company].filter(Boolean).join(', ')}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  )
}
