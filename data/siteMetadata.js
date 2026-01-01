/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Simon Carlén – Portfolio',
  author: 'Simon Carlén',
  headerTitle: 'Simon Portfolio',
  description:
    'President & CEO @ HandelsFöretagen | Double Degree Student in Mechatronics Engineering & Business Administration',
  language: 'sv-SE', // Ändrat till svenska
  theme: 'system', // system, dark or light
  siteUrl: 'https://simon-portfolio.vercel.app', // Byt ut om du skaffar egen domän senare
  siteRepo: 'https://github.com/SimonC03/Simon-portfolio',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,

  // Kontaktuppgifter
  email: 'simon.carlen1@gmail.se',
  github: 'https://github.com/SimonC03',
  linkedin: 'https://www.linkedin.com/in/simon-carl%C3%A9n/',

  locale: 'sv-SE',

  // set to true if you want a navbar fixed to the top
  stickyNav: false,

  analytics: {
    // Behåll denna struktur men den gör inget förrän du skaffar nycklar.
    // Det är bra att ha kvar koden för framtiden.
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },

  newsletter: {
    // VIKTIGT: Jag har stängt av nyhetsbrev-funktionen
    // På ett CV vill man inte ha en "Subscribe"-ruta längst ner.
    provider: null,
  },

  comments: {
    // VIKTIGT: Jag har stängt av kommentarer.
    // Man ska inte kunna kommentera på dina jobb-erfarenheter.
    provider: null,
  },

  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}
module.exports = siteMetadata
