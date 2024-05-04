// String transformer

// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

// Sample Tests:
// import { assert } from "chai";
// import { stringTransformer } from "./solution";

// describe("Fixed tests", function() {
//   it("Testing for 'Example Input'", () => assert.strictEqual(stringTransformer('Example Input'), 'iNPUT eXAMPLE'));
//   it("Testing for ''", () => assert.strictEqual(stringTransformer(''), ''));
//   it("Testing for 'To be OR not to be That is the Question'", () => assert.strictEqual(stringTransformer('To be OR not to be That is the Question'), 'qUESTION THE IS tHAT BE TO NOT or BE tO'));
//   it("Testing for 'You Know When  THAT  Hotline Bling'", () => assert.strictEqual(stringTransformer('You Know When  THAT  Hotline Bling'), 'bLING hOTLINE  that  wHEN kNOW yOU'));
//   it("Testing for ' A b C d E f G '", () => assert.strictEqual(stringTransformer(' A b C d E f G '), ' g F e D c B a '));
// });

export function stringTransformer(str: string) {
  return str
    .split(' ')
    .reverse()
    .join(' ')
    .split('')
    .map(x => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
    .join('');
}
