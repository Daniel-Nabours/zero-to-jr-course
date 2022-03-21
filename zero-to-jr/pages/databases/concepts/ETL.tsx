import type { NextPage } from "next";
import { memo } from "react";

const Home: NextPage = () => {
  return (
    <div className="content">
      <div className="section">
        <div className="section">
          <header>
            Extract, Transform, and Load (Data &quot;pipelines&quot;)
          </header>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
