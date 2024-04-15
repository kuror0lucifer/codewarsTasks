// Sort Numbers

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1, 2, 5, 10, 50]
// solution([]); // should return []

// Sample Tests:
// import solution = require('./solution');
// import {assert} from "chai";

// describe("Sample Test Cases", function(){
//   it("Should return an array", function() {
//     assert.deepEqual(solution.solution([1, 2, 10, 50, 5]), [1,2,5,10,50]);
//     assert.deepEqual(solution.solution([]), []);
//   });
// });

export function solution(nums: number[]): number[] {
  return nums.sort((a, b) => a - b);
}
