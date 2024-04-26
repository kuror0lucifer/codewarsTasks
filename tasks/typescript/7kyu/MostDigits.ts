// Most digits

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// Sample Tests:
// import {Kata} from './solution';
// import {assert} from "chai";

// describe("solution", function() {
//   it("basic tests", function() {
//     assert.strictEqual(Kata.findLongest([1, 10, 100]), 100);
//     assert.strictEqual(Kata.findLongest([9000, 8, 800]), 9000);
//     assert.strictEqual(Kata.findLongest([8, 900, 500]), 900);
//   });
// });

export class Kata {
  static findLongest(array: number[]): number {
    let max: number = 0;
    let maxLength: number = 0;
    for (let item of array) {
      if (item.toString().length > maxLength) {
        max = item;
        maxLength = item.toString().length;
      }
    }
    return max;
  }
}
