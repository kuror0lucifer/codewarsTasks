// Reversed Words

// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// Sample Tests:
// import solution = require('./solution');
// import {assert} from "chai";

// describe("Sample Test Cases", function(){
//   it("Should return a reversed string", function() {
//     assert.equal(solution.reverseWords("hello world!"), "world! hello");
//     assert.equal(solution.reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda");
//     assert.equal(solution.reverseWords("foobar"), "foobar");
//     assert.equal(solution.reverseWords("kata editor"), "editor kata");
//     assert.equal(solution.reverseWords("row row row your boat"), "boat your row row row");
//   });
// });

export function reverseWords(str: string): string {
  return str.split(' ').reverse().join(' ');
}
