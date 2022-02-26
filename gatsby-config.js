module.exports = {
    siteMetadata: {
      title: `gatsby-tutorial`,
        siteUrl: `http://www.stevebass.me`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            },
        },
    ],
};