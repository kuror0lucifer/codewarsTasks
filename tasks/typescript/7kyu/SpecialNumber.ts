// Special Number (Special Numbers Series #5)

// Definition

// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

// Given a number determine if it special number or not .

// Warm-up (Highly recommended)

// Playing With Numbers Series

// Notes

// The number passed will be positive (N > 0) .

// All single-digit numbers within the interval [1:5] are considered as special number.

// Input >> Output Examples

// specialNumber(2) ==> return "Special!!"
// Explanation:

// It's a single-digit number within the interval [1:5] .

// specialNumber(9) ==> return "NOT!!"
// Explanation:

// Although, it's a single-digit number but Outside the interval [1:5] .

// specialNumber(23) ==> return "Special!!"
// Explanation:

// All the number's digits formed from the interval [0:5] digits .

// specialNumber(39) ==> return "NOT!!"
// Explanation:

// Although, there is a digit (3) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .

// specialNumber(59) ==> return "NOT!!"
// Explanation:

// Although, there is a digit (5) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .

// specialNumber(513) ==> return "Special!!"
// specialNumber(709) ==> return "NOT!!"

// Sample Tests:
// import { assert } from "chai";
// import { specialNumber } from "./solution";

// describe("Basic tests", () => {
//   it("Testing for 2", () => assert.strictEqual(specialNumber(2), "Special!!"));
//   it("Testing for 3", () => assert.strictEqual(specialNumber(3), "Special!!"));
//   it("Testing for 6", () => assert.strictEqual(specialNumber(6), "NOT!!"));
//   it("Testing for 9", () => assert.strictEqual(specialNumber(9), "NOT!!"));
//   it("Testing for 11", () => assert.strictEqual(specialNumber(11), "Special!!"));
//   it("Testing for 55", () => assert.strictEqual(specialNumber(55), "Special!!"));
//   it("Testing for 26", () => assert.strictEqual(specialNumber(26), "NOT!!"));
//   it("Testing for 92", () => assert.strictEqual(specialNumber(92), "NOT!!"));
//   it("Testing for 25432", () => assert.strictEqual(specialNumber(25432), "Special!!"));
//   it("Testing for 2783", () => assert.strictEqual(specialNumber(2783), "NOT!!"));
// });

export function specialNumber(n: number) {
  let special: string = '012345',
    answer: string = n.toString();
  for (let item of answer) {
    if (!special.includes(item)) return 'NOT!!';
  }
  return 'Special!!';
}
