import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className="content">
      <header>Key-Value Database</header>
    </div>
  );
};

export default React.memo(Home);
