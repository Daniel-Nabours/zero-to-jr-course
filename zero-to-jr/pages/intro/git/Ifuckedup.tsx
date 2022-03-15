import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className="content">
      <div className="section">
        <header>What to do when you fuck up the repo</header>

        <p>
          Oops, you committed the entire node_modules folder. What is wrong with
          you, the entire repo is ruined, you’re fired.
        </p>

        <p>
          Just kidding, depending on when you caught it and what workflow you
          are using, this can be quite simple to fix.
        </p>
        <p>
          The most common ways to correct mistakes in your commit history are
          using the commands
        </p>

        <p>
          <code>git reset</code>
        </p>
        <p>
          <code>git checkout</code>
        </p>
        <p>or</p>
        <p>
          <code>git revert</code>
        </p>

        <table>
          <thead>
            <tr>
              <th>Command</th> <th>Scope</th> <th>Common use cases</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <td>
                <code>git reset</code>
              </td>
              <td>Commit-level</td>
              <td>
                Discard commits in a private branch or throw away uncommited
                changes
              </td>
            </tr>
            <tr>
              <td>
                <code>git reset</code>
              </td>
              <td>File-level</td> <td>Unstage a file</td>
            </tr>
            <tr>
              <td>
                <code style={{ whiteSpace: "nowrap" }}>git checkout</code>
              </td>
              <td>Commit-level</td>
              <td>Switch between branches or inspect old snapshots</td>
            </tr>
            <tr>
              <td>
                <code>git checkout</code>
              </td>
              <td>File-level</td>
              <td>Discard changes in the working directory</td>
            </tr>
            <tr>
              <td>
                <code>git revert</code>
              </td>
              <td>Commit-level</td> <td>Undo commits in a public branch</td>
            </tr>
            <tr>
              <td>
                <code>git revert</code>
              </td>
              <td>File-level</td> <td>(N/A)</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default React.memo(Home);
