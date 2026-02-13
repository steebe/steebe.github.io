import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";

interface WidgetProps {
  children: React.ReactNode;
  title?: string;
  to?: string;
  url?: string;
}

const Widget: React.FC<WidgetProps> = ({ children, title, to, url }) => {
  const titleContent = title && (
    <h2 style={{ marginTop: 0, marginBottom: "1rem", textAlign: "left" }}>
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
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      {titleContent}
      {children}
    </div>
  );
};

export default Widget;
