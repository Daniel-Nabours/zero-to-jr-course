import { useEffect } from "react";
import Prism from 'prismjs'

export const usePrism = (s: string, l:string = "javascript") => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
    return (
      <pre aria-label="a block of code">
        <code className={`language-${l}`}>{s}</code>
      </pre>
    );
  };