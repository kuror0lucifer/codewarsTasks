// Maximum Product

// Task

// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes

// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples

// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:

// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
// Explanation:

// Max product obtained from multiplying 5 * 10  =  50 .

// adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
// Explanation:

// The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.

// Sample Tests:
// import { assert } from "chai";
// import { adjacentElementsProduct } from "./solution";

// describe("Fixed tests", function() {
//   it("Testing for [5, 8]", () => assert.strictEqual(adjacentElementsProduct([5, 8]), 40));
//   it("Testing for [1, 2, 3]", () => assert.strictEqual(adjacentElementsProduct([1, 2, 3]), 6));
//   it("Testing for [1, 5, 10, 9]", () => assert.strictEqual(adjacentElementsProduct([1, 5, 10, 9]), 90));
//   it("Testing for [4, 12, 3, 1, 5]", () => assert.strictEqual(adjacentElementsProduct([4, 12, 3, 1, 5]), 48));
//   it("Testing for [5, 1, 2, 3, 1, 4]", () => assert.strictEqual(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6));
//   it("Testing for [3, 6, -2, -5, 7, 3]", () => assert.strictEqual(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21));
//   it("Testing for [9, 5, 10, 2, 24, -1, -48]", () =>
//     assert.strictEqual(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50));
//   it("Testing for [5, 6, -4, 2, 3, 2, -23]", () =>
//     assert.strictEqual(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30));
//   it("Testing for [-23, 4, -5, 99, -27, 329, -2, 7, -921]", () =>
//     assert.strictEqual(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]), -14));
//   it("Testing for [5, 1, 2, 3, 1, 4]", () => assert.strictEqual(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6));
//   it("Testing for [1, 0, 1, 0, 1000]", () => assert.strictEqual(adjacentElementsProduct([1, 0, 1, 0, 1000]), 0));
//   it("Testing for [1, 2, 3, 0]", () => assert.strictEqual(adjacentElementsProduct([1, 2, 3, 0]), 6));
// });

export function adjacentElementsProduct(arr: number[]): number {
  let max: number = -Infinity;
  for (let i: number = 0; i < arr.length - 1; i++) {
    if (arr[i] * arr[i + 1] > max) max = arr[i] * arr[i + 1];
  }
  return max;
}
