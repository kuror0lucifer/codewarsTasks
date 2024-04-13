// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// Sample Tests:
// import {assert} from 'chai';
// import {findUniq} from './solution';

// describe('findUniq', () => {
//   it('should handle sample cases', () => {
//     assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
//     assert.strictEqual(findUniq([ 0, 0, 0.55, 0, 0 ]), 0.55);
//   });
// });

export function findUniq(arr: number[]): number {
  arr.sort();
  return arr[0] !== arr[1] ? arr[0] : arr[arr.length - 1];
}
