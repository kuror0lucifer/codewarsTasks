// Flatten and sort an array

// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Sample Tests:
// // See https://www.chaijs.com for how to use Chai.
// import { expect } from "chai";
// import {flattenAndSort} from "./solution";

// describe("flattenAndSort()", function() {
//   it("should pass sample tests", function() {
//     expect(flattenAndSort([])).to.deep.equal([]);
//     expect(flattenAndSort([[], []])).to.deep.equal([]);
//     expect(flattenAndSort([[], [1]])).to.deep.equal([1]);
//     expect(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//     expect(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])).to.deep.equal([1, 2, 3, 4, 5, 6, 100]);

//     // TODO Add your tests here
//   });
// });

export function flattenAndSort(inputArray: number[][]): number[] {
  return inputArray.flat().sort((a, b) => a - b);
}
