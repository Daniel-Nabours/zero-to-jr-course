import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className="content">
      <header>Single-Page Applications</header>

      <p>
        Single page applications are applications that exist solely on a single
        page. They work by conditionally rendering different content based off
        the current state of the application. Although fast, elegant, and easy
        to use, they do run into a number of problems.
      </p>

      <p>
        SPAs are not search engine optimized since all of the information
        displayed is rendered at runtime, there’s nothing for the API to serve
        to a search engine that’s scanning the page. 
      </p>

      <p>
        SPAs also run into the issue of needing to load all of their resources
        at load time, resulting in large bundle sizes and slow first loads.
      </p>

      <p>
        In exchange, SPAs offer a fast, seamless, and smooth user experience.
        For this reason they’re ideal for small applications like chat, mobile
        apps, or small browser-based games like Wordle.
      </p>
    </div>
  );
};

export default React.memo(Home);
