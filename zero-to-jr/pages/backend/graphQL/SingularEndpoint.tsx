import type { NextPage } from "next";
import Image from "next/image";
import { memo } from "react";
import rest from "../../../res/endpoints.png";
import { usePrism } from "../../../util/usePrism";

const Home: NextPage = () => {
  const req = usePrism(
    `{
    orders {
        id
        productsList {
            product {
                name
                price
            }
            quantity
        }
        totalAmount
    }
}`,
    "js"
  );

  const res = usePrism(
    `{
    "data": {
        "orders": [
            {
                "id": 1,
                "productsList": [
                    {
                        "product": {
                            "name": "orange",
                            "price": 1.5
                        },
                        "quantity": 100
                    }
                ],
                "totalAmount": 150
            }
        ]
    }
}`,
    "js"
  );
  return (
    <div className="content" style={{ display: "flex" }}>
      <div className="section">
        <header>GraphQL</header>
        <p>
          {`Graphql is a query language for reading and mutating data in apis. As
          a back-end developer, graphql provides a type system where you can
          describe a schema for your data in turn this gives the client the
          power to explore and request the exact data they need.`}
        </p>
        <p>
          {`Traditionally web developers have consumed apis using REST, where data
          entities live on a bunch of endpoints on a server. When a request is
          received the api responds with the full data payload of the entity
          that the endpoint contains.`}
        </p>
        <Image placeholder="blur" alt="a list of rest endpoints" src={rest} />
        <p>
          {`That sounds simple enough but there are two potential drawbacks here.
          We may need multiple entities at one time in which case each request
          is under fetching the actual data we want. In other cases we may only
          want a small subset of a data entity in which case we need to over
          fetch from the api and that of course is bad for the environment. Save
          the trees.`}
        </p>
        <p>
          {`Instead of multiple endpoints, a graphql api has a single entry point.
          Data is queried or fetched by describing it with a syntax that mirrors
          its return shape in json. The front-end developer describes the data
          they want while the back-end developer writes code to resolve the
          request and it all happens in a syntax that can work with any
          programming language.`}
        </p>
      </div>
      <div className="comparison">
        <div className="comparison-block">
          {"request"}
          {req}
        </div>
        <div className="comparison-block">
          {"response"}
          {res}
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
