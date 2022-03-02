import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css";

type Props = {
  pageTitle: string;
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
  const isBlog = page?.includes("writings");

  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          {!isHome && (
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
          )}
          {!isAbout && (
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
          )}
          {!isBlog && (
            <li className={navLinkItem}>
              <Link to="/writings" className={navLinkText}>
                Blog
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
