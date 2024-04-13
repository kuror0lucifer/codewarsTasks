// Ones and Zeros

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// Sample Tests:
// import { assert } from "chai";
// import { binaryArrayToNumber } from "./solution";

// describe("One's and Zero's", () => {
//   it("Example tests", () => {
//       assert.strictEqual(binaryArrayToNumber([0,0,0,1]), 1);
//       assert.strictEqual(binaryArrayToNumber([0,0,1,0]), 2);
//       assert.strictEqual(binaryArrayToNumber([1,1,1,1]), 15);
//       assert.strictEqual(binaryArrayToNumber([0,1,1,0]), 6);
//   });
// });

export function binaryArrayToNumber(arr: number[]): number {
  return parseInt(arr.join(''), 2);
}
