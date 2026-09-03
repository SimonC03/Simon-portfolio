import { Education } from '../../types'

export const educationData: Education[] = [
  {
    school: 'Chalmers tekniska högskola',
    degree: 'MSc i Data Science & AI',
    location: 'Göteborg, Sverige',
    year: '2026 - 2028',
    summary:
      'Masterprogram med fokus på maskininlärning, artificiell intelligens och statistiska metoder för datadrivna system. Påbörjat hösten 2026 efter en avslutad kandidatexamen i Automation & Mekatronik med programmets högsta studieresultat.',
    details: [
      'Fokus på maskininlärning, AI-system och datadrivet beslutsfattande, med grund i praktiskt AI- och ML-arbete på Volvo Bussar.',
      'Läses parallellt med en kandidatexamen i företagsekonomi vid Handelshögskolan i Göteborg.',
    ],
    relatedSkills: ['Maskininlärning', 'Deep Learning', 'Statistik', 'Python', 'Data Engineering'],
  },
  {
    school: 'Handelshögskolan vid Göteborgs universitet',
    degree: 'Ekonomie kandidatexamen i Företagsekonomi',
    location: 'Göteborg, Sverige',
    year: '2024 - 2027',
    summary:
      'Akademisk utbildning med fokus på kvantitativ finansiell analys, ekonomisk teori och företagsledande processer, läst parallellt med mina ingenjörsutbildningar.',
    details: [
      'Bygger en solid grund i att upprätta och analysera finansiella rapporter, kassaflöden och investeringskalkyler.',
      'Tillämpar ekonomiska modeller för att lösa optimeringsproblem och förstå marknadsdynamik (Nationalekonomi).',
      'Tränar på att fatta datadrivna beslut genom att integrera redovisningsteori med strategisk verksamhetsstyrning.',
    ],
    courses: [
      { name: 'Business Administration, Organization and Leadership', credits: '7.5 hp' },
      { name: 'Business Administration, Marketing', credits: '7.5 hp' },
      { name: 'Business Administration, Financial Accounting', credits: '7.5 hp' },
      { name: 'Business Administration, Management Accounting', credits: '7.5 hp' },
      { name: 'Principles of Microeconomics', credits: '7.5 hp' },
      { name: 'Principles of Macroeconomics', credits: '7.5 hp' },
      { name: 'Applied Economics', credits: '5.0 hp' },
      { name: 'Principles of International Economics', credits: '5.0 hp' },
      { name: 'Principles of Financial Economics', credits: '5.0 hp' },
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
      'Ingenjörsutbildning i gränslandet mellan mekanik, elektronik och mjukvara, avslutad i juni 2026 med betygssnittet 4,9/5,0 och programmets högsta studieresultat. Utbildningen gav mig en stark teknisk bas inom reglerteknik, inbyggda system och mjukvaruutveckling, med praktisk kompetens i C/C++, Python, PLC-programmering och CAD (Catia V5). Jag läste en utökad studieplan med extra kurser i algoritmer och datastrukturer och skrev mitt kandidatarbete inom datateknik på Volvo Bussar.',
    details: [
      'Tog examen med programmets högsta studieresultat (betygssnitt 4,9/5,0). Tilldelad Adlerbertska stipendiet i årskurs 1 och 2 för exceptionella studieresultat.',
      'Kandidatarbete (15 hp) inom datateknik på Volvo Bussar: ett CAN-baserat fordonssimuleringsverktyg för shift-left-verifiering av bussmjukvara, verifierat på en fysisk HIL-testrigg.',
      'Utökad studieplan med extra kurser inom datastrukturer och algoritmer för fördjupad mjukvarukompetens.',
      'Praktisk erfarenhet av CAD (Catia V5), PLC-programmering och inbyggda system genom projektbaserat lärande.',
    ],
    courses: [
      { name: 'Calculus', credits: '7.5 hp', grade: '5' },
      { name: 'Linear Algebra & Differential Equations', credits: '7.5 hp', grade: '5' },
      { name: 'Linear Systems', credits: '7.5 hp', grade: '5' },
      { name: 'Dynamical Systems & Control Engineering', credits: '7.5 hp', grade: '5' },
      { name: 'Embedded Control Systems', credits: '7.5 hp', grade: '5' },
      { name: 'Machine Oriented Programming', credits: '7.5 hp', grade: '5' },
      { name: 'Computer Programming', credits: '7.5 hp', grade: '5' },
      { name: 'Electrical Circuits', credits: '7.5 hp', grade: '5' },
      { name: 'Introduction to Computer Engineering', credits: '7.5 hp', grade: '5' },
      { name: 'Energy Systems & Sustainability', credits: '7.5 hp', grade: '5' },
      { name: 'Transducers & Actuators, Theory and Applications', credits: '7.5 hp', grade: '5' },
      { name: 'Solid Mechanics & Materials', credits: '7.5 hp', grade: '5' },
      { name: 'Mechanics, Advanced Course', credits: '7.5 hp', grade: '5' },
      { name: 'Mathematical Analysis in Several Variables', credits: '7.5 hp', grade: '5' },
      { name: 'Machine Elements', credits: '7.5 hp', grade: '5' },
      { name: 'Applied Control System Design', credits: '7.5 hp', grade: '5' },
      { name: 'Statistics with Applications', credits: '7.5 hp', grade: '5' },
      { name: 'Data Structures and Algorithms', credits: '6.0 hp', grade: '4' },
      { name: 'Mechanics', credits: '7.5 hp', grade: '4' },
      { name: 'Mechatronics Project', credits: '7.5 hp', grade: '4' },
      {
        name: 'Degree Project in Computer Science and Engineering (Kandidatarbete)',
        credits: '15.0 hp',
        grade: 'G',
      },
      { name: 'Preparatory Course in Mathematics', credits: '7.5 hp', grade: 'G' },
      { name: 'Introduction to Mechatronics', credits: '7.5 hp', grade: 'G' },
      { name: 'Logic Control Project', credits: '7.5 hp', grade: 'G' },
    ],
    relatedSkills: [
      'C/C++',
      'Python',
      'MATLAB',
      'Reglerteknik',
      'Inbyggda system',
      'CAD (Catia V5)',
      'System Engineering',
    ],
  },
  {
    school: 'Linköpings universitet',
    degree: 'Fristående kurser',
    location: 'Distans',
    year: '2024 - 2026',
    summary:
      'Fristående kurser vid sidan av mina examina för att bredda kompetensen inom AI, innovation och cybersäkerhet.',
    details: [
      'Innovation & Entreprenörskap: Fördjupning i affärsmodellering, marknadsstrategier och kommersialisering av idéer.',
      'Elements of AI: Studier i maskininlärning (k-NN, logistisk regression), neurala nätverk och Bayes sats, samt AI:s samhällspåverkan.',
      'Cybersecurity – Fundamentals and Awareness (2026): introduktionskurs i cybersäkerhetens principer och säkerhetsmedvetenhet.',
    ],
    courses: [
      { name: 'Cybersecurity – Fundamentals and Awareness', credits: '3.0 hp', grade: 'G' },
      { name: 'Innovation och entreprenörskap', credits: '6.0 hp', grade: 'G' },
      { name: 'Elements of AI', credits: '2.0 hp', grade: 'G' },
    ],
    relatedSkills: ['Artificiell Intelligens', 'Affärsutveckling', 'Innovation', 'Cybersäkerhet'],
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
