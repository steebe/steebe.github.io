import React, { ReactNode } from "react";
import { graphql, Link, PageProps, HeadProps } from "gatsby";
import Layout from "../../components/layout/layout";
import { back, header, title as titleStyle, meta, post } from "./lines.module.css";

type DataProps = {
  mdx: {
    frontmatter: {
      date: string;
      isoDate: string;
      updated?: string;
      title: string;
      tags?: string[];
    };
  };
  children: ReactNode;
};

const Post = ({ data, children }: PageProps<DataProps>) => {
  const { title, date, isoDate, updated, tags } = data.mdx.frontmatter;

  return (
    <Layout>
      <Link to="/lines" className={back}>
        ← lines
      </Link>
      <header className={header}>
        <h1 className={titleStyle}>{title}</h1>
        <p className={meta}>
          <time dateTime={isoDate}>{date}</time>
          {updated && <> · updated {updated}</>}
          {tags && tags.length > 0 && <> · [{tags.join(", ")}]</>}
        </p>
      </header>
      <article className={post}>{children}</article>
    </Layout>
  );
};

// Gatsby's Head API only renders a <title> that has a single text child.
export const Head = ({ data }: HeadProps<DataProps>) => (
  <title>{`steebe - ${data.mdx.frontmatter.title}`}</title>
);

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        tags
        date(formatString: "MMMM D, YYYY")
        isoDate: date(formatString: "YYYY-MM-DD")
        updated(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export default Post;
