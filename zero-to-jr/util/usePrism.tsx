import { useEffect } from "react";
import Prism from 'prismjs'

export const usePrism = (s: string, l:string = "javascript") => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handlePropogate = (e:UIEvent)  => { 
    e.preventDefault();
    e.cancelBubble = true
  }

    return (
  //@ts-ignore 
      <pre onScroll={handlePropogate}  aria-label="a block of code">
        <code className={`language-${l}`}>{s}</code>
      </pre>
    );
  };