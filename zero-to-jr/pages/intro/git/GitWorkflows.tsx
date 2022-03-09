import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className="content">
      <header>Git Workflows</header>

      <p>
        {" "}
        A git workflow is simply a series of commands you use frequently in your
        day to day to accomplish certain tasks. It’s very rare that you stray
        from these series of commands, and when you do it’s usually because you
        messed up.
      </p>

      <span>
        The most common workflow looks like this:
        <p>
          <code>git add *</code> adds all of your changes to the staging area
          except the paths specified in the .gitignore file
        </p>
        <p>
          <code>git commit -m (COMMITMESSAGE)</code> packages them all together
          and assigns a hash to the bundled changes, and
        </p>
        <p>
          <code>git push</code> sends the bundle(s) of changes to the remote
          repository to track
        </p>
      </span>

      <p>
        This all works fine if there’s only one engineer working on the code at
        any given time, but that is not a realistic scenario in a working
        environment.
      </p>

      <p>
        Consider what happens when you start working on a new feature in a
        dedicated branch, then another team member updates the main branch with
        new commits. This results in a forked history, which can be visualized
        like so: ((SHOW IMAGE))
      </p>

      <p>
        Here we see the master branch and the feature branch have diverged,
        meaning they are no longer the same. The changes being made on the
        feature branch are important, but the changes on the master branch are
        also important. How can we ensure we keep all of the changes?
      </p>

      <p>
        There are 2 main strategies for ensuring that multiple engineers can
        make changes simultaneously without overwriting each other: Rebasing and
        Merging.{" "}
      </p>

      <p>Let’s start with the merge option. </p>

      <code>“git merge feature main” </code>

      <p>
        This creates a new “merge commit” in the “feature” branch that ties
        together the histories of both branches, giving you a branch structure
        that looks like this: ((SHOW IMAGE)){" "}
      </p>

      <p>
        “Merging” is nice because it’s a non-destructive operation. The existing
        branches are not changed in any way.
      </p>

      <p>
        As an alternative to merging, you can “rebase” the feature branch onto
        main branch using the following commands:{" "}
      </p>

      <p>
        <code>“git checkout feature”</code>
      </p>
      <p>
        <code>“git rebase main” </code>
      </p>

      <p>
        This moves the entire feature branch to begin on the tip of the main
        branch, effectively incorporating all of the new commits in main. But,
        instead of using a merge commit, rebasing re-writes the project history
        by creating brand new commits for each commit in the original branch.
      </p>

      <p>
        The major benefit of rebasing is that you get a much cleaner, perfectly
        linear project history. ((SHOW IMAGE))
      </p>

      <p>
        This makes it much easier to track the history of your project by
        allowing you to follow the linear release schedule all the way back to
        the initial commit.
      </p>
    </div>
  );
};

export default Home;
