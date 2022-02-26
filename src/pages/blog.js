import React from 'react';
import Layout from "../components/layout/layout";
import {graphql} from "gatsby";

const Blog = ({ data }) => {
    return (
        <Layout pageTitle="Ramblings">
            <ul>
                {data.allFile.nodes.map(file => (
                    <li key={file.name}>{file.name}</li>
                ))}
            </ul>
        </Layout>
    )
};

export const query = graphql`
    query {
        allFile {
            nodes {
              name
              relativeDirectory
              relativePath
            }
      }
    }
`;

export default Blog;