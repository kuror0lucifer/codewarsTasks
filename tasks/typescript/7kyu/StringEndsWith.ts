// String ends with?

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// Sample Tests:
// import solution = require('./solution');
// import {assert} from "chai";

// describe("Sample Test Cases", function(){
//   it("Should return true or false", function() {
//     assert.equal(solution.solution('abcde', 'cde'), true);
//     assert.equal(solution.solution('abcde', 'abc'), false);
//     assert.equal(solution.solution('abc', ''), true);
//   });
// });

export function solution(str: string, ending: string): boolean {
  return str.endsWith(ending);
}
