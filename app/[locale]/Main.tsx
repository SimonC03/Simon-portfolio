import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'
import Journey from '@/components/Journey'
import {
  getHomeContent,
  getExperience,
  getEducation,
  getProjects,
  getCertifications,
  getReferences,
  getJourney,
} from '@/data/index'

const isCurrent = (range: string) => /nu|present|ongoing/i.test(range)

function SectionHead({
  id,
  title,
  href,
  linkLabel,
}: {
  id: string
  title: string
  href?: string
  linkLabel?: string
}) {
  return (
    <div className="mb-10 flex items-baseline justify-between gap-6 md:mb-14">
      <h2 id={id} className="text-head leading-[1.05] font-medium tracking-[-0.03em]">
        {title}
      </h2>
      {href && (
        <Link
          href={href}
          className="text-small text-accent-text shrink-0 font-medium underline-offset-4 hover:underline"
        >
          {linkLabel} →
        </Link>
      )}
    </div>
  )
}

function Row({ title, sub, text }: { title: string; sub: string; text?: string }) {
  return (
    <li>
      <h4 className="font-medium">{title}</h4>
      <p className="text-small text-muted mt-1">{sub}</p>
      {text && <p className="text-muted mt-3 line-clamp-2 max-w-[60ch]">{text}</p>}
    </li>
  )
}

export default function Home({ locale }: { locale: string }) {
  const homeContent = getHomeContent(locale)
  const experienceData = getExperience(locale)
  const educationData = getEducation(locale)
  const projectsData = getProjects(locale)
  const certificationsData = getCertifications(locale)
  const referencesData = getReferences(locale)

  const currentWork = experienceData.filter((d) => isCurrent(d.range)).slice(0, 3)
  const displayWork = currentWork.length > 0 ? currentWork : experienceData.slice(0, 2)
  const currentEducation = educationData.filter((e) => isCurrent(e.year)).slice(0, 2)
  const displayEducation =
    currentEducation.length > 0 ? currentEducation : educationData.slice(0, 2)
  const featuredProjects = projectsData.filter((p) => p.imgSrc).slice(0, 4)

  const t = {
    currentStatus: locale === 'en' ? 'Current status' : 'Nuläget',
    references: locale === 'en' ? 'Some references' : 'Några referenser',
    moreReferences: locale === 'en' ? 'More recommendations' : 'Fler rekommendationer',
    merits: locale === 'en' ? 'Other achievements' : 'Övriga meriter',
    showAllMerits: locale === 'en' ? 'Show all achievements' : 'Visa alla meriter',
    certificate: locale === 'en' ? 'Certificate' : 'Certifikat',
    portrait: locale === 'en' ? 'Portrait of Simon Carlén' : 'Porträtt av Simon Carlén',
  }

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="hero-title"
        className="grid grid-cols-1 items-end gap-10 pt-8 md:grid-cols-12 md:gap-8 md:pt-16"
      >
        <div className="md:col-span-7 md:pb-4">
          <h1
            id="hero-title"
            className="enter text-display leading-[0.95] font-medium tracking-[-0.045em]"
          >
            {homeContent.hero.greeting} {siteMetadata.author.split(' ')[0]}
          </h1>
          <p className="enter enter-2 text-lead mt-8 max-w-[38ch] leading-[1.4]">
            {homeContent.hero.description}
          </p>
          <div className="enter enter-3 mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/contact"
              className="bg-accent text-accent-ink hover:bg-ink hover:text-bg inline-flex h-12 items-center px-6 font-medium transition-colors"
            >
              {homeContent.hero.primaryButton}
            </Link>
            <Link
              href="/about"
              className="text-ink hover:text-accent-text font-medium underline decoration-1 underline-offset-4 transition-colors"
            >
              {homeContent.hero.secondaryButton}
            </Link>
          </div>
        </div>
        <figure className="enter enter-2 bg-surface relative aspect-[4/3] overflow-hidden md:col-span-5 md:aspect-[4/5]">
          <Image
            src={siteMetadata.image}
            alt={t.portrait}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover object-[50%_20%]"
            priority
          />
        </figure>
      </section>

      {/* About */}
      <section
        aria-labelledby="about-title"
        className="reveal mt-32 grid gap-8 md:mt-44 md:grid-cols-12"
      >
        <h2
          id="about-title"
          className="text-head leading-[1.05] font-medium tracking-[-0.03em] md:col-span-4"
        >
          {homeContent.sections.about.title}
        </h2>
        <div className="md:col-span-8">
          <p className="text-lead max-w-[46ch] leading-[1.45]">
            {homeContent.sections.about.description}
          </p>
          <Link
            href="/about"
            className="text-accent-text mt-8 inline-block font-medium underline-offset-4 hover:underline"
          >
            {homeContent.sections.about.link} →
          </Link>
        </div>
      </section>

      {/* The journey: particles form one symbol per chapter */}
      <Journey content={getJourney(locale)} />

      {/* Right now: work and studies */}
      <section aria-labelledby="now-title" className="reveal mt-32 md:mt-44">
        <SectionHead id="now-title" title={t.currentStatus} />
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="mb-8 flex items-baseline justify-between gap-4">
              <h3 className="text-lead font-medium">{homeContent.sections.work.subtitle}</h3>
              <Link
                href="/experience"
                className="text-small text-accent-text font-medium underline-offset-4 hover:underline"
              >
                {homeContent.sections.work.link} →
              </Link>
            </div>
            <ul className="space-y-10">
              {displayWork.map((d) => (
                <Row
                  key={d.id}
                  title={d.title}
                  sub={`${d.company} · ${d.range}`}
                  text={d.summary}
                />
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-8 flex items-baseline justify-between gap-4">
              <h3 className="text-lead font-medium">{homeContent.sections.education.subtitle}</h3>
              <Link
                href="/education"
                className="text-small text-accent-text font-medium underline-offset-4 hover:underline"
              >
                {homeContent.sections.education.link} →
              </Link>
            </div>
            <ul className="space-y-10">
              {displayEducation.map((edu) => (
                <Row
                  key={edu.school + edu.degree}
                  title={edu.degree}
                  sub={`${edu.school} · ${edu.year}`}
                  text={edu.summary}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      {featuredProjects.length > 0 && (
        <section aria-labelledby="projects-title" className="reveal mt-32 md:mt-44">
          <SectionHead
            id="projects-title"
            title={homeContent.sections.projects.title}
            href="/projects"
            linkLabel={homeContent.sections.projects.link}
          />
          <ul className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
            {featuredProjects.map((d) => (
              <li key={d.slug}>
                <Link href={`/projects/${d.slug}`} className="group block">
                  <div className="bg-surface relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={d.imgSrc as string}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="text-lead group-hover:text-accent-text mt-6 leading-[1.25] font-medium transition-colors">
                    {d.title}
                  </h3>
                  <p className="text-muted mt-3 line-clamp-2 max-w-[56ch]">{d.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* References */}
      {referencesData && referencesData.length > 0 && (
        <section aria-labelledby="refs-title" className="reveal mt-32 md:mt-44">
          <SectionHead
            id="refs-title"
            title={t.references}
            href="/referenser"
            linkLabel={t.moreReferences}
          />
          <div className="bg-surface grid grid-cols-1 gap-12 p-8 md:grid-cols-2 md:p-14">
            {referencesData.slice(0, 2).map((ref) => (
              <figure key={ref.name} className="flex flex-col">
                <blockquote className="text-lead leading-[1.45]">
                  <p>{ref.quote}</p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
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
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Other achievements */}
      {certificationsData && certificationsData.length > 0 && (
        <section aria-labelledby="merits-title" className="reveal mt-32 md:mt-44">
          <SectionHead
            id="merits-title"
            title={t.merits}
            href="/meriter"
            linkLabel={t.showAllMerits}
          />
          <ul className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {certificationsData.slice(0, 4).map((cert) => (
              <li key={cert.title}>
                {cert.url ? (
                  <Link
                    href={cert.url}
                    className="hover:text-accent-text font-medium underline-offset-4 transition-colors hover:underline"
                  >
                    {cert.title}
                  </Link>
                ) : (
                  <span className="font-medium">{cert.title}</span>
                )}
                <p className="text-small text-muted mt-1">
                  {cert.issuer || t.certificate} · {cert.date}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
