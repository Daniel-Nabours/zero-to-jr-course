import type { NextPage } from "next";
import { memo } from "react";

const Home: NextPage = () => {
  return (
    <div className="content">
      <div className="section">
        <header>Journey Testing</header>
      </div>
    </div>
  );
};

export default memo(Home);
