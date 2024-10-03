import React from "react";
import Layout from "../../components/layout/layout";
import { graphql, Link, PageProps } from "gatsby";
import { previewContainer, date } from "./writings.module.css";

type Node = {
  id: string;
  body: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    updated?: string;
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

  // The GraphQL for sourcing the MDX nodes cannot sort by two frontmatter props; must do so here
  eligibleNodes.sort((a: Node, b: Node): number => {
    const strA = a.frontmatter.updated;
    const strB = b.frontmatter.updated;

    if (strA && strB) {
      const dateA = new Date(strA);
      const dateB = new Date(strB);
      return dateB.valueOf() - dateA.valueOf();
    } else if (strA && !strB) {
      return -1;
    } else if (!strA && strB) {
      return 1;
    }

    return 0;
  });

  return (
    <Layout>
      {eligibleNodes.map((node, index) => {
        if (!node.frontmatter.draft) {
          return (
            <div className={previewContainer} key={`${node.id}/${node.frontmatter.title}`}>
              <div key={node.id}>
                <span>
                  <Link to={`/writings${node.fields.slug}`}>{node.frontmatter.title}</Link>
                  <p className={date}>{node.frontmatter.date}</p>
                  {node.frontmatter.updated && (
                    <p className={date}>(Updated on {node.frontmatter.updated})</p>
                  )}
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
          updated(formatString: "MMMM D, YYYY")
          draft
          title
        }
      }
    }
  }
`;

export default Writings;
