import React from "react";
import Layout from "../../components/layout/layout";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { textEnd } from "./writings.module.css";

type DataProps = {
  mdx: {
    frontmatter: {
      date: string;
      title: string;
    };
    body: string;
  };
};

const Post = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout>
      <p className={textEnd}>
        <i>{data.mdx.frontmatter.date}</i>
      </p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default Post;
