import React from "react";
import Layout from "../components/layout/layout";
import Tools from "../components/tools/tools";

const ToolsPage = () => {
  return (
    <Layout width="mid">
      <Tools />
    </Layout>
  );
};

export const Head = () => <title>steebe - TOOLS</title>;

export default ToolsPage;
