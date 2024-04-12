// MakeUpperCase

// Write a function which converts the input string to uppercase.

// Sample Tests:
// import { assert } from "chai";

// import { makeUpperCase } from "./solution";

// describe("MakeUpperCase", () => {
//   it("Fixed tests", () => {
//     assert.strictEqual(makeUpperCase("hello"), "HELLO");
//     assert.strictEqual(makeUpperCase("hello world"), "HELLO WORLD");
//     assert.strictEqual(makeUpperCase("hello world !"), "HELLO WORLD !");
//     assert.strictEqual(makeUpperCase("heLlO wORLd !"), "HELLO WORLD !");
//     assert.strictEqual(makeUpperCase("1,2,3 hello world!"), "1,2,3 HELLO WORLD!");
//   });
// });

export function makeUpperCase(str: string): string {
  return str.toUpperCase();
}
