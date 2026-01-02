import Image from '@/components/Image'
import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'
import { SKILLS } from '@/data/resume/skills' // Uppdaterad import
import HardSkillRating from '@/components/HardSkillRating'
import { aboutContent } from '@/data/ui/about' // Uppdaterad import

export const metadata = {
  title: 'Om mig',
  description: 'Min bakgrund, min vision och mina kompetenser.',
}

export default function AboutPage() {
  // Vi använder nu aboutContent direkt istället för allAuthors
  const author = aboutContent

  // Gruppera skills för vänsterspalten
  const strategySkills = [SKILLS.strategy, SKILLS.leadership, SKILLS.analysis].filter(Boolean)
  const techSkills = [SKILLS.next, SKILLS.ts, SKILLS.python, SKILLS.sql].filter(Boolean)
  const toolSkills = [SKILLS.figma, SKILLS.catia, SKILLS.git].filter(Boolean)

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
              {author.occupation}
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Jag kombinerar ingenjörskonst med affärsstrategi. Här kan du läsa om min resa och vart
              jag är på väg.
            </p>

            {/* Socials & Actions */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
              <SocialIcon kind="mail" href={`mailto:${author.email}`} size={6} />
              <SocialIcon kind="linkedin" href={author.linkedin} size={6} />

              <Link
                href="/static/cv.pdf"
                target="_blank"
                className="ml-4 inline-flex items-center rounded-full bg-gray-900 px-5 py-2 text-sm font-bold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                Ladda ner CV
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* --- VÄNSTER KOLUMN (Sidebar) --- */}
        <div className="space-y-8 lg:col-span-1">
          {/* KOMPETENSPROFIL */}
          <div className="space-y-6">
            <div className="pt-6">
              <h3 className="mb-4 text-xs font-bold tracking-wider text-gray-500 uppercase">
                Strategi & Ledarskap
              </h3>
              <div className="flex flex-col gap-2">
                {strategySkills.map((skill) => (
                  <HardSkillRating key={skill.id} skill={skill} />
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
              <h3 className="mb-4 text-xs font-bold tracking-wider text-gray-500 uppercase">
                Teknisk Utveckling
              </h3>
              <div className="flex flex-col gap-2">
                {techSkills.map((skill) => (
                  <HardSkillRating key={skill.id} skill={skill} />
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
              <h3 className="mb-4 text-xs font-bold tracking-wider text-gray-500 uppercase">
                Verktyg & Design
              </h3>
              <div className="flex flex-col gap-2">
                {toolSkills.map((skill) => (
                  <HardSkillRating key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- HÖGER KOLUMN (Main Content) --- */}
        <div className="lg:col-span-2">
          <div className="prose dark:prose-invert max-w-none">
            {/* Ersätter MDXLayoutRenderer med en enkel loop av din biografi-text */}
            {author.biography.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
