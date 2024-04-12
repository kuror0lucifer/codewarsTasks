// Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

// Sample Tests:
// import {assert} from "chai";
// import {spinWords} from './solution';

// describe("spinWords", () =>{
//   it("should pass some fixed tests", () => {
//     assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
//   });
// });

export function spinWords(words: string): string {
  let wordsArr = words
    .split(" ")
    .map(x => (x.length > 5 ? (x = x.split("").reverse().join("")) : x))
    .join(" ");
  return wordsArr;
}
