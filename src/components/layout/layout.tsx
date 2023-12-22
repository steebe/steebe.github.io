import React, { ReactNode } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { centeredText, navLinkCurrentItem, navLinkText } from "../globals.module.css";
import { container, footer, navLinks, navLinkItem, resume } from "./layout.module.css";
import classnames from "classnames";

type Props = {
  children?: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const page = typeof window !== "undefined" ? window.location.pathname : undefined;
  const isTools = page?.includes("tool");
  const isAbout = page?.includes("about");
  const isBlogRoot = page?.endsWith("writings") || page?.endsWith("writings/");
  const isHome = page === "/" || (!isTools && !isAbout && !isBlogRoot);

  return (
    <div className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={classnames(navLinkText, isHome ? navLinkCurrentItem : null)}>
              HOME
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link
              to="/tools"
              className={classnames(navLinkText, isTools ? navLinkCurrentItem : null)}
            >
              TOOLS
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link
              to="/writings"
              className={classnames(navLinkText, isBlogRoot ? navLinkCurrentItem : null)}
            >
              BLOG
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link
              to="/about"
              className={classnames(navLinkText, isAbout ? navLinkCurrentItem : null)}
            >
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer className={`${centeredText} ${footer}`}>
        <div className={resume}>
          <a href="./steve_bass_resume.pdf" className={navLinkText} target="_blank">
            RESUME
          </a>
        </div>

        <OutboundLink
          href="https://www.github.com/steebe"
          target="_blank"
          className={`${navLinkText} ${navLinkItem}`}
          rel="noreferrer"
        >
          GITHUB
        </OutboundLink>
        <OutboundLink
          href="https://www.linkedin.com/in/steebe"
          target="_blank"
          className={navLinkText}
          rel="noreferrer"
        >
          LINKEDIN
        </OutboundLink>
      </footer>
    </div>
  );
};

export default Layout;
