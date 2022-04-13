import type { NextPage } from "next";
import Image from "next/image";
import { memo } from "react";
//import api from "../../../res/api.svg";
import { usePrism } from "../../../util/usePrism";

const Home: NextPage = () => {
  const code1 = usePrism(`const handleLogin = async (req, res) => {
    try { 
      const user = await User.findOne({ 
        email: req.body.email 
      }); 

      res.status(200).json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  }`);
  const code2 = usePrism(`const handleLogin = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      const validPassword = await bcrypt.compare(req.body.password, user.password)
      !user || !validPassword && res.status(404).json("incorrect login information"); 
  
      res.status(200).json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  }`);

  const login1 = usePrism(
    `<div className="login">
  <div className="loginWrapper">
    <div className="loginLeft">
      <h3 className="loginLogo">Social Media App</h3>
      <span className="loginDesc">
        Connect with friends and stuff.
      </span>
    </div>
    <div className="loginRight">
      <form className="loginBox" onSubmit={handleClick}>
        <input placeholder="Email" type="email" required className="loginInput" ref={email}/>
        <input placeholder="Password" type="password" required minLength={8} className="loginInput" ref={password}/>
        <button className="loginButton" type="submit"> 
          Log In
        </button> 
      </form>
    </div>
  </div>
</div>`,
    "HTML"
  ); 

  const call = usePrism(
    `   
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const login = async (creds: { email: string, password: string }) => {
      try {
        const res = await axios.post("/auth/login", creds)
        return res.data
      }
      catch (err) {
        return err
      }
    }
    const handleClick = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      login({
        email: email.current!.value,
        password: password.current!.value,
      }).then((res) => {
        setUser(res) 
      }).catch(console.log);
    }`
  )

  const routercode = usePrism(`function App() {
    const {user} = useAuthContext()
    return ( 
      <Router>
        <Routes>
          <Route path="/" element={user ? <HomePage /> : <SignupPage />} />
          <Route path="/home" element={user ? <HomePage /> : <SignupPage />} />
          <Route path="/login" element={user ? <HomePage /> : <LoginPage />} />
        </Routes>
      </Router>
    );
  }`)

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

        {/* <Image alt="an API and its endpoints" src={api}/> */}

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

        <p>
          {`let's start by adding a login page to our application. 
        The first thing we'll need to do is create that route in our api.
        To do that we'll create a new folder called 'routes' and a subfolder
        called 'auth'.`}
        </p>
        <code>{`mkdir routes routes/auth`}</code>
        <p>
          {`Now inside those folders create a file called `}
          <b>auth.js</b>
        </p>
        <p>
          {`The login function should make an attempt to fetch a user from the 
          database that matches the inputs from the login form. Writing them out looks like this: `}
        </p>
        {code1}
        <p>
          {`we'll want to handle the case for user not existing in the database, and also incorrect password: `}
        </p>
        {code2}
        <p>
          {`Now that we have a login endpoint, we'll also need the login page on the front end.
             we'll keep this pretty simple, just a logo, a bit of text, and a user/password input.`}
        </p>
        {login1}
        <p>{`On form submit, we call the endpoint:`}</p>
        {call}
        <p>{`and finally, add the routing logic through React Router:`}</p>
        <p><b>App.tsx</b></p>
        {routercode}
      </div>
    </div>
  );
};

export default memo(Home);
