module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
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
            variants: [`400`, `600`]
          },
        ],
      },
    },
  ],
}
