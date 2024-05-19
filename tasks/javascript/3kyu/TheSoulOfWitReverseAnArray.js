// No time for stories. Reverse an array, return the result. Do whatever you want with the original array. Don't use Array.prototype.reverse.

// You have 30 bytes to spare.

// Example: [1, 2, 3] → [3, 2, 1]

// And this time you won't be able to do the thing from that kata.

// require isn't allowed as well.

// Sample Tests:
// const {assert, config, util: {inspect}} = require('chai');
// config.truncateThreshold = 0;

// const codeSize = require('fs').statSync('/workspace/solution.txt').size;
// console.log('<LOG::Code size>', codeSize);

// describe('reverse', () => {
//   it('should reverse arrays', () => {
//     assert.deepEqual(reverse([1, 2, 3]), [3, 2, 1]);
//     assert.deepEqual(reverse([...'01234567890123456789']), [...'98765432109876543210']);
//     assert.deepEqual(reverse([0, undefined]), [undefined, 0]);
//   });
// });

// describe('Code', () => {
//   it('should be short enough', () => {
//     const codeSize = require('fs').statSync('/workspace/solution.txt').size;
//     assert(codeSize <= 30, 'Code is too long');
//   });
//   it('should not use `require`', () => {
//     const code = module.require('fs').readFileSync('/workspace/solution.txt');
//     assert(!code.includes('require'), 'Code uses `require`');
//   });
// });

reverse = a => a.map(a.pop, [...a]);
