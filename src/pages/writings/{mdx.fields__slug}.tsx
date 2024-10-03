import React, { ReactNode } from "react";
import Layout from "../../components/layout/layout";
import { graphql, PageProps } from "gatsby";
import { post, date } from "./writings.module.css";

type DataProps = {
  mdx: {
    frontmatter: {
      date: string;
      updated?: string;
      title: string;
    };
  };
  children: ReactNode;
};

const Post = ({ data, children }: PageProps<DataProps>) => {
  return (
    <Layout>
      <p className={date}>
        <i>{data.mdx.frontmatter.date}</i>
        <br/>
        {
          data.mdx.frontmatter.updated &&
          <i>(Updated on {data.mdx.frontmatter.updated})</i>
        }
      </p>
      <div className={post}>{children}</div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        updated(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export default Post;
