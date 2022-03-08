import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    setCurrent(navs.findIndex((x) => x.page === router.route));
  }, [router.route]);
  return (
    <div className="navigation">
      {"..."}
      {navs
        .filter((x) => !(x.index <= current - 5 || x.index >= current + 5))
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
  );
}
