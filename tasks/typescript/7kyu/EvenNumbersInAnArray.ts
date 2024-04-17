// Even numbers in an array

// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// Sample Tests:
// import solution = require('./solution');
// import {assert} from "chai";

// describe("Sample Test Cases", function(){
//   it("Should return an array", function() {
//     assert.deepEqual(solution.evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
//     assert.deepEqual(solution.evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
//     assert.deepEqual(solution.evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);
//   });
// });

export function evenNumbers(array: number[], n: number): number[] {
  return array.filter(n => n % 2 == 0).slice(-n);
}
