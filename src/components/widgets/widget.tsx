import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { widget, title as titleStyle } from "./widget.module.css";

interface WidgetProps {
  children: React.ReactNode;
  title?: string;
  to?: string;
  url?: string;
}

const Widget: React.FC<WidgetProps> = ({ children, title, to, url }) => {
  const titleContent = title && (
    <h2 className={titleStyle}>
      {to ? (
        <Link to={to}>{title}</Link>
      ) : url ? (
        <OutboundLink href={url} target="_blank" rel="noreferrer">
          {title}
        </OutboundLink>
      ) : (
        title
      )}
    </h2>
  );

  return (
    <div className={widget}>
      {titleContent}
      {children}
    </div>
  );
};

export default Widget;
