import type { NextPage } from "next";
import { memo } from "react";

const Home: NextPage = () => {
  return (
    <div className="content">
      <div className="section">
        <header>What is a Cluster?</header>

        <p> 
          K{`ubernetes is a beast. I could sit and explain more and more and more
          about this technology for months and barely scratch the surface.
          Instead, I'll point to one of my favorite resources for learning:
          Youtube Academy.`}
        </p>

        <p> 
          Watch the following video from the ever incredible Fireship channel:
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PziYflu8cB8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <p>{`That's pretty much all you'll need to know about kubernetes for our purposes at the moment.`}</p>
      </div>
    </div>
  );
};

export default memo(Home);
