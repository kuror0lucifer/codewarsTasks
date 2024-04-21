// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

// Sample Tests:
// import { assert } from "chai";
// import { towerBuilder } from "./solution";

// describe("towerBuilder", function(){
//   it("Basic Test", function() {
//     assert.deepEqual(towerBuilder(1), ["*"]);
//     assert.deepEqual(towerBuilder(2), [" * ","***"]);
//     assert.deepEqual(towerBuilder(3), ["  *  "," *** ","*****"]);
//   })
// });

export const towerBuilder = (nFloors: number): string[] => {
  let stars: string = '',
    space: string = '',
    ans: string[] = [];
  for (let i: number = 1; i <= nFloors; i++) {
    space = ' '.repeat(nFloors - i);
    stars = '*'.repeat(i * 2 - 1);
    ans.push(`${space}${stars}${space}`);
  }
  return ans;
};
