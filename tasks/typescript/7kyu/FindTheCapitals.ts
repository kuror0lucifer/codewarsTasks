// Find the capitals

// Instructions

// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)

// "CodEWaRs" --> [0,3,4,6]

// Sample Tests:
// import chai, { assert } from "chai";
// import { capitals } from "./solution";

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(capitals('CodEWaRs'), [0,3,4,6] );
//   });
// });

export function capitals(word: string): number[] {
  let res: number[] = [];
  for (let i: number = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) res.push(i);
  }
  return res;
}
