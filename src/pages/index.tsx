import React from "react";
import Layout from "../components/layout/layout";
import { StaticImage } from "gatsby-plugin-image";
import { centeredText, hello } from "../components/globals.module.css";

const IndexPage = () => {
  return (
    <Layout>
      <StaticImage src="../images/me_blue.jpeg" alt="Me" />
      <div className={centeredText}>
        <p className={hello}>Hey, I’m Steve!</p>
      </div>
    </Layout>
  );
};

export default IndexPage;
