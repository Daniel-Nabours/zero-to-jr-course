import type { NextPage } from "next";
import { memo } from "react";
import { usePrism } from "../../../util/usePrism";

const Home: NextPage = () => {
  const mediaq = usePrism(
    `@media screen and (min-width: 800px) {
  .container {
    margin: 1em 2em;
  }
}`,
    "CSS"
  );
  return (
    <div className="content">
      <div className="section">
        <header>Responsive Design</header>
        <p>{`
          In the early days of web design, pages were built to target a
          particular screen size. If the user had a larger or smaller screen
          than the designer expected, results ranged from unwanted scrollbars to
          overly long line lengths, and poor use of space. As more diverse
          screen sizes became available, the concept of responsive web design
          (RWD) appeared, a set of practices that allows web pages to alter
          their layout and appearance to suit different screen widths,
          resolutions, etc. It is an idea that changed the way we design for a
          multi-device web, and in this article, we'll help you understand the
          main techniques you need to know to master it.
        `}</p>
        <p>{`
          Responsive design describes the use of three techniques in
          combination: fluid grids, scalable images and text, and media queries.
        `}</p>
        <p>{`
          Media Queries allow us to run a series of tests (e.g. whether the
          user&'s screen is greater than a certain width, or a certain
          resolution) and apply CSS selectively to style the page appropriately
          for the user&'s needs. Take a look at the following media query:{" "}
        `}</p>
        <div>{mediaq}</div>
        <p>{`
          The .container css class will now change to reflect the desired
          results when the content is screen media (IE not being printed) and is
          a minimum width of 800 pixels. The conditions within these media
          queries are known as breakpoints.
        `}</p>
      </div>
    </div>
  );
};

export default memo(Home);
