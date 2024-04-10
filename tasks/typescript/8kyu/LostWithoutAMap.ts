// Beginner - Lost Without a Map

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// Sample Tests:
// import { assert } from "chai";

// import { maps } from "./solution";

// describe("Beginner - Lost Without a Map", () => {
//   it("Fixed tests", () => {
//     assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
//     assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
//     assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
//   });
// });

export function maps(x: number[]): number[] {
  return x.map((el) => el * 2);
}
