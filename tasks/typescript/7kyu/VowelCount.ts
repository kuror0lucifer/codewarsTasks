// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Sample Tests:
// import solution = require('./solution');
// import {assert} from "chai";

// describe("getCount", function(){
//     it ("should pass a sample test", function(){
//         assert.strictEqual(solution.Kata.getCount("abracadabra"), 5)
//     });
// });

export class Kata {
  static getCount(str: string): number {
    let newStr: string = str.replace(/[aeiou]/gi, "");
    return str.length - newStr.length;
  }
}
