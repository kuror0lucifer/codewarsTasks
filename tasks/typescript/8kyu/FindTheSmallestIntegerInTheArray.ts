// Find the smallest integer in the array

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// Sample Tests:
// import {findSmallestInt} from "./solution";
// import {assert} from "chai";

// describe("Smallest Integer Tests", function() {
//   it("Fixed Tests", function() {
//     assert.strictEqual(findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
//     assert.strictEqual(findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
//     assert.strictEqual(findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
//     assert.strictEqual(findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
//     assert.strictEqual(findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');
//   });
// });

export function findSmallestInt(args: number[]): number {
  return args.sort((a, b) => a - b)[0];
}
