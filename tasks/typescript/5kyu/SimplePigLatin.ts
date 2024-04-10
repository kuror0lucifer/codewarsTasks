// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// Sample Tests:
// See https://www.chaijs.com for how to use Chai.
// import { assert } from "chai";

// import { pigIt } from "./solution";

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
//     assert.strictEqual(pigIt('This is my string'),'hisTay siay ymay tringsay')
// });
// });

export const pigIt = (a: string): string => {
  let res: string[] = a.split(" ");
  for (let i: number = 0; i < res.length; i++) {
    if (/[a-z]/i.test(res[i])) {
      res[i] = `${res[i].slice(1)}${res[i][0]}ay`;
    }
  }
  return res.join(" ");
};
