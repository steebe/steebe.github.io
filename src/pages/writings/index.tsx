import React from "react";
import Layout from "../../components/layout/layout";
import { graphql, Link, PageProps } from "gatsby";
import { previewContainer, textEnd } from "./writings.module.css";

type Node = {
  id: string;
  body: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    draft: boolean;
    title: string;
  };
};

type DataProps = {
  allMdx: {
    nodes: Node[];
  };
};

const Writings = ({ data }: PageProps<DataProps>) => {
  const eligibleNodes = data.allMdx.nodes.filter((node) => !node.frontmatter.draft);
  return (
    <Layout>
      {eligibleNodes.map((node, index) => {
        if (!node.frontmatter.draft) {
          return (
            <div className={previewContainer} key={`${node.id}/${node.frontmatter.title}`}>
              <div key={node.id}>
                <span>
                  <Link to={`/writings${node.fields.slug}`}>{node.frontmatter.title}</Link>
                  <p className={textEnd}>{node.frontmatter.date}</p>
                </span>
              </div>
              {!(index === eligibleNodes.length - 1) && <hr />}
            </div>
          );
        }
        return null;
      })}
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        body
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          draft
          title
        }
      }
    }
  }
`;

export default Writings;
