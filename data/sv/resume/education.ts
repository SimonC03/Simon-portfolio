import { Education } from '../../types'

export const educationData: Education[] = [
  {
    school: 'Handelshögskolan vid Göteborgs universitet',
    degree: 'Ekonomie kandidatexamen i Företagsekonomi',
    location: 'Göteborg, Sverige',
    year: '2024 - 2027',
    summary:
      'Akademisk utbildning med fokus på kvantitativ finansiell analys, ekonomisk teori och företagsledande processer.',
    details: [
      'Bygger en solid grund i att upprätta och analysera finansiella rapporter, kassaflöden och investeringskalkyler.',
      'Tillämpar ekonomiska modeller för att lösa optimeringsproblem och förstå marknadsdynamik (Nationalekonomi).',
      'Tränar på att fatta datadrivna beslut genom att integrera redovisningsteori med strategisk verksamhetsstyrning.',
    ],
    relatedSkills: [
      'Företagsekonomi',
      'Ekonomistyrning',
      'Marknadsföring',
      'Finansiell Analys',
      'Strategi',
    ],
  },
  {
    school: 'Chalmers tekniska högskola',
    degree: 'BSc i Automation & Mekatronik',
    location: 'Göteborg, Sverige',
    year: '2023 - 2026',
    summary:
      'Ingenjörsutbildning i gränslandet mellan mekanik, elektronik och mjukvara. Genom utbildningen har jag fått en djup förståelse för hur moderna produkter – från autonoma fordon till smarta hemsystem – samverkar. Jag har byggt en stark teknisk bas inom reglerteknik, AI och systemteknik, med praktisk spetskompetens i C/C++, PLC-programmering och CAD (Catia V5). För att möta framtidens krav på mjukvaruintensiv teknik läser jag en utökad studieplan med fokus på algoritmer och datastrukturer',
    details: [
      'Tilldelad Adlerbertska Stipendiet i årskurs 1 och 2 för exceptionella studieresultat.',
      'Läser en utökad studieplan med extra kurser inom datastrukturer och algoritmer för fördjupad mjukvarukompetens.',
      'Praktisk erfarenhet av CAD (Catia V5), PLC-programmering och inbyggda system genom projektbaserat lärande.',
    ],
    /*
    courses: [
      { name: 'Calculus', credits: '7.5 hp', grade: '5' },
      { name: 'Linear Algebra & Differential Equations', credits: '7.5 hp', grade: '5' },
      { name: 'Linear Systems', credits: '7.5 hp', grade: '5' },
      { name: 'Dynamical Systems & Control', credits: '7.5 hp', grade: '5' },
      { name: 'Embedded Control Systems', credits: '7.5 hp', grade: '5' },
      { name: 'Machine Oriented Programming', credits: '7.5 hp', grade: '5' },
      { name: 'Computer Programming', credits: '7.5 hp', grade: '5' },
      { name: 'Electrical Circuits', credits: '7.5 hp', grade: '5' },
      { name: 'Introduction to Computer Engineering', credits: '7.5 hp', grade: '5' },
      { name: 'Energy Systems & Sustainability', credits: '7.5 hp', grade: '5' },
      { name: 'Transducers & Actuators', credits: '7.5 hp', grade: '5' },
      { name: 'Solid Mechanics & Materials', credits: '7.5 hp', grade: '5' },
      { name: 'Mechanics, Advanced Course', credits: '7.5 hp', grade: '5' },
      { name: 'Mathematical Analysis in Several Variables', credits: '7.5 hp', grade: '4' },
      { name: 'Data Structures and Algorithms', credits: '6.0 hp', grade: '4' },
      { name: 'Mechanics', credits: '7.5 hp', grade: '4' },
      { name: 'Mechatronics Project', credits: '7.5 hp', grade: '4' },
      { name: 'Preparatory Course in Mathematics', credits: '7.5 hp', grade: 'G' }, // G i betyg
      { name: 'Introduction to Mechatronics', credits: '7.5 hp', grade: 'G' }, // G i betyg
      { name: 'Logic Control Project', credits: '7.5 hp', grade: 'G' }, // G i betyg
    ],
    */
    relatedSkills: [
      'C/C++',
      'Python',
      'Matlab',
      'Reglerteknik',
      'CAD (Catia V5)',
      'System Engineering',
    ],
  },
  {
    school: 'Linköpings universitet',
    degree: 'Fristående kurser',
    location: 'Distans',
    year: 'Sommar 2024',
    summary:
      'Proaktiva studier för att bredda kompetensen inom AI-teknologi och affärsskapande innovationsprocesser.',
    details: [
      'Innovation & Entreprenörskap: Fördjupning i affärsmodellering, marknadsstrategier och kommersialisering av idéer.',
      'Elements of AI: Studier i maskininlärning (k-NN, logistisk regression), neurala nätverk och Bayes sats, samt AI:s samhällspåverkan.',
    ],
    courses: [
      { name: 'Elements of AI', credits: '2.0 hp', grade: 'G' },
      { name: 'Innovation och entreprenörskap', credits: '6.0 hp', grade: 'G' },
    ],
    relatedSkills: ['Artificiell Intelligens', 'Affärsutveckling', 'Innovation'],
  },
  {
    school: 'Försvarsmakten',
    degree: 'Signalmekaniker specialiseringsutbildning',
    location: 'Sverige',
    year: 'Okt 2022 - Feb 2023',
    summary:
      'Teknisk specialisering inom installation, drift och underhåll av avancerade militära kommunikationssystem.',
    details: [
      'Ansvarade för felsökning och reparation av sambandsutrustning under fältmässiga förhållanden.',
      'Säkerställde kritisk kommunikationsinfrastruktur med höga krav på driftsäkerhet och teknisk precision.',
    ],
    relatedSkills: ['Kommunikationsteknik', 'Systemunderhåll', 'Felsökning', 'Elektronik'],
  },
  {
    school: 'Försvarsmakten',
    degree: 'Gruppbefäl (GBU) / Ledarskapsutbildning',
    location: 'Sverige',
    year: 'Okt 2022 - Nov 2022',
    summary:
      'Utbildning i militärt och strategiskt ledarskap med fokus på att leda grupp under press.',
    details: [
      'Omfattade både teoretiska studier och praktisk tillämpning av ledarskap i fält.',
      'Utvecklade förmågan att fatta snabba beslut, ge tydliga order och upprätthålla stridsvärde i gruppen.',
    ],
    relatedSkills: ['Ledarskap', 'Strategisk planering', 'Beslutsfattande', 'Krishantering'],
  },
  {
    school: 'Unga Aktiesparare',
    degree: 'Finans & Aktiekunskap (Diplomerad)',
    location: 'Sverige',
    year: 'Dec 2020 - Dec 2021',
    summary:
      'Utbildning som sträcker sig från grundläggande till avancerad nivå inom aktiemarknad och finans.',
    details: [
      'Fördjupad kunskap inom portföljhantering, aktieanalys och finansiella instrument.',
      'Lade grunden för ett starkt intresse för finansmarknaden och strategiska investeringar.',
    ],
    relatedSkills: ['Aktieanalys', 'Portföljhantering', 'Privatekonomi'],
  },
]
