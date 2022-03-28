import type { NextPage } from "next";
import { memo } from "react";
import { usePrism } from "../../../util/usePrism";

const Home: NextPage = () => {
  const code = `<p>This is text</p>
 <p>This paragraph has a <span>child element</span></p>
 <h1>This is a top-level heading</h1>
 <img src="picture.jpg" alt="alt text for an image" />`;

  return (
    <div className="content">
      <div className="section">
        <header>Document Object Model</header>

        <p>{`
          The name is pretty self-explanatory - it's a model used to
          represent a document as a hierarchical structure of objects. To
          explain in more detail:
        `}</p>

        <p>{`
          The document will usually be an XML or HTML document. These are text
          documents that use markup language to signify different elements:
        `}</p>

        <div> {usePrism(code, "html")}</div>

        <p>{` 
          In DOM each element is represented as an object. The document itself
          is an object. Each object can have child objects (the p, h1 and img in
          the above example are children of the parent document; the span
          element is a child of the second p element). An object can also have
          attributes (src and alt are attributes of the img element object;
          'This is text'; is the text attribute of the p element
          object).
        `}</p>

        <p>{`
          Because these markup languages allow for nested (child) elements, the
          whole thing can be represented as a tree structure, which is the
          model.
        `}</p>

        <p>{`
          Note that the document doesn't have to be a literal file, it can
          and often does only exist in memory. For HTML, the browser is
          responsible for parsing the HTML text and building the DOM model in
          memory. The DOM can then be manipulated by eg. JavaScript but it
          doesn't change the actual HTML file. For XML documents you
          usually use an XML parsing library with your programming language of
          choice, and navigate the DOM structure using code.
        `}</p>
      </div>
    </div>
  );
};

export default memo(Home);
