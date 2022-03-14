import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className="content">
      <header>How Websites Work</header>

      <p>
        All websites, at their most basic, are just a bunch of files stored on a
        computer somewhere called a server. This server is connected to the
        internet and you can then load that website through a browser like
        firefox or chrome. Your browser is also called the client in this
        situation
      </p>

      <p>
        Every time you’re on the internet, you (the client) are loading data
        from the server as well as submitting data back to the server. This
        constant back and forth communication between client and server is the
        basis of the internet.
      </p>
    </div>
  );
};

export default React.memo(Home);
