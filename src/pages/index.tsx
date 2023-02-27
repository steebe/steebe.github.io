import React from "react";
import Image from "../components/image/image";
import Layout from "../components/layout/layout";
import { centeredText, hello, navLinkText } from "../components/globals.module.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="HOME">
      <Image />
      <div className={centeredText}>
        <p className={hello}>Hey, I’m Steve!</p>
        <a href="./steve_bass_resume.pdf" className={navLinkText} target="_blank">
          RESUME
        </a>
      </div>
    </Layout>
  );
};

export default IndexPage;
