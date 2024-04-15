// Detect Pangram

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// Sample Tests:
// import { assert } from "chai";

// import { isPangram } from "./solution";

// describe("example", function() {
//   it("test", function() {
//     assert.strictEqual(isPangram("The quick brown fox jumps over the lazy dog."), true);
//     assert.strictEqual(isPangram("This is not a pangram."), false);
//   });
// });

export const isPangram = (phrase: string): boolean => {
  let alphabet: string = 'abcdefghijklmnopqrstuvwxyz',
    arr: string[] = [],
    phraseSplit: string[] = phrase.toLowerCase().replace(' ', '').split('');
  phraseSplit.map(x =>
    !arr.includes(x) && /[a-z]/g.test(x) ? arr.push(x) : x
  );
  return alphabet.length === arr.length;
};
