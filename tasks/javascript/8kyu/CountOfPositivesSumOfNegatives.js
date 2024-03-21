// Count of positives / sum of negatives

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Example tests", () => {
//   it("Testing for fixed test 1", () => {
//     let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
//     let actual = countPositivesSumNegatives(testData);
//     let expected = [10, -65];
//     assert.deepEqual(actual, expected);
//   })

//   it("Testing for fixed test 2", () => {
//     let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
//     let actual = countPositivesSumNegatives(testData);
//     let expected = [8, -50];
//     assert.deepEqual(actual, expected);
//   });
// });

function countPositivesSumNegatives(input) {
  if (input === null) return [];
  let pos = 0,
    neg = 0;
  input.map((x) => (x > 0 ? pos++ : (neg += x)));
  return input.length === 0 ? [] : [pos, neg];
}
