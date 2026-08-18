import React, { useEffect, useState } from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../../components/layout/layout";
import { Node } from "../../types/node";
import RowItem from "../../components/lines/rowItem";
import TagFilter from "../../components/lines/tagFilter";
import { empty } from "./lines.module.css";

type DataProps = {
  allMdx: {
    nodes: Node[];
  };
};

const Writings = ({ data, location }: PageProps<DataProps>) => {
  const eligibleNodes = data.allMdx.nodes.filter((node) => !node.frontmatter.draft);

  // The GraphQL for sourcing the MDX nodes cannot sort by two frontmatter props; must do so here
  eligibleNodes.sort((a: Node, b: Node) => sortByDate(a, b));

  // The page is built without a query string, so reading ?tag= during render would
  // disagree with the SSG'd markup. Resolve it after mount instead, and re-resolve
  // on every navigation, since filtering swaps the query string in place.
  const [activeTag, setActiveTag] = useState<string | null>(null);
  useEffect(() => {
    setActiveTag(new URLSearchParams(location.search).get("tag"));
  }, [location.search]);

  const visibleNodes = activeTag
    ? eligibleNodes.filter((node) => node.frontmatter.tags?.includes(activeTag))
    : eligibleNodes;

  return (
    <Layout width="mid">
      <TagFilter tags={collectTags(eligibleNodes)} activeTag={activeTag} />
      {visibleNodes.length > 0 ? (
        visibleNodes.map((node) => <RowItem key={node.id} node={node} />)
      ) : (
        <p className={empty}>no posts tagged [{activeTag}]</p>
      )}
    </Layout>
  );
};

// Most-used tags first, alphabetical within a tie.
function collectTags(nodes: Node[]): string[] {
  const counts = new Map<string, number>();

  nodes.forEach(
    (node) => node.frontmatter.tags?.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1)),
  );

  return [...counts.keys()].sort(
    (a, b) => (counts.get(b) ?? 0) - (counts.get(a) ?? 0) || a.localeCompare(b),
  );
}

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

export const Head = () => <title>steebe - LINES</title>;

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
