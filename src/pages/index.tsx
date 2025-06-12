import React from "react";
import Layout from "../components/layout/layout";
import { StaticImage } from "gatsby-plugin-image";
import { centeredText, siteImage } from "../components/globals.module.css";

const IndexPage = () => {
  return (
    <Layout>
      <StaticImage className={siteImage} src="../images/em.JPG" alt="Me" />
      <div className={centeredText}>
        <p>
          <b>
            <i>steve (at) stevebass (dot) me</i>
          </b>
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
