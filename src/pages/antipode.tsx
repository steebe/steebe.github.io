import React from "react";
import Layout from "../components/layout/layout";
import AntipodeWidget from "../components/widgets/antipodeWidget";

const Antipode = () => {
  return (
    <Layout>
      <div>
        <p>
          I dug many a hole in my childhood. In the first house I grew up in, our next door neighbor
          gave us neighborhood kids full exploration and resource rights to the land behind their
          garage. Essential fossil expeditions, sacred ritual burials, and experimental manmade pond
          operations commenced weekly. It was behind that garage that I first heard the phrase:
        </p>
        <p>
          <b>&quot;What are you doing, digging to China?&quot;</b>
        </p>
        <p>
          Since that day, I can&apos;t help but daydream of the opportunity of meeting an
          adventurous stranger on the other end of my shovel some day. Until that day comes,
          I&apos;ll simply offer myself a place to end up at any antipode of my choosing.
        </p>
        <AntipodeWidget />
      </div>
    </Layout>
  );
};

export default Antipode;
