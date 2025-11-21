import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../../components/layout/layout";
import { Node } from "../../types/node";
import RowItem from "../../components/lines/rowItem";

type DataProps = {
  allMdx: {
    nodes: Node[];
  };
};

const Writings = ({ data }: PageProps<DataProps>) => {
  const eligibleNodes = data.allMdx.nodes.filter((node) => !node.frontmatter.draft);

  // The GraphQL for sourcing the MDX nodes cannot sort by two frontmatter props; must do so here
  eligibleNodes.sort((a: Node, b: Node) => sortByDate(a, b));

  return (
    <Layout>
      {eligibleNodes.map((node, index) => (
        <React.Fragment key={node.id}>
          <RowItem node={node} />
          {index < eligibleNodes.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </Layout>
  );
};

function sortByDate(a: Node, b: Node): number {
  const updatedA = a.frontmatter.updated;
  const updatedB = b.frontmatter.updated;
  const createdA = a.frontmatter.date;
  const createdB = b.frontmatter.date;

  // Use updated date if it exists, otherwise fall back to created date
  const dateA = new Date(updatedA || createdA);
  const dateB = new Date(updatedB || createdB);

  return dateB.valueOf() - dateA.valueOf();
}

export const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { hidden: { in: [false, null] }, draft: { in: [false, null] } } }
      sort: { frontmatter: { date: DESC } }
    ) {
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
          hidden
          tags
        }
      }
    }
  }
`;

export default Writings;
