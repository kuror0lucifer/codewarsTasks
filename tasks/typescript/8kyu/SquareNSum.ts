// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Sample Tests:
//  <reference path="/runner/typings/mocha/index.d.ts" />
//  <reference path="/runner/typings/chai/index.d.ts" />
// import solution = require('./solution');
//  import the type of assertion library you wish to use (Chai recommended)
// import {assert} from "chai";

// describe("Sample Test Cases", function(){
//   it("Should return a number", function() {
//     assert.equal(solution.squareSum([1,2]), 5);
//     assert.equal(solution.squareSum([0, 3, 4, 5]), 50);
//     assert.equal(solution.squareSum([]), 0);
//   });
// });

export function squareSum(numbers: number[]): number {
  let res: number = 0;
  numbers.map((x: number) => (res += Math.pow(x, 2)));
  return res;
}
