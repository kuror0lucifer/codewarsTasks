// Evens and Odds

// This kata is about converting numbers to their binary or hexadecimal representation:

// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.
// Numbers will be positive. The hexadecimal string should be lowercased.

// Sample Tests:
// import {evensAndOdds} from "./solution";
// import {assert} from "chai";

// describe("Solution", function() {
//   it("Basic Tests", function() {
//     assert.strictEqual(evensAndOdds(2),'10')
//     assert.strictEqual(evensAndOdds(0),'0')
//     assert.strictEqual(evensAndOdds(13),'d')
//     assert.strictEqual(evensAndOdds(47),'2f')
//     assert.strictEqual(evensAndOdds(12800),'11001000000000')
//     assert.strictEqual(evensAndOdds(8172381723),'1e71ca61b')
//   });
// });

export function evensAndOdds(n: number): string {
  return n % 2 ? n.toString(16) : n.toString(2);
}
