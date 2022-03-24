import type { NextPage } from "next";
import { memo } from "react";
import { usePrism } from "../../../util/usePrism";

const Home: NextPage = () => {
  const model = usePrism(`export type Person = {
    age: number
    name: string
    occupation: string | null
  }`, "js");
  return (
    <div className="content">
      <div className="section">
        <header>Data Models</header>
        <p>{` 
          Data modeling is the process of analyzing and defining all the
          different data your business collects and produces, as well as the
          relationships between those bits of data.
        `}</p>
        <p>{`
          An example of a simple data model is an object in code. Take the
          following example in Typescript:
        `}</p>
        {model}
        <p>{`
          Here we have defined a person as having a name, an age, and possibly
          having an occupation. You can add different values to this such as
          likes, dislikes, friends, relationships, etc. This is the idea behind
          mapping, you translate data into something you can use for querying or
          analysis.
        `}</p>
        <p>{`
          Databases also have different types of models that represent the way
          the data they contain is structured. A few common database models are `}
          <a href="https://en.wikipedia.org/wiki/Relational_model"><u>relational models</u></a>,{" "}
          <a href="https://en.wikipedia.org/wiki/Data_warehouse"><u>data warehouses</u></a>, and{" "}
          <a href="https://en.wikipedia.org/wiki/Data_lake"><u>data lakes</u></a>.
        </p>
        <p>{`
          Data modeling allows us to handle and work with data in a was that is more efficient
          and much simpler to conceptualize.
        `}</p>
      </div>
    </div>
  );
};

export default memo(Home);
