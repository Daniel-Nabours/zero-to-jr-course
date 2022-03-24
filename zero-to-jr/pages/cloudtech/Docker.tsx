import type { NextPage } from "next";
import { memo } from "react";
import { usePrism } from "../../util/usePrism";

const Home: NextPage = () => {
  const from = usePrism(`\tFROM ubuntu:20.04`, "js");
  const run = usePrism(`\tFROM ubuntu:20.04\n\tRUN yarn build`, "js");
  const cmd = usePrism(
    `\tFROM ubuntu:20.04\n\tRUN yarn build\n\tENV PORT=8080\n\tCMD ["echo", "Battlecruiser operational."]`,
    "js"
  );
  return (
    <div className="content">
      <div className="section">
        <header>Containerization</header>
        <p>{`
          Docker is a tool that can package software into containers that run
          reliably in any environment.
        `}</p>
        <p>{`
          Now what is a container and why do you need one? Let's imagine you
          built an app with COBAL that runs on some weird flavor of linux. You
          want to share this app with your friend but he has an entirely
          different system so the problem becomes how do we replicate the
          environment our software needs on any machine?
        `}</p>
        <p>{`
          One way to package an app is with a virtual machine where the hardware
          is simulated then installed with the required os and dependencies this
          allows us to run multiple apps on the same infrastructure however
          because each vm is running its own operating system they tend to be
          bulky and slow and result in a lot of overhead.
        `}</p>
        <p>{`
          A container is conceptually very similar to a VM with one key
          difference: instead of virtualizing hardware, containers only
          virtualize the OS. In other words, all apps or containers are run by a
          single kernel and this makes almost everything faster and more
          efficient.
        `}</p>
        <p>{`
          There are three fundamental elements in the universe of docker: the
          dockerfile, the image, and the container.
        `}</p>
        <p>{`
          The docker file is just code that tells docker how to build an image
          which itself is a snapshot of your software along with all of its
          dependencies down to the operating system level.
        `}</p>
        <p>{`
          The image is immutable and it can be used to spin up multiple
          containers which is your actual software running in the real world.
        `}</p>
        <p>{`
          We can create a docker file and use “FROM” to start from an existing
          template like ubuntu.
        `}</p>
        {from}
        <p>{`
          This base image gets pulled down from the cloud and you can also
          upload your own images to a variety of different docker registries
          from there you might want to use “RUN” to run a terminal command that
          installs dependencies into your image.
        `}</p>
        {run}
        <p>{`
          You can also set environment variables using ENV and do all kinds of
          other stuff inside your dockerfile.
        `}</p>
        {cmd}
        <p>{`
          We can create the image from this file by running the “docker build”
          command. it goes through each step in our docker file to build the
          image layer by layer. We can then use the image to spin up a container
          with the “docker run” command. As your app demands more resources, you
          can run it on multiple machines, multiple clouds, or wherever you want
          reliably.
        `}</p>
      </div>
    </div>
  );
};

export default memo(Home);
