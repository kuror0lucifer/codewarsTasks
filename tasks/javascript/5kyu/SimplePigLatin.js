// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// Sample Tests:
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
// Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
// });
// });

function pigIt(str) {
  let res = str.split(" ");
  for (let i = 0; i < res.length; i++) {
    const firstLetter = res[i][0];
    const restLetters = res[i].slice(1);
    if (!/[a-zA-Z]/.test(res[i])) continue;
    res[i] = restLetters + firstLetter + "ay";
  }
  return res.join(" ");
}
