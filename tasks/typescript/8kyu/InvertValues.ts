// Invert values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// Sample Tests:
// import { assert } from "chai";

// import { invert } from "./solution";

// describe("Invert array values", function() {
//   it("Basic Tests", function(){
//     assert.deepEqual(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
//     assert.deepEqual(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
//     assert.deepEqual(invert([]), []);
//     assert.deepEqual(invert([0]), [-0]);
//   });
// });

export function invert(array: number[]): number[] {
  return array.map((x) => x * -1);
}
