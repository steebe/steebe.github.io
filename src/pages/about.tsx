import React from "react";
import Layout from "../components/layout/layout";
import { StaticImage } from "gatsby-plugin-image";
import { siteImage } from "../components/globals.module.css";

const About = () => {
  return (
    <Layout>
      <p>
        Steve Bass is a software developer, working remotely for{" "}
        <a href="https://mercato.com" target="_blank" rel="noreferrer">
          Mercato, Incorporated
        </a>
        . He has been in industry for over eight years, across four domains of business.
      </p>
      <StaticImage
        className={siteImage}
        src="../images/tommy_booth.jpg"
        alt="Steve, eating some sunshine"
      />
      <p>
        Steve’s experience as engineer #4 at Mercato has been his most formative, but all of his
        opportunities offered great chances to help him become a scrappy generalist enterprise
        developer. His road to becoming a strong technologist was effortful and proved to be a
        challenge; Steve’s soft skills are culture-building, leading, and being an outgoing and
        effective communicator. His hard skills of designing and implementing pragmatic software
        solutions came with many long nights and much mental elbow grease.
      </p>
      <p>
        Steve’s free time is generally occupied by rock climbing, shooting photos, playing music,
        and spending time with loved ones.
      </p>
      <p>
        Steve has enjoyed becoming a slowmad
        <b>
          <i>{String.fromCharCode(8482)}</i>&nbsp;
        </b>
        after occasionally drifting from city to city in search for a cure for boredom and ennui.
        Thus far, the following proved to be effective at quelling the symptoms, but not acted as a
        full-blown cure:
        <ul>
          <li>Rochester, NY</li>
          <li>Buffalo, NY</li>
          <li>Pittsburgh, PA</li>
          <li>San Diego, CA</li>
          <li>Grass Valley, CA</li>
        </ul>
      </p>
      <p>
        Steve holds a Bachelor’s of Science in Computer Science from the University at Buffalo in
        Western New York.
      </p>
    </Layout>
  );
};

export default About;
