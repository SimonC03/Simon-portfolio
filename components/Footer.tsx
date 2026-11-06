import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  const links = [
    { label: siteMetadata.email, href: `mailto:${siteMetadata.email}` },
    { label: 'LinkedIn', href: siteMetadata.linkedin },
    { label: 'GitHub', href: siteMetadata.github },
    { label: 'CV (PDF)', href: '/cv.pdf' },
  ]

  return (
    <footer className="mt-32 pb-10 md:mt-48">
      <p className="text-display leading-[0.95] font-medium tracking-[-0.045em]">
        {siteMetadata.author}
      </p>
      <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              target={l.href.startsWith('/') ? '_blank' : undefined}
              className="text-ink decoration-accent hover:text-accent-text underline decoration-1 underline-offset-4 transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-small text-muted mt-12">
        © {new Date().getFullYear()} {siteMetadata.author} · Göteborg
      </p>
    </footer>
  )
}
