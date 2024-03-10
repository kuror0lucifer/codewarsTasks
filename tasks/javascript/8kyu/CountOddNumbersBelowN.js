// Count Odd Numbers below n

// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)

// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

// Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//    it("Testing for fixed tests", () => {
//     assert.strictEqual(oddCount(15), 7, "Oops! Wrong.");
//     assert.strictEqual(oddCount(15023), 7511, "Oops! Wrong.");
//   });
// });

function oddCount(n) {
  return Math.floor(n / 2);
}
