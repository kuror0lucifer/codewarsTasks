// Bit Counting

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// Sample Tests:
// // See https://www.chaijs.com for how to use Chai.
// import { assert } from "chai";

// import { countBits } from "./solution";

// // TODO Add your tests here
// describe("example", function() {
//   it("test", function() {
//     assert.equal(countBits(0), 0);
//     assert.equal(countBits(4), 1);
//     assert.equal(countBits(7), 3);
//     assert.equal(countBits(9), 2);
//     assert.equal(countBits(10), 2);
//   });
// });

export function countBits(n: number): number {
  let s: string = n.toString(2);
  return s.replace(/[0]/gi, "").length;
}
