// Descending Order

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// Sample Tests:
// import { descendingOrder } from './solution';
// import { assert } from "chai";

// describe("descendingOrder", function() {
//   it("should return some sample numbers in descending order", function() {
//     assert.strictEqual(descendingOrder(0), 0);
//     assert.strictEqual(descendingOrder(1), 1);
//     assert.strictEqual(descendingOrder(123456789), 987654321);
//   });
// });

export function descendingOrder(n: number): number {
  let arr: string[] = n.toString().split('');
  arr.sort((a, b) => parseInt(b, 10) - parseInt(a, 10));
  return parseInt(arr.join(''), 10);
}
