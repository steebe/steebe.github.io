import * as React from "react";
import { Link } from "gatsby";
import { centeredText } from "../components/globals.module.css";

const DeadBeef = () => {
  return (
    <div>
      <p className={centeredText}>
        deadbeef
        <br />
        <Link to="/">Back to safety...</Link>
      </p>
    </div>
  );
};

export default DeadBeef;
