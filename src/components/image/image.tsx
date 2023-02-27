import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, PageProps } from "gatsby";

type Edge = {
  node: {
    name: string;
    ext: string;
    base: string;
    id: string;
    internal: {
      owner: string;
      type: string;
      contentDigest: string;
    };
  };
};

type DataProps = { edges: Edge[] };

type Props = {
  src: SOURCE;
  alt?: string;
};

type SOURCES = {
  ME_BOOTH: string;
};

export type SOURCE = keyof SOURCES;

export const SOURCE_MAP: Map<SOURCE, string> = new Map<SOURCE, string>([["ME_BOOTH", "me_blue"]]);

const Image = () => {
  // eslint-disable-next-line react/prop-types
  const sourceNode = props.data.photos.edges
    .map((edge) => edge.node)
    .filter((node) => node.name === "ME_BOOTH")[0];
  console.log(sourceNode);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <GatsbyImage image={getImage(sourceNode)} alt={alt} />;
};

export const query = graphql`
  {
    photos: allFile(filter: { ext: { in: [".jpg", ".jpeg", ".png"] } }) {
      edges {
        node {
          name
          ext
          base
          id
          internal {
            owner
            type
            contentDigest
          }
        }
      }
    }
  }
`;

export default Image;
