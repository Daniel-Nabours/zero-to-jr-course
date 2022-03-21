import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
export default function Navigation({
  setDir,
  pages,
}: {
  setDir: React.Dispatch<React.SetStateAction<boolean>>;
  pages: string[];
}) {
  const router = useRouter();
  const navs = pages.map((s, i) => ({ page: s, index: i }));
  const [current, setCurrent] = useState(0);
  const [numItems, setNumItems] = useState(5);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNumItems(
      Math.round(listRef.current!.getBoundingClientRect().width / 82) //magic number is the width in pixels of the page button
    );
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listRef.current]);

  useEffect(() => {
    setCurrent(navs.findIndex((x) => x.page === router.route));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route]);
  return (
    <div className="navigation">
       
      <div className="navcontent" ref={listRef}>
        {"..."}
        {navs
          .filter(
            (x) =>
              !(
                x.index <= current - ((numItems / 3) + 1) ||
                x.index >= current + (numItems / 3)
              )
          )
          .map((page) => {
            return (
              <div
                key={page.page}
                onClick={() => {
                  setDir(page.index > current);
                  router.push(page.page);
                }}
              >
                <a className={router.route === page.page ? "selected" : ""}>
                  {page.index + 1}
                </a>
              </div>
            );
          })}
        {"..."}
      </div> 
    </div>
  );
}
