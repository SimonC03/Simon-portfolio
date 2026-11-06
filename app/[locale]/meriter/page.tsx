import { ReactNode } from 'react'
import { getCertifications, getAwards, getMemberships, getLanguages } from '@/data/index'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import { genPageMetadata } from 'app/seo'

export function generateMetadata({ params }: { params: { locale: string } }) {
  return genPageMetadata({
    title: params.locale === 'en' ? 'Achievements' : 'Meriter',
    locale: params.locale,
  })
}

// One group: heading in the left columns, its entries in columns on the right.
function Group({
  id,
  title,
  cols = 'sm:grid-cols-2',
  children,
}: {
  id: string
  title: string
  cols?: string
  children: ReactNode
}) {
  return (
    <section
      aria-labelledby={id}
      className="reveal mt-24 grid grid-cols-1 gap-10 first:mt-16 md:mt-32 md:grid-cols-12 md:gap-8 md:first:mt-24"
    >
      <h2 id={id} className="text-head leading-[1.05] font-medium tracking-[-0.03em] md:col-span-4">
        {title}
      </h2>
      <ul className={`grid grid-cols-1 gap-x-8 gap-y-10 md:col-span-8 ${cols}`}>{children}</ul>
    </section>
  )
}

function Item({ name, meta, text }: { name: ReactNode; meta: string; text?: string }) {
  return (
    <li>
      <h3 className="font-medium">{name}</h3>
      <p className="text-small text-muted mt-1">{meta}</p>
      {text && <p className="text-muted mt-3 max-w-[60ch]">{text}</p>}
    </li>
  )
}

export default function MeriterPage({ params }: { params: { locale: string } }) {
  const locale = params.locale
  const certificationsData = getCertifications(locale)
  const awardsData = getAwards(locale)
  const membershipsData = getMemberships(locale)
  const languagesData = getLanguages(locale)

  const t = {
    title: locale === 'en' ? 'Achievements & Engagements' : 'Meriter & Engagemang',
    description:
      locale === 'en'
        ? 'An overview of certifications, awards, memberships, and languages.'
        : 'En översikt av certifieringar, priser, föreningsliv och språk.',
    certs: locale === 'en' ? 'Certificates & Licenses' : 'Certifikat & Licenser',
    awards: locale === 'en' ? 'Awards' : 'Utmärkelser',
    memberships: locale === 'en' ? 'Memberships & Associations' : 'Föreningar & Medlemskap',
    languages: locale === 'en' ? 'Languages' : 'Språk',
  }

  return (
    <>
      <PageTitle title={t.title} description={t.description} />

      <div>
        <Group id="certs-title" title={t.certs}>
          {certificationsData.map((cert) => (
            <Item
              key={cert.title}
              name={
                cert.url ? (
                  <Link
                    href={cert.url}
                    className="hover:text-accent-text underline-offset-4 transition-colors hover:underline"
                  >
                    {cert.title}
                  </Link>
                ) : (
                  cert.title
                )
              }
              meta={`${cert.issuer} · ${cert.date}`}
            />
          ))}
        </Group>

        <Group id="awards-title" title={t.awards}>
          {awardsData.map((award) => (
            <Item
              key={award.title}
              name={award.title}
              meta={award.organization}
              text={award.summary}
            />
          ))}
        </Group>

        <Group id="memberships-title" title={t.memberships}>
          {membershipsData.map((member) => (
            <Item
              key={member.organization}
              name={member.organization}
              meta={member.role}
              text={member.summary}
            />
          ))}
        </Group>

        <Group id="languages-title" title={t.languages} cols="sm:grid-cols-3">
          {languagesData.map((lang) => (
            <Item key={lang.language} name={lang.language} meta={lang.proficiency} />
          ))}
        </Group>
      </div>
    </>
  )
}
