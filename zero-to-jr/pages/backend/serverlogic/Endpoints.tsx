import type { NextPage } from "next";
import Image from "next/image";
import { memo } from "react";
import api from "../../../res/api.svg";

const Home: NextPage = () => {
  return (
    <div className="content">
      <div className="section">
        <header>API Endpoints</header>
        <p>{`
          When two servers need to communicate with one another they provide
          specific methods for interaction based on what is being asked for, in
          short they have ‘requests’ and ‘responses.’ When an API requests
          information from a web application or web server, it will receive a
          response. The place that APIs send requests and where the resource
          lives, is called an endpoint.
        `}</p>

        <p>{`
          Simply put, an endpoint is one end of a communication channel. When an
          API interacts with another system, the touchpoints of this
          communication are considered endpoints. For APIs, an endpoint can
          include a URL of a server or service. Each endpoint is the location
          from which APIs can access the resources they need to carry out their
          function.
        `}</p>

        <p>{`
          In the URL of this page you’ll see
          “.../backend/serverlogic/Endpoints”. This is a route that points to an
          endpoint on the server which tells it what page to return to the
          client.
        `}</p>
      </div>
    </div>
  );
};

export default memo(Home);
