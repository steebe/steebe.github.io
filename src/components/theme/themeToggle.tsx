import React, { useEffect, useState } from "react";
import { toggle } from "./themeToggle.module.css";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

const resolveTheme = (): Theme => {
  const stored = document.documentElement.getAttribute("data-theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const ThemeToggle: React.FC = () => {
  // Rendered identically on the server and on the first client pass, so that
  // hydration matches; the real theme is resolved immediately after mount.
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  useEffect(() => setTheme(resolveTheme()), []);

  const flip = () => {
    const next: Theme = (theme ?? resolveTheme()) === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // Storage unavailable (private mode, blocked cookies); theme still applies for this page.
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      className={toggle}
      onClick={flip}
      aria-label={theme ? `Switch to ${theme === "dark" ? "light" : "dark"} theme` : "Switch theme"}
      title="Switch theme"
    >
      {theme === "dark" ? "◑" : "◐"}
    </button>
  );
};

export default ThemeToggle;
