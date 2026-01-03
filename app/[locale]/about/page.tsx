import Image from '@/components/Image'
import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'
import { getSkills, getAboutContent } from '@/data/index'
import HardSkillRating from '@/components/HardSkillRating'
import siteMetadata from '@/data/siteMetadata'

export const metadata = {
  title: 'Om mig',
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale
  const author = getAboutContent(locale)
  const skills = getSkills(locale)

  // Hjälpfunktion för att hitta skills från din array baserat på id
  const getSkill = (id: string) => skills.find((s) => s.id === id)

  // Gruppera skills
  const strategySkills = [
    getSkill('strategy'),
    getSkill('leadership'),
    getSkill('consulting'),
    getSkill('entrepreneurship'),
  ].filter((s) => s !== undefined)

  const techSkills = [
    getSkill('nextjs'),
    getSkill('typescript'),
    getSkill('python'),
    getSkill('sql'),
  ].filter((s) => s !== undefined)

  const toolSkills = [getSkill('figma'), getSkill('catia'), getSkill('git')].filter(
    (s) => s !== undefined
  )

  const authorContact = author as { email?: string; linkedin?: string }
  const email = authorContact.email || siteMetadata.email
  const linkedin = authorContact.linkedin || siteMetadata.linkedin

  const t = {
    strategy: locale === 'en' ? 'Strategy & Leadership' : 'Strategi & Ledarskap',
    tech: locale === 'en' ? 'Technical Development' : 'Teknisk Utveckling',
    tools: locale === 'en' ? 'Tools & Design' : 'Verktyg & Design',
    downloadCv: locale === 'en' ? 'Download CV' : 'Ladda ner CV',
    intro:
      locale === 'en'
        ? 'I combine engineering with business strategy.'
        : 'Jag kombinerar ingenjörskonst med affärsstrategi.',
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* --- HERO SECTION --- */}
      <div className="mb-12 border-b border-gray-200 pb-12 dark:border-gray-700">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:text-left">
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg md:h-48 md:w-48 dark:border-gray-800">
            {author.avatar && (
              <Image
                src={author.avatar}
                alt="Avatar"
                width={192}
                height={192}
                className="h-full w-full object-cover"
                priority
              />
            )}
          </div>
          <div className="flex-1 pt-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
              {author.name}
            </h1>
            <p className="text-primary-600 dark:text-primary-400 mt-2 text-xl font-medium">
              {author.title}
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">{t.intro}</p>

            <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
              <SocialIcon kind="mail" href={`mailto:${email}`} size={6} />
              <SocialIcon kind="linkedin" href={linkedin} size={6} />

              <Link
                href="/cv.pdf"
                target="_blank"
                className="ml-4 inline-flex items-center rounded-full bg-gray-900 px-5 py-2 text-sm font-bold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                {t.downloadCv}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* --- VÄNSTER KOLUMN (Sidebar) --- */}
        <div className="space-y-8 lg:col-span-1">
          <div className="space-y-6">
            <div className="pt-6">
              <h3 className="mb-4 text-xs font-bold tracking-wider text-gray-500 uppercase">
                {t.strategy}
              </h3>
              <div className="flex flex-col gap-2">
                {strategySkills.map(
                  (skill) => skill && <HardSkillRating key={skill.id} skill={skill} />
                )}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
              <h3 className="mb-4 text-xs font-bold tracking-wider text-gray-500 uppercase">
                {t.tech}
              </h3>
              <div className="flex flex-col gap-2">
                {techSkills.map(
                  (skill) => skill && <HardSkillRating key={skill.id} skill={skill} />
                )}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
              <h3 className="mb-4 text-xs font-bold tracking-wider text-gray-500 uppercase">
                {t.tools}
              </h3>
              <div className="flex flex-col gap-2">
                {toolSkills.map(
                  (skill) => skill && <HardSkillRating key={skill.id} skill={skill} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* --- HÖGER KOLUMN (Main Content) --- */}
        <div className="lg:col-span-2">
          <div className="prose dark:prose-invert max-w-none">
            {author.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
