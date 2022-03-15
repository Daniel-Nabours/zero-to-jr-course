import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className="content">
      <div className="section">
        <header>Multi-Page Applications</header>
        <p>
          Multi-page applications are served to the client in “pages”. This
          training is a multi-page application, which is the feeling given by
          the paging animation. This allows the server to split up the bundle
          into smaller sizes to be served one at a time when navigated, as
          opposed to all at once.
        </p>

        <p>
          MPAs usually feel a lot clunkier than SPAs and are more suited for
          larger websites like E-commerce or API documentation.
        </p>

        <p>
          MPAs require use of some sort of router that tells the server what
          page to serve to the client whenever a certain link is clicked. This
          training also has its own routing functionality handled through
          NextJS.
        </p>

        <p>
          Since MPAs are served one page at a time, it makes them much easier to
          optimize for search engines, since you can simply return a static,
          server-rendered web page to the requesting entity.
        </p>

        <p>
          Some common MPA frameworks include NextJS, Sveltekit, and Angular.
        </p>
      </div>
    </div>
  );
};

export default React.memo(Home);
