import type { NextPage } from "next";
import { memo } from "react";
import { usePrism } from "../../util/usePrism";

const Home: NextPage = () => {
  const linear = usePrism(`function spam(list: string[]) {
    list.forEach(value=>{
      console.log(value)
    })
  }`);
  const square = usePrism(`function spam(list: string[][]) {
    list.forEach(i=>{
      list.forEach(j=>{
        console.log(i, j)
      })
    })
  }`);
  return (
    <div className="content">
      <div className="section">
        <header>Big O Notation</header>
        <p>
          {` According to wikipedia, Big O Notation is a mathematical notation that
          describes the limiting behavior of a function when the argument tends
          towards a particular value or infinity.`}
        </p>
        <p>
          {`In computer science, this is often used to describe either the runtime
          of a function, or the amount of memory space it requires to execute
          agnostic of input size.`}
        </p>
        <p>{`Let's take a look at the following function in TypeScript:`}</p>
        {linear}
        <p>
          {`This function runs in`}
          <b> O(n) </b>
          {`worst-case runtime where n is the length of the input list. This makes
          sense because it has to loop through every item in that list no matter
          how long the list is.`}
        </p>
        <p>
          {`Now what if our input array had two dimensions and our function looked
          like this instead?`}
        </p>
        {square}
        <p>
          {`This function runs in`} <b>(n^2)</b> {`worst-case runtime, since now we
          have to loop through every item in the list`}
          <i>{` for every item in the list.`}</i>
        </p>
        <p>
         {` The same method can be used to explain the amount of memory that is
          needed for a function to execute. Using these methods, we can describe
          the performance of the code we write and easily detect where that
          performance is lacking.`}
        </p>
      </div>
    </div>
  );
};

export default memo(Home);
