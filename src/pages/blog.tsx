import React from "react";
import Layout from "../components/layout/layout";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

type NodeType = {
  frontmatter: {
    date: string;
    title: string;
  };
  id: string;
  body: string;
};

type DataProps = {
  allMdx: {
    nodes: NodeType[];
  };
};

const Blog = ({ data }: PageProps<DataProps>) => {
  console.log(data);
  return (
    <Layout pageTitle="Ramblings">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>{node.frontmatter.date}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;

export default Blog;
