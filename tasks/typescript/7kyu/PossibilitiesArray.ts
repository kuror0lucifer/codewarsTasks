// Possibilities Array

// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length - 1 (both inclusive).

// Write a function that accepts an integer array and returns true if the array is an array of all possibilities, else false.

// Examples:

// [1,2,0,3] => True
// # Includes all numbers between 0 and a.length - 1 (4 - 1 = 3)

// [0,1,2,2,3] => False
// # Doesn't include all numbers between 0 and a.length - 1 (5 - 1 = 4)

// [0] => True
// # Includes all numbers between 0 and a.length - 1 (1 - 1 = 0).

// Sample Tests:
// import { isAllPossibilities } from './solution';
// import { assert } from "chai";

// describe("Testing isAllPossibilities", function() {
//   function doTest(x: number[], expected: boolean) {
//     const actual = isAllPossibilities(x.slice())
//     assert.strictEqual(actual, expected, `isAllPossibilities(${JSON.stringify(x)})`)
//   }

//   it("Sample tests", function() {
//     const tests: [number[], boolean][] = [
//       [[0,2,19,4,4], false],
//       [[3,2,1,0], true],
//       [[0,1,2,3], true],
//       [[1,2,3,4], false],
//       [[0,2,3], false],
//       [[0], true],
//       [[0,1,2,3,4,5,6,7,8,9], true],
//       [[0,1,3,-2,5,4], false],
//       [[1,-1,2,-2,3,-3,6], false]
//     ];

//     tests.forEach(([x, expected]) => doTest(x, expected));
//   });
// });

export function isAllPossibilities(x: number[]): boolean {
  const n: number = x.length;
  const seen: Set<number> = new Set();
  for (let i = 0; i < n; i++) {
    if (x[i] < 0 || x[i] >= n || seen.has(x[i])) return false;
    seen.add(x[i]);
  }
  return seen.size === n;
}
