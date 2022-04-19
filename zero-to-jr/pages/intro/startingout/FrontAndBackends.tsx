import type { NextPage } from "next";
import Image from "next/image";
import { memo } from "react";
import server from "../../../res/server.svg";
import client from "../../../res/client.svg";
import Arrow from "../../../Components/arrow";

const Home: NextPage = () => {
  return (
    <div className="content">
      <div className="section">
        <header>Frontends and Backends</header>

        <p>{`
          Web developer roles are usually divided into 3 main categories:
          Frontend. Backend, and Full stack.
        `}</p>
        <p>{`
          The terms “frontend”, “backend”, and “full stack” refer to which
          portion of the client-server relationship you work on.
        `}</p>
        <p>{`
          Frontend deals mainly with presentation of information on the client
          side. It’s called the front end because it’s what the end user sees in
          their browser.
        `}</p>
        <p>{`
          Backend deals mainly with the transformation and storage of
          information, it handles most of the logic and functionality that you
          can’t see, but is generally necessary for everything to actually work.
        `}</p>
        <p>{`
          Think of a restaurant, the backend would be the kitchen that cooks up
          and serves the food while the frontend would be the waiters and hosts
          who deal with delivering the food to the customers, decorating, and
          seating arrangement.
        `}</p>
      </div>

      <div className="section"> 
        <div className="circle" style={{ display: "flex" }}>
          <div className="circle">
            <Image src={client} alt="A Laptop Computer" />
            <p>{`Frontend`}</p>
          </div>
          <div className="flex-column">
            <div className="flex-column">
              <p>{`1. Request`}</p>
              <Arrow dir="right" />
              <p>{`2. Response`}</p>
              <Arrow dir="left" />
            </div>
            <div
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <p>{`Full stack`}</p>
            </div>
          </div>
          <div className="circle">
            <Image src={server} alt="A server" />
            <p>{`Backend`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
