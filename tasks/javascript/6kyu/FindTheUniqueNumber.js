// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Example Tests", () => {
//   it("Tests", () => {
//     assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
//     assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
//     assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
//     assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
//     assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
//     assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);
//   });
// });

function findUniq(arr) {
  let res = arr.sort((a, b) => a - b);
  return res[0] === res[1] ? res[res.length - 1] : res[0];
}
