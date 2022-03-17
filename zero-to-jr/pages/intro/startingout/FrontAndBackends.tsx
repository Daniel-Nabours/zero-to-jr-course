import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import server from "../../../res/server.svg";
import client from "../../../res/client.svg";
import Arrow from "../../../Components/arrow";

const Home: NextPage = () => {
  const circleDiv = {
    borderRadius: "1000%",
    border: "1px solid white",
    padding: "4rem",
  };

  const flexColumn = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  return (
    <div
      className="content"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="section">
        <header>Frontends and Backends</header>

        <p>
          Web developer roles are usually divided into 3 main categories:
          Frontend. Backend, and Full stack.
        </p>
        <p>
          The terms “frontend”, “backend”, and “full stack” refer to which
          portion of the client-server relationship you work on.
        </p>
        <p>
          Frontend deals mainly with presentation of information on the client
          side. It’s called the front end because it’s what the end user sees in
          their browser.
        </p>
        <p>
          Backend deals mainly with the transformation and storage of
          information, it handles most of the logic and functionality that you
          can’t see, but is generally necessary for everything to actually work.
        </p>
        <p>
          Think of a restaurant, the backend would be the kitchen that cooks up
          and serves the food while the frontend would be the waiters and hosts
          who deal with delivering the food to the customers, decorating, and
          seating arrangement.
        </p>
      </div>

      {/* @ts-ignore */}
      <div style={{ ...circleDiv, display: "flex" }}>
        {/* @ts-ignore */}
        <div style={{ ...circleDiv }}>
          <Image src={client} alt="A Laptop Computer" />
          <p>Frontend</p>
        </div>
        {/* @ts-ignore */}
        <div style={{ ...flexColumn }}>
          {/* @ts-ignore */}
          <div style={{ ...flexColumn }}>
            <p>1. Request</p>
            <Arrow dir="right" />
            <p>2. Response</p>
            <Arrow dir="left" />
          </div>
          {/* @ts-ignore */}
          <div style={{height:200, display:'flex', justifyContent:'center', 'alignItems':'flex-end'}}>
            <p>Full stack</p>
          </div>
        </div>
        {/* @ts-ignore */}
        <div style={{ ...circleDiv }}>
          <Image src={server} alt="A server" />
          <p>Backend</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
