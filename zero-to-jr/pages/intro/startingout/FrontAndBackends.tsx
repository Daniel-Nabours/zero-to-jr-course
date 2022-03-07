import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const Home: NextPage = () => {
  return (
    <div>
      <header>Frontends and Backends</header>

      <p>
        Web developer roles are usually divided into 3 main categories:
        Frontend. Backend, and Full stack.
      </p>
      <p>
        The terms “frontend”, “backend”, and “full stack” refer to which portion
        of the client-server relationship you work on.
      </p>
      <p>
        Frontend deals mainly with presentation of information on the client
        side. It’s called the front end because it’s what the end user sees in
        their browser.
      </p>
      <p>
        Backend deals mainly with the transformation and storage of information,
        it handles most of the logic and functionality that you can’t see, but
        is generally necessary for everything to actually work.
      </p>
      <p>
        Think of a restaurant, the backend would be the kitchen that cooks up
        and serves the food while the frontend would be the waiters and hosts
        who deal with delivering the food to the customers, decorating, and
        seating arrangement.
      </p>
    </div>
  );
};

export default Home;
