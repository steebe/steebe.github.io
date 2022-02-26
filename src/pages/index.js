import React from 'react';
import Layout from "../components/layout/layout";
import {StaticImage} from "gatsby-plugin-image";

const IndexPage = () => {
    return (
        <Layout pageTitle="Home">
            <StaticImage src="../images/me_and_alfie.jpg" alt="Me and the pup"/>
            <p>Hey, I'm Steve!</p>
        </Layout>
    );
};

export default IndexPage;