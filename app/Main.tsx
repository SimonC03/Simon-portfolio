import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { experienceData, educationData } from '@/data/cvData' // Importera din nya data
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import SocialIcon from '@/components/social-icons'

export default function Home() {
  return (
    <>
      {/* --- HERO / OM MIG KORT --- */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div className="flex flex-col-reverse items-start sm:flex-row sm:items-center sm:justify-between">
            <div className="mt-4 sm:mt-0">
              <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
                Hej, jag är {siteMetadata.author.split(' ')[0]}
              </h1>
              <p className="mt-4 text-lg leading-7 text-gray-500 dark:text-gray-400">
                {siteMetadata.description}
              </p>
              <div className="mt-4">
                <Link href="/about" className="text-primary-500 hover:text-primary-600 font-medium">
                  Läs mer om mig &rarr;
                </Link>
              </div>
            </div>
            <div className="relative h-32 w-32 sm:h-40 sm:w-40">
              <img
                src={siteMetadata.siteLogo}
                alt="Avatar"
                className="rounded-full border-2 border-gray-200 shadow-lg dark:border-gray-700"
              />
            </div>
          </div>
        </div>

        {/* --- SENASTE ERFARENHET (Teaser) --- */}
        <div className="py-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Senaste Erfarenhet
            </h2>
            <Link href="/experience" className="text-primary-500 hover:text-primary-600">
              Se alla &rarr;
            </Link>
          </div>
          {/* Visar bara de 2 första jobben och bara "summary", inte detaljlistan */}
          <div className="space-y-6">
            {experienceData.slice(0, 2).map((d) => (
              <div key={d.company}>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {d.title} @ {d.company}
                </h3>
                <p className="text-sm text-gray-500">
                  {d.range} | {d.location}
                </p>
                <p className="mt-1 text-gray-600 dark:text-gray-400">{d.summary}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- UTVALDA PROJEKT (Teaser) --- */}
        <div className="py-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Utvalda Projekt
            </h2>
            <Link href="/projects" className="text-primary-500 hover:text-primary-600">
              Se alla &rarr;
            </Link>
          </div>
          <div className="-m-4 flex flex-wrap">
            {projectsData.slice(0, 2).map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
