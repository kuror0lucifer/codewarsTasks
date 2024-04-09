// Frequency sequence

// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

// Example (s, sep --> Output)

// "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
// "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
// "^^^**$"     , "x" --> "3x3x3x2x2x1"

// Sample Tests:
// import solution = require('./solution');
// import the type of assertion library you wish to use (Chai recommended)
// import {assert} from "chai";

// describe("Sample Test Cases", function(){
//   it("Should return a string", function() {
//     assert.equal(solution.freqSeq("hello world", "-"), "1-1-3-3-2-1-1-2-1-3-1");
//     assert.equal(solution.freqSeq("19999999", ":"), "1:7:7:7:7:7:7:7");
//     assert.equal(solution.freqSeq("^^^**$", "x"), "3x3x3x2x2x1");
//   });
// });

export function freqSeq(str: string, sep: string): string {
  let frequency: { [key: string]: number } = {};

  for (let char of str) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }
  return str
    .split("")
    .map((char) => frequency[char].toString())
    .join(sep);
}
