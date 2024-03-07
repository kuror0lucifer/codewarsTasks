// Love vs friendship

// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

// Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(wordsToMarks("attitude"), 100);
//     assert.strictEqual(wordsToMarks("friends"), 75);
//     assert.strictEqual(wordsToMarks("family"), 66);
//     assert.strictEqual(wordsToMarks("selfness"), 99);
//     assert.strictEqual(wordsToMarks("knowledge"), 96);
//   });
// })

function wordsToMarks(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let res = 0;
  string.split("").map((x) => (res += alphabet.indexOf(x) + 1));
  return res;
}
