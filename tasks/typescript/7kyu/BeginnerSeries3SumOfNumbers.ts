// Beginner Series #3 Sum of Numbers

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

// Sample Tests:
// import { getSum } from './solution';
// import { assert } from "chai";

// describe("getSum", function(){
//   it("Sample Tests", function() {
//     assert.strictEqual(getSum(0,-1),-1);
//     assert.strictEqual(getSum(0,1),1);
//   });
// });

export function getSum(a: number, b: number): number {
  let res: number = 0;
  for (let i: number = Math.min(a, b); i <= Math.max(a, b); i++) {
    res += i;
  }
  return res;
}
