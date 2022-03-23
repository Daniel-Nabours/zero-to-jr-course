import type { NextPage } from "next";
import Image from "next/image";
import { memo } from "react";
import array from "../../res/array.png";
import trie from "../../res/trie.png"; 
import hash from "../../res/hash.png"; 
import graph from "../../res/graph.png"; 

const Home: NextPage = () => {
  return (
    <div className="content">
      <div className="section">
        <header>Common Data Structures</header>
        <h2>Array</h2>
        <p>
          {`An array is just a sequential store of data. 
            It consists of a collection of cells structured like this:`}
        </p>
        <Image src={array} alt="An array data structure" />
        <p>
          {`Each of these cells can store any amount of data you need, including other arrays. 
        Arrays have a maximum depth of 60 dimensions, although you should never reach anywhere
        near this limit in any sort of real-world scenario.`}
        </p>
        <h2>Tree</h2>
        <p>
          {`A tree is a collection of nodes that contain a blob of data and a pointer to a certain amount of child nodes. 
          Trees are data structures used as an efficient method for storing and/or sorting some form of data.
          Common types of trees include Tries, N-ary Search Trees, and Heaps.`}
        </p>

        <Image src={trie} alt="A tree data structure" /> 
        <h2>Hash map</h2>
        <p>
          {`A hash map is a data structure that mimics the way computers store memory. 
        Each node consists of a piece of data and a unique hash value that acts as an identifier.
        This allows data to be stored, retrieved, and modified in constant time.`}
        </p>
        <Image src={hash} alt="an example of a hash map" />
        <h2>Graph</h2>
        <p>
          {`A graph is a non-linear data structure that consists of a collection of nodes that point to any other amount of nodes. 
        This in effect creates "paths" between the nodes that result in every node having some pathway to any other node.
        A type of graph called a "mesh" is often used in video games for programmatic navigation in a 3d environment.`}
        </p>
        <Image src={graph} alt="an example of a graph structure" /> 
      </div>
    </div>
  );
};

export default memo(Home);
