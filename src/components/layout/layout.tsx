import React, { ReactNode } from "react";
import { Link } from "gatsby";
import { navLinkCurrentItem, navLinkText } from "../globals.module.css";
import { container, navLinks, navLinkItem } from "./layout.module.css";
import classnames from "classnames";
import Footer from "../footer/footer";

export const Head = () => (
  <script src="https://kit.fontawesome.com/fa5a068953.js" crossOrigin="anonymous"></script>
);

type Props = {
  children?: ReactNode;
};

const SITE_NAME_ROOT = "steebe - ";

const TITLES = {
  HOME: SITE_NAME_ROOT + "HOME",
  PHOTOS: SITE_NAME_ROOT + "PHOTOS",
  LINES: SITE_NAME_ROOT + "LINES",
  TOOLS: SITE_NAME_ROOT + "TOOLS",
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
      case TITLES.LINES:
        this.linkPath = "/lines";
        break;
      case TITLES.TOOLS:
        this.linkPath = "/tools";
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
  // const isPhotos = path?.includes("photos");
  const isTools = path?.includes("tool");
  const isAbout = path?.includes("about");
  const isBlogRoot = path?.endsWith("lines") || path?.endsWith("lines/") || path?.includes("lines");
  const isHome = path === "/";

  const navLocations = [
    new NavLocation(isHome, TITLES.HOME),
    // new NavLocation(isPhotos, TITLES.PHOTOS),
    new NavLocation(isBlogRoot, TITLES.LINES),
    new NavLocation(isTools, TITLES.TOOLS),
    new NavLocation(isAbout, TITLES.ABOUT),
  ];

  return (
    <>
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
        <p>{children}</p>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
