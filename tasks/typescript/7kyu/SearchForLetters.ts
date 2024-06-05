// Search for letters

// Create a function which accepts one arbitrary string as an argument, and return a string of length 26.

// The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

// So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.

// For instance:

// "a   **&  cZ"  =>  "10100000000000000000000001"

// Sample Tests:
// // See https://www.chaijs.com for how to use Chai.
// import { assert } from "chai";

// import { change } from "./solution";

// // TODO Add your tests here
// describe("Search for letters",()=>{
//   it("example tests",()=>{
//     assert.strictEqual( change("a **&  bZ"), "11000000000000000000000001" );
//   });
// });

export function change(string: string): string {
  const presence: string[] = new Array(26).fill('0');
  string = string.toLowerCase();
  for (const char of string) {
    if (char >= 'a' && char <= 'z') {
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      presence[index] = '1';
    }
  }
  return presence.join('');
}
