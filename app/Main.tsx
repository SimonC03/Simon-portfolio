import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import {
  experienceData,
  educationData,
  projectsData,
  certificationsData,
  referencesData,
} from '@/data/cvData'
import Image from '@/components/Image'

export default function Home() {
  // --- DATA-FILTRERING ---
  const currentWork = experienceData.filter((d) => d.range.includes('Nu')).slice(0, 3)
  const displayWork = currentWork.length > 0 ? currentWork : experienceData.slice(0, 2)

  const currentEducation = educationData
    .filter((e) => e.year.includes('Nu') || e.year.includes('Present'))
    .slice(0, 2)
  const displayEducation =
    currentEducation.length > 0 ? currentEducation : educationData.slice(0, 2)

  // --- KOMPONENT: ListItem (För enhetlig design) ---
  const ListItem = ({
    title,
    subtitle,
    meta,
    href,
    description,
  }: {
    title: string
    subtitle: string
    meta?: string
    href?: string
    description?: string
  }) => (
    <div className="hover:border-primary-500 dark:hover:border-primary-400 relative border-l-2 border-gray-200 pl-6 transition-all dark:border-gray-700">
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
        {href ? (
          <Link href={href} className="hover:text-primary-600 dark:hover:text-primary-400">
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
      <div className="text-primary-600 dark:text-primary-400 mb-1 text-sm font-medium">
        {subtitle}
      </div>
      {meta && <div className="mb-2 text-xs tracking-wide text-gray-500 uppercase">{meta}</div>}
      {description && (
        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
      )}
    </div>
  )

  return (
    <>
      {/* --- HERO SEKTION --- */}
      <div className="relative overflow-hidden pt-12 pb-12 text-center md:pt-24 md:pb-16 lg:text-left">
        <div className="bg-primary-200/20 dark:bg-primary-900/20 absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full blur-3xl filter"></div>

        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100">
              Hej, jag är{' '}
              <span className="text-primary-500">{siteMetadata.author.split(' ')[0]}</span> 👋
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300">
              {siteMetadata.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/contact"
                className="bg-primary-600 hover:bg-primary-500 rounded-full px-6 py-3 text-base font-semibold text-white shadow-sm"
              >
                Kontakt
              </Link>
              <Link
                href="/about"
                className="rounded-full bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:ring-gray-700 dark:hover:bg-gray-700"
              >
                Mer om mig <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src={siteMetadata.siteLogo}
              alt="Avatar"
              width={200}
              height={200}
              className="relative h-40 w-40 rounded-full border-4 border-white object-cover shadow-2xl md:h-56 md:w-56 dark:border-gray-800"
              priority
            />
          </div>
        </div>
      </div>

      {/* --- SEKTION: OM MIG --- */}
      <div className="py-12">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Vem är jag?
        </h2>
        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
          <p className="text-lg leading-relaxed">
            Jag är en driven ingenjör och ekonom som brinner för att bygga broar mellan komplex
            teknik och affärsnytta. Med en bakgrund inom både
            <span className="font-bold text-gray-900 dark:text-gray-100"> Chalmers </span>
            och <span className="font-bold text-gray-900 dark:text-gray-100">Handelshögskolan</span>
            kombinerar jag analytisk skärpa med strategisk höjd. Just nu fokuserar jag på att
            utveckla moderna webbapplikationer och leda studentdrivna bolag.
          </p>
          <Link
            href="/about"
            className="text-primary-600 hover:text-primary-500 dark:text-primary-400 mt-4 inline-block font-medium"
          >
            Läs hela min story &rarr;
          </Link>
        </div>
      </div>

      {/* --- SEKTION: NULÄGET --- */}
      <div className="border-t border-gray-200 py-12 dark:border-gray-800">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Nuläget
        </h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Arbete */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                <span className="text-2xl">💼</span> Arbete
              </h3>
              <Link
                href="/experience"
                className="text-primary-500 hover:text-primary-600 text-sm font-medium"
              >
                Visa hela CV
              </Link>
            </div>
            <div className="space-y-8">
              {displayWork.map((d) => (
                <ListItem
                  key={d.id}
                  title={d.title}
                  subtitle={d.company}
                  meta={d.range}
                  description={d.summary}
                />
              ))}
            </div>
          </div>

          {/* Studier */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                <span className="text-2xl">🎓</span> Studier
              </h3>
              <Link
                href="/education"
                className="text-primary-500 hover:text-primary-600 text-sm font-medium"
              >
                Se alla utbildningar
              </Link>
            </div>
            <div className="space-y-8">
              {displayEducation.map((edu) => (
                <ListItem
                  key={edu.school}
                  title={edu.degree}
                  subtitle={edu.school}
                  meta={edu.year}
                  description={edu.summary}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- SEKTION: UTVALDA PROJEKT --- */}
      <div className="border-t border-gray-200 py-12 dark:border-gray-800">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Utvalda Projekt
          </h2>
          <Link
            href="/projects"
            className="text-primary-500 hover:text-primary-600 text-sm font-medium"
          >
            Visa alla projekt &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {projectsData.slice(0, 4).map((d) => (
            <ListItem
              key={d.title}
              title={d.title}
              subtitle="Projekt"
              href={d.href}
              description={d.description}
            />
          ))}
        </div>
      </div>

      {/* --- SEKTION: REKOMMENDATIONER --- */}
      {referencesData && referencesData.length > 0 && (
        <div className="border-t border-gray-200 py-12 dark:border-gray-800">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Några referenser
            </h2>
            <Link
              href="/referenser"
              className="text-primary-500 hover:text-primary-600 text-sm font-medium"
            >
              Fler rekommendationer &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {referencesData.slice(0, 2).map((ref, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/40"
              >
                <p className="mb-4 text-gray-600 italic dark:text-gray-300">"{ref.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="bg-primary-100 text-primary-700 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold">
                    {ref.name.charAt(0)}
                  </div>
                  <div className="text-sm">
                    <span className="block font-bold text-gray-900 dark:text-gray-100">
                      {ref.name}
                    </span>
                    <span className="text-gray-500">{ref.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* --- SEKTION: ÖVRIGA MERITER (Ny design) --- */}
      <div className="border-t border-gray-200 py-12 dark:border-gray-800">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Några övriga meriter
          </h2>
          <Link
            href="/meriter"
            className="text-primary-500 hover:text-primary-600 text-sm font-medium"
          >
            Visa alla meriter &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Vi visar de 4 senaste certifikaten som exempel i listan */}
          {certificationsData.slice(0, 4).map((cert) => (
            <ListItem
              key={cert.title}
              title={cert.title}
              subtitle={cert.issuer || 'Certifikat'}
              meta={cert.date}
              href={cert.url}
              // Använd titel som description om ingen annan text finns, eller lämna tomt
              description=""
            />
          ))}
        </div>
      </div>
    </>
  )
}
