const URL = "https://esender.me";

module.exports = {
  siteMetadata: {
    title: "Marat Abdulin",
    titleTemplate: "%s · Marat Abdulin",
    description: "Personal page",
    url: URL,
    twitterUsername: "@esender_"
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
        `,
        resolveSiteUrl: () => URL,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
      },
    },
    "gatsby-transformer-remark"
  ],
  polyfill: false,
};
