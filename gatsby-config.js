const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'Portfolio',
    description: 'Frontend dev portfolio',
    author: 'Emil Alm',
    siteUrl: 'https://frontdev.nu',
    lang: 'en'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Front Dev`,
        short_name: `FrontDev`,
        start_url: `/`,
        background_color: `#181818`,
        theme_color: `#86bfcf`,
        display: `standalone`,
        icon: `src/assets/icon/icon.png`,
        lang: `en`,
        description: `Frontend portfolio`
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans Condensed\:700`,
          `Source Sans Pro\:400,600`,
          `Bowlby One SC\:400`,
        ],
      },
    },
  ],
}
