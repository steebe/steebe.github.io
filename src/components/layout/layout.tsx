import React, { ReactNode } from "react";
import { Link } from "gatsby";
import {
  shell,
  container,
  mid,
  wide,
  masthead,
  mastheadInner,
  navLinks,
  navLinkItem,
  navLink,
  navLinkCurrent,
} from "./layout.module.css";
import classnames from "classnames";
import Footer from "../footer/footer";
import ThemeToggle from "../theme/themeToggle";

export type Width = "prose" | "mid" | "wide";

type Props = {
  children?: ReactNode;
  width?: Width;
};

const NAV_ITEMS = [
  { label: "home", path: "/", partial: false },
  { label: "lines", path: "/lines", partial: true },
  { label: "tools", path: "/tools", partial: true },
  { label: "about", path: "/about", partial: true },
];

const WIDTH_CLASSES: Record<Width, string | null> = {
  prose: null,
  mid,
  wide,
};

// The masthead sits outside the content column so that it always lands on the
// same rail; only `children` respects the per-route width.
const Layout: React.FC<Props> = ({ children, width = "prose" }) => (
  <div className={shell}>
    <header className={masthead}>
      <div className={mastheadInner}>
        <nav>
          <ul className={navLinks}>
            {NAV_ITEMS.map(({ label, path, partial }) => (
              <li key={path} className={navLinkItem}>
                <Link
                  to={path}
                  className={navLink}
                  activeClassName={navLinkCurrent}
                  partiallyActive={partial}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
    <main className={classnames(container, WIDTH_CLASSES[width])}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
