

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby Sandbox',
    description: 'Created by Derek Dinh - © 2021'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
