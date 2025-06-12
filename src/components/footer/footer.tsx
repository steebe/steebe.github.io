import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { centeredText, navLinkText, navLinkItem } from "../globals.module.css";
import { footer, footerContent, footerLinks } from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className={`${centeredText} ${footer}`}>
      <div className={footerContent}>
        <span className={footerLinks}>
          <a href="./steve_bass_resume.pdf" className={navLinkText} target="_blank">
            <FontAwesomeIcon icon={faBookOpen} size="1x" />
          </a>
        </span>

        <span className={footerLinks}>
          <OutboundLink
            href="https://www.github.com/steebe"
            target="_blank"
            className={`${navLinkText} ${navLinkItem}`}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </OutboundLink>
        </span>

        <span className={footerLinks}>
          <OutboundLink
            href="https://www.linkedin.com/in/steebe"
            target="_blank"
            className={navLinkText}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
          </OutboundLink>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
