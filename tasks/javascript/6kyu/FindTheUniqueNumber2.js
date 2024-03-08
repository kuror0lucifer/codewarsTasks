// Find the unique number

// Write a function called findUnique which returns the only unique number from an array.

// All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.

// Example

// Input:

// [ 1, 8, 4, 4, 6, 1, 8 ]
// Expected output:

// 6

// Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(findUnique([1, 8, 4, 4, 6, 1, 8]), 6);
//     assert.strictEqual(findUnique([ 1234567 ]), 1234567);
//     assert.strictEqual(findUnique([ 1, 4, 4, 5, 5, 3, 3, 2, 2 ]), 1);
//     assert.strictEqual(findUnique([ 2, 2, 5, 5, 4, 3, 3, 1, 1 ]), 4);
//     assert.strictEqual(findUnique([ 3, 5, 5, 4, 4, 3, 2, 2, 9 ]), 9);
//   });
// });

function findUnique(numbers) {
  if (numbers.length === 1) return numbers[0];

  numbers.sort((a, b) => a - b);

  if (numbers[0] !== numbers[1]) return numbers[0];
  if (numbers[numbers.length - 1] !== numbers[numbers.length - 2])
    return numbers[numbers.length - 1];

  for (let i = 1; i < numbers.length - 1; i++) {
    if (numbers[i] !== numbers[i - 1] && numbers[i] !== numbers[i + 1])
      return numbers[i];
  }
}
