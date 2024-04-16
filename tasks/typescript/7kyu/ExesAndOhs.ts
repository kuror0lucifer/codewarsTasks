// Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Sample Tests:
// import { xo } from './solution';
// import { assert } from "chai";

// describe("xo", function() {
//   it("Basic Tests", function() {
//     assert.strictEqual(xo('xo'),true);
//     assert.strictEqual(xo("xxOo"),true);
//     assert.strictEqual(xo("xxxm"),false);
//     assert.strictEqual(xo("Oo"),false);
//     assert.strictEqual(xo("ooom"),false);
//   });
// });

export function xo(str: string): boolean {
  let os: number = 0,
    xs: number = 0;
  for (let item of str) {
    if (item.toLowerCase() === 'o') os++;
    else if (item.toLowerCase() === 'x') xs++;
  }
  return os === xs;
}
