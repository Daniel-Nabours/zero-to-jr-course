import type { NextPage } from "next";
import Image from "next/image";
import { memo } from "react";
import ws from "../../../res/websocket.png"

const Home: NextPage = () => {
  return (
    <div className="content">
      <div className="section">
        <header>Services</header>
        <p> 
          In terms of server architecture, a service in an entity that provides
          access to certain resources or functionality across the backend logic.
          A common example of a service is a WebSocket.
        </p>

        <p> 
          A WebSocket allows you to stream data through a single, observable
          connection that is kept open until a request is sent to close it. Any
          of your endpoints can send data to the socket provider to stream to
          the frontend. This is particularly useful in things like chat
          applications or real-time data visualization.
        </p>

        <Image src={ws} alt="A websocket connection with bidirectional messaging" width={250} height={450} />
      </div>
    </div>
  );
};

export default memo(Home);
