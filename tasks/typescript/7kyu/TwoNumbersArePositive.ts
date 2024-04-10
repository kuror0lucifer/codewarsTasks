// Two numbers are positive

// Task:

// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:

// two_are_positive(2, 4, -3) == True
// two_are_positive(-4, 6, 8) == True
// two_are_positive(4, -6, 9) == True
// two_are_positive(-4, 6, 0) == False
// two_are_positive(4, 6, 10) == False
// two_are_positive(-14, -3, -4) == False

// Sample Tests:
// import { assert } from "chai";
// import { twoArePositive } from "./solution";

// describe("Tests", () => {
//   it("Example tests", function () {
//     assert.strictEqual(twoArePositive(2, 4, -3), true, '(2, 4, -3)');
//     assert.strictEqual(twoArePositive(-4, 6, 8), true, '(-4, 6, 8)');
//     assert.strictEqual(twoArePositive(4, -6, 9), true, '(4, -6, 9)');
//     assert.strictEqual(twoArePositive(-4, 6, 0), false, '(-4, 6, 0)');
//     assert.strictEqual(twoArePositive(4, 6, 10), false, '(4, 6, 10)');
//     assert.strictEqual(twoArePositive(-14, -3, -4), false, '(-14, -3, -4)');
//   });
// });

export function twoArePositive(a: number, b: number, c: number): boolean {
  let arr: number[] = [a, b, c],
    counter: number = 0;
  arr.map((x) => (x > 0 ? counter++ : x));
  return counter === 2;
}
