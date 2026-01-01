import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { skillsData, SKILLS } from '@/data/cvData' // <--- 1. Importera SKILLS
import HardSkillRating from '@/components/HardSkillRating' // <--- 2. Importera komponenten

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  // <--- 3. Välj ut vilka 5 skills du vill highlighta här
  const topSkills = ['next', 'ts', 'strategy', 'leadership', 'figma']

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Om mig
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-x-8">
          {/* Vänsterspalt med avatar och info */}
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
              <SocialIcon kind="bluesky" href={bluesky} />
            </div>

            {/* <--- 4. NY SEKTION: TOP SKILLS --- */}
            <div className="mt-10 w-full space-y-4">
              <h3 className="text-center text-xs font-bold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                Top Skills
              </h3>
              <div className="flex flex-col space-y-2">
                {topSkills.map((id) => {
                  const skill = SKILLS[id]
                  if (!skill) return null
                  return <HardSkillRating key={id} skill={skill} />
                })}
              </div>
            </div>
          </div>

          {/* Huvudinnehåll */}
          <div className="prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2">
            {children}

            {/* Den gamla sektionen kan ligga kvar här under om du vill visa alla skills också */}
            <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
              <h2 className="mb-6 text-2xl font-bold">Alla Färdigheter & Verktyg</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {skillsData.map((group) => (
                  <div key={group.category}>
                    <h3 className="text-primary-500 mb-2 text-lg font-semibold">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
