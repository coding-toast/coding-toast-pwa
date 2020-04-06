'use strict'

module.exports = {
  siteMetadata: {
    title: 'gatsby-starter-typescript-plus',
    description: 'A starter kit for TypeScript-based Gatsby projects with sensible defaults.',
    keywords: 'gatsbyjs, gatsby, javascript, sample, something',
    siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
    author: {
      name: 'Resi Respati',
      url: 'https://twitter.com/resir014',
      email: 'resir014@gmail.com'
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Fira Sans\:400,300,700`, 'Fira Code', 'Merriweather']
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '›',
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false
              },
              escapeEntities: {}
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass'
  ]
}
