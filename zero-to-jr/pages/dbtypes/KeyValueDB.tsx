import type { NextPage } from "next";
import Image from "next/image";
import { memo } from "react";
import keyvalue from "../../res/keyvalue.png";

const Home: NextPage = () => {
  return (
    <div className="content">
      <div className="section">
        <header>Key-Value Database</header>
        <p>
         {` A key-value database (sometimes called a key-value store) uses a
          simple key-value method to store data. These databases contain a
          simple string (the key) that is always unique and an arbitrary large
          data field (the value). They are easy to design and implement.`}
        </p>

        <Image src={keyvalue} alt="an example of a key-value database" />

        <p>
         {` As the name suggests, this type of NoSQL database implements a hash
          table to store unique keys along with the pointers to the
          corresponding data values. The values can be of scalar data types such
          as integers or complex structures such as JSON, lists, BLOB, and so
          on. A value can be stored as an integer, a string, JSON, or an
          array—with a key used to reference that value. It typically offers
          excellent performance and can be optimized to fit an organization’s
          needs. Key-value stores have no query language but they do provide a
          way to add and remove key-value pairs. Values cannot be queried or
          searched upon. Only the key can be queried.`}
        </p>

        <p>Some commonly used examples of Key-Value databases are Redis, ElasticCache, and DynamoDB</p>
      </div>
    </div>
  );
};

export default memo(Home);
