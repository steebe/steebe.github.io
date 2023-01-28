const { createFilePath } = require("gatsby-source-filesystem");

// Workaround that adds the `slug` field back into MDX
// https://paulie.dev/posts/2022/09/mdx-2-breaking-changes-and-gatsby-plugin-mdx-v4-slug/
exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === "Mdx") {
    createNodeField({
      node,
      name: "slug",
      value: createFilePath({ node, getNode }),
    });
  }
};
