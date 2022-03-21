import type { NextPage } from "next";
import { memo } from "react";

const Home: NextPage = () => {
  return (
    <div className="content">
      <div className="section">
        <div className="section">
          <header>Data Structures and Common Algorithms</header>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
