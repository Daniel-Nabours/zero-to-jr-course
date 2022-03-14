import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className="content">
      <header>Computer Memory</header>
    </div>
  );
};

export default React.memo(Home);
