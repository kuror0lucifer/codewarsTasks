// Convert a Number to a String!

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// Sample Tests:
// import { numberToString } from './solution';
// import { expect } from "chai";

// describe("numberToString", function() {
//   it("should work correctly", () => {
//     expect(numberToString(67)).to.equal('67');
//   });
// });

export function numberToString(num: number): string {
  return `${num}`;
}
