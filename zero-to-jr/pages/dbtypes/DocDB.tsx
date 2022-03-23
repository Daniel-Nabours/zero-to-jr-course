import type { NextPage } from "next";
import Image from "next/image";
import { memo } from "react";
import mongo from "../../res/mongodb.png";

const Home: NextPage = () => {
  return (
    <div className="content">
      <div className="section">
        <header>Document Database</header>
        <p>
          {`A document database (also called a NoSQL document store) is a
          non-relational database that stores data as structured documents. It
          is a modern way to store data in JSON format rather than simple rows
          and columns. A document can be a PDF, a document, or an XML or JSON
          file.`}
        </p>
        <Image
          placeholder="blur"
          src={mongo}
          alt="a MongoDB database in visual studio code"
        />
        <p>
          Some commonly used document databases are MongoDB, Couchbase, and
          Google Cloud Firestore.
        </p>
      </div>
    </div>
  );
};

export default memo(Home);
