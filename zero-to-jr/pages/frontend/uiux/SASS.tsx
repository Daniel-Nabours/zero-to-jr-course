import type { NextPage } from "next";
import React from "react";
import { usePrism } from "../../../util/usePrism";

const Home: NextPage = () => {
  const varex = usePrism(
    `
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}`,
    "CSS"
  );

  const nesting1 = usePrism(
    `nav {
  ul {
    margin: 0; 
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px; 
  }
}`,
    "CSS"
  );
  const nesting2 = usePrism(
    `nav ul {
  margin: 0; 
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px; 
}`,
    "CSS"
  );

  const mixins = usePrism(
    `@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}`,
    "CSS"
  );

  const flexRow = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <div className="content"> 
        <div className="content section">
          <header>Syntactically Awesome Style Sheets (SASS)</header>
          <p>
            CSS on its own can be fun, but stylesheets are getting larger, more
            complex, and harder to maintain. This is where a preprocessor like
            SASS can help. Sass has features that don't exist in CSS yet like
            nesting, mixins, inheritance, and other nifty goodies that help you
            write robust, maintainable CSS.
          </p>
          <p>
            The philosophy behind SASS can be summarized by trying to fit
            generic syntax we all know (functions, inheritance, variables,
            modules, etc) into your CSS in a way the feels like code.
          </p>
          <p>
            Oftentimes when making a coherent UI, you’ll use the same color
            values over and over and over again throughout your CSS sheets. In
            normal programming, this is obviously where one would use a constant
            or variable. In CSS3, this isn’t supported. In SASS, you can declare
            variables using the "$" identifier.
          </p>
          <div>{varex}</div>
          <p>
            When writing HTML you've probably noticed that it has a clear nested
            and visual hierarchy. CSS, on the other hand, doesn't.
          </p>
          <p>
            Sass will let you nest your CSS selectors in a way that follows the
            same visual hierarchy of your HTML.
          </p>
        </div>
        <div style={flexRow}>
          <div>{nesting1}</div>
          <div style={{ margin: "1rem" }}>VS</div>
          <div>{nesting2}</div>
        </div>
        <div className="content section">
          <p>
            By doing this, we can more accurately reflect the structure and
            hierarchy of the DOM inside our CSS.
          </p>
          <p>
            Some things in CSS are a bit tedious to write, especially with CSS3
            and the many vendor prefixes that exist. A mixin lets you make
            groups of CSS declarations that you want to reuse throughout your
            site. Think of it like a function.
          </p>
          <div>{mixins}</div>
          <p>
            The mixin 'theme' has a parameter called '$theme' with a default
            value of 'DarkGray'. If you call the theme with no arguments, it
            will return a dark gray theme. If you call it with a different color
            like dark red,, it will return that color instead. By doing this,
            you can keep your CSS as dry as possible and allow for more concise
            theme definitions reflected across the application.
          </p>
        </div> 
    </div>
  );
};

export default React.memo(Home);
