import React, { ReactNode } from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { centeredText, navLinkCurrentItem, navLinkText } from "../globals.module.css";
import { container, footer, navLinks, navLinkItem, resume } from "./layout.module.css";
import classnames from "classnames";

type Props = {
  children?: ReactNode;
};

const SITE_NAME_ROOT = "steebe - ";

const TITLES = {
  HOME: SITE_NAME_ROOT + "HOME",
  PHOTOS: SITE_NAME_ROOT + "PHOTOS",
  TOOLS: SITE_NAME_ROOT + "TOOLS",
  BLOG: SITE_NAME_ROOT + "BLOG",
  ABOUT: SITE_NAME_ROOT + "ABOUT",
};

class NavLocation {
  current: boolean | undefined;
  title: string;
  linkLabel: string;
  linkPath: string;
  classNames: classnames.ArgumentArray;
  constructor(current: boolean | undefined, title: string) {
    this.current = current;
    this.title = title;
    this.linkLabel = title.replace(SITE_NAME_ROOT, "");

    this.linkPath = "/";
    switch (title) {
      case TITLES.HOME:
        this.linkPath = "/";
        break;
      case TITLES.PHOTOS:
        this.linkPath = "/photos";
        break;
      case TITLES.TOOLS:
        this.linkPath = "/tools";
        break;
      case TITLES.BLOG:
        this.linkPath = "/writings";
        break;
      case TITLES.ABOUT:
        this.linkPath = "/about";
        break;
      default:
        break;
    }
    this.classNames = [navLinkText, current ? navLinkCurrentItem : null];
  }
}

const Layout: React.FC<Props> = ({ children }) => {
  const path = typeof window !== "undefined" ? window.location.pathname : undefined;
  const isPhotos = path?.includes("photos");
  const isTools = path?.includes("tool");
  const isAbout = path?.includes("about");
  const isBlogRoot =
    path?.endsWith("writings") || path?.endsWith("writings/") || path?.includes("writings");
  const isHome = path === "/" || (!isTools && !isAbout && !isBlogRoot && !isPhotos);

  const navLocations = [
    new NavLocation(isHome, TITLES.HOME),
    // new NavLocation(isPhotos, TITLES.PHOTOS),
    new NavLocation(isTools, TITLES.TOOLS),
    new NavLocation(isBlogRoot, TITLES.BLOG),
    new NavLocation(isAbout, TITLES.ABOUT),
  ];

  return (
    <div className={container}>
      <title>{navLocations.filter((loc) => loc.current).map((loc) => loc.title)}</title>
      <nav>
        <ul className={navLinks}>
          {navLocations.map((location) => (
            <li key={location.title} className={navLinkItem}>
              <Link to={location.linkPath} className={classnames(location.classNames)}>
                {location.linkLabel}
              </Link>
            </li>
          ))}
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
