import React from 'react';
import Layout from "../components/layout/layout";
import {graphql, useStaticQuery} from "gatsby";

const About = () => {
    const data = useStaticQuery(graphql`
        query {
            sitePage {
                component
                path
            }
        }
    `);



    return(

        <Layout pageTitle="About">
            <b>{data.sitePage.path}</b>

            <p>
                Steve Bass is a software developer residing in San Diego, CA, working remotely from his
                Banker's Hill apartment. He has been in industry for over six years, across four domains of business.
            </p>
            <p>
                Steve's recent experience as engineer #4 at Mercato was his most formative, but all of
                his opportunities offered great chances to help him become a strong generalist enterprise
                developer. His road to becoming a strong technologist was effortful and challenging;
                Steve's soft skills are culture-building, leading, and being an outgoing and effective communicator.
                His hard skills of designing and implementing pragmatic software solutions came less naturally, and
                took many long nights and much mental elbow grease.
            </p>
            <p>
                Though Steve has poured himself into work lately, more than ever, he also remembers to occasionally
                step away from his desk for the important things. His free time is generally occupied by rock climbing,
                noodling on his guitar and bass, or spending time with loved ones.
            </p>
            <p>
                Steve's passions are: music, photography, cooking, and travelling. He is slowly remembering to find
                time for each as normalcy returns to the culture around him.
            </p>
            <p>
                Steve holds a Bachelor's of Science in Computer Science from the University at Buffalo in Western
                New York.
            </p>
        </Layout>
    );
};

export default About;