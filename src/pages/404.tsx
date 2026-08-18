import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import { centeredText } from "../components/globals.module.css";

const DeadBeef = () => {
  return (
    <Layout>
      <p className={centeredText}>
        deadbeef
        <br />
        <Link to="/">Back to safety...</Link>
      </p>
    </Layout>
  );
};

export const Head = () => <title>steebe - 404</title>;

export default DeadBeef;
