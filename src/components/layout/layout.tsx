import React, { ReactNode } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { centeredText, navLinkText } from "../globals.module.css";
import { container, footer, heading, navLinks, navLinkItem } from "./layout.module.css";

type Props = {
  pageTitle?: string;
  children?: ReactNode;
};

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
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
  const isHome = page === "/";
  const isAbout = page?.includes("about");
  const isBlogRoot = page?.endsWith("writings") || page?.endsWith("writings/");

  return (
    <div className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <nav>
        <ul className={navLinks}>
          {!isHome && (
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                HOME
              </Link>
            </li>
          )}
          {!isAbout && (
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                ABOUT
              </Link>
            </li>
          )}
          {!isBlogRoot && (
            <li className={navLinkItem}>
              <Link to="/writings" className={navLinkText}>
                BLOG
              </Link>
            </li>
          )}
        </ul>
      </nav>
      {pageTitle && <h1 className={heading}>{pageTitle}</h1>}
      <main>{children}</main>
      <footer className={`${centeredText} ${footer}`}>
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
