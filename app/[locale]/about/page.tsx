import Image from '@/components/Image'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import { getSkills, getAboutContent } from '@/data/index'
import { Skill } from '@/data/types'
import HardSkillRating from '@/components/HardSkillRating'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'

export function generateMetadata({ params }: { params: { locale: string } }) {
  return genPageMetadata({
    title: params.locale === 'en' ? 'About' : 'Om mig',
    locale: params.locale,
  })
}

const textLink =
  'text-ink hover:text-accent-text font-medium underline decoration-1 underline-offset-4 transition-colors'

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale
  const author = getAboutContent(locale)
  const skills = getSkills(locale)

  const pick = (ids: string[]) =>
    ids.map((id) => skills.find((s) => s.id === id)).filter((s): s is Skill => !!s)

  const authorContact = author as { email?: string; linkedin?: string }
  const email = authorContact.email || siteMetadata.email
  const linkedin = authorContact.linkedin || siteMetadata.linkedin
  const github = siteMetadata.github

  const t = {
    tech: locale === 'en' ? 'Selected Programming Languages' : 'Urval programspråk',
    ai: locale === 'en' ? 'AI & Data' : 'AI & Data',
    tools: locale === 'en' ? 'Tools & Platforms' : 'Verktyg & Plattformar',
    downloadCv: locale === 'en' ? 'Download CV' : 'Ladda ner CV',
    intro:
      locale === 'en'
        ? 'I build AI and software systems, and combine engineering with business strategy.'
        : 'Jag bygger AI- och mjukvarusystem och förenar ingenjörskonst med affärsstrategi.',
    story: locale === 'en' ? 'Background' : 'Bakgrund',
    skills: locale === 'en' ? 'Skills' : 'Kompetenser',
    portrait: locale === 'en' ? 'Portrait of Simon Carlén' : 'Porträtt av Simon Carlén',
  }

  const skillGroups = [
    { title: t.tech, items: pick(['python', 'typescript', 'java', 'nextjs', 'sql']) },
    { title: t.ai, items: pick(['machine-learning', 'time-series', 'mcp', 'ai-agents']) },
    { title: t.tools, items: pick(['canoe', 'docker', 'gcp', 'git', 'matlab']) },
  ]

  return (
    <>
      <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7 md:pb-4">
          <PageTitle title={author.name} description={t.intro}>
            <ul className="enter enter-2 text-muted mt-8 space-y-1">
              {author.title.split(' | ').map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="enter enter-3 mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/cv.pdf"
                target="_blank"
                className="bg-accent text-accent-ink hover:bg-ink hover:text-bg inline-flex h-12 items-center px-6 font-medium transition-colors"
              >
                {t.downloadCv}
              </Link>
              <a href={`mailto:${email}`} className={textLink}>
                {email}
              </a>
              <Link href={linkedin} className={textLink}>
                LinkedIn
              </Link>
              <Link href={github} className={textLink}>
                GitHub
              </Link>
            </div>
          </PageTitle>
        </div>
        {author.avatar && (
          <figure className="enter enter-2 bg-surface relative aspect-[4/3] overflow-hidden md:col-span-5 md:aspect-[4/5]">
            <Image
              src={author.avatar}
              alt={t.portrait}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-[50%_20%]"
              priority
            />
          </figure>
        )}
      </div>

      <section
        aria-labelledby="story-title"
        className="reveal mt-24 grid gap-8 md:mt-32 md:grid-cols-12"
      >
        <h2
          id="story-title"
          className="text-head leading-[1.05] font-medium tracking-[-0.03em] md:col-span-4"
        >
          {t.story}
        </h2>
        <div className="max-w-[65ch] space-y-6 leading-[1.7] md:col-span-8">
          {author.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="skills-title" className="reveal mt-24 md:mt-32">
        <h2
          id="skills-title"
          className="text-head mb-10 leading-[1.05] font-medium tracking-[-0.03em] md:mb-14"
        >
          {t.skills}
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lead mb-6 font-medium">{group.title}</h3>
              <div className="flex flex-col gap-2">
                {group.items.map((skill) => (
                  <HardSkillRating key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
