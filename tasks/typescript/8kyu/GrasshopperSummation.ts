// Grasshopper - Summation

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// Sample Tests:
// import {summation} from "./solution";
// import {assert} from "chai";

// describe('summation', () => {
//   it('basic tests', () => {
//     assert.equal(summation(1), 1)
//     assert.equal(summation(8), 36)
//   })
// })

export const summation = (num: number) => {
  let res: number = 1;
  for (let i: number = res + 1; i <= num; i++) {
    res += i;
  }
  return res;
};
