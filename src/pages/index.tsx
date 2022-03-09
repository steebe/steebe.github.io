import React from "react";
import Layout from "../components/layout/layout";
import { StaticImage } from "gatsby-plugin-image";
import { centeredText, navLinkText } from "../components/globals.module.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="HOME">
      <StaticImage src="../images/me_blue.jpeg" alt="Me" />
      <div className={centeredText}>
        <p>Hey, I’m Steve!</p>
        <a href="./steve_bass_resume.pdf" className={navLinkText} target="_blank">
          RESUME
        </a>
      </div>
    </Layout>
  );
};

export default IndexPage;
