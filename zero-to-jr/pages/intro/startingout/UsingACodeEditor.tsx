import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import vsc from "../../../res/vsc.png";
import icons from "../../../res/icons.png";

const Home: NextPage = () => {
  return (
    <div className="content">
      <div className="section">
        <header>Code Editors</header>
        <p>
          {` When you build a website, the most essential tool that you'll use is
          your code editor or IDE (Integrated Development Environment). This
          tool allows you to write the markup and code that will make up the
          website.`}
        </p>

        <p>
          Which IDE you should use is up to your personal preference, but for
          our purposes we will be using the most popular by far: Visual Studio
          Code (VSC)
        </p>
        <Image
          placeholder="blur"
          src={vsc}
          alt="the Visual Studio Code home screen"
        />

        <p>
          To download Visual Studio code visit{" "}
          <u style={{ cursor: "pointer" }}>
            <Link href="https://code.visualstudio.com/">
              https://code.visualstudio.com/
            </Link>{" "}
          </u>
          and click the download link.
        </p>

        <p>
          Once the download is finished,{` let’s`} create a working folder and
          go ahead and open it in Visual Studio Code. If you are on a Mac or
          Linux machine, you can do this by typing
        </p>
        <p>
          <code>code .</code>
        </p>
        <p>
          in the directory you wish to open, otherwise go to the file menu and
          click
          <i>
            <b> open folder... </b>
          </i>
          to navigate to the folder you wish to open.
        </p>

        <p>
          On the left side of the screen {`you’ll`} see the following icons:
        </p>
        <Image
          placeholder="blur"
          src={icons}
          alt="the Visual Studio Code home screen"
        />

        <p>
          in order they are file explorer, search, source control, debug, and
          extensions.{" "}
        </p>

        <p>
          The file explorer and search functions allow you to traverse the
          contents of your working folder in a tree structure and query the
          contents of that structure respectively.
        </p>

        <p>
          The debug function allows you to launch your app in break mode,
          allowing you to place watches on values that need to be monitored and
          detect where an error could be occurring.
        </p>

        <p>
          Extensions allow you to customize your visual studio code instance to
          your liking. You can install themes, helper functions, code snippets,
          and any other extensions that help you do your job.
        </p>
      </div>
    </div>
  );
};

export default memo(Home);
