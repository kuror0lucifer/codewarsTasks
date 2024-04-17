// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// Sample Tests:
// import solution = require('./solution');
// import {assert} from "chai";

// describe("Sample Test Cases", function(){
//   it("Should return the length of the shortest word(s)", function() {
//     assert.equal(solution.findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//     assert.equal(solution.findShort("turns out random test cases are easier than writing out basic ones"), 3);
//     assert.equal(solution.findShort("lets talk about javascript the best language"), 3);
//     assert.equal(solution.findShort("i want to travel the world writing code one day"), 1);
//     assert.equal(solution.findShort("Lets all go on holiday somewhere very cold"), 2);
//     assert.equal(solution.findShort("Let's travel abroad shall we"), 2);
//   });
// });

export function findShort(s: string): number {
  return s.split(' ').sort((a, b) => a.length - b.length)[0].length;
}
