import React, { ReactNode } from "react";
import { siteImage } from "../globals.module.css";
import { container, contentContainer, description, image } from "./tools.module.css";
import { StaticImage } from "gatsby-plugin-image";

type Tool = {
  name: string;
  image: ReactNode;
  description: string;
  link: string;
};

const Tools = () => {
  const imageLength = 200;
  const tools: Array<Tool> = [
    {
      name: "unminipy",
      image: (
        <StaticImage
          src="../../images/unminipy-logo.png"
          alt="unminipy"
          height={imageLength}
          width={imageLength}
          className={siteImage}
        />
      ),
      description: "A small CLI utility for unminifying minified JSON to assist with readability.",
      link: "https://github.com/steebe/unminipy/releases",
    },
    {
      name: "domestic hearth",
      image: (
        <StaticImage
          src="../../images/domestic-hearth-logo.png"
          alt="domestic hearth"
          height={imageLength}
          width={imageLength}
          className={siteImage}
        />
      ),
      description: "A browser extension for overriding distractions.",
      link: "https://chromewebstore.google.com/detail/domestic-hearth/gkfinngilpdbfjmmgcnjikelebdldcik?pli=1",
    },
  ];

  return (
    <>
      {tools.map((tool) => (
        <div className={container} key={tool.name}>
          <h1>
            <a href={tool.link} target="_blank" rel="noreferrer">
              {tool.name}
            </a>
          </h1>
          <div className={contentContainer}>
            <div className={image}>{tool.image}</div>
            <p className={description}>{tool.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Tools;
