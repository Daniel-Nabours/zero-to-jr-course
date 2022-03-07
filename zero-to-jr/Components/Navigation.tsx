import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {flushSync} from 'react-dom'
export default function Navigation({
  setIndex,
}: {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const router = useRouter();
  const pages = [
    "/intro/startingout/HowWebsitesWork",
    "/intro/startingout/FrontAndBackends",
    "/intro/startingout/UsingACodeEditor",
    "/intro/git/Repositories",
    "/intro/git/GitWorkflows",
    "/intro/git/Ifuckedup",
    "/intro/TDD/JourneyTesting",
    "/intro/TDD/UnitTesting",
    "/intro/TDD/UITesting",
    "/frontend/big3/DOM",
    "/frontend/big3/Bundles",
    "/frontend/big3/Packages",
    "/frontend/frameworks/SPA",
    "/frontend/frameworks/MPA",
    "/frontend/uiux/Usability",
    "/frontend/uiux/SASS",
    "/frontend/uiux/Responsive",
    "/backend/serverlogic/Endpoints",
    "/backend/serverlogic/Models",
    "/backend/serverlogic/Services",
    "/backend/REST/RESTfulness",
    "/backend/graphQL/DirectAPIQuery",
    "/backend/graphQL/SingularEndpoint",
    "/cloudtech/Docker",
    "/cloudtech/Cluster",
    "/databases/concepts/Structures",
    "/databases/concepts/ETL",
    "/databases/types/SQLDB",
    "/databases/types/KeyValueDB",
    "/databases/types/DocDB",
    "/csconcepts/Memory",
    "/csconcepts/BigO",
    "/csconcepts/DSA",
    "/Goodbye",
  ].map((s, i)=>({page: s, index: i}));
  const [current, setCurrent] =  useState(0)

  useEffect(() => {
      setCurrent(pages.findIndex(x=>x.page===router.route))
  }, [router.route])
  return (
    <div className="navigation">
      {"..."}
      {pages
      .filter((x)=>!(x.index<=current - 5 || x.index >= current + 5))
        .map((page) => {  
        return ( 
            <div key={page.page}
            onClick={() => { 
                setIndex(page.index);
              }}
            >
              <Link href={page.page} key={page.page}>
                <a className={router.route === page.page ? "selected" : ""}>
                  {page.index + 1}
                </a>
              </Link>
            </div> 
        );
      })}
      {"..."}
    </div>
  );
}
