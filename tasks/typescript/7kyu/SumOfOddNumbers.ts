// Sum of odd numbers

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// Sample Tests:
// import { assert } from "chai";
// import { rowSumOddNumbers } from "./solution";

// describe("basic tests", function() {
//   it("Testing for 1", () => assert.strictEqual(rowSumOddNumbers(1), 1));
//   it("Testing for 2", () => assert.strictEqual(rowSumOddNumbers(2), 8));
//   it("Testing for 13", () => assert.strictEqual(rowSumOddNumbers(13), 2197));
//   it("Testing for 19", () => assert.strictEqual(rowSumOddNumbers(19), 6859));
//   it("Testing for 41", () => assert.strictEqual(rowSumOddNumbers(41), 68921));
//   it("Testing for 42", () => assert.strictEqual(rowSumOddNumbers(42), 74088));
//   it("Testing for 74", () => assert.strictEqual(rowSumOddNumbers(74), 405224));
//   it("Testing for 86", () => assert.strictEqual(rowSumOddNumbers(86), 636056));
//   it("Testing for 93", () => assert.strictEqual(rowSumOddNumbers(93), 804357));
//   it("Testing for 101", () => assert.strictEqual(rowSumOddNumbers(101), 1030301));
// });

export function rowSumOddNumbers(n: number): number {
  return n ** 3;
}
