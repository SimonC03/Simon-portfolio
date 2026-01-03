const navLinks = {
  sv: [
    { href: '/about', title: 'Om mig' },
    { href: '/experience', title: 'Erfarenhet' },
    { href: '/education', title: 'Utbildning' },
    { href: '/projects', title: 'Projekt' },
    { href: '/meriter', title: 'Övriga meriter' },
    { href: '/referenser', title: 'Referenser' },
  ],
  en: [
    { href: '/about', title: 'About' },
    { href: '/experience', title: 'Experience' },
    { href: '/education', title: 'Education' },
    { href: '/projects', title: 'Projects' },
    { href: '/meriter', title: 'Achievements' },
    { href: '/referenser', title: 'References' },
  ],
}

export const getHeaderNavLinks = (locale: string) => {
  // Fallback till 'sv' om locale saknas eller är fel
  return navLinks[locale] || navLinks.sv
}
