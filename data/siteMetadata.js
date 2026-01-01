/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Simon Carlén – Portfolio',
  author: 'Simon Carlén',
  headerTitle: 'Simon Carlén',
  description: 'Double Degree Student | CEO @ HandelsFöretagen. Kombinerar teknik & strategi.',
  language: 'sv-SE',
  theme: 'system',
  siteUrl: 'https://simon-portfolio.vercel.app',
  siteRepo: 'https://github.com/SimonC03/Simon-portfolio',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/profile.jpg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,

  email: 'simon.carlen1@gmail.com',
  github: 'https://github.com/SimonC03',
  linkedin: 'https://www.linkedin.com/in/simon-carl%C3%A9n/',

  locale: 'sv-SE',
  stickyNav: false,

  // Raderad: analytics, newsletter, comments, search
}
module.exports = siteMetadata
