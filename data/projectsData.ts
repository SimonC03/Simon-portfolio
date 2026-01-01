// data/projectsData.ts

interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Simon Portfolio',
    description: `Min personliga portföljsida byggd med Next.js 14, Tailwind CSS och TypeScript. 
    Visar min erfarenhet, utbildning och mina projekt. Integrerad med GitHub Actions för CI/CD.`,
    imgSrc: '/static/images/twitter-card.png', // Byt gärna till en skärmdump av din sida
    href: 'https://github.com/SimonC03/Simon-portfolio',
  },
  {
    title: 'Annat Skolprojekt',
    description: `Beskrivning av ett projekt du gjort i skolan, t.ex. inom mekatronik eller programmering.
    Vad använde du för teknik? Vad var resultatet?`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '#',
  },
]

export default projectsData
