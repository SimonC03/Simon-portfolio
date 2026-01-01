import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { experienceData, projectsData } from '@/data/cvData'
import Card from '@/components/Card'
import Image from '@/components/Image'

export default function Home() {
  return (
    <>
      {/* --- HERO SEKTION --- */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div className="flex flex-col-reverse items-start sm:flex-row sm:items-center sm:justify-between">
            <div className="mt-4 max-w-2xl sm:mt-0">
              <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
                Hej, jag är {siteMetadata.author.split(' ')[0]}
              </h1>
              <p className="mt-4 text-lg leading-7 text-gray-500 dark:text-gray-400">
                {siteMetadata.description}
              </p>
              <div className="mt-6 flex gap-4">
                <Link
                  href="/about"
                  className="bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-400 focus:ring-primary-600 rounded-md px-4 py-2 font-medium text-white focus:ring-2 focus:ring-offset-2 focus:outline-none dark:ring-offset-black"
                >
                  Läs mer om mig
                </Link>
                <Link
                  href={`mailto:${siteMetadata.email}`}
                  className="rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  Kontakta mig
                </Link>
              </div>
            </div>
            <div className="relative mb-4 h-32 w-32 sm:mb-0 sm:h-40 sm:w-40">
              <Image
                src={siteMetadata.siteLogo}
                alt="Avatar"
                width={160}
                height={160}
                className="rounded-full border-2 border-gray-200 shadow-lg dark:border-gray-700"
                priority
              />
            </div>
          </div>
        </div>

        {/* --- SENASTE ERFARENHET --- */}
        <div className="py-10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Senaste Erfarenhet
            </h2>
            <Link
              href="/experience"
              className="text-primary-500 hover:text-primary-600 font-medium"
            >
              Se alla &rarr;
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {experienceData.slice(0, 2).map((d) => (
              <div
                key={d.id}
                className="rounded-lg border border-gray-200 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800/50"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{d.title}</h3>
                <span className="text-primary-500 text-sm font-medium uppercase">{d.company}</span>
                <p className="mt-1 mb-3 text-sm text-gray-500">
                  {d.range} | {d.location}
                </p>
                <p className="text-gray-600 dark:text-gray-400">{d.summary}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- UTVALDA PROJEKT --- */}
        <div className="py-10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Utvalda Projekt
            </h2>
            <Link href="/projects" className="text-primary-500 hover:text-primary-600 font-medium">
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
