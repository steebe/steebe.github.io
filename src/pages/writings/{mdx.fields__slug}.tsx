import React, { ReactNode } from "react";
import Layout from "../../components/layout/layout";
import { graphql, PageProps } from "gatsby";
import { textEnd } from "./writings.module.css";

type DataProps = {
  mdx: {
    frontmatter: {
      date: string;
      title: string;
    };
  };
  children: ReactNode;
};

const Post = ({ data, children }: PageProps<DataProps>) => {
  return (
    <Layout>
      <p className={textEnd}>
        <i>{data.mdx.frontmatter.date}</i>
      </p>
      {children}
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
    }
  }
`;

export default Post;
