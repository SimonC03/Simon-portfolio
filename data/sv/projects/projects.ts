// data/projects/projects.ts
import { Project } from '../../types'

export const projectsData: (Project & { slug: string; fullDescription: string[] })[] = [
  {
    title: 'Fordonsdynamiksimulering för ECU-test i Volvo Bussars testriggar',
    slug: 'volvo-buses-ecu-verifiering',
    description:
      'CAN-baserat fordonssimuleringsverktyg som genererar DBC-definierade CAN-signaler för ECU-verifiering i Volvo Bussars testriggar, och möjliggör shift-left-verifiering av bussmjukvara.',
    imgSrc: '/static/images/volvo-buses-thesis.jpg',
    href: '/projects/volvo-buses-ecu-verifiering',
    relatedSkills: [
      'python',
      'python-can',
      'can',
      'dbc',
      'vector-canalyzer',
      'canoe',
      'hil',
      'fordonsdynamik',
      'simulering',
      'mjukvarutestning',
    ],
    fullDescription: [
      'I mitt kandidatarbete på Volvo Bussar, utfört i samarbete med Chalmers tekniska högskola, utvecklade jag ett CAN-baserat fordonssimuleringsverktyg för tidig verifiering av fordonsbeteende i labb- och HIL-miljö.',
      'Projektet resulterade i en fungerande prototyp som kombinerar en mjukvarubaserad fordonsmodell, ett grafiskt realtidsgränssnitt och en CAN-kommunikationsmodul. Fordonsmodellen simulerar centrala tillstånd som hastighet, acceleration, orientering, växelval, motorvarvtal, styrbeteende och hjulrelaterade variabler.',
      'Simulerade fordonssignaler mappades till DBC-definierade CAN-meddelanden, kodades med python-can och skickades via ett Vector-baserat CAN-gränssnitt till ECU:erna i en befintlig testrigg. Signalkedjan verifierades både i virtuell CAN-testning och i en fysisk HIL-/testriggsmiljö, där de genererade signalerna kunde observeras och analyseras i CANalyzer.',
      'Arkitekturen är modulär: drivlinan modelleras komponent för komponent och kan byggas ut med funktioner såsom automatlåda, farthållare med sluten återkoppling och en 6-DOF-fordonsmodell. Upplägget stödjer även realtidssimulering och kartbaserad visualisering för interaktiv scenariotestning.',
      'Genom att flytta verifiering från provbana till labb stödjer upplägget shift-left-testning: snabbare återkoppling, repeterbara testfall och tidigare upptäckt av fel, samtidigt som tid, kostnad och resursbehov för fälttester minskar.',
      'Efter kandidatarbetet förlängdes arbetet till en heltidsroll under maj–juni 2026, där Vector CANoe integrerades i en större testmiljö och avancerade tester utvecklades för säkerhetssystem som AEBS.',
    ],
    attachments: [],
  },
  {
    title: 'AI-agentinfrastruktur & energiprognoser – Volvo Bussar',
    slug: 'volvo-buses-ai-agenter',
    description:
      'MCP-servrar, ett AI-agenttillägg för webbläsaren och maskininlärningsmodeller som prognostiserar bussars energiförbrukning, byggda som praktikant inom tillämpad AI & maskininlärning på Volvo Bussar.',
    href: '/projects/volvo-buses-ai-agenter',
    relatedSkills: ['python', 'maskininlärning', 'tidsserier', 'mcp', 'ai-agenter'],
    fullDescription: [
      'Sommaren 2026 arbetade jag som praktikant inom tillämpad AI och maskininlärning på Volvo Bussar, med bidrag till företagets AI-infrastruktur och agentbaserade arbetsflöden.',
      'Jag byggde MCP-servrar (Model Context Protocol) och AI-verktyg som integrerar interna Volvo-system med agentbaserade arbetsflöden, så att intern data och funktionalitet blir tillgänglig för AI-agenter på ett strukturerat sätt.',
      'Parallellt utvecklade jag maskininlärningsmodeller på storskaliga tidsserier från bussar för att prognostisera energi- och effektförbrukning.',
      'Jag bidrog även till Volvo Bussars AI-infrastruktur genom ett webbläsarbaserat AI-agenttillägg för interna applikationer. Efter sommaren erbjöds jag en fortsatt tjänst inom AI, maskininlärning och agentinfrastruktur.',
    ],
    attachments: [],
  },
  {
    title: 'CampusLyan',
    slug: 'campuslyan',
    description:
      'Sveriges studentbostadsplattform, som samlar bostadsannonser och kösystem för att förenkla sökandet efter studentbostad.',
    imgSrc: '/static/images/project-campuslyan1.png',
    href: 'https://www.campuslyan.se/',
    relatedSkills: [
      'next.js',
      'react',
      'typescript',
      'java',
      'rest-api:er',
      'docker',
      'gcp',
      'sql',
      'tailwind',
      'ux',
    ],
    fullDescription: [
      'CampusLyan grundades med en tydlig vision: att eliminera stressen kring studentbostadsmarknaden. Plattformen samlar splittrad information om bostadsköer och lediga objekt på ett ställe, vilket gör marknaden mer transparent och trygg.',
      'Hösten 2025 bolagiserades verksamheten som CampusLyan Nordics AB. Före lansering säkrade vi pilotavtal som skapade finansiell runway i flera år, och tecknade avtal med ett av Sveriges största studentbostadsbolag samt flera kommunala bostadsbolag.',
      'Tekniskt är lösningen en modern webbapplikation byggd med Next.js, React och TypeScript tillsammans med Java, REST-API:er och Docker, driftsatt på Google Cloud Platform. Den har avancerade filtreringsfunktioner som beräknar restid till campus och matchar studenter med relevanta bostäder baserat på lärosäte.',
      'Projektet kombinerar teknisk höjd med affärsutveckling. Som VD och CTO ansvarar jag för hela produktcykeln, från systemarkitektur och databasdesign till användardialog och marknadsstrategi.',
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
      { name: 'image-2', type: 'image', url: '/static/images/volvo-2.jpg' },
      { name: 'image-3', type: 'image', url: '/static/images/volvo-3.jpg' },
    ],
  },
  {
    title: 'Personlig Portfölj',
    slug: 'portfolio',
    description:
      'En responsiv, tvåspråkig portfölj byggd med Next.js för att visa upp mina projekt, erfarenheter och min tekniska kompetens.',
    imgSrc: '/static/images/project-personalportfolio.png',
    href: 'https://github.com/SimonC03/Simon-portfolio',
    relatedSkills: ['next.js', 'react', 'typescript', 'tailwind', 'next-intl', 'ui/ux'],
    fullDescription: [
      'Designade och utvecklade en personlig plattform för att på ett tydligt sätt presentera mina case studies, tekniska färdigheter och min professionella bakgrund, på både svenska och engelska.',
      'Byggd med stort fokus på prestanda, tillgänglighet och moderna UI/UX-principer för att säkerställa en sömlös upplevelse på alla enheter.',
      'Projektet fungerar även som en kreativ lekplats för att kontinuerligt experimentera med nya frontend-tekniker och designmönster. Källkoden finns på GitHub.',
    ],
    attachments: [],
  },
  {
    title: 'StuNote',
    slug: 'stunote',
    description:
      'EdTech-plattform som kombinerar delning av studiematerial med en marknadsplats och AI-drivna verktyg.',
    imgSrc: '/static/images/project-stunote.png',
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
