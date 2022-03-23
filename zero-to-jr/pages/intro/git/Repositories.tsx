import type { NextPage } from "next";
import { memo } from "react";

const Home: NextPage = () => {
  return (
    <div className="content">
      <div className="section">
        <header>Git Repositories</header>
        <p>{`
          A repository is a centralized location to host a project folder. There
          are many kinds of repositories and version control software, but the
          most popular by far is called Git.
        `}</p>

        <p>{`
          Today we’re going to initiate a git repository and clone it into the
          working folder you created in the previous section.
        `}</p>

        <p>{`
          To start, we need to initialize a repo. For our purposes, I’ve created
          a shell project you can clone that is already bootstrapped and ready
          to run in the browser. You’re welcome.
        `}</p>

        <p>
          Open your terminal in VSCode and type <br />
          <br />
          <code>git clone ((URL))</code>
        </p>

        <p>{`
          You’ll notice that the files and folders associated with the project
          were pulled from the repository and “cloned” to your local machine.
        `}</p>

        <p>
          {`If you don’t have a repo to clone, you can create your own by using
          the`}
          <br />
          <br />
          <code>git init</code>
          <br />
          <br />
          {`command, now you’ll be able to connect to the remote repository by
          using`}
          <br />
          <br />
          <code>{`git remote add origin ((URL)`})</code>
          <br />
          <br />
          {`This will push your local folder to the repository located at the
          specified url.`}
        </p>

        <p>{`
          Now that we have a tracked folder, any changes we make and push will
          reflect on the remote repository.
        `}</p>
      </div>
    </div>
  );
};

export default memo(Home);
