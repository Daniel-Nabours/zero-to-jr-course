import { useEffect } from "react";
import Prism from 'prismjs'

export const usePrism = (s: string) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
    return (
      <pre aria-label="a block of code">
        <code className="language-javascript">{s}</code>
      </pre>
    );
  };