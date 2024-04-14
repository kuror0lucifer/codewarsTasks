// Reverse words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// Sample Tests:
// import solution = require('./solution');
// import {assert} from "chai";

// describe("Sample Test Cases", function(){
//   it("Should return a proper value", function() {
//     assert.equal(solution.reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
//     assert.equal(solution.reverseWords('apple'), 'elppa');
//     assert.equal(solution.reverseWords('a b c d'), 'a b c d');
//     assert.equal(solution.reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
//   });
// });

export function reverseWords(str: string): string {
  return str
    .split(' ')
    .map(x => (x = x.split('').reverse().join('')))
    .join(' ');
}
