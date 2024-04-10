// Convert a String to a Number!

// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// Sample Tests:
// import { stringToNumber } from "./solution";
// import { assert } from "chai";

// describe("stringToNumber", function() {
//   it("should work for the examples", function() {
//     assert.strictEqual(stringToNumber("1234"),1234);
//     assert.strictEqual(stringToNumber("605"), 605);
//     assert.strictEqual(stringToNumber("1405"),1405);
//     assert.strictEqual(stringToNumber("-7"),  -7);
//   });
// });

export function stringToNumber(str: string): number {
  return +str;
}
