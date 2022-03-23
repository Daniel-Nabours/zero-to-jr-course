import type { NextPage } from "next";
import Image from "next/image";
import { memo } from "react";
import ms from "../../res/mssqlserver.png";
import my from "../../res/mysql.png";
import post from "../../res/postgres.svg";

const Home: NextPage = () => {
  const names = [
    {
      fName: "John",
      lName: "Doe",
      occupation: "UX Designer",
      affiliation: "XYZ inc.",
      favoriteCheese: "cheddar",
    },
    {
      fName: "Jane",
      lName: "Doe",
      occupation: "Project Manager",
      affiliation: "XYZ Inc.",
      favoriteCheese: "bris",
    },
    {
      fName: "Sarah",
      lName: "Kerrigan",
      occupation: "Queen of Blades",
      affiliation: "Zerg",
      favoriteCheese: "unknown",
    },
    {
      fName: "Jim",
      lName: "Raynor",
      occupation: "Commander",
      affiliation: "Raynor's Raiders",
      favoriteCheese: "unknown",
    },
    {
      fName: "Linus",
      lName: "Torvalds",
      occupation: "Linux Creator",
      affiliation: "Linux",
      favoriteCheese: "unknown",
    },
    {
      fName: "Danny",
      lName: "Nabo",
      occupation: "Software Engineer",
      affiliation: "USAF",
      favoriteCheese: "havarti",
    },
  ];

  const img = {
    height: "180px",
    width: "180px",
  };
  return (
    <div className="content">
      <div className="section">
        <header>SQL Database</header>
        <p>
          An SQL Database is just a series of tables that have columns and rows.
          You've probably interacted with these in some form or another in your
          career. They look like something similar to this:
        </p>

        <table>
          <thead>
            <tr>
              <th>userid</th>
              {Object.keys(names[0]).map((n) => (
                <th>{n}</th>
              ))}
            </tr>
          </thead>
          <thead>
            {names.map((n, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{n.fName}</td>
                <td>{n.lName}</td>
                <td>{n.occupation}</td>
                <td>{n.affiliation}</td>
                <td>{n.favoriteCheese}</td>
              </tr>
            ))}
          </thead>
        </table>

        <p>
          Some commonly used SQL database are Microsoft SQL Server, MySQL, and
          PostgreSQL.{" "}
        </p>
      </div>
      <div style={{display:'flex'}}>
        <a href="https://www.microsoft.com/en-us/sql-server/sql-server-2022" style={{cursor:'pointer', padding:'10px'}}> 
          <Image src={ms} alt="Microsoft SQL Server logo" {...img} />
        </a>
        <a href="https://www.mysql.com/" style={{cursor:'pointer', padding:'10px'}}> 
          <Image src={my} alt="MySQL logo" {...img} />
        </a>
        <a href="https://www.postgresql.org/" style={{cursor:'pointer', padding:'10px'}}> 
          <Image src={post} alt="PostgreSQL logo" {...img} />
        </a >
      </div>
    </div>
  );
};

export default memo(Home);
