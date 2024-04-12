// Return Negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);  // return -1
// makeNegative(-5); // return -5
// makeNegative(0);  // return 0
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// Sample Tests:
// import {makeNegative} from "./solution";
// import {assert} from "chai";

// describe("makeNegative", function() {
//   it("Sample tests", function() {
//     assert.equal(makeNegative(42), -42);
//   });
// });

export const makeNegative = (num: number): number => {
  return -Math.abs(num);
};
