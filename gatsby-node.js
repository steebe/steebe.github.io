const { createFilePath } = require("gatsby-source-filesystem");

/*
  Custom GraphQL datapoints
*/

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  // Custom MDX for improved blog metadata
  if (node.internal.type === "Mdx") {
    createNodeField({
      node,
      name: "slug",
      value: createFilePath({ node, getNode }),
    });
  }
};
