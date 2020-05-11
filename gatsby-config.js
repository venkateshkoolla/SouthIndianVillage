module.exports = {
  siteMetadata: {
    title: `South Indian Village`,
    description: `Authentic south indian tiffin services and catering in Mississauga & Brampton`,
    author: `@gatsbyjs`,
    siteUrl: `southindianvillage.ca`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SouthIndianVillage`,
        short_name: `SouthIndianVillage`,
        start_url: `/`,
        background_color: `#f5ce42`,
        theme_color: `#f5ce42`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
