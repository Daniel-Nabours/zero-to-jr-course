import type { NextPage } from "next";
import { memo } from "react";

const Home: NextPage = () => {
  return (
    <div className="content">
      <div className="section">
        <header>REpresentational State Transfer (REST)</header>

        <p>
          {` REST (REpresentation State Transfer) is a protocol, or 'language',
          that applications can use for their APIs. Basically it allows a
          developer to perform commands or exchange data with a service over a
          network (eg. the Internet).`}
        </p>
        <p>
          {`RESTful simply means a service provides a REST interface that a
          developer can communicate with.`}
        </p>
        <p>
          {`How does it work? REST uses standard HTTP commands. While your web
          browser might use the GET command to retrieve a file or web page, or
          the POST command to submit the contents of a form, REST uses GET to
          retrieve data, POST to update data, PUT to create data, and DELETE to
          remove data. Usually what happens is the application makes a
          connection with the web server, sends the HTTP command (with any
          parameters or data required), and receives the result in the response.
          
          HTTP is a text-based protocol, so the response is always text; but it could be plain text,
          base64-encoded binary, JSON, XML or another format, so the developer
          using the REST interface needs to read the interface documentation to
          know what commands are available, required parameters, format of the
          result data etc.`}
        </p>
      </div>
    </div>
  );
};

export default memo(Home);
