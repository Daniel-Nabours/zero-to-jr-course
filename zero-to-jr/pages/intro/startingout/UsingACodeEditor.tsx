import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const Home: NextPage = () => {
  return (
    <div>
      <header>Code Editors</header>
      <p> 
        When you build a website, the most essential tool that you'll use is
        your code editor or IDE (Integrated Development Environment). This tool
        allows you to write the markup and code that will make up the website.
      </p>

      <p>
        Which IDE you should use is up to your personal preference, but for our
        purposes we will be using the most popular by far: Visual Studio Code
        (VSC) ((VISUAL AID))
      </p>

      <p>
        To download Visual Studio code visit https://code.visualstudio.com/ and
        click the download link.
      </p>

      <p>
        Once the download is finished, let’s create a working folder and go
        ahead and open it in Visual Studio Code. If you are on a Mac or Linux
        machine, you can do this by typing <code>code .</code> in the directory you wish to
        open, otherwise go to the file menu and click <b>open</b> folder to navigate
        to the folder you wish to open.
      </p>

      <p>
        On the left side of the screen you’ll see the following icons: ((SHOW
        IMAGE))
      </p>

      <p>in order they are file explorer, search, debug, and extensions. </p>

      <p>
        The file explorer and search functions allow you to traverse the
        contents of your working folder in a tree structure and query the
        contents of that structure respectively.
      </p>

      <p>
        The debug function allows you to launch your app in break mode, allowing
        you to place watches on values that need to be monitored and detect
        where an error could be occurring.
      </p>

      <p>
        Extensions allow you to customize your visual studio code instance to
        your liking. You can install themes, helper functions, code snippets,
        and any other extensions that help you do your job.
      </p>
    </div>
  );
};

export default Home;
