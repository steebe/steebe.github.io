import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { centeredText, navLinkText, navLinkItem } from "../globals.module.css";
import { footer, footerContent, footerLinks } from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={`${centeredText} ${footer}`}>
      <div className={footerContent}>
        <span className={footerLinks}>
          <a href="./steve_bass_resume.pdf" className={navLinkText} target="_blank">
            RESUME
          </a>
        </span>

        <span className={footerLinks}>
          <OutboundLink
            href="https://www.github.com/steebe"
            target="_blank"
            className={`${navLinkText} ${navLinkItem}`}
            rel="noreferrer"
          >
            GITHUB
          </OutboundLink>
        </span>

        <span className={footerLinks}>
          <OutboundLink
            href="https://www.linkedin.com/in/steebe"
            target="_blank"
            className={navLinkText}
            rel="noreferrer"
          >
            LINKEDIN
          </OutboundLink>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
