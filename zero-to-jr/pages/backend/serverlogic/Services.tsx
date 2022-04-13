import type { NextPage } from "next";
import Image from "next/image";
import { memo } from "react";
import ws from "../../../res/websocket.png";
import { usePrism } from "../../../util/usePrism";

const Home: NextPage = () => {
  const index = usePrism(`
  const ws = new WebSocketServer({ noServer: true, path: "/events" }) 
  ws.on('connection', socket => {  
    console.log("WebScoket connected")
    socket.on("message", (msg) => {
      const message = JSON.parse(msg) 
      const outbound = JSON.stringify(message)
      ws.clients.forEach(client => {
        client.send(outbound)
      });
    });
  });
  export { app, ws };`);
  const start = usePrism(`
  import {app, ws} from '../api/index.js'
  const server = app.listen(8080, () => {
    console.log('server listening on port 8080.')
  })
  server.on('upgrade', (req, sock, head) => {
    ws.handleUpgrade(req, sock, head, (socket) => {
      ws.emit('connection', socket, req);
    });
  });`);
  const posts = usePrism(`  
  router.post("/create", async (req, res) => {
    const newPost = new PostModel(req.body);
    try {
      const savedPost = await newPost.save();
      ws.clients.forEach(client => { 
        if (client.readyState === 1) { 
          client.send(JSON.stringify({ post: savedPost, action: "created" }));
        }
      });
      res.status(200).json(savedPost);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });`);
  const client = usePrism(`
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/events");
    ws.onmessage = handleNewPost; 
    //this will run when the component unmounts, disconnecting the socket
    return () => { ws.close(); };
  }, []);
  const dateSort = (arr: iPost[]) => {
    return arr.sort((p1: iPost, p2: iPost) => { 
      return new Date(p2.createdAt).valueOf() - new Date(p1.createdAt).valueOf();
    });
  }
  const handleNewPost = (e: Event) => {
    let event = e as MessageEvent;
    let data: { post: iPost; action: string } = JSON.parse(event.data);
      //if you mutate and return the array directly, it will not be detected as a change by react
      //therefore, we create a sorted copy of the iterated items using the spread operator
    setPosts((prev) => dateSort([...prev, data["post"]]) );
  };
  `);
  return (
    <div className="content">
      <div className="section">
        <header>Services</header>
        <p>{` 
          In terms of server architecture, a service in an entity that provides
          access to certain resources or functionality across the backend logic.
          A common example of a service is a WebSocket.
        `}</p>

        <p>{` 
          A WebSocket allows you to stream data through a single, observable
          connection that is kept open until a request is sent to close it. Any
          of your endpoints can send data to the socket provider to stream to
          the frontend. This is particularly useful in things like chat
          applications or real-time data visualization.
        `}</p>

        <Image
          placeholder="blur"
          src={ws}
          alt="A websocket connection with bidirectional messaging"
          width={250}
          height={450}
        />
        <p>{`We can create a websocket connection on out server like so:`}</p>

        <p>
          <b>{`index.js`}</b>
        </p>
        {index}
        <p>
          <b>{`start.js`}</b>
        </p>
        {start}
        <p>{`then we can tell our server to send new posts in real time like this:`}</p>
        <p>
          <b>{`/posts/create endpoint`}</b>
        </p>
        {posts}
        <p>{`and finally, tell our client to listen to the socket provided by the server:`}</p>
        <p>
          <b>{`feed.tsx`}</b>
        </p>
        {client}
        <p>{`
        You can now see that when you write and share a post, the new post pops up instantly! 
        You can use the same WebSocket to push data to the client from anywhere in the server. This 
        is ideal for notifications, chat widgets, and anything else that requires a real-time response.
        `}</p>
        <p>{`
         This is the last bit of work we'll be doing on the shell app. Feel free to mess with 
         or add to it as much as you like, then talk to your training lead to check your project
         for completion once finished. The next slides will be going over some common architectures 
         you may find yourself utilizing in current or future projects.
        `}</p>
      </div>
    </div>
  );
};

export default memo(Home);
