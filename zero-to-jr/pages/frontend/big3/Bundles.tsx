import type { NextPage } from "next"; 
import React from "react";

const Home: NextPage = () => { 
  return (
    <div className="content">
      <header>Bundles</header>

      <p>A module bundler is a tool that takes pieces of JavaScript and their dependencies and bundles them into a single file, usually for use in the browser. It usually starts with an entry file, and from there it bundles up all of the code needed for that entry file.</p>

      <p>In modern javascript, bundle sizes often include dozens if not hundreds of third party dependencies and sub-dependencies, and this can lead to some truly absurd bundle sizes.</p>

      <p>In order to get around this, many bundlers now allow for bundles to be broken up into many files to be called at runtime rather than on initial load. This speeds up the initial load and if the new files are also kept to a manageable size, improves the performance overall.</p>

      <p>There are many bundlers out there but some of the more popular ones are Webpack, ESBuild, Rollup, Browserify, and Parcel.</p>
    </div>
  );
};

export default Home;
