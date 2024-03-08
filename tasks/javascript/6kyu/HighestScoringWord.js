// Highest Scoring Word

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
//     assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano');
//     assert.strictEqual(high('take me to semynak'), 'semynak');
//     assert.strictEqual(high('aa b'), 'aa');
//     assert.strictEqual(high('b aa'), 'b');
//     assert.strictEqual(high('bb d'), 'bb');
//     assert.strictEqual(high('d bb'), 'd');
//     assert.strictEqual(high('aaa b'), 'aaa');
//   })
// });

function high(x) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let max = 0;
  let maxScoreWord = "";
  x = x.split(" ");

  for (let i = 0; i < x.length; i++) {
    let sum = 0;
    for (let j = 0; j < x[i].length; j++) {
      sum += alphabet.indexOf(x[i][j]) + 1;
    }
    if (sum > max) {
      max = sum;
      maxScoreWord = x[i];
    }
  }
  return maxScoreWord;
}
