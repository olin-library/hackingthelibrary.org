module.exports = {
  siteMetadata: {
    title: 'Hacking the Library',
    subtitle: 'Olin College of Engineering',
    description: "Let’s create a new kind of Library.",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "markdown-pages",
      },
    }, {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-sharp`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              linkImagesToOriginal: true,
            }
          }
        ],
        options: {
          dashes: "oldschool",
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-nprogress`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
