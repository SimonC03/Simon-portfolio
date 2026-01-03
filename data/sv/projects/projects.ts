// data/projects/projects.ts
import { Project } from '../../types'

export const projectsData: (Project & { slug: string; fullDescription: string[] })[] = [
  {
    title: 'CampusLyan',
    slug: 'campuslyan',
    description:
      'Bostadsplattform som aggregerar studentbostäder och köer för att förenkla bostadssökandet.',
    imgSrc: '/static/images/project-campuslyan1.png', // Glöm inte bilden!
    href: '/projects/campuslyan',
    // Lägg till relevanta tekniker du använt
    relatedSkills: ['next.js', 'react', 'typescript', 'sql', 'tailwind', 'ux'],
    fullDescription: [
      'CampusLyan grundades med en tydlig vision: att eliminera stressen kring studentbostadsmarknaden. Plattformen samlar splittrad information om bostadsköer och lediga objekt på ett ställe, vilket gör marknaden mer transparent och trygg.',
      'Tekniskt är lösningen en modern webbapplikation byggd med Next.js och TypeScript. Den har avancerade filtreringsfunktioner som beräknar restid till campus och matchar studenter med relevanta bostäder baserat på lärosäte.',
      'Projektet kombinerar teknisk höjd med affärsutveckling, där jag ansvarat för hela produktcykeln – från systemarkitektur och databasdesign till användardialog och marknadsstrategi.',
    ],
    attachments: [], // Om du har pitch-deck eller liknande kan du lägga det här
  },
  {
    title: 'Personlig Portfölj',
    slug: 'portfolio',
    description:
      'En responsiv och minimalistisk portfölj skapad för att visa upp mina projekt och min tekniska kompetens.',
    imgSrc: '/static/images/project-personalportfolio.png',
    href: 'https://simon-portfolio-wine.vercel.app/sv',
    relatedSkills: ['next.js', 'react', 'typescript', 'tailwind', 'ui/ux'],
    fullDescription: [
      'Designade och utvecklade en personlig plattform för att på ett tydligt sätt presentera mina case studies, tekniska färdigheter och min professionella bakgrund.',
      'Byggd med stort fokus på prestanda, tillgänglighet och moderna UI/UX-principer för att säkerställa en sömlös upplevelse på alla enheter.',
      'Projektet fungerar även som en kreativ lekplats för att kontinuerligt experimentera med nya frontend-tekniker och designmönster.',
    ],
    attachments: [],
  },
  {
    title: 'Förbättring av förarmiljön – Volvo Bussar',
    slug: 'volvo-buses',
    description:
      'Utforskande av framtidens förarmiljö och intuitiva körupplevelser genom innovation och användarcentrerad design.',
    imgSrc: '/static/images/volvo-2.jpg',
    relatedSkills: ['ux-design', 'product-innovation', 'user-research', 'prototyping'],
    fullDescription: [
      'Under en sommar på Volvo Bussar arbetade jag tillsammans med mitt projektteam för att utforska nya sätt att förbättra förarmiljön och skapa en mer intuitiv upplevelse bakom ratten.',
      'Projektet innebar att analysera förarens behov och utveckla lösningar som gör interaktionen med fordonet både enklare och säkrare.',
      'Arbetet avslutades med presentationer för chefer samt en öppen demo där anställda på Volvo Bussar fick kliva in i bussen och uppleva vår lösning live.',
    ],
    attachments: [
      { name: 'image-1', type: 'image', url: '/static/images/volvo-1.jpg' },
      { name: 'image-1', type: 'image', url: '/static/images/volvo-2.jpg' },
      { name: 'image-1', type: 'image', url: '/static/images/volvo-3.jpg' },
    ],
  },
  {
    title: 'StuNote',
    slug: 'stunote',
    description:
      'EdTech-plattform som kombinerar delning av studiematerial med en marknadsplats och AI-drivna verktyg.',
    imgSrc: '/static/images/project-stunote.png', // Byt ut till din bild
    // Justera skills baserat på vad du faktiskt använde (gissar på en tech stack här)
    relatedSkills: [
      'next.js',
      'typescript',
      'tailwind css',
      'javascript',
      'php',
      'sql',
      'appwrite',
      'ux',
      'vercel',
    ],
    fullDescription: [
      'StuNote utvecklades som en helhetslösning för studenter – en plattform som integrerade en marknadsplats för kurslitteratur med delning av högkvalitativa föreläsningsanteckningar.',
      'För att effektivisera tentaplugget implementerades det en AI-driven funktion som automatiskt genererade quiz och övningsfrågor baserat på studentens eget kursmaterial.',
      'Projektet fick flertal utmärkelser och ett stipendium värt 27 000 SEK. Det gav även djupa insikter i att bygga community-drivna applikationer och skalbara EdTech-lösningar (projektet är idag arkiverat).',
    ],
    attachments: [],
  },
]
