import type { NextPage } from "next";
import React, { ChangeEvent, useState } from "react";

const Home: NextPage = () => {
  const [messages, setmessages] = useState<string[]>([]);
  const [message, setmessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setmessage(e.target.value);
  };
  const handleClick = () => {
    setmessages((prev) => [...prev, message]);
    setmessage("");
  };
  return (
    <div className="content">
      <div className="section">
        <header>Usability</header>
        <p>
          Usability is the ease of use of your application. If you need to
          provide any training or guides to navigate your website, it may be
          time to reconsider the usability of its design.
        </p>

        <p>
          Usability is a primary concern of UI/UX development. This metric can
          be very subjective, so it’s important to develop a comprehensive
          understanding of the user’s persona in order to determine the
          usability of the application.
        </p>

        <p>Take a look at the following components:</p>

        <div>
          <input value={message} onChange={handleChange} type="text" />
          <button onClick={handleClick}>Send</button>
          <ul>
            {messages.map((s) => (
              <li key={`${s}`}>{s}</li>
            ))}
          </ul>
        </div>

        <p>
          Instinctually, you know how to interact with them by inputting text
          into the text box and clicking on the button because of the way they
          look and react. I didn’t have to explain what to do because it’s
          obvious. With more complex components, keeping interaction methods
          obvious becomes increasingly more important and simultaneously,
          increasingly more difficult.
        </p>
      </div>
    </div>
  );
};

export default React.memo(Home);
