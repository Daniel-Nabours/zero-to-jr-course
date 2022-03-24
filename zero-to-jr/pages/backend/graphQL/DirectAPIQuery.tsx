import type { NextPage } from "next";
import { memo } from "react";
import { usePrism } from "../../../util/usePrism";

const Home: NextPage = () => {
  const q = usePrism(`type Query {
	records: [Record]
	user(id:uuid!): User 
}`, "js");

  const m = usePrism(`type Mutation{
    createRecord(url:string): Record
    deleteRecord(url:string: String
  }`, "js");
  return (
    <div className="content">
      <div className="section">
        <header>Direct API Querying</header>
        <p>
          {`Every graphql api has a query type which is the main entry point for a
          consumer of the api. We can query a list of records or an individual
          user based on their id like so:`}
        </p>
        <div>{q}</div>
        <p>
          {`That's how a consumer reads data but they may also want to mutate data
          in which case we implement a mutation type that defines how data can
          be modified on the api:`}
        </p>
        <div>{m}</div>
        <p>
          {`From there we can define code to resolve this data in any programming
          language we choose. Once deployed, any developer consuming this api
          will be able to explore it with a complete understanding of all
          possible queries and data entities.`}
        </p>
      </div>
    </div>
  );
};

export default memo(Home);
