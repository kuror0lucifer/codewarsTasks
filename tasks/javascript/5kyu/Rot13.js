// Rot13

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;

// describe("Tests", function() {
//   it("Sample tests", function() {
//     for (const [input, expected] of [["test", "grfg"], ["Test", "Grfg"]]) {
//       assert.strictEqual(rot13(input), expected, `Test failed with messsage = '${input}'`);
//     }
//   });
// });

function rot13(message) {
  let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
}
