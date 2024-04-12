// Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// Sample Tests:
// import solution = require('./solution');
// import {assert} from "chai";

// describe("solution", function(){
//   it("Basic Tests", function(){
//     assert.equal(solution.positiveSum([1,2,3,4,5]),15);
//     assert.equal(solution.positiveSum([1,-2,3,4,5]),13);
//     assert.equal(solution.positiveSum([]),0);
//     assert.equal(solution.positiveSum([-1,-2,-3,-4,-5]),0);
//     assert.equal(solution.positiveSum([-1,2,3,4,-5]),9);
//   });
// });

export function positiveSum(arr: number[]): number {
  let res: number = 0;
  arr.map(x => (x > 0 ? (res += x) : x));
  return res;
}
