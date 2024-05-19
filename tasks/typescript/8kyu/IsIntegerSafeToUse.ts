// Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.

// SafeInteger(9007199254740990) //true
// SafeInteger(-90) //true
// SafeInteger(9007199254740992) //false

// Sample Tests:
// import { SafeInteger } from './solution';
// import { expect } from "chai";

// describe("SafeInteger", function() {
//   it("should return false for 9007199254740992", () => {
//     expect(SafeInteger(9007199254740992)).to.equal(false);
//   });

//   it("should return true for 9007199254740990", () => {
//     expect(SafeInteger(9007199254740990)).to.equal(true);
//   });
// });

export function SafeInteger(n: number): boolean {
  return Number.isSafeInteger(n);
}
