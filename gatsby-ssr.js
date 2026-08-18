const React = require("react");

const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t);}}catch(e){}})();`;

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: "en" });
  setHeadComponents([
    React.createElement("link", {
      key: "icon-svg",
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    }),
    React.createElement("link", {
      key: "icon-ico",
      rel: "alternate icon",
      sizes: "16x16 32x32 48x48",
      href: "/favicon.ico",
    }),
    React.createElement("link", {
      key: "icon-apple",
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
    }),
  ]);
  setPreBodyComponents([
    React.createElement("script", {
      key: "theme",
      dangerouslySetInnerHTML: { __html: THEME_SCRIPT },
    }),
  ]);
};
