// Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// Sample Tests:
// import {findAverage} from "./solution";
// import {assert} from "chai";

// describe("solution", () => {
//   it('should calculate avg of given numbers',() => {
//     assert.strictEqual(findAverage([1,1,1]), 1);
//   });
// });

export function findAverage(array: number[]): number {
  return !array.length
    ? +false
    : array.reduce((a, b) => a + b, 0) / array.length;
}
