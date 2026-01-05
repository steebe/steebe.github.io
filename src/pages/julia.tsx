import React from "react";
import Layout from "../components/layout/layout";
import CalendarWidget from "../components/widgets/calendarWidget";

const Julia = () => {
  return (
    <Layout>
      <div>
        <h3>J&apos;s Corner</h3>
        <p>Hello, darlin&apos;. Good to see you :)</p>
        <CalendarWidget />
      </div>
    </Layout>
  );
};

export default Julia;
