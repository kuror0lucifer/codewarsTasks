// Find the next perfect square!

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

// Examples ( Input --> Output )

// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

// Sample Tests:
// import { assert } from "chai";
// import { findNextSquare } from "./solution";

// describe("findNextSquare", function() {
//   it("should return the next square for perfect squares", function() {
//     assert.equal(findNextSquare(121), 144, "Wrong output for 121");
//     assert.equal(findNextSquare(625), 676, "Wrong output for 625");
//     assert.equal(findNextSquare(319225), 320356, "Wrong output for 319225");
//     assert.equal(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
//   });
  
//   it("should return -1 for numbers which aren't perfect squares", function() {
//     assert.equal(findNextSquare(155), -1, "Wrong output for 155");
//     assert.equal(findNextSquare(342786627), -1, "Wrong output for 342786627");
//   });
// });

export function findNextSquare(sq:number):number {
    if (Math.sqrt(sq) % 1 > 0) return -1
    while (Math.sqrt(sq + 1) % 1 > 0) { 
    sq++
    }
    return sq + 1
  }