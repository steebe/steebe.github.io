import React from "react";

interface WidgetProps {
  children: React.ReactNode;
  title?: string;
}

const Widget: React.FC<WidgetProps> = ({ children, title }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
      }}
    >
      {title && <h2 style={{ marginTop: 0, marginBottom: "1rem", textAlign: "left" }}>{title}</h2>}
      {children}
    </div>
  );
};

export default Widget;
