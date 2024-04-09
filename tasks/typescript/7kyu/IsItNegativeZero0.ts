// Is It Negative Zero (-0)?

// There exist two zeroes: +0 (or just 0) and -0.

// Write a function that returns true if the input number is -0 and false otherwise (True and False for Python).

// In JavaScript / TypeScript / Coffeescript the input will be a number.

// In Python / Java / C / NASM / Haskell / the input will be a float.

// Sample Tests:
// import {isNegativeZero} from './solution'
// import {assert} from "chai";

// describe("Tests", function() {
//   it("should return true for -0", function() {
//     assert.strictEqual(isNegativeZero(-0), true);
//   });

//   it("should return false for non-negative-zero numbers", function() {
//     assert.strictEqual(isNegativeZero(-Infinity), false);
//     assert.strictEqual(isNegativeZero(-5), false);
//     assert.strictEqual(isNegativeZero(-4), false);
//     assert.strictEqual(isNegativeZero(-3), false);
//     assert.strictEqual(isNegativeZero(-2), false);
//     assert.strictEqual(isNegativeZero(-1), false);
//     assert.strictEqual(isNegativeZero(-Number.MIN_VALUE), false);
//     assert.strictEqual(isNegativeZero(0), false);
//     assert.strictEqual(isNegativeZero(Number.MIN_VALUE), false);
//     assert.strictEqual(isNegativeZero(1), false);
//     assert.strictEqual(isNegativeZero(2), false);
//     assert.strictEqual(isNegativeZero(3), false);
//     assert.strictEqual(isNegativeZero(4), false);
//     assert.strictEqual(isNegativeZero(5), false);
//     assert.strictEqual(isNegativeZero(Infinity), false);
//   });
// });

export function isNegativeZero(n: number): boolean {
  return n === 0 && 1 / n === -Infinity;
}
