import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { footer, footerContent, footerLink } from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className={footer}>
      <div className={footerContent}>
        <a
          href="./steve_bass_resume.pdf"
          className={footerLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Résumé"
        >
          <FontAwesomeIcon icon={faBookOpen} />
        </a>

        <OutboundLink
          href="https://www.github.com/steebe"
          target="_blank"
          className={footerLink}
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </OutboundLink>

        <OutboundLink
          href="https://www.linkedin.com/in/steebe"
          target="_blank"
          className={footerLink}
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </OutboundLink>
      </div>
    </footer>
  );
};

export default Footer;
