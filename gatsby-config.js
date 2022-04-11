module.exports = {
  siteMetadata: {
    title: 'Moey',
    description:' bellehi ekhdem',
    author: 'Arfizato',
    siteUrl: 'https://moyennecalculator.netlify.app',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    'gatsby-transformer-sharp',
    "gatsby-plugin-sharp",`gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
  ],
};
