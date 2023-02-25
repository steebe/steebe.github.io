import React from "react";
import Layout from "../components/layout/layout";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <Layout pageTitle="ABOUT">
      <p>
        Steve Bass is a software developer, working remotely for{" "}
        <a href="https://mercato.com" target="_blank" rel="noreferrer">
          Mercato, Incorporated
        </a>
        . He has been in industry for over six years, across four domains of business.
      </p>
      <StaticImage src="../images/me_booth.jpeg" alt="Steve, eating some sunshine" />
      <p>
        Steve’s experience as engineer #4 at Mercato has been his most formative, but all of his
        opportunities offered great chances to help him become a strong generalist enterprise
        developer. His road to becoming a strong technologist was effortful and proved to be a
        challenge; Steve’s soft skills are culture-building, leading, and being an outgoing and
        effective communicator. His hard skills of designing and implementing pragmatic software
        solutions came less naturally, and took many long nights and much mental elbow grease.
      </p>
      <p>
        Though Steve has poured himself into work lately, more than ever, he also remembers to
        occasionally step away from his desk for the important things. His free time is generally
        occupied by rock climbing, noodling on his guitar and bass, or spending time with loved
        ones.
      </p>
      <p>
        Steve has enjoyed becoming a slowmad
        <b>
          <i>{String.fromCharCode(8482)}</i>&nbsp;
        </b>
        after occasionally drifting from city to city in search for a cure for boredom and ennui.
        Thus far, the following have proved to be effective at quelling the symptoms, but not acted
        as a full-blown cure:
        <ul>
          <li>Rochester, NY</li>
          <li>Buffalo, NY</li>
          <li>Pittsburgh, PA</li>
          <li>San Diego, CA</li>
          <li>Grass Valley, CA</li>
        </ul>
      </p>
      <p>
        Steve’s passions are: music, photography, cooking, and travelling. He is slowly remembering
        to find time for each as normalcy returns to the culture around him.
      </p>
      <p>
        Steve holds a Bachelor’s of Science in Computer Science from the University at Buffalo in
        Western New York.
      </p>
    </Layout>
  );
};

export default About;
