const path = require(`path`);

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans Condensed`,
            variants: [`700`]
          },
          {
            family: `Source Sans Pro`,
            variants: [`400`, `600`, `700i`]
          },
        ],
      },
    },
  ],
}
