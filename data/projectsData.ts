interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'StuNote',
    description: `Grundare & Fullstack-utvecklare. En innovativ plattform för studiematerial, andrahandsböcker och AI-genererade quiz för tentaplugg. Byggd från grunden med modern webbteknik.
    Tech stack: Next.js, TypeScript, MySQL, PHP, TailwindCSS.`,
    imgSrc: '/static/images/stunote.png', // Lägg en bild som heter stunote.png i public/static/images
    href: 'https://stunote.se', // Byt till rätt länk om den finns, annars ta bort raden
  },
  {
    title: 'Handels Företagen',
    description: `VD & Koncernchef. Leder Nordens största studentdrivna bolagskoncern med 180+ anställda studenter över 7 dotterbolag. Ansvarig för strategisk transformation som resulterade i 95% omsättningstillväxt under Q3.`,
    imgSrc: '/static/images/handels-foretagen.png',
    href: 'https://handelsforetagen.se',
  },
  {
    title: 'CampusLyan',
    description: `Grundande VD & CTO. Leder ett ingenjörsteam på sex personer som utvecklar en modern plattform för att lösa bostadsbristen för studenter. Kombinerar teknisk utveckling med affärsutveckling.`,
    imgSrc: '/static/images/campuslyan.png',
    href: '#',
  },
  {
    title: 'Volvo Buses - Virtual Verification',
    description: `Platform Development Internship. Arbetade med virtuell verifiering och apputveckling av visualiseringskoncept för "softbuttons" i nästa generations bussplattformar.
    Tech stack: Kotlin, Java, Python, Figma.`,
    imgSrc: '/static/images/volvo.png',
    href: 'https://www.volvobuses.com',
  },
]

export default projectsData
