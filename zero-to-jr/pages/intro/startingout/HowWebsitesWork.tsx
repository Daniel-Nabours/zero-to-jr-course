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
        <header>How Websites Work</header>

        <p>
          All websites, at their most basic, are just a bunch of files stored on
          a computer somewhere called a server. This server is connected to the
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
      <div style={{ display: "flex" }}>
        <Image src={client} alt="A Laptop Computer" width={200} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "0rem 2rem 4rem 2rem",
          }}
        >
          <p>1. Request</p>
          <Arrow dir="right" />
          <p>2. Response</p>
          <Arrow dir="left" />
        </div>
        <Image src={server} alt="A server" />
      </div>
    </div>
  );
};

export default memo(Home);
