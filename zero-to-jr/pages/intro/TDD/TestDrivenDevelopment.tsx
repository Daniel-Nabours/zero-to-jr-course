import type { NextPage } from "next";
import React, { useEffect } from "react";
import Prism from "prismjs";

const Home: NextPage = () => {
  const test = `describe(“the sum method", ()=>{
	it(“adds the given numbers together”, ()=>{
	  let expected = 3;
	  let actual;
 	  actual = sum(1, 2);
	  expect(actual).toBe(expected);
	});
  });`;
  const code1 = `function sum(a, b) {

 }`;
  const code2 = `function sum(a, b) {
      let firstVal = a
      let secondVal = b
      return firstVal + secondVal
 }`;
  const code3 = `function sum(a, b) {
    return a + b
 }`;
  const highLightCode = (s: string) => {
    return (
      <pre>
        <code className="language-javascript">{s}</code>
      </pre>
    );
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="content">
      <header>Test-Driven Development (TDD)</header>
      <p>
        <span>
          In conventional programming, you tend to write your code first, then
          add tests at the end to ensure your code works. This can result in
          biased test writing that may or may not sufficiently test your
          applications.
        </span>
      </p>
      <p>
        <span>
          In modern web development there is a concept called TDD or Test-Driven
          Development that is intended to fix this issue. The idea is that you
          write your tests first, then write the code to satisfy the tests.
          There are 3 phases:
        </span>
      </p>
      <p>
        <span>
          <span style={{ color: "red" }}>RED</span> - test is initially written
          and fails since no code exists to satisfy it
        </span>
        <br />
        <span>
          <span style={{ color: "green" }}>GREEN</span> - code is written in
          order to pass the test{" "}
        </span>
        <br />
        <span>
          <span style={{ color: "blue" }}>REFACTOR</span> - code is optimized
          and restructured, ensuring it still passes the tests.
        </span>
      </p>
      <p>
        <span>Take a look at the following example:</span>{" "}
        {highLightCode(code1)}
      </p>
      <span>The test looks like this:</span>
      {highLightCode(test)}
      <p>
        <span>
          This code fails since"sum()" does not return a value. The{" "}
          <span style={{ color: "red" }}>RED</span> phase is complete.
        </span>
      </p>
      <span>
        Now for the <span style={{ color: "green" }}>GREEN</span> phase, we
        modify the code to make the test pass:
      </span>
      <p>{highLightCode(code2)}</p>
      <span>
        When we run the test again, the test passes. The code looks really ugly
        and is using unnecessary extra memory space, so for the final step we{" "}
        <span style={{ color: "blue" }}>REFACTOR</span>:
      </span>
      <p>{highLightCode(code3)}</p>
      <span>
        The tests still pass, so we move on to the next task. This is the basis
        of TDD.
      </span>
    </div>
  );
};

export default Home;
