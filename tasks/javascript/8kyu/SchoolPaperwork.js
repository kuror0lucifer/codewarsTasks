// Beginner Series #1 School Paperwork

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:

// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

// Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Simple Tests", function(){
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(paperwork(5,5), 25, 'Failed at paperwork(5, 5)');
//     assert.strictEqual(paperwork(5,-5), 0, 'Failed at paperwork(5, -5)');
//     assert.strictEqual(paperwork(-5,-5), 0, 'Failed at paperwork(-5, -5)');
//     assert.strictEqual(paperwork(-5,5), 0, 'Failed at paperwork(-5, 5)');
//     assert.strictEqual(paperwork(5,0), 0, 'Failed at paperwork(5, 0)');
//   });
// });

function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}
